import { motion } from 'framer-motion'

interface CardProps {
  title: string
  description: string
}

export default function Missao() {
  return (
    <div className="flex flex-col justify-center items-center gap-16 py-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-[#7DFFAF] leading-tight">
          Nossa Missão
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <Card
          title="Design de Alta Qualidade"
          description="Criamos sites visualmente atraentes que capturam a essência do seu negócio."
        />
        <Card
          title="Performance Excepcional"
          description="Desenvolvemos páginas de alta performance que garantem uma experiência de usuário impecável."
        />
        <Card
          title="Foco em Conversão"
          description="Nossas landing pages são projetadas para converter visitantes em clientes."
        />
        <Card
          title="Compromisso com a Excelência"
          description="Apesar de estarmos no início da nossa trajetória, nos dedicamos a entregar soluções profissionais e personalizadas."
        />
      </div>
      <div className="mt-10 text-center text-lg font-medium text-white">
        Estamos aqui para fazer seu negócio decolar 🚀.
      </div>
    </div>
  )
}

function Card({ title, description }: CardProps) {
  return (
    <motion.div
      className="flex flex-col justify-center items-center max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-32 p-4"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={title}
    >
      <div className="text-center flex-grow">
        <h5 className="flex text-start mt-4 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="flex text-start font-normal text-base  text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
