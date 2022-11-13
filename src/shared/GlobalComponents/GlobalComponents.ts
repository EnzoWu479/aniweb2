import styled from "styled-components";

export const GlobalButton = styled.button`
  color: #fff;
  background-color: #292f33;
  border: none;
  height: 40px;
  font-size: 16px;
  border-radius: 10px;
  width: 100%;
  transition: all ease 0.2s;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;
interface InputTextProps {
  error?: boolean;
}
export const GlobalInputText = styled.input<InputTextProps>`
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  height: 35px;
  font-size: 14px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  ${({ error }) =>
    error && "border-color: red !important; color: red !important;"}
`;
export const GlobalSelect = styled.select`
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  height: 35px;
  font-size: 14px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  color: #585858;
  :-moz-focusing {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`;
export const GlobalTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  padding: 10px;
  resize: none;
  box-sizing: border-box;
`;
