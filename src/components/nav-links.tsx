import Link from 'next/link'

export function NavLinks() {
  return (
    <>
      <Link href="/projects" className="block py-2 text-sm text-gray-700 hover:bg-gray-100 lg:inline-block lg:py-0 lg:text-gray-600 lg:hover:bg-transparent lg:hover:text-gray-900">
        Projects
      </Link>
      <Link href="/templates" className="block py-2 text-sm text-gray-700 hover:bg-gray-100 lg:inline-block lg:py-0 lg:text-gray-600 lg:hover:bg-transparent lg:hover:text-gray-900">
        Templates
      </Link>
      <Link href="/community" className="block py-2 text-sm text-gray-700 hover:bg-gray-100 lg:inline-block lg:py-0 lg:text-gray-600 lg:hover:bg-transparent lg:hover:text-gray-900">
        Community
      </Link>
      <Link href="/resources" className="block py-2 text-sm text-gray-700 hover:bg-gray-100 lg:inline-block lg:py-0 lg:text-gray-600 lg:hover:bg-transparent lg:hover:text-gray-900">
        Resources
      </Link>
      <Link href="/forum" className="block py-2 text-sm text-gray-700 hover:bg-gray-100 lg:inline-block lg:py-0 lg:text-gray-600 lg:hover:bg-transparent lg:hover:text-gray-900">
        Forum
      </Link>
    </>
  )
}

