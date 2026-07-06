"use client";

import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";

const skillGroups = [
  {
    number: "01",
    titleKey: "skills.frontend",
    skills: ["Next.js", "React", "TypeScript", "JavaScript"],
  },
  {
    number: "02",
    titleKey: "skills.styling",
    skills: [
      "Tailwind CSS",
      "Responsive Design",
      "UI Development",
      "GSAP",
      "Three.js",
    ],
  },
  {
    number: "03",
    titleKey: "skills.tools",
    skills: ["Git", "GitHub", "REST API", "PWA"],
  },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-375">
        <div className="grid gap-8 border-t border-neutral-300 pt-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm text-neutral-500">
              02 — {t("skills.label")}
            </span>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {t("skills.title")}
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-lg text-base leading-7 text-neutral-600 lg:text-lg">
              {t("skills.description")}
            </p>
          </div>
        </div>

        <div className="mt-16 border-b border-neutral-300 sm:mt-24">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="group relative overflow-hidden border-t border-neutral-300 transition-colors duration-500 hover:bg-neutral-950"
            >
              <span className="pointer-events-none absolute -bottom-8 inset-e-4 translate-y-full text-[140px] font-black leading-none text-white/4 transition-transform duration-700 group-hover:translate-y-0">
                {group.number}
              </span>

              <div className="relative z-10 grid gap-6 px-2 py-8 sm:px-4 sm:py-10 lg:grid-cols-[80px_1fr_1.5fr] lg:items-center">
                <span className="text-sm text-neutral-400 transition-colors duration-500 group-hover:text-neutral-500">
                  {group.number}
                </span>

                {/* Title */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold transition-all duration-500 group-hover:translate-x-2 group-hover:text-white sm:text-2xl">
                    {t(group.titleKey)}
                  </h3>

                  <FiArrowUpRight className="h-5 w-5 scale-0 text-white opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 lg:hidden" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-neutral-300 px-4 py-2 text-sm transition-all duration-500 group-hover:border-white/20 group-hover:text-neutral-300 hover:border-white! hover:bg-white! hover:text-neutral-950! sm:px-5 sm:py-2.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
