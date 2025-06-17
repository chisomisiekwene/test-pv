// import man from "../assets/man.svg";
// import Image from "next/image";
// import calendar from "../assets/Calendar.svg";
// import { PrimaryButton } from "../components/Button";

// export function PayBills() {
 
//   return (
//     <section
//       className="relative z-10 lg:px-20 py-8 lg:py-60 bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: `url(${man.src})`,
//       }}
//     >
//       <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-16 w-full">
//         {/* Left Content */}
//         <article className="flex flex-col gap-20">
//           <header className="flex flex-col gap-20">
//             <h1 className="text-5xl lg:text-[52px] font-bold text-white tracking-tight">
//               Pay Bills
//             </h1>
//             <p className="text-base font-medium max-w-80 leading-relaxed text-white">
//               Say goodbye to long queues and endless processes—our platform offers a seamless solution for paying bills instantly without any hiccups.
//             </p>
//           </header>

//           <div className="space-y-4">
//             <p className="text-white text-base font-medium">
//               Get Revve on your phone
//             </p>
//             <PrimaryButton title="Coming soon" />
//           </div>
//         </article>

//         <div className="mx-60 w-[340px] h-[588px]">
//           <Image
//             src={calendar}
//             alt="Calendar"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Content
//         <figure className="relative">
//           <Image
//             src="/hero-image.jpeg"
//             alt="Person sitting on couch with colorful pillows, holding phone"
//             width={600}
//             height={400}
//             className="w-full h-auto rounded-lg"
//             priority
//           />

//           {/* Calendar Overlay */}
//         {/* <figcaption className="absolute top-4 right-4 lg:top-8 lg:right-8 p-4 bg-white/95 backdrop-blur-sm shadow-lg">
//             <div className="grid grid-cols-7 gap-1 text-xs">
//               {calendarData.map((day) => (
//                 <div
//                   key={day.date}
//                   className="w-8 h-8 flex items-center justify-center rounded relative"
//                 >
//                   <span className="text-gray-700 font-medium">{day.date}</span>
//                   {day.hasEvent && (
//                     <div
//                       className={`absolute bottom-0 right-0 w-2 h-2 rounded-full ${day.color}`}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </figcaption>
//         </figure> */}
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import man from "../assets/man.svg";
import calendar from "../assets/Calendar.svg";
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
      <div className="container mx-auto px-4 lg:px-20 py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 items-center gap-4 lg:gap-20">
          {/* Left Content */}
          <article className="flex flex-col gap-12">
            <header className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-[52px] font-heading font-bold text-white tracking-tight">
                Pay Bills
              </h1>
              <p className="text-base font-sans lg:max-w-80 max-w-xl mx-auto lg:mx-0 text-white leading-relaxed">
                Say goodbye to long queues and endless processes—our platform
                offers a seamless solution for paying bills instantly without
                any hiccups.
              </p>
            </header>

            <div className="space-y-4">
              <p className="text-white text-base font-medium">
                Get Revve on your phone
              </p>
              <PrimaryButton title="Coming soon" />
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
