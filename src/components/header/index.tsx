import { FaGoogleDrive } from "react-icons/fa";
import { HeaderContainer, IconContainer } from "./styles";
import { UserProfile } from "../userProfile";

export const Header = () => {
  return (
    <HeaderContainer>
      <IconContainer>
        <FaGoogleDrive />
      </IconContainer>
      <UserProfile />
    </HeaderContainer>
  );
};
