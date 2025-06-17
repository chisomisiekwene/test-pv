"use client";

import { useState } from "react";
import Image from "next/image";
import { ActiveButton, OtherButton } from "../components/Button";

import appstore from "../assets/appstore.svg";
import playstore from "../assets/playstore.svg";
import androidQR from "../assets/qrandroid.svg";
import appleQR from "../assets/appleqr.svg";

export default function Download() {
  const [selectedPlatform, setSelectedPlatform] = useState<"android" | "ios">("android");

  const isAndroid = selectedPlatform === "android";
  const isIOS = selectedPlatform === "ios";

  return (
    <div className="w-full flex flex-col gap-3 items-center  justify-center">
      <div className="flex flex-col items-center text-center gap-4 md:gap-8">
        <h1 className="text-2xl md:text-[44px]">Get the Revve app</h1>
        <p className="text-base font-medium">
          Select your device & scan the QR code to download
        </p>
         <div className="flex gap-4">
        {isAndroid ? (
          <ActiveButton
            title="Android"
            beforeIcon={playstore}
          />
        ) : (
          <OtherButton
            title="Android"
            beforeIcon={playstore}
            onClick={() => setSelectedPlatform("android")}
          />
        )}

        {isIOS ? (
          <ActiveButton
            title="iPhone"
            beforeIcon={appstore}
          />
        ) : (
          <OtherButton
            title="iPhone"
            beforeIcon={appstore}
            onClick={() => setSelectedPlatform("ios")}
          />
        )}
      </div>
      </div>
     

      {/* QR + Store Button */}
      <div className="w-[200px] h-[200px] mt-12">
        <Image
          src={isAndroid ? androidQR : appleQR}
          alt={`${selectedPlatform} QR`}
          className="w-full h-full object-contain"
        />
       
      </div>
    </div>
  );
}
