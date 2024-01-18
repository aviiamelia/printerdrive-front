import styled from "styled-components";

export const HeaderContainer = styled.header`
  min-height: 40px;
  background-color: #212c42;
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 5px;
`;

export const IconContainer = styled.div`
  margin: 10px;
  font-size: 40px;
  color: #fff;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 300px;
  :hover {
    background-color: #ffb;
  }
`;

export const SelectRoute = styled.div`
  background-color: white;
  width: 120px;
  color: black;
  text-align: center;
  cursor: pointer;
  font-family: sans-serif;
  margin-right: 4px;
  :hover {
    background-color: #ffb;
  }
`;
