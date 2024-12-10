import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface TemplateCardProps {
  title: string
  description: string
  type: string
  href: string
}

export function TemplateCard({ title, description, type, href }: TemplateCardProps) {
  return (
    <Card className="group relative overflow-hidden">
      <Link href={href} className="absolute inset-0 z-10">
        <span className="sr-only">View template</span>
      </Link>
      <CardHeader className="relative">
        <div className="absolute right-4 top-4 z-20">
          <div className="rounded-md border bg-white p-2 shadow-sm group-hover:bg-gray-50">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <div className="aspect-[4/3] rounded-md bg-gray-100" />
      </CardHeader>
      <CardContent>
        <h3 className="font-medium">{title}</h3>
        <p className="mt-1.5 text-sm text-gray-600">{description}</p>
        <p className="mt-4 text-xs text-gray-500">{type}</p>
      </CardContent>
    </Card>
  )
}

