'use client'

import React, { Fragment, useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import logo from "/public/JetBlue-Airways-Logo.png"
import jetVacation from "/public/jetBlueVacation-removebg-preview.png"
import piaslyLogo from "/public/piaslyJetbluelogo-removebg-preview.png"
import jetbluewhite from "/public/jetbluwhite-removebg-preview.png"
import { MotionDiv } from './MotionDiv';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../lib/config/motion.js';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ChatBubbleLeftIcon, ChevronDownIcon, HomeIcon, PaperAirplaneIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';



function Header() {


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const products = [
        {
            name: "Book a Flight",
            description: "Get a better understanding of your traffic",
            href: "#",
            icon: HomeIcon,
        },
        {
            name: "Book a Flight",
            description: "Get a better understanding of your traffic",
            href: "#",
            icon: PaperAirplaneIcon, 
        },
        {
            name: "Book a Flight",
            description: "Get a better understanding of your traffic",
            href: "#",
            icon: ChatBubbleLeftIcon,
        },
    ]


    const callToAction = [
        {
            name: "See Demo Booking", href: "#", icon: PlayCircleIcon,
        },
        {
            name: "Contact Support", href: "#", icon: PhoneIcon
        }
    ]






    const variant = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
    };

  return (
    <>
        <header className="bg-white h-12">
            <nav className="mx-auto flex max-w-full items-center p-1 h-12 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 items-center justify-between">
                    <Link href="/" className="-m-1.5 p-2">
                        <span className="sr-only">JetBlue.com</span>
                        <Image width={60} height={50} src={logo} alt="logo"/>
                    </Link>
                    <Link href="/" className="-m-1.5 p-2">
                        <span className="sr-only">JetBlue.com</span>
                        <Image width={90} height={50} src={jetVacation} alt="logo"/>
                    </Link>
                    <Link href="/" className="-m-1.5 p-2 bg-[purple]">
                        <span className="sr-only">JetBlue.com</span>
                        <Image width={60} height={50} src={piaslyLogo} alt="logo"/>
                    </Link>
                </div>
            </nav>
        </header>
        <header className="bg-[#01205B] h-12">
            <nav className="mx-auto flex max-w-full items-center p-1 h-14 lg:px-8 justify-between" aria-label="Global">
                <div className="flex lg:flex-1 items-center">
                    <Link href="/" className="-m-1.5 p-2">
                        <span className="sr-only">JetBlue.com</span>
                        <Image width={110} height={60} src={jetbluewhite} alt="logo" className="items-center justify-center"/>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}>
                            <span className="sr-only">Open Main Menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true"/>
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex item-center gap-x-1 text-sm font-semibold leading-8 text-white mr-[150px]">
                            Flight
                            <ChevronDownIcon 
                            className="h-5 w-5 flex text-white" aria-hidden="true"/>
                        </Popover.Button>
                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 transition-0"
                            leaveTo="opacity-0 transition-y-1">
                            <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden
                            rounded-3xl shadow-lg ring-1 ring-gray-900/5 ">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm
                                        leading-6 hover:bg-gray-50">

                                        <div className="flex h-11 w-11  flex-none items-center justify-center rounded-lg bg-gray-50
                                        group-hover:bg-gray-200">
                                          <item.icon className="h-6 w-6 text-[] group-hover:text-blue-600" aria-hidden="true"/>
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-[blue]">
                                                {item.name}
                                                <span className="absolute inset-0"></span>
                                            </a>
                                            <p className="mt-1 text-[blue]">
                                                {item.description}
                                            </p>
                                        </div>

                                        </div>
                                    ))}
                                </div>

                            </Popover.Panel>

                            </Transition>
                    </Popover>
                </Popover.Group>
            </nav>
        </header>    
    </>
  )
}


{/* <MotionDiv {...slideAnimation("left")}
         className="Top Nav mx-auto flex max-w-full items-center p-1 h-14 lg:px-8 justify-between">
            <Link href="/" className="-m-1.5 p-2">
                <span className="sr-only">JetBlue.com</span>
                <Image width={60} height={50} src={logo} alt="logo"/>
            </Link>
            <Link href="/" className="-m-1.5 p-2">
                <span className="sr-only">JetBlue.com</span>
                <Image width={90} height={50} src={jetVacation} alt="logo"/>
            </Link>
            <Link href="/" className="-m-1.5 p-2">
                <span className="sr-only">JetBlue.com</span>
                <Image width={60} height={50} src={piaslyLogo} alt="logo"/>
            </Link>
        </MotionDiv>
    </header>
    <div className="Botton Nav bg-[#01205B] mx-auto flex max-w-full items-center p-1 h-14 lg:px-8 bg-[purple]">
        <div className="Left Nav flex w-full lg:flex-1 pl-20">
                <Link href="/" className="bg-[green]">
                    <Image src={jetbluewhite} alt="whitelogo" className="w-[150px] ml-[240px] bg-[red]" />
                </Link>
            <MotionDiv>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex item-center justify-center rounded-md p-8 text-white" 
                    onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </MotionDiv>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
            <Popover.Button className="flex item-center gap-x-1 text-sm font-semibold leading-8 text-white">
                Flight
                <ChevronDownIcon 
                className="h-5 w-5 flex text-white" aria-hidden="true"/>
            </Popover.Button>
        </Popover>
    </Popover.Group>
    </div> */}

export default Header