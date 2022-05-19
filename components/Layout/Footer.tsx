import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='my-20' id='footer'>
      <hr className='mb-6 border-gray-300' />
      <section className='text-gray-500 grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6'>
        <div className='flex flex-col gap-4'>
          {' '}
          <div>
            <Link href='/'>
              <a className='hover:font-medium transition-all duration-100'>
                Home
              </a>
            </Link>
          </div>
          <div>
            <Link href='/blog'>
              <a className='hover:font-medium transition-all duration-100'>
                Blog
              </a>
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          {' '}
          <div>
            <a
              href='https://twitter.com/aidevv_in'
              className='hover:font-medium  cursor-pointer transition-all duration-100'
            >
              Twitter
            </a>
          </div>
          <div>
            <a
              href='https://github.com/arifimran5/'
              className='hover:font-medium  cursor-pointer transition-all duration-100'
            >
              Github
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          {' '}
          <div
            className='hover:font-medium  cursor-pointer transition-all duration-100'
            onClick={() => window.scrollTo(0, 0)}
          >
            Scroll to Top ▲
          </div>
          <div>
            <a
              href='mailto:arifimran505@gmail.com'
              className='hover:font-medium  cursor-pointer transition-all duration-100'
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
