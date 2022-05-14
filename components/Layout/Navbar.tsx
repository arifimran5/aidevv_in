import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='space-x-12 md:space-x-16 xl:space-x-20 pt-10 pb-8 '>
      <NavItem href='/' text='/home' />
      <NavItem href='/blog' text='/blog' />
    </nav>
  );
};

const NavItem = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter();
  const isActive = router.route === href;

  return (
    <Link href={href}>
      {isActive ? (
        <a className='underline underline-offset-[3px] font-medium'>{text}</a>
      ) : (
        <a className='font-medium'>{text}</a>
      )}
    </Link>
  );
};

export default Navbar;
