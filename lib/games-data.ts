export interface Game {
  id: string
  name: string
  cover: string
  price: number
  originalPrice?: number
  year: number
  platforms: string[]
  genre: string
  developer: string
  rating?: number
}

export const games: Game[] = [
  {
    id: "1",
    name: "Cyberpunk 2077",
    cover: "/cyberpunk-2077-inspired-cover.png",
    price: 29.99,
    originalPrice: 59.99,
    year: 2020,
    platforms: ["PC", "PlayStation", "Xbox"],
    genre: "RPG",
    developer: "CD Projekt Red",
    rating: 4.2,
  },
  {
    id: "2",
    name: "The Witcher 3",
    cover: "/generic-fantasy-game-cover.png",
    price: 19.99,
    originalPrice: 39.99,
    year: 2015,
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    genre: "RPG",
    developer: "CD Projekt Red",
    rating: 4.9,
  },
  {
    id: "3",
    name: "God of War",
    cover: "/god-of-war-game-cover.jpg",
    price: 49.99,
    year: 2018,
    platforms: ["PlayStation", "PC"],
    genre: "Acción",
    developer: "Santa Monica Studio",
    rating: 4.8,
  },
  {
    id: "4",
    name: "Red Dead Redemption 2",
    cover: "/red-dead-redemption-2-game-cover.jpg",
    price: 39.99,
    originalPrice: 59.99,
    year: 2018,
    platforms: ["PC", "PlayStation", "Xbox"],
    genre: "Acción",
    developer: "Rockstar Games",
    rating: 4.7,
  },
  {
    id: "5",
    name: "Elden Ring",
    cover: "/generic-fantasy-game-cover.png",
    price: 59.99,
    year: 2022,
    platforms: ["PC", "PlayStation", "Xbox"],
    genre: "RPG",
    developer: "FromSoftware",
    rating: 4.6,
  },
  {
    id: "6",
    name: "Hollow Knight",
    cover: "/hollow-knight-game-cover.jpg",
    price: 14.99,
    year: 2017,
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    genre: "Metroidvania",
    developer: "Team Cherry",
    rating: 4.8,
  },
  {
    id: "7",
    name: "Hades",
    cover: "/hades-game-cover.png",
    price: 24.99,
    year: 2020,
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    genre: "Roguelike",
    developer: "Supergiant Games",
    rating: 4.7,
  },
  {
    id: "8",
    name: "Starfield",
    cover: "/starfield-game-cover.png",
    price: 69.99,
    year: 2023,
    platforms: ["PC", "Xbox"],
    genre: "RPG",
    developer: "Bethesda",
    rating: 4.0,
  },
  {
    id: "9",
    name: "Spider-Man Miles Morales",
    cover: "/spiderman-miles-morales-game-cover.jpg",
    price: 39.99,
    originalPrice: 49.99,
    year: 2020,
    platforms: ["PlayStation", "PC"],
    genre: "Acción",
    developer: "Insomniac Games",
    rating: 4.5,
  },
  {
    id: "10",
    name: "Zelda Breath of the Wild",
    cover: "/zelda-breath-of-the-wild-game-cover.jpg",
    price: 59.99,
    year: 2017,
    platforms: ["Switch"],
    genre: "Aventura",
    developer: "Nintendo",
    rating: 4.9,
  },
  {
    id: "11",
    name: "Forza Horizon 5",
    cover: "/forza-horizon-5-game-cover.jpg",
    price: 49.99,
    originalPrice: 69.99,
    year: 2021,
    platforms: ["PC", "Xbox"],
    genre: "Carreras",
    developer: "Playground Games",
    rating: 4.6,
  },
  {
    id: "12",
    name: "Stardew Valley",
    cover: "/stardew-valley-game-cover.png",
    price: 14.99,
    year: 2016,
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    genre: "Simulación",
    developer: "ConcernedApe",
    rating: 4.8,
  },
]

export const genres = [...new Set(games.map((game) => game.genre))].sort()
export const developers = [...new Set(games.map((game) => game.developer))].sort()

export function getMinMaxPrices() {
  const prices = games.map((game) => game.price)
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  }
}
