import Head from 'next/head';
import styled from 'styled-components';

import Posts from '../components/Posts/Posts';

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  display: flex;
  justify-content: center;

  margin-bottom: 50px;
`;

const HomeTwo = ({ articles }) => {
  return (
    <HomeWrapper>
      <Head>
        <title>Next.js Fundamentals</title>
      </Head>

      <Heading>These posts use getStaticProps & getStaticPaths</Heading>
      <Posts articles={articles} />
    </HomeWrapper>
  );
};

export default HomeTwo;

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
