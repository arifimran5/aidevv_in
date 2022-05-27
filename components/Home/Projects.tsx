import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { ExternalLink, Github } from '../Svgs';

const ProjectsData = [
  {
    id: '1',
    title: 'Pro Courses',
    description:
      'This web app let you write reviews about the courses you have taken',
    githubLink: 'https://github.com/arifimran5/pro-courses',
    externalLink: 'https://procourses.vercel.app/',
  },
  {
    id: '2',
    title: 'Static Blog',
    description:
      'A statically generated blog built with NextJS and Strapi CMS.',
    githubLink: 'https://github.com/arifimran5/ai-next-blog-frontend',
    externalLink: 'https://ai-blog.vercel.app/',
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className='mt-20 lg:mt-28'
    >
      <h1 className='font-bold text-2xl'>Projects 💼</h1>

      <div className='mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-2'>
        {ProjectsData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            ghLink={project.githubLink}
            externalLink={project.externalLink}
          />
        ))}
      </div>
    </motion.section>
  );
};

type ProjectProps = {
  title: string;
  description: string;
  ghLink: string;
  externalLink: string;
};

const Project = ({
  title,
  description,
  ghLink,
  externalLink,
}: ProjectProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className='px-5 max-w-[20rem] bg-[#FDFDFD] border-[1px] border-[#F3F3F3] shadow-md rounded-lg'>
          <Disclosure.Button className='py-5 w-full'>
            <div className='flex justify-between items-center'>
              <h1 className='font-medium'>{title}</h1>
              <div>
                {!open && <IoIosArrowForward />}
                {open && <IoIosArrowDown />}
              </div>
            </div>
          </Disclosure.Button>

          <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Disclosure.Panel className='text-secondary_text pb-4'>
              <hr className='mb-2' />
              <h1>{description}</h1>
              <div className='flex justify-end items-center space-x-4 mt-2'>
                <a href={ghLink} target='_blank' rel='noreferrer'>
                  <Github />
                </a>
                <a href={externalLink} target='_blank' rel='noreferrer'>
                  <ExternalLink />
                </a>
              </div>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default Projects;
