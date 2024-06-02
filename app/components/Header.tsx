import Image from 'next/image'
import Logo from '@/app/assets/Logo.svg'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex fixed justify-between items-center  top-0 w-full bg-[#171023] px-16 py-4 z-50">
      <Image src={Logo} alt="Logo" width={250} />
      <div className="flex gap-10">
        <Link
          className="text-[#F5F6F6] font-medium hover:text-[#7DFFAF]"
          href="#sobre"
          passHref
        >
          Sobre
        </Link>
        <Link
          className="text-[#F5F6F6] font-medium hover:text-[#7DFFAF]"
          href="#skills"
          passHref
        >
          Skills
        </Link>
        <Link
          className="text-[#F5F6F6] font-medium hover:text-[#7DFFAF]"
          href="#projetos"
          passHref
        >
          Projetos
        </Link>
      </div>
      <Link
        className="px-6 py-4 rounded-lg bg-[#8A42DB] text-[#F5F6F6] hover:bg-[#9955E8] font-bold text-base"
        href="https://www.instagram.com/direct/t/17848433541216626"
      >
        Fale Conosco
      </Link>
    </header>
  )
}
