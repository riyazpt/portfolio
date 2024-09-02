import React from "react";
import {Spotlight} from "./ui/Spotlight";
import {TextGenerateEffect} from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa";
import {FaDownload} from "react-icons/fa6";
import ContactSection from "./ContactSection";

import Link from "next/link";
function Hero() {
  return (
    <div className="pb-20 pt-1">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
        ></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Building and Scaling Modern Applications with Expertise
          </p>
          <TextGenerateEffect
            words="Hi! I'm Riyaz, a Full-Stack Developer based in UAE"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <div className="flex flex-row items-center space-x-4">
            <Link href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>

            <Link
              href="/Riyas-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title="Download Resume"
                icon={<FaDownload />}
                position="right"
              />
            </Link>
          </div>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default Hero;
