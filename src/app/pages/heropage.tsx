"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Eating from "../assets/Eating.png"
import currency1 from "../assets/Currency.png"
import send1 from "../assets/send.png"
import shopping from "../assets/Shopping.png"
import centralImage from "../assets/Mask.png"
import currency2 from "../assets/currency2.png"
import send2 from "../assets/send2.png"
import scroll from "../assets/scroll.svg"
import mouse from "../assets/pad.svg"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const [currentCurrency, setCurrentCurrency] = useState(currency1)
  const [currentSend, setCurrentSend] = useState(send1)
  const [swapKey, setSwapKey] = useState(0)

  // Refs for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null)
  const leftBoxRef = useRef<HTMLDivElement>(null)
  const rightBoxRef = useRef<HTMLDivElement>(null)
  const centralImageRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const eatingImageRef = useRef<HTMLDivElement>(null)
  const shoppingImageRef = useRef<HTMLDivElement>(null)
  const currencyRef = useRef<HTMLDivElement>(null)
  const sendRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  // Refs for the covering animation
  const currencyContainerRef = useRef<HTMLDivElement>(null)
  const sendContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements for entrance animation
      gsap.set(
        [
          leftBoxRef.current,
          rightBoxRef.current,
          centralImageRef.current,
          headingRef.current,
          eatingImageRef.current,
          shoppingImageRef.current,
          currencyRef.current,
          sendRef.current,
          scrollIndicatorRef.current,
        ],
        {
          opacity: 0,
          y: 60,
        },
      )

      // Main entrance timeline (triggers immediately - no delay)
      const entranceTl = gsap.timeline()

      // Start all animations immediately with faster durations
      entranceTl
        .to(scrollIndicatorRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4, // Faster
          ease: "power2.out",
        })
        .to(
          centralImageRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5, // Faster
            ease: "power2.out",
          },
          0, // Start at the same time
        )
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4, // Faster
            ease: "power2.out",
          },
          0.1, // Very small delay
        )
        .to(
          [leftBoxRef.current, rightBoxRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.4, // Faster
            ease: "power2.out",
            stagger: 0.1, // Smaller stagger
          },
          0.2, // Small delay
        )
        .to(
          [eatingImageRef.current, shoppingImageRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.4, // Faster
            ease: "power2.out",
            stagger: 0.05, // Smaller stagger
          },
          0.3, // Small delay
        )
        .to(
          [currencyRef.current, sendRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.4, // Faster
            ease: "power2.out",
            stagger: 0.05, // Smaller stagger
          },
          0.4, // Small delay
        )

      // Parallax effect for floating elements on scroll
      gsap.to(eatingImageRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })

      gsap.to(shoppingImageRef.current, {
        y: -20,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Slow cover-up animation for changing images
  const animateImageCoverUp = (
    containerElement: HTMLElement,
    currentImage: any,
    newImage: any,
    callback: () => void,
  ) => {
    // Create a new image element that will cover the current one
    const coverImage = document.createElement("div")
    coverImage.style.position = "absolute"
    coverImage.style.top = "0"
    coverImage.style.left = "0"
    coverImage.style.width = "100%"
    coverImage.style.height = "100%"
    coverImage.style.backgroundImage = `url(${newImage.src || newImage})`
    coverImage.style.backgroundSize = "contain"
    coverImage.style.backgroundRepeat = "no-repeat"
    coverImage.style.backgroundPosition = "center"
    coverImage.style.transform = "translateY(100%) scale(0.8)"
    coverImage.style.opacity = "0"

    containerElement.appendChild(coverImage)

    const tl = gsap.timeline({
      onComplete: () => {
        callback()
        containerElement.removeChild(coverImage)
      },
    })

    // Slower animation - new image slides up and scales to cover the old one
    tl.to(coverImage, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2, // Slower duration
      ease: "power2.inOut",
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newCurrency = currentCurrency === currency1 ? currency2 : currency1
      const newSend = currentSend === send1 ? send2 : send1

      // Animate currency change with cover-up effect
      if (currencyContainerRef.current) {
        animateImageCoverUp(currencyContainerRef.current, currentCurrency, newCurrency, () => {
          setCurrentCurrency(newCurrency)
        })
      }

      // Animate send icon change with slight delay and cover-up effect
      setTimeout(() => {
        if (sendContainerRef.current) {
          animateImageCoverUp(sendContainerRef.current, currentSend, newSend, () => {
            setCurrentSend(newSend)
          })
        }
      }, 300)

      setSwapKey((prev) => prev + 1)
    }, 4000) // Slightly longer interval to match slower animations

    return () => clearInterval(interval)
  }, [currentCurrency, currentSend])

  return (
    <div ref={heroRef} className="relative overflow-hidden">
      {/* Loading */}
      <div ref={scrollIndicatorRef} className="flex items-center justify-center py-4">
        <div className="flex items-center space-x-2 mt-6 text-black/32 text-sm sm:text-base">
          <Image src={scroll || "/placeholder.svg"} alt="Mouse Icon" className="w-6 h-6" />
          <span>or</span>
          <Image src={mouse || "/placeholder.svg"} alt="Mouse Icon" className="w-6 h-6" />
          <span className="">Scroll Down</span>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20">
        {/* Left teal box */}
        <div
          ref={leftBoxRef}
          className="absolute -left-6 md:-left-18 flex flex-col items-center top-10 justify-center w-[50px] h-[50px] md:h-[152px] md:w-[152px] bg-teal-900 rounded-xl md:rounded-4xl"
        >
          <div className="text-white text-lg md:text-[40px] font-bold absolute my-auto md:left-5">Send</div>
        </div>

        {/* Currency icon (Animated with cover-up effect) */}
        <div
          ref={currencyContainerRef}
          className="absolute md:hidden lg:block top-[130px] md:top-[230px] w-[50px] h-[50px] md:w-[152px] md:h-[152px] left-7 md:left-72 overflow-hidden"
        >
          <div ref={currencyRef} className="relative w-full h-full">
            <Image
              src={currentCurrency || "/placeholder.svg"}
              alt="Currency Icon"
              className="object-contain h-full w-full"
            />
          </div>
        </div>

        {/* Center image and heading */}
        <div className="w-[200px] h-[289px] md:w-[424px] md:h-[493px] flex flex-col gap-4 md:gap-10 items-center justify-center mx-auto mt-[30px] md:mt-[98px]">
          <div ref={centralImageRef}>
            <Image
              src={centralImage || "/placeholder.svg"}
              alt="central image"
              className="object-cover h-full w-full"
            />
          </div>
          <div ref={headingRef} className="text-center">
            <h1 className="text-xl md:text-[40px] font-heading font-bold text-black">Send and Receive Money</h1>
          </div>
        </div>

        {/* Top right pink image */}
        <div ref={eatingImageRef} className="absolute top-10 right-2 md:right-20">
          <div className="w-[70px] h-[88px] md:w-[152px] md:h-[180px]">
            <Image
              src={Eating || "/placeholder.svg"}
              alt="Person holding something"
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        {/* Send icon (Animated with cover-up effect) */}
        <div
          ref={sendContainerRef}
          className="absolute top-[180px] md:top-[345px] right-10 md:right-60 w-[50px] h-[50px] md:hidden lg:block lg:w-[152px] lg:h-[152px] overflow-hidden"
        >
          <div ref={sendRef} className="relative w-full h-full">
            <Image src={currentSend || "/placeholder.svg"} alt="Send Icon" className="object-contain h-full w-full" />
          </div>
        </div>

        {/* Bottom left shopping icon */}
        <div
          ref={shoppingImageRef}
          className="absolute top-[250px] md:top-[480px] left-0 w-[70px] h-[88px] md:w-[191px] md:h-[280px]"
        >
          <Image src={shopping || "/placeholder.svg"} alt="Person with shopping bag" className="h-full w-fit  object-contain " />
        </div>

        {/* Right teal box */}
        <div
          ref={rightBoxRef}
          className="absolute bottom-0 md:top-[600px] md:-right-18 -right-6 flex flex-col items-center justify-center w-[50px] h-[50px] md:h-[152px] md:w-[152px] bg-teal-900 rounded-xl md:rounded-4xl"
        >
          <div className="text-white text-lg md:text-[40px] font-bold absolute my-auto md:left-5">Send</div>
        </div>
      </div>
    </div>
  )
}
