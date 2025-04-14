import styled from '@emotion/styled';
import { Flex, Text } from '@sillok/design-token';

interface IKeywordType {
  select?: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}

export const KeywordSelector = ({ select, setSelect }: IKeywordType) => {
  const btnClick = (keyword: string) => {
    setSelect(keyword);
  };
  const datas = [
    {
      name: 'Frontend',
      keyword: 'FRONTEND',
    },
    {
      name: 'Backend',
      keyword: 'BACKEND',
    },
    {
      name: 'iOS',
      keyword: 'IOS',
    },
    {
      name: 'Android',
      keyword: 'ANDROID',
    },
    {
      name: 'Flutter',
      keyword: 'FLUTTER',
    },
    {
      name: 'Design',
      keyword: 'DESIGN',
    },
    {
      name: 'AI',
      keyword: 'AI',
    },
    {
      name: 'embedded',
      keyword: 'EMBEDDED',
    },
    {
      name: 'Devops',
      keyword: 'DEVOPS',
    },
    {
      name: 'Security',
      keyword: 'SECURITY',
    },
    {
      name: 'Database',
      keyword: 'DATABASE',
    },
    {
      name: 'Network',
      keyword: 'NETWORK',
    },
    {
      name: '회고록',
      keyword: 'MEMOIRS',
    },
    {
      name: '자기개발',
      keyword: 'SELF_DEV',
    },
    {
      name: '알고리즘',
      keyword: 'ALGORITHM',
    },
    {
      name: '기타',
      keyword: 'ETC',
    },
  ];

  console.log(select);
  return (
    <Flex isColumn={true} gap={8}>
      <Text>키워드</Text>
      <KeywordContainer>
        {datas.map((data, index) => (
          <Keyword
            key={index}
            onClick={() => btnClick(data.keyword)}
            isSelect={select === data.keyword}
          >
            {data.name}
          </Keyword>
        ))}
      </KeywordContainer>
    </Flex>
  );
};

const Keyword = styled.button<{ isSelect: boolean }>`
  width: fit-content;
  padding: 12px;
  border-radius: 12px;
  font-size: 16px;
  color: ${({ isSelect }) => (isSelect ? '#402e18' : '#D4D4D4')};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: ${({ isSelect }) => (isSelect ? '#f8f2ec' : '#F9F9F9')};
  &:hover {
    transition: 0.35s ease-in-out;
    background-color: ${({ isSelect }) => (isSelect ? '#f2e8df' : '#edecec')};
  }
`;

const KeywordContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;
`;
