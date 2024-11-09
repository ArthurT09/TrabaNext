import { Card } from "@/components/Card";
import { Menu } from "@/components/Menu";
import { IProduto } from "@/interfaces";
import axios from "axios";

interface IReqProduto {
  data: Array<IProduto>
}

export default async function Home() {

  const { data }: IReqProduto = await axios.get(
    process.env.NEXT_PUBLIC_API_URL
    +
    '/produtos'
  )

  return (
    <>
      <Menu />

      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
        }}
      >
        <h2>Produtos em destaque</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {
            data.map((produto) => (
              <Card
                key={produto.id}
                id={produto.id}
                id_categoria={produto.id_categoria}
                imagemg={produto.imagemg}
                nome={produto.nome}
                valor={produto.valor}
                promo={produto.promo}
              />
            ))
          }
          {/* {
            // exemplooooo
            data.map(() => {
              return()
            })
          } */}


        </div>
      </div>
    </>
  );
}
