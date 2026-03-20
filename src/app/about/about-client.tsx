"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import BaseLayout from "@/components/BaseLayout";
import FadeUp from "@/components/motion/FadeUp";
import Stagger from "@/components/motion/Stagger";
import HoverScale from "@/components/motion/HoverScale";

export default function AboutClient({ props, settings }: { props: any, settings: any }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const about = data.about;

  return (
    <BaseLayout settings={settings}>
      {/* 1. THE VISION (Cream Background) */}
      <section className="woc-section min-h-[60vh] flex items-center justify-center text-center">
        <div className="woc-container max-w-4xl">
          <FadeUp>
            <h1 data-tina-field={tinaField(about, "headline")} className="woc-h1 leading-tight text-[var(--color-primary)]">
              {about.headline || "We do not sell scents. We curate atmosphere."}
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* 2. THE ORIGIN (Split Layout) */}
      <section className="woc-section woc-section--surface">
        <div className="woc-container">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 w-full aspect-[4/5] relative">
              <HoverScale>
                {about.originImage && (
                  <img
                    data-tina-field={tinaField(about, "originImage")}
                    src={about.originImage}
                    alt="The Origin"
                    className="w-full h-full object-cover"
                  />
                )}
              </HoverScale>
            </div>
            <FadeUp className="flex-1 space-y-6 md:px-8">
              <h2 className="woc-eyebrow">The Origin</h2>
              <p data-tina-field={tinaField(about, "originStory")} className="woc-lead text-[var(--color-foreground)]">
                {about.originStory}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3. THE ETHOS (Grid of Pillars) */}
      <section className="woc-section woc-section--dark">
        <div className="woc-container">
          <FadeUp className="text-center mb-16">
            <h2 className="woc-eyebrow" style={{ color: "var(--color-secondary)" }}>The Ethos</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {about.pillars?.map((pillar: any, idx: number) => (
              <Stagger key={idx} className="text-center md:text-left space-y-4">
                <div className="w-8 h-[1px] bg-[var(--color-secondary)] mx-auto md:mx-0 mb-6"></div>
                <h3 data-tina-field={tinaField(pillar, "title")} className="woc-h3" style={{ color: "var(--color-dark-foreground)" }}>{pillar.title}</h3>
                <p data-tina-field={tinaField(pillar, "description")} style={{ color: "color-mix(in srgb, var(--color-dark-foreground) 70%, transparent)" }}>
                  {pillar.description}
                </p>
              </Stagger>
            ))}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
