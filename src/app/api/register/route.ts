// File: src/app/api/register/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const {
      fullName,
      email,
      password,
      phone,
      dob,
      gender,
      location,
      bloodType,
      isDonor,
      medicalConditions,
    } = await req.json();

    // Basic validation
    if (!fullName || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save to DB
    const newUser = await prisma.users.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        phone,
        dob: new Date(dob),
        gender,
        location,
        bloodType,
        isDonor,
        medicalConditions,
      },
    });

    return NextResponse.json({ message: 'User registered successfully', user: newUser }, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message || 'Something went wrong' }, { status: 500 });
  }
}
