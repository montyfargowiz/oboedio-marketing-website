import React from "react";
import Image from "next/image";
import Submenu from "./SubMenu";

export default function NavBar() {
  return (
    <nav
      className="relative flex w-full flex-wrap items-center justify-between shadow-mild"
      data-twe-navbar-ref
    >
      <div className="relative flex w-full bg-secondary flex px-6 flex-wrap justify-end mb-3 text-sm text-white">
        <a href="#" className="me-2 m-1 font-thin hover:text-textBlack2">
          <i className="fa-solid fa-laptop-code" /> Access Portal
        </a>
        <a href="#" className="m-1 font-thin hover:text-textBlack2">
          <i className="fa-solid fa-book" /> Contact Us
        </a>
      </div>
      <div className="flex w-full pl-8 flex-wrap items-center justify-between px-3">
        <div
          className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent4"
          data-twe-collapse-item
        >
          <ul
            className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
            data-twe-navbar-nav-ref
          >
            <Image src="/images/logo.png" width={200} height={50} alt="Logo" />
          </ul>

          <div className="flex items-center">
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="me-3 hover:text-secondary inline-block font-graphik font-black rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-textBlack2 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
            >
              Home
            </button>
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="me-3 hover:text-secondary inline-block font-graphik font-black rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-textBlack2  hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
            >
              About Us
            </button>

            <Submenu />

            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="me-3 hover:text-secondary inline-block font-graphik font-black rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-textBlack2 hover:text-primary-600 focus:text-textBlack2 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
            >
              Product Info
            </button>
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="me-3 ml-5 inline-block font-graphik rounded-full bg-blue-800 px-3 py-2.5 text-xs font-medium leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-black hover:shadow-white-10 hover:shadow-xl focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
