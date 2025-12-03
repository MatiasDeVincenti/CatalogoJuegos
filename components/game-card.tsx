import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Game } from "@/lib/games-data"
import { Star, Gamepad2 } from "lucide-react"
import Image from "next/image"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const hasDiscount = game.originalPrice && game.originalPrice > game.price
  const discountPercent = hasDiscount ? Math.round(((game.originalPrice - game.price) / game.originalPrice) * 100) : 0

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={game.cover || "/placeholder.svg"}
          alt={game.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {hasDiscount && (
          <div className="absolute right-2 top-2 z-10">
            <Badge className="bg-destructive text-destructive-foreground font-bold">-{discountPercent}%</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg leading-tight mb-2 line-clamp-2 text-balance">{game.name}</h3>
        <p className="text-sm text-muted-foreground mb-1">{game.developer}</p>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">
            {game.genre}
          </Badge>
          <span className="text-xs text-muted-foreground">{game.year}</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap mb-2">
          {game.platforms.map((platform) => (
            <Gamepad2 key={platform} className="w-4 h-4 text-muted-foreground" />
          ))}
        </div>
        {game.rating && (
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{game.rating.toFixed(1)}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center gap-2">
        {hasDiscount && (
          <span className="text-sm text-muted-foreground line-through">${game.originalPrice?.toFixed(2)}</span>
        )}
        <span className="text-2xl font-bold text-primary">${game.price.toFixed(2)}</span>
      </CardFooter>
    </Card>
  )
}
