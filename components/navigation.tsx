"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  return (
    <header className="container sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Sivan Chakravarthy
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/work"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Work
          </Link>
          <Link href="mailto:hello@sivansundar.com">
            <Button>Let's Talk</Button>
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium">
                About
              </Link>
              <Link href="/work" className="text-sm font-medium">
                Work
              </Link>
              <Link href="mailto:hello@sivansundar.com">
                <Button className="w-full">Let's Talk</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
