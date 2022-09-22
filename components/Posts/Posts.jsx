import React from 'react';
import styled from 'styled-components';
import ArticleItem from '../ArticleItem/ArticleItem';

const PostsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;

  height: 100%;
  width: max-content;
`;

const Posts = ({ articles }) => {
  return (
    <PostsWrapper>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </PostsWrapper>
  );
};

export default Posts;
