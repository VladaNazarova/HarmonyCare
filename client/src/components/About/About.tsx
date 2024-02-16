import React from "react";
import MapGoogle from "./MapGoogle";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-10 min-h-screen">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-bold sm:text-6xl mt-5">About us</h2>
        <p className="mt-6 text-lg leading-8">
          HarmonyCare offers healthcare services to families, individuals
          and companies with the best medical professionals with an empathetic
          and friendly approach. We take care of our clients with respect, and
          ensure them that they can always come to us in need of medical care.
        </p>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <MapGoogle></MapGoogle>
      </div>
    </div>
  );
}
