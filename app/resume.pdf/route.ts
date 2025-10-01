import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function GET(request: NextRequest) {
  return NextResponse.redirect(
    "https://jufluwufipzvoxfa.public.blob.vercel-storage.com/resume-0RdbYR1sx2bC5EDvoazrzF8wmza7RG",
    { status: 302 },
  )
}
