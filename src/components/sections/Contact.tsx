"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ProfileImage } from "@/components/ui/profile-image";

function buildMailtoLink(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  const to = siteConfig.contactEmail;
  const mailSubject = `[Portfolio Contact] ${data.subject}`;
  const mailBody = [
    `From: ${data.name}`,
    `Reply-To: ${data.email}`,
    "",
    "Message:",
    data.message,
    "",
    "---",
    "Sent via Tanusha Hande Portfolio",
  ].join("\n");

  const params = new URLSearchParams({
    subject: mailSubject,
    body: mailBody,
  });

  return `mailto:${to}?${params.toString()}`;
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const mailtoLink = buildMailtoLink(formData);
    window.location.href = mailtoLink;

    setSent(true);
    setTimeout(() => setSent(false), 8000);
  };

  return (
    <section id="contact" className="section-padding relative" aria-label="Contact section">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Great"
          description="Open to opportunities, collaborations, and conversations about technology"
        />

        <div className="grid items-start gap-12 lg:grid-cols-5">
          <ScrollReveal direction="left" className="space-y-8 lg:col-span-2">
            <div className="flex justify-center lg:justify-start">
              <ProfileImage size="md" />
            </div>

            <GlassCard>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Location</p>
                    <p className="font-medium text-white">India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                    <Clock className="text-secondary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Availability</p>
                    <p className="font-medium text-primary">Open to Opportunities</p>
                  </div>
                </div>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-sm text-white/40">Email</p>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-3">
            <GlassCard glow="primary">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <MagneticButton className="w-full sm:w-auto">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send size={18} />
                    Send Message
                  </Button>
                </MagneticButton>

                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 text-sm text-primary"
                  >
                    <CheckCircle size={16} className="mt-0.5 shrink-0" />
                    <span>
                      Your email app is opening with a draft to{" "}
                      <strong>{siteConfig.contactEmail}</strong>. Hit send in your mail app to
                      deliver the message.
                    </span>
                  </motion.p>
                )}
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
