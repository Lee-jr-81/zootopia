import Image from "next/image";
import React from "react";
import { Select } from "@chakra-ui/react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Hero() {
  return (
    <section className="text-gray-600 body-font bg-[#fff8eb] dark:bg-slate-900">
      <div className="container flex md:w-2/3 md:mx-auto md:py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="text-3xl font-customFont leading-9 tracking-tight mb-3 text-[#652b19] dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Find your friend
          </h1>
          <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed text-[#975f4e] dark:text-gray-300">
            The UKs best pet classifieds website that looks to fund conservation
            projects and pets in need.
          </p>
          <div className="bg-[#652b19] p-2 rounded-xl w-1/2">
            <div className="mb-2">
              <Select placeholder="Select pet" bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <div className="">
              <Select placeholder="Select breed" bg="white">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/petHero.png"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
