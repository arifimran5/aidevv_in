import BlogList from 'components/Home/BlogList';
import Footer from 'components/Layout/Footer';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Main from '../components/Home/Main';
import Projects from '../components/Home/Projects';
import Technologies from '../components/Home/Technologies';
import Container from '../components/Layout/Container';

import Navbar from '../components/Layout/Navbar';

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const Home: NextPage = ({ posts }: { posts: Post[] }) => {
  const latest3Posts = posts.slice(0, 3);

  return (
    <>
      <NextSeo title='aidevv.in' description='Home page of aidevv.in' />
      <Container>
        <Navbar />
        <Main />
        <Projects />
        <Technologies />
        <BlogList posts={latest3Posts} />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
