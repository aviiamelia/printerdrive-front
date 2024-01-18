import { FaGoogleDrive } from "react-icons/fa";
import { HeaderContainer, IconContainer, NavBar, SelectRoute } from "./styles";
import { UserProfile } from "../userProfile";
import { Dispatch, SetStateAction } from "react";

interface IRoute {
  text: string;
}
interface Iheader {
  routes: IRoute[];
  setPage: Dispatch<SetStateAction<string>>;
}

export const Header = ({ routes, setPage }: Iheader) => {
  return (
    <HeaderContainer>
      <IconContainer>
        <FaGoogleDrive />
      </IconContainer>
      <NavBar>
        {routes.map((route) => (
          <SelectRoute
            key={routes.indexOf(route)}
            onClick={() => setPage(route.text)}
          >
            {route.text}
          </SelectRoute>
        ))}
      </NavBar>
      <UserProfile />
    </HeaderContainer>
  );
};
