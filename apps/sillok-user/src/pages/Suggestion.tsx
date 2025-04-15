import { useState, useEffect } from 'react';
import { Flex } from '@sillok/design-token';
import { Button, ImgSelector, Inputs, KeywordSelector } from '@sillok/ui';
import { useApiSuggestion } from '../apis';

export const Suggestion = () => {
  const [select, setSelect] = useState<string>('');
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const [datas, setDatas] = useState<{
    title: string;
    link: string;
    introduction: string;
    category: string;
    image: File | null;
  }>({
    title: '',
    link: '',
    introduction: '',
    category: select,
    image: null,
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      link: value,
    }));
  };

  const handleIntroductionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      introduction: value,
    }));
  };

  const handleFileChange = (file: File | null) => {
    setDatas((prev) => ({
      ...prev,
      image: file,
    }));
  };

  useEffect(() => {
    setDatas((prev) => ({
      ...prev,
      category: select,
    }));
  }, [select]);

  const postApi = useApiSuggestion();

  const completeClick = () => {
    if (datas.image) {
      postApi.mutate({
        title: datas.title,
        introduction: datas.introduction,
        link: datas.link,
        category: datas.category,
        image: datas.image,
      });
    }
  };

  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  useEffect(() => {
    if (
      datas.category === '' ||
      datas.image === null ||
      datas.link === '' ||
      datas.title === ''
    ) {
      setIsBlocked(true);
    } else {
      setIsBlocked(false);
    }
  }, [datas]);
  console.log(datas);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 70px)"
    >
      <Flex isColumn={true} gap={52} paddingLeft="100px" paddingRight="100px">
        <Flex gap={120}>
          <ImgSelector
            imgUrl={imgUrl}
            setImgUrl={setImgUrl}
            onFileChange={handleFileChange}
          />
          <Flex isColumn={true} gap={60}>
            <Inputs
              label="글 제목"
              placeholder="글 제목을 입력해주세요 (30자 이내)"
              onChange={handleTitleChange}
              value={datas.title}
            />
            <Inputs
              label="추천 링크"
              placeholder="링크를 입력해주세요"
              onChange={handleLinkChange}
              value={datas.link}
            />
            <Inputs
              label="설명"
              placeholder="설명을 입력해주세요"
              onChange={handleIntroductionChange}
              value={datas.introduction}
            />
            <KeywordSelector select={select} setSelect={setSelect} />
          </Flex>
        </Flex>
        <Flex gap={16} justifyContent="flex-end">
          <Button
            borderColor="#402E18"
            color="#402E18"
            backgroundColor="#ffffff"
            hoverBackgroundColor="#f9f9f9"
          >
            취소
          </Button>
          <Button isBlocked={isBlocked} onClick={completeClick}>
            확인
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
