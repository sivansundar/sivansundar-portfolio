import { Button } from "@/components/ui/button";
import { Github, LucideLinkedin, Mail, Twitter } from "lucide-react";
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

            <Link
              href="https://www.linkedin.com/in/sivan-chakravarthy-s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default">
              <LucideLinkedin/>
                LinkedIn
              </Button>
            </Link>

            <Link
              href="mailto:hello@sivansundar.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </Link>
          </div>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p className="text-l italic mb-4">
              Developer, builder, engineer and a musician. I currently work at
              Jiva - an agritech startup based out of Indonesia where we aim to
              improve the lives of smallhold farmers at scale.
            </p>

            <iframe
              className={"border-radius:12px"}
              src="https://open.spotify.com/embed/artist/05FJ4y1jUydgN2NAnZrsbL?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            <br></br>

            <p className="mb-4">
              There is an inherent joy in building and creating things. That is
              exactly what drives me. Built products, managed teams and
              everything in between. I obsess with shipping fast. I believe
              perfection is achieved through speed and not by waiting for the
              right time. "Ship -&gt; feedback -&gt; iterate" and you'll be
              amazed to see where you are at. Over the years I have built native
              mobile apps of various capacity, ranging from fintech, ed-tech and
              agritech. I've also been building ecommerce solutions on Shopify
              out of pure curiosity. Love tinkering with any stack I
              get.
            </p>

            <p className="mb-4">
              In a professional setting, I value honesty, the grit to learn and
              the courage to say <i>"I don't know"</i>. If you over communicate
              and discard biases, then you'd love working with me.
            </p>

            <br></br>

            <p className="mb-8">
              Apart from work, I write heavy riffs that you can headbang to. I
              am also the frontman at the{" "}
              <Link
                href="https://linktr.ee/therofoband"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Rascals of the First Order</strong>
              </Link>{" "}
              - a heavy, hard/grunge rock band based out of Bengaluru, India. On
              the days I dont obsess with these, I travel as much as I can. Go
              on hikes, explore the local coffee and food scene, trying to learn
              a thing or two about the people I meet.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/work-jiva-3.webp?height=600&width=800"
                  alt="One of Jiva's Retailer who took part in a user research program "
                  width={800}
                  height={600}
                  className="object-cover w-full aspect-[1/1] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white">
                    <h3 className="text-lg font-bold">
                      One of Jiva's Retailer's at a user research program
                    </h3>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/about-1.webp?height=600&width=800"
                  alt="Wat Phra Mahathat, Ayutthaya, Thailand"
                  width={800}
                  height={600}
                  className="object-cover w-full aspect-[1/1] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white">
                    <h3 className="text-lg font-bold">
                      Wat Phra Mahathat, Ayutthaya, Thailand
                    </h3>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/music-2.webp?height=600&width=800"
                  alt="Band pic"
                  width={800}
                  height={600}
                  className="object-cover w-full aspect-[4/3] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white">
                    <h3 className="text-lg font-bold">Performing at Fandom.</h3>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/music-1.webp?height=600&width=800"
                  alt="Band pic"
                  width={800}
                  height={600}
                  className="object-cover w-full aspect-[4/3] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white">
                    <h3 className="text-lg font-bold">
                      Performing at The RAFT.
                    </h3>
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
