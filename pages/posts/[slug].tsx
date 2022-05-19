import { format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import MDXcompoenents from '../../components/Layout/MDXcomponents';
import { NextSeo } from 'next-seo';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import Container from 'components/Layout/Container';
import Footer from 'components/Layout/Footer';
import { useState } from 'react';

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post: Post = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  const [backHover, setBackHover] = useState(false);

  const hoverHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setBackHover(true);
  };

  const unhoverHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setBackHover(false);
  };

  console.log(backHover);

  const Component = useMDXComponent(post.body.code);

  return (
    <Container>
      <NextSeo title={post.title} description={post.title} />
      <div
        onMouseEnter={hoverHandler}
        onMouseLeave={unhoverHandler}
        className=' flex gap-2 items-center my-5'
      >
        <div
          className={
            backHover ? '-translate-x-2 transition-transform duration-150' : ''
          }
        >
          {' '}
          <IoMdArrowBack />
        </div>
        <Link href='/blog'>Back to Blog page</Link>
      </div>
      <article className=''>
        <div className=''>
          <h1 className='font-bold text-2xl sm:text-3xl xl:text-4xl my-2'>
            {post.title}
          </h1>
          <div className='flex justify-between items-center text-sm text-gray-600 font-medium'>
            <time dateTime={post.date} className=''>
              {format(parseISO(post.date), 'LLL d,yyyy')}
            </time>

            <div className='flex gap-2 '>
              <span>
                {post.readingTime.text} {` • `}
                {''}
              </span>
              <span>{post.wordCount} words</span>
            </div>
          </div>
        </div>
        <div
          className='my-8 blog-page prose'
          // dangerouslySetInnerHTML={{ __html: post.body.raw }}
        >
          <Component components={{ ...MDXcompoenents }} />
        </div>
      </article>
      <Footer />
    </Container>
  );
};

export default PostLayout;
