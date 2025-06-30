import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function GET(request: NextRequest) {
  return NextResponse.redirect(
    "https://jufluwufipzvoxfa.public.blob.vercel-storage.com/resume-P3dOpftI7tMhBEtHkxpdoKWVEjBtJK.pdf",
    { status: 302 },
  )
}
