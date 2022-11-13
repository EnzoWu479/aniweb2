import styled from "styled-components";
import { GlobalButton } from "../../shared/GlobalComponents/GlobalComponents";
import InputTextGlobal from "../../shared/InputTextGlobal/InputTextGlobal";
import BackgroundRegister from "../../assets/backgroundRegister.png";

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
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
  background-color: #fff9;
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
  justify-content: center;
  gap: 10px;
  color: #292f33;
  width: clamp(25%, 300px, 95vw);
  padding: 15px 5px;
  background-color: #fff9;
  border-radius: 5px;
  font-weight: 700;
`;
export const TextButton = styled.button`
  border: none;
  background-color: transparent;
  color: #bd8a0c;
  text-decoration: none;
  font-weight: 700;
`;
