"use client"

import { useEffect, useState } from "react"

const bowPositions = [
  { left: "8%", top: "30%" },
  { left: "92%", top: "25%" },
  { left: "15%", top: "70%" },
  { left: "85%", top: "75%" },
]

export function FloatingBows() {
  const [visibleBows, setVisibleBows] = useState<number[]>([])

  useEffect(() => {
    const showBow = (index: number) => {
      setVisibleBows((prev) => [...prev, index])
      setTimeout(() => {
        setVisibleBows((prev) => prev.filter((i) => i !== index))
      }, 3000)
    }

    const intervals = bowPositions.map((_, index) => {
      return setInterval(() => {
        showBow(index)
      }, 5000 + index * 1500)
    })

    // Show initial bows staggered
    bowPositions.forEach((_, index) => {
      setTimeout(() => showBow(index), index * 800)
    })

    return () => {
      intervals.forEach(clearInterval)
    }
  }, [])

  return (
    <div className="floating-bows-container">
      {bowPositions.map((pos, index) => (
        <div
          key={index}
          className={`floating-bow ${visibleBows.includes(index) ? "visible" : ""}`}
          style={{ left: pos.left, top: pos.top }}
        >
          🎀
        </div>
      ))}
    </div>
  )
}
