import Image from "next/image";
import CustomInputField from "../components/input";
import CustomTextArea from "../components/textarea";
import { PrimaryButton } from "../components/Button";
import call from "../assets/call.svg";
import mail from "../assets/mail.svg";
import chat from "../assets/chat.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import map from "../assets/map.svg";
import fb from "../assets/fb.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import ig from "../assets/ig.svg";

export function Contact() {
  const socialLinks = [
    { href: "https://www.facebook.com", icon: fb, alt: "Facebook" },
    { href: "https://www.linkedin.com", icon: linkedin, alt: "LinkedIn" },
    { href: "https://www.twitter.com", icon: twitter, alt: "Twitter" },
    { href: "https://www.instagram.com", icon: ig, alt: "Instagram" },
  ];
  return (
    <div className="min-h-screen bg-[#4F0072] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="hidden md:block absolute bottom-36 left-0 lg:w-[297px]">
        <Image
          src={mail}
          alt="Decorative Element"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="hidden md:block absolute right-0 top-1/7 z-20 w-[250px] ">
        <Image
          src={chat}
          alt="Chat Icon"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="hidden md:block absolute bottom-110 right-0 w-[288px] h-[288px]">
        <Image
          src={call}
          alt="Call Icon"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <main className="mx-auto px-4 lg:px-20 py-12 relative z-10 space-y-11">
        {/* Right Side - Contact Form */}
        <div className="bg-[#6D1F8F66] backdrop-blur-sm mx-auto p-8 lg:p-20 rounded-4xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:justify-between items-start">
          <div className="text-white space-y-8 col-span-1 flex flex-col gap-2 lg:gap-40">
            <div>
              <h1 className="text-3xl lg:text-[52px]">Get in touch</h1>
            </div>

            <div className="space-y-4">
              <p className="text-lg opacity-90">
                Do you have any questions or feedback?
                <br />
                We'd love to hear from you.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center space-x-4">
                  <Image src={phone} alt="Phone Icon" className="w-5 h-5" />
                  <span className="text-lg">+1(343)538-5190</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src={email} alt="Email Icon" className="w-5 h-5" />
                  <span className="text-lg">hello@revox.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src={map} alt="Map Icon" className="w-5 h-5" />
                  <span className="text-lg">
                    2482 Yonge St Toronto ON M4P 2H5
                  </span>
                </div>
              </div>
            </div>
          </div>
          <form className="col-span-1 space-y-6 flex flex-col justify-center lg:max-w-[70%] ">
            <div className="space-y-2">
              <CustomInputField
                type="text"
                extraLabel="Fullname"
                placeholder="Firstname Lastname"
              />
            </div>

            <div className="space-y-2">
              <CustomInputField
                type="email"
                extraLabel="Email address"
                defaultValue="johndoe@mail.com"
              />
            </div>

            <div className="space-y-2">
              <CustomTextArea
                extraLabel="Message"
                rows={4}
                placeholder="Type here..."
              />
            </div>

            <PrimaryButton className="w-full" title="Send message" />
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-5 lg:mt-130 p-8 lg:px-40">
          <div className="flex flex-col md:flex-row gap-6 lg:justify-between lg:items-center items-start space-y-6 md:space-y-0">
            <div className="flex gap-4 items-center lg:space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  <Image src={link.icon} alt={link.alt} className="w-[20px] h-[20px]" />
                </a>
              ))}
            </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center text-white gap-4 space-x-10 font-medium text-base">
                <a href="#" className="cursor-pointer hover:text-white transition-colors">
                  About Us
                </a>
                <a href="#" className="cursor-pointer hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="cursor-pointer hover:text-white transition-colors">
                  Terms of Use
                </a>
              <div>©2025 Revox. All rights reserved.</div>
              </div>
            
          </div>
        </footer>
      </main>
    </div>
  );
}
