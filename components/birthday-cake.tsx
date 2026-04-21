"use client"

export function BirthdayCake() {
  return (
    <div className="cake-container">
      {/* Kuromi peeking behind cake */}
      <div className="kuromi-peeking">
        <div className="kuromi-head-peek">
          <div className="kuromi-ear-peek left">
            <div className="kuromi-ear-inner-peek" />
          </div>
          <div className="kuromi-ear-peek right">
            <div className="kuromi-ear-inner-peek" />
          </div>
          <div className="kuromi-skull-peek">
            <div className="kuromi-skull-eyes-peek">
              <div className="kuromi-skull-eye-peek" />
              <div className="kuromi-skull-eye-peek" />
            </div>
          </div>
          <div className="kuromi-face-peek">
            <div className="kuromi-eye-peek left">
              <div className="kuromi-eye-shine-peek" />
            </div>
            <div className="kuromi-eye-peek right">
              <div className="kuromi-eye-shine-peek" />
            </div>
            <div className="kuromi-blush-peek left" />
            <div className="kuromi-blush-peek right" />
            <div className="kuromi-mouth-peek" />
          </div>
        </div>
      </div>

      {/* Candles with numbers 2 and 0 */}
      <div className="candles">
        <div className="candle-wrapper">
          <div className="flame">
            <div className="flame-inner" />
          </div>
          <div className="candle-number">2</div>
        </div>
        <div className="candle-wrapper">
          <div className="flame">
            <div className="flame-inner" />
          </div>
          <div className="candle-number">0</div>
        </div>
      </div>

      {/* Cake tiers */}
      <div className="cake">
        {/* Top tier with decorations */}
        <div className="cake-tier tier-top">
          <div className="cake-decoration">
            <span className="skull-deco">💀</span>
            <span className="skull-deco">💀</span>
          </div>
        </div>
        
        {/* Middle tier */}
        <div className="cake-tier tier-middle">
          <div className="cake-stripe" />
        </div>
        
        {/* Bottom tier */}
        <div className="cake-tier tier-bottom">
          <div className="cake-base" />
        </div>
        
        {/* Cake plate */}
        <div className="cake-plate" />
      </div>
    </div>
  )
}
