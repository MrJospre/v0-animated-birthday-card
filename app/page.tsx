import { Stars } from "@/components/stars"
import { FloatingEmojis } from "@/components/floating-emojis"
import { Balloons } from "@/components/balloons"
import { BirthdayCake } from "@/components/birthday-cake"
import { MessageBox } from "@/components/message-box"
import { ShootingStars } from "@/components/shooting-stars"
import { HeartRain } from "@/components/heart-rain"
import { PawPrints } from "@/components/paw-prints"
import { FloatingBows } from "@/components/floating-bows"
import { FloatingSkulls } from "@/components/floating-skulls"
import "./birthday.css"

export default function BirthdayCard() {
  return (
    <div className="birthday-page">
      <Stars />
      <ShootingStars />
      <FloatingEmojis />
      <Balloons />
      <HeartRain />
      <FloatingBows />
      <PawPrints />

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

        <div className="cake-with-skulls">
          <FloatingSkulls />
          <BirthdayCake />
        </div>

        <MessageBox />
      </div>

      <div className="footer">
        Hecho con amor para Nicole <span className="heart">💜</span>
      </div>
    </div>
  )
}
