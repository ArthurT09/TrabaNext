import { NextResponse } from "next/server";

export async function GET(
    req: Request
) {

    console.log('Olá galerinha de sistemas')
    return NextResponse.json({message: "Hello world backend"})
}