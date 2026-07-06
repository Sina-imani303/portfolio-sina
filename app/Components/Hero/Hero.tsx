"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  const { t } = useTranslation();

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

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-8 sm:px-6 sm:pt-12 lg:px-10 lg:pb-0">
      <div className="relative mx-auto max-w-375">
        <h1 className="pointer-events-none relative z-0 whitespace-nowrap text-center text-[15vw] font-black uppercase leading-[0.8] tracking-[-0.07em] text-neutral-900 sm:text-[13vw] lg:absolute lg:left-1/2 lg:top-0 lg:w-full lg:-translate-x-1/2 lg:text-[11vw]">
          {t("hero.name")}
        </h1>

        <div className="relative z-10 mt-6 flex flex-col lg:mt-0 lg:grid lg:min-h-155 lg:grid-cols-[1fr_minmax(340px,430px)_1fr] lg:items-end lg:gap-8 xl:grid-cols-[1fr_500px_1fr]">
          <div className="group relative order-1 mx-auto h-105 w-full max-w-82.5 sm:h-130 sm:max-w-97.5 lg:order-2 lg:h-134 lg:max-w-none">
            <Image
              src="/images/sinaimani.png"
              alt="Sina Imani - Frontend Developer"
              fill
              priority
              sizes="(max-width: 640px) 330px, (max-width: 1024px) 390px, 500px"
              className="object-cover object-top grayscale transition duration-700 group-hover:scale-[1.02]"
            />
          </div>

          <div className="order-2 mt-8 text-center lg:order-1 lg:mt-0 lg:pb-16 lg:text-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/30 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />

              <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                {t("hero.role")}
              </p>
            </div>

            <h2 className="mx-auto max-w-md text-2xl font-semibold leading-normal tracking-[-0.03em] sm:text-3xl lg:mx-0 lg:text-4xl">
              {t("hero.description")}
            </h2>

            <a
              href="#work"
              className="group relative mt-7 inline-flex items-center gap-3 overflow-hidden rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 translate-y-full bg-neutral-700 transition-transform duration-300 group-hover:translate-y-0" />

              <span className="relative z-10">{t("hero.button")}</span>

              <FiArrowUpRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="order-3 mt-8 flex flex-wrap justify-center gap-3 lg:mt-0 lg:flex-col lg:items-end lg:gap-2 lg:pb-20">
            {socials.map((social) => {
              const isEmail = social.href.startsWith("mailto:");

              return (
                <a
                  key={social.href}
                  href={social.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3 rounded-full border border-neutral-300 px-5 py-2.5 text-sm transition duration-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white lg:border-0 lg:bg-transparent lg:px-4 lg:py-2 lg:text-lg lg:hover:bg-neutral-950 lg:hover:text-white"
                >
                  <span>{social.label}</span>

                  <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
