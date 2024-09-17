import React from "react";
import Image from "next/image";

const Section: React.FC = () => {
  return (
    <section className="p-8">
      <div className="gap-4">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-6 text-black py-4 pr-4">
            <h1 className="text-5xl font-bold">
              Manage compliance effortlessly, stay ahead always.
            </h1>
          </div>

          <div className="md:col-span-6 h-full shadow-dark text-white py-2 md:pl-4">
            <div className="block rounded-2xl bg-gray-300 h-full bg-white p-6 text-surface shadow-secondary-1">
              <div className="grid grid-cols-12">
                <div className="col-span-8">
                  <h5 className="mb-2 text-xl text-black font-medium">
                    Your Path To Seamless Compliance
                  </h5>
                  <p className="mb-2 text-sm text-black font-graphik tracking-wide">
                    Oboedio simplifies compliance by offering a secure,
                    easy-to-use platform for managing and completing
                    assessments. Oboedio simplifies compliance by offering a
                    secure, easy-to-use platform for managing and completing
                    assessments.
                  </p>
                  <p className="mb-2 text-sm text-black font-graphik tracking-wide">
                    Oboedio simplifies compliance by offering a secure,
                    easy-to-use platform for managing and completing
                    assessments.
                  </p>
                </div>
                <div className="col-span-4">
                  <Image
                    src="/images/logo-2.png"
                    alt="Icon"
                    width={600}
                    height={600}
                    className="m-2 rounded-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
