import styled from "styled-components";
import { GlobalButton } from "../../shared/GlobalComponents/GlobalComponents";
import InputTextGlobal from "../../shared/InputTextGlobal/InputTextGlobal";
import BackgroundLogin from "../../assets/backgroundLogin.png";

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${BackgroundLogin});
`;
export const Container = styled.div`
  position: fixed;
  width: clamp(25%, 300px, 95vw);
  height: 100vh;
  gap: 20px;
  right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 595px) {
    width: 100vw;
    right: 0;
    left: 0;
    background-color: #fff6;
  }
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
  gap: 10px;
  color: #292f33;
  @media (max-width: 595px) {
    color: #000;
  }
`;
export const TextButton = styled.button`
  border: none;
  background-color: transparent;
  color: #d6b015;
  text-decoration: none;
  font-weight: 700;
`;
