import React, { Suspense } from "react";
import { HeroGlobe } from "./ui/HeroGlobe";
import { SparklesCore } from "./ui/Sparkles";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-44px)] w-screen">
      <Suspense
        fallback={
          <div className="border-4 border-gray-800 bg-black rounded-2xl w-4/5 h-4/5"></div>
        }
      >
        <div className="border-4 border-gray-800 bg-black rounded-2xl w-4/5 h-4/5 overflow-hidden">
          <SparklesCore
            id="stars"
            background="#000"
            minSize={0.6}
            maxSize={1.4}
            speed={2}
            particleDensity={10}
            className="w-full h-full relative"
            particleColor="#FFFFFF"
          />
          <Suspense>
            <div className="w-full h-screen flex flex-col items-center justify-end -translate-y-[400px]">
              <HeroGlobe />
            </div>
          </Suspense>
        </div>
      </Suspense>
    </div>
  );
};

export default Hero;
