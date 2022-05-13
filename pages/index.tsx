import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Main from '../components/Home/Main';
import Projects from '../components/Home/Projects';
import Technologies from '../components/Home/Technologies';
import Container from '../components/Layout/Container';

import Navbar from '../components/Layout/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title='aidevv.in' description='Home page of aidevv.in' />
      <Container>
        <Navbar />
        <Main />
        <Projects />
        <Technologies />
      </Container>
    </>
  );
};

export default Home;
