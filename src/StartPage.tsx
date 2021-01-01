import { useCallback, useState } from 'react';
import styled, { keyframes }     from 'styled-components';

export const StartPage = () => {
  const [isDarkScreen, setScreenStatus] = useState<boolean>(false);

  const onChangeScreenMode = useCallback(() => {
    setScreenStatus(!isDarkScreen);
  }, [isDarkScreen, setScreenStatus]);

  return (
    <StartPage.Container isDarkScreen={isDarkScreen}>
      <h1>Template Standard Version</h1>
      <StartPage.Comment>
        <p>Looks like it works</p>
        <StartPage.SmileSwitcher onClick={onChangeScreenMode}>
          =)
        </StartPage.SmileSwitcher>
      </StartPage.Comment>
    </StartPage.Container>
  );
};

const scale = keyframes`
  0% {
    transform: rotate(80deg) scale(1);
  }

  50% {
    transform: rotate(70deg) scale(1.2);
  }

  100% {
    transform: rotate(80deg) scale(1);
  }
`;

StartPage.Comment = styled.div`
  align-items     : center;
  display         : flex;
  font-size       : 22px;
  justify-content : center;
  margin-top      : 20px;
  position        : relative;

  > div {
    animation   : ${scale} 3s linear infinite;
    cursor      : pointer;
    position    : absolute;
    right       : -40px;
    user-select : none;
  }
`;

StartPage.Container = styled.div<{ isDarkScreen: boolean; }>`
  align-items      : center;
  background-color : ${({ isDarkScreen, theme }) => (isDarkScreen ? theme.color.black : theme.color.white)};
  display          : flex;
  flex-direction   : column;
  height           : 100%;
  justify-content  : center;
  transition       : all 0.3s;
  width            : 100%;

  > h1 {
    font-size: 50px;
  }

  div,
  h1,
  p {
    color      : ${({ isDarkScreen, theme }) => (isDarkScreen ? theme.color.white : theme.color.black)};
    transition : all 0.3s;
  }
`;

StartPage.SmileSwitcher = styled.div``;
