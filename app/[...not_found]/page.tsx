import React from 'react'
import Image from 'next/image'
import notFoundImage from '@/app/assets/404.svg'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 bg-[#2C243B]">
      <div className="flex flex-col justify-center items-center mb-8">
        <Image
          src={notFoundImage}
          width={400}
          height={400}
          alt="404 Not Found"
        />
        <h1 className="text-4xl font-bold text-[#7DFFAF] mb-4">
          Page Not Found
        </h1>
      </div>
      <Link
        className="px-6 py-3 rounded-lg bg-[#8A42DB] text-white font-bold text-base hover:bg-[#9955E8] transition-colors duration-300 ease-in-out"
        href="/"
      >
        Voltar Para Pagina
      </Link>
    </div>
  )
}
