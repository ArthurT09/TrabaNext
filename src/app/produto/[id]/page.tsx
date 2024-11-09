'use client'
import { Menu } from "@/components/Menu"
import { useState } from "react"

export default function Produto(
    { params }: { params: { id: string } }
) {

    return (
        <>
            <Menu />
            <h1>Pagina Dinamica {params.id}</h1>
        </>
    )
}