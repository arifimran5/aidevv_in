import React from 'react';
import { motion } from 'framer-motion';

const Main = () => {
  function scrollToFooter(element: string) {
    var ele = document.getElementById(element);
    window.scrollTo(ele.offsetLeft, ele.offsetTop);
  }

  return (
    <section className='mt-16'>
      <span className='border-b-2 border-accent_blue px-2 py-[0.3em] rounded-sm uppercase text-[0.8rem] font-semibold tracking-wider'>
        # Looking for Internship
      </span>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='text-4xl sm:text-5xl font-bold mt-5'
      >
        Hey, I&apos;m Arif ✌️
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-gray-600 sm:text-lg lg:text-xl leading-relaxed mt-4 md:mt-6'
      >
        I am 21 year old{' '}
        <span className='text-blue-600 font-medium'>
          frontend web developer
        </span>{' '}
        based in India. I love developing web UI and exploring server side
        development with nodeJS.
      </motion.p>
      {/* <a href='#'> */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onClick={() => scrollToFooter('footer')}
        className='px-10 py-[0.8em] bg-accent_green rounded-3xl font-semibold mt-8 hover:scale-105 focus:ring-1 ring-offset-2 ring-accent_blue transition-transform duration-100 ease-in-out'
      >
        Say Hi ⚡️
      </motion.button>
      {/* </a> */}
    </section>
  );
};

export default Main;
