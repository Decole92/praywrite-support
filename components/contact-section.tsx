"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";
import { FollowUs } from "./followUs";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id='contact' className='py-20 md:py-32'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight md:text-5xl text-balance'>
            Get in Touch
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed'>
            Can't find what you're looking for? Our support team is here to
            help.
          </p>
        </div>

        <div className='mx-auto grid max-w-5xl gap-8 md:grid-cols-3'>
          <Card className='md:col-span-2 border-border/50'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <MessageSquare className='h-5 w-5 text-primary' />
                Send Us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid gap-6 sm:grid-cols-2'>
                  <div className='space-y-2'>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                      id='name'
                      name='name'
                      placeholder='Your name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='your@email.com'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='subject'>Subject</Label>
                  <Input
                    id='subject'
                    name='subject'
                    placeholder='How can we help?'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder='Tell us more about your question or issue...'
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {submitStatus === "success" && (
                  <div className='rounded-lg bg-primary/10 p-4 text-sm text-primary'>
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <Button
                  type='submit'
                  size='lg'
                  disabled={isSubmitting}
                  className='w-full sm:w-auto'
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className='space-y-6'>
            <Card className='border-border/50'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-lg'>
                  <Mail className='h-5 w-5 text-primary' />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground mb-3 leading-relaxed'>
                  Prefer email? Send us a message directly.
                </p>
                <a
                  href='mailto:support@decoletech.com'
                  className='text-sm font-medium text-primary hover:underline'
                >
                  support@decoletech.com
                </a>
                <FollowUs />
              </CardContent>
            </Card>

            <Card className='border-border/50'>
              <CardHeader>
                <CardTitle className='text-lg'>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  We typically respond within 24-48 hours during business days.
                  Premium users receive priority support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
