import { useState } from "react";
import { Container, UserTitle, UserOption, Option } from "./styles";

export const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(true);
  const options = ["logout"];
  return (
    <UserTitle onClick={() => setIsOpen(!isOpen)}>
      Rafael
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
