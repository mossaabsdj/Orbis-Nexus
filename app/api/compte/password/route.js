import { PrismaClient } from "@/generated/prisma/client";

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export async function PUT(req) {
  try {
    const body = await req.json();
    const { Username, password } = body;

    if (!Username || !password) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    // Update password (plain text)
    await prisma.compte.update({
      where: { Username },
      data: { Password: password },
    });

    return new Response(
      JSON.stringify({ message: "Password updated successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
