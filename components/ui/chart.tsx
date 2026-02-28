function ChartTooltipContent(props: any) {
  const { active, payload } = props as {
    active?: boolean
    payload?: Array<{
      name?: string
      value?: number | string
    }>
  }

  if (!active || !payload || payload.length === 0) {
    return null
  }

  return (
    <div>
      {payload.map((item, index) => (
        <div key={index}>
          {item.name}: {item.value}
        </div>
      ))}
    </div>
  )
}