import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function GET(request: NextRequest) {
  return NextResponse.redirect(
    "https://jufluwufipzvoxfa.public.blob.vercel-storage.com/resume-03012025-TmW2tBUGVSXwERhw8EaoGIrmcwrHdO.pdf",
    { status: 302 },
  )
}
