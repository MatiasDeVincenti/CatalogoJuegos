export interface Game {
  id: string
  steamId?: number

  name?: string
  cover?: string
  price?: number
  genre?: string
  rating?: number
  developer?: string
}

export const games: Game[] = [
  { id: "1", steamId: 1091500, genre: "RPG", rating: 4.2 },
  { id: "2", steamId: 292030, genre: "RPG", rating: 4.9 },
  { id: "3", steamId: 1593500, genre: "Acción", rating: 4.8 },
  { id: "4", steamId: 1174180, genre: "Acción", rating: 4.7 },
  { id: "5", steamId: 1245620, genre: "RPG", rating: 4.6 },
  { id: "6", steamId: 367520, genre: "Metroidvania", rating: 4.8 },
  { id: "7", steamId: 1145360, genre: "Roguelike", rating: 4.7 },
  { id: "8", steamId: 1716740, genre: "RPG", rating: 4.0 },
  { id: "9", steamId: 1817070, genre: "Acción", rating: 4.5 },
  { id: "10", steamId: 383270, genre: "Aventura", rating: 4.5},
  { id: "11", steamId: 1551360, genre: "Carreras", rating: 4.6 },
  { id: "12", steamId: 413150, genre: "Simulación", rating: 4.8 },
]

export function getMinMaxPrices() {
  const prices = games
    .map((g) => g.price)
    .filter((p): p is number => p !== undefined)

  if (prices.length === 0) {
    return { min: 0, max: 0 }
  }

  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  }
}

export const genres = [
  ...new Set(games.map((g) => g.genre).filter(Boolean)),
] as string[]

export const developers = [
  ...new Set(games.map((g) => g.developer).filter(Boolean)),
] as string[]