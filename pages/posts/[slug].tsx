import { format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';

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
      <div className=''>
        <IoMdArrowBack />
        <Link href='/blog'>Back to Blog page</Link>
      </div>
      <article className=''>
        <div className=''>
          <h1>{post.title}</h1>
          <time dateTime={post.date}>
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <div
          className=''
          // dangerouslySetInnerHTML={{ __html: post.body.raw }}
        >
          <Component />
        </div>
      </article>
    </Container>
  );
};

export default PostLayout;
