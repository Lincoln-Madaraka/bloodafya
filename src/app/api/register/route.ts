// src/app/api/register/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(req: Request) {
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
  } = await req.json()

  // Sign up with Supabase Auth
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  })

  if (signUpError) {
    return NextResponse.json({ message: signUpError.message }, { status: 400 })
  }

  const userId = signUpData.user?.id
  if (!userId) {
    return NextResponse.json({ message: 'User created but ID missing' }, { status: 500 })
  }

  // Insert extra profile info into your Supabase `users` table
  const { error: insertError } = await supabase.from('users').insert([
    {
      id: userId, // assumes your `users` table uses `auth.users.id` as foreign key
      full_name: fullName,
      phone,
      dob,
      gender,
      location,
      blood_type: bloodType,
      is_donor: isDonor,
      medical_conditions: medicalConditions,
    },
  ])

  if (insertError) {
    return NextResponse.json({ message: insertError.message }, { status: 400 })
  }

  return NextResponse.json({ message: 'User registered successfully' }, { status: 201 })
}
