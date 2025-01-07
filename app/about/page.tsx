import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto">
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
              href="https://open.spotify.com/artist/05FJ4y1jUydgN2NAnZrsbL?si=kIs_VBL3QQuf_2dgUav5Qw"
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
              any stack I get. RoR was one such in the recent times.
            </p>
            <p className="mb-8">
              During the night, I write heavy riffs that you can headbang to. I
              am also the frontman at the{" "}
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

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Band pic"
                  width={800}
                  height={600}
                  className="object-cover w-full aspect-[4/3] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white">
                    <h3 className="text-lg font-bold">Band pic</h3>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/work-1.jpg?height=600&width=800"
                  alt="Band pic"
                  width={800}
                  height={600}
                  className="object-cover w-full aspect-[4/3] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white">
                    <h3 className="text-lg font-bold">Band pic</h3>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
              <Image
                  src="/music-2.png?height=600&width=800"
                  alt="Band pic"
                  width={800}
                  height={600}
                  
                  className="object-cover w-full aspect-[4/3] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white">
                    <h3 className="text-lg font-bold">Band pic</h3>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
               
              <Image
                  src="/music-1.jpg?height=600&width=800"
                  alt="Band pic"
                  width={800}
                  height={600}
                  
                  className="object-cover w-full aspect-[4/3] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white">
                    <h3 className="text-lg font-bold"></h3>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>

            {/* <h2 className="text-2xl font-bold mb-4">Music</h2>
            <p className="mb-4">
              Check out my band Rascals of the First Order:
            </p>
            <Link
              href="https://linktr.ee/therofoband"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Listen Now</Button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
