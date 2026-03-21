import { NextResponse } from "next/server"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const res = await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${id}&cc=ar&l=spanish`
  )

  const data = await res.json()

  return NextResponse.json(data[id]?.data ?? null)
  return res.ok ? res.json() : null
}