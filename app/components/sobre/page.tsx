import Image from 'next/image'
import Link from 'next/link'
import Bro from '@/app/assets/bro.svg'
export default function Sobre() {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex flex-col gap-5 w-full md:w-1/3 lg:w-2/4">
        <p className="text-2xl text-[#F5F6F6]">
          Olá, Meu nome é <span className="text-[#7DFFAF]">João Pedro</span>
        </p>
        <h1 className="text-4xl font-bold text-[#F5F6F6] leading-tight">
          Estou aqui para criar sites incríveis para o seu negócio.
        </h1>
        <p className="font-medium text-lg text-[#F5F6F6] leading-relaxed">
          Sou um web designer apaixonado por criar landing pages que realmente
          convertem. Se você está lançando um novo produto, serviço ou evento e
          precisa de uma página de alta performance, estou aqui para ajudar.
          Mesmo sendo iniciante, meu compromisso é entregar designs
          profissionais que destacam seu projeto e atraem clientes.
        </p>
        <div className="flex">
          <Link
            className="px-6 py-4 rounded-lg bg-[#8A42DB] text-[#F5F6F6] hover:bg-[#9955E8] font-bold text-base"
            href="https://www.instagram.com/direct/t/17848433541216626"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
      <Image src={Bro} alt="Logo" width={650} />
    </div>
  )
}
