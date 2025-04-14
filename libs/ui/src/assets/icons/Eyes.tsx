import styled from '@emotion/styled';

interface IEyeType {
  isEye?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Eyes = ({ isEye, onClick }: IEyeType) => {
  return (
    <EyeContainer onClick={onClick}>
      {isEye ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.94169 4.22746C9.293 4.18678 9.64636 4.16647 10 4.16663C13.8867 4.16663 17 6.58579 18.3334 9.99996C18.0105 10.8304 17.5745 11.6123 17.0375 12.3233M5.43335 5.43246C3.73335 6.46996 2.41669 8.07746 1.66669 9.99996C3.00002 13.4141 6.11335 15.8333 10 15.8333C11.6101 15.8418 13.191 15.4033 14.5667 14.5666M8.23335 8.23329C8.00119 8.46546 7.81702 8.74108 7.69138 9.04442C7.56573 9.34776 7.50106 9.67288 7.50106 10.0012C7.50106 10.3295 7.56573 10.6547 7.69138 10.958C7.81702 11.2613 8.00119 11.537 8.23335 11.7691C8.46552 12.0013 8.74114 12.1855 9.04448 12.3111C9.34782 12.4368 9.67294 12.5014 10.0013 12.5014C10.3296 12.5014 10.6547 12.4368 10.9581 12.3111C11.2614 12.1855 11.537 12.0013 11.7692 11.7691"
            stroke="#D9D9D9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.33337 3.33331L16.6667 16.6666"
            stroke="#D9D9D9"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z"
            stroke="#D9D9D9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.66669 10C3.00002 6.58585 6.11335 4.16669 10 4.16669C13.8867 4.16669 17 6.58585 18.3334 10C17 13.4142 13.8867 15.8334 10 15.8334C6.11335 15.8334 3.00002 13.4142 1.66669 10Z"
            stroke="#D9D9D9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </EyeContainer>
  );
};

const EyeContainer = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 14px;
  right: 16px;
  border: none;
  outline: none;
`;
