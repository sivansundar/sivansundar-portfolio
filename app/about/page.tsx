import { Button } from '@/components/ui/button'
import { Github, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">About Me</h1>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p className="text-xl mb-4">
              I am a developer/builder/engineer and a musician. I currently work at JivaAg - an agritech startup based out of Indonesia with an aim to improve the lives of smallhold farmers.
            </p>
            <p className="mb-4">
              I am obsessed with shipping fast, getting feedback and iterating over perfection. Over the years I have built native mobile apps of various capacity, ranging from fintech, ed-tech and agritech. I've also been building ecommerce solutions on the side out of pure curiosity.
            </p>
            <p className="mb-8">
              I am also the frontman at Rascals of the First Order - a heavy, hard rock/grunge rock band based out of Bengaluru, India.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="https://twitter.com/sivansundar" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
              </Link>
              <Link href="https://github.com/sivansundar" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-4">Music</h2>
            <p className="mb-4">
              Check out my band Rascals of the First Order:
            </p>
            <Link href="https://linktr.ee/therofoband" target="_blank" rel="noopener noreferrer">
              <Button>
                Listen Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

