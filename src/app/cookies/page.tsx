import type { Metadata } from "next";
import { CookiesClient } from "./CookiesClient";

export const metadata: Metadata = {
  title: "Política de Cookies | MesoLab Pro",
  description:
    "Política de cookies de MesoLab Pro. Conoce cómo utilizamos las cookies esenciales, funcionales, de rendimiento y de marketing en mesolabpro.com.co.",
};

export default function CookiesPage() {
  return <CookiesClient />;
}
