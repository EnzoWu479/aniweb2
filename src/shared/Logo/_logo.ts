import styled from "styled-components";

interface Props {
  size?: number;
  color?: string;
}
export const Container = styled.div<Props>`
  font-family: "Pacifico";
  font-size: 60px;
  color: #292f33;
  font-weight: 400;
  display: flex;
  align-items: center;
  transition: all ease 0.2s;
  ${({ size }) => size && `font-size:${size}px;`}
  ${({ color }) => color && `color:${color};`}
`;
interface DisappearProps {
  minimized?: boolean;
}
export const ToDisappear = styled.p<DisappearProps>`
  transition: all ease 0.2s;
  transition-delay: ${({ minimized }) => (minimized ? "0" : "0.1s")};
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  font-weight: inherit;
  ${({ minimized }) => minimized && "font-size: 0; overflow: hidden;"}
`;
