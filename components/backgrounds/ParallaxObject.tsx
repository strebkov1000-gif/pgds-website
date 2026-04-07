'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ParallaxObjectProps {
  children: ReactNode
  speed?: number // Multiplier for scroll speed (0.3 = slower, 1 = same speed, 2 = faster)
  direction?: 'up' | 'down' // Direction of movement
  className?: string
  offsetY?: number // Initial Y offset
}

export default function ParallaxObject({
  children,
  speed = 0.5,
  direction = 'down',
  className = '',
  offsetY = 0,
}: ParallaxObjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Calculate movement range based on speed
  const range = 300 * speed
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'down' ? [-range + offsetY, range + offsetY] : [range + offsetY, -range + offsetY]
  )

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
