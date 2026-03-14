import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subhro Chatterjee — Full Stack Engineer",
  description:
    "Full Stack Software Engineer specializing in NestJS, Next.js, MongoDB, AWS, Redis, RabbitMQ, Kubernetes, Grafana & Prometheus.",
  keywords: ["Full Stack Engineer", "NestJS", "Next.js", "MongoDB", "AWS", "Kubernetes"],
  authors: [{ name: "Subhro Chatterjee" }],
  openGraph: {
    title: "Subhro Chatterjee — Full Stack Engineer",
    description: "Building scalable distributed systems, one service at a time.",
    url: "https://subhrochatterjee.netlify.app",
    siteName: "Subhro Chatterjee Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
