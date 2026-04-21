import { Stars } from "@/components/stars"
import { FloatingEmojis } from "@/components/floating-emojis"
import { Balloons } from "@/components/balloons"
import { BirthdayCake } from "@/components/birthday-cake"
import { MessageBox } from "@/components/message-box"
import "./birthday.css"

export default function BirthdayCard() {
  return (
    <div className="birthday-page">
      <Stars />
      <FloatingEmojis />
      <Balloons />

      <div className="main-container">
        <h1 className="title">
          <span className="sparkle">✨</span>
          {" Kuromi Te Desea Un Feliz Cumpleanos "}
          <span className="sparkle">✨</span>
        </h1>
        <h2 className="title-sub">
          <span>🎀</span>
          {" Nicole "}
          <span>🎀</span>
        </h2>

        <BirthdayCake />

        <MessageBox />
      </div>

      <div className="footer">
        Hecho con amor para Nicole <span className="heart">💜</span>
      </div>
    </div>
  )
}
