import { useNavigate } from "react-router";
import { MainContainer } from "../../components/mainContainer";
import { Title } from "../../components/title";
import { Container, Input, TextRedirect } from "./styles";
import { FormComponent } from "../../components/form/form";
import { Button } from "../../components/button/button";
import { FieldValues, useForm } from "react-hook-form";
import { useLogin } from "../../contexts/login/loginProvider";
import { ILogin } from "../../contexts/login/types";
import { useAuth } from "../../contexts/auth/authProvider";
import { useEffect } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useLogin();
  const { isLogged } = useAuth();
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    if (isLogged) {
      navigate("/drive");
    }
  }, [navigate, isLogged]);
  const onSubmit = async (data: FieldValues) => {
    data.isAdmin = false;
    await login(data as ILogin)
      .then((response) => {
        if (response) {
          navigate("/drive");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <MainContainer>
      <Container>
        <FormComponent onSubmit={handleSubmit(onSubmit)}>
          <Title text="Login" />
          <Input placeholder="email" {...register("email")} />
          <Input
            placeholder="password"
            type="password"
            {...register("password")}
          />
          <Button type="submit">Login</Button>
          <TextRedirect onClick={() => navigate("/signin")}>
            Sign In
          </TextRedirect>
        </FormComponent>
      </Container>
    </MainContainer>
  );
};
