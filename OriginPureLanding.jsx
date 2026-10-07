import React, { useState } from 'react';
import { UserPlus, Eye, CheckSquare, Instagram, ArrowRight } from 'lucide-react';

/**
 * Origin Pure "Launching Soon" Landing Page Component
 * Refreshed luxury visual direction:
 * - Brand: ORIGIN PURE ™ — Wellness & Natural
 * - Modern typography pairing: Playfair Display (Headline) + Plus Jakarta Sans (All UI/Body)
 * - Clean minimal vector SVG logo mark (Tea leaf + golden purity dewdrop badge)
 * - 3-step interactive glassmorphism cards for eligibility
 * - Floating hero teacup with soft pulsing ground shadow & rising steam
 * - High-contrast CTA with Instagram icon and glow aura
 * - 3 Switchable luxury color palettes (Forest & Gold, Kyoto Matcha, Midnight Pine)
 */
export default function OriginPureLanding({
  logoSrc = "assets/logo-emblem.png",
  heroCupSrc = "assets/hero-cup-isolated.png", // SWAP HERO IMAGE HERE
  instagramUrl = "https://instagram.com/originpure.in", // SWAP INSTAGRAM LINK HERE
  initialTheme = "forest" // Options: "forest" | "matcha" | "midnight"
}) {
  const [theme, setTheme] = useState(initialTheme);

  // Theme configuration definitions
  const themes = {
    forest: {
      name: "Forest",
      color: "#143A24",
      bgClass: "bg-[#EFECE4]",
      cardBg: "linear-gradient(180deg, #FCFBF7 0%, #F8F5EE 50%, #F1ECE0 100%)",
      primaryText: "#0D2B1D",
      mutedText: "#4B6356",
      accentGold: "#C59E47",
      btnGrad: "linear-gradient(135deg, #163E2B 0%, #0B2418 100%)",
      btnText: "#FFFFFF",
      btnGlow: "rgba(197, 158, 71, 0.35)",
      stepCardBg: "rgba(255, 255, 255, 0.78)",
      stepCardBorder: "rgba(13, 43, 29, 0.09)",
      stepIconBg: "#EBF3E8",
      stepIconColor: "#19442F",
      badgeBg: "#EAE6D8"
    },
    matcha: {
      name: "Matcha",
      color: "#5E9447",
      bgClass: "bg-[#E7EFE6]",
      cardBg: "linear-gradient(180deg, #FBFCFA 0%, #F4F8F3 50%, #E9F1E7 100%)",
      primaryText: "#163B26",
      mutedText: "#3F5B4B",
      accentGold: "#5E9447",
      btnGrad: "linear-gradient(135deg, #245A39 0%, #133923 100%)",
      btnText: "#FFFFFF",
      btnGlow: "rgba(94, 148, 71, 0.4)",
      stepCardBg: "rgba(255, 255, 255, 0.85)",
      stepCardBorder: "rgba(22, 59, 38, 0.1)",
      stepIconBg: "#E3F0DE",
      stepIconColor: "#1F4C2F",
      badgeBg: "#E3EDE0"
    },
    midnight: {
      name: "Midnight",
      color: "#D8B257",
      bgClass: "bg-[#060E0A]",
      cardBg: "linear-gradient(180deg, #112119 0%, #0D1A14 55%, #08120D 100%)",
      primaryText: "#F5F2EB",
      mutedText: "#A1B6A9",
      accentGold: "#D8B257",
      btnGrad: "linear-gradient(135deg, #D8B257 0%, #B58F33 100%)",
      btnText: "#0B1912",
      btnGlow: "rgba(216, 178, 87, 0.45)",
      stepCardBg: "rgba(19, 36, 28, 0.75)",
      stepCardBorder: "rgba(216, 178, 87, 0.18)",
      stepIconBg: "rgba(216, 178, 87, 0.15)",
      stepIconColor: "#F2D37E",
      badgeBg: "rgba(216, 178, 87, 0.2)"
    }
  };

  const current = themes[theme] || themes.forest;

  return (
    <div className={`min-h-screen w-full ${current.bgClass} flex justify-center items-start sm:items-center p-0 sm:p-8 font-sans antialiased transition-colors duration-400`}>
      
      {/* Client Palette Switcher Widget */}
      <aside className="fixed top-4 right-4 z-50 bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full p-1.5 flex items-center gap-1.5 shadow-lg text-xs">
        <span className="hidden sm:inline px-2 text-[10px] uppercase font-bold tracking-wider opacity-60">Palette:</span>
        {Object.entries(themes).map(([key, item]) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              theme === key 
                ? 'bg-emerald-950 text-white shadow-sm' 
                : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
            }`}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            {item.name}
          </button>
        ))}
      </aside>

      {/* Main 9:16 Canvas Card Container */}
      <main 
        className="w-full max-w-[500px] min-h-screen sm:min-h-auto relative overflow-hidden flex flex-col px-6 sm:px-8 py-10 sm:py-12 sm:rounded-[32px] sm:shadow-[0_30px_70px_-15px_rgba(13,43,29,0.16)] transition-all duration-400"
        style={{ background: current.cardBg, color: current.primaryText }}
      >
        {/* ===================================================================
            AMBIENT BACKGROUND LAYER (Vector Sunlight & Organic Leaves)
            =================================================================== */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-[10%] -left-[20%] w-[140%] h-[220px] opacity-25 filter blur-[28px] -rotate-[25deg] bg-gradient-to-br from-white/60 to-transparent" />
          <div className="absolute top-[45%] -left-[25%] w-[150%] h-[200px] opacity-25 filter blur-[28px] -rotate-[25deg] bg-gradient-to-br from-white/60 to-transparent" />
        </div>

        {/* Content Flow Layer */}
        <div className="relative z-10 w-full flex flex-col items-center">

          {/* 1. BRAND HEADER & EMBLEM LOGO */}
          <header className="flex flex-col items-center text-center mb-6">
            <div className="w-[105px] h-[105px] mb-3 transition-transform hover:scale-105">
              {/* Client's official emblem logo */}
              <img src={logoSrc} alt="Origin Pure Emblem" className="w-full h-full object-contain drop-shadow-md" />
            </div>

            <h1 className="text-2xl font-bold tracking-[0.22em] uppercase leading-none" style={{ color: current.primaryText }}>
              ORIGIN PURE<span className="text-[10px] align-super ml-0.5" style={{ color: current.accentGold }}>™</span>
            </h1>

            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase mt-1.5 flex items-center gap-2" style={{ color: current.mutedText }}>
              <span className="w-3.5 h-[1px] opacity-60" style={{ backgroundColor: current.accentGold }} />
              Wellness &amp; Natural
              <span className="w-3.5 h-[1px] opacity-60" style={{ backgroundColor: current.accentGold }} />
            </p>
          </header>

          {/* 2. HEADLINE SECTION */}
          <section className="flex flex-col items-center text-center mb-4 w-full">
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 border backdrop-blur-md"
              style={{ 
                backgroundColor: current.badgeBg,
                borderColor: current.stepCardBorder,
                color: current.primaryText 
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: current.accentGold }} />
              Hey Green Tea Lovers
            </div>

            <p className="font-serif italic text-2xl font-medium mb-0.5" style={{ color: current.mutedText }}>
              We Are
            </p>

            <h2 className="font-serif font-bold text-4xl sm:text-[42px] tracking-tight leading-tight mb-3" style={{ color: current.primaryText }}>
              Launching Soon
            </h2>

            <p className="text-[15px] font-medium leading-relaxed max-w-[360px]" style={{ color: current.mutedText }}>
              Follow our page &amp; win a box of Premium Green Tea
            </p>
          </section>

          {/* 3. HERO FLOATING TEACUP VISUAL */}
          <div className="relative w-full max-w-[340px] my-2 flex flex-col items-center justify-center">
            {/* Ambient Radial Halo */}
            <div 
              className="absolute w-[240px] h-[240px] rounded-full filter blur-[32px] pointer-events-none opacity-40"
              style={{ background: current.accentGold }}
            />

            {/* Floating Container */}
            <div className="relative z-10 w-full flex flex-col items-center animate-bounce [animation-duration:5s]">
              {/* Teacup Isolated Shot */}
              <img 
                src={heroCupSrc} 
                alt="Origin Pure Premium Green Tea brewed in a transparent glass cup" 
                className="w-[88%] h-auto object-contain drop-shadow-xl"
              />

              {/* Ambient Floor Shadow */}
              <div 
                className="w-[60%] h-4 -mt-2 rounded-full filter blur-[5px] opacity-40"
                style={{ backgroundColor: current.primaryText }}
              />
            </div>
          </div>

          {/* 4. "HOW TO BE ELIGIBLE" (3 STEP CARDS) */}
          <section className="w-full mt-3 flex flex-col items-center" aria-labelledby="eligible-heading-react">
            <div className="flex items-center justify-center gap-3 w-full mb-4">
              <span className="flex-1 h-[1px] opacity-25" style={{ backgroundColor: current.accentGold }} />
              <h3 id="eligible-heading-react" className="font-serif font-semibold text-lg" style={{ color: current.primaryText }}>
                How to be eligible
              </h3>
              <span className="flex-1 h-[1px] opacity-25" style={{ backgroundColor: current.accentGold }} />
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              {/* Step 1 */}
              <div 
                className="p-3.5 px-4 rounded-[18px] flex items-center gap-3.5 border backdrop-blur-md shadow-sm transition-all hover:-translate-y-0.5"
                style={{ 
                  backgroundColor: current.stepCardBg,
                  borderColor: current.stepCardBorder
                }}
              >
                <span className="text-[11px] font-bold px-2 py-1 rounded-md" style={{ backgroundColor: current.badgeBg, color: current.primaryText }}>
                  01
                </span>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: current.stepIconBg, color: current.stepIconColor }}>
                  <UserPlus className="w-4.5 h-4.5" />
                </div>
                <p className="text-sm font-medium text-left leading-snug">
                  Follow us <strong style={{ color: current.primaryText }}>@originpure.in</strong>
                </p>
              </div>

              {/* Step 2 */}
              <div 
                className="p-3.5 px-4 rounded-[18px] flex items-center gap-3.5 border backdrop-blur-md shadow-sm transition-all hover:-translate-y-0.5"
                style={{ 
                  backgroundColor: current.stepCardBg,
                  borderColor: current.stepCardBorder
                }}
              >
                <span className="text-[11px] font-bold px-2 py-1 rounded-md" style={{ backgroundColor: current.badgeBg, color: current.primaryText }}>
                  02
                </span>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: current.stepIconBg, color: current.stepIconColor }}>
                  <Eye className="w-4.5 h-4.5" />
                </div>
                <p className="text-sm font-medium text-left leading-snug">
                  Watch our page closely for the launch announcement
                </p>
              </div>

              {/* Step 3 */}
              <div 
                className="p-3.5 px-4 rounded-[18px] flex items-center gap-3.5 border backdrop-blur-md shadow-sm transition-all hover:-translate-y-0.5"
                style={{ 
                  backgroundColor: current.stepCardBg,
                  borderColor: current.stepCardBorder
                }}
              >
                <span className="text-[11px] font-bold px-2 py-1 rounded-md" style={{ backgroundColor: current.badgeBg, color: current.primaryText }}>
                  03
                </span>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: current.stepIconBg, color: current.stepIconColor }}>
                  <CheckSquare className="w-4.5 h-4.5" />
                </div>
                <p className="text-sm font-medium text-left leading-snug">
                  Participate as per the instructions in the launch post
                </p>
              </div>
            </div>
          </section>

          {/* 5. MAIN CTA BUTTON */}
          <footer className="w-full mt-6 flex flex-col items-center">
            {/* SWAP INSTAGRAM LINK HERE */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[380px] min-h-[56px] py-4 px-7 rounded-full flex items-center justify-center gap-3 text-base font-semibold shadow-lg hover:-translate-y-0.5 transition-all group"
              style={{
                background: current.btnGrad,
                color: current.btnText,
                boxShadow: `0 12px 28px -6px ${current.btnGlow}`
              }}
            >
              <Instagram className="w-5 h-5 shrink-0" />
              <span>Follow us @originpure.in</span>
              <ArrowRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-1" />
            </a>

            <p className="mt-2 text-xs tracking-wide opacity-75" style={{ color: current.mutedText }}>
              Join the circle of natural wellness
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
}
