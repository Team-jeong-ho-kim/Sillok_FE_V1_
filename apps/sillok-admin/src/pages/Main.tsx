import styled from '@emotion/styled';
import { Post } from '@sillok/ui';
import { useEffect, useState } from 'react';
import { Flex } from '@sillok/design-token';
import { useApiPost } from '../apis';

export const Main = () => {
  const [posts, setPosts] = useState<
    {
      id?: number;
      image_url?: string;
      title?: string;
      introduction?: string;
      category?: string;
      created_at?: Date | string;
    }[]
  >([]);

  const { data: postsData } = useApiPost();

  useEffect(() => {
    if (postsData) {
      setPosts(postsData);
    }
  }, [postsData]);
  return (
    <Flex justifyContent="center" width="100%">
      <PostContainer>
        {posts?.map((data) => (
          <Post
            isAdmin={true}
            id={data.id}
            imageUrl={data.image_url}
            title={data.title}
            introduction={data.introduction}
            category={data.category}
            createdAt={data.created_at}
          />
        ))}
      </PostContainer>
    </Flex>
  );
};

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 368px);
  gap: 60px 40px;
  justify-content: center;
  width: 100%;
  padding: 40px;
`;
