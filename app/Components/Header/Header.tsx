"use client";

import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";
export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const currentLanguage = i18n.resolvedLanguage || i18n.language;
    const newLanguage = currentLanguage.startsWith("fa") ? "en" : "fa";

    i18n.changeLanguage(newLanguage);
  };

  const navItems = [
    { href: "#work", label: t("header.projects") },
    { href: "#skills", label: t("header.skills") },
    { href: "#about", label: t("header.about") },
    { href: "#contact", label: t("header.contact") },
  ];

  return (
    <header className="relative z-50 px-4 py-5 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-375 items-center justify-between">
        <div className="group flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </span>

          <span className="hidden text-sm font-medium text-neutral-600 transition group-hover:text-neutral-950 sm:block">
            {t("header.available")}
          </span>
        </div>
        <nav className="hidden items-center rounded-full border border-black/10 bg-white/40 p-1.5 shadow-sm backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-full px-9 py-2.5 text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-white"
            >
              <span className="absolute inset-0 scale-0 rounded-full bg-neutral-950 transition-transform duration-300 group-hover:scale-100" />

              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={changeLanguage}
            className="group flex h-11 min-w-11 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white/40 px-3 text-xs font-semibold backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white/80"
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
              {i18n.resolvedLanguage?.startsWith("fa") ? "EN" : "FA"}
            </span>
          </button>

          <a
            href="#contact"
            className="group relative hidden h-11 items-center gap-2 overflow-hidden rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 sm:flex"
          >
            <span className="relative z-10">{t("header.talk")}</span>

            <FiArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />

            <span className="absolute inset-0 translate-y-full bg-neutral-700 transition-transform duration-300 group-hover:translate-y-0" />
          </a>
        </div>
      </div>
    </header>
  );
}
