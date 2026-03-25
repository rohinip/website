import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function GET(request: NextRequest) {
  return NextResponse.redirect(
    "https://blobs.vusercontent.net/blob/resume-KJ2md10D9hW5DdDzb6LOQUqxGHf8bT.pdf",
    { status: 302 },
  )
}
