"use client"

import { useState, useMemo, useEffect } from "react"
import { GameCard } from "@/components/game-card"
import { FiltersSidebar } from "@/components/filters-sidebar"
import { SearchBar } from "@/components/search-bar"
import { PriceRangeDisplay } from "@/components/price-range-display"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SlidersHorizontal, Gamepad2 } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { obtenerTodosLosJuegos } from "@/utils"
import type { Game } from "@/data/games-data"
import { getSteamGames } from "@/data/steam"

export default function HomePage() {
  // Query
  const { data: games = [], isLoading, isError } = useQuery<Game[]>({
    queryKey: ["catalogo"],
    queryFn: obtenerTodosLosJuegos,
  })

  // Estados
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedDeveloper, setSelectedDeveloper] = useState("all")
  const [showOnlyOffers, setShowOnlyOffers] = useState(false)
  const [sortBy, setSortBy] = useState("name-asc")
  const [steamData, setSteamData] = useState<Record<number, any>>({})

  // Cargar datos de Steam
  useEffect(() => {
    const loadSteamGames = async () => {
      const ids = games
        .map((g) => g.steamId)
        .filter((id): id is number => id !== undefined)

      if (ids.length === 0) return

      const data = await getSteamGames(ids)

      const mapped: Record<number, any> = {}

      data.forEach((g) => {
        mapped[g.steam_appid] = g
      })

      setSteamData(mapped)
    }

    loadSteamGames()
  }, [games])

  // FILTROS + ORDEN
  const filteredAndSortedGames = useMemo(() => {
    let filtered = [...games]

    // Buscar
    if (searchQuery) {
      filtered = filtered.filter((g) => {
        const name =
          steamData[g.steamId ?? 0]?.name || g.name || ""

        return name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      })
    }

    // Género
    if (selectedGenre !== "all") {
      filtered = filtered.filter(
        (g) => g.genre === selectedGenre
      )
    }

    // Developer
    if (selectedDeveloper !== "all") {
      filtered = filtered.filter((g) => {
        const dev =
          steamData[g.steamId ?? 0]?.developers?.[0] ||
          g.developer

        return dev === selectedDeveloper
      })
    }

    // Ofertas
    if (showOnlyOffers) {
      filtered = filtered.filter((g) => {
        const discount =
          steamData[g.steamId ?? 0]?.price_overview
            ?.discount_percent

        return discount > 0
      })
    }

    // Orden
    switch (sortBy) {
      case "name-asc":
        filtered.sort((a, b) => {
          const nameA =
            steamData[a.steamId ?? 0]?.name || a.name || ""
          const nameB =
            steamData[b.steamId ?? 0]?.name || b.name || ""
          return nameA.localeCompare(nameB)
        })
        break

      case "price-asc":
        filtered.sort((a, b) => {
          const priceA =
            steamData[a.steamId ?? 0]?.price_overview?.final || 0
          const priceB =
            steamData[b.steamId ?? 0]?.price_overview?.final || 0
          return priceA - priceB
        })
        break

      case "price-desc":
        filtered.sort((a, b) => {
          const priceA =
            steamData[a.steamId ?? 0]?.price_overview?.final || 0
          const priceB =
            steamData[b.steamId ?? 0]?.price_overview?.final || 0
          return priceB - priceA
        })
        break

      case "rating-desc":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
    }

    return filtered
  }, [
    games,
    searchQuery,
    selectedGenre,
    selectedDeveloper,
    showOnlyOffers,
    sortBy,
    steamData,
  ])

  // Limpiar filtros
  const clearFilters = () => {
    setSelectedGenre("all")
    setSelectedDeveloper("all")
    setShowOnlyOffers(false)
  }

  // Loading / Error
  if (isLoading) {
    return <p>El catálogo se está cargando...</p>
  }

  if (isError) {
    return <p>Hubo un error al cargar el catálogo</p>
  }

  // UI
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 z-40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Gamepad2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">GameVault</h1>
              <p className="text-sm text-muted-foreground">
                Tu catálogo de videojuegos
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
              />
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="w-5 h-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-80">
                <FiltersSidebar
                  selectedGenre={selectedGenre}
                  onGenreChange={setSelectedGenre}
                  selectedDeveloper={selectedDeveloper}
                  onDeveloperChange={setSelectedDeveloper}
                  showOnlyOffers={showOnlyOffers}
                  onOffersChange={setShowOnlyOffers}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  onClearFilters={clearFilters}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <div className="container mx-auto px-4 py-8">
        <PriceRangeDisplay
          games={filteredAndSortedGames}
          steamData={steamData}
        />

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <FiltersSidebar
              selectedGenre={selectedGenre}
              onGenreChange={setSelectedGenre}
              selectedDeveloper={selectedDeveloper}
              onDeveloperChange={setSelectedDeveloper}
              showOnlyOffers={showOnlyOffers}
              onOffersChange={setShowOnlyOffers}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Grid */}
          <div className="flex-1">
            <p className="text-sm mb-4">
              {filteredAndSortedGames.length} juegos
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  steamData={
                    game.steamId
                      ? steamData[game.steamId]
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}