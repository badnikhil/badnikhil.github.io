"use client";

import { EXPERIENCES } from "@/data/experience";
import Timeline from "@/components/ui/Timeline";
import ScrollReveal from "@/components/effects/ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-surface">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="font-mono text-flutter text-sm">
              02. experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">
              Where I&apos;ve Built
            </h2>
          </div>
        </ScrollReveal>
        <Timeline items={EXPERIENCES} />
      </div>
    </section>
  );
}
