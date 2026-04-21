"use client"

import { useState, useEffect, createContext, useContext } from "react"

type SoundContextType = {
  soundEnabled: boolean
  toggleSound: () => void
  playPop: () => void
  playClick: () => void
}

const SoundContext = createContext<SoundContextType | null>(null)

export function useSoundContext() {
  const context = useContext(SoundContext)
  if (!context) {
    throw new Error("useSoundContext must be used within SoundProvider")
  }
  return context
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)

  useEffect(() => {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    setAudioContext(ctx)
    return () => {
      ctx.close()
    }
  }, [])

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled)
  }

  const playPop = () => {
    if (!soundEnabled || !audioContext) return
    
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1)
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.15)
  }

  const playClick = () => {
    if (!soundEnabled || !audioContext) return
    
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.type = "square"
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.05)
    
    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.08)
  }

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playPop, playClick }}>
      {children}
    </SoundContext.Provider>
  )
}

export function SoundToggle() {
  const { soundEnabled, toggleSound } = useSoundContext()

  return (
    <button
      onClick={toggleSound}
      className="sound-toggle"
      aria-label={soundEnabled ? "Silenciar" : "Activar sonido"}
    >
      {soundEnabled ? "🔊" : "🔇"}
    </button>
  )
}
