import Link from "next/link";
import { ArrowDown, BookOpen } from "lucide-react";
import Image from "next/image";
import { FollowUs } from "./followUs";

export function Footer() {
  const appStoreUrl =
    process.env.NEXT_PUBLIC_APPSTORE_URL || "https://apps.apple.com";
  const playStoreUrl =
    process.env.NEXT_PUBLIC_PLAYSTORE_URL || "https://play.google.com";
  const webUrl = "https://praywrite.decoletech.com";
  return (
    <footer className='border-t border-border/40 bg-muted/30'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-8 md:grid-cols-4'>
          <div className='md:col-span-2 '>
            <Link href='/' className='flex items-center gap-2 mb-4'>
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
            <p className='text-sm text-muted-foreground max-w-md leading-relaxed'>
              A peaceful space for your prayers, reflections, and spiritual
              growth. Available on iOS.
            </p>

            <FollowUs />
          </div>

          <div>
            <h3 className='mb-4 text-sm font-semibold'>Quick Links</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link
                  href='#features'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='#faq'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href='#contact'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Contact
                </Link>
              </li>
              <li>
                <h5 className='text-muted-foreground hover:text-foreground transition-colors flex items-center gap-4'>
                  Get the app
                </h5>

                <div className='flex items-center gap-1.5'>
                  <a
                    href={appStoreUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='transition-opacity hover:opacity-80'
                  >
                    <img
                      src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1448841600'
                      alt='Download on the App Store'
                      className='h-8'
                    />
                  </a>
                  <a
                    href={playStoreUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='transition-opacity hover:opacity-80'
                  >
                    <img
                      src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                      alt='Get it on Google Play'
                      className='h-[46px]'
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-sm font-semibold'>Legal</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link
                  href='https://www.privacypolicies.com/live/13fd8174-9dcf-4fbe-9bc7-2fff05e0088a'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground'>
          <p>
            © {new Date().getFullYear()} Praywrite Journal by DecoleTech. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
