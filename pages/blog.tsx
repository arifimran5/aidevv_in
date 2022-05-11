import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Container from '../components/Layout/Container';
import Navbar from '../components/Layout/Navbar';

const BlogPage: NextPage = () => {
  return (
    <div>
      <NextSeo title='Blog | aidevv.in' description='Blog page of aidevv.in' />
      <Container>
        <Navbar />
        <h1 className=''>Blog page</h1>
      </Container>
    </div>
  );
};

export default BlogPage;
