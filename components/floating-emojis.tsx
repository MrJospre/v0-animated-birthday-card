"use client"

import { useEffect, useRef } from "react"

const emojis = ["💀", "🖤", "🌙", "🎀", "🎁", "🦇", "💜", "✨", "🎂", "🧁", "💝", "🎀", "💀", "🌟", "🖤", "💜"]
const positions = [
  { left: "3%", top: "8%" },
  { left: "12%", top: "25%" },
  { left: "5%", top: "55%" },
  { left: "8%", top: "78%" },
  { left: "92%", top: "12%" },
  { left: "88%", top: "35%" },
  { left: "94%", top: "58%" },
  { left: "90%", top: "82%" },
  { left: "25%", top: "15%" },
  { left: "75%", top: "18%" },
  { left: "20%", top: "88%" },
  { left: "80%", top: "85%" },
  { left: "35%", top: "5%" },
  { left: "65%", top: "92%" },
  { left: "15%", top: "42%" },
  { left: "85%", top: "65%" },
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
