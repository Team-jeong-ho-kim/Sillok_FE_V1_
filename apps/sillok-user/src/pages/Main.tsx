import styled from '@emotion/styled';
import { Flex, Text } from '@sillok/design-token';
import { banner, Post, Sidebar } from '@sillok/ui';
import { useEffect, useState } from 'react';
import { useApiPost } from '../apis';

export const Main = () => {
  const learnClick = () => {
    window.open('https://dsmhs.github.io/dsm-freshman-guide/', '_blank');
  };

  const [select, setSelect] = useState<string | null>(null);
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

  const { data: postsData } = useApiPost(select);

  useEffect(() => {
    if (postsData) {
      setPosts(postsData);
    }
  }, [postsData]);

  return (
    <Flex isColumn={true}>
      <BannerImg src={banner} alt="banner img" />
      <TextContainer>
        <Text fontSize={36} fontWeight={700} color="#BF843D" isSpan={true}>
          대덕 SW 마이스터고
          <Text fontSize={36} fontWeight={700} color="#FFFFFF" isSpan={true}>
            에<br /> 입학 하신 것을 축하드려요!
          </Text>
        </Text>
        <Text fontSize={20} fontWeight={400} color="#D3D3D3" isSpan={true}>
          전공 공부를 시작하는 신입생
          <br /> 여러분을 위한 가이드를 준비했습니다.
        </Text>
        <Button onClick={learnClick}>알아보기</Button>
      </TextContainer>
      <Flex gap={60}>
        <Sidebar select={select} setSelect={setSelect} />
        <PostContainer>
          {posts.map((data) => (
            <Post
              key={data.id}
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
    </Flex>
  );
};

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px 32px;
  justify-items: start;
  width: 100%;
  max-height: 1230px;
  min-height: 300px;
  overflow: scroll;
  padding: 40px;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 140px;
  left: 200px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1400px) {
    top: 110px;
    left: 80px;
    gap: 20px;
  }
`;

const BannerImg = styled.img`
  width: 100%;
  position: relative;
  top: 0;
  z-index: -1;
`;

const Button = styled.button`
  cursor: pointer;
  width: 230px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  background-color: #402e18;
  border-radius: 32px;
  &:hover {
    transition: 0.35s ease-in-out;
    background-color: #302212;
  }
`;
