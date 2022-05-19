import React from 'react';

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
      <h1 className='text-4xl sm:text-5xl font-bold mt-5'>
        Hey, I&apos;m Arif ✌️
      </h1>
      <p className='text-secondary_text sm:text-lg lg:text-xl leading-relaxed mt-4 md:mt-6'>
        I am 21 year old{' '}
        <span className='text-accent_yellow font-medium'>
          frontend web developer
        </span>{' '}
        based in India. I love developing web UI and exploring server side
        development with nodeJS.
      </p>
      {/* <a href='#'> */}
      <button
        onClick={() => scrollToFooter('footer')}
        className='px-7 py-[0.8em] bg-accent_green rounded-3xl font-semibold mt-8 hover:scale-105 focus:ring-1 ring-offset-2 ring-accent_blue transition-transform duration-100 ease-in-out'
      >
        Connect With Me
      </button>
      {/* </a> */}
    </section>
  );
};

export default Main;
