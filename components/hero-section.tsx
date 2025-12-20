import { Button } from "@/components/ui/button";
import { BookHeart } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className='relative overflow-hidden py-20 md:py-32'>
      <div className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]' />

      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-3'>
            <Image
              src='/praywritelogonobg.png'
              alt='praywrite-logo'
              width={100}
              height={100}
            />
          </div>

          <h1 className='mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl'>
            Welcome to Praywrite Support
          </h1>

          <p className='mb-8 text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed'>
            Your companion for meaningful prayer and spiritual reflection. Find
            answers to your questions, learn tips and tricks, or get in touch
            with our support team.
          </p>

          <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
            <Button size='lg' asChild>
              <a
                href='https://praywrite.decoletech.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Download Praywrite
              </a>
            </Button>
            <Button size='lg' variant='outline' asChild>
              <a href='#faq'>Browse FAQ</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
