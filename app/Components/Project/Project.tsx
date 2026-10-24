"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../ProjectCard/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Sofia",
    descriptionKey: "projects.items.sofia.description",
    image: "/projects/Sofia.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "i18next", "PWA", "Gsap"],
    liveUrl: "https://sofia-landing-page-three.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Gustta Hotel Booking",
    descriptionKey: "projects.items.gustta.description",
    image: "/projects/Guss.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "i18next", "PWA"],
    liveUrl: "https://gustta-hotel-booking.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Saas Dashboard",
    descriptionKey: "projects.items.Sass.description",
    image: "/projects/Crm.png",
    technologies: ["React", "JavaScript", "Material UI", "Recharts", "Tailwind CSS"],
    liveUrl: "https://react-saas-livid.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Tadin Shop",
    descriptionKey: "projects.items.tadin.description",
    image: "/projects/Tadin.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "RTK"],
    liveUrl: "https://tadin-shop.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Ata Shop",
    descriptionKey: "projects.items.ata.description",
    image: "/projects/ATAshop.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "RTK"],
    liveUrl: "https://ata-shop.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "jewerly FURROV shop",
    descriptionKey: "projects.items.jewerly.description",
    image: "/projects/jemerly.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "gsap", "threejs"],
    liveUrl: "https://jewelry-store-sepia-nu.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Digital Menu",
    descriptionKey: "projects.items.Digital Menu.description",
    image: "/projects/digital menu.png",
    technologies: ["react", "Tailwind CSS", "gsap"],
    liveUrl: "https://digital-menu-ivory-seven.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "RentX",
    descriptionKey: "projects.items.Rent car.description",
    image: "/projects/rent.png",
    technologies: ["Nextjs", "Tailwind CSS", "Supabase"],
    liveUrl: "https://rent-x-w26h.vercel.app/",
    githubUrl: "#",
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const [visibleProject, setVisibleProject] = useState(4);
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 85%",
          },
        },
      );
      gsap.fromTo(
        ".projects-label",
        {
          y: 25,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 80%",
          },
        },
      );
      gsap.fromTo(
        ".projects-title",
        {
          y: 80,
          opacity: 0,
          rotateX: -30,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 78%",
          },
        },
      );
      gsap.fromTo(
        ".projects-description",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 78%",
          },
        },
      );
      const cards = gsap.utils.toArray<HTMLElement>(".project-item");

      cards.forEach((card, index) => {
        const content = card.querySelector(".project-content");

        const number = card.querySelector(".project-number");

        const direction = index % 2 === 0 ? -1 : 1;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            end: "top 35%",
            toggleActions: "play none none reverse",
          },
        });
        timeline.fromTo(
          content,
          {
            y: 100,
            x: direction * 50,
            opacity: 0,
            scale: 0.94,
            rotate: direction * 2,
            filter: "blur(14px)",
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            duration: 1.3,
            ease: "expo.out",
          },
        );
        timeline.fromTo(
          number,
          {
            y: 50,
            opacity: 0,
            scale: 0.7,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=1",
        );
        gsap.to(content, {
          yPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="
      relative
      overflow-hidden
      px-4
      py-16
      sm:px-6
      sm:py-24
      lg:px-10
      lg:py-32
    "
    >
      <div
        className="
        pointer-events-none
        absolute
        left-1/2
        top-[20%]
        h-100
        w-100
        -translate-x-1/2
        rounded-full
        bg-neutral-200/40
        blur-[120px]

        sm:h-137.5
        sm:w-137.5

        lg:h-175
        lg:w-175
        lg:blur-[150px]
      "
      />

      <div className="relative mx-auto w-full max-w-375">
        <div
          className="
          projects-header
          relative
          mb-14
          flex
          flex-col
          items-center
          gap-8
          pt-8
          text-center

          sm:mb-20

          lg:mb-28
          lg:flex-row
          lg:items-end
          lg:justify-between
          lg:text-start
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

          <div className="flex w-full flex-col items-center lg:items-start">
            <div className="projects-label flex items-center justify-center gap-3 lg:justify-start">
              <span
                className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-neutral-950
                text-[10px]
                font-medium
                text-white
              "
              >
                01
              </span>

              <span
                className="
                text-xs
                font-medium
                uppercase
                tracking-wide
                text-neutral-500
                sm:text-sm
                sm:tracking-[0.16em]
              "
              >
                {t("projects.label")}
              </span>
            </div>

            <div className="mt-6 w-full overflow-hidden py-3 sm:py-5">
              <h2
                className="
                projects-title
                mx-auto
                max-w-212.5
                text-[clamp(2.7rem,12vw,4.5rem)]
                font-semibold
                leading-[0.98]
                tracking-wide
                text-neutral-950
                lg:mx-0
                lg:text-[clamp(3.8rem,5.5vw,6rem)]
              "
              >
                {t("projects.title")}
              </h2>
            </div>
          </div>

          <div
            className="
            projects-description
            flex
            max-w-md
            flex-col
            items-center

            lg:items-start
            lg:pb-2
          "
          >
            <p
              className="
              text-sm
              leading-7
              text-neutral-600
                tracking-widest
              sm:text-base

              lg:text-lg
            "
            >
              {t("projects.description")}
            </p>
          </div>
        </div>
        <div
          className="
          grid
          grid-cols-1
          gap-y-20

          sm:gap-y-24

          lg:grid-cols-2
          lg:gap-x-8
          lg:gap-y-32
        "
        >
          {projects.slice(0, visibleProject).map((project, index) => (
            <div
              key={project.title}
              className={`
              project-item
              relative
              mx-auto
              w-full
              max-w-170

              lg:max-w-none

              ${index === 0 ? "lg:col-span-2" : ""}
            `}
            >
              <span
                className="
                project-number
                pointer-events-none
                absolute
                -top-9
                left-1/2
                z-0
                -translate-x-1/2
                select-none
                text-[72px]
                font-black
                leading-none
                tracking-[-0.08em]
                text-neutral-200/70

                sm:-top-12
                sm:text-[100px]

                lg:left-auto
                lg:right-0
                lg:-top-28
                lg:translate-x-0
                lg:text-[140px]
              "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="project-content relative z-10 w-full">
                <ProjectCard
                  title={project.title}
                  description={t(project.descriptionKey)}
                  image={project.image}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  liveText={t("projects.viewProject")}
                  sourceText={t("projects.sourceCode")}
                />
              </div>
            </div>
          ))}
        </div>
        {visibleProject < projects.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setVisibleProject(projects.length)}
              className="
        rounded-full
        border
        border-neutral-300
        px-8
        py-3
        text-sm
        font-medium
        transition-all
        duration-300
        hover:bg-black
        hover:text-white
      "
            >
              {t("projects.viewMore")}{" "}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
