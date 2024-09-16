import React from "react";
import BulkSummaryCard from "../cards/BulkSummaryCard";

export default function Section4() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6">
        <BulkSummaryCard />
      </div>
      <div className="col-span-6">
        <BulkSummaryCard />
      </div>
    </div>
  );
}
