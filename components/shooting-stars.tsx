"use client"

import { useEffect, useRef } from "react"

export function ShootingStars() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function createShootingStar() {
      if (!container) return

      const star = document.createElement("div")
      star.className = "shooting-star"
      
      // Random starting position
      star.style.top = `${Math.random() * 40}%`
      star.style.left = `${Math.random() * 30 + 70}%`
      
      container.appendChild(star)

      // Remove after animation
      setTimeout(() => {
        if (star.parentNode) {
          star.parentNode.removeChild(star)
        }
      }, 1500)
    }

    // Create shooting star every 8-10 seconds
    const interval = setInterval(() => {
      createShootingStar()
    }, 8000 + Math.random() * 2000)

    return () => {
      clearInterval(interval)
      container.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className="shooting-stars-container" />
}
