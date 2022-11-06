import { ChangeEvent, useState } from 'react';
import styled, { css } from 'styled-components/macro';

import { IValidationResult } from 'common/utils';

interface SizeType<T> {
  width: T;
  height: T;
}
interface Props extends SizeType<string> {
  type: string;
  title: string;
  limit: number;
  placeholder: string;
  formType: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: IValidationResult<string>;
}

function SignUpInput({
  type,
  width = '100%',
  height = 'auto',
  title,
  limit,
  placeholder,
  formType,
  onChange,
  errors,
}: Props) {
  const [count, setCount] = useState(0);

  return (
    <StyledWrapper className="signup-input-wrapper">
      <Section error={errors[formType]}>
        <StyledInput
          name={formType}
          type={type}
          width={width}
          height={height}
          onChange={(e) => {
            onChange(e);
            setCount(e.target.value.length);
          }}
          maxLength={limit}
          placeholder={placeholder}
          autoComplete="off"
        />
        <Header>
          <span>{title}</span>
          <span>
            {count}/{limit}
          </span>
        </Header>
      </Section>
      <Description error={errors[formType]}>{errors[formType]}</Description>
    </StyledWrapper>
  );
}

export default SignUpInput;

const StyledWrapper = styled.div`
  display: grid;
`;
const Section = styled.div<{ error: string }>`
  display: grid;
  grid-template-rows: 0 1fr;
  height: 54.5px;
  ${(props) => {
    switch (props.error.length > 0) {
      case false:
        return css`
          border: 1px solid #cf990c;
        `;
      case true:
        return css`
          border: 1px solid red;
        `;
      default:
        return css`
          border: 1px solid #d7d7d7;
        `;
    }
  }}
  border-radius: 4px;
  padding: 9px;
  &:focus-within {
    grid-template-rows: auto;
  }
`;
const StyledInput = styled.input<SizeType<string>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 15px;
  font-family: Pretendard;
  line-height: 18px;
  font-weight: 400;

  &:focus::placeholder {
    opacity: 0;
  }
`;
const Header = styled.header`
  grid-row-start: 1;
  display: flex;
  justify-content: space-between;
  height: 0;
  opacity: 0;
  margin-bottom: 2px;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;

  ${StyledInput}:focus + & {
    height: 14.5px;
    opacity: 1;
    transition: opacity 0.3s ease-out;
  }
  & > span {
    overflow: hidden;
  }
`;
const Description = styled.p<{ error: string }>`
  height: 2vh;
  color: #e50303;
  font-size: 12px;
  font-weight: 300;
  line-height: 14.4px;
  margin-top: 5px;
`;
