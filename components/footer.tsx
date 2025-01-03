import Link from 'next/link'

export function Footer() {
  return (
    // className="container sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm"
    <footer className="container">
      <div className="container w-full flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-xs leading-loose text-muted-foreground md:text-left">
            © 2024 Sivan Chakravarthy.
          </p>
          
        </div>
        <p className='text-xs leading-loose text-muted-foreground md:text-left'>All rights reserved.</p>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          <Link href="mailto:hello@sivansundar.com" className="hover:text-primary">
            hello@sivansundar.com
          </Link>
        </p>
      </div>
    </footer>
  )
}

