'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedGasPipe() {
  return (
    <div className="relative w-full h-full opacity-40">
      <Image
        src="/images/gas-pipeline.png"
        alt="Gas Pipeline"
        fill
        className="object-contain"
        style={{
          filter: 'drop-shadow(0 10px 20px rgba(0, 61, 122, 0.3))',
        }}
      />
      {/* Анимированный рычаг/вентиль - создаем вращающийся элемент поверх */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.4) 0%, rgba(255, 140, 0, 0.1) 100%)',
          boxShadow: '0 0 20px rgba(255, 140, 0, 0.3)',
        }}
        animate={{
          rotate: [0, 90, 180, 270, 360], // Полный оборот рычага
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Рычаг */}
        <div className="absolute top-1/2 left-1/2 w-12 h-1 bg-orange-500 opacity-60 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-1 h-12 bg-orange-500 opacity-60 transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Эффект потока газа - пульсирующие точки */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-2 h-2 rounded-full bg-orange-400"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.5, 1],
          y: [0, -100],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-orange-400"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.5, 1],
          y: [0, -100],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-3/4 left-1/2 w-2 h-2 rounded-full bg-orange-400"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.5, 1],
          y: [0, -100],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  )
}
