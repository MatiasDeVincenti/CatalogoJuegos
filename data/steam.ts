export async function getSteamGames(ids: number[]) {
  const results = await Promise.all(
    ids.map(async (id) => {
      try {
        const res = await fetch(`/api/steam/${id}`)

        if (!res.ok) return null

        return await res.json()
      } catch {
        return null
      }
    })
  )

  return results.filter(Boolean)
}