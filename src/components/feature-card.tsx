import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  content: string
  linkHref: string
  linkText: string
}

export function FeatureCard({ title, description, content, linkHref, linkText }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild>
          <Link href={linkHref}>{linkText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

