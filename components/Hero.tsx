import React from 'react';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div className='h-[36rem] text-center pt-48 bg-zinc-700'>
        video content here
      </div>
      <div className='bg-gradient-to-b from-[#151515] to-[#343434] h-[22rem] pl-14'>
        {/* <div className="aspect-video bg-slate-200 rounded-sm text-center">
        </div> */}
        <p className="font-anton text-8xl text-[#EED153] text-left">
          Get Feedback
        </p>
        <p className="font-anton text-8xl text-[#EED153] text-left">
          Join the community
        </p>
        <p className="text-justify text-[#EED153] text-md max-w-[952] w-3/4">
          Feedback is a community of values-based food producers and evaluators who are committed to making our foodways more ethical, equitable, and sustainable. Feedback connects producers to the evaluators (retailers and distributors across the country) that can provide answers about how their products are perceived.
        </p>
      </div>
    </div>
  );
};


export default Hero;
