"use client";

import Navbar from "../components/Website/Navbar"
import Hero from "@/components/Website/Hero";
import WhatFinTasker from "@/components/Website/WhatFinTasker";
import Features from "@/components/Website/Features";
import Pricing from "@/components/Website/Pricing";
import BasicFAQ from "@/components/Website/FAQ";
import Footer from "@/components/Website/Footer";

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <WhatFinTasker />
      <Features />
      <Pricing />
      <BasicFAQ />
      <Footer />
    </>
  );
}
