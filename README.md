# ORIGIN PURE ™ — Redesigned Launching Soon Page

A modern, high-end, and memorable "Launching Soon" landing page for **ORIGIN PURE** premium green tea brand (tagline: *"Wellness & Natural"*).

---

## ✨ What Has Changed & Redesign Highlights

1. **Official Green Ripple Emblem (`assets/logo-emblem.png`, `logo.svg`)**:
   - Integrated the client's official concentric tea ripple / vortex emblem mark.
   - Sized at an optimal optical scale (`110px × 110px`) with natural drop-shadow on light cream and a soft luminous glow in dark midnight mode.
   - Sourced from the lossless 400×400 master transparent asset and synced across `index.html`, `OriginPureLanding.jsx`, and `logo.svg`.

2. **Refined Typography Pairing**:
   - **Headline Only**: *Playfair Display* (display serif) for editorial prestige.
   - **All Other Elements**: *Plus Jakarta Sans* (modern, geometric sans-serif) for the brand mark, eyebrow pill, sub-text, step cards, and CTA button.
   - Clear visual hierarchy with generous breathing room and superior legibility on mobile viewports.

3. **Fresh, Premium Wellness Aesthetic**:
   - Deep forest green (`#0D2B1D`), warm alabaster cream (`#FCFBF7` to `#F1ECE0`), brushed gold accents (`#C59E47`), and delicate matcha undertones.
   - Soft sunlight beams, floating organic corner leaves with gentle depth-of-field sway, and subtle card glassmorphism.

4. **Interactive 3-Step Eligibility Section**:
   - Numbered badges (`01`, `02`, `03`) with custom clean line icons (Follow, Watch, Checklist).
   - Touch-friendly glassmorphism cards with smooth hover lift and gold-border highlights.

5. **Hero Product Presentation**:
   - Floating glass teacup on stone coaster with rising animated steam wisps.
   - Synchronized dynamic ground shadow that scales realistically as the cup floats.

6. **High-Contrast Instagram CTA**:
   - Prominent pill-shaped button featuring the official Instagram SVG glyph, smooth hover lift, shine sweep effect, and a subtle glowing aura.

7. **3 Switchable Luxury Color Palettes**:
   - **Palette 1 (Default - Forest & Gold Cream)**: Deep forest green + warm cream + brushed gold.
   - **Palette 2 (Option A - Kyoto Matcha & Oat)**: Fresh matcha green + soft oat celadon + vibrant shoot accents.
   - **Palette 3 (Option B - Midnight Pine & Radiant Gold)**: Dark luxury obsidian pine + radiant gold + ivory typography.

---

## 🎨 How to Switch Between Color Palettes

### 1. Interactive Preview
Open `index.html` in any browser. Use the chic floating switcher pill in the top-right corner to toggle between **Forest**, **Matcha**, and **Midnight** in real-time.

### 2. Lock In a Palette Permanently in Code
In `index.html`, set the `data-theme` attribute on the `<html>` tag:
```html
<!-- Default: Forest & Gold Cream -->
<html lang="en" data-theme="forest">

<!-- Alternate Option A: Kyoto Matcha & Fresh Oat -->
<html lang="en" data-theme="matcha">

<!-- Alternate Option B: Midnight Botanical & Radiant Gold (Dark Luxury) -->
<html lang="en" data-theme="midnight">
```

---

## 🔄 Where to Swap Assets & Links

### 1. Hero Teacup Product Image
In `index.html`, locate the comment:
```html
<!-- [SWAP HERO IMAGE HERE]: Replace src with client's teacup file -->
<img 
  src="assets/hero-cup-isolated.png" 
  alt="Origin Pure Premium Green Tea steeped in clear glass cup" 
  class="hero-teacup-img"
/>
```

### 2. Instagram Profile Link
In `index.html`, locate the comment:
```html
<!-- [SWAP INSTAGRAM LINK HERE]: Update href to your official URL -->
<a 
  href="https://instagram.com/originpure.in" 
  target="_blank" 
  rel="noopener noreferrer" 
  class="cta-button"
>
```

### 3. Logo Mark
The vector logo is available separately as `logo.svg` and `assets/logo.svg`. It is also embedded directly inside the brand header in `index.html` for zero-latency instant rendering.

---

## 🚀 Quick Run

### Standalone HTML (Zero Dependencies)
Simply open `index.html` in your browser or run:
```bash
python3 -m http.server 3000
```
Visit `http://localhost:3000`.
