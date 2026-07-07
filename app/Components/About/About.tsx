"use client";

import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const { t } = useTranslation();

  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        {
          scaleX: 0,
          transformOrigin: "center",
        },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );
      gsap.fromTo(
        ".about-label",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-header",
            start: "top 85%",
          },
        },
      );
      gsap.fromTo(
        ".about-big-number",
        {
          y: 80,
          opacity: 0,
          rotate: -8,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          scale: 1,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".about-main",
            start: "top 82%",
          },
        },
      );
      gsap.fromTo(
        ".about-title",
        {
          y: 70,
          opacity: 0,
          filter: "blur(12px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".about-main",
            start: "top 80%",
          },
        },
      );
      gsap.fromTo(
        ".about-text-item",
        {
          y: 40,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-description",
            start: "top 85%",
          },
        },
      );
      gsap.fromTo(
        ".about-stat",
        {
          y: 70,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 88%",
          },
        },
      );
      gsap.fromTo(
        ".stat-value",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 85%",
          },
        },
      );
      gsap.to(".about-big-number", {
        y: -70,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-main",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
    relative
    overflow-hidden
    px-4
    py-14
    sm:px-6
    sm:py-20
    lg:px-8
    lg:py-24
    xl:px-10
    xl:py-28
  "
    >
      <div className="mx-auto w-full max-w-375">
        <div className="about-header relative pt-7">
          <div
            ref={lineRef}
            className="absolute inset-x-0 top-0 h-px bg-neutral-300"
          />
          <div className="about-label flex items-center justify-center gap-3 lg:justify-between">
            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-neutral-950
                  text-[10px]
                  font-medium
                  text-white
                "
              >
                03
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500 sm:text-sm">
                {t("about.label")}
              </span>
            </div>

            <span
              className="
                hidden
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-neutral-300
                text-neutral-500
                lg:flex
              "
            >
              <FiArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div
            className="
    about-main
    mt-10
    grid
    gap-8
    text-center
    sm:mt-14
    sm:gap-10
    lg:mt-20
    lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]
    lg:items-end
    lg:gap-14
    lg:text-start
    xl:gap-20
  "
          >
            <div className="relative">
              <h2
                className="
    about-title
    relative
    z-10
    mx-auto
    max-w-4xl
    text-[clamp(2.25rem,10vw,3.25rem)]
    font-semibold
    leading-[1.08]
    tracking-wider
    text-neutral-950
    sm:text-[clamp(3rem,7vw,4rem)]
    lg:mx-0
    lg:text-[clamp(3rem,4.5vw,4.5rem)]
  "
              >
                {t("about.title")}
              </h2>
            </div>

            <div
              className="
    about-description
    mx-auto
    flex
    w-full
    max-w-xl
    flex-col
    items-center
    gap-5
    sm:gap-6
    lg:mx-0
    lg:items-start
  "
            >
              <p className="about-text-item text-sm leading-7 tracking-widest text-neutral-700 sm:text-base sm:leading-8 lg:text-lg">
                {t("about.description")}
              </p>

              <div className="about-text-item h-px w-full bg-neutral-300" />

              <p className="about-text-item text-sm leading-7 tracking-widest text-neutral-500 sm:text-base">
                {t("about.secondDescription")}
              </p>
            </div>
          </div>

          <div
            className="
    about-stats
    mt-12
    grid
    overflow-hidden
    border-y
    border-neutral-300
    sm:mt-16
    md:grid-cols-3
    lg:mt-20
    xl:mt-24
  "
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
  about-stat
  group
  relative
  min-h-40
  overflow-hidden
  px-5
  py-7
  text-center
  transition-colors
  duration-700
  hover:bg-neutral-950

  sm:min-h-45
  sm:px-6
  sm:py-8

  md:min-h-52.5
  md:text-start

  lg:min-h-57.5
  lg:px-8
  lg:py-10

  ${index !== 0 ? "border-t border-neutral-300 md:border-t-0" : ""}

  ${index !== stats.length - 1 ? "md:border-e md:border-neutral-300" : ""}
`}
              >
                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-40
                    w-40
                    scale-0
                    rounded-full
                    bg-white/6
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-[4]
                  "
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <strong
                    className={`
                    stat-value
                    block
                    font-semibold
                    leading-none
                    tracking-widest
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:text-white
                  
                    ${
                      stat.isText
                        ? "text-xl sm:text-2xl lg:text-3xl xl:text-4xl"
                        : "text-4xl sm:text-5xl lg:text-6xl xl:text-[72px]"
                    }
                      `}
                  >
                    {stat.value}
                  </strong>

                  <div className="mt-8 flex items-center justify-center gap-4 sm:justify-between">
                    <span className="text-sm text-neutral-500 transition-colors duration-500 group-hover:text-neutral-300 tracking-wider">
                      {stat.label}
                    </span>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        translate-y-3
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-neutral-950
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:rotate-45
                        group-hover:opacity-100
                      "
                    >
                      <FiArrowUpRight className="h-4 w-4" />
                    </span>
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
