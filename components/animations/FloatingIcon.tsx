'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingIconProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function FloatingIcon({
  children,
  delay = 0,
  className = '',
}: FloatingIconProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
