"use client"

import { useEffect, useRef } from "react"

export function Stars() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const numStars = 100

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div")
      star.className = "star"
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      const size = `${Math.random() * 3 + 1}px`
      star.style.width = size
      star.style.height = size
      star.style.animationDelay = `${Math.random() * 3}s`
      star.style.animationDuration = `${Math.random() * 2 + 2}s`
      container.appendChild(star)
    }

    return () => {
      container.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className="stars-container" />
}
