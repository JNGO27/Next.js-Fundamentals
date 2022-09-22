import styled from 'styled-components';

const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const article = ({ article }) => {
  return (
    <ArticleWrapper>
      <h1>{article.id}</h1>
    </ArticleWrapper>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: { article },
  };
};

export default article;
