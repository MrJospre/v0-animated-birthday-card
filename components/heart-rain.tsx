"use client"

import { useEffect, useRef } from "react"

export function HeartRain() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const hearts = ["🖤", "💗", "💜", "🎀"]

    function createHeart() {
      if (!container) return

      const heart = document.createElement("div")
      heart.className = "falling-heart"
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)]
      heart.style.left = `${Math.random() * 100}%`
      heart.style.animationDuration = `${Math.random() * 5 + 8}s`
      heart.style.fontSize = `${Math.random() * 10 + 12}px`
      heart.style.opacity = `${Math.random() * 0.3 + 0.2}`
      
      container.appendChild(heart)

      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart)
        }
      }, 15000)
    }

    // Create initial hearts
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createHeart(), i * 500)
    }

    // Create hearts continuously
    const interval = setInterval(createHeart, 1500)

    return () => {
      clearInterval(interval)
      container.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className="heart-rain-container" />
}
