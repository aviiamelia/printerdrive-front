import { useState } from "react";
import { Container, UserTitle, UserOption, Option } from "./styles";
import { useAuth } from "../../contexts/auth/authProvider";

export const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const options = ["logout"];
  return (
    <UserTitle onClick={() => setIsOpen(!isOpen)}>
      {user.username}
      {isOpen && (
        <Container>
          <UserOption>
            {options.map((option) => (
              <Option>{option}</Option>
            ))}
          </UserOption>
        </Container>
      )}
    </UserTitle>
  );
};
