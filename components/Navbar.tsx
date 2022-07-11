import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] flex items-center justify-between">
      <h3 className="uppercase text-3xl font-bold">Ruminate</h3>
      <div className="w-2/6 flex justify-between">
        <Link href="/">
          <a className="hover:text-green-600">Home</a>
        </Link>
        <Link href="/">
          <a className="hover:text-green-600">About</a>
        </Link>
        <Link href="/">
          <a className="hover:text-green-600">Resources</a>
        </Link>
        <Link href="/">
          <a className="hover:text-green-600">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
