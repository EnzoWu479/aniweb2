import styled from "styled-components";
import BackgroundMain from "../../assets/backgroundHome.png";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: grid;
  background-color: #f6f6f6;
`;
export const Section = styled.section`
  padding: 25px 25px 5px 25px;
  margin-left: 60px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${BackgroundMain});
`;