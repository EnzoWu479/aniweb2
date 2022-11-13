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
} from "./_register";

export default () => {
  const history = useHistory();
  return (
    <Background>
      <Container>
        <Logo size={60} />
        <ContainerInput>
          <InputText label="Email" size="medium" />
          <InputText label="Nome de usuario" size="medium" />
          <InputText label="Nome completo" size="medium" />
          <InputText label="Senha" size="medium" type="password" />
          <Button>Registre-se</Button>
        </ContainerInput>
      </Container>
      <RegisterText>
        Tem uma conta?
        <TextButton onClick={() => history.push("/")}>Conecte-se</TextButton>
      </RegisterText>
    </Background>
  );
};
