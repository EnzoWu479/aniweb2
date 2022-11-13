import { AiFillPlusCircle } from "react-icons/ai";
import Layout from "../../shared/Layout/Layout";
import {
  AddButton,
  Card,
  CardImg,
  CardTitle,
  ContainerGrid,
} from "./_entretenimento";
import imgexp from "../../assets/exemploImagem.jpg";

export default () => {
  return (
    <Layout loaded>
      <ContainerGrid>
        <Card>
          <CardImg src={imgexp} alt="" />
          <CardTitle>
            Kawaragi senju é a primeira lider feminina de gangue
          </CardTitle>
        </Card>
        <Card>
          <CardImg src={imgexp} alt="" />
          <CardTitle>
            Kawaragi senju é a primeira lider feminina de gangue
          </CardTitle>
        </Card>
        <Card>
          <CardImg src={imgexp} alt="" />
          <CardTitle>
            Kawaragi senju é a primeira lider feminina de gangue
          </CardTitle>
        </Card>
        <Card>
          <CardImg src={imgexp} alt="" />
          <CardTitle>
            Kawaragi senju é a primeira lider feminina de gangue
          </CardTitle>
        </Card>
        <Card>
          <CardImg src={imgexp} alt="" />
          <CardTitle>
            Kawaragi senju é a primeira lider feminina de gangue
          </CardTitle>
        </Card>
        <AddButton>
          <AiFillPlusCircle />
        </AddButton>
      </ContainerGrid>
    </Layout>
  );
};
