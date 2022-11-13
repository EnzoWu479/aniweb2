import styled from "styled-components";

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 0 100px 0 0;
  height: 100%;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #ffaadf;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 10px;
  }
  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 590px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.div`
  width: 100%;
  height: 300px;
  background-color: #292f33;
  padding: 20px;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 200px 1fr;
  gap: 5px;
  cursor: pointer;
  box-sizing: border-box;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;
export const CardTitle = styled.p`
  color: #fff;
  font-weight: 700;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
export const AddButton = styled.button`
  border: none;
  background-color: transparent;
  position: fixed;
  bottom: 0px;
  right: 15px;
  text-decoration: none;
  font-size: 45px;
  color: #444444;
  transition: all ease 0.2s;
  &:hover {
    color: #111;
  }
`;
