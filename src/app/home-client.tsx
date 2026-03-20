"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import BaseLayout from "@/components/BaseLayout";
import FadeUp from "@/components/motion/FadeUp";
import HoverScale from "@/components/motion/HoverScale";
import Stagger from "@/components/motion/Stagger";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HomeClient({ props, settings }: { props: any, settings: any }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const home = data.home;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <BaseLayout settings={settings}>
      {/* 1. HERO SECTION */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden woc-section--dark">
        <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          {home.hero?.backgroundImage && (
            <img
              data-tina-field={tinaField(home.hero, "backgroundImage")}
              src={home.hero.backgroundImage}
              alt="Cafedelightt Interior"
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
        
        <div className="woc-container relative z-20 text-center max-w-5xl">
          <FadeUp delay={0.2}>
            <p data-tina-field={tinaField(home.hero, "tagline")} className="woc-eyebrow mb-6 tracking-[0.3em]" style={{ color: "#F5E9DC" }}>
              {home.hero?.tagline}
            </p>
            <h1 data-tina-field={tinaField(home, "title")} className="woc-h1 text-[#FAF7F2] mb-12 italic font-normal">
              {home.title}
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="#menu" className="btn-primary">
                {home.hero?.ctaPrimary || "Explore Menu"}
              </Link>
              <Link href="#visit" className="btn-secondary" style={{ borderColor: "#FAF7F2", color: "#FAF7F2" }}>
                {home.hero?.ctaSecondary || "Visit Us"}
              </Link>
            </div>
          </FadeUp>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-[1px] h-12 bg-[#FAF7F2]/30" />
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="woc-section woc-section--surface overflow-hidden">
        <div className="woc-container">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 order-2 lg:order-1">
              <FadeUp>
                <div className="space-y-8 max-w-xl">
                  <h2 data-tina-field={tinaField(home.about, "headline")} className="woc-h2 leading-[1.1]">
                    {home.about?.headline}
                  </h2>
                  <div className="w-16 h-[2px] bg-[var(--color-secondary)]" />
                  <p data-tina-field={tinaField(home.about, "story")} className="woc-lead text-[var(--color-primary)] opacity-90 leading-relaxed font-sans">
                    {home.about?.story}
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="flex-1 order-1 lg:order-2 w-full">
              <FadeUp delay={0.3}>
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elevated">
                  {home.about?.image && (
                    <img 
                      data-tina-field={tinaField(home.about, "image")}
                      src={home.about.image} 
                      alt="The Story" 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE MENU */}
      <section id="menu" className="woc-section bg-[var(--color-background)]">
        <div className="woc-container">
          <FadeUp>
            <div className="text-center mb-24">
              <h2 data-tina-field={tinaField(home.menu, "headline")} className="woc-h2 italic mb-4">{home.menu?.headline}</h2>
              <div className="w-24 h-[1px] bg-[var(--color-secondary)] mx-auto" />
            </div>
          </FadeUp>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {home.menu?.items?.map((item: any, idx: number) => (
              <div key={idx} className="group cursor-default">
                <div className="relative aspect-square mb-8 overflow-hidden rounded-2xl">
                  <HoverScale>
                    {item.image && (
                      <img 
                        data-tina-field={tinaField(item, "image")}
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                      />
                    )}
                  </HoverScale>
                </div>
                <h3 data-tina-field={tinaField(item, "name")} className="woc-h3 mb-2">{item.name}</h3>
                <p data-tina-field={tinaField(item, "description")} className="font-sans text-sm tracking-wide opacity-70 italic">{item.description}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 4. EXPERIENCE SECTION (Gallery Collage) */}
      <section id="experience" className="woc-section woc-section--surface">
        <div className="woc-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-6">
              <FadeUp>
                <h2 data-tina-field={tinaField(home.experience, "headline")} className="woc-h2 italic">{home.experience?.headline}</h2>
                <p data-tina-field={tinaField(home.experience, "description")} className="woc-lead">{home.experience?.description}</p>
              </FadeUp>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-4">
                {home.experience?.gallery?.map((img: string, idx: number) => (
                  <FadeUp key={idx} delay={idx * 0.15}>
                    <div className={`relative overflow-hidden rounded-xl ${idx === 1 || idx === 2 ? 'aspect-[4/5]' : 'aspect-square'}`}>
                      <img src={img} alt="Experience" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="woc-section bg-[var(--color-background)]">
        <div className="woc-container text-center max-w-4xl">
           <FadeUp>
            <h2 data-tina-field={tinaField(home.testimonials, "headline")} className="woc-h2 mb-16 italic">{home.testimonials?.headline}</h2>
           </FadeUp>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
             {home.testimonials?.list?.map((item: any, idx: number) => (
               <FadeUp key={idx} delay={idx * 0.1}>
                 <div className="woc-card border-none bg-[var(--color-surface)] p-12">
                   <p data-tina-field={tinaField(item, "quote")} className="font-sans text-lg italic leading-relaxed mb-8 opacity-80">
                     "{item.quote}"
                   </p>
                   <h4 data-tina-field={tinaField(item, "author")} className="woc-eyebrow" style={{ letterSpacing: '0.2em' }}>
                     - {item.author}
                   </h4>
                 </div>
               </FadeUp>
             ))}
           </div>
        </div>
      </section>

      {/* 6. LOCATION & FINAL CTA */}
      <section id="visit" className="woc-section woc-section--dark text-center">
        <div className="woc-container max-w-3xl">
          <FadeUp>
            <h2 data-tina-field={tinaField(home.location, "headline")} className="woc-h2 text-[#FAF7F2] mb-12 italic">{home.location?.headline}</h2>
            <div className="space-y-12 mb-16">
              <div>
                <p className="woc-eyebrow text-[var(--color-secondary)] mb-4">Location</p>
                <p data-tina-field={tinaField(home.location, "address")} className="woc-h3 text-[#FAF7F2]">{home.location?.address}</p>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-16">
                <div>
                  <p className="woc-eyebrow text-[var(--color-secondary)] mb-4">Opening Hours</p>
                  <pre data-tina-field={tinaField(home.location, "hours")} className="font-sans text-sm text-[#FAF7F2]/80 leading-loose uppercase tracking-widest bg-transparent border-none p-0 whitespace-pre-wrap">
                    {home.location?.hours}
                  </pre>
                </div>
                <div>
                  <p className="woc-eyebrow text-[var(--color-secondary)] mb-4">Contact</p>
                  <Link href={`https://wa.me/${home.location?.whatsappNumber}`} className="woc-h3 text-[#FAF7F2] hover:text-[var(--color-secondary)] transition-colors">
                    WhatsApp Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-[#FAF7F2]/10">
              <p className="italic text-2xl text-[#FAF7F2] mb-8 font-heading">"Come for the coffee. Stay for the comfort."</p>
              <Link href="#visit" className="btn-primary" style={{ backgroundColor: "#FAF7F2", color: "#3E2B1F", borderColor: "#FAF7F2" }}>
                Plan Your Visit
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </BaseLayout>
  );
}
