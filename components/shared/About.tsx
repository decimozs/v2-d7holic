// about component
'use client'

import { motion } from 'framer-motion'
import {
  animateAbout1,
  animateAbout2,
  animateAbout3,
  animateAbout4,
  containerVariants,
} from '../../animations'
import { Highlights } from '../ui'

const About: React.FunctionComponent = () => {
  const name = <Highlights label="Marlon Martin" />
  const swe = <Highlights label="software engineering" />
  const cp = <Highlights label="competitive programming" />
  const sp = <Highlights label="low level programming" />
  const ctosp = <Highlights label="contributing to open-source projects" />
  const github = (
    <Highlights
      label="GitHub"
      naviTo="useNavigate"
      link="https://github.com/decimozs"
    />
  )
  const email = (
    <Highlights
      label="email"
      naviTo="useNavigate"
      link="mailto:marlonadiguemartin548@gmail.com"
    />
  )
  const esports = <Highlights label="esports varsity player" />

  return (
    <div className="w-full max-w-mw flex flex-col mt-m2 gap-6">
      <motion.p
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={animateAbout1}
      >
        I am {name}, a student of computer studies residing in Manila,
        Philippines. At present, I am exploring the realm of {swe} and engaging
        in {cp}.
      </motion.p>

      <motion.p
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={animateAbout2}
      >
        I have a strong affinity for {sp}, and my current objective is to delve
        deeper into emerging technologies that can bring benefits to the wider
        community. Additionally, I am enthusiastic about {ctosp}.
      </motion.p>

      <motion.p
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={animateAbout3}
      >
        Apart from programming, I used to engage in a range of activities. Each
        morning, I would go for a 15-kilometer run, I enjoyed lifting weights as
        part of my fitness routine. In my leisure time, I would often play video
        games with my friends and would indulge in watching movies and TV
        series. And also I am an {esports} at our university.
      </motion.p>

      <motion.p
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={animateAbout4}
      >
        You can find my side and academic projects on my {github} repository.
        Please feel free to reach out to me via {email}, and I will make every
        effort to promptly respond to your inquiries and feedback.
      </motion.p>
    </div>
  )
}

export default About
