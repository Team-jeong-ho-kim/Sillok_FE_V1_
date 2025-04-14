import styled from '@emotion/styled';

interface IKeywordType {
  children: React.ReactNode;
}

export const Keyword = ({ children }: IKeywordType) => {
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

  return (
    <KeywordContainer>
      {datas.map((data) => {
        return data.keyword === children && data.name;
      })}
    </KeywordContainer>
  );
};
const KeywordContainer = styled.div`
  width: fit-content;
  padding: 12px;
  border-radius: 12px;
  font-size: 16px;
  color: #402e18;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f2ec;
`;
