"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import SkillDomain from "@/components/ui/SkillDomain";
import { SKILL_DOMAINS, LANGUAGES } from "@/data/skills";
import { cn } from "@/lib/utils";

const getBarColor = (name: string) => {
  if (name.includes("Dart")) return "text-flutter";
  if (name.includes("CUDA")) return "text-cuda";
  if (name.includes("D Language")) return "text-purple";
  return "text-systems";
};

const HtopBar = ({
  label,
  level,
  index,
}: {
  label: string;
  level: number;
  index: number;
}) => {
  const percentage = (level / 14) * 100;
  const totalPipes = 36;
  const filledPipes = Math.floor((percentage / 100) * totalPipes);
  const emptyPipes = totalPipes - filledPipes;
  const barColor = getBarColor(label);

  return (
    <div className="flex items-center whitespace-pre">
      <span className="w-6 text-text-muted text-right mr-2">{index + 1}</span>
      <span className="text-text-muted mr-1">[</span>
      <span className={barColor}>{"|".repeat(filledPipes)}</span>
      <span className="text-text-muted/30">{"|".repeat(emptyPipes)}</span>
      <span className="text-text-muted ml-1">]</span>
      <span className="w-14 text-right text-text-primary ml-2">
        {percentage.toFixed(1)}%
      </span>
    </div>
  );
};

