import { PrismaClient } from "@/generated/prisma/client";

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// GET: Get all products with their farms and emballages
export async function GET() {
  try {
    const products = await prisma.product.findMany({});
    return Response.json(products);
  } catch (error) {
    console.error("GET error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// POST: Create a new product with optional emballages
export async function POST(req) {
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: {
        title: body.title,
        desc: body.desc,
        prix: parseFloat(body.prix),
        emballage: body.emballage,
        image: body.image,
      },
    });

    return Response.json(product);
  } catch (error) {
    console.error("POST error:", error);
    return new Response(JSON.stringify({ error: "Failed to create product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
