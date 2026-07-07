"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";

export default function Header() {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: "#work", label: t("header.projects"), number: "01" },
    { href: "#skills", label: t("header.skills"), number: "02" },
    { href: "#about", label: t("header.about"), number: "03" },
    { href: "#contact", label: t("header.contact"), number: "04" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.fromTo(
        ".header-shell",
        {
          y: -80,
          opacity: 0,
          scale: 0.92,
          filter: "blur(20px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
        },
      );

      tl.fromTo(
        ".nav-button",
        {
          y: 25,
          opacity: 0,
          rotateX: -40,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "back.out(1.7)",
        },
        "-=0.7",
      );

      tl.fromTo(
        ".side-action",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "elastic.out(1, 0.6)",
        },
        "-=0.6",
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const menu = mobileMenuRef.current;

    if (!menu) return;

    if (menuOpen) {
      document.body.style.overflow = "hidden";

      gsap.set(menu, {
        display: "flex",
        pointerEvents: "auto",
      });

      const tl = gsap.timeline();

      tl.fromTo(
        menu,
        {
          opacity: 0,
          clipPath: "circle(0% at calc(100% - 38px) 38px)",
        },
        {
          opacity: 1,
          clipPath: "circle(150% at calc(100% - 38px) 38px)",
          duration: 0.8,
          ease: "expo.inOut",
        },
      );

      tl.fromTo(
        ".mobile-available",
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      );

      tl.fromTo(
        ".mobile-nav-item",
        {
          y: 55,
          opacity: 0,
          rotateX: -35,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "back.out(1.5)",
        },
        "-=0.4",
      );

      tl.fromTo(
        ".mobile-menu-bottom",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.3",
      );
    } else {
      document.body.style.overflow = "";

      gsap.to(menu, {
        opacity: 0,
        clipPath: "circle(0% at calc(100% - 38px) 38px)",
        duration: 0.6,
        ease: "expo.inOut",
        pointerEvents: "none",
        onComplete: () => {
          gsap.set(menu, {
            display: "none",
          });
        },
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavEnter = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (!navRef.current || !bubbleRef.current) return;

    const item = event.currentTarget;
    const navRect = navRef.current.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const x = itemRect.left - navRect.left;

    gsap.killTweensOf(bubbleRef.current);

    gsap.to(bubbleRef.current, {
      x,
      width: itemRect.width,
      opacity: 1,
      scaleX: 1,
      duration: 0.65,
      ease: "elastic.out(1, 0.65)",
    });

    gsap.to(item.querySelector(".nav-main-text"), {
      y: -22,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(item.querySelector(".nav-hover-text"), {
      y: -22,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(item.querySelector(".nav-number"), {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 0.5,
      ease: "back.out(2)",
    });
  };

  const handleNavLeave = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const item = event.currentTarget;

    gsap.to(item.querySelector(".nav-main-text"), {
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(item.querySelector(".nav-hover-text"), {
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(item.querySelector(".nav-number"), {
      opacity: 0,
      scale: 0.4,
      rotate: -20,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleNavMouseMove = (event: ReactMouseEvent<HTMLElement>) => {
    if (!navRef.current || !glowRef.current) return;

    const rect = navRef.current.getBoundingClientRect();

    gsap.to(glowRef.current, {
      x: event.clientX - rect.left - 100,
      y: event.clientY - rect.top - 100,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleNavExit = () => {
    if (!bubbleRef.current) return;

    gsap.to(bubbleRef.current, {
      opacity: 0,
      scaleX: 0.75,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const handleMagneticMove = (event: ReactMouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * 0.22,
      y: y * 0.22,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(element.querySelector(".magnetic-inner"), {
      x: x * 0.12,
      y: y * 0.12,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMagneticLeave = (event: ReactMouseEvent<HTMLElement>) => {
    const element = event.currentTarget;

    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.4)",
    });

    gsap.to(element.querySelector(".magnetic-inner"), {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const changeLanguage = () => {
    const currentLanguage = i18n.resolvedLanguage || i18n.language;

    const nextLanguage = currentLanguage.startsWith("fa") ? "en" : "fa";

    const button = document.querySelector(".language-label");

    gsap.to(button, {
      y: -15,
      opacity: 0,
      rotateX: 90,
      duration: 0.25,
      onComplete: async () => {
        await i18n.changeLanguage(nextLanguage);

        gsap.fromTo(
          button,
          {
            y: 15,
            opacity: 0,
            rotateX: -90,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.5,
            ease: "back.out(2)",
          },
        );
      },
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="
          relative
          z-100
          px-3
          py-4
          sm:px-6
          sm:py-5
          lg:px-10
          font-peyda
        "
      >
        <div
          className="
            header-shell
            mx-auto
            flex
            max-w-375
            items-center
            justify-between
          "
        >
          <div className="side-action flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-50" />

              <span className="relative h-full w-full rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.8)]" />
            </span>

            <span className="max-w-30 truncate text-[11px] font-medium text-neutral-600 sm:max-w-none sm:text-sm tracking-widest">
              {t("header.available")}
            </span>
          </div>

          <nav
            ref={navRef}
            onMouseMove={handleNavMouseMove}
            onMouseLeave={handleNavExit}
            className="
              relative
              hidden
              items-center
              overflow-hidden
              rounded-[28px]
              border
              border-white/80
              bg-white/55
              p-1.5
              shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,1)]
              backdrop-blur-2xl
              md:flex
            "
          >
            <span
              ref={glowRef}
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-50
                w-50
                rounded-full
                bg-linear-to-br
                from-white/80
                via-white/30
                to-transparent
                blur-3xl
              "
            />

            <span
              ref={bubbleRef}
              className="
                pointer-events-none
                absolute
                left-0
                top-1.5
                h-[calc(100%-12px)]
                rounded-[22px]
                bg-neutral-950
                opacity-0
                shadow-[0_12px_30px_-10px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.2)]
              "
            >
              <span className="absolute inset-x-3 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />
            </span>

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={handleNavEnter}
                onMouseLeave={handleNavLeave}
                className="
                  nav-button
                  group
                  relative
                  z-10
                  flex
                  h-12
                  min-w-30
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[22px]
                  px-9
                "
              >
                <span className="nav-number absolute right-3 top-2 text-[8px] font-semibold text-white/50 opacity-0">
                  {item.number}
                </span>

                <span className="relative h-5.5 overflow-hidden">
                  <span className="nav-main-text flex h-5.5 items-center justify-center text-sm font-medium text-neutral-600 transition-colors duration-300 group-hover:text-white">
                    {item.label}
                  </span>

                  <span className="nav-hover-text flex h-5.5 items-center justify-center text-sm font-semibold text-white">
                    {item.label}
                  </span>
                </span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={changeLanguage}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              className="
                side-action
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/80
                bg-white/60
                text-[11px]
                font-bold
                shadow-[0_10px_30px_-12px_rgba(0,0,0,0.3),inset_0_1px_0_white]
                backdrop-blur-2xl
                sm:h-12
                sm:w-12
                sm:text-xs
              "
            >
              <span className="magnetic-inner language-label">
                {i18n.resolvedLanguage?.startsWith("fa") ? "EN" : "FA"}
              </span>
            </button>

            <a
              title="contact"
              href="#contact"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              className="
                side-action
                group
                relative
                hidden
                h-12
                items-center
                overflow-hidden
                rounded-full
                bg-neutral-950
                px-6
                text-sm
                font-medium
                text-white
                shadow-[0_15px_35px_-12px_rgba(0,0,0,0.6)]
                md:flex
                tracking-widest
              "
            >
              <span className="absolute inset-0 scale-0 rounded-full bg-white transition-transform duration-500 ease-out group-hover:scale-150" />

              <span className="magnetic-inner relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
                {t("header.talk")}

                <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </a>
            <button
              type="button"
              aria-label="Toggle mobile menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                side-action
                relative
                z-120
                flex
                h-10
                w-10
                items-center
                justify-center
                overflow-hidden
                rounded-full
                bg-neutral-950
                shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]
                sm:h-12
                sm:w-12
                md:hidden
              "
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`
                    absolute
                    left-0
                    h-px
                    bg-white
                    transition-all
                    duration-500
                    ${menuOpen ? "top-1.75 w-5 rotate-45" : "top-1 w-5"}
                  `}
                />

                <span
                  className={`
                    absolute
                    right-0
                    h-px
                    bg-white
                    transition-all
                    duration-500
                    ${menuOpen ? "top-1.75 w-5 -rotate-45" : "top-2.75 w-3.5"}
                  `}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={mobileMenuRef}
        className="
          fixed
          inset-0
          z-90
          hidden
          flex-col
          overflow-hidden
          bg-neutral-950
          px-5
          pb-6
          pt-24
          text-white
          md:hidden
        "
      >
        <span className="pointer-events-none absolute -right-32 top-12 h-80 w-80 rounded-full bg-white/6 blur-[90px]" />

        <span className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-400/[0.07] blur-[110px]" />

        <div
          className="
            mobile-available
            relative
            flex
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            backdrop-blur-xl
          "
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative h-full w-full rounded-full bg-emerald-500" />
          </span>

          <span className="text-xs font-medium text-white/60">
            {t("header.available")}
          </span>
        </div>

        <nav className="relative flex flex-1 flex-col justify-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="
                mobile-nav-item
                group
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-5
              "
            >
              <span
                className="
                  text-[clamp(2rem,10vw,3.2rem)]
                  font-semibold
                  leading-none
                  tracking-tighter
                  transition-transform
                  duration-500
                  group-hover:translate-x-2
                "
              >
                {item.label}
              </span>

              <div className="flex items-center gap-3">
                <span className="text-[10px] text-white/30">{item.number}</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-neutral-950">
                  <FiArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </nav>
        <div className="mobile-menu-bottom relative">
          <a
            href="#contact"
            onClick={closeMenu}
            className="
              group
              flex
              w-full
              items-center
              justify-between
              rounded-full
              bg-white
              px-6
              py-4
              text-sm
              font-medium
              text-neutral-950
            "
          >
            <span>{t("header.talk")}</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white transition-transform duration-500 group-hover:rotate-45">
              <FiArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
