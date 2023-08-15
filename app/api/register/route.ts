import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

const SALT_OR_ROUNDS = 12;

export async function POST(request: Request) {
  const body = await request.json();

  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, SALT_OR_ROUNDS);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
