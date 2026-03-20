"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import BaseLayout from "@/components/BaseLayout";
import FadeUp from "@/components/motion/FadeUp";
import HoverScale from "@/components/motion/HoverScale";

export default function CollectionClient({ props, settings }: { props: any, settings: any }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const collectionPage = data.collectionPage;

  return (
    <BaseLayout settings={settings}>
      {/* 1. ENTRANCE (Light Hero) */}
      <section className="woc-section pt-[12vh] pb-16 text-center">
        <div className="woc-container max-w-3xl">
          <FadeUp>
            <h1 data-tina-field={tinaField(collectionPage, "headline")} className="woc-h1 text-[var(--color-primary)] mb-6">
              {collectionPage.headline || "The Signature Scents"}
            </h1>
            <p data-tina-field={tinaField(collectionPage, "subheadline")} className="woc-lead">{collectionPage.subheadline}</p>
          </FadeUp>
        </div>
      </section>

      {/* 2. THE SCENTS (Alternating Layout) */}
      <section className="woc-section pt-0">
        <div className="woc-container max-w-5xl">
          <div className="flex flex-col gap-32">
            {collectionPage.scents?.map((scent: any, idx: number) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full aspect-[4/5] relative bg-[var(--color-surface)]">
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
                <FadeUp className="flex-1 space-y-6 md:px-8 text-center md:text-left">
                  <h2 data-tina-field={tinaField(scent, "title")} className="woc-h2">{scent.title}</h2>
                  <div className="w-12 h-[1px] bg-[var(--color-secondary)] mx-auto md:mx-0"></div>
                  <p data-tina-field={tinaField(scent, "notes")} className="woc-eyebrow tracking-widest text-[var(--color-muted)]">{scent.notes}</p>
                  <p data-tina-field={tinaField(scent, "description")} className="woc-lead pt-4">{scent.description}</p>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
