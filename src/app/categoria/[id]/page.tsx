import { Card } from "@/components/Card";
import { Menu } from "@/components/Menu";
import { IProduto } from "@/interfaces";
import axios from "axios";

interface IReqProduto {
  data: Array<IProduto>;
}

interface Props {
  params: {
    id: string;
  };
}

export default async function CategoriaPage({ params }: Props) {

  const categoriaId = parseInt(params.id); // Pegando o id da categoria da URL

  const { data }: IReqProduto = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/produtos?id_categoria=${categoriaId}` // Realizando a requisição filtrada pela categoria
  );

  let nomeCategoria = undefined

  if(categoriaId ===3) {

    nomeCategoria = 'Monitores Gamer'
  }
  if(categoriaId ===1) {

    nomeCategoria = 'Pen Drives'
  }
  if(categoriaId ===2) {

    nomeCategoria = 'Mouses Gamer'
  }

  return (
    <>
      <Menu />

      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
        }}
      >
        <h2>{nomeCategoria}</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {data.map((produto) => (
            <Card
              key={produto.id}
              id={produto.id}
              id_categoria={produto.id_categoria}
              imagemg={produto.imagemg}
              nome={produto.nome}
              valor={produto.valor}
              promo={produto.promo}
            />
          ))}
        </div>
      </div>
    </>
  );
}
