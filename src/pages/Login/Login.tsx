import { useHistory } from "react-router-dom";
import Logo from "../../shared/Logo/Logo";
import {
  Background,
  Button,
  Container,
  ContainerInput,
  InputText,
  RegisterText,
  TextButton,
} from "./_login";

export default () => {
  const history = useHistory();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    history.push("/entretenimento");
  };
  return (
    <Background>
      <Container>
        <Logo size={60} />
        <ContainerInput onSubmit={handleSubmit}>
          <InputText label="Seu email" size="medium" />
          <InputText label="Sua senha" size="medium" type="password" />
          <Button>Login</Button>
        </ContainerInput>
        <RegisterText>
          Não tem uma conta?
          <TextButton onClick={() => history.push("/register")}>
            Cadastre-se
          </TextButton>
        </RegisterText>
      </Container>
    </Background>
  );
};
