import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Container from '../components/Layout/Container';
import Navbar from '../components/Layout/Navbar';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import PostCard from 'components/Blog/PostCard';

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const BlogPage: NextPage = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <NextSeo title='Blog | aidevv.in' description='Blog page of aidevv.in' />
      <Container>
        <Navbar />
        <h1 className='text-4xl mt-8 mb-4 font-bold'>Blogs</h1>
        <section className='post_list grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-8'>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </section>
      </Container>
    </div>
  );
};

export default BlogPage;
