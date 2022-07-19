/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className="grid grid-cols-3 w-full py-4">
        <div>
          <h5>Mini Sitemap</h5>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Login</Link>
            </li>
            <li>
              <Link href="#">FAQs/Troubleshooting</Link>
            </li>
          </ul>
        </div>
        <div>Socials/Blog Link</div>
        <div>
          <h5>Contact Us</h5>
          <a href="#">Email</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
