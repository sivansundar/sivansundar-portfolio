import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            About Me
          </h1>
          <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="https://twitter.com/sivansundar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
              </Link>
              <Link
                href="https://github.com/sivansundar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </Link>
              <Link
                href="https://github.com/sivansundar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  Spotify
                </Button>
              </Link>
            </div>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p className="text-xl mb-4">
              Developer, builder, engineer and a musician. I currently work at
              Jiva - an agritech startup based out of Indonesia where we aim to
              improve the lives of smallhold farmers across the country.
            </p>
            <p className="mb-4">
              During the day, I obsess with shipping fast. Perfection is
              achieved through speed, not patience. "Ship - feedback - iterate"
              and you'll be amazed to see where you are at. Over the years I
              have built native mobile apps of various capacity, ranging from
              fintech, ed-tech and agritech. I've also been building ecommerce
              solutions on the side out of pure curiosity. Love tinkering with
              any stack I get. RoR was one such in the recent times. During the
              night, I write heavy riffs that you can headbang to.
            </p>
            <p className="mb-8">
              I am also the frontman at the{" "}
              <Link
                href="https://linktr.ee/therofoband"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Rascals of the First Order</strong>
              </Link>{" "}
              - a heavy, hard rock/grunge rock band based out of Bengaluru,
              India.
            </p>

            <div className="space-y-10">
              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="JivaAg Project"
                  width={800}
                  height={600}
                  className="object-cover w-full aspect-[4/3] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white">
                    <h3 className="text-lg font-bold">JivaAg</h3>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="https://instagram.fblr2-2.fna.fbcdn.net/v/t51.29350-15/446784286_1164445438020489_5629572798493234306_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fblr2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=cnrzqwxQmc4Q7kNvgFnm1nd&_nc_gid=7d84cd57b9d543de80e008820362d80d&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzM3NzkzNDY1NjQwODQzNzc4Ng%3D%3D.3-ccb7-5&oh=00_AYDlVdJCENEIvkf6sNh4f9iHfGmmDyE5hCG6kGlfZqtESQ&oe=677DEBA6&_nc_sid=22de04"
                  alt="JivaAg Project"
                  width={800}
                  height={600}
                  className="object-cover w-full aspect-[4/3] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white">
                    <h3 className="text-lg font-bold">JivaAg</h3>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Music</h2>
            <p className="mb-4">
              Check out my band Rascals of the First Order:
            </p>
            <Link
              href="https://linktr.ee/therofoband"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Listen Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
