"use client";

import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const { t } = useTranslation();

  const footerRef = useRef<HTMLElement>(null);
  const currentYear = new Date().getFullYear();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-line",
        {
          scaleX: 0,
          transformOrigin: "center",
        },
        {
          scaleX: 1,
          duration: 1.3,
          ease: "expo.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".contact-reveal",
        {
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".contact-main",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".contact-info",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-details",
            start: "top 90%",
          },
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="
        relative
        mx-3
        mb-3
        overflow-hidden
        rounded-3xl
        bg-neutral-950
        px-4
        py-8
        text-[#f4f3ef]

        sm:mx-5
        sm:mb-5
        sm:rounded-4xl
        sm:px-7
        sm:py-10

        lg:mx-8
        lg:mb-8
        lg:rounded-[40px]
        lg:px-10
        lg:py-12

        xl:mx-10
        xl:mb-10
        xl:px-14
        xl:py-14
      "
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-112.5 w-112.5 rounded-full bg-white/4 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-white/3 blur-[100px]" />

      <span
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          translate-y-1/3
          select-none
          whitespace-nowrap
          text-[24vw]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/1.5
        "
      >
        CONTACT
      </span>

      <div className="relative z-10 mx-auto w-full max-w-375">
        <div className="relative pt-7">
          <span className="contact-line absolute inset-x-0 top-0 h-px bg-white/20" />
          <div className="contact-reveal flex items-center justify-center gap-3 sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-neutral-950">
                04
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/50 sm:text-sm">
                {t("contact.label")}
              </span>
            </div>

            <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 sm:flex">
              <FiMail className="h-4 w-4" />
            </span>
          </div>

          <div
            className="
              contact-main
              mt-12
              grid
              gap-10
              text-center

              sm:mt-16

              lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]
              lg:items-end
              lg:gap-14
              lg:text-start

              xl:gap-20
            "
          >
            <div className="overflow-hidden">
              <h2
                className="
                  contact-reveal
                  mx-auto
                  max-w-4xl
                  text-[clamp(2.4rem,11vw,3.5rem)]
                  font-semibold
                   leading-[1.15]
                  tracking-wider
                  sm:text-[clamp(3.5rem,8vw,4.5rem)]

                  lg:mx-0
                  lg:text-[clamp(3.5rem,5vw,5rem)]
                  py-12

                "
              >
                {t("contact.title")}
              </h2>
            </div>

            <div className="contact-reveal flex flex-col items-center lg:items-start">
              <p className="max-w-md text-sm leading-7  tracking-widest text-white/60 sm:text-base lg:text-lg">
                {t("contact.description")}
              </p>

              <a
                href="mailto:sinaimanii20@gmail.com"
                className="
                  group
                  relative
                  mt-7
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  bg-[#f4f3ef]
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-neutral-950
                  transition-transform
                  duration-500
                  hover:scale-105
                   tracking-widest   
                  sm:px-7
                  sm:py-3.5
                "
              >
                <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />

                <span className="relative z-10">{t("contact.email")}</span>

                <FiArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div
            className="
              contact-details
              mt-16
              grid
              gap-0
              border-t
              border-white/20

              sm:mt-20

              md:grid-cols-2

              lg:mt-24
            "
          >
            <div
              className="
    contact-info
    flex
    flex-col
    items-center
    border-b
    border-white/15
    py-8
    text-center

    md:items-start
    md:border-b-0
    md:border-e
    md:px-6
    md:text-start

    lg:px-8
  "
            >
              <p className="mb-4 text-xs uppercase tracking-[0.15em] text-white/35">
                Email
              </p>

              <a
                href="mailto:sinaimanii20@gmail.com"
                className="
      group
      inline-flex
      max-w-full
      items-center
      justify-center
      gap-2
      text-xs
      transition-colors
      hover:text-white/60

      min-[380px]:text-sm

      sm:text-base

      md:justify-start

      lg:text-lg
    "
              >
                <span className="break-all text-center md:text-start">
                  sinaimanii20@gmail.com
                </span>

                <FiArrowUpRight
                  className="
        h-4
        w-4
        shrink-0
        transition-transform
        duration-300
        group-hover:-translate-y-1
        group-hover:translate-x-1
      "
                />
              </a>
            </div>
            <div className="contact-info py-8 md:px-6 lg:px-8">
              <p className="mb-4 text-xs uppercase tracking-[0.15em] text-white/35">
                {t("contact.social")}
              </p>

              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href="https://github.com/Sina-imani303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    px-4
                    py-2.5
                    text-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white
                    hover:bg-white
                    hover:text-neutral-950
                  "
                >
                  <FiGithub className="h-4 w-4" />
                  GitHub
                  <FiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/sina-imani303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    px-4
                    py-2.5
                    text-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white
                    hover:bg-white
                    hover:text-neutral-950
                  "
                >
                  <FiLinkedin className="h-4 w-4" />
                  LinkedIn
                  <FiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="
              contact-info
              flex
              flex-col
              items-center
              gap-3
              border-t
              border-white/20
              pt-6
              text-center
              text-xs
              text-white/35

              sm:flex-row
              sm:justify-between
              sm:text-sm
              sm:text-start
            "
          >
            <p className="tracking-widest">© {currentYear} SINA IMANI</p>

            <p className="tracking-widest">{t("contact.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
