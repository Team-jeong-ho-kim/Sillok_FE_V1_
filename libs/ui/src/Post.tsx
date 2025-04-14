import styled from '@emotion/styled';
import { Flex, Text } from '@sillok/design-token';
import { Keyword } from './Keyword';
import { Button } from './Button';
import { useState } from 'react';
import { DelModal } from './modals';
import { useApiAccept, useApiPostDetail } from './apis';

interface IPostType {
  id?: number;
  imageUrl?: string;
  title?: string;
  introduction?: string;
  category?: string;
  createdAt?: Date | string;
  isAdmin?: boolean;
}

export const Post = ({
  isAdmin,
  id,
  imageUrl,
  title,
  introduction,
  category,
  createdAt,
}: IPostType) => {
  const modalClick = () => {
    setIsShow(true);
  };

  const apiAccept = useApiAccept();
  const sureClick = (id: number) => {
    apiAccept.mutate(id);
  };

  const [isShow, setIsShow] = useState<boolean>(false);

  const postApi = useApiPostDetail();

  const postClick = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isAdmin) {
      postApi.mutate(id);
    }
  };

  return (
    <div>
      <Container onClick={(e) => id && postClick(id, e)}>
        <Flex
          alignItems="flex-end"
          isColumn={true}
          gap={12}
          width="320px"
          paddingLeft="24px"
          paddingRight="24px"
          paddingTop="12px"
          paddingBottom="60px"
        >
          <ImgContainer src={imageUrl} alt="postimg" />
          <Text width="100%" fontSize="24px" fontWeight={700} color="#1F262C">
            {title}
          </Text>
          <Text width="100%" fontSize="18px" fontWeight={500} color="#BFB8B8">
            {introduction}
          </Text>
          <Flex width="100%" justifyContent="space-between" alignItems="center">
            <Keyword>{category}</Keyword>
            <Text fontSize="18px" fontWeight={500} color="#BFB8B8">
              {createdAt instanceof Date
                ? createdAt.toLocaleDateString()
                : createdAt}
            </Text>
          </Flex>
          {isAdmin && (
            <Flex width="fit-content" alignItems="center" gap={8}>
              <Button
                borderColor="#402E18"
                color="#402E18"
                backgroundColor="#ffffff"
                hoverBackgroundColor="#f9f9f9"
                onClick={modalClick}
              >
                삭제
              </Button>
              <Button
                onClick={() => id && sureClick(id)}
                backgroundColor="#3f72ff"
                hoverBackgroundColor="#2958d8"
              >
                수락
              </Button>
            </Flex>
          )}
        </Flex>
      </Container>
      {isShow && <DelModal id={id} setIsShow={setIsShow} isShow={isShow} />}
    </div>
  );
};

const Container = styled.div`
  width: 320px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  &:hover {
    transform: translateY(-6px);
    transition: 0.3s ease-in-out;
  }
`;

const ImgContainer = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid #ece9e9;
`;
