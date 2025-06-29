export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold">Rohini Pandhi</h1>
      <p className="text-center max-w-prose">
        Welcome! You can grab my resume at{" "}
        <a className="text-indigo-600 underline" href="/resume.pdf">
          /resume.pdf
        </a>
        .
      </p>
    </main>
  )
}
