"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Eating from "../assets/Eating.svg";
import currency1 from "../assets/Currency.svg";
import send1 from "../assets/Paper Plane.svg";
import shopping from "../assets/Shopping.svg";
import centralImage from "../assets/Mask.svg";
import loading from "../assets/loading.svg";
import currency2 from "../assets/currency2.svg";
import send2 from "../assets/send2.svg";
import scroll from "../assets/scroll.svg";
import mouse from "../assets/pad.svg";

export default function Hero() {
  const [currentCurrency, setCurrentCurrency] = useState(currency1);
  const [currentSend, setCurrentSend] = useState(send1);
  const [swapKey, setSwapKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCurrency((prev: typeof currency1 | typeof currency2) =>
        prev === currency1 ? currency2 : currency1
      );
      setCurrentSend((prev: typeof send1 | typeof send2) =>
        prev === send1 ? send2 : send1
      );
      setSwapKey((prev) => prev + 1); // To force animation rerender
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Loading */}
      <div className="flex items-center justify-center py-4">
        <div className="flex items-center space-x-2 mt-6 text-black/32 text-sm sm:text-base">
          <Image src={scroll} alt="Mouse Icon" className="w-6 h-6" />
          <span>or</span>
          <Image src={mouse} alt="Mouse Icon" className="w-6 h-6" />
          <span className="">Scroll Down</span>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20">
        {/* Left teal box */}
        <div className="absolute -left-6 md:-left-18 flex flex-col items-center top-10 justify-center w-[50px] h-[50px] md:h-[152px] md:w-[152px] bg-teal-900 rounded-xl md:rounded-4xl">
          <div className="text-white text-lg md:text-[40px] font-bold absolute my-auto md:left-5">
            Send
          </div>
        </div>

        {/* Currency icon (Animated) */}
        <div className="absolute top-[130px] md:top-[230px] w-[50px] h-[50px] md:w-[152px] md:h-[152px] left-7 md:left-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={swapKey + "-currency"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <Image
                src={currentCurrency}
                alt="Currency Icon"
                className="object-contain h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center image and heading */}
        <div className="w-[200px] h-[289px] md:w-[424px] md:h-[493px] flex flex-col gap-4 md:gap-10 items-center justify-center mx-auto mt-[30px] md:mt-[98px]">
          <Image
            src={centralImage}
            alt="central image"
            className="object-cover h-full w-full"
          />
          <div className="text-center">
            <h1 className="text-xl md:text-[40px] font-heading font-bold text-black">
              Send and Receive Money
            </h1>
          </div>
        </div>

        {/* Top right pink image */}
        <div className="absolute top-10 right-2 md:right-20">
          <div className="w-[70px] h-[88px] md:w-[152px] md:h-[180px]">
            <Image
              src={Eating}
              alt="Person holding something"
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        {/* Send icon (Animated) */}
        <div className="absolute top-[180px] md:top-[345px] right-10 md:right-60">
          <AnimatePresence mode="wait">
            <motion.div
              key={swapKey + "-send"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[50px] h-[50px] md:w-[152px] md:h-[152px]"
            >
              <Image
                src={currentSend}
                alt="Send Icon"
                className="object-contain h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom left shopping icon */}
        <div className="absolute top-[250px] md:top-[436px] left-0 w-[70px] h-[88px] md:w-[191px] md:h-[280px]">
          <Image
            src={shopping}
            alt="Person with shopping bag"
            className="h-full w-full"
          />
        </div>

        {/* Right teal box */}
        <div className="absolute bottom-0 md:top-[600px] md:-right-18 -right-6 flex flex-col items-center justify-center w-[50px] h-[50px] md:h-[152px] md:w-[152px] bg-teal-900 rounded-xl md:rounded-4xl">
          <div className="text-white text-lg md:text-[40px] font-bold absolute my-auto md:left-5">
            Send
          </div>
        </div>
      </div>
    </div>
  );
}
