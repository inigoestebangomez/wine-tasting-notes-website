# Architecture — Wine Tasting Notes Landing Page

## Estructura de carpetas (`/src`)

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fuentes, metadata global, providers
│   ├── page.tsx            # Landing page principal (composición de secciones)
│   ├── privacy/
│   │   └── page.tsx        # Página de política de privacidad
│   └── sitemap.ts          # Generador de sitemap automático
├── components/
│   ├── sections/           # Secciones de la landing (un componente por sección)
│   │   ├── Hero.tsx
│   │   ├── AppShowcase.tsx
│   │   ├── FeaturesGrid.tsx
│   │   ├── SocialProof.tsx
│   │   └── SecondCTA.tsx
│   ├── ui/                 # Componentes atómicos reutilizables
│   │   ├── Button.tsx      # Wrapper de Radix UI con variantes Tailwind
│   │   ├── AppStoreButton.tsx
│   │   └── Icon.tsx        # SVG inline wrapper
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── lib/
│   └── metadata.ts         # Helpers para generateMetadata
└── styles/
    └── globals.css         # Tailwind directives + CSS custom properties
```

---

## Flujo de datos

Esta es una landing estática — **no hay fetching de datos en runtime**. Todo el contenido es:
1. **Hardcodeado** en los componentes (copy de la landing)
2. **Assets estáticos** desde `/public/` o importados desde Stitch vía MCP en build time

No hay base de datos, no hay API routes (excepto si se añade un formulario de contacto en el futuro).

---

## Tokens de diseño

Los tokens de Stitch se exportan a `/design/tokens.json` y se mapean en `tailwind.config.ts`:

```typescript
// tailwind.config.ts
import tokens from './design/tokens.json'

export default {
  theme: {
    extend: {
      colors: tokens.colors,
      fontFamily: tokens.typography.families,
      fontSize: tokens.typography.sizes,
      spacing: tokens.spacing,
    }
  }
}
```

**Regla:** Ningún valor de color, tipografía o espaciado debe estar hardcodeado en los componentes. Siempre usar clases de Tailwind que referencian los tokens.

---

## SEO Architecture

```
app/layout.tsx
└── generateMetadata() → título, descripción, OG tags globales
    app/page.tsx
    └── generateMetadata() → override para la landing específica
        ├── Schema.org JSON-LD (SoftwareApplication)
        └── app/sitemap.ts → /sitemap.xml automático
```

---

## Performance Strategy

- **Imágenes:** `next/image` con `priority` en el Hero, lazy en el resto. Formato WebP.
- **Fuentes:** `next/font` (Google Fonts) con `display: swap` y preload.
- **Animaciones:** Solo con `will-change` en elementos que lo necesiten. Sin animaciones en `prefers-reduced-motion`.
- **Bundle:** Sin librerías de iconos (SVG inline). Sin librerías de UI pesadas.

---

## Variables de Entorno

Las variables sensibles se gestionan en Antigravity (no en `.env` del repo).

| Variable | Uso | Dónde se define |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | URL canónica para SEO | Antigravity secrets |
| `NEXT_PUBLIC_APP_STORE_URL` | Link App Store | Antigravity secrets |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Link Google Play | Antigravity secrets |