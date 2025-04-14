import styled from '@emotion/styled';
import { useRef } from 'react';
import { Flex, Text } from '@sillok/design-token';
import { Button } from '../Button';
import { useApiDel } from '../apis';

type IModalType = {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>; //다른 페이지에서 버튼 클릭 시 창 열림 백그라운드 클릭 시 창 닫힘 설정
  isShow?: boolean;
  id: number | undefined;
};

export const DelModal = ({ setIsShow, isShow, id }: IModalType) => {
  const backRef = useRef<HTMLDivElement>(null);

  const backClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (backRef.current === e.target) setIsShow(false);
  };

  const noClick = () => {
    setIsShow(false);
  };

  const apiDel = useApiDel();

  const delClick = (id: number) => {
    console.log(`${id} del`);
    apiDel.mutate(id);
  };
  return (
    isShow && (
      <ModalBackground onClick={backClick} ref={backRef}>
        <ModalContent>
          <Flex isColumn={true} gap={8} width="331px">
            <Text fontSize="24px" fontWeight={600} color="#000000">
              삭제하실건가요?
            </Text>
            <Text fontSize="18px" fontWeight={400} color="#7F7F7F">
              이 작업은 되돌릴 수 없습니다.
            </Text>
          </Flex>
          <Flex gap={12} width="fit-content">
            <Button
              borderColor="#402E18"
              color="#402E18"
              backgroundColor="#ffffff"
              hoverBackgroundColor="#f9f9f9"
              onClick={noClick}
            >
              취소
            </Button>
            <Button onClick={() => id && delClick(id)}>삭제</Button>
          </Flex>
        </ModalContent>
      </ModalBackground>
    )
  );
};

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgb(36, 36, 36, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 20;
`;

const ModalContent = styled.div`
  width: fit;
  padding: 24px 28px;
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 32px;
`;
