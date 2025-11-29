import { PrismaClient } from "@/generated/prisma/client";

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const product = await prisma.product.findUnique({
    where: { id: Number(params.id) },
  });
  return Response.json(product);
}
export async function PUT(request, { params }) {
  const id = Number(params.id);
  const body = await request.json();

  try {
    // 1. Update the product fields
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        title: body.title,
        desc: body.desc,
        prix: parseFloat(body.prix),
        image: body.image,
        Date: new Date(body.Date).toISOString(),
      },
    });

    return Response.json(updatedProduct);
  } catch (error) {
    console.error("PUT Error:", error);
    return new Response("Could not update product", { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const id = Number(params.id);
  // First, delete all commandes related to this product

  // Then, delete the product itself
  await prisma.product.delete({
    where: { id },
  });
  return Response.json({ success: true });
}
