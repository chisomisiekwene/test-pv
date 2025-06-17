


"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import man from "../assets/man.png";
import calendar from "../assets/Calendar.png";
import { PrimaryButton } from "../components/Button";

export function PayBills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative z-10 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundImage: `url(${man.src})`,
      }}
    >
      <div className="container px-8 mx-auto py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 items-center gap-4 lg:gap-20">
          {/* Left Content */}
          <article className="flex flex-col gap-12">
            <header className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-[52px] font-heading font-bold text-white tracking-tight">
                Pay Bills
              </h1>
              <p className="text-base font-sans lg:max-w-80 max-w-xl mx-auto md:mx-0 text-white leading-relaxed">
                Say goodbye to long queues and endless processes—our platform
                offers a seamless solution for paying bills instantly without
                any hiccups.
              </p>
            </header>

            <div className="space-y-4">
              <p className="text-white text-base font-medium">
                Get Revve on your phone
              </p>
              <PrimaryButton title="Coming soon" className="w-fit" />
            </div>
          </article>

          {/* Right Content */}
          <div className="flex justify-center">
            <div className="w-[280px] md:w-[340px] h-auto">
              <Image
                src={calendar}
                alt="Calendar"
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
