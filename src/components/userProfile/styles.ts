import styled from "styled-components";

export const UserTitle = styled.h2`
  color: #fff;
  margin-right: 20px;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
`;

export const UserOption = styled.div`
  position: absolute;
  min-height: 30px;
  width: 150px;
  left: -130px;
  display: flex;
  border: 1px solid white;
  flex-direction: column;

  background-color: #242424;
  gap: 2px;
  border-radius: 8px;
`;
export const Option = styled.p`
  color: white;
  margin: 0;
  margin-left: 5px;
  margin-top: 5px;
  font-size: 16px;
  cursor: pointer;
`;
