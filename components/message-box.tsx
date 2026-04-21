"use client"

import { useState, useRef, useEffect } from "react"

const frases = [
  "Feliz cumpleaños, Negra. Espero que este ciclo compile sin errores.",
  "Programar es bien difícil. Te respeto por hacerlo.",
  "Espero que logres debuguear esas heridas que no te dejan ejecutar en paz.",
  "Espero que consigas tu vaca color vaca.",
  "Si te preguntas por qué hice esto: quería dejar un commit bonito en tu historial. Espero no haberlo roto.",
  "Eres inteligente y capaz. Cuando tu self-confidence esté en null, recuerda: yo tengo fe en tu algoritmo.",
  "Eres inteligente y capaz. Tu mejor feature eres tú. Cuando el sistema falle, recuerda: yo no tengo bugs en mi fe por ti.",
  "Sé que conmigo diste try-catch repetidos. No dejes de intentarlo en lo que sigue.",
  "No sé si tu código tiene errores de sintaxis o lógica. Solo sé que necesitas debuguearte sola. Y sé que lo lograrás.",
  "No te juzgo. No te critico. Solo te paso un console.log(\"creo en ti, sé que puedes\").",
  "Quiero que Nomar y tú sean felices, él en serio me agrada.",
  "No sé si esto es un break o un continue. El runtime lo dirá.",
  "No te odio. El perdón es una función asíncrona. No se resuelve de inmediato.",
  "Te quiero, pero rogar no es querer. Y quiero que ambos seamos felices.",
  "Tu lógica para resolver conflictos es compleja. Tal vez necesite un refactor. A veces actualizar el código ayuda a que todo funcione mejor.",
  "Tu forma de manejar problemas es como un script heredado. Funciona, pero con legacy bugs. Un buen update emocional te haría más feliz.",
  "Resuelves conflictos como si tuvieras callback hell. Depurar eso te ayudaría a vivir con menos errors y más success.",
  "while(!feliz) { mejorar(); Trabajar En Tu Mejor Version(); } sudo !!",
  "No se si te lo preguntas, pero no, no te odio. No guardo rencor. quiero que tu vida tenga más true que false.",
]

export function MessageBox() {
  const [message, setMessage] = useState("Presiona el boton para ver mensajes")
  const [isVisible, setIsVisible] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const usedPhrases = useRef<number[]>([])
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    return () => {
      audioContextRef.current?.close()
    }
  }, [])

  const playClickSound = () => {
    const ctx = audioContextRef.current
    if (!ctx) return

    // Resume if suspended (browser autoplay policy)
    if (ctx.state === "suspended") {
      ctx.resume()
    }

    // Magical sparkle/chime sound - multiple layered tones
    const notes = [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6 - magical arpeggio
    
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      
      osc.connect(gain)
      gain.connect(ctx.destination)
      
      osc.type = "sine"
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      
      const startTime = ctx.currentTime + i * 0.04
      const duration = 0.3 - i * 0.03
      
      gain.gain.setValueAtTime(0, startTime)
      gain.gain.linearRampToValueAtTime(0.12, startTime + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration)
      
      osc.start(startTime)
      osc.stop(startTime + duration)
    })

    // Add a soft shimmer/bell overtone
    const shimmer = ctx.createOscillator()
    const shimmerGain = ctx.createGain()
    shimmer.connect(shimmerGain)
    shimmerGain.connect(ctx.destination)
    
    shimmer.type = "triangle"
    shimmer.frequency.setValueAtTime(1567.98, ctx.currentTime) // G6
    shimmer.frequency.exponentialRampToValueAtTime(2093, ctx.currentTime + 0.15) // C7
    
    shimmerGain.gain.setValueAtTime(0.05, ctx.currentTime)
    shimmerGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25)
    
    shimmer.start(ctx.currentTime)
    shimmer.stop(ctx.currentTime + 0.25)
  }

  const showMessage = () => {
    playClickSound()
    if (usedPhrases.current.length >= frases.length) {
      usedPhrases.current = []
    }

    const availableIndices = frases
      .map((_, i) => i)
      .filter((i) => !usedPhrases.current.includes(i))

    const randomIndex = Math.floor(Math.random() * availableIndices.length)
    const selectedIndex = availableIndices[randomIndex]

    usedPhrases.current.push(selectedIndex)
    setClickCount((prev) => prev + 1)

    setIsVisible(false)
    setTimeout(() => {
      setMessage(frases[selectedIndex])
      setIsVisible(true)
    }, 200)
  }

  const progress = Math.min((clickCount / frases.length) * 100, 100)

  return (
    <>
      <div className={`message-box ${isVisible ? "show" : ""}`}>
        <p className="message-text animated-text">
          {message}
        </p>
      </div>

      <div className="button-container">
        <button className="surprise-btn" onClick={showMessage}>
          🎀 ejecutar 🖤
        </button>
      </div>

      <div className="click-counter">
        Frases reveladas: {clickCount} / {frases.length}
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </>
  )
}
