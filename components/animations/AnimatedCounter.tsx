'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

interface AnimatedCounterProps {
  end: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2.5,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = '',
}: AnimatedCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return (
    <div ref={ref} className={className}>
      {hasAnimated ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          decimals={decimals}
          suffix={suffix}
          prefix={prefix}
        />
      ) : (
        <span>0{suffix}</span>
      )}
    </div>
  )
}
