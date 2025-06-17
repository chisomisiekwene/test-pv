"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import cad from "../assets/cad (1).png";
import cfa from "../assets/cfa (1).png";
import nga from "../assets/ngn (1).png";
import usd from "../assets/usd (1).png";
import Image from "next/image";
import iphone from "../assets/iPhone (1).png";
import woman from "../assets/woman.png";

export default function MultiCurrencyWallets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cards = [nga, cfa, cad, usd];

  const floatingCards = cards.slice(0, 2); // First 2 cards float outside
  const phoneCards = cards.slice(2); // Last 2 cards inside phone

  return (
    <section className=" relative overflow-hidden lg:pt-100 md:pt-20 pt-10 px-8 lg:px-20 z-10 bg-white">
      <main className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center">
        <section aria-labelledby="main-heading" className="col-span-1">
          <motion.div
            className="flex flex-col gap-6 lg:gap-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              id="main-heading"
              className="text-3xl md:text-[52px] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Multi-currency
              <br />
              Wallets
            </motion.h1>

            <motion.div
              className="space-y-4 text-base font-medium text-black leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>
                Easily effortless management of multiple wallet with different
                currencies in different countries. Experience unlimited access
                within networks.
              </p>
              <p>
                Create your individual swift digital wallets for different
                currencies, streamlining efficient finance and giving you easy
                access your international finance at any point of use.
              </p>
            </motion.div>
          </motion.div>
        </section>
        <section
          aria-labelledby="wallet-demo"
          className="mt-56 md:mt-60 lg:mt-0 col-span-1 flex justify-center relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Phone Container */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              role="img"
              aria-label="Mobile phone displaying wallet interface"
            >
              {/* Cards positioned above phone - vertically arranged */}
              <div className="absolute bottom-[132px] left-1/2 transform -translate-x-1/2 z-30">
                <ul className="space-y-5" role="list">
                  {cards.map((card, index) => (
                    <motion.li
                      key={index}
                      role="listitem"
                      className="w-[250px] md:w-[295px]"
                      initial={{
                        y: -50,
                        opacity: 0,
                        scale: 0.9,
                      }}
                      animate={{
                        y: isVisible ? 0 : -50,
                        opacity: isVisible ? 1 : 0,
                        scale: isVisible ? 1 : 0.9,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.8 + index * 0.15,
                        type: "spring",
                        bounce: 0.3,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Image
                        src={card}
                        alt="Card image"
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 " />
                      {/* Card shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 2,
                          delay: 1.5 + index * 0.3,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 4,
                        }}
                        aria-hidden="true"
                      />
                    </motion.li>
                  ))}
                </ul>
              </div>
              {/* Phone Frame */}
              <div className="md:[550px] md:h-[708px]">
                <Image
                  src={iphone}
                  alt="Mobile phone frame"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>
        <section aria-labelledby="user-image" className="hidden lg:block col-span-1">
          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative w-[200px] md:w-[414px] md:h-[636px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={woman} alt="Happy customer using mobile banking" />
            </motion.div>
          </motion.div>
        </section>
      </main>
    </section>
  );
}
