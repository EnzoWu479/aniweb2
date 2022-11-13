import { useHistory, useParams } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Layout from "../../shared/Layout/Layout";
import {
  EditProfileBtn,
  FollowInfo,
  InfoResponsive,
  NavGroup,
  NavItemBtn,
  PostContainer,
  PostImg,
  PostInfoLine,
  PostInfos,
  PostsGroupContainer,
  ProfileBackground,
  ProfileInfoCenter,
  ProfileInfoLeft,
  ProfileInformations,
  ProfilePhoto,
} from "./_profile";
import profileImgEx from "../../assets/exemploImagem1.jfif";
import postExample from "../../assets/postExemplo.jfif";

export interface ParamsProps {
  section: "postagens" | "curtidas" | "salvos";
}

export default () => {
  const { section } = useParams<ParamsProps>();
  const history = useHistory();
  return (
    <Layout loaded>
      <ProfileBackground />
      <ProfileInformations>
        <ProfileInfoLeft>
          <p>Senju Kawaragi</p>
          <p>@senju</p>
        </ProfileInfoLeft>
        <ProfileInfoCenter>
          <ProfilePhoto src={profileImgEx} alt="" />
          <FollowInfo>
            <InfoResponsive>Senju Kawaragi</InfoResponsive>
            <p>0 seguindo</p>
            <InfoResponsive>@senju</InfoResponsive>
            <p>0 seguidores</p>
          </FollowInfo>
        </ProfileInfoCenter>

        <EditProfileBtn>Editar Perfil</EditProfileBtn>
      </ProfileInformations>
      <NavGroup>
        <NavItemBtn
          active={section !== "curtidas" && section !== "salvos"}
          onClick={() => history.replace("/profile/postagens")}
        >
          Postagens
        </NavItemBtn>
        <NavItemBtn
          active={section === "curtidas"}
          onClick={() => history.replace("/profile/curtidas")}
        >
          Curtidas
        </NavItemBtn>
        <NavItemBtn
          active={section === "salvos"}
          onClick={() => history.replace("/profile/salvos")}
        >
          Salvos
        </NavItemBtn>
      </NavGroup>
      <PostsGroupContainer>
        <PostContainer>
          <PostImg src={postExample} />
          <PostInfos>
            <PostInfoLine>
              <BsFillSuitHeartFill /> 2
            </PostInfoLine>
            <PostInfoLine>
              <FaComment /> 2
            </PostInfoLine>
          </PostInfos>
        </PostContainer>
      </PostsGroupContainer>
    </Layout>
  );
};
