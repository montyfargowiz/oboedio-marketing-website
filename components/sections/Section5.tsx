import React from "react";
import Image from "next/image";

export default function Section5() {
  return (
    <div className="grid grid-cols-12 m-8">
      <div className="col-span-6">
        <h2 className="text-xl text-secondary my-4">Reach</h2>
        <h1 className="text-6xl my-4">Get Started with Oboedio Today</h1>
        <p className="font-graphik my-8 font-bold text-placeholder">
          Transform the way you manage compliance and focus on what truly
          matters – growing your business. Join the many companies who trust
          Oboedio for their compliance needs.
        </p>
      </div>
      <div className="col-span-6 flex justify-right align-right">
        <Image
          src="/images/chart.png"
          alt="some image"
          height={400}
          width={300}
        />
      </div>
    </div>
  );
}
