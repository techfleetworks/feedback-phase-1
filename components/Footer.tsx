/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className="grid grid-cols-3 justify-items-center w-full">
        <div>
          <h5>Mini Sitemap</h5>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">FAQs</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Socials/Links</h5>
          <ul>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <h5>Contact Us</h5>
          <a href="#">Email</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
