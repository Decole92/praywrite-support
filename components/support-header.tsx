import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Image from "next/image";

export function SupportHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link href='/' className='flex items-center gap-2'>
          <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-white'>
            <Image
              src='/praywritelogonobg.png'
              alt='praywrite-logo'
              width={100}
              height={100}
            />
          </div>
          <span className='text-lg font-semibold'>Praywrite Journal</span>
        </Link>

        <nav className='hidden md:flex items-center gap-6'>
          <Link
            href='#features'
            className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
          >
            Features
          </Link>
          <Link
            href='#faq'
            className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
          >
            FAQ
          </Link>
          <Link
            href='#contact'
            className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
          >
            Contact
          </Link>
          <Button asChild>
            <a
              href='https://praywrite.decoletech.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Get the App
            </a>
          </Button>
        </nav>

        <Button asChild className='md:hidden'>
          <a
            href='https://praywrite.decoletech.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Get App
          </a>
        </Button>
      </div>
    </header>
  );
}
