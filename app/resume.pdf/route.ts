import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function GET(request: NextRequest) {
  return NextResponse.redirect(
    "https://blobs.vusercontent.net/blob/resume-qmUfNlvohSBYBE9yejG18keX4WaxQt.pdf",
    { status: 302 },
  )
}
