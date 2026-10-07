import React from 'react';
import { UserPlus, Eye, FileText, ChevronRight } from 'lucide-react';

/**
 * Origin Pure "Coming Soon / Launch Teaser" Landing Page Component
 * Fully responsive, pure CSS/SVG background, zero ghost text, anchored sprout,
 * single CTA button in normal flow.
 */
export default function OriginPureLanding({
  logoSrc = "assets/logo-emblem-150.png",
  heroCupSrc = "assets/hero-cup-isolated.png",
  instagramUrl = "https://instagram.com/originpure.in"
}) {
  return (
    <div className="min-h-screen w-full bg-[#E6E2D6] flex justify-center items-start sm:items-center sm:p-10 font-serif text-[#1E2D2B] antialiased">
      
      {/* 9:16 Responsive Card Container */}
      <main 
        className="w-full max-w-[480px] min-h-screen sm:min-h-auto relative overflow-hidden flex flex-col px-6 py-12 sm:rounded-[28px] sm:shadow-[0_25px_60px_-15px_rgba(31,66,16,0.18),0_0_0_1px_rgba(107,138,90,0.15)]"
        style={{
          background: 'linear-gradient(180deg, #FBFAF6 0%, #F7F5EF 50%, #F1EEE4 100%)'
        }}
      >

        {/* ===================================================================
            BACKGROUND LAYER (Pure CSS Sunlight Streaks & Inline SVG Leaves)
            z-index: 0 | Zero screenshot images | Zero ghost text
        =================================================================== */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          
          {/* Sunlight Streaks */}
          <div 
            className="absolute -top-[10%] -left-[20%] w-[140%] h-[200px] pointer-events-none opacity-35 filter blur-[30px] -rotate-[20deg]"
            style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 65%)' }}
          />
          <div 
            className="absolute top-[32%] -left-[25%] w-[150%] h-[220px] pointer-events-none opacity-35 filter blur-[30px] -rotate-[20deg]"
            style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 65%)' }}
          />
          <div 
            className="absolute bottom-[8%] -left-[20%] w-[140%] h-[180px] pointer-events-none opacity-30 filter blur-[30px] -rotate-[20deg]"
            style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 65%)' }}
          />

          {/* Top-Left Corner Leaf (Inline SVG) */}
          <div className="absolute -top-[35px] -left-[35px] w-[210px] h-[210px] pointer-events-none filter blur-[7px] opacity-85 animate-[leafSwayA_9s_ease-in-out_infinite_alternate] origin-top-left">
            <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="leafGradTL1_r" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5E8F2A" />
                  <stop offset="60%" stopColor="#4E7F2A" />
                  <stop offset="100%" stopColor="#2F5E1A" />
                </linearGradient>
                <linearGradient id="leafGradTL2_r" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#72AF31" />
                  <stop offset="50%" stopColor="#4E7F2A" />
                  <stop offset="100%" stopColor="#1F4210" />
                </linearGradient>
              </defs>
              <path d="M 0 0 C 40 20 90 70 115 130 C 80 120 30 75 0 0 Z" fill="url(#leafGradTL1_r)" opacity="0.95" />
              <path d="M 0 0 Q 60 70 115 130" stroke="#7CB83E" strokeWidth="1.8" opacity="0.4" />
              <path d="M 15 -10 C 60 5 125 45 145 95 C 105 85 55 50 15 -10 Z" fill="url(#leafGradTL2_r)" opacity="0.9" />
              <path d="M -10 35 C 25 50 65 95 75 140 C 45 120 15 80 -10 35 Z" fill="url(#leafGradTL1_r)" opacity="0.85" />
            </svg>
          </div>

          {/* Top-Right Corner Leaf (Inline SVG) */}
          <div className="absolute -top-[35px] -right-[35px] w-[210px] h-[210px] pointer-events-none filter blur-[7px] opacity-85 animate-[leafSwayB_9s_ease-in-out_infinite_alternate] origin-top-right">
            <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="leafGradTR1_r" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#629A2B" />
                  <stop offset="55%" stopColor="#4E7F2A" />
                  <stop offset="100%" stopColor="#2F5E1A" />
                </linearGradient>
                <linearGradient id="leafGradTR2_r" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#80BE35" />
                  <stop offset="60%" stopColor="#4E7F2A" />
                  <stop offset="100%" stopColor="#1F4210" />
                </linearGradient>
              </defs>
              <path d="M 160 0 C 120 20 70 70 45 130 C 80 120 130 75 160 0 Z" fill="url(#leafGradTR1_r)" opacity="0.95" />
              <path d="M 160 0 Q 100 70 45 130" stroke="#89C942" strokeWidth="1.8" opacity="0.4" />
              <path d="M 145 -10 C 100 5 35 45 15 95 C 55 85 105 50 145 -10 Z" fill="url(#leafGradTR2_r)" opacity="0.9" />
              <path d="M 170 35 C 135 50 95 95 85 140 C 115 120 145 80 170 35 Z" fill="url(#leafGradTR1_r)" opacity="0.85" />
            </svg>
          </div>

          {/* Bottom-Left Corner Leaf (Inline SVG) */}
          <div className="absolute -bottom-[40px] -left-[40px] w-[220px] h-[220px] pointer-events-none filter blur-[7px] opacity-85 animate-[leafSwayB_9s_ease-in-out_infinite_alternate] origin-bottom-left">
            <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="leafGradBL1_r" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1F4210" />
                  <stop offset="50%" stopColor="#4E7F2A" />
                  <stop offset="100%" stopColor="#5E8F2A" />
                </linearGradient>
                <linearGradient id="leafGradBL2_r" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2F5E1A" />
                  <stop offset="60%" stopColor="#4E7F2A" />
                  <stop offset="100%" stopColor="#76B533" />
                </linearGradient>
              </defs>
              <path d="M 0 160 C 40 140 90 90 115 30 C 80 40 30 85 0 160 Z" fill="url(#leafGradBL1_r)" opacity="0.95" />
              <path d="M 0 160 Q 60 90 115 30" stroke="#7CB83E" strokeWidth="1.8" opacity="0.35" />
              <path d="M 15 170 C 60 155 125 115 145 65 C 105 75 55 110 15 170 Z" fill="url(#leafGradBL2_r)" opacity="0.9" />
            </svg>
          </div>

          {/* Bottom-Right Corner Leaf (Inline SVG) */}
          <div className="absolute -bottom-[40px] -right-[40px] w-[220px] h-[220px] pointer-events-none filter blur-[7px] opacity-85 animate-[leafSwayA_9s_ease-in-out_infinite_alternate] origin-bottom-right">
            <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="leafGradBR1_r" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#1F4210" />
                  <stop offset="50%" stopColor="#4E7F2A" />
                  <stop offset="100%" stopColor="#629A2B" />
                </linearGradient>
                <linearGradient id="leafGradBR2_r" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2F5E1A" />
                  <stop offset="60%" stopColor="#4E7F2A" />
                  <stop offset="100%" stopColor="#7AB935" />
                </linearGradient>
              </defs>
              <path d="M 160 160 C 120 140 70 90 45 30 C 80 40 130 85 160 160 Z" fill="url(#leafGradBR1_r)" opacity="0.95" />
              <path d="M 160 160 Q 100 90 45 30" stroke="#89C942" strokeWidth="1.8" opacity="0.35" />
              <path d="M 145 170 C 100 155 35 115 15 65 C 55 75 105 110 145 170 Z" fill="url(#leafGradBR2_r)" opacity="0.9" />
            </svg>
          </div>
        </div>

        {/* ===================================================================
            SECTION 1: LOGO (z-index: 10)
        =================================================================== */}
        <header className="relative z-10 flex flex-col items-center text-center w-full">
          <img 
            className="logo-emblem"
            src={logoSrc} 
            alt="Origin Pure emblem" 
            style={{ display: 'block', width: '140px', height: 'auto', margin: '0 auto 14px', objectFit: 'contain' }}
          />

          <h1 
            className="font-bold text-[#2F5E1A] tracking-[0.18em] uppercase flex items-baseline justify-center leading-[1.1] m-0"
            style={{ fontSize: 'clamp(26px, 7vw, 34px)' }}
          >
            ORIGIN PURE
            <sup className="font-sans text-[11px] font-bold tracking-normal ml-[3px] -top-2.5 text-[#2F5E1A]">
              TM
            </sup>
          </h1>

          <p className="text-[13px] tracking-[0.25em] text-[#5B7A45] font-medium uppercase mt-[14px] mb-0">
            WELLNESS &amp; NATURAL
          </p>
        </header>

        {/* ===================================================================
            SECTION 2: HEADLINE BLOCK & SPROUT (z-index: 10)
        =================================================================== */}
        <section className="relative z-10 flex flex-col items-center text-center mt-6 w-full">
          <h2 
            className="italic font-semibold text-[#1E2D2B] leading-[1.15] m-0"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(34px, 8.5vw, 42px)' }}
          >
            Hey Green Tea Lovers
          </h2>

          <div className="w-20 h-[1px] bg-[#6B8A5A] opacity-60 my-3 rounded-full" />

          <p 
            className="font-normal text-[#1E2D2B] leading-none mb-1 mt-0"
            style={{ fontSize: 'clamp(24px, 6vw, 32px)' }}
          >
            We Are
          </p>

          <div 
            className="headline-wrap"
            style={{
              position: 'relative',
              display: 'inline-block',
              fontSize: 'min(11.5vw, 56px)',
              margin: '2px 0 0 0'
            }}
          >
            <h1 
              className="launch"
              style={{
                whiteSpace: 'nowrap',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 800,
                fontSize: 'min(11.5vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: 0,
                background: 'linear-gradient(180deg, #5E8F2A 0%, #1F4210 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Launching Soon
            </h1>

            {/* Two-leaf sprout anchored on final 'n' */}
            <svg 
              className="sprout"
              style={{
                position: 'absolute',
                width: '0.55em',
                height: '0.55em',
                top: '-0.32em',
                right: '0.08em',
                pointerEvents: 'none'
              }}
              viewBox="0 0 36 36" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="sproutGradL_r" x1="0%" y1="100%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#2F5E1A" />
                  <stop offset="100%" stopColor="#72AF31" />
                </linearGradient>
                <linearGradient id="sproutGradR_r" x1="100%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1F4210" />
                  <stop offset="100%" stopColor="#88C73B" />
                </linearGradient>
              </defs>
              <path d="M18 34 C 18 25, 17 19, 15 15" stroke="#2F5E1A" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M15 16 C 8 15, 2 10, 4 3 C 11 3, 15 10, 15 16 Z" fill="url(#sproutGradL_r)" />
              <path d="M15 16 C 12 11, 9 7, 5 4" stroke="#9FD955" strokeWidth="0.8" strokeLinecap="round" />
              <path d="M16 15 C 18 9, 26 3, 34 4 C 33 12, 24 17, 16 15 Z" fill="url(#sproutGradR_r)" />
              <path d="M16 15 C 22 12, 28 8, 32 5" stroke="#B2E76C" strokeWidth="0.8" strokeLinecap="round" />
            </svg>
          </div>

          <p 
            className="subline"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              fontSize: 'clamp(15px, 4.2vw, 19px)',
              textWrap: 'balance',
              maxWidth: '340px',
              margin: '18px auto 0',
              textAlign: 'center',
              color: '#1E2D2B',
              lineHeight: 1.35
            }}
          >
            Follow our page &amp; win a box of Premium Green Tea
          </p>
        </section>

        {/* ===================================================================
            SECTION 3: HERO PRODUCT IMAGE & STEAM (z-index: 10)
        =================================================================== */}
        <section className="relative z-10 w-full flex justify-center items-center my-0">
          <div className="relative w-[88%] max-w-[380px] my-5 mx-auto flex justify-center items-center">
            
            {/* 3 Steam Wisps */}
            <div className="absolute -top-[18px] left-[48%] -translate-x-1/2 w-[90px] h-[50px] pointer-events-none z-15" aria-hidden="true">
              <div 
                className="absolute bottom-0 left-[15px] w-[14px] h-[38px] rounded-full filter blur-[4px] animate-[steamRise_4s_ease-out_infinite]"
                style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 75%)' }}
              />
              <div 
                className="absolute bottom-0 left-[38px] w-[14px] h-[38px] rounded-full filter blur-[4px] animate-[steamRise_4s_ease-out_infinite_1.3s]"
                style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 75%)' }}
              />
              <div 
                className="absolute bottom-0 left-[60px] w-[14px] h-[38px] rounded-full filter blur-[4px] animate-[steamRise_4s_ease-out_infinite_2.6s]"
                style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 75%)' }}
              />
            </div>

            {/* Cup Image with radial mask & mix-blend-mode: multiply */}
            <img 
              src={heroCupSrc} 
              alt="Origin Pure Premium Green Tea brewed in a transparent glass cup on stone coaster" 
              className="w-full h-auto object-contain block drop-shadow-[0_18px_24px_rgba(0,0,0,0.10)] mix-blend-multiply transition-transform duration-400 hover:scale-[1.02]"
              style={{
                maskImage: 'radial-gradient(ellipse 65% 60% at 50% 52%, #000 55%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 65% 60% at 50% 52%, #000 55%, transparent 100%)'
              }}
            />
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: "HOW TO BE ELIGIBLE" (z-index: 10)
        =================================================================== */}
        <section className="relative z-10 w-full flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 w-full mb-5">
            <span className="flex-1 h-[1px] bg-[#6B8A5A] opacity-60" />
            <h4 
              className="font-medium text-[#1E2D2B] m-0 whitespace-nowrap"
              style={{ fontSize: 'clamp(20px, 5vw, 24px)' }}
            >
              How to be eligible
            </h4>
            <span className="flex-1 h-[1px] bg-[#6B8A5A] opacity-60" />
          </div>

          <div className="grid grid-cols-3 w-full">
            {/* Col 1 */}
            <div className="flex flex-col items-center gap-3 px-2">
              <div className="w-[80px] h-[80px] min-w-[80px] min-h-[80px] rounded-full bg-[#DDE5CF] flex items-center justify-center shadow-[0_4px_10px_rgba(47,94,26,0.08)] transition-transform duration-300 hover:scale-105">
                <UserPlus className="w-[34px] h-[34px] text-[#1E3D1A]" strokeWidth={1.5} />
              </div>
              <p 
                className="font-semibold text-center text-[#1E2D2B] leading-[1.3] m-0"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(14px, 3.6vw, 19px)' }}
              >
                Follow us<br />@originpure.in
              </p>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col items-center gap-3 px-2 border-l border-[#6B8A5A]/50">
              <div className="w-[80px] h-[80px] min-w-[80px] min-h-[80px] rounded-full bg-[#DDE5CF] flex items-center justify-center shadow-[0_4px_10px_rgba(47,94,26,0.08)] transition-transform duration-300 hover:scale-105">
                <Eye className="w-[34px] h-[34px] text-[#1E3D1A]" strokeWidth={1.5} />
              </div>
              <p 
                className="font-semibold text-center text-[#1E2D2B] leading-[1.3] m-0"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(14px, 3.6vw, 19px)' }}
              >
                Watch our page closely for the launch announcement
              </p>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col items-center gap-3 px-2 border-l border-[#6B8A5A]/50">
              <div className="w-[80px] h-[80px] min-w-[80px] min-h-[80px] rounded-full bg-[#DDE5CF] flex items-center justify-center shadow-[0_4px_10px_rgba(47,94,26,0.08)] transition-transform duration-300 hover:scale-105">
                <FileText className="w-[34px] h-[34px] text-[#1E3D1A]" strokeWidth={1.5} />
              </div>
              <p 
                className="font-semibold text-center text-[#1E2D2B] leading-[1.3] m-0"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(14px, 3.6vw, 19px)' }}
              >
                Participate as per the instructions in the launch post
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: CTA BUTTON (EXACTLY ONE, NORMAL FLOW)
        =================================================================== */}
        <footer className="relative z-10 w-full flex justify-center mt-8 mb-10">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Origin Pure on Instagram at originpure.in"
            className="inline-flex items-center justify-center gap-3 w-[90%] max-w-[380px] py-[18px] px-10 rounded-full text-white font-medium cursor-pointer transition-all duration-250 hover:-translate-y-0.5 active:translate-y-0 group"
            style={{
              background: 'linear-gradient(180deg, #2E5A14 0%, #1F4210 100%)',
              fontSize: 'clamp(17px, 4.4vw, 22px)',
              boxShadow: '0 10px 25px rgba(31, 66, 16, 0.35)',
              animation: 'ctaPulseGlow 3.5s ease-in-out infinite'
            }}
          >
            <span>Follow us @originpure.in</span>
            <ChevronRight className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </footer>

      </main>

      {/* Global Component Animations */}
      <style>{`
        @keyframes leafSwayA {
          0% { transform: rotate(-3deg); }
          100% { transform: rotate(3deg); }
        }
        @keyframes leafSwayB {
          0% { transform: rotate(3deg); }
          100% { transform: rotate(-3deg); }
        }
        @keyframes sproutSway {
          0%, 100% { transform: translateX(-50%) rotate(0deg) scale(1); }
          50% { transform: translateX(-50%) rotate(4deg) scale(1.06); }
        }
        @keyframes steamRise {
          0% { transform: translateY(0) scaleX(0.7); opacity: 0; }
          40% { opacity: 0.6; }
          75% { opacity: 0.25; transform: translateY(-20px) scaleX(1.1); }
          100% { transform: translateY(-30px) scaleX(1.4); opacity: 0; }
        }
        @keyframes ctaPulseGlow {
          0%, 100% {
            box-shadow: 0 10px 25px rgba(31, 66, 16, 0.35), 0 0 0 0 rgba(94, 143, 42, 0.4);
          }
          50% {
            box-shadow: 0 14px 30px rgba(31, 66, 16, 0.45), 0 0 0 8px rgba(94, 143, 42, 0);
          }
        }
      `}</style>
    </div>
  );
}
