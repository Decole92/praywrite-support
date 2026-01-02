import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started with Praywrite Journal?",
    answer:
      "Simply download the app from the App Store or Google Playstore, create your account, and start your first journal entry. The intuitive interface will guide you through the process of creating prayer lists and daily reflections.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely. Your journal entries are fully encrypted and stored securely. We use end-to-end encryption, which means your data is encrypted on your device before it’s sent to our servers. Only you can access your entries—we never see, share, or sell your personal information or journal content.",
  },
  {
    question: "Can I sync my journal across multiple devices?",
    answer:
      "Yes! Praywrite Journal syncs your entries across all your devices, including Apple and Android phones. Just sign in with the same email or Apple ID and enter your encryption PIN, and your journal will stay up to date everywhere.",
  },

  {
    question: "Can I export my journal entries?",
    answer:
      "Currently, journal entries can’t be exported as PDF or text files. This is to help protect your privacy. However, you can still share individual entries with others using the Share button whenever you choose.",
  },

  {
    question: "Is there a subscription fee?",
    answer:
      "Praywrite Journal offers both free and PRO plans. The free version includes core journaling features, while the PRO plan unlocks advanced features like Advanced Analytics, AI Chat Assistant, Image Upload & Audio Notes, AI Generated Categories and priority support.",
  },
  {
    question: "What should I do if I forgot my password?",
    answer:
      'On the login screen, tap "Forgot Password" and follow the instructions sent to your email. If you continue to have issues, please contact our support team.',
  },
  {
    question: "How do I contact support?",
    answer:
      'You can reach our support team through the contact form below, by emailing support@decoletech.com, or through the "Help & Support" section within the app.',
  },
];

export function FaqSection() {
  return (
    <section id='faq' className='py-20 md:py-32 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight md:text-5xl text-balance'>
            Frequently Asked Questions
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed'>
            Find answers to common questions about using Praywrite Journal.
          </p>
        </div>

        <div className='mx-auto max-w-3xl'>
          <Accordion type='single' collapsible className='w-full'>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className='text-left text-base font-medium'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-base text-muted-foreground leading-relaxed'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
