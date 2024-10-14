"use client";

import * as React from "react";
import { PieChartComponent } from "@/components/ui/PieChartComponent";
import { BarChartComponent } from "@/components/ui/BarChartComponent";

export default function ChartsPage() {
    return (
      <div className="container mx-auto py-8 flex justify-center items-center">
        <div className="flex gap-6">
          <div className="flex justify-center items-center h-[450px] w-[450px]">
            <PieChartComponent />
          </div>
          <div className="flex justify-center items-center h-[450px] w-[450px]">
            <BarChartComponent />
          </div>
        </div>
      </div>
    );
  }