import React, { useState, useEffect, useRef } from "react";
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

import Image from "next/image";
import Button from "../ui-components/Button/Button";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export interface IHeaderProps {}

export default function Nav(props: IHeaderProps) {
  const [navBackground, setNavBackground] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const navRef = useRef<boolean | undefined>();
  navRef.current = navBackground;

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Buy", href: "/buy", current: false },
    { name: "Sell", href: "/sell", current: false },
    { name: "Find", href: "/find", current: false },
    { name: "Testimonials", href: "/testimonials", current: false },
    { name: "About", href: "/about", current: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed left-0 top-0 z-50 w-full  ${
        navBackground ? "bg-white" : "bg-transparent"
      }`}
    >
      {({ open }) => (
        <>
          <div
            className={`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ${
              open ? "hidden" : null
            }`}
          >
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}

                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  /* onClick={() => setIsShowing((isShowing) => !isShowing)} */
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex-shrink-0 flex items-center mr-auto px-1 sm:px-0 sm:m-0">
                  <Image
                    className="hidden lg:block h-8 w-auto"
                    src="/images/nextLogo.svg"
                    alt="venture-logo"
                    width={75}
                    height={45}
                  />
                </div>
                <div className="hidden sm:block sm:ml-auto ">
                  <div className="flex space-x-4 mr-10">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            item.current
                              ? " text-black-400"
                              : "text-black-400 hover:underline decoration-blue-800",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex absolute inset-y-0 right-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Button
                  color={"text-black"}
                  buttonText={"LOGIN"}
                  type={"loginBtn"}
                  linkHref={"/login"}
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden relative">
            {/* Mobile menu button*/}
            {/*  <Transition.Child
              appear={true}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            > */}
            <div className="absolute top-0 right-0 bg-white h-screen w-4/5 rounded-l-3xl">
              <Disclosure.Button className="absolute top-10 right-10">
                <span className="sr-only">Open main menu</span>

                <XIcon className="block h-8 w-8" aria-hidden="true" />
              </Disclosure.Button>
              <div className="w-full h-full  flex-col flex items-left justify-center px-10 gap-6">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? "  text-black" : "text-gray-500",
                      "block px-3 py-2 rounded-md text-base font-normal uppercase"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <div>
                  <Button
                    color={"text-black"}
                    buttonText={"LOGIN"}
                    type={"loginBtn"}
                    linkHref={"/login"}
                  />
                </div>
              </div>
            </div>
            {/* </Transition.Child> */}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
