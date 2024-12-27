import { DiPython, DiRedis } from "react-icons/di"
import { FaJava } from "react-icons/fa"
import {FaAws} from 'react-icons/fa'
import {BiLogoPostgresql} from 'react-icons/bi'
import { SiMysql } from "react-icons/si"
import { FaDocker } from "react-icons/fa"
import { SiKubernetes } from "react-icons/si"
import {RiReactjsLine} from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { FaGitAlt } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { SiTensorflow } from "react-icons/si"
import { FcLinux } from "react-icons/fc"
import { GrGraphQl } from "react-icons/gr"
import { SiPhp } from "react-icons/si"
import { motion } from "framer-motion"


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { 
        y: [10, -10],
        transition:{
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',

        }
    }
})

const Technologies = () => {
  return (
    <div className="container mx-auto border-b border-neutral-800 pb-24" id="technologies">
      <motion.h2 initial={{opacity:0, y: -100}} whileInView={{opacity:1, y:0}} transition={{duration: 1.5}} className="mb-12 mt-20 text-center text-4xl font-semibold">
        Skills
      </motion.h2>
      <motion.div initial={{opacity: 0, x:-100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <DiPython className="text-7xl text-black-200"/>
            <div className="mt-2 text-sm font-bold">Python</div>
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <FaJava className="text-7xl lg:text-7xl text-orange-400"/>
            <div className="mt-2 text-sm font-bold">Java</div>
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <FaAws className="text-7xl text-white-400"/>
            <div className="mt-2 text-sm font-bold">AWS</div>
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <BiLogoPostgresql className="text-7xl lg:text-7xl text-sky-700"/>
            <div className="mt-2 text-sm font-bold">PostgreSql</div>
        </motion.div>
        <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <SiMysql className="text-7xl text-blue-400"/>
            <div className="mt-2 text-sm font-bold">MySQL</div>
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <FaDocker className="text-7xl text-sky-400"/>
            <div className="mt-2 text-sm font-bold">Docker</div>
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <SiKubernetes className="text-7xl text-blue-600"/>
            <div className="mt-2 text-sm font-bold">Kubernetes</div>
        </motion.div>
        <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <FcLinux className="text-7xl"/>
            <div className="mt-2 text-sm font-bold">Linux</div>
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <GrGraphQl className="text-7xl text-pink-600"/>
            <div className="mt-2 text-sm font-bold">GraphQL</div>
        </motion.div>

        
      </motion.div>
      <motion.div initial={{opacity: 0, x:-100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4 py-3">
      <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <DiJavascript className="text-7xl text-yellow-400"/>
            <div className="mt-2 text-sm font-bold">JavaScript</div>
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
            <div className="mt-2 text-sm font-bold">ReactJS</div>
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <FaNodeJs className="text-7xl lg:text-7xl text-green-600"/>
            <div className="mt-2 text-sm font-bold">NodeJS</div>
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <TbBrandNextjs className="text-7xl lg:text-7xl text-white"/>
            <div className="mt-2 text-sm font-bold">NextJS</div>
        </motion.div>
        <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <SiMongodb className="text-7xl lg:text-7xl text-green-600"/>
            <div className="mt-2 text-sm font-bold">MongoDB</div>
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <DiRedis className="text-7xl text-red-700"/>
            <div className="mt-2 text-sm font-bold">Redis</div>
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <FaGitAlt className="text-7xl text-red-500"/>
            <div className="mt-2 text-sm font-bold">Git</div>
        </motion.div>
        <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <SiTensorflow className="text-7xl text-orange-600"/>
            <div className="mt-2 text-sm font-bold">TensorFlow</div>
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <SiPhp className="text-7xl text-blue-300"/>
            <div className="mt-2 text-sm font-bold">PHP</div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
