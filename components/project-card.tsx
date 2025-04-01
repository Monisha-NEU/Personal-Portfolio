import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

// Update the ProjectCardProps interface to include sourceLink
interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
  sourceLink?: string
}

// Update the ProjectCard component to include a source code button
export function ProjectCard({ title, description, tags, image, link, sourceLink }: ProjectCardProps) {
  // Use a fallback image if the provided image path doesn't exist
  const imageSrc = image || "/placeholder.svg?height=300&width=400"

  return (
    <Card className="overflow-hidden card-hover glass-card group">
      <div className="aspect-video overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`Project thumbnail for ${title}`}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="gradient-text">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {(link || sourceLink) && (
        <CardFooter className="flex gap-2">
          {link && (
            <Link href={link} className="text-sm font-medium text-primary hover:underline">
              View Project
            </Link>
          )}
          {sourceLink && (
            <Link
              href={sourceLink}
              className="text-sm font-medium text-secondary hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-1" />
              Source Code
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  )
}

