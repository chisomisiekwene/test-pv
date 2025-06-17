import { DM_Sans } from "next/font/google";
import { Paytone_One } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const paytoneOne = Paytone_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-paytone-one",
  display: "swap",
});
