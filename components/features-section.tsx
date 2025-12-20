import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Book, Heart, Lock, Cloud, Bell, Sparkles } from "lucide-react";

const features = [
  {
    icon: Book,
    title: "Daily Journaling",
    description:
      "Document your prayers, thoughts, and spiritual insights in a beautiful, distraction-free interface.",
  },
  {
    icon: Heart,
    title: "Prayer Lists",
    description:
      "Keep track of your prayer requests and celebrate answered prayers with organized lists.",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description:
      "Your journal entries are encrypted and protected, ensuring your prayers remain personal.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description:
      "Access your journal across all your devices with seamless iCloud synchronization.",
  },
  {
    icon: Bell,
    title: "Daily Bible Reminders",
    description:
      "Stay connected to God’s Word with daily Bible verses delivered through personalized reminders in the PrayWrite app.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Design",
    description:
      "A peaceful, minimalist interface designed to help you focus on what matters most.",
  },
];

export function FeaturesSection() {
  return (
    <section id='features' className='py-20 md:py-32'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight md:text-5xl text-balance'>
            Everything You Need
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed'>
            Praywrite Journal is designed to help you cultivate a meaningful
            prayer life with powerful yet simple features.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className='border-border/50 transition-all hover:shadow-lg hover:border-primary/20'
              >
                <CardHeader>
                  <div className='mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 w-fit'>
                    <Icon className='h-6 w-6 text-primary' />
                  </div>
                  <CardTitle className='text-xl'>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base leading-relaxed'>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
