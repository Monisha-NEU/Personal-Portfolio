interface SkillBarProps {
  name: string
  level: number
  color?: "primary" | "secondary"
}

export function SkillBar({ name, level, color = "primary" }: SkillBarProps) {
  const colorClass = color === "primary" ? "bg-primary" : "bg-secondary"

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-background/50 rounded-full overflow-hidden border border-white/10">
        <div className={`h-full ${colorClass} rounded-full`} style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

