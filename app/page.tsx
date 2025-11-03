import { Button } from "@/components/ui/button";
import { SpotifyWidget } from "@/components/spotify-widget";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Developer, Builder & Musician
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Building the future of agriculture during the day 🌤️🌽.
                  Writing riffs at night 🎸🎤
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/work">
                  <Button size="lg">View Work</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    About Me
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover lg:order-last">
              <Image
                alt="Sivan Chakravarthy"
                src="/profile_pic.webp?height=600&width=600"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20 border-t">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">
            Selected Work
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="group relative overflow-hidden rounded-lg border">
              <Image
                src="/work-jiva-2.webp?height=512&width=512"
                alt="JivaAg Project"
                width={512}
                height={512}
                className="object-cover w-full aspect-[1/1] transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white">
                  <h3 className="text-lg font-bold">JivaAg</h3>
                  <p>
                    Heading the mobile app division. Built a suite of apps used
                    by farmers, retailers and collectors across 🇮🇩. Handled user
                    research and lead a team of engineers to ship meaningful
                    solutions. Moving across verticals. Built features across
                    the board including dev tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border">
              <Image
                src="https://www.leadsquared.com/wp-content/uploads/2023/04/colearn.png"
                alt="Ecommerce Project"
                width={512}
                height={512}
                className="object-cover w-full aspect-[1/1] transition-transform group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white">
                  <h3 className="text-lg font-bold">CoLearn</h3>
                  <p>
                    Built tools and solutions for an ed-tech platform serving
                    the students of Indonesia. Handled course
                    assortment, caching solutions for an in-app video player along 
                    with a sample questions module that helps you in learning STEM concepts better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-12 md:py-16 lg:py-20 border-t">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">
            Currently Playing
          </h2>
          <SpotifyWidget />
        
        </div>
      </section> */}
    </div>
  );
}
