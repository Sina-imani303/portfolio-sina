"use client";

import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";

export default function About() {
  const { t } = useTranslation();

  const stats = [
    {
      value: "2+",
      label: t("about.experience"),
    },
    {
      value: "10+",
      label: t("about.projects"),
    },
    {
      value: t("about.focusValue"),
      label: t("about.focus"),
      isText: true,
    },
  ];

  return (
    <section
      id="about"
      className="overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-375">
        <div className="border-t border-neutral-300 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-500">
              03 — {t("about.label")}
            </span>

            <FiArrowUpRight className="h-5 w-5 text-neutral-400" />
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div className="relative">
              <span className="pointer-events-none absolute inset-s-8 -top-12 text-[160px] font-black leading-none text-black/2.5 sm:text-[220px]">
                03
              </span>

              <h2 className="relative z-10 max-w-5xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {t("about.title")}
              </h2>
            </div>

            <div className="flex flex-col justify-end gap-6">
              <p className="text-lg leading-8 text-neutral-700">
                {t("about.description")}
              </p>

              <div className="h-px w-full bg-neutral-300" />

              <p className="leading-7 text-neutral-500">
                {t("about.secondDescription")}
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-y border-neutral-300 sm:grid-cols-3 lg:mt-28">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative overflow-hidden px-2 py-8 transition-colors duration-700 hover:bg-neutral-950 sm:px-6 lg:py-12 ${
                  index !== 0 ? "border-t border-neutral-300 sm:border-t-0" : ""
                } ${
                  index !== stats.length - 1
                    ? "sm:border-e sm:border-neutral-300"
                    : ""
                }`}
              >
                <span className="absolute inset-e-12 -top-12 h-32 w-32 scale-0 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-[3]" />

                <div className="relative z-10">
                  <strong
                    className={
                      stat.isText
                        ? "block text-2xl font-semibold tracking-tight transition-all duration-700 group-hover:-translate-y-1 group-hover:text-white sm:text-3xl lg:text-4xl"
                        : "block text-5xl font-semibold tracking-tight transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:text-white lg:text-7xl"
                    }
                  >
                    {stat.value}
                  </strong>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="block text-sm text-neutral-500 transition-colors duration-700 group-hover:text-neutral-300">
                      {stat.label}
                    </span>

                    <FiArrowUpRight className="h-5 w-5 translate-y-2 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
