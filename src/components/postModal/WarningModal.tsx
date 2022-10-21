import styled from 'styled-components';

export default function WarningModal() {
  return (
    <Container>
      <WarningIcon />
    </Container>
  );
}

const Container = styled.div`
  width: 320px;
  height: 222px;
`;

const WarningIcon = styled.div`
  background-image: url('/public/assets/error_icon.png');
`;
