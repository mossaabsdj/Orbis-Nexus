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
        name: body.name,
        category: body.category || null, // Brand / Marque
        year: body.year ? parseInt(body.year) : null,
        price: body.price ? parseFloat(body.price) : 0,
        power: body.power || null,
        fuel: body.fuel || null,
        speed: body.speed || null,
        transmission: body.transmission || null,
        seats: body.seats ? parseInt(body.seats) : null,
        mileage: body.mileage ? parseFloat(body.mileage) : null,
        fuelCapacity: body.fuelCapacity ? parseFloat(body.fuelCapacity) : null,
        description: body.description || null,
        image: body.image || null,
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
export async function DELETE(req) {
  const body = await req.json();
  const id = Number(body.id);

  console.log("Deleting product with ID:", id);

  await prisma.product.delete({
    where: { id },
  });

  return Response.json({ success: true });
}
export async function PUT(req) {
  const body = await req.json();
  const id = Number(body.id);

  if (!id) {
    return Response.json({ error: "Missing ID" }, { status: 400 });
  }

  const updatedProduct = await prisma.product.update({
    where: { id },
    data: {
      name: body.name,
      category: body.category || null, // Brand / Marque
      year: body.year ? parseInt(body.year) : null,
      price: body.price ? parseFloat(body.price) : 0,
      power: body.power || null,
      fuel: body.fuel || null,
      speed: body.speed || null,
      transmission: body.transmission || null,
      seats: body.seats ? parseInt(body.seats) : null,
      mileage: body.mileage ? parseFloat(body.mileage) : null,
      fuelCapacity: body.fuelCapacity ? parseFloat(body.fuelCapacity) : null,
      description: body.description || null,
      image: body.image || null,
      createdAt: body.createdAt ? new Date(body.createdAt) : undefined,
    },
  });

  return Response.json({ success: true, product: updatedProduct });
}
