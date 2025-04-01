import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceItemProps {
  title: string
  company: string
  duration: string
  description: string[] // Changed from string to string[]
  technologies: string[]
}

export function ExperienceItem({ title, company, duration, description, technologies }: ExperienceItemProps) {
  return (
    <Card className="card-hover glass-card">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-primary">{title}</CardTitle>
            <CardDescription>{company}</CardDescription>
          </div>
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="mb-4 text-sm text-muted-foreground list-disc pl-5 space-y-1">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="border-primary/30 bg-primary/10 text-primary-foreground">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

