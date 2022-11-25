import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full fixed my-8 flex">
      <div className="w-4/5 mx-auto bg-[#E9E7DD] h-12 items-center rounded-full flex justify-around">
        <Link href="/">
          <a className="hover:text-green-600">Why Feedback?</a>
        </Link>
        <Link href="/">
          <a className="hover:text-green-600">FAQ</a>
        </Link>
        <Link href="/">
          <a className="hover:text-green-600">Testimonials</a>
        </Link>
        <Link href="/">
          <a className="hover:text-green-600">How it Works</a>
        </Link>
        <Link href="/">
          <a className="hover:text-green-600">Pricing Plans</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
