"use client"; // Indica que o código será executado no lado do cliente (importante para o Next.js 13+)

import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { LeftContainer, NavbarContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended } from "./style";

// Definindo o tipo ICategoria
interface ICategoria {
  id: number;
  nome: string;
}

export const Menu = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([]);

  useEffect(() => {
    // Fazendo a requisição para obter as categorias
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/categorias`) // Busca as categorias
      .then((resposta) => {
        setCategorias(resposta.data); // Armazena as categorias no estado
      })
      .catch((err: AxiosError) => {
        console.log("Erro ao carregar categorias:", err); // Erro no carregamento das categorias
      });
  }, []); // A requisição é feita apenas uma vez (quando o componente for montado)

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLinkExtended href={"/"}>Home</NavbarLinkExtended>
            {/* Mapeia as categorias e cria os links dinâmicos */}
            {categorias.map((categoria) => (
              <NavbarLink key={categoria.id} href={`/categoria/${categoria.id}`}>
                {categoria.nome}
              </NavbarLink>
            ))}

          </NavbarLinkContainer>
        </LeftContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};
