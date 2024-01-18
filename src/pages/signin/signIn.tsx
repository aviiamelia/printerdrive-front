import { useNavigate } from "react-router";
import { FormComponent } from "../../components/form/form";
import { MainContainer } from "../../components/mainContainer";
import { Title } from "../../components/title";
import { useSignIn } from "../../contexts/signIn/signInProvider";
import { ISignIn } from "../../contexts/signIn/types";
import { Container, Input } from "./styles";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../../components/button/button";
import { useAuth } from "../../contexts/auth/authProvider";
import { useEffect } from "react";

export const SignInPage = () => {
  const { signIn } = useSignIn();
  const { isLogged } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    if (isLogged) {
      navigate("/drive");
    }
  }, [navigate, isLogged]);

  const onSubmit = async (data: FieldValues) => {
    data.isAdmin = false;
    await signIn(data as ISignIn)
      .then((response) => {
        if (response) {
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <MainContainer>
      <Container>
        <FormComponent onSubmit={handleSubmit(onSubmit)}>
          <Title text="Sign in" />
          <Input placeholder="username" {...register("username")} />
          <Input placeholder="email" {...register("email")} />
          <Input placeholder="password" {...register("password")} />
          <Button type="submit">Sign in</Button>
        </FormComponent>
      </Container>
    </MainContainer>
  );
};
