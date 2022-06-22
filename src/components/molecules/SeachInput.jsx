import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";

export const SerchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SbuttonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SbuttonWrapper>
    </SContainer>
  );
};

const SbuttonWrapper = styled.div`
  padding-left: 8px;
`;
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
