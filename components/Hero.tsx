"use client";
import Image from "next/image";
import { useState } from 'react'
import { Dialog } from '@headlessui/react';
import { CustomButton } from ".";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const Hero = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
    <div className="flex-1 isolate px-10 pt-32 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#27e447] to-[#321deb] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
        <div className="hidden sm:flex sm:justify-start lg:ml-10 pt-40">
          <div className="rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{' '}
            <a href="#" className="font-semibold text-indigo-600">
              {/* <span className="absolute inset-0" aria-hidden="true" /> */}
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      <div className="flex lg:flex-row flex-col max-w-full lg:ml-10 sm:py-5 ">
        <div className="text-center lg:text-start">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
            <CustomButton 
              title="Get Started"
              containerStyles="bg-blue-500 text-white rounded-full"
            />
            <CustomButton 
              title="Learn More →"
              containerStyles="text-sm font-semibold leading-6 text-gray-900"
            />
          </div>
          </div>
          <div className="flex sm:flex-col justify-end items-end w-full">
            <div className="relative xl:w-full w-[90%] h-[350px] z-0">
              <Image 
                src="/hero.png"
                alt="hero"
                fill
                className="object-contain"
              />
            </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3fdd2a] to-[#220fcf] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  </div>
  )
}

export default Hero