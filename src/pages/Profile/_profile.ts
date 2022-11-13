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
  @media (max-width: 695px) {
    height: 150px;
  }
  @media (max-width: 595px) {
    height: 100px;
  }
`;
export const ProfileInformations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -100px;
  @media (max-width: 695px) {
    margin-top: -60px;
  }
  @media (max-width: 495px) {
    flex-direction: column;
  }
`;
export const ProfileInfoLeft = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 495px) {
    display: none;
  }
`;
export const ProfileInfoCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProfilePhoto = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
  @media (max-width: 695px) {
    width: 120px;
    height: 120px;
  }
`;
export const FollowInfo = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 595px) {
    flex-direction: column;
    gap: 0;
  }
  @media (max-width: 495px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 20px;
  }
`;
export const InfoResponsive = styled.p`
  @media (min-width: 495px) {
    display: none;
  }
`;
export const EditProfileBtn = styled(GlobalButton)`
  width: 150px;
  height: 40px;
  margin-top: 30px;
  @media (max-width: 495px) {
    margin-top: 10px;
  }
`;
export const NavGroup = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
interface NavProps {
  active: boolean;
}
export const NavItemBtn = styled.button<NavProps>`
  height: 40px;
  background-color: transparent;
  border: none;
  transition: all ease 0.2s;
  ${({ active }) => active && "border-bottom: 2px solid #292f33;"}
  @media (max-width: 495px) {
    margin-top: 10px;
  }
`;
export const PostsGroupContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  @media (max-width: 695px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 595px) {
    grid-template-columns: 1fr;
  }
`;
export const PostContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
export const PostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const PostInfos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  background-color: #fff3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease 0.2s;
  ${PostContainer}:hover & {
    opacity: 1;
  }
`;
export const PostInfoLine = styled.p`
  color: #292f33;
  font-size: 24px;
`;
