'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import Header from './components/Header'
import Skills from './components/missao/page'
import Projetos from './components/projetos/page'
import Sobre from './components/quemsomos/page'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/app/assets/Logo.svg'
export default function Home() {
  const pathname = usePathname()

  useEffect(() => {
    // Ensure scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
      </motion.div>
      <main className="flex min-h-screen flex-col items-center justify-center px-16 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <section
              id="Quem Somos"
              className="w-full h-screen flex items-center justify-center"
            >
              <Sobre />
            </section>
            <section
              id="missao"
              className="w-full h-screen flex items-center justify-center"
            >
              <Skills />
            </section>
            <section
              id="projetos"
              className="w-full h-screen flex items-center justify-center"
            >
              <Projetos />
            </section>
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="flex justify-between items-center  w-full bg-[#17102398] backdrop-blur px-16 py-4">
        <Image src={Logo} alt="Logo" width={250} />
      </footer>
    </div>
  )
}
