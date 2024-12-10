import { Layout } from "@/components/layout"
import { TemplateCard } from "@/components/template-card"

interface Template {
  title: string
  description: string
  category: string
  type: string
  href: string
}

const templates: Template[] = [
  {
    title: "Quality Inspection",
    description: "Check the quality of fruits and vegetables using images",
    category: "Visual inspection applications",
    type: "Instance segmentation",
    href: "/templates/quality-inspection",
  },
  {
    title: "Object Counting",
    description: "Count the number of objects in an image, in the case colonies of bacteria on a petri dish",
    category: "Visual inspection applications",
    type: "Instance segmentation",
    href: "/templates/object-counting",
  },
  {
    title: "Object Tracking",
    description: "Check the quality of fruits and vegetables using images",
    category: "Visual inspection applications",
    type: "Instance segmentation",
    href: "/templates/object-tracking",
  },
  {
    title: "Document question-answering",
    description: "Identify different types of food and calculate the total calories of a meal",
    category: "Text applications",
    type: "Dense Document Retrieval",
    href: "/templates/document-qa",
  },
  {
    title: "Email sentiment analysis",
    description: "Check the quality of fruits and vegetables using images",
    category: "Text applications",
    type: "Sentiment Analysis",
    href: "/templates/sentiment-analysis",
  },
  {
    title: "Stylized copy generation",
    description: "Distinguish different types of plants using image data",
    category: "Text applications",
    type: "Text Style Transfer",
    href: "/templates/copy-generation",
  },
]

export default function TemplatesPage() {
  const categories = Array.from(new Set(templates.map((t) => t.category)))

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-semibold">Select a template to start</h1>
        <p className="text-gray-600">Use one of our pre-built solutions to kickstart your project</p>
      </div>
      {categories.map((category) => (
        <section key={category} className="mb-12">
          <h2 className="mb-6 text-xl font-semibold">{category}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates
              .filter((t) => t.category === category)
              .map((template) => (
                <TemplateCard
                  key={template.title}
                  title={template.title}
                  description={template.description}
                  type={template.type}
                  href={template.href}
                />
              ))}
          </div>
        </section>
      ))}
    </Layout>
  )
}

