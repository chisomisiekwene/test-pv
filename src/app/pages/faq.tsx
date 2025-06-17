"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog";

import plus from "../assets/plus.png";
import mouse from "../assets/Mouse.svg";
import { faqItems } from "../components/list/faq";
import Download from "./downloadmodal";
import { PrimaryButton } from "../components/Button";

export default function Faq() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const introRef = useRef(null);
  const listRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const listInView = useInView(listRef, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#4F0072] text-white px-8 lg:px-20 py-12 lg:py-30">
      <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left: Intro Section */}
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 30 }}
          animate={introInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10 flex flex-col justify-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold">FAQs</h1>
          <p className="text-purple-200 text-base sm:text-lg">
            Here are some quick answers and tips to help you get started.
          </p>
          <div className="space-y-6">
            <p className="text-purple-200 text-base">Get Revve on your phone</p>

            {/* shadcn Dialog integration */}
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <PrimaryButton
                title="Download the app"
                />
              </DialogTrigger>
              <DialogContent className="bg-white max-w-md rounded-xl p-6">
                <Download />
                
              </DialogContent>
            </Dialog>

            <div className="flex items-center space-x-2 mt-6">
              <Image src={mouse} alt="Mouse Icon" className="w-6 h-6" />
              <span className="text-[#ffffff32] text-sm sm:text-base">
                Point your mouse here to continue scrolling
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right: FAQ List */}
        <motion.div
          ref={listRef}
          initial={{ opacity: 0, y: 30 }}
          animate={listInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-6"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={listInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="border-b border-[#5D0186] pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between cursor-pointer w-full text-left hover:text-purple-200 transition-colors duration-300"
              >
                <h2 className="text-lg sm:text-xl lg:text-2xl font-medium pr-4">{item.question}</h2>
                <div className="w-8 h-8 sm:w-[25px] sm:h-[25px] transition-transform duration-300">
                  <Image
                    src={plus}
                    alt="Toggle Icon"
                    className={`w-full h-full object-contain transform ${openFAQ === index ? "rotate-45" : ""}`}
                  />
                </div>
              </button>
              <motion.div
                initial={false}
                animate={openFAQ === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <p className="text-base sm:text-lg leading-relaxed pr-4 mt-3 text-purple-100">{item.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
