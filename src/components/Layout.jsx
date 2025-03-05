'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes' // Importa useTheme desde next-themes
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { SectionProvider } from '@/components/SectionProvider'

export function Layout({ children, allSections }) {
  let pathname = usePathname()
  const { resolvedTheme } = useTheme() // Obtén el tema actual desde next-themes

  // Determina la ruta del logo basado en el tema actual
  const logoSrc = '/images/logo.png'

  return (
    <SectionProvider sections={allSections[pathname] ?? []}>
      <div className="h-full lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80 lg:dark:border-white/10">
            <div className="hidden lg:flex">
              <Link
                href="/"
                aria-label="Home"
                className="mt-4 text-2xl font-bold"
              >
                <Image src={logoSrc} width={300} height={100} />
              </Link>
            </div>
            <Header />
            <Navigation className="hidden lg:mt-10 lg:block" />
          </div>
        </motion.header>
        <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
          <main className="flex-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
