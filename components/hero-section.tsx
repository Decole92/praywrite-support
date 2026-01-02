// import { Button } from "@/components/ui/button";
// import { BookHeart } from "lucide-react";
// import Image from "next/image";

// export function HeroSection() {
//   return (
//     <section className='relative overflow-hidden py-20 md:py-32'>
//       <div className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]' />

//       <div className='container mx-auto px-4'>
//         <div className='mx-auto max-w-3xl text-center'>
//           <div className='mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-3'>
//             <Image
//               src='/praywritelogonobg.png'
//               alt='praywrite-logo'
//               width={100}
//               height={100}
//             />
//           </div>

//           <h1 className='mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl'>
//             Welcome to Praywrite Support
//           </h1>

//           <p className='mb-8 text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed'>
//             Your companion for meaningful prayer and spiritual reflection. Find
//             answers to your questions, learn tips and tricks, or get in touch
//             with our support team.
//           </p>

//           <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
//             {/* <Button size='lg' asChild>
//               <a
//                 href='https://praywrite.decoletech.com'
//                 target='_blank'
//                 rel='noopener noreferrer'
//               >
//                 Download Praywrite
//               </a>
//             </Button> */}
//             <Button size='lg' variant='outline' asChild>
//               <a href='#faq'>Browse FAQ</a>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Button } from "@/components/ui/button";
import { Mic, Camera, Lock, Sparkles } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className='relative overflow-hidden py-24 md:py-32'>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: "url(/sky.png)",
        }}
      />

      {/* Gradient overlay matching React Native LinearGradient */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "linear-gradient(135deg, rgba(13, 36, 132, 0.7) 0%, rgba(49, 149, 151, 0.6) 50%, rgba(255, 255, 255, 0.3) 100%)",
        }}
      />

      <div className='container relative mx-auto px-4'>
        <div className='mx-auto max-w-4xl'>
          {/* Logo */}
          <div className='mb-8 flex justify-center'>
            <div className='rounded-full bg-white/10 p-4 backdrop-blur-sm border border-white/20'>
              <Image
                src='/praywritelogonobg.png'
                alt='Praywrite logo'
                width={80}
                height={80}
                className='h-20 w-20'
              />
            </div>
          </div>

          {/* Main heading */}
          <h1 className='mb-6 text-center text-4xl font-bold tracking-tight text-white text-balance md:text-6xl lg:text-7xl'>
            Journal Your Journey with God
          </h1>

          {/* Description */}
          <p className='mb-8 text-center text-lg text-white/80 text-pretty md:text-xl leading-relaxed max-w-3xl mx-auto'>
            Capture your spiritual journey privately. Reflect on prayers,
            gratitude, and moments of joy, while safely recording your thoughts
            with voice and photos.
          </p>

          {/* Feature highlights */}
          <div className='mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 max-w-3xl mx-auto'>
            <div className='flex flex-col items-center gap-2 rounded-xl bg-white/10 p-4 backdrop-blur-sm border border-white/20'>
              <div className='rounded-full bg-purple-500/20 p-3'>
                <Mic className='h-6 w-6 text-purple-300' />
              </div>
              <span className='text-center text-sm font-medium text-white/90'>
                Record Talks & Songs
              </span>
            </div>

            <div className='flex flex-col items-center gap-2 rounded-xl bg-white/10 p-4 backdrop-blur-sm border border-white/20'>
              <div className='rounded-full bg-blue-500/20 p-3'>
                <Camera className='h-6 w-6 text-blue-300' />
              </div>
              <span className='text-center text-sm font-medium text-white/90'>
                Photos & Moments
              </span>
            </div>

            <div className='flex flex-col items-center gap-2 rounded-xl bg-white/10 p-4 backdrop-blur-sm border border-white/20'>
              <div className='rounded-full bg-emerald-500/20 p-3'>
                <Lock className='h-6 w-6 text-emerald-300' />
              </div>
              <span className='text-center text-sm font-medium text-white/90'>
                End-to-End Encrypted
              </span>
            </div>

            <div className='flex flex-col items-center gap-2 rounded-xl bg-white/10 p-4 backdrop-blur-sm border border-white/20'>
              <div className='rounded-full bg-emerald-500/20 p-3'>
                <Sparkles className='h-6 w-6 text-emerald-300' />
              </div>
              <span className='text-center text-sm font-medium text-white/90'>
                AI Chat Assistant
              </span>
            </div>
          </div>

          {/* Scripture verse */}
          <div className='mb-10 mx-auto max-w-2xl rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 p-6 md:p-8'>
            <p className='mb-2 text-center text-sm font-bold uppercase tracking-wider text-slate-900'>
              Deuteronomy 6:12
            </p>
            <p className='text-center text-base text-slate-700 italic leading-relaxed md:text-lg'>
              &ldquo;Be careful that you do not forget the Lord, who brought you
              out of Egypt, out of the land of slavery.&rdquo;
            </p>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
            <Button
              size='lg'
              className='bg-white text-blue-950 hover:bg-white/90 font-semibold px-8'
              asChild
            >
              <a href='#contact'>Contact Us </a>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-white/30 text-white hover:bg-white/10 bg-transparent'
              asChild
            >
              <a href='#faq'>Browse FAQ</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
