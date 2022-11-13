import { ReactNode } from "react";
import LateralBar from "../LateralBar/LateralBar";
import Loading from "../Loading/Loading";
import { Container, Section } from "./_layout";

interface Props {
  children: ReactNode;
  loaded: boolean;
}
const Layout = ({ children, loaded = true }: Props) => {
  return (
    <Container>
      <LateralBar />
      <Section>{loaded ? children : <Loading />}</Section>
    </Container>
  );
};

export default Layout;
