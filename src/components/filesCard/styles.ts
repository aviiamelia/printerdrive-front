import styled from "styled-components";

export const Container = styled.div`
  height: 25px;
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
  border: 1px solid grey;
  justify-content: space-between;
  margin-bottom: 6px;
  svg {
    cursor: pointer;
  }
  p {
    color: white;
    margin: 0;
  }
`;
