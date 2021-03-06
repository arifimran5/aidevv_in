import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { motion } from 'framer-motion';

const BlogList = ({ posts }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='mt-20 lg:mt-28'
    >
      <h1 className='font-bold text-2xl'>Latest Blog posts 📖</h1>

      <div className=' mt-8 mb-6 flex gap-6 flex-col md:flex-row'>
        <HomePostCard post={posts[0]} gradient='from-[#D8B4FE] to-[#818CF8]' />

        <HomePostCard
          post={posts[1]}
          gradient='from-[#FF8787] via-[#0646BE] to-[#5FFBF1]'
        />

        <HomePostCard
          post={posts[2]}
          gradient='from-[#ae59f0] via-[#101324]  to-[#5975f0]'
        />
      </div>
      <Link href='/blog'>
        <span className='text-blue-600 hover:font-medium cursor-pointer'>
          Read More Blogs ➝
        </span>
      </Link>
    </motion.section>
  );
};

const HomePostCard = ({ post, gradient }) => {
  return (
    <Link href={post.url}>
      <a
        className={cn(
          'transform hover:scale-[1.01] transition-all',
          'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
          gradient
        )}
      >
        <div className='flex flex-col justify-between h-full bg-white rounded-lg p-4'>
          <div className='flex flex-col md:flex-row justify-between'>
            <h4 className='text-lg md:text-lg font-medium mb-2 sm:mb-4  text-gray-900  tracking-tight'>
              {post.title}
            </h4>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogList;
