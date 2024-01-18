import styled from "styled-components";

export const Container = styled.div`
  padding-left: 20px;
  display: flex;
  margin-top: 20px;
  gap: 20px;
  position: relative;
  .folders:hover {
    border: 1px solid white;
  }
`;

export const FolderIconContainer = styled.div`
  font-size: 65px;
  width: 100px;
  height: 120px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    font-size: 14px;
    :hover {
      border: 1px solid white;
    }
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 40%;
  right: 50%;
  z-index: 4;
  width: 0px;
  height: 0px;
  border: none;
`;
export const CloseModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  font-size: 30px;
  padding-right: 10px;
  justify-self: flex-start;
  margin-top: -100px;
  margin-bottom: 100px;
  height: 20px;
  .icon {
    cursor: pointer;
  }
`;

export const FilesModal = styled.div`
  position: absolute;
  background: black;
  width: 500px;
  height: 700px;
  left: 40%;
  right: 50%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  .svgClose {
    color: white;
    margin-bottom: 8px;
    font-size: 20px;
    cursor: pointer;
    z-index: 10;
    align-self: flex-end;
  }
  .upload {
    color: white;

    font-size: 25px;
    cursor: pointer;
    align-self: center;
  }
  .svgContainer {
    font-size: 20px;

    display: flex;
    flex-direction: column;
    margin-top: -30px;
    svg {
      cursor: pointer;
      align-self: center;
      font-size: 50px;
      z-index: 11;
      color: white;
    }
    p {
      margin-top: 0;
      align-self: center;
      color: white;
    }
  }
  .divContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;
