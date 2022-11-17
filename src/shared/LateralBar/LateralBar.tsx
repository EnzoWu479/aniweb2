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
  OptionChild,
  OptionsButton,
  OptionText,
  OptionTextChild,
} from "./_lateralbar";

export default () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [topicsOpened, setTopicsOpened] = useState<string>("");
  const history = useHistory();
  const handleLogOut = () => {
    history.push("/");
  };
  const isActive = (href: string) =>
    window.location.pathname.includes(`${href}`);
  return (
    <>
      <BlackBackground
        isExpanded={isExpanded}
        onClick={() => setIsExpanded(false)}
      />
      <Container isExpanded={isExpanded}>
        <ContainerTop>
          <Logo minimized={!isExpanded} size={isExpanded ? 38 : 30} />
          {OptionsLateralBar.map((item) => (
            <><OptionsButton
            active={isActive(item.href)}
            onClick={() => {
              if(item.child) {
                setTopicsOpened( topicsOpened === item.name ? "" : item.name);
              } else history.push(item.href);
            }}
            key={item.name}
          >
            <item.icon />
            <OptionText isExpanded={isExpanded}>{item.name}</OptionText>
          </OptionsButton>
            {
              item?.child && item.child.map((child) => (
                <OptionChild
                  opened={topicsOpened === item.name}
                  active={isActive(child.href)}
                  onClick={() => history.push(child.href)}
                  key={child.name}
                >
                  <child.icon/>
                  <OptionTextChild isExpanded={isExpanded}>{child.name}</OptionTextChild>
                </OptionChild>
              ) )
            }
          </>
            
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
