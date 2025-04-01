interface SkillItemProps {
  name: string
  color?: "primary" | "secondary" | "neutral" | "accent"
}

export function SkillItem({ name, color = "primary" }: SkillItemProps) {
  let colorClass = ""

  switch (color) {
    case "primary":
      colorClass = "bg-primary/10 text-foreground border-primary/20"
      break
    case "secondary":
      colorClass = "bg-secondary/10 text-foreground border-secondary/20"
      break
    case "neutral":
      colorClass =
        "bg-gray-100 text-foreground border-gray-200 dark:bg-gray-800 dark:text-foreground dark:border-gray-700"
      break
    case "accent":
      colorClass = "bg-accent/10 text-foreground border-accent/20"
      break
    default:
      colorClass = "bg-primary/10 text-foreground border-primary/20"
  }

  return <span className={`px-3 py-1.5 rounded-full text-sm border ${colorClass} inline-block m-1`}>{name}</span>
}

