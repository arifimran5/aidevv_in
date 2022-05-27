import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

import {
  SiReact,
  SiNextdotjs as SiNextDotJs,
  SiNodedotjs as SiNodeDotJs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiPrisma,
} from 'react-icons/si';

const Technologies = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className='mt-20 lg:mt-28'
    >
      <h1 className='font-bold text-2xl'>Technologies 💻️️</h1>
      <div className='mt-8 mb-4 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8'>
        <Technology icon={SiReact} text='React' />
        <Technology icon={SiTailwindcss} text='TailwindCSS' />
        <Technology icon={SiTypescript} text='Typescript' />
        <Technology icon={SiNodeDotJs} text='Node.js' />
        <Technology icon={SiNextDotJs} text='Next.js' />
        <Technology icon={SiGit} text='Git' />
        <Technology icon={SiPrisma} text='Prisma.io' />
        <Technology icon={SiPostgresql} text='Postgres' />
        <Technology icon={SiMongodb} text='MongoDB' />
      </div>
    </motion.section>
  );
};

const Technology = ({ text, icon }: { text: ReactNode; icon: IconType }) => {
  return (
    <div className='flex items-center gap-4'>
      <span>{icon({ className: 'h-6 w-6' })}</span>
      <span>{text}</span>
    </div>
  );
};

export default Technologies;
