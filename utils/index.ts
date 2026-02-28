import PocketBase from "pocketbase"
import type { Game } from "@/lib/games-data"

const pb = new PocketBase("http://127.0.0.1:8090")

export async function obtenerTodosLosJuegos(): Promise<Game[]> {
  const records = await pb.collection("games").getFullList()

  return records.map((record) => ({
    id: record.id,
    name: record.name,
    cover: record.cover,
    price: record.price,
    originalPrice: record.originalPrice ?? undefined,
    year: record.year,
    genre: record.genre,
    developer: record.developer,
    rating: record.rating ?? undefined,
  }))
}