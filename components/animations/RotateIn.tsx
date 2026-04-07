'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RotateInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function RotateIn({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
}: RotateInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        rotate: -180,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.34, 1.56, 0.64, 1], // spring-like easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
