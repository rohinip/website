import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Newspaper, Mic2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Add podcast data
  const podcasts = [
    {
      title: "Product, Platforms, and the Path to Venture",
      host: "The Council",
      url: "https://youtu.be/igXvo4F9U2o?feature=shared",
      date: "Jun 2025",
    },
    {
      title: "How to build your product team from scratch",
      host: "Lenny's Podcast",
      url: "https://www.lennysnewsletter.com/p/how-to-build-your-product-team-from-scratch-rohini-pandhi",
      date: "Jan 2025",
    },
    {
      title: "Building Successful Products and PM Careers in Fintech",
      host: "Operator's Blog",
      url: "https://operator.blog/building-successful-products-and-pm-careers-in-fintech-learnings-from-square-and-mercury/",
      date: "May 2024",
    },
    {
      title: "Product Management in Fintech",
      host: "Product Love",
      url: "https://www.pendo.io/pendo-blog/product-love-podcast-rohini-pandhi-of-square/",
      date: "Jun 2018",
    },
    {
      title: "Spotting and Solving Customer Problems",
      host: "Inside Intercom",
      url: "https://www.intercom.com/blog/podcasts/square-rohini-pandhi-on-spotting-and-solving-customer-problems/",
      date: "May 2018",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-teal-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className="text-slate-800">Rohini</span> <span className="text-teal-600">Pandhi</span>
                  </h1>
                  <p className="mt-4 text-lg text-slate-600 max-w-[600px]">
                    Product Leader • Startup Advisor • Investor
                  </p>
                </div>
                <p className="text-slate-700 max-w-[600px]">
                  Building products for fintechs and beyond. Formerly at{" "}
                  <Link href="https://mercury.com/" className="text-teal-600 hover:text-teal-700">
                    Mercury
                  </Link>{" "}
                  and{" "}
                  <Link href="https://block.xyz/" className="text-teal-600 hover:text-teal-700">
                    Block
                  </Link>
                  . Supporting founders through{" "}
                  <Link href="https://www.transparentcollective.com/#/" className="text-teal-600 hover:text-teal-700">
                    Transparent Collective
                  </Link>
                  .{" "}
                  <Link href="https://angel.co/p/rohinip" className="text-teal-600 hover:text-teal-700">
                    Investing
                  </Link>{" "}
                  in the next generation of startups.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="mailto:rohinipandhi@gmail.com">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Get in Touch</Button>
                  </Link>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://twitter.com/rohinip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/rohinipandhi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://medium.com/@rohinip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    <Newspaper className="h-5 w-5" />
                    <span className="sr-only">Medium</span>
                  </Link>
                  <Link href="#podcasts" className="text-slate-600 hover:text-teal-600 transition-colors">
                    <Mic2 className="h-5 w-5" />
                    <span className="sr-only">Podcasts</span>
                  </Link>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF109827-Edit-Cropped.jpg-YWdneUdOBSQH9Im1Mhf5Nk54iMy2yn.jpeg"
                    alt="Rohini Pandhi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 320px"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <div className="mt-1 w-16 h-1 bg-teal-600 rounded-full"></div>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-700 mb-6">
                I'm a product leader with over a decade of experience building and scaling fintech products. My focus
                has always been on creating solutions that genuinely improve how people manage their financial lives.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                As a partner at Transparent Collective, I work with underrepresented founders to build sustainable,
                high-growth companies. I also advise early-stage startups on product strategy, go-to-market execution,
                and fundraising, partnering with founders through the critical early stages of company building.
              </p>
              <p className="text-lg text-slate-700">
                I have an active interest in emerging technologies and industry trends, and regularly share insights
                through various podcast appearances featured below. I welcome opportunities to connect with other
                product leaders, founders, and investors. Please feel free to reach out!
              </p>
            </div>
          </div>
        </section>

        {/* New Podcasts Section */}
        <section id="podcasts" className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Podcasts</h2>
              <div className="mt-1 w-16 h-1 bg-teal-600 rounded-full"></div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {podcasts.map((podcast, index) => (
                <Link
                  key={index}
                  href={podcast.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-white rounded-lg shadow-sm border transition-all hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-lg overflow-hidden flex-shrink-0">
                      {podcast.host === "The Council" ? (
                        <Image
                          src="/first-builders.jpg"
                          alt="The Council"
                          width={40}
                          height={40}
                          className="rounded-lg"
                        />
                      ) : podcast.host === "Lenny's Podcast" ? (
                        <Image
                          src="https://substackcdn.com/image/fetch/w_80,h_80,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F441213db-4824-4e48-9d28-a3a18952cbfc_592x592.png"
                          alt="Lenny's Podcast"
                          width={40}
                          height={40}
                          className="rounded-lg"
                        />
                      ) : podcast.host === "Product Love" ? (
                        <Image
                          src="https://www.pendo.io/wp-content/uploads/2022/12/favicon.png"
                          alt="Product Love Podcast"
                          width={40}
                          height={40}
                          className="rounded-lg p-1"
                        />
                      ) : podcast.host === "Inside Intercom" ? (
                        <Image
                          src="https://blog.intercomassets.com/blog/wp-content/uploads/2018/10/cropped-cropped-site-icon-2-192x192.png"
                          alt="Inside Intercom Podcast"
                          width={40}
                          height={40}
                          className="rounded-lg"
                        />
                      ) : podcast.host === "Operator's Blog" ? (
                        <Image
                          src="https://i0.wp.com/operatorsstudio.com/wp-content/uploads/2023/04/cropped-thumbnail-2.jpeg?fit=192%2C192&ssl=1"
                          alt="Operator's Blog"
                          width={40}
                          height={40}
                          className="rounded-lg"
                        />
                      ) : (
                        <div className="p-2 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors">
                          <Mic2 className="h-5 w-5 text-teal-600" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                        {podcast.title}
                      </h3>
                      <p className="text-sm text-slate-600">{podcast.host}</p>
                      <p className="text-sm text-slate-500">{podcast.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-12 px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-slate-800">Rohini </span>
                <span className="text-teal-600">Pandhi</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500">Product Leader • Startup Advisor • Investor</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://twitter.com/rohinip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rohinipandhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://medium.com/@rohinip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              <Newspaper className="h-5 w-5" />
              <span className="sr-only">Medium</span>
            </Link>
            <Link href="#podcasts" className="text-slate-600 hover:text-teal-600 transition-colors">
              <Mic2 className="h-5 w-5" />
              <span className="sr-only">Podcasts</span>
            </Link>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Rohini Pandhi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
