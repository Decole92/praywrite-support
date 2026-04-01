// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Book, Heart, Lock, Cloud, Bell, Sparkles } from "lucide-react";

// // const features = [
// //   {
// //     icon: Book,
// //     title: "Daily Journaling",
// //     description:
// //       "Document your prayers, thoughts, and spiritual insights in a beautiful, distraction-free interface.",
// //   },
// //   {
// //     icon: Heart,
// //     title: "Prayer Lists",
// //     description:
// //       "Keep track of your prayer requests and celebrate answered prayers with organized lists.",
// //   },
// //   {
// //     icon: Lock,
// //     title: "Private & Secure",
// //     description:
// //       "Your journal entries are encrypted and protected, ensuring your prayers remain personal.",
// //   },
// //   {
// //     icon: Cloud,
// //     title: "Cloud Sync",
// //     description:
// //       "Access your journal across all your devices with seamless iCloud synchronization.",
// //   },
// //   {
// //     icon: Bell,
// //     title: "Daily Bible Reminders",
// //     description:
// //       "Stay connected to God’s Word with daily Bible verses delivered through personalized reminders in the PrayWrite app.",
// //   },
// //   {
// //     icon: Sparkles,
// //     title: "Beautiful Design",
// //     description:
// //       "A peaceful, minimalist interface designed to help you focus on what matters most.",
// //   },
// // ];

// // export function FeaturesSection() {
// //   return (
// //     <section id='features' className='py-20 md:py-32'>
// //       <div className='container mx-auto px-4'>
// //         <div className='mb-16 text-center'>
// //           <h2 className='mb-4 text-3xl font-bold tracking-tight md:text-5xl text-balance'>
// //             Everything You Need
// //           </h2>
// //           <p className='mx-auto max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed'>
// //             Praywrite Journal is designed to help you cultivate a meaningful
// //             prayer life with powerful yet simple features.
// //           </p>
// //         </div>

// //         <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
// //           {features.map((feature) => {
// //             const Icon = feature.icon;
// //             return (
// //               <Card
// //                 key={feature.title}
// //                 className='border-border/50 transition-all hover:shadow-lg hover:border-primary/20'
// //               >
// //                 <CardHeader>
// //                   <div className='mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 w-fit'>
// //                     <Icon className='h-6 w-6 text-primary' />
// //                   </div>
// //                   <CardTitle className='text-xl'>{feature.title}</CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <CardDescription className='text-base leading-relaxed'>
// //                     {feature.description}
// //                   </CardDescription>
// //                 </CardContent>
// //               </Card>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import {
//   PenLine,
//   Bot,
//   BarChart3,
//   BookOpen,
//   Headphones,
//   Mic,
//   AudioLines,
//   Trophy,
//   Sparkles,
//   Lock,
//   ArrowRight,
//   Check,
// } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const unlockedFeatures = [
//   {
//     icon: PenLine,
//     title: "Unlimited Journaling",
//     description: "Write as much as you want with no limits or restrictions",
//     highlight: false,
//   },
//   {
//     icon: Bot,
//     title: "AI Chat Assistant",
//     description: "Your personal AI companion for guidance and reflection",
//     highlight: true,
//   },
//   {
//     icon: BarChart3,
//     title: "Advanced Analytics",
//     description: "Gain deeper insights into your spiritual journey",
//     highlight: false,
//   },
//   {
//     icon: BookOpen,
//     title: "Daily Devotions",
//     description: "Access daily devotionals and explore past archives anytime",
//     highlight: false,
//   },
//   {
//     icon: Headphones,
//     title: "Audio Devotions",
//     description: "Listen to daily prayers and Bible chapters on the go",
//     highlight: false,
//   },
//   {
//     icon: Mic,
//     title: "Audio Notes & Image Uploads",
//     description: "Record voice reflections and attach meaningful moments",
//     highlight: false,
//   },
//   {
//     icon: AudioLines,
//     title: "Speech-to-Text Journaling",
//     description:
//       "Speak your thoughts and prayers naturally while your words are instantly converted into journal entries",
//     highlight: true,
//   },
//   {
//     icon: Trophy,
//     title: "Achievements",
//     description: "Track milestones and celebrate your progress",
//     highlight: false,
//   },
//   {
//     icon: Sparkles,
//     title: "AI Smart Categories",
//     description: "Automatically organize entries with intelligent tagging",
//     highlight: false,
//   },
//   {
//     icon: Lock,
//     title: "End-to-End Encryption",
//     description: "Your journal is private — only you hold the keys locally",
//     highlight: true,
//   },
// ];