export default function Skills() {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    // 1234567 seconds is roughly 14 days, a nice starting point
    setUptime(1234567);
    const interval = setInterval(() => setUptime((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const dDisplay = d > 0 ? `${d} days, ` : "";
    return `${dDisplay}${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section id="skills" className="py-24 bg-bg-surface">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <span className="font-mono text-flutter text-sm">05. skills</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-4">
            System Resources
          </h2>
          <p className="text-text-secondary max-w-xl">
            Organized by domain. Language proficiencies mapped to live htop CPU
            threads.
          </p>
        </ScrollReveal>

        {/* htop terminal block */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 bg-[#000000] border border-border-subtle rounded-xl p-4 sm:p-6 overflow-x-auto shadow-card">
            <div className="min-w-[800px] font-mono text-sm">
              {/* Header Section */}
              <div className="flex justify-between mb-6">
                {/* Left Col: Bars */}
                <div className="space-y-1">
                  {LANGUAGES.map((lang, i) => (
                    <HtopBar
                      key={lang.name}
                      label={lang.name}
                      level={lang.level}
                      index={i}
                    />
                  ))}
                  <div className="flex items-center whitespace-pre mt-2">
                    <span className="w-6 text-text-primary text-right mr-2 font-bold">
                      Mem
                    </span>
                    <span className="text-text-muted mr-1">[</span>
                    <span className="text-gold">{"|".repeat(12)}</span>
                    <span className="text-text-muted/30">{"|".repeat(24)}</span>
                    <span className="text-text-muted ml-1">]</span>
                    <span className="ml-2 text-text-primary">1.21G/32.0G</span>
                  </div>
                  <div className="flex items-center whitespace-pre">
                    <span className="w-6 text-text-primary text-right mr-2 font-bold">
                      Swp
                    </span>
                    <span className="text-text-muted mr-1">[</span>
                    <span className="text-red-500"></span>
                    <span className="text-text-muted/30">{"|".repeat(36)}</span>
                    <span className="text-text-muted ml-1">]</span>
                    <span className="ml-2 text-text-primary">0K/4.00G</span>
                  </div>
                </div>

                {/* Right Col: Stats */}
                <div className="text-right text-text-primary space-y-1 pr-2">
                  <p>
                    Tasks: <span className="font-bold">142</span>,{" "}
                    <span className="font-bold">284</span> thr;{" "}
                    <span className="text-systems font-bold">1</span> running
                  </p>
                  <p>
                    Load average:{" "}
                    <span className="font-bold text-systems">0.02</span> 0.04
                    0.05
                  </p>
                  <p>
                    Uptime:{" "}
                    <span className="font-bold">{formatUptime(uptime)}</span>
                  </p>
                </div>
              </div>

              {/* Process List Header */}
              <div className="bg-systems text-[#000000] font-bold px-2 py-0.5 flex">
                <span className="w-12">PID</span>
                <span className="w-20">USER</span>
                <span className="w-10">PRI</span>
                <span className="w-10">NI</span>
                <span className="w-16">VIRT</span>
                <span className="w-14">RES</span>
                <span className="w-14">SHR</span>
                <span className="w-8">S</span>
                <span className="w-12">CPU%</span>
                <span className="w-12">MEM%</span>
                <span className="w-24">TIME+</span>
                <span className="flex-1">Command</span>
              </div>

              {/* Process List Rows */}
              <div className="px-2 py-1 text-text-secondary space-y-1">
                <div className="flex">
                  <span className="w-12">1</span>
                  <span className="w-20">root</span>
                  <span className="w-10">20</span>
                  <span className="w-10">0</span>
                  <span className="w-16">225M</span>
                  <span className="w-14">12M</span>
                  <span className="w-14">8M</span>
                  <span className="w-8 text-systems">S</span>
                  <span className="w-12">0.0</span>
                  <span className="w-12">0.1</span>
                  <span className="w-24 text-text-muted">1:12.34</span>
                  <span className="flex-1 text-text-primary">
                    /sbin/init (MyOS - UEFI)
                  </span>
                </div>
                <div className="flex text-text-primary font-medium bg-systems/10 -mx-2 px-2 py-0.5 rounded">
                  <span className="w-12 text-systems">1337</span>
                  <span className="w-20">badnikhil</span>
                  <span className="w-10">20</span>
                  <span className="w-10">0</span>
                  <span className="w-16">4.2G</span>
                  <span className="w-14">1.8G</span>
                  <span className="w-14">256M</span>
                  <span className="w-8 text-systems">R</span>
                  <span className="w-12">93.0</span>
                  <span className="w-12">5.6</span>
                  <span className="w-24 text-text-muted">14:59.01</span>
                  <span className="flex-1 text-systems">
                    nvcc -O3 -arch=sm_75 matmul_register_tiling.cu
                  </span>
                </div>
                <div className="flex">
                  <span className="w-12">1402</span>
                  <span className="w-20">badnikhil</span>
                  <span className="w-10">20</span>
                  <span className="w-10">0</span>
                  <span className="w-16">1.5G</span>
                  <span className="w-14">800M</span>
                  <span className="w-14">120M</span>
                  <span className="w-8 text-systems">S</span>
                  <span className="w-12">12.5</span>
                  <span className="w-12">2.5</span>
                  <span className="w-24 text-text-muted">5:22.14</span>
                  <span className="flex-1">flutter run -d linux --release</span>
                </div>
                <div className="flex">
                  <span className="w-12">8080</span>
                  <span className="w-20">badnikhil</span>
                  <span className="w-10">20</span>
                  <span className="w-10">0</span>
                  <span className="w-16">800M</span>
                  <span className="w-14">200M</span>
                  <span className="w-14">64M</span>
                  <span className="w-8 text-systems">S</span>
                  <span className="w-12">2.0</span>
                  <span className="w-12">0.6</span>
                  <span className="w-24 text-text-muted">0:45.12</span>
                  <span className="flex-1">apidash --headless --port 8080</span>
                </div>
                <div className="flex">
                  <span className="w-12">9001</span>
                  <span className="w-20">badnikhil</span>
                  <span className="w-10">20</span>
                  <span className="w-10">0</span>
                  <span className="w-16">300M</span>
                  <span className="w-14">45M</span>
                  <span className="w-14">12M</span>
                  <span className="w-8 text-systems">S</span>
                  <span className="w-12">1.5</span>
                  <span className="w-12">0.2</span>
                  <span className="w-24 text-text-muted">0:12.88</span>
                  <span className="flex-1">dmd -O -release bindbc_cuda.d</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Domain grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {SKILL_DOMAINS.map((domain, i) => (
            <ScrollReveal key={domain.id} delay={i * 0.08}>
              <SkillDomain domain={domain} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
