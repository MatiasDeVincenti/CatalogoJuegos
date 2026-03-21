import Image from "next/image"
import { Card } from "@/components/ui/card"

export function GameCard({ game, steamData }: any) {
  const name = steamData?.name || game.name || "Juego sin nombre"

  const image =
    steamData?.header_image ||
    game.cover ||
    "/placeholder.svg"

  const priceData = steamData?.price_overview

  const price = priceData
    ? priceData.final_formatted
    : game.price
    ? `$${game.price}`
    : "Gratis"

  const originalPrice = priceData?.initial_formatted

  const developer =
    steamData?.developers?.[0] ||
    game.developer ||
    "Desconocido"

  const discount = priceData?.discount_percent

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition">
      {/* Imagen */}
      <div className="relative aspect-[3/4] bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Descuento */}
        {discount && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            -{discount}%
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 space-y-1">
        <h3 className="font-semibold line-clamp-1">{name}</h3>

        <p className="text-sm text-muted-foreground line-clamp-1">
          {developer}
        </p>

        {/* Precio */}
        <div className="flex items-center gap-2">
          {originalPrice && (
            <span className="text-xs line-through text-muted-foreground">
              {originalPrice}
            </span>
          )}

          <span className="font-bold">{price}</span>
        </div>
      </div>
    </Card>
  )
}