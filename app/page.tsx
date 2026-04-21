import { Stars } from "@/components/stars"
import { FloatingEmojis } from "@/components/floating-emojis"
import { Balloons } from "@/components/balloons"
import { Kuromi } from "@/components/kuromi"
import { MessageBox } from "@/components/message-box"
import "./birthday.css"

export default function BirthdayCard() {
  return (
    <div className="birthday-page">
      <Stars />
      <FloatingEmojis />
      <Balloons />

      <div className="main-container">
        <h1 className="title">Feliz Cumpleanos</h1>
        <h2 className="title-sub">Nicole</h2>

        <div className="decorations">
          <span>💀</span>
          <span>🖤</span>
          <span>🌙</span>
          <span>🎀</span>
          <span>🌟</span>
          <span>🦇</span>
        </div>

        <Kuromi />

        <div className="decorations">
          <span>🕸️</span>
          <span>💜</span>
          <span>🖤</span>
          <span>💜</span>
          <span>🕸️</span>
        </div>

        <MessageBox />
      </div>

      <div className="footer">Hecho con amor para Nicole</div>
    </div>
  )
}
