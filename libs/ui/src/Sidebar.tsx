import styled from '@emotion/styled';
import { SidebarIcon } from './assets';

interface ISidebarType {
  select?: string | null;
  setSelect: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Sidebar = ({ setSelect, select }: ISidebarType) => {
  const sideData = [
    {
      name: '최신 글',
      keyword: null,
    },
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

  const sideClick = (keyword: string | null) => {
    setSelect(keyword);
    // 포스트 api 보내기
  };

  return (
    <SidebarContainer>
      <SidebarTitle>
        <SidebarIcon />
        카테고리
      </SidebarTitle>
      {sideData.map((data) => (
        <SidebarContent
          select={select === data.keyword}
          onClick={() => sideClick(data.keyword)}
        >
          {data.name}
        </SidebarContent>
      ))}
    </SidebarContainer>
  );
};

const SidebarTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 53px;
  border-radius: 12px;
  padding: 12px 0 12px 24px;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 36px 24px;
  background-color: #2b1e0e;
  width: 440px;
`;

const SidebarContent = styled.button<{ select?: boolean }>`
  display: flex;
  width: 100%;
  height: 53px;
  border-radius: 12px;
  background-color: ${({ select }) => (select ? '#342512' : 'transparent')};
  padding: 12px 0 12px 24px;
  font-size: 20px;
  font-weight: ${({ select }) => (select ? 700 : 500)};
  color: ${({ select }) => (select ? '#ffffff' : '#BFB8B8')};
  &:hover {
    transition: 0.35s ease-in-out;
    background-color: #342512;
  }
`;
