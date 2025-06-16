import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma'; // path based on your prisma output
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      password,
      dob,
      gender,
      location,
      bloodType,
      isDonor,
      medicalConditions,
    } = body;

    // Basic validation
    if (!fullName || !email || !phone || !password || !dob || !location) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check for duplicate email or phone
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { phone: phone },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Email or phone already in use' }, { status: 409 });
    }

    // Save user
    const newUser = await prisma.user.create({
      data: {
        fullName: fullName,
        email,
        phone,
        password, // In real use, hash with bcrypt
        dob: new Date(dob),
        gender,
        location,
        bloodType: bloodType,
        isDonor: isDonor === 'Yes',
        medicalConditions: medicalConditions || '',
      },
    });

    return NextResponse.json({ message: 'User registered', user: newUser });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
