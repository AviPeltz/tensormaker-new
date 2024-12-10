import React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavLinks } from "@/components/nav-links"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 border-b bg-white px-4 lg:px-8">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-blue-600" />
              <span className="text-xl font-semibold">TensorMaker</span>
            </Link>
            <nav className="hidden gap-4 lg:flex">
              <NavLinks />
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <div className="h-8 w-8 rounded-full bg-gray-200" />
              <span className="text-sm">Avi Peitz</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col space-y-4">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-blue-600" />
                    <span className="text-xl font-semibold">TensorMaker</span>
                  </Link>
                  <nav className="flex flex-col space-y-2">
                    <NavLinks />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8 px-4 lg:px-8">
        {children}
      </main>
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2023 TensorMaker. All rights reserved.
          </div>
          <nav className="flex gap-4">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

