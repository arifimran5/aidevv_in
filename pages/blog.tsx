import { useState } from 'react';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { compareDesc } from 'date-fns';
import Container from '../components/Layout/Container';
import Navbar from '../components/Layout/Navbar';
import { allPosts, Post } from 'contentlayer/generated';
import PostCard from 'components/Blog/PostCard';
import Footer from 'components/Layout/Footer';
export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const BlogPage: NextPage = ({ posts }: { posts: Post[] }) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <NextSeo title='Blog | aidevv.in' description='Blog page of aidevv.in' />
      <Container>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-4xl mt-8 mb-1 font-bold'>Blogs</h1>
          <p className='mb-4 text-gray-600'>
            Blogs about web development and software engineering in general. Use
            the search below to filter by title.
          </p>
        </motion.div>
        <div className='relative w-full mb-8'>
          <input
            aria-label='Search articles'
            type='text'
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search articles'
            className='block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-200 rounded-md  focus:ring-accent_blue'
          />
          <svg
            className='absolute w-5 h-5 text-gray-400 right-3 top-3'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        <section className='post_list grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-8'>
          {!filteredBlogPosts.length && (
            <p className='mb-4 text-gray-600 dark:text-gray-400'>
              No posts found.
            </p>
          )}
          {filteredBlogPosts.map((post) => (
            <PostCard key={post._id} {...post} />
          ))}
        </section>
        <Footer />
      </Container>
    </div>
  );
};

export default BlogPage;
