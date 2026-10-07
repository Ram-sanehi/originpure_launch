# ORIGIN PURE - Launch Teaser Landing Page

A mobile-first, pixel-faithful "Coming Soon / Launch Teaser" landing page for **ORIGIN PURE** premium green tea brand.

---

## 🍵 Features & Aesthetics

- **Portrait Canvas**: 9:16 aspect ratio (design width 900px, height 1600px), centered with `max-width: 480px` on desktop and full responsive presentation on mobile devices.
- **Natural Wellness Background**:
  - Warm cream background (`#F7F5EF`) with subtle gradients.
  - Soft sunlight window-shadow beams across the background.
  - Light marble tabletop surface at the bottom half.
  - Organic blurred green tea leaves in all four corners with gentle swaying CSS animations (depth-of-field effect).
- **Pixel-Faithful Typography**:
  - Script heading: *"Hey Green Tea Lovers"* (Cormorant Garamond italic script).
  - Serif subheading: *"We Are"* followed by *"Launching Soon"* in bold gradient green with a two-leaf sprout on top of the "n".
  - Subline: *"Follow our page & win a box of Premium Green Tea"*.
  - Eligibility header: *── How to be eligible ──*.
- **Hero Product Presentation**:
  - Transparent glass tea cup with golden-green tea on a stone coaster.
  - Realistic rising and fading tea steam animation.
- **3-Step Eligibility Section**:
  - Pale sage circles (`#DDE5CF`) with thin-line dark green icons.
  - 1: User Plus → Follow us @originpure.in
  - 2: Eye → Watch our page closely for the launch announcement
  - 3: Document → Participate as per the instructions in the launch post
- **CTA Button**:
  - Pill-shaped gradient green button with gentle pulsing glow and hover lift.
  - Direct link to `https://instagram.com/originpure.in`.

---

## 📁 File Structure

```
foxgle_originoure/
├── index.html                  # Complete standalone, single-file HTML/CSS/JS page
├── OriginPureLanding.jsx       # Reusable React component with props & Tailwind
├── README.md                   # Documentation and asset swap instructions
└── assets/                     # Extracted high-fidelity assets
    ├── logo-emblem-transparent.png
    ├── logo-emblem.png
    ├── logo-full.png
    ├── hero-cup-blended.png
    ├── hero-cup.png
    ├── sprout.png
    ├── leaf-top-left-trans.png
    ├── leaf-top-right-trans.png
    ├── leaf-mid-left-trans.png
    ├── leaf-bottom-left-trans.png
    └── leaf-bottom-right-trans.png
```

---

## 🚀 Quick Start

### 1. Standalone HTML (Zero Build Tools Required)
Simply double-click `index.html` or open it in any web browser!
Or run a local server:
```bash
python3 -m http.server 3000
```
Open `http://localhost:3000` in your browser.

### 2. React + Tailwind CSS
Import `OriginPureLanding.jsx` into your React project (Next.js, Vite, Create React App):
```jsx
import OriginPureLanding from './OriginPureLanding';

export default function App() {
  return <OriginPureLanding />;
}
```

---

## 🎨 Asset Swap Configuration

To swap any asset with the client's final media files, edit the `BRAND_ASSETS` object in `index.html` (or `DEFAULT_ASSETS` in `OriginPureLanding.jsx`):

```javascript
const BRAND_ASSETS = {
  // 1. Logo Emblem (Circular brush stroke ring)
  logo: "assets/logo-emblem-transparent.png",

  // 2. Hero Green Tea Cup Product Shot
  heroCup: "assets/hero-cup-blended.png",

  // 3. Sprout on the "n" of Launching Soon
  sprout: "assets/sprout.png",

  // 4. Corner Depth-of-Field Green Leaves
  leaves: {
    topLeft: "assets/leaf-top-left-trans.png",
    topRight: "assets/leaf-top-right-trans.png",
    midLeft: "assets/leaf-mid-left-trans.png",
    bottomLeft: "assets/leaf-bottom-left-trans.png",
    bottomRight: "assets/leaf-bottom-right-trans.png"
  },

  // 5. Social Link
  instagramUrl: "https://instagram.com/originpure.in"
};
```
