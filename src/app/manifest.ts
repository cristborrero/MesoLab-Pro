import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MesoLab Pro | Tecnología Estética & Beauty Tech",
    short_name: "MesoLab Pro",
    description:
      "Tienda especializada en tecnología estética, aparatología facial y corporal, sueros activos y cosmecéutica profesional en Colombia.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B192C",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
