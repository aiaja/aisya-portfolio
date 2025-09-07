"use client";
import React from "react";
import Website from "@/components/projects/Website";
import Sidebar from "@/components/projects/Sidebar";

function page() {
  return (
    <div className="flex">
      <Sidebar />
      <Website />
    </div>
  );
}

export default page;
