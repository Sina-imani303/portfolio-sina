"use client";

import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="mx-4 mb-4 overflow-hidden rounded-[28px] bg-neutral-950 px-5 py-8 text-[#f4f3ef] sm:mx-6 sm:mb-6 sm:px-8 sm:py-10 lg:mx-10 lg:mb-10 lg:rounded-[40px] lg:px-14 lg:py-14"
    >
      <div className="mx-auto max-w-375">
        <div className="border-t border-white/20 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/50">
              04 — {t("contact.label")}
            </span>

            <FiMail className="h-5 w-5 text-white/40" />
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h2 className="max-w-5xl text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl">
              {t("contact.title")}
            </h2>

            <div>
              <p className="max-w-md text-base leading-7 text-white/60 lg:text-lg">
                {t("contact.description")}
              </p>

              <a
                href="mailto:sinaimanii20@gmail.com"
                className="group relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#f4f3ef] px-7 py-3.5 text-sm font-medium text-neutral-950 transition-transform duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />

                <span className="relative z-10">{t("contact.email")}</span>

                <FiArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-10 border-t border-white/20 pt-8 sm:mt-28 lg:grid-cols-3">
            <div>
              <p className="mb-4 text-sm text-white/40">Email</p>

              <a
                href="mailto:sinaimanii20@gmail.com"
                className="group inline-flex items-center gap-2 text-lg transition-colors hover:text-white/60"
              >
                <span>sinaimanii20@gmail.com</span>

                <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>

            <div>
              <p className="mb-4 text-sm text-white/40">
                {t("contact.social")}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Sina-imani303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-neutral-950"
                >
                  <FiGithub className="h-4 w-4" />
                  GitHub
                  <FiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/sina-imani303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-neutral-950"
                >
                  <FiLinkedin className="h-4 w-4" />
                  LinkedIn
                  <FiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <div className="lg:text-end"></div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/20 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} SINA IMANI</p>

            <p>{t("contact.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
