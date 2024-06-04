import Image from 'next/image'
import Link from 'next/link'
import Bro from '@/app/assets/bro.svg'
export default function Sobre() {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex flex-col gap-5 w-full md:w-1/3 lg:w-2/4">
        <p className="text-2xl text-[#F5F6F6]">
          Olá, somos a{' '}
          <span className="font-bold text-[#7DFFAF]">Web Spark</span>
        </p>
        <h1 className="text-4xl font-bold text-[#F5F6F6] leading-tight">
          Estamos aqui para criar sites incríveis e fazer o seu negócio decolar
          🚀.
        </h1>
        <p className="font-medium text-lg text-[#F5F6F6] leading-relaxed">
          Web Spark é uma empresa de web designer dedicado a criar sites
          altamente eficazes. Se você está lançando um novo produto, serviço ou
          evento e precisa de uma página de alta performance, estamos aqui para
          ajudar.
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
