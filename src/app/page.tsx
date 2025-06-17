"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { useGSAP } from "@gsap/react";

import Hero from "./pages/heropage";
import ShopOnline from "./pages/shopOnline";
import { PayBills } from "./pages/payBills";
import MultiCurrencyWallets from "./pages/multicurrency";
import Faq from "./pages/faq";
import { Contact } from "./pages/contact";

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const main = useRef<HTMLDivElement | null>(null);
  const smoother = useRef<any>(null);

  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
  }, { scope: main });

  return (
    <div id="smooth-wrapper" ref={main} className="min-h-screen overflow-hidde">
      <div id="smooth-content">
        <section id="hero"><Hero /></section>
        <section id="wallets"><MultiCurrencyWallets /></section>
        <section id="shop"><ShopOnline /></section>
        <section id="pay"><PayBills /></section>
        <section id="faq"><Faq /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}
