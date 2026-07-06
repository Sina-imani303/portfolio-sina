"use client";

import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./I18n/I18n";

interface I18ProviderProps {
  children: ReactNode;
}

export default function I18Provider({ children }: I18ProviderProps) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
