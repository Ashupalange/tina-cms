"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import BaseLayout from "@/components/BaseLayout";
import FadeUp from "@/components/motion/FadeUp";

export default function ContactClient({ props, settings }: { props: any, settings: any }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const contact = data.contact;

  return (
    <BaseLayout settings={settings}>
      {/* 1. THE INVITATION (Cream Surface) */}
      <section className="woc-section min-h-[75vh] woc-section--surface flex items-center justify-center">
        <div className="woc-container max-w-6xl w-full">
          <div className="flex flex-col md:flex-row gap-16">
            
            <FadeUp className="flex-1 space-y-8">
              <h1 data-tina-field={tinaField(contact, "headline")} className="woc-h1">{contact.headline || "Private Consultations"}</h1>
              <p data-tina-field={tinaField(contact, "subheadline")} className="woc-lead">{contact.subheadline}</p>

              <div className="pt-8 space-y-6">
                <div>
                  <h3 className="woc-eyebrow text-[var(--color-muted)] mb-2">Inquiries</h3>
                  <a data-tina-field={tinaField(contact, "email")} href={`mailto:${contact.email}`} className="text-xl hover:text-[var(--color-secondary)] transition-colors">{contact.email}</a>
                </div>
                <div>
                  <h3 className="woc-eyebrow text-[var(--color-muted)] mb-2">Concierge</h3>
                  <a data-tina-field={tinaField(contact, "phone")} href={`tel:${contact.phone}`} className="text-xl hover:text-[var(--color-secondary)] transition-colors">{contact.phone}</a>
                </div>
                <div>
                  <h3 className="woc-eyebrow text-[var(--color-muted)] mb-2">Instagram</h3>
                  <p data-tina-field={tinaField(contact, "instagram")} className="text-xl">{contact.instagram}</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp className="flex-1 bg-white p-12 shadow-sm border border-[var(--color-surface-border)]" delay={0.2}>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm tracking-widest uppercase text-[var(--color-muted)]">Name</label>
                  <input type="text" id="name" className="w-full bg-transparent border-b border-[var(--color-surface-border)] pb-2 pt-1 focus:outline-none focus:border-[var(--color-secondary)] transition-colors rounded-none" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm tracking-widest uppercase text-[var(--color-muted)]">Email</label>
                  <input type="email" id="email" className="w-full bg-transparent border-b border-[var(--color-surface-border)] pb-2 pt-1 focus:outline-none focus:border-[var(--color-secondary)] transition-colors rounded-none" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm tracking-widest uppercase text-[var(--color-muted)]">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-transparent border-b border-[var(--color-surface-border)] pb-2 pt-1 focus:outline-none focus:border-[var(--color-secondary)] transition-colors rounded-none resize-none"></textarea>
                </div>
                <button type="button" className="btn-primary w-full mt-4">Submit Inquiry</button>
              </form>
            </FadeUp>

          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
