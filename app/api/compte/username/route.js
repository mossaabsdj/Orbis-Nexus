import { PrismaClient } from "@/generated/prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Adjust path to your NextAuth config
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export async function PUT(req) {
  try {
    // Get the session to ensure user is authenticated
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const body = await req.json();
    const { oldUsername, newUsername } = body;

    if (!oldUsername || !newUsername) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    // Validate username length
    if (newUsername.length < 3) {
      return new Response(
        JSON.stringify({ error: "Username must be at least 3 characters" }),
        { status: 400 }
      );
    }

    // Verify the user is updating their own username
    if (session.user.Username !== oldUsername) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 403,
      });
    }

    // Check if new username already exists
    const existing = await prisma.compte.findUnique({
      where: { Username: newUsername },
    });

    if (existing) {
      return new Response(JSON.stringify({ error: "Username already taken" }), {
        status: 400,
      });
    }

    // Update username
    const updatedUser = await prisma.compte.update({
      where: { Username: oldUsername },
      data: { Username: newUsername },
    });

    return new Response(
      JSON.stringify({
        message: "Username updated successfully",
        user: {
          Username: updatedUser.Username,
          // Add other relevant fields you want to return
        },
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Username update error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
