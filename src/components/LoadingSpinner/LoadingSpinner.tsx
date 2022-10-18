import styled from 'styled-components';

import Spinner from 'components/Icons/SpinnerIcon';

function LoadingSpinner() {
  return (
    <Background>
      {/* <LoadingText /> */}
      <Spinner />
    </Background>
  );
}

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  /* background: #ffffffb7; */
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// export const LoadingText = styled.div`
//   font: 1rem 'Noto Sans KR';
//   text-align: center;
// `;

export default LoadingSpinner;
