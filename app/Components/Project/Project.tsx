"use client";

import { useTranslation } from "react-i18next";
import ProjectCard from "../ProjectCard/ProjectCard";

const projects = [
  {
    title: "Sofia",
    descriptionKey: "projects.items.sofia.description",
    image: "/projects/Sofia.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "i18next", "PWA"],
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
    title: "CRM Dashboard",
    descriptionKey: "projects.items.crm.description",
    image: "/projects/Crm.png",
    technologies: [
      "React",
      "JavaScript",
      "Material UI",
      "Recharts",
      "Tailwind CSS",
    ],
    liveUrl: "https://react-crm-livid.vercel.app/",
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
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="work"
      className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-375">
        <div className="mb-14 flex flex-col gap-6 border-t border-neutral-300 pt-6 sm:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm text-neutral-500">
              01 — {t("projects.label")}
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {t("projects.title")}
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-neutral-600 lg:text-lg">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
