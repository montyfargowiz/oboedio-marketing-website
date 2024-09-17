import React from "react";

export default function Section3() {
  return (
    <div className="flex flex-wrap justify-center align-center p-8">
      <h2 className="text-primary font-bold uppercase text-3xl">Products</h2>
      <div className="grid grid-cols-12">
        <div className=" m-8 col-span-6 rounded-3xl shadow-lg bg-gray-100 p-10 m-auto">
          <h3 className="text-5xl text-textBlack2  text-left tracking-wider">
            Effortless Compliance Management
          </h3>
          <p className="text-justify mt-4 font-graphik font-light">
            Oboedio simplifies the complexities of compliance with an intuitive
            platform that helps you navigate industry-specific regulations with
            ease. Whether you’re just starting or looking to improve your
            current processes, Oboedio is your go-to solution.
          </p>
          <button
            type="button"
            className="text-white mt-4 bg-gradient-to-r from-secondary via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            View more
            <i className="fa-solid fa-arrow-right ml-3"></i>
          </button>
        </div>
        <div className="col-span-6 m-8 rounded-3xl shadow-lg bg-gray-100 p-10 m-auto">
          <h3 className="text-5xl text-textBlack2  text-left tracking-wider">
            User Onboarding Made Easy
          </h3>
          <p className="text-justify mt-4 font-graphik font-light">
            Our seamless onboarding process includes tailored compliance
            questionnaires that guide you through the necessary steps, ensuring
            you capture all relevant information and meet industry standards
            from day one.
          </p>
          <button
            type="button"
            className="text-white mt-4 bg-gradient-to-r from-secondary via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            View more
            <i className="fa-solid fa-arrow-right ml-3"></i>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-6 m-8 rounded-3xl shadow-lg bg-gray-100 p-10 m-auto">
          <h3 className="text-5xl text-textBlack2  text-left tracking-wider">
            Smart Suggestions & Recommendations
          </h3>
          <p className="text-justify mt-4 font-graphik font-light">
            Stay informed with our intelligent suggestions and recommendations.
            Oboedio continuously analyzes your data and provides actionable
            insights to keep your business compliant and up-to-date with the
            latest regulations.
          </p>
          <button
            type="button"
            className="text-white mt-4 bg-gradient-to-r from-secondary via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            View more
            <i className="fa-solid fa-arrow-right ml-3"></i>
          </button>
        </div>
        <div className="col-span-6 m-8 rounded-3xl shadow-lg bg-gray-100 p-10 m-auto">
          <h3 className="text-5xl text-textBlack2  text-left tracking-wider">
            Industry-Specific Solutions
          </h3>
          <p className="text-justify mt-4 font-graphik font-light">
            No matter your sector, Oboedio offers tailored solutions to address
            the specific challenges and requirements of your industry, helping
            you maintain compliance effortlessly.
          </p>
          <button
            type="button"
            className="text-white mt-4 bg-gradient-to-r from-secondary via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            View more
            <i className="fa-solid fa-arrow-right ml-3"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
