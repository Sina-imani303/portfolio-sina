import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  liveText: string;
  sourceText: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  liveText,
  sourceText,
}: ProjectCardProps) {
  return (
    <article className="group">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden rounded-3xl sm:rounded-4xl"
      >
        <div className="relative aspect-16/10 overflow-hidden bg-neutral-200">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

          <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-end justify-between p-5 transition-transform duration-500 ease-out group-hover:translate-y-0 sm:p-7">
            <span className="rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 shadow-lg">
              {liveText}
            </span>

            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-950 shadow-lg transition-transform duration-500 group-hover:rotate-45">
              <FiArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </a>

      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
            {title}
          </h3>

          <FiArrowUpRight className="mt-1 h-6 w-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>

        <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-neutral-300 px-4 py-2 text-sm transition-all duration-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
            >
              {technology}
            </span>
          ))}
        </div>

        {githubUrl !== "#" && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-neutral-950"
          >
            <FiGithub className="h-5 w-5" />
            {sourceText}
          </a>
        )}
      </div>
    </article>
  );
}
