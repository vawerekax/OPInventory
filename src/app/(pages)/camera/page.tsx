"use client"
import React, { useState } from "react";
import {useZxing} from "react-zxing";
import BarcodeScanner from "@/app/components/BarcodeScanner/page";

export default function Camera() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <section className="w-full">
          <h2 className="text-2xl font-bold">Camera</h2>
          <p>Access the camera here.</p>
          <BarcodeScanner />
        </section>
      </main>
    </div>
  );
}