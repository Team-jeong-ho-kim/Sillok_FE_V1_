interface IPlusType {
  size?: number;
  color?: string;
}

export const Plus = ({ size = 48, color = '#A1A1A1' }: IPlusType) => {
  return (
    <svg
      width={size}
      height="auto"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 26.5H10V22.5H22V10.5H26V22.5H38V26.5H26V38.5H22V26.5Z"
        fill={color}
      />
    </svg>
  );
};
