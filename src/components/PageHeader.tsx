import { memo } from "react";
import styled from "styled-components";

export const PageHeader = memo(() => {
  return (
    <HeadContainer>
      <TitleText>URLでんこーだー</TitleText>
    </HeadContainer>
  );
});

const HeadContainer = styled.div`
  background-color: #0d6efd;
  margin: 0px;
  padding: 10px;
`;

const TitleText = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
`;
