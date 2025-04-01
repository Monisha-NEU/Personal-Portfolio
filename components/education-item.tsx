import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface EducationItemProps {
  degree: string
  institution: string
  duration: string
  description: string | string[] // Allow for either a single string or an array of strings
}

export function EducationItem({ degree, institution, duration, description }: EducationItemProps) {
  // Convert single string description to array if needed
  const descriptionItems = Array.isArray(description) ? description : [description]

  return (
    <Card className="card-hover glass-card">
      <CardHeader className="pb-2 px-6">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-primary">{degree}</CardTitle>
            <CardDescription>{institution}</CardDescription>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{duration}</span>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          {descriptionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

