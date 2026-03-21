import { games } from "@/data/games-data"
import type { Game } from "@/data/games-data"

export async function obtenerTodosLosJuegos(): Promise<Game[]> {
  return games
}