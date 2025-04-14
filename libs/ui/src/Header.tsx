import styled from '@emotion/styled';
import { Flex } from '@sillok/design-token';
import { SillokLogo } from './assets';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { useCookies } from 'react-cookie';

interface IHeaderType {
  isAdmin?: boolean;
}

export const Header = ({ isAdmin }: IHeaderType) => {
  const [, removeCookie] = useCookies(['access_token']);

  const navData = [
    {
      name: '피드',
      path: '/',
    },
    {
      name: '글 추천',
      path: '/suggestion',
    },
  ];
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navClick = (path: string) => {
    navigate(path);
  };

  const logoutClick = () => {
    removeCookie('access_token', { path: '/' });

    navigate('/');
  };
  return (
    <HeaderContainer>
      <Flex justifyContent="space-between" width="90%">
        <Flex alignItems="center" gap={20} width="fit-content">
          <SillokLogo />
          {!isAdmin && (
            <Flex alignItems="center" width="fit-content">
              {navData.map((data) => (
                <NavContent
                  isPath={pathname === data.path}
                  onClick={() => navClick(data.path)}
                >
                  {data.name}
                </NavContent>
              ))}
            </Flex>
          )}
        </Flex>
        {isAdmin && <Button onClick={logoutClick}>로그아웃</Button>}
      </Flex>
    </HeaderContainer>
  );
};

const NavContent = styled.nav<{ isPath: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: ${({ isPath }) => (isPath ? 700 : 500)};
  color: ${({ isPath }) => (isPath ? '#000000' : '#d4d4d4')};
  width: fit-content;
  padding: 12px 24px;
  &:hover {
    transform: translateY(-3px);
    transition: 0.4s ease-in-out;
    color: #434343;
    font-weight: 700;
  }
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  padding: 0 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  background-color: #ffffff;
  z-index: 10;
`;
