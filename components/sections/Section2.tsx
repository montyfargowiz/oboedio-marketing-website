import React from "react";
import Image from "next/image";

export default function Section2() {
  return (
    <section className="mx-6 px-2 pb-8">
      <div>
        <div className="flex flex-colum pl-20 gap-12 md:grid md:grid-cols-12 text-black p-8 bg-black rounded-3xl">
          <Image
            src="/images/dashboard.png"
            alt="Dashboard"
            height={300}
            width={500}
            className="md:col-span-8 w-full dashboard-image"
          />
          <div className="flex md:col-span-4 flex-wrap justify-left align-center items-center h-full w-full">
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="font-thin pr-12 text-md my-3 px-10 w-fit h-fit tracking-widest hover:outline-blue-300 hover:text-blue-300 px-5 flex items-center inline-block rounded-full outline outline-1 outline-primary px-3 py-2.5 text-xs font-medium leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-black hover:shadow-white-10 hover:shadow-xl focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              <Image
                src="/icons/book.png"
                alt="Dashboard"
                className="rounded-full"
                height={30}
                width={30}
              />
              <p className="ml-4">Customizable Assessments</p>
            </button>
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="font-thin pr-12 text-md my-3 px-10 w-fit h-fit  tracking-widest hover:outline-blue-300 hover:text-blue-300 px-5 flex items-center inline-block rounded-full outline outline-1 px-3 py-2.5 text-xs font-medium leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-black hover:shadow-white-10 hover:shadow-xl focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              <Image
                src="/icons/transfer.png"
                alt="Dashboard"
                className="rounded-full"
                height={30}
                width={30}
              />
              <p className="ml-4">Efficient Workflow</p>
            </button>
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="font-thin pr-12 text-md my-3 px-10 w-fit h-fit tracking-widest hover:outline-blue-300 hover:text-blue-300 px-5 flex items-center inline-block rounded-full outline outline-1 outline-secondary px-3 py-2.5 text-xs font-medium leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-black hover:shadow-white-10 hover:shadow-xl focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              <Image
                src="/icons/voice-message.png"
                alt="Dashboard"
                className="rounded-full"
                height={30}
                width={30}
              />
              <p className="ml-4">Real-Time Tracking</p>
            </button>
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="font-thin pr-12 text-md my-3 px-10 w-fit h-fit tracking-widest hover:outline-blue-300 hover:text-blue-300 px-5 flex items-center inline-block rounded-full outline outline-1 px-3 py-2.5 text-xs font-medium leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-black hover:shadow-white-10 hover:shadow-xl focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              <Image
                src="/icons/digital-marketing.png"
                alt="Dashboard"
                className="rounded-full"
                height={30}
                width={30}
              />
              <p className="ml-4">Multi-User Access</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
