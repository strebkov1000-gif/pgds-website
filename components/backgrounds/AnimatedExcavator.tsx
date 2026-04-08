'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedExcavator() {
  return (
    <div className="relative w-full h-full opacity-40">
      <Image
        src="/images/excavator.png"
        alt="Excavator"
        fill
        className="object-contain"
        style={{
          filter: 'drop-shadow(0 10px 20px rgba(0, 61, 122, 0.3))',
        }}
      />
      {/* Анимация ковша - создаем эффект движения через transform origin */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3"
        style={{ transformOrigin: '30% 70%' }}
        animate={{
          rotate: [0, -8, 0, -5, 0], // Движение ковша
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
    </div>
  )
}
