import React from 'react';
import { Disclosure } from '@headlessui/react';
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
    <section className='mt-20 lg:mt-28'>
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
    </section>
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
        </div>
      )}
    </Disclosure>
  );
};

export default Projects;
