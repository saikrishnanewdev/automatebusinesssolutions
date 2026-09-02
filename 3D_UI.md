# AUTOMATE BUSINESS SOLUTIONS — Reusable 3D WebGL UI Components Guide

> **Reference Guide:** How to export, reuse, and customize the 3D WebGL Canvas visualizers from **Automate Business Solutions** across other React and Next.js projects.

---

## 1. 📦 Available 3D Components

The project includes three self-contained 3D WebGL Canvas components located in `src/components/3d/`:

| Component File | Description | Recommended Usage |
| :--- | :--- | :--- |
| [`Hero3DCanvas.tsx`](file:///c:/Projects/Automate%20Business%20Solutions/src/components/3d/Hero3DCanvas.tsx) | Interactive 3D particle matrix with glowing connection vectors & parallax camera tracking. | Hero backgrounds, header sections, landing pages. |
| [`WorkflowEngine3D.tsx`](file:///c:/Projects/Automate%20Business%20Solutions/src/components/3d/WorkflowEngine3D.tsx) | 3D orbiting workflow simulation engine with live data packets & state triggers. | Product architecture demos, feature showcases. |
| [`AmbientShaderBg.tsx`](file:///c:/Projects/Automate%20Business%20Solutions/src/components/3d/AmbientShaderBg.tsx) | Lightweight 3D digital wave particle background canvas. | Call-to-action sections, card backdrops, footer banners. |

---

## 2. 🚀 Quickstart: Reusing in New Projects

### Step 1: Copy Component Files
Copy the `src/components/3d/` directory into your new project:

```text
src/components/3d/
├── Hero3DCanvas.tsx
├── WorkflowEngine3D.tsx
└── AmbientShaderBg.tsx
```

### Step 2: Install Dependencies
In your new project root, run:

```bash
npm install three lucide-react framer-motion
npm install --save-dev @types/three
```

---

## 3. 🎨 Customization Guide

### A. Customizing Colors in `Hero3DCanvas.tsx`
Open [`Hero3DCanvas.tsx`](file:///c:/Projects/Automate%20Business%20Solutions/src/components/3d/Hero3DCanvas.tsx) and update the `colors` array to match your new project's brand palette:

```typescript
// Replace with your project's brand color hex codes
const colors = ['#FF9800', '#38BDF8', '#8B5CF6', '#10B981', '#F59E0B'];
```

### B. Customizing Node Density & Speed
Adjust the node count and speed variables:

```typescript
// Node density multiplier (default scales automatically with screen width)
const nodeCount = Math.min(Math.floor(width / 18), 70);

// Perspective focal length (adjust for camera depth feel)
const focalLength = 400;
```

### C. Customizing Data in `WorkflowEngine3D.tsx`
Pass custom preset properties directly into the component:

```tsx
<WorkflowEngine3D activePreset={{
  id: 'custom-preset',
  title: 'AI Data Engine',
  input: 'Customer Form Input',
  engineAction: 'Neural Net Processing & Logic',
  result: 'Instant Analytics Report',
  tag: 'Real-time Sync'
}} />
```

---

## 4. 💻 Next.js & React Integration Examples

### Example 1: Full-Width 3D Hero Background
```tsx
"use client";

import React from 'react';
import Hero3DCanvas from '@/components/3d/Hero3DCanvas';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] bg-[#020B19] overflow-hidden flex items-center justify-center">
      {/* 3D WebGL Matrix Canvas */}
      <Hero3DCanvas />

      {/* Foreground Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-white">
          Build Smarter Applications
        </h1>
      </div>
    </section>
  );
}
```

### Example 2: 3D Wave Shader Banner Background
```tsx
"use client";

import React from 'react';
import AmbientShaderBg from '@/components/3d/AmbientShaderBg';

export default function CTABanner() {
  return (
    <div className="relative w-full py-16 bg-slate-950 overflow-hidden rounded-3xl border border-slate-800">
      {/* 3D Wave Canvas */}
      <AmbientShaderBg />

      <div className="relative z-10 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
      </div>
    </div>
  );
}
```

---

## ⚡ Performance Optimization Notes

- **Device Scaling:** `Hero3DCanvas` automatically scales the node count based on screen width (`Math.min(width / 18, 70)`).
- **Cleanup Handlers:** All canvas components include `cancelAnimationFrame()` cleanup inside React `useEffect` hooks to eliminate memory leaks upon page navigation.
- **Client Components:** Always place `"use client";` at the top of the file when using Next.js App Router.

---

© 2026 **AUTOMATE BUSINESS SOLUTIONS**. All rights reserved.
