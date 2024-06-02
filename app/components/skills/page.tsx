import { FaHtml5, FaReact, FaFigma } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTypescript, SiNextdotjs } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-4xl font-bold text-[#7DFFAF] leading-tight">
          Minhas skills
        </h1>
        <p className="font-medium text-lg text-[#F5F6F6]">
          Algumas das tecnologias que utilizo
        </p>
      </div>
      <div className="flex gap-24">
        <motion.div
          className="flex flex-col justify-center items-center gap-2 text-[#F5F6F6] hover:text-[#7DFFAF]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaHtml5 className=" w-9 h-9" />
          <p className="font-bold text-base">HTML5</p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center gap-2 text-[#F5F6F6] hover:text-[#7DFFAF]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoLogoCss3 className=" w-9 h-9" />
          <p className="font-bold text-base">CSS3</p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center gap-2 text-[#F5F6F6] hover:text-[#7DFFAF]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoLogoJavascript className=" w-9 h-9" />
          <p className="font-bold text-base">JAVASCRIPT</p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center gap-2 text-[#F5F6F6] hover:text-[#7DFFAF]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SiTypescript className=" w-9 h-9" />
          <p className="font-bold text-base">TYPESCRIPT</p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center gap-2 text-[#F5F6F6] hover:text-[#7DFFAF]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SiNextdotjs className=" w-9 h-9" />
          <p className="font-bold text-base">NEXTJS</p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center gap-2 text-[#F5F6F6] hover:text-[#7DFFAF]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaReact className=" w-9 h-9" />
          <p className="font-bold text-base">REACTJS</p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center gap-2 text-[#F5F6F6] hover:text-[#7DFFAF]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RiTailwindCssFill className=" w-9 h-9" />
          <p className="font-bold text-base">TAILWINDCSS</p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center gap-2 text-[#F5F6F6] hover:text-[#7DFFAF]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFigma className=" w-9 h-9" />
          <p className="font-bold text-base">FIGMA</p>
        </motion.div>
      </div>
    </div>
  )
}
