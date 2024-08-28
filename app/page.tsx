"use client";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import RecentPersonalProjects from "@/components/RecentPersonalProjects";
import Experience from "@/components/Experience";
import {FloatingNav} from "@/components/ui/FloatingNavBar";
import Grid from "@/components/ui/Grid";
import {navItems} from "@/data";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <RecentPersonalProjects />

        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
