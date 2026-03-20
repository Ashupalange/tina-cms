"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import BaseLayout from "@/components/BaseLayout";
import FadeUp from "@/components/motion/FadeUp";
import HoverScale from "@/components/motion/HoverScale";
import Stagger from "@/components/motion/Stagger";
import Image from "next/image";
import Link from "next/link";

export default function HomeClient({ props, settings }: { props: any, settings: any }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const home = data.home;

  return (
    <BaseLayout settings={settings}>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden woc-section--dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          {home.heroImage && (
            <img
              data-tina-field={tinaField(home, "heroImage")}
              src={home.heroImage}
              alt={home.headline || "Essenzaa"}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="woc-container relative z-20 text-center max-w-4xl">
          <FadeUp delay={0.1}>
            <h1 data-tina-field={tinaField(home, "headline")} className="woc-h1 text-[#F8F4EF] mb-8" style={{ color: "#F8F4EF" }}>
              {home.headline}
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="woc-section woc-section--surface text-center">
        <div className="woc-container max-w-3xl">
          <FadeUp>
            <p data-tina-field={tinaField(home, "introQuote")} className="font-heading text-3xl md:text-5xl leading-tight text-[var(--color-primary)]">
              "{home.introQuote}"
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="woc-section">
        <div className="woc-container">
          <FadeUp>
            <div className="text-center mb-32 flex flex-col items-center gap-8">
              <h2 className="woc-eyebrow woc-eyebrow--lined justify-center">The Collection</h2>
              <p className="woc-h2">Signature Scents</p>
            </div>
          </FadeUp>

          <div className="flex flex-col gap-24">
            {home.signatureScents?.map((scent: any, idx: number) => (
              <Stagger key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full relative aspect-square overflow-hidden bg-[var(--color-surface)]">
                  <HoverScale>
                    {scent.image && (
                      <img
                        data-tina-field={tinaField(scent, "image")}
                        src={scent.image}
                        alt={scent.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </HoverScale>
                </div>
                <div className="flex-1 space-y-6 md:px-8 text-center md:text-left">
                  <h3 data-tina-field={tinaField(scent, "title")} className="woc-h3">{scent.title}</h3>
                  <div className="w-12 h-[1px] bg-[var(--color-secondary)] mx-auto md:mx-0"></div>
                  <p data-tina-field={tinaField(scent, "notes")} className="woc-lead">{scent.notes}</p>
                  <div className="pt-4">
                    <Link href="/collection" className="btn-secondary">
                      View Collection
                    </Link>
                  </div>
                </div>
              </Stagger>
            ))}
          </div>
        </div>
      </section>

      <section className="woc-section woc-section--dark">
        <div className="woc-container">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <FadeUp className="flex-1 space-y-6">
              <h2 className="woc-eyebrow" style={{ color: "var(--color-secondary)" }}>Atelier</h2>
              <h3 data-tina-field={tinaField(home, "atelierTitle")} className="woc-h2" style={{ color: "var(--color-dark-foreground)" }}>{home.atelierTitle}</h3>
              <p data-tina-field={tinaField(home, "atelierText")} className="woc-lead" style={{ color: "color-mix(in srgb, var(--color-dark-foreground) 80%, transparent)" }}>
                {home.atelierText}
              </p>
              <div className="pt-6">
                <Link href="/about" className="btn-secondary" style={{ borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)' }}>
                  Discover Our Origin
                </Link>
              </div>
            </FadeUp>
            <div className="flex-1 w-full aspect-[4/5] relative">
              <HoverScale>
                {home.atelierImage && (
                  <img
                    data-tina-field={tinaField(home, "atelierImage")}
                    src={home.atelierImage}
                    alt={home.atelierTitle || "The Atelier"}
                    className="w-full h-full object-cover"
                  />
                )}
              </HoverScale>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
