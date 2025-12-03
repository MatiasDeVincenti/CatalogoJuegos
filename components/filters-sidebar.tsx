"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { genres, developers } from "@/lib/games-data"
import { X } from "lucide-react"

interface FiltersSidebarProps {
  selectedGenre: string
  onGenreChange: (genre: string) => void
  selectedDeveloper: string
  onDeveloperChange: (developer: string) => void
  showOnlyOffers: boolean
  onOffersChange: (show: boolean) => void
  sortBy: string
  onSortChange: (sort: string) => void
  onClearFilters: () => void
}

export function FiltersSidebar({
  selectedGenre,
  onGenreChange,
  selectedDeveloper,
  onDeveloperChange,
  showOnlyOffers,
  onOffersChange,
  sortBy,
  onSortChange,
  onClearFilters,
}: FiltersSidebarProps) {
  const hasFilters = selectedGenre !== "all" || selectedDeveloper !== "all" || showOnlyOffers

  return (
    <aside className="w-full lg:w-72 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filtros</h2>
        {hasFilters && (
          <Button variant="ghost" size="sm" onClick={onClearFilters} className="h-8 px-2 text-xs">
            <X className="w-4 h-4 mr-1" />
            Limpiar
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="offers" checked={showOnlyOffers} onCheckedChange={onOffersChange} />
          <Label
            htmlFor="offers"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            Solo ofertas
          </Label>
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <Label className="text-sm font-semibold">Ordenar por</Label>
        <RadioGroup value={sortBy} onValueChange={onSortChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="name-asc" id="name-asc" />
            <Label htmlFor="name-asc" className="text-sm cursor-pointer">
              Nombre (A-Z)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="name-desc" id="name-desc" />
            <Label htmlFor="name-desc" className="text-sm cursor-pointer">
              Nombre (Z-A)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price-asc" id="price-asc" />
            <Label htmlFor="price-asc" className="text-sm cursor-pointer">
              Precio: Menor a Mayor
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price-desc" id="price-desc" />
            <Label htmlFor="price-desc" className="text-sm cursor-pointer">
              Precio: Mayor a Menor
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="year-desc" id="year-desc" />
            <Label htmlFor="year-desc" className="text-sm cursor-pointer">
              Año: Más Reciente
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rating-desc" id="rating-desc" />
            <Label htmlFor="rating-desc" className="text-sm cursor-pointer">
              Mejor Valorados
            </Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-3">
        <Label className="text-sm font-semibold">Género</Label>
        <RadioGroup value={selectedGenre} onValueChange={onGenreChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="genre-all" />
            <Label htmlFor="genre-all" className="text-sm cursor-pointer">
              Todos los géneros
            </Label>
          </div>
          {genres.map((genre) => (
            <div key={genre} className="flex items-center space-x-2">
              <RadioGroupItem value={genre} id={`genre-${genre}`} />
              <Label htmlFor={`genre-${genre}`} className="text-sm cursor-pointer">
                {genre}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-3">
        <Label className="text-sm font-semibold">Desarrollador</Label>
        <RadioGroup value={selectedDeveloper} onValueChange={onDeveloperChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="dev-all" />
            <Label htmlFor="dev-all" className="text-sm cursor-pointer">
              Todos los desarrolladores
            </Label>
          </div>
          {developers.map((developer) => (
            <div key={developer} className="flex items-center space-x-2">
              <RadioGroupItem value={developer} id={`dev-${developer}`} />
              <Label htmlFor={`dev-${developer}`} className="text-sm cursor-pointer">
                {developer}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </aside>
  )
}
