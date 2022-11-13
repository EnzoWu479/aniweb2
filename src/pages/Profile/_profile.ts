import styled from "styled-components";
import backgroundImg from "../../assets/exemploImagem2.jfif";
import { GlobalButton } from "../../shared/GlobalComponents/GlobalComponents";

export const ProfileBackground = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 10px 10px 0 0;
`;
export const ProfileInformations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -100px;
`;
export const ProfileInfoLeft = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
export const ProfilePhoto = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
`;
export const FollowInfo = styled.div`
  display: flex;
  gap: 10px;
`;
export const EditProfileBtn = styled(GlobalButton)`
  width: 150px;
  height: 40px;
`;
