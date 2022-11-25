/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className="bg-[#343434] h-[42rem] text-white font-anton">
        <p className='text-6xl pt-14 pb-8'>Join Our Newsletter</p>
        <div className='w-100'>
          <p className='font-sans'>EMAIL</p>
          <input type="email" name="email" placeholder="TYPE YOUR EMAIL" className='bg-inherit border-b-2 w-100'></input>
        </div>
        <div className='mb-28 mt-12'>
          <p>OR SEE OUR</p>
          <p className='text-6xl'>Infrequently Asked Questions&#8599;</p>
        </div>
        <div className='grid grid-cols-3'>
          <div>
            <p>MORE ON FEEDBACK</p>
            <ul>
              <li>
                <Link href="/">PRODUCER&apos;S WHY</Link>
              </li>
              <li>
                <Link href="/">EVALUATOR&apos;S WHY</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="/">HOW IT WORKS</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>GET IN TOUCH</p>
            <ul>
              <li>
                <Link href="#">CONTACT US</Link>
              </li>
              <li>
                <Link href="#">RUMINATE</Link>
              </li>
              <li>
                <Link href="#">fb/ig icons</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p>LEGAL</p>
            <ul>
              <li>
                <Link href="#">PRIVACY POLICY</Link>
              </li>
              <li>
                <Link href="#">TERMS</Link>
              </li>
              <li>
                <Link href="#">COOKIES</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
