import React from "react";
import MapGoogle from "./MapGoogle";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-20">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-bold sm:text-6xl mt-5">About us</h2>
        <p className="mt-6 text-lg leading-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <MapGoogle></MapGoogle>
      </div>
    </div>
  );
}
