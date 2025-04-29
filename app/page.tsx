"use client";

import Anchor from "./components/Anchor";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Manfaat from "./components/Manfaat";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Anchor />
      <Feature />
      <Manfaat />
      <Pricing />
    </main>
  );
}
