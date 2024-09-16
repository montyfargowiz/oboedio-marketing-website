import React from "react";
import Image from "next/image";

export default function BulkSummaryCard() {
  return (
    <div className="bg-placeholder w-full p6">
      <div className="flex justify-between">
        <div className="rounded flex flex-row">
          <Image
            src="/icons/bullet-blue.webp"
            alt="bullet"
            height={20}
            width={20}
            className="h-full w-full bg-white"
          />
          <p className="uppercase">Bulk Disbursements</p>
        </div>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <h1 className="font-large">
        Send funds to mobile money or bank accounts in real-time
      </h1>
    </div>
  );
}
