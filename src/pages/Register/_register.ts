import styled from "styled-components";
import { GlobalButton } from "../../shared/GlobalComponents/GlobalComponents";
import InputTextGlobal from "../../shared/InputTextGlobal/InputTextGlobal";
import BackgroundRegister from "../../assets/backgroundRegister1.webp";
import BackgroundStyled from "../../shared/StyledComponents/BackgroundStyled";

export const Background = styled(BackgroundStyled)`
  background-image: url(${BackgroundRegister});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const Container = styled.div`
  width: clamp(25%, 300px, 95vw);
  padding: 25px 5px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #0005;
  border-radius: 5px;
`;
export const ContainerInput = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
`;
export const InputText = styled(InputTextGlobal)``;
export const Button = styled(GlobalButton)``;
export const RegisterText = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
  gap: 10px;
  color: #DBD6CD;
  width: clamp(25%, 300px, 95vw);
  padding: 15px 5px;
  background-color: #0009;
  border-radius: 5px;
`;
export const TextButton = styled.button`
  border: none;
  background-color: transparent;
  color: #bd8a0c;
  text-decoration: none;
  font-weight: 700;
`;
