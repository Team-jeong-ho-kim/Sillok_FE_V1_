import styled from '@emotion/styled';
import { Flex } from '@sillok/design-token';
import { Inputs, SillokLogo } from '@sillok/ui';
import { useState } from 'react';
import { useApiLogin } from '../apis';
export const Login = () => {
  const [datas, setDatas] = useState<{ id: string; password: string }>({
    id: '',
    password: '',
  });

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      id: value,
    }));
  };

  const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      password: value,
    }));
  };

  const loginApi = useApiLogin();

  const loginClick = () => {
    loginApi.mutate({
      account_id: datas.id,
      password: datas.password,
    });
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Flex isColumn={true} gap={88} width="456px">
        <Flex alignItems="center" isColumn={true} gap={56}>
          <SillokLogo width={121} />
          <Flex isColumn={true} gap={40}>
            <Inputs
              label="아이디"
              placeholder="아이디를 입력해 주세요"
              onChange={handleIdChange}
              value={datas.id}
            />
            <Inputs
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요"
              isPwd={true}
              onChange={handlePwdChange}
              value={datas.password}
            />
          </Flex>
        </Flex>
        <Button onClick={loginClick}>로그인</Button>
      </Flex>
    </Flex>
  );
};

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  background-color: #402e18;
  border-radius: 12px;
  &:hover {
    transition: 0.35s ease-in-out;
    background-color: #302212;
  }
`;
