import styled from '@emotion/styled';

interface IBtnType {
  width?: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
  backgroundColor?: string;
  borderColor?: string;
  hoverBackgroundColor?: string;
  isBlocked?: boolean;
}

export const Button = ({
  width = 'fit-content',
  color = '#ffffff',
  backgroundColor = '#402E18',
  borderColor = 'transparent',
  hoverBackgroundColor = '#302212',
  children,
  onClick,
  isBlocked,
}: IBtnType) => {
  return (
    <BtnContainer
      hoverBackgroundColor={hoverBackgroundColor}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      width={width}
      color={color}
      onClick={onClick}
      isBlocked={isBlocked}
    >
      {children}
    </BtnContainer>
  );
};

const BtnContainer = styled.button<Omit<IBtnType, 'onClick' | 'children'>>`
  opacity: ${({ isBlocked }) => (isBlocked ? 0.5 : 1)};
  pointer-events: ${({ isBlocked }) => (isBlocked ? 'none' : 'cursor')};
  width: ${({ width }) => width};
  height: 45px;
  padding: 12px 24px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  cursor: pointer;
  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    transition: 0.35s ease-in-out;
  }
`;