// const benefits = [
//   "Deepen your prayer life with guided journaling",
//   "Never lose a spiritual insight again",
//   "Track your growth over time with analytics",
//   "Stay consistent with daily Scripture reminders",
//   "Your prayers stay private — encrypted, always",
//   "Build a living testimony of God's faithfulness",
// ];

// export default function FeaturesPage() {
//   return (
//     <main className='min-h-screen bg-background'>
//       {/* Hero Section */}
//       {/* <section id='features' className='py-20 md:py-32'></section> */}
//       {/* Features Grid */}
//       <section id='features' className='py-20 md:py-32'>
//         <div className='mx-auto max-w-6xl px-6'>
//           <div className='mb-16 text-center'>
//             <h2 className='mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance'>
//               Powerful Features, Simple Experience
//             </h2>
//             <p className='mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed'>
//               Every feature is designed to help you connect deeper with your
//               faith without getting in your way.
//             </p>
//           </div>

//           <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
//             {unlockedFeatures.map((feature) => {
//               const Icon = feature.icon;
//               return (
//                 <Card
//                   key={feature.title}
//                   className={`group border-border/50 bg-card transition-all hover:shadow-lg hover:border-primary/30 ${
//                     feature.highlight
//                       ? "ring-1 ring-primary/20 bg-primary/[0.02]"
//                       : ""
//                   }`}
//                 >
//                   <CardHeader className='pb-3'>
//                     <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15'>
//                       <Icon className='h-6 w-6 text-primary' />
//                     </div>
//                     <CardTitle className='text-lg font-semibold'>
//                       {feature.title}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className='text-sm leading-relaxed'>
//                       {feature.description}
//                     </CardDescription>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className='border-y border-border bg-muted/30 py-20 md:py-32'>
//         <div className='mx-auto max-w-6xl px-6'>
//           <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
//             <div>
//               <h2 className='mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance'>
//                 Transform Your Prayer Life
//               </h2>
//               <p className='mb-8 text-lg text-muted-foreground leading-relaxed'>
//                 Join thousands of believers who have discovered a deeper
//                 connection with God through intentional journaling and prayer.
//               </p>
//               <ul className='space-y-4'>
//                 {benefits.map((benefit) => (
//                   <li key={benefit} className='flex items-start gap-3'>
//                     <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary'>
//                       <Check className='h-3 w-3 text-primary-foreground' />
//                     </div>
//                     <span className='text-foreground'>{benefit}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className='relative'>
//               <div className='aspect-square rounded-2xl border border-border bg-card p-8 shadow-lg'>
//                 <div className='flex h-full flex-col items-center justify-center text-center'>
//                   <div className='mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10'>
//                     <BookOpen className='h-10 w-10 text-primary' />
//                   </div>
//                   <h3 className='mb-2 text-xl font-semibold text-foreground'>
//                     Start Journaling Today
//                   </h3>
//                   <p className='mb-6 text-sm text-muted-foreground'>
//                     Your spiritual journey awaits
//                   </p>
//                   <Button className='gap-2'>
//                     Get Started
//                     <ArrowRight className='h-4 w-4' />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
import {
  PenLine,
  Bot,
  BarChart3,
  BookOpen,
  Headphones,
  Mic,
  AudioLines,
  Trophy,
  Sparkles,
  Lock,
  ArrowRight,
  Check,
  Flame,
  MessageCircle,
  Camera,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    id: "weekly",
    name: "Weekly",
    price: "$5.99",
    period: "/ week",
    save: null,
    trial: false,
    featured: false,
    features: ["All Pro features", "Cancel anytime"],
  },
  {
    id: "annual",
    name: "Annual",
    price: "$49.99",
    period: "/ year",
    save: "Save over 70% vs weekly",
    trial: true,
    featured: true,
    badge: "Most popular",
    features: ["All Pro features", "7-day free trial", "Best value"],
  },
  {
    id: "monthly",
    name: "Monthly",
    price: "$7.99",
    period: "/ month",
    save: null,
    trial: true,
    featured: false,
    features: ["All Pro features", "Cancel anytime", "Flexible billing"],
  },
];

