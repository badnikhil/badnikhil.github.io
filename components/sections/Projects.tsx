"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, type ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", value: "all" as const },
  { label: "Full Stack", value: "flutter" as const },
  { label: "Systems", value: "systems" as const },
  { label: "GPU / CUDA", value: "gpu" as const },
  { label: "Open Source", value: "opensource" as const },
];

type FilterValue = "all" | ProjectCategory;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS.filter((p) => !p.featured)
      : PROJECTS.filter((p) =>
          p.categories.includes(activeFilter as ProjectCategory),
        );

  return (
    <section id="projects" className="py-24 bg-bg-deep">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <span className="font-mono text-systems text-sm">
            {">"} ./execute --projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-4">
            What I&apos;ve Built
          </h2>
          <p className="text-text-secondary max-w-xl font-mono text-sm opacity-80">
            [SYSTEM]: Loading modules... production apps, CUDA kernels, and
            custom OS detected. Awaiting filter parameter.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mt-10 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={cn(
                  "group flex items-center gap-2 px-5 py-2.5 font-mono text-xs sm:text-sm uppercase tracking-widest whitespace-nowrap transition-all duration-200 border",
                  activeFilter === f.value
                    ? "bg-systems/10 text-systems border-systems shadow-[0_0_15px_rgba(57,255,20,0.15)]"
                    : "bg-transparent text-text-muted border-border-subtle hover:border-systems/50 hover:text-text-primary hover:bg-systems/5",
                )}
              >
                <span
                  className={cn(
                    "w-2 h-3.5",
                    activeFilter === f.value
                      ? "bg-systems animate-blink"
                      : "bg-transparent group-hover:bg-systems/50",
                  )}
                />
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {activeFilter === "all" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {PROJECTS.filter((p) => p.featured).map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.1}>
                <ProjectCard project={p} featured />
              </ScrollReveal>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
