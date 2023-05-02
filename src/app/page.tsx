"use client";

import { AppNavbar } from "@/components/app";
import { HeroSection } from "@/components/organisms";

export default function Home() {
  return (
    <div>
      <div className="bg-hero">
        <AppNavbar />
        <HeroSection />
      </div>
    </div>
  );
}
