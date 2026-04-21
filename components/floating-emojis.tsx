"use client"

import { useEffect, useRef } from "react"

const emojis = ["💀", "🖤", "🌙", "🎀", "🌟", "🦇", "🕸️", "💜", "✨"]
const positions = [
  { left: "5%", top: "10%" },
  { left: "90%", top: "15%" },
  { left: "15%", top: "75%" },
  { left: "85%", top: "80%" },
  { left: "8%", top: "45%" },
  { left: "92%", top: "50%" },
  { left: "50%", top: "5%" },
  { left: "30%", top: "90%" },
  { left: "70%", top: "88%" },
]

export function FloatingEmojis() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    positions.forEach((pos, i) => {
      const emoji = document.createElement("div")
      emoji.className = "emoji"
      emoji.textContent = emojis[i % emojis.length]
      emoji.style.left = pos.left
      emoji.style.top = pos.top
      emoji.style.animationDelay = `${i * 0.5}s`
      container.appendChild(emoji)
    })

    return () => {
      container.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className="floating-emojis" />
}
