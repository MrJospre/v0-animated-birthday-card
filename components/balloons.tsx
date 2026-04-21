"use client"

import { useEffect, useRef } from "react"

export function Balloons() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const colors = ["purple", "black", "white", "pink"]

    function createBalloon() {
      if (!container) return

      const balloon = document.createElement("div")
      balloon.className = `balloon ${colors[Math.floor(Math.random() * colors.length)]}`
      balloon.style.left = `${Math.random() * 90 + 5}%`
      const width = Math.random() * 30 + 40
      balloon.style.width = `${width}px`
      balloon.style.height = `${width * 1.2}px`
      balloon.style.animationDuration = `${Math.random() * 5 + 8}s`

      container.appendChild(balloon)

      setTimeout(() => {
        if (balloon.parentNode) {
          balloon.parentNode.removeChild(balloon)
        }
      }, 15000)
    }

    // Create initial balloons
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createBalloon(), i * 1000)
    }

    // Create new balloons periodically
    const interval = setInterval(createBalloon, 2000)

    return () => {
      clearInterval(interval)
      container.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className="balloons-container" />
}
