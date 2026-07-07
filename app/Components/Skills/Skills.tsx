"use client";

import {
  useLayoutEffect,
  useRef,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillGroups = [
  {
    id: 1,
    titleKey: "skills.frontend",
    skills: ["Next.js", "React", "TypeScript", "JavaScript"],
  },
  {
    id: 2,
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
    id: 3,
    titleKey: "skills.tools",
    skills: ["Git", "GitHub", "REST API", "PWA"],
  },
];

export default function Skills() {
  const { t } = useTranslation();

  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

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
          duration: 1.3,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".skills-header",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".skills-header-item",
        {
          y: 40,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".skills-header",
            start: "top 80%",
          },
        },
      );

      const rows = gsap.utils.toArray<HTMLElement>(".skill-row");

      rows.forEach((row, index) => {
        const title = row.querySelector(".skill-title");
        const tags = row.querySelectorAll(".skill-tag");
        const number = row.querySelector(".skill-big-number");
        const arrow = row.querySelector(".skill-arrow");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
          },
        });

        timeline
          .fromTo(
            row,
            {
              y: 70,
              opacity: 0,
              scale: 0.97,
              filter: "blur(12px)",
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 1,
              ease: "expo.out",
            },
          )
          .fromTo(
            number,
            {
              x: index % 2 === 0 ? 80 : -80,
              opacity: 0,
              rotate: index % 2 === 0 ? 8 : -8,
            },
            {
              x: 0,
              opacity: 1,
              rotate: 0,
              duration: 1.2,
              ease: "expo.out",
            },
            "-=0.9",
          )
          .fromTo(
            title,
            {
              y: 35,
              opacity: 0,
              filter: "blur(8px)",
            },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power4.out",
            },
            "-=0.9",
          )
          .fromTo(
            tags,
            {
              y: 30,
              opacity: 0,
              scale: 0.8,
              rotate: -3,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
              stagger: {
                each: 0.07,
                from: "random",
              },
              duration: 0.7,
              ease: "back.out(1.8)",
            },
            "-=0.6",
          )
          .fromTo(
            arrow,
            {
              scale: 0,
              rotate: -90,
            },
            {
              scale: 1,
              rotate: 0,
              duration: 0.6,
              ease: "back.out(2)",
            },
            "-=0.5",
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const row = event.currentTarget;
    const glow = row.querySelector(".row-glow");
    const title = row.querySelector(".skill-title");

    const rect = row.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = x - rect.width / 2;
    const centerY = y - rect.height / 2;

    if (glow) {
      gsap.to(glow, {
        x: x - 200,
        y: y - 200,
        duration: 0.7,
        ease: "power3.out",
      });
    }

    if (title) {
      gsap.to(title, {
        x: centerX * 0.015,
        y: centerY * 0.03,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };
  const handleMouseLeave = (event: ReactMouseEvent<HTMLDivElement>) => {
    const row = event.currentTarget;
    const title = row.querySelector(".skill-title");

    if (title) {
      gsap.to(title, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="
        relative
        overflow-hidden
        px-4
        py-16
        sm:px-6
        sm:py-20
        lg:px-10
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-375">
        <div
          className="
            skills-header
            relative
            flex
            flex-col
            items-center
            pt-8
            text-center
            lg:pt-10
          "
        >
          <span
            ref={lineRef}
            className="
              absolute
              inset-x-0
              top-0
              h-px
              bg-neutral-300
            "
          />
          <div className="skills-header-item flex items-center justify-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500 sm:text-sm">
              {t("skills.label")}
            </span>
          </div>
          <h2
            className="
    skills-header-item
    mt-6
    max-w-3xl
    text-4xl
    font-semibold
    leading-[1.05]
    tracking-tigher
    text-neutral-950
    sm:text-5xl
    lg:text-[56px]
  "
          >
            {t("skills.title")}
          </h2>
          <p
            className="
              skills-header-item
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-neutral-600
              sm:text-base
              lg:mt-7
              lg:text-lg
              tracking-widest
            "
          >
            {t("skills.description")}
          </p>
        </div>
        <div className="mt-14 border-b border-neutral-300 sm:mt-20 lg:mt-24">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="
        skill-row
        group
        relative
        overflow-hidden
        border-t
        border-neutral-300
        transition-[background-color,border-color,transform]
        duration-700
        hover:border-neutral-800
        hover:bg-neutral-950
      "
            >
              <span
                className="
          row-glow
          pointer-events-none
          absolute
          left-0
          top-0
          hidden
          h-100
          w-100
          rounded-full
          bg-white/10
          opacity-0
          blur-[90px]
          transition-opacity
          duration-500
          group-hover:opacity-100
          lg:block
          tracking-widest
        "
              />
              <span
                className="
          pointer-events-none
          absolute
          left-[-30%]
          top-0
          h-px
          w-[30%]
          bg-linear-to-  
          from-transparent
          via-white
          to-transparent
          opacity-0
          transition-all
          duration-1000
          group-hover:left-full
          group-hover:opacity-70
          tracking-widest
        "
              />

              <span
                className="
          skill-big-number
          pointer-events-none
          absolute
          -bottom-6
          right-4
          select-none
          text-[100px]
          font-black
          leading-none
          tracking-wider
          text-neutral-950/[0.035]
          transition-all
          duration-700
          group-hover:-translate-y-3
          group-hover:text-white/4
          sm:text-[130px]
          lg:right-10
          lg:text-[170px]
        "
              ></span>

              <div
                className="
          relative
          z-10
          flex
          flex-col
          items-center
          gap-7
          px-4
          py-11
          text-center
          sm:px-6
          sm:py-14
          lg:grid
          lg:grid-cols-[minmax(220px,0.65fr)_minmax(0,1.8fr)]
          lg:items-center
          lg:gap-12
          lg:px-10
          lg:py-16
          lg:text-start
          tracking-widest
        "
              >
                <div className="flex w-full items-center justify-center gap-4 lg:justify-start">
                  <div>
                    <span
                      className="
                mb-2
                block
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-neutral-400
                transition-colors
                duration-500
                group-hover:text-white/40
              "
                    >
                      0{group.id}
                    </span>

                    <h3
                      className="
                skill-title
                text-2xl
                font-semibold
                leading-tight
                tracking-[-0.04em]
                text-neutral-950
                transition-colors
                duration-500
                group-hover:text-white
                sm:text-3xl
                lg:text-[30px]
              "
                    >
                      {t(group.titleKey)}
                    </h3>
                  </div>

                  <span
                    className="
              skill-arrow
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-neutral-300
              transition-all
              duration-500
              group-hover:rotate-45
              group-hover:border-white/20
              group-hover:bg-white
              group-hover:text-neutral-950
            "
                  >
                    <FiArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div
                  className="
            flex
            w-full
            flex-wrap
            justify-center
            gap-2.5
            lg:justify-start
            lg:gap-3
          "
                >
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                skill-tag
                relative
                overflow-hidden
                whitespace-nowrap
                rounded-full
                border
                border-neutral-300
                bg-white/20
                px-4
                py-2
                text-xs
                backdrop-blur-sm
                transition-all
                duration-300
                group-hover:border-white/15
                group-hover:bg-white/3
                group-hover:text-neutral-300
                hover:-translate-y-1
                hover:scale-105
                hover:border-white
                hover:bg-white
                hover:text-neutral-950
                hover:shadow-[0_12px_30px_-12px_rgba(255,255,255,0.4)]
                sm:px-5
                sm:py-2.5
                sm:text-sm
              "
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
