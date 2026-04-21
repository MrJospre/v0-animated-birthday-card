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

      const balloonWrapper = document.createElement("div")
      balloonWrapper.className = "balloon-wrapper"
      balloonWrapper.style.left = `${Math.random() * 90 + 5}%`
      balloonWrapper.style.animationDuration = `${Math.random() * 5 + 8}s`

      const balloon = document.createElement("div")
      const color = colors[Math.floor(Math.random() * colors.length)]
      balloon.className = `balloon ${color}`
      const width = Math.random() * 25 + 35
      balloon.style.width = `${width}px`
      balloon.style.height = `${width * 1.2}px`

      // Balloon knot
      const knot = document.createElement("div")
      knot.className = `balloon-knot ${color}`

      // Balloon string
      const string = document.createElement("div")
      string.className = "balloon-string"
      const stringHeight = Math.random() * 40 + 60
      string.style.height = `${stringHeight}px`

      balloonWrapper.appendChild(balloon)
      balloonWrapper.appendChild(knot)
      balloonWrapper.appendChild(string)
      container.appendChild(balloonWrapper)

      setTimeout(() => {
        if (balloonWrapper.parentNode) {
          balloonWrapper.parentNode.removeChild(balloonWrapper)
        }
      }, 15000)
    }

    // Create initial balloons
    for (let i = 0; i < 6; i++) {
      setTimeout(() => createBalloon(), i * 800)
    }

    // Create new balloons periodically
    const interval = setInterval(createBalloon, 2500)

    return () => {
      clearInterval(interval)
      container.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className="balloons-container" />
}
