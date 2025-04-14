import styled from '@emotion/styled';
import { Button } from './Button';
import { Flex, Text } from '@sillok/design-token';
import { Plus } from './assets';
import { useEffect, useRef, useState } from 'react';

interface IImgType {
  imgUrl?: string | null;
  setImgUrl: React.Dispatch<React.SetStateAction<string | null>>;
  onFileChange?: (file: File | null) => void;
}

export const ImgSelector = ({ imgUrl, setImgUrl, onFileChange }: IImgType) => {
  const imgRef = useRef<HTMLInputElement>(null);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const imgClick = () => {
    imgRef.current?.click();
  };

  const delClick = () => {
    setImgUrl(null);
    if (onFileChange) {
      onFileChange(null);
    }
  };

  const handleChange = () => {
    const file = imgRef.current?.files?.[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setImgUrl(newUrl);
      if (onFileChange) {
        onFileChange(file);
      }
    }
  };

  useEffect(() => {
    if (imgUrl === null) {
      setIsBlocked(true);
    } else {
      setIsBlocked(false);
    }
  }, [imgUrl]);

  return (
    <Flex width="fit-content" isColumn={true} gap={20} alignItems="flex-end">
      <FileInput type="file" ref={imgRef} onChange={handleChange} />
      <ImgContainer onClick={imgClick} onChange={handleChange}>
        {imgUrl ? (
          <Img src={imgUrl} />
        ) : (
          <Flex
            width="fit-content"
            isColumn={true}
            alignItems="center"
            gap={10}
          >
            <Plus />
            <Text fontSize="16px" fontWeight={400} color="#888888">
              이미지를 추가해주세요.
            </Text>
          </Flex>
        )}
      </ImgContainer>
      <Button
        isBlocked={isBlocked}
        onClick={delClick}
        backgroundColor="#ED6363"
        hoverBackgroundColor="#e25757"
      >
        삭제
      </Button>
    </Flex>
  );
};

const FileInput = styled.input`
  display: none;
`;

const Img = styled.img`
  width: 100%;
`;

const ImgContainer = styled.div`
  cursor: pointer;
  width: 400px;
  height: 240px;
  border-radius: 16px;
  border: 1px solid #e1e1e1;
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
