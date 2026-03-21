"use client"

interface Props {
  games: any[]
  steamData: Record<number, any>
}

export function PriceRangeDisplay({ games, steamData }: Props) {
  const prices: number[] = []

  games.forEach((game) => {
    const steam = game.steamId
      ? steamData[game.steamId]
      : null

    const price =
      steam?.price_overview?.final
        ? steam.price_overview.final / 100
        : game.price

    if (price) prices.push(price)
  })

  if (prices.length === 0) {
    return <p>No hay precios disponibles</p>
  }

  const min = Math.min(...prices)
  const max = Math.max(...prices)

  return (
    <div className="flex gap-6">
      <div>
        <p className="text-sm text-muted-foreground">
          Precio Mínimo
        </p>
        <p className="font-bold">${min.toFixed(2)}</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground">
          Precio Máximo
        </p>
        <p className="font-bold">${max.toFixed(2)}</p>
      </div>
    </div>
  )
}