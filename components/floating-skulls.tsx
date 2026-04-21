"use client"

const skullPositions = [
  { left: "25%", top: "45%" },
  { left: "75%", top: "48%" },
  { left: "35%", top: "52%" },
  { left: "65%", top: "42%" },
]

export function FloatingSkulls() {
  return (
    <div className="floating-skulls-container">
      {skullPositions.map((pos, index) => (
        <div
          key={index}
          className="floating-skull"
          style={{ 
            left: pos.left, 
            top: pos.top,
            animationDelay: `${index * 0.5}s`
          }}
        >
          💀
        </div>
      ))}
    </div>
  )
}
