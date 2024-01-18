import { useState } from "react";
import { Header } from "../../components/header";
import { MainContainer } from "../../components/mainContainer";
import { MyFilesPage } from "../files/myFolders/myFolders";
export function DrivePage() {
  const routes = [{ text: "my folders" }, { text: "shared folders" }];
  const [shown, setShown] = useState("my folders");

  return (
    <MainContainer>
      <Header setPage={setShown} routes={routes} />
      <MyFilesPage select={shown}></MyFilesPage>
    </MainContainer>
  );
}
