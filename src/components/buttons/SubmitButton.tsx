import { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  width?: string;
  height?: string;
  fontSize?: string;
  text: string;
  isActive: boolean;
  requestPath?: string;
}

export default function SubmitButton({
  text,
  isActive,
  requestPath,
  width = '100%',
  height = 'auto',
  fontSize = '13px',
}: Props) {
  useEffect(() => {
    console.log('isActive:', isActive);
  });

  return (
    <StyledButton
      isActive={isActive}
      width={width}
      height={height}
      fontSize={fontSize}
    >
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  isActive: boolean;
  width: string;
  height: string;
  fontSize: string;
}>`
  background-color: ${(props) => (props.isActive ? '#CF990C' : '#BCBCBC')};
  border: 1px solid ${(props) => (props.isActive ? '#CF990C' : '#BCBCBC')};
  border-radius: 4px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: white;
  font-family: Pretendard;
  font-weight: 500px;
  font-size: ${(props) => props.fontSize};
  line-height: 15.6px;
`;