const proFeatures = [
  "Unlimited journaling",
  "AI companion & insights",
  "Daily devotional challenges",
  "Speech-to-text journaling",
  "Audio devotions & playback",
  "End-to-end encryption",
  "Spiritual analytics",
  "Achievements & milestones",
  "AI smart categories",
];

const devotionalFeatures = [
  {
    icon: BookOpen,
    title: "Scripture-anchored devotionals",
    description:
      "Every challenge rooted in God's Word — not motivational tips, but biblical truth.",
  },
  {
    icon: Trophy,
    title: "Daily progress & milestones",
    description:
      "Track streaks, complete all four pillars daily, and earn spiritual achievements.",
  },
  {
    icon: Flame,
    title: "A rhythm that transforms",
    description:
      "Even a few minutes with God each day can change everything — one step at a time.",
  },
];

const journalFeatures = [
  {
    icon: Lock,
    title: "End-to-end encryption",
    description:
      "Your words stay exactly where they belong: between you and God.",
    highlight: true,
  },
  {
    icon: Sparkles,
    title: "Mood, topic & Scripture tags",
    description:
      "Organize entries your way — find any prayer, breakthrough, or reflection instantly.",
  },
  {
    icon: PenLine,
    title: "A living testimony",
    description:
      "Over time your journal becomes a record of exactly how God has been working in your life.",
  },
];

const voiceFeatures = [
  {
    icon: Mic,
    title: "Speech-to-text journaling",
    description:
      "Speak your prayers and watch them appear instantly — no typing needed.",
    highlight: true,
  },
  {
    icon: Headphones,
    title: "Text-to-speech playback",
    description:
      "Listen to devotionals or your own journal entries read aloud — perfect on the go.",
  },
  {
    icon: AudioLines,
    title: "Voice notes & photo moments",
    description:
      "Record spoken prayers the moment inspiration strikes. Attach photos to meaningful entries.",
  },
];

const aiFeatures = [
  {
    title: "Spiritual pattern recognition",
    description:
      "PrayWrite surfaces recurring themes, emotional seasons, and signs of growth from your own entries.",
  },
  {
    title: "Guided reflection prompts",
    description:
      "Never stare at a blank page. Context-aware prompts meet you exactly where you are spiritually.",
  },
];

const aiQuestions = [
  "What patterns keep appearing in my prayer life?",
  "How has God been guiding me recently?",
  "Why do I feel spiritually distant lately?",
];

const benefits = [
  "Deepen your prayer life with guided journaling",
  "Never lose a spiritual insight again",
  "Track spiritual growth with AI-powered analytics",
  "Stay consistent with daily Scripture reminders",
  "Your prayers stay private — encrypted, always",
  "Build a living testimony of God's faithfulness",
];

