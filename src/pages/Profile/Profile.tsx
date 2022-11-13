import Layout from "../../shared/Layout/Layout";
import {
  EditProfileBtn,
  FollowInfo,
  ProfileBackground,
  ProfileInfoLeft,
  ProfileInformations,
  ProfilePhoto,
} from "./_profile";
import profileImgEx from "../../assets/exemploImagem1.jfif";

export default () => {
  return (
    <Layout loaded>
      <ProfileBackground />
      <ProfileInformations>
        <ProfileInfoLeft>
          <p>Senju Kawaragi</p>
          <p>@senju</p>
        </ProfileInfoLeft>
        <div>
          <ProfilePhoto src={profileImgEx} alt="" />
          <FollowInfo>
            <p>0 seguindo</p>
            <p>0 seguidor</p>
          </FollowInfo>
        </div>

        <EditProfileBtn>Editar Perfil</EditProfileBtn>
      </ProfileInformations>
    </Layout>
  );
};
