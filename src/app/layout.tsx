import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eco Environnement – Déshumidificateur Thermodynamique Serre",
  description:
    "0€ de reste à charge. Déshumidificateur thermodynamique pour serres maraîchères financé par les CEE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Bodoni+Moda:ital,wght@0,500;0,700;0,800;0,900;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
      >
        {children}
      </body>
    </html>
  );
}