export default function FeaturesPage() {
  return (
    <main className='min-h-screen bg-background'>
      {/* Hero Quote */}
      <section className='py-20 md:py-28'>
        <div className='mx-auto max-w-4xl px-6 text-center'>
          <h1 className='mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance leading-tight'>
            What if you never forgot how God showed up for you?
          </h1>
          <p className='mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty'>
            PrayWrite captures every prayer — answered and unanswered — so your
            faith story is never lost. A peaceful, distraction-free space to
            meet with God every day.
          </p>
        </div>
      </section>

      {/* Daily Devotional Challenges */}
      <section id='features' className='py-16 md:py-24 border-t border-border'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='mb-10'>
            <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-primary'>
              Daily Devotional Challenges
            </p>
            <h2 className='mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance'>
              Build a lasting habit with God
            </h2>
            <p className='max-w-xl text-muted-foreground leading-relaxed'>
              Each challenge guides you through Scripture, prayer prompts,
              action steps, and personal reflection — one day at a time.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {devotionalFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className='border-border/50 transition-all hover:shadow-lg hover:border-primary/30'
                >
                  <CardHeader className='pb-3'>
                    <div className='mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10'>
                      <Icon className='h-5 w-5 text-primary' />
                    </div>
                    <CardTitle className='text-base font-semibold'>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-sm leading-relaxed'>
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sacred Private Journal */}
      <section className='py-16 md:py-24 border-t border-border bg-muted/20'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='mb-10'>
            <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-primary'>
              Sacred Private Journal
            </p>
            <h2 className='mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance'>
              Your prayers are yours alone
            </h2>
            <p className='max-w-xl text-muted-foreground leading-relaxed'>
              PrayWrite encrypts everything on your device before it's stored or
              synced. No one — not even us — can read what you write. Your words
              stay exactly where they belong: between you and God.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {journalFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className={`border-border/50 transition-all hover:shadow-lg hover:border-primary/30 ${
                    feature.highlight
                      ? "ring-1 ring-primary/20 bg-primary/[0.02]"
                      : ""
                  }`}
                >
                  <CardHeader className='pb-3'>
                    <div className='mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10'>
                      <Icon className='h-5 w-5 text-primary' />
                    </div>
                    <CardTitle className='text-base font-semibold'>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-sm leading-relaxed'>
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pray & Reflect Your Way */}
      <section className='py-16 md:py-24 border-t border-border'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='mb-10'>
            <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-primary'>
              Pray & Reflect Your Way
            </p>
            <h2 className='mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance'>
              Express yourself naturally
            </h2>
            <p className='max-w-xl text-muted-foreground leading-relaxed'>
              Flexible tools built for your faith journey — speak, listen, or
              type. Your way, your pace.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {voiceFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className={`border-border/50 transition-all hover:shadow-lg hover:border-primary/30 ${
                    feature.highlight
                      ? "ring-1 ring-primary/20 bg-primary/[0.02]"
                      : ""
                  }`}
                >
                  <CardHeader className='pb-3'>
                    <div className='mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10'>
                      <Icon className='h-5 w-5 text-primary' />
                    </div>
                    <CardTitle className='text-base font-semibold'>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-sm leading-relaxed'>
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Companion */}
      <section className='py-16 md:py-24 border-t border-border bg-muted/20'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='grid gap-12 lg:grid-cols-2 lg:items-start'>
            <div>
              <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-primary'>
                AI Companion & Spiritual Insights
              </p>
              <h2 className='mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance'>
                A thoughtful guide for your faith journey
              </h2>
              <p className='mb-6 text-muted-foreground leading-relaxed'>
                A thoughtful AI companion that walks alongside you — asking
                questions, offering encouragement, and helping you see what God
                may be doing in your life. Over time, PrayWrite recognizes
                patterns in your prayers and reflections, surfacing recurring
                themes, emotional seasons, and signs of spiritual growth.
              </p>
              <div className='space-y-4'>
                {aiFeatures.map((feature) => (
                  <div key={feature.title}>
                    <p className='font-semibold text-foreground text-sm mb-1'>
                      {feature.title}
                    </p>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='space-y-3'>
              <p className='text-sm font-semibold text-foreground mb-4'>
                Ask things like...
              </p>
              {aiQuestions.map((q) => (
                <div
                  key={q}
                  className='rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground'
                >
                  "{q}"
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scripture at the Center */}
      <section className='py-16 md:py-24 border-t border-border'>
        <div className='mx-auto max-w-6xl px-6 text-center'>
          <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-primary'>
            Scripture at the Center
          </p>
          <h2 className='mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance'>
            Every feature draws you back to God's Word
          </h2>
          <p className='mx-auto max-w-2xl text-muted-foreground leading-relaxed'>
            Scripture-focused prompts anchor your journaling and devotionals in
            truth — keeping faith at the heart of every entry. Grow spiritually,
            one day at a time. One prayer. One reflection. One step closer to
            Christ.
          </p>
        </div>
      </section>

      {/* Benefits */}
      {/* <section className='border-y border-border bg-muted/30 py-16 md:py-24'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
            <div>
              <h2 className='mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance'>
                Transform your prayer life
              </h2>
              <p className='mb-8 text-muted-foreground leading-relaxed'>
                Join thousands of believers who have discovered a deeper
                connection with God through intentional journaling and prayer.
              </p>
              <ul className='space-y-3'>
                {benefits.map((benefit) => (
                  <li key={benefit} className='flex items-start gap-3'>
                    <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary'>
                      <Check className='h-3 w-3 text-primary-foreground' />
                    </div>
                    <span className='text-sm text-foreground'>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='relative'>
              <div className='aspect-square rounded-2xl border border-border bg-card p-8 shadow-lg'>
                <div className='flex h-full flex-col items-center justify-center text-center'>
                  <div className='mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10'>
                    <BookOpen className='h-10 w-10 text-primary' />
                  </div>
                  <h3 className='mb-2 text-xl font-semibold text-foreground'>
                    Start journaling today
                  </h3>
                  <p className='mb-6 text-sm text-muted-foreground'>
                    Your spiritual journey awaits
                  </p>
                  <Button className='gap-2'>
                    Get started
                    <ArrowRight className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id='pricing' className='py-20 md:py-32 border-t border-border'>
        <div className='mx-auto max-w-4xl px-6'>
          {/* Header */}
          <div className='mb-12 text-center'>
            <div className='mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5'>
              <Sparkles className='h-3.5 w-3.5 text-primary' />
              <span className='text-xs font-semibold uppercase tracking-widest text-primary'>
                PrayWrite Pro
              </span>
            </div>
            <h2 className='mb-3 text-2xl font-bold tracking-tight text-foreground md:text-4xl text-balance'>
              Unlock your full spiritual toolkit
            </h2>
            <p className='text-muted-foreground'>
              Start free. Upgrade when you're ready to go deeper.
            </p>
          </div>

          {/* Plans */}
          <div className='grid gap-4 sm:grid-cols-3 mb-10'>
            {plans.map((plan) => (
              <div key={plan.id} className='relative'>
                {plan.badge && (
                  <div className='absolute -top-3 left-0 right-0 flex justify-center'>
                    <span className='rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground'>
                      {plan.badge}
                    </span>
                  </div>
                )}
                <Card
                  className={`h-full transition-all ${
                    plan.featured
                      ? "border-primary shadow-lg ring-1 ring-primary/30 pt-3"
                      : "border-border/50 hover:border-primary/20 hover:shadow-md"
                  }`}
                >
                  <CardHeader className='pb-3'>
                    <p className='text-xs font-semibold uppercase tracking-widest text-muted-foreground'>
                      {plan.name}
                    </p>
                    <div className='flex items-baseline gap-1'>
                      <span className='text-3xl font-bold text-foreground'>
                        {plan.price}
                      </span>
                      <span className='text-sm text-muted-foreground'>
                        {plan.period}
                      </span>
                    </div>
                    {plan.save && (
                      <p className='text-xs font-semibold text-green-600 dark:text-green-400'>
                        {plan.save}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className='flex flex-col gap-4'>
                    <ul className='space-y-2'>
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className='flex items-center gap-2 text-sm text-muted-foreground'
                        >
                          <Check className='h-3.5 w-3.5 shrink-0 text-primary' />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a href='https://onelink.to/ysrt7g'>
                      <Button
                        variant={plan.featured ? "default" : "outline"}
                        className='w-full gap-2'
                      >
                        {plan.trial
                          ? "Start free trial"
                          : `Try ${plan.name.toLowerCase()}`}
                        <ArrowRight className='h-3.5 w-3.5' />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Pro Features List */}
          <div className='rounded-2xl border border-border bg-muted/30 px-6 py-6'>
            <div className='mb-4 flex items-center gap-2'>
              <Lock className='h-4 w-4 text-primary' />
              <p className='text-sm font-semibold text-foreground'>
                Everything included in Pro
              </p>
            </div>
            <div className='grid gap-2 sm:grid-cols-2'>
              {proFeatures.map((feature) => (
                <div key={feature} className='flex items-center gap-2'>
                  <div className='flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10'>
                    <Check className='h-2.5 w-2.5 text-primary' />
                  </div>
                  <span className='text-sm text-muted-foreground'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Legal */}
          <p className='mt-6 text-center text-xs text-muted-foreground leading-relaxed'>
            Free trial available on Monthly and Annual plans. Subscription
            auto-renews unless cancelled 24 hours before renewal. Payment
            charged to your Apple ID account.{" "}
            <Link
              href='https://www.praywritejournal.com/terms'
              className='underline hover:text-foreground'
            >
              Terms of Use
            </Link>{" "}
            ·{" "}
            <Link
              href='https://www.praywritejournal.com/privacy'
              className='underline hover:text-foreground'
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
