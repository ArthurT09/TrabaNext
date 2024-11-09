"use client"
import Image from "next/image"
import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco } from "./style"
import { IProduto } from "@/interfaces"
import { useRouter } from "next/navigation"

export const Card = (props: IProduto) => {

    const router = useRouter()

    return (
        <CardBody>
            <Image
                src={
                    'https://raw.githubusercontent.com/profchines/Imagens/refs/heads/main/Imagens/'
                    + props.imagemg
                }
                alt={props.nome}
                width={250}
                height={200}
            />
            <Title>{props.nome}</Title>
            <TitlePreco>{props.valor}</TitlePreco>
            <TextPromo>{props.promo}</TextPromo>
            <Button
                onClick={() => {
                    router.push('/produto/'+props.id)
                }}
            >
                <TextButton>Detalhes</TextButton>
            </Button>
        </CardBody>
    )
}