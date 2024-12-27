import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"


const Experience = () => {
  return (
    <div className="mx-auto max-w-3xl p-4" id='experience'>
      <motion.h2 initial={{opacity: 0, y: -100}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5}} className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1}} className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400 font-bold">{experience.year}</p>
                </motion.div>
                <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity:1, x: 0}} transition={{duration: 1}} className="w-full max-w-3xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
                    </h6>
                    <p className="mb-4 text-neutral-400">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology, index) => (
                          <span className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 inline-flex" key={index}>
                            {technology}
                          </span>
                      ))}
                    </div>
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
