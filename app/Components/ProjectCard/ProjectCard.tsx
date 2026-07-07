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
    <article className="group flex h-full flex-col">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          block
          overflow-hidden
          rounded-[28px]
          bg-neutral-200
          sm:rounded-[36px]
        "
      >
        <div className="relative aspect-16/10 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="
              object-cover
              transition-transform
              duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-[1.05]
            "
          />
          <div
            className="
              absolute
              inset-0
              bg-black/0
              transition-colors
              duration-500
              group-hover:bg-black/20
            "
          />
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-1/2
              bg-linear-to-b
              from-white/10
              to-transparent
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              flex
              translate-y-8
              items-end
              justify-between
              p-5
              opacity-0
              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:translate-y-0
              group-hover:opacity-100
              sm:p-7
            "
          >
            <span
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-white/90
                px-5
                py-3
                text-sm
                font-medium
                text-neutral-950
                shadow-xl
                backdrop-blur-xl
              "
            >
              {liveText}

              <FiArrowUpRight className="h-4 w-4" />
            </span>

            <span
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white
                text-neutral-950
                shadow-xl
                transition-transform
                duration-500
                group-hover:rotate-45
                group-hover:scale-110
                sm:h-14
                sm:w-14
              "
            >
              <FiArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </a>

      <div className="flex flex-1 flex-col pt-6 sm:pt-8">
        <div className="flex items-start justify-between gap-5">
          <h3
            className="
              text-2xl
              font-semibold
              tracking-[-0.04em]
              text-neutral-950
              transition-transform
              duration-500
              group-hover:translate-x-1
              sm:text-3xl
            "
          >
            {title}
          </h3>

          <span
            className="
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
              group-hover:border-neutral-950
              group-hover:bg-neutral-950
              group-hover:text-white
            "
          >
            <FiArrowUpRight className="h-5 w-5" />
          </span>
        </div>

        <p className="mt-4 min-h-21 max-w-2xl text-base leading-7 tracking-widest text-neutral-600">
          {description}
        </p>
        <div className="mt-6 flex min-h-22 flex-wrap content-start gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="
                h-fit
                rounded-full
                border
                border-neutral-300
                px-4
                py-2
                text-sm
                text-neutral-600
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-neutral-950
                hover:bg-neutral-950
                hover:text-white
              "
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
            className="
              group/github
              mt-auto
              inline-flex
              w-fit
              items-center
              gap-3
              pt-7
              text-sm
              font-medium
              text-neutral-500
              transition-colors
              hover:text-neutral-950
            "
          >
            <FiGithub className="h-5 w-5" />

            <span>{sourceText}</span>

            <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/github:-translate-y-1 group-hover/github:translate-x-1" />
          </a>
        )}
      </div>
    </article>
  );
}
