import { HeroBG, ILHero } from "@/assets";
import { AtomButton } from "@/components/atoms";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="container">
      <div className="flex justify-between items-center min-h-[600px]">
        <div className="flex flex-col items-start">
          <div className="bg-white py-2 px-5 rounded-md mb-5">
            <p className="text-sm text-[#606060]">👋 Welcome to TeamFlow</p>
          </div>
          <p className="text-white text-4xl sm:text-5xl font-semibold tracking-wide mb-5">
            Work the way that <br className="hidden sm:block" /> works for you
          </p>

          <hr className="w-20 border-2 rounded border-[#3ADAD9] mb-5" />

          <p className="text-white text-lg font-light">
            Create, Build, Collaborate and ship products{" "}
            <br className="hidden sm:block" /> very faster
          </p>

          <AtomButton
            text="Get Started "
            className="mt-5 font-medium bg-yellow-400 px-5"
          />
        </div>

        <div className="hidden sm:block">
          <Image src={ILHero} width={650} height={0} alt="HeroBG" />
        </div>
      </div>
    </div>
  );
}
