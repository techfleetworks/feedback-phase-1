import React from 'react';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-1 flex-col w-2/3 m-auto my-5">
      <div>
        <h1 className="uppercase text-2xl text-center my-5 py-5">
          Feedback Tagline
        </h1>
        <p className="text-justify text-sm mb-4">
          Feedback is a community of values-based food producers and evaluators
          who are committed to making our foodways more ethical, equitable, and
          sustainable. Feedback connects producers to the evaluators (retailers
          and distributors across the country) that can provide answers about
          how their products are perceived.
        </p>
      </div>
      <div className="aspect-video my-5 bg-slate-200 rounded-sm text-center">
        embedded video goes here
      </div>
    </div>
  );
};

export default Hero;
