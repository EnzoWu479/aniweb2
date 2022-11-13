import { BsFillArrowRightCircleFill } from "react-icons/bs";
import styled from "styled-components";

interface Props {
  isExpanded: boolean;
}
export const Container = styled.nav<Props>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 60px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: space-between;
  padding: 10px 0;
  transition: all ease 0.3s;
  align-items: center;
  z-index: 21;
  width: ${({ isExpanded }) => (isExpanded ? "250px" : "60px")};
`;
export const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  align-items: center;
`;
interface OptionsProps {
  active?: boolean;
}
export const OptionsButton = styled.button<OptionsProps>`
  border: none;
  background-color: transparent;
  transition: all ease 0.2s;
  display: grid;
  grid-template-columns: 54px 1fr;
  align-items: center;
  width: 100%;
  color: #292f39;
  filter: brightness(${({ active }) => (active ? "10%" : "100%")});
  svg {
    margin: 0 15px;
    font-size: 24px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
export const OptionText = styled.p<Props>`
  transition: all ease 0.3s;
  text-align: start;
  font-size: ${({ isExpanded }) => (isExpanded ? "17px" : "0")};
`;
export const BlackBackground = styled.div<Props>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #0005;
  z-index: 20;
  ${({ isExpanded }) => !isExpanded && "display: none;"}
`;
export const MinimizeBtn = styled(BsFillArrowRightCircleFill)<Props>`
  transition: all ease 0.2s;
  ${({ isExpanded }) => isExpanded && "transform: scaleX(-1);"}
`;
