"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import central from "../assets/central.svg";
import perfume from "../assets/perfume.svg";
import joggers from "../assets/joggers.svg";
import shoe from "../assets/shoe.svg";
import Image from "next/image";
import { SecondaryButton } from "../components/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Download from "./downloadmodal";

export default function ShopOnline() {
  const [isVisible, setIsVisible] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className=" relative bg-[#F2F2F2] md:py-20 py-10 lg:py-[192px]">
      <div className="px-8 lg:px-20 mx-auto lg:pb-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <section aria-labelledby="main-heading">
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
                Shop Online
              </motion.h1>

              <motion.div
                className="space-y-4 text-base font-medium text-black leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p>
                  Experience the world at your fingertips with our seamless
                  online shopping platform.
                </p>
                <p>
                  From the latest fashion trends to must-have gadgets, shop the
                  world's best brands and products from the comfort of your own
                  home.
                </p>
              </motion.div>

              <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger asChild>
                  <SecondaryButton title="Download the app" className="w-fit"/>
                </DialogTrigger>
                <DialogContent className="bg-white max-w-md rounded-xl p-6">
                  <Download />
                  
                </DialogContent>
              </Dialog>
            </motion.div>
          </section>

          {/* Center Phone */}
          <section
            aria-labelledby="wallet-demo"
            className="flex justify-center relative"
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
                <Image
                  src={central}
                  alt="Mobile phone displaying wallet interface"
                />
              </motion.div>
            </motion.div>
          </section>

          {/* Right Image */}
          <section aria-labelledby="user-image" className="hidden lg:block">
            <motion.div
              className="flex justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="relative h-[400px] w-[496px] flex gap-5 justify-between items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute bottom-0 left-40 w-[120px]">
                  <Image src={joggers} alt="Joggers" className="w-full" />
                </div>

                <div className="absolute left-80 w-[256px]">
                  <Image src={shoe} alt="shoe" className="w-full" />
                </div>

                <div className="absolute top-0 left-0 w-[120px]">
                  <Image src={perfume} alt="Perfume" className="w-full" />
                </div>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </main>
  );
}
