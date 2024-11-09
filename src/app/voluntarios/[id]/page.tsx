'use client'
import { useState } from "react"

export default function Dinamico(
    { params }: { params: { id: string } }
) {

    const [contador, setContador] = useState(0)
    console.log("Use State aqui")

    return (
        <h1>Pagina Dinamica {params.id}</h1>
    )
}