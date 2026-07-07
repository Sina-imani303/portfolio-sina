"use client";

import Image from "next/image";
import {
  useLayoutEffect,
  useRef,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";

export default function Hero() {
  const { t } = useTranslation();

  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  const socials = [
    {
      label: t("hero.github"),
      href: "https://github.com/Sina-imani303",
    },
    {
      label: t("hero.linkedin"),
      href: "https://www.linkedin.com/in/sina-imani303/",
    },
    {
      label: t("hero.email"),
      href: "mailto:sinaimanii20@gmail.com",
    },
  ];

  useLayoutEffect(() => {
    gsap.fromTo(
      ".hero-name-shine",
      {
        clipPath: "inset(0 100% 0 0)",
        WebkitTextStroke: "1px rgba(255,255,255,0)",
      },
      {
        clipPath: "inset(0 0% 0 0)",
        WebkitTextStroke: "1px rgba(255,255,255,0.7)",
        duration: 2.2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.5,
      },
    );
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.fromTo(
        nameRef.current,
        {
          y: 120,
          opacity: 0,
          scale: 0.92,
          filter: "blur(20px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.4,
        },
      );

      tl.fromTo(
        imageRef.current,
        {
          clipPath: "inset(100% 0% 0% 0% round 40px)",
          y: 80,
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 40px)",
          y: 0,
          duration: 1.4,
          ease: "expo.out",
        },
        "-=0.9",
      );

      tl.fromTo(
        imageInnerRef.current,
        {
          scale: 1.25,
          filter: "blur(12px)",
        },
        {
          scale: 1,
          filter: "blur(0px)",
          duration: 1.8,
          ease: "power4.out",
        },
        "-=1.4",
      );

      tl.fromTo(
        ".hero-reveal",
        {
          y: 40,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
        },
        "-=1.1",
      );

      tl.fromTo(
        ".social-link",
        {
          x: 50,
          opacity: 0,
          rotate: 4,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.8",
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleImageMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !imageInnerRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();

    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;

    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;

    gsap.to(imageInnerRef.current, {
      x: x * 20,
      y: y * 20,
      scale: 1.04,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      rotateY: x * 4,
      rotateX: -y * 4,
      duration: 0.8,
      ease: "power3.out",
      transformPerspective: 1000,
    });
  };

  const handleImageLeave = () => {
    gsap.to(imageInnerRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.to(imageRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const handleMagneticMove = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;

    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * 0.18,
      y: y * 0.18,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(element.querySelector(".button-inner"), {
      x: x * 0.1,
      y: y * 0.1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMagneticLeave = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const element = event.currentTarget;

    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.4)",
    });

    gsap.to(element.querySelector(".button-inner"), {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <section
      ref={heroRef}
      className="
        relative
        overflow-hidden
        px-4
        pb-12
        pt-8
        sm:px-6
        sm:pt-12
        lg:px-10
        lg:pb-0
      "
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 rounded-full bg-neutral-200/50 blur-[120px]" />

      <div className="relative mx-auto max-w-375">
        <h1
          className="
    pointer-events-none
    relative
    z-0
    block
    w-full
    overflow-visible
    whitespace-nowrap
    text-center
    text-[15vw]
    font-black
    uppercase
    leading-[0.8]
    tracking-[-0.07em]

    sm:text-[13vw]

    lg:absolute
    lg:left-1/2
    lg:top-0
    lg:w-full
    lg:-translate-x-1/2
    lg:text-[11vw]
  "
        >
          <span
            className="
      hero-name-effect
      relative
      inline-block
      text-neutral-900
      tracking-wider
    "
          >
            {t("hero.name")}

            <span
              aria-hidden="true"
              className="
    hero-name-shine
    absolute
    inset-0
    bg-linear-to-r
    from-transparent
    via-neutral-400
    to-transparent
    bg-clip-text
    text-transparent
  "
            >
              {t("hero.name")}
            </span>
          </span>
        </h1>
        <div
          className="
            relative
            z-10
            mt-6
            flex
            flex-col
            lg:mt-0
            lg:grid
            lg:min-h-155
            lg:grid-cols-[1fr_minmax(340px,430px)_1fr]
            lg:items-end
            lg:gap-8
            xl:grid-cols-[1fr_500px_1fr]
          "
        >
          <div
            className="
              order-2
              mt-8
              text-center
              lg:order-1
              lg:mt-0
              lg:pb-16
              lg:text-start
            "
          >
            <div
              className="
                hero-reveal
                mb-5
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-black/10
                bg-white/50
                px-4
                py-2
                shadow-[inset_0_1px_0_white,0_10px_30px_-15px_rgba(0,0,0,0.2)]
                backdrop-blur-xl
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-neutral-900 opacity-30" />
                <span className="relative h-2 w-2 rounded-full bg-neutral-950" />
              </span>

              <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                {t("hero.role")}
              </p>
            </div>

            <h2
              className="
                hero-reveal
                mx-auto
                max-w-md
                text-2xl
                font-semibold
                leading-tight
                tracking-wider
                text-neutral-900
                sm:text-3xl
                lg:mx-0
                lg:text-4xl
              "
            >
              {t("hero.description")}
            </h2>

            <a
              href="#work"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              className="
                hero-reveal
                group
                relative
                mt-7
                inline-flex
                h-14
                items-center
                overflow-hidden
                rounded-full
                bg-neutral-950
                px-7
                text-sm
                font-medium
                text-white
                shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]
              "
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-0
                  w-0
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-white
                  transition-all
                  duration-500
                  ease-out
                  group-hover:h-56
                  group-hover:w-56
                "
              />

              <span className="button-inner relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-black  tracking-widest">
                {t("hero.button")}

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-all
                    duration-300
                    group-hover:rotate-45
                    group-hover:bg-black
                    group-hover:text-white
                  "
                >
                  <FiArrowUpRight className="h-4 w-4" />
                </span>
              </span>
            </a>
          </div>

          <div
            ref={imageRef}
            onMouseMove={handleImageMove}
            onMouseLeave={handleImageLeave}
            className="
              group
              relative
              order-1
              mx-auto
              h-105
              w-full
              max-w-82.5
              overflow-hidden
              rounded-[40px]
              sm:h-130
              sm:max-w-97.5
              lg:order-2
              lg:h-150
              lg:max-w-none
            "
          >
            <div ref={imageInnerRef} className="absolute -inset-6">
              <Image
                src="/images/sinaimani.png"
                alt="Sina Imani - Frontend Developer"
                fill
                priority
                sizes="(max-width: 640px) 330px, (max-width: 1024px) 390px, 500px"
                className="
                  object-cover
                  object-top
                  grayscale
                  transition-[filter]
                  duration-700
                  group-hover:grayscale-0
                "
              />
            </div>

            <span className="pointer-events-none absolute inset-0 rounded-[40px] border border-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]" />

            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/25 to-transparent" />

            <div
              className="
                absolute
                bottom-5
                left-5
                right-5
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/20
                bg-black/20
                px-4
                py-3
                text-white
                opacity-0
                backdrop-blur-xl
                transition-all
                duration-500
                group-hover:translate-y-0
                group-hover:opacity-100
                lg:translate-y-5
              "
            >
              <span className="text-xs font-medium uppercase tracking-[0.15em]">
                Frontend Developer
              </span>

              <FiArrowUpRight />
            </div>
          </div>

          <div
            className="
              order-3
              mt-8
              flex
              flex-wrap
              justify-center
              gap-3
              lg:mt-0
              lg:flex-col
              lg:items-end
              lg:gap-2
              lg:pb-20
            "
          >
            {socials.map((social) => {
              const isEmail = social.href.startsWith("mailto:");

              return (
                <a
                  key={social.href}
                  href={social.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="
                    social-link
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-full
                    border
                    border-black/10
                    bg-white/30
                    px-5
                    py-2.5
                    text-sm
                    backdrop-blur-md
                    transition-colors
                    duration-300
                    hover:text-white
                    lg:min-w-42.5
                    lg:justify-between
                    lg:px-5
                    lg:py-3
                    lg:text-base
                  "
                >
                  <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-neutral-950 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

                  <span className="relative z-10 flex items-center gap-3">
                    {social.label}
                  </span>

                  <FiArrowUpRight
                    className="
                      relative
                      z-10
                      h-4
                      w-4
                      transition-transform
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:rotate-45
                    "
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
