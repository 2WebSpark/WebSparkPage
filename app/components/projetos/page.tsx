import Image from 'next/image'
import Projeto from '@/app/assets/Projeto.png'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Projetos() {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-4xl font-bold text-[#7DFFAF] leading-tight">
          Meus projetos
        </h1>
        <p className="font-medium text-lg text-[#F5F6F6]">
          Alguns projetos desenvolvidos por mim
        </p>
      </div>
      <div className="flex gap-16">
        <Link href="https://coffe-delivery-mocha.vercel.app/">
          <motion.div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image className="rounded-t-lg" src={Projeto} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Coffe Delivery
              </h5>
            </div>
          </motion.div>
        </Link>
        <Link href="https://coffe-delivery-mocha.vercel.app/">
          <motion.div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image className="rounded-t-lg" src={Projeto} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Coffe Delivery
              </h5>
            </div>
          </motion.div>
        </Link>
        <Link href="https://coffe-delivery-mocha.vercel.app/">
          <motion.div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image className="rounded-t-lg" src={Projeto} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Coffe Delivery
              </h5>
            </div>
          </motion.div>
        </Link>
        <Link href="https://coffe-delivery-mocha.vercel.app/">
          <motion.div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              className="rounded-t-lg"
              src={Projeto}
              alt="Coffe Delivery Project"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Coffe Delivery
              </h5>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
