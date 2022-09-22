import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ItemWrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid green;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.a`
  font-size: 1.25rem;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: deeppink;
  }
`;

const ArticleItem = ({ article: { title, id } }) => {
  return (
    <ItemWrapper>
      <Link href="article/[id]" as={`/article/${id}`} passHref>
        <TitleWrapper>{title}</TitleWrapper>
      </Link>
    </ItemWrapper>
  );
};

export default ArticleItem;
