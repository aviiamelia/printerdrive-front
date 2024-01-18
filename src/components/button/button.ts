import { styled } from "styled-components";

interface IBUtton {
  isdisable?: boolean;
}

export const Button = styled.button<IBUtton>`
  background-color: ${({ isdisable }) => (isdisable ? "#A888F5" : "#6525f5")};
  color: white;
  padding: 14px;
  width: 80px;
  margin-top: 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
