"use client"

import { useState, useRef } from "react"

const frases = [
  "Feliz cumpleanos, Nicole. Espero que lo estes disfrutando.",
  "Programar es bien dificil. Te respeto por hacerlo.",
  "No te odio ni te guardo rencor. Quiero que seas feliz.",
  "Espero que sanes esas heridas que no te dejan ser plena.",
  "Si te preguntas por que hice esto: queria dejar un buen recuerdo de tu cumple. Espero haberlo logrado.",
  "Si algun dia nos toca vernos de nuevo, espero que hayas mejorado eso que hasta a ti te molesta.",
  "No se si esto es el final o una pausa para despues. Habra que descubrirlo.",
  "Eres muy inteligente y capaz. Sigue asi.",
  "Se que hiciste un esfuerzo conmigo. No dejes de esforzarte en lo que sigue.",
  "No se si eres mala persona o alguien rota. Solo se que necesitas sanar. Y solo tu puedes ayudarte.",
  "No te juzgo, no te critico. Solo quiero alentarte a ser mejor.",
  "Aunque te quiero, no voy a rogar. Si quisieras estar, estarias.",
  "No confundas mi carino con debilidad.",
  "Seguire adelante. Si vuelves, no te vere como extrana.",
  "No creo que nos faltara afecto. Solo nuestras heridas decidieron.",
  "No se si quieras mantenerme como opcion. No pasara.",
  "Bienvenida a los 20. Pronto te diran abuela.",
  "Quiero que Nomar y tu sean felices.",
  "Espero que consigas tu vaca color vaca.",
  "No te odio. Pero no se si pueda perdonar facilmente.",
  "Si un dia estas lista para un hombre como yo, ya sabes. Pero no esperare.",
]

export function MessageBox() {
  const [message, setMessage] = useState("Haz clic en el boton para ver un mensaje especial")
  const [isVisible, setIsVisible] = useState(false)
  const usedPhrases = useRef<number[]>([])

  const showMessage = () => {
    if (usedPhrases.current.length >= frases.length) {
      usedPhrases.current = []
    }

    const availableIndices = frases
      .map((_, i) => i)
      .filter((i) => !usedPhrases.current.includes(i))

    const randomIndex = Math.floor(Math.random() * availableIndices.length)
    const selectedIndex = availableIndices[randomIndex]

    usedPhrases.current.push(selectedIndex)

    setIsVisible(false)
    setTimeout(() => {
      setMessage(frases[selectedIndex])
      setIsVisible(true)
    }, 200)
  }

  return (
    <>
      <div className="button-container">
        <button className="surprise-btn" onClick={showMessage}>
          Sorpresa
        </button>
      </div>

      <div className={`message-box ${isVisible ? "show" : ""}`}>
        <p className="message-text">{message}</p>
      </div>
    </>
  )
}
