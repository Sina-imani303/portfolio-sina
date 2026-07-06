"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageDirection() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const updateDirection = () => {
      const language = i18n.resolvedLanguage || i18n.language;
      const isPersian = language.startsWith("fa");

      document.documentElement.lang = isPersian ? "fa" : "en";
      document.documentElement.dir = isPersian ? "rtl" : "ltr";
    };

    updateDirection();

    i18n.on("languageChanged", updateDirection);

    return () => {
      i18n.off("languageChanged", updateDirection);
    };
  }, [i18n]);

  return null;
}
