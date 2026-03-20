// SCHEMA FIELDS FOR THIS PAGE
// -----------------------------------------------------------------------
// headline            string
// subheadline         string (textarea)
// scents              object[] — { title, notes, description, image }
// -----------------------------------------------------------------------

import client from "../../../tina/__generated__/client";
import BaseLayout from "@/components/BaseLayout";
import FadeUp from "@/components/motion/FadeUp";
import Stagger from "@/components/motion/Stagger";
import HoverScale from "@/components/motion/HoverScale";

export default async function CollectionPage() {
  const settingsRes = await client.queries.settings({
    relativePath: "global.json",
  });

  const pageRes = await client.queries.collectionPage({
    relativePath: "collection.md",
  });

  const data = pageRes.data.collectionPage;

  return (
    <BaseLayout settings={settingsRes.data.settings}>
      {/* 1. ENTRANCE (Light Hero) */}
      <section className="woc-section pt-[12vh] pb-16 text-center">
        <div className="woc-container max-w-3xl">
          <FadeUp>
            <h1 className="woc-h1 text-[var(--color-primary)] mb-6">
              {data.headline || "The Signature Scents"}
            </h1>
            <p className="woc-lead">{data.subheadline}</p>
          </FadeUp>
        </div>
      </section>

      {/* 2. THE SCENTS (Alternating Layout) */}
      <section className="woc-section pt-0">
        <div className="woc-container max-w-5xl">
          <div className="flex flex-col gap-32">
            {data.scents?.map((scent: any, idx: number) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full aspect-[4/5] relative bg-[var(--color-surface)]">
                  <HoverScale>
                    {scent.image && (
                      <img
                        src={scent.image}
                        alt={scent.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </HoverScale>
                </div>
                <FadeUp className="flex-1 space-y-6 md:px-8 text-center md:text-left">
                  <h2 className="woc-h2">{scent.title}</h2>
                  <div className="w-12 h-[1px] bg-[var(--color-secondary)] mx-auto md:mx-0"></div>
                  <p className="woc-eyebrow tracking-widest text-[var(--color-muted)]">{scent.notes}</p>
                  <p className="woc-lead pt-4">{scent.description}</p>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
