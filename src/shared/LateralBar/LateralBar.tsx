import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import OptionsLateralBar from "../../utils/OptionsLateralBar";
import Logo from "../Logo/Logo";
import {
  BlackBackground,
  Container,
  ContainerTop,
  MinimizeBtn,
  OptionsButton,
  OptionText,
} from "./_lateralbar";

export default () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const history = useHistory();
  const handleLogOut = () => {
    history.push("/");
  };
  return (
    <>
      <BlackBackground
        isExpanded={isExpanded}
        onClick={() => setIsExpanded(false)}
      />
      <Container isExpanded={isExpanded}>
        <ContainerTop>
          <Logo minimized={!isExpanded} size={isExpanded ? 46 : 30} />
          {OptionsLateralBar.map((item) => (
            <OptionsButton
              onClick={() => history.push(item.href)}
              key={item.name}
            >
              <item.icon size={24} />
              <OptionText isExpanded={isExpanded}>{item.name}</OptionText>
            </OptionsButton>
          ))}
          <OptionsButton onClick={handleLogOut}>
            <BiLogOut size={24} />
            <OptionText isExpanded={isExpanded}>Deslogar</OptionText>
          </OptionsButton>
        </ContainerTop>
        <OptionsButton onClick={() => setIsExpanded(!isExpanded)}>
          <MinimizeBtn size={24} isExpanded={isExpanded} />
          <OptionText isExpanded={isExpanded}>Minimizar</OptionText>
        </OptionsButton>
      </Container>
    </>
  );
};
