import { format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import MDXcompoenents from '../../components/Layout/MDXcomponents';
import { NextSeo } from 'next-seo';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import Container from 'components/Layout/Container';

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
  const Component = useMDXComponent(post.body.code);

  return (
    <Container>
      <NextSeo title={post.title} description={post.title} />
      <div className=' flex gap-2 items-center py-5'>
        <IoMdArrowBack />
        <Link href='/blog'>Back to Blog page</Link>
      </div>
      <article className=''>
        <div className=''>
          <h1 className='font-bold text-4xl xl:text-5xl my-2'>{post.title}</h1>
          <div className='flex justify-between items-center text-gray-600 font-medium'>
            <time dateTime={post.date} className=''>
              {format(parseISO(post.date), 'LLLL d, yyyy')}
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
    </Container>
  );
};

export default PostLayout;
