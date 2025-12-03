import { getMinMaxPrices } from "@/lib/games-data"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, TrendingUp } from "lucide-react"

export function PriceRangeDisplay() {
  const { min, max } = getMinMaxPrices()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card className="border-accent/20 bg-accent/5">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/10">
            <TrendingDown className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Precio Mínimo</p>
            <p className="text-2xl font-bold text-accent">${min.toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Precio Máximo</p>
            <p className="text-2xl font-bold text-primary">${max.toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
