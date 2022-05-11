import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='px-8 sm:px-16 md:px-20 xl:px-0 lg:max-w-[845px]  mx-auto'>
      {children}
    </main>
  );
};

export default Container;
