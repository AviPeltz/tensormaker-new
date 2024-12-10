import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout"
import { FeatureCard } from "@/components/feature-card"

export default function HomePage() {
  return (
    <Layout>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to TensorMaker</h1>
        <p className="text-xl text-gray-600 mb-8">Build powerful machine learning applications with ease</p>
        <Button asChild size="lg">
          <Link href="/templates">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Visual Inspection"
          description="Analyze images for quality control and object detection"
          content="Perfect for manufacturing, agriculture, and medical imaging applications."
          linkHref="/templates#visual-inspection"
          linkText="Explore Templates"
        />
        <FeatureCard
          title="Text Analysis"
          description="Process and understand text data at scale"
          content="Ideal for sentiment analysis, document classification, and chatbots."
          linkHref="/templates#text-applications"
          linkText="Explore Templates"
        />
        <FeatureCard
          title="Custom Solutions"
          description="Build tailored ML models for your unique needs"
          content="Work with our team to develop custom machine learning solutions."
          linkHref="/contact"
          linkText="Contact Us"
        />
      </section>
    </Layout>
  )
}

