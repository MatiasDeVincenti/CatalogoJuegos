"use client"

import { useState, useMemo } from "react"
// import { games } from "@/lib/games-data"
import { GameCard } from "@/components/game-card"
import { FiltersSidebar } from "@/components/filters-sidebar"
import { SearchBar } from "@/components/search-bar"
import { PriceRangeDisplay } from "@/components/price-range-display"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SlidersHorizontal, Gamepad2 } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { obtenerTodosLosJuegos } from "@/utils"
import { Game } from "@/lib/games-data"

export default function HomePage() {
  const consulta = useQuery({ queryKey: ['catalogo'], queryFn: obtenerTodosLosJuegos })
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedDeveloper, setSelectedDeveloper] = useState("all")
  const [showOnlyOffers, setShowOnlyOffers] = useState(false)
  const [sortBy, setSortBy] = useState("name-asc")

if (consulta.isLoading) {
  return (<p> El catálogo se está cargando</p>)
}

if (consulta.isError) {
  return (<p> Hubo un error al cargar el catálogo</p>)
}

  const filteredAndSortedGames = useMemo(() => {
    const filtered = consulta.data?.filter((game) => {
      // Filtrar por búsqueda
      const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase())

      // Filtrar por género
      const matchesGenre = selectedGenre === "all" || game.genre === selectedGenre

      // Filtrar por desarrollador
      const matchesDeveloper = selectedDeveloper === "all" || game.developer === selectedDeveloper

      // Filtrar por ofertas
      const matchesOffers = !showOnlyOffers || (game.originalPrice && game.originalPrice > game.price)

      return matchesSearch && matchesGenre && matchesDeveloper && matchesOffers
    })

    // Ordenar
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "year-desc":
          return b.year - a.year
        case "rating-desc":
          return (b.rating || 0) - (a.rating || 0)
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedGenre, selectedDeveloper, showOnlyOffers, sortBy])

  const clearFilters = () => {
    setSelectedGenre("all")
    setSelectedDeveloper("all")
    setShowOnlyOffers(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Gamepad2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-balance">GameVault</h1>
              <p className="text-sm text-muted-foreground">Tu catálogo de videojuegos</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                  <SlidersHorizontal className="w-5 h-5" />
                  <span className="sr-only">Abrir filtros</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto">
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <PriceRangeDisplay />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block shrink-0">
            <div className="sticky top-24">
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
          </div>

          {/* Games Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {filteredAndSortedGames?.length}{" "}
                {filteredAndSortedGames?.length === 1 ? "videojuego encontrado" : "videojuegos encontrados"}
              </p>
            </div>

            {filteredAndSortedGames?.length === 0 ? (
              <div className="text-center py-12">
                <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No se encontraron videojuegos</h3>
                <p className="text-muted-foreground mb-4">Intenta ajustar tus filtros o búsqueda</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    clearFilters()
                  }}
                >
                  Limpiar filtros
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedGames?.map((game) => (
                  <GameCard key={game.id} game={game as Game} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
