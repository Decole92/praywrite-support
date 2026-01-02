import Link from "next/link";
import Image from "next/image";

export function SupportHeader() {
  const appStoreUrl =
    process.env.NEXT_PUBLIC_APPSTORE_URL || "https://apps.apple.com";
  const playStoreUrl =
    process.env.NEXT_PUBLIC_PLAYSTORE_URL || "https://play.google.com";
  const webUrl = "https://praywrite.decoletech.com";

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link href='/' className='flex items-center gap-2'>
          <div className='flex md:h-9 md:w-9  h-14 w-14 items-center justify-center rounded-lg bg-white'>
            <Image
              src='/praywritelogonobg.png'
              alt='praywrite-logo'
              width={100}
              height={100}
            />
          </div>
          <span className='text-lg font-semibold hidden md:inline-block '>
            Praywrite Journal
          </span>
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
          <div className='flex items-center gap-2'>
            <a
              href={appStoreUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='transition-opacity hover:opacity-80'
            >
              <img
                src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1448841600'
                alt='Download on the App Store'
                className='h-10'
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
                className='h-[58px]'
              />
            </a>
          </div>
        </nav>

        <div className='md:hidden flex items-center gap-1.5'>
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
      </div>
    </header>
  );
}
