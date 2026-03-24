# Project Context — Estado Actual

> Este archivo es el "estado vivo" del proyecto. Se actualiza al final de cada sesión de trabajo significativa.
> **La IA debe leer este archivo al inicio de cada sesión.**

---

## Estado General
**Fase actual:** Despliegue (completado)  
**Última actualización:** 2026-03-24  
**Próxima tarea:** Despliegue

---

## Decisiones Tomadas
| Decisión | Motivo | Fecha |
|---|---|---|
| Next.js 16 (App Router) | SSR nativo para SEO | 2026-03-18 |
| Tailwind CSS v4 (CSS-based config) | Tailwind v4 usa `@theme` en CSS, no `tailwind.config.ts` | 2026-03-18 |
| Radix UI (solo primitives) | WCAG 2.1 sin overhead visual | 2026-03-18 |
| Framer Motion | Micro-interacciones fluidas | 2026-03-18 |
| Tokens vía `@theme` en globals.css | Tailwind v4 no usa archivo JS de config | 2026-03-18 |
| URL base placeholder: `https://winetastingnotes.app` | Pendiente URL final de deploy | 2026-03-18 |

---

## Completado ✅
- [x] Extracción de tokens de diseño desde Stitch → `design/tokens.json`
- [x] Setup Next.js 16 + TypeScript + Tailwind v4
- [x] Instalación de dependencias: `@radix-ui/react-dialog`, `@radix-ui/react-navigation-menu`, `framer-motion`
- [x] `src/app/globals.css` — Tailwind v4 `@theme` con colores, fuentes, radios, sombras y animaciones
- [x] `src/app/layout.tsx` — `next/font` (Playfair Display + Inter) + metadata global + OpenGraph
- [x] `src/app/sitemap.ts` — genera `/sitemap.xml` (rutas `/` y `/privacy`)
- [x] `src/app/robots.ts` — permite indexación completa, referencia sitemap
- [x] `npm run build` pasa sin errores ✅
- [x] Hero Section: `src/components/sections/Hero.tsx` con h1 responsive, imagen hero, decorativos
- [x] `src/components/ui/AppStoreButton.tsx` — CTA App Store con SVG Apple
- [x] `src/components/ui/PlayStoreButton.tsx` — CTA Google Play con SVG Play
- [x] Imagen hero descargada de Stitch → `public/hero-wine.jpg`
- [x] `src/app/page.tsx` actualizado para renderizar Hero
- [x] `src/components/sections/Navbar.tsx` — Nav fija con glass effect, logo, links, CTA pill
- [x] `src/components/sections/Features.tsx` — 3 feature cards con SVGs e iconos hover
- [x] `src/components/sections/AppPreview.tsx` — Phone mockup con skeleton UI + bullets
- [x] `src/components/sections/CtaBanner.tsx` — Banner burgundy con dot pattern y CTAs
- [x] `src/components/sections/Footer.tsx` — Logo, social links, product/company columns
- [x] `page.tsx` actualizado con todas las 6 secciones del diseño Stitch

---

## En Progreso 🔄
*(ninguno)*

---

## Bloqueado 🚧
*(ninguno)*

---

## Pendiente 📋
### ~~Fase 2 — Contenido principal~~ ✅
- ~~Hero Section~~ ✅
- ~~Features Grid~~ ✅
- ~~App Preview (Mobile Mockup)~~ ✅
- ~~CTA Banner~~ ✅
- ~~Navigation~~ ✅
- ~~Footer~~ ✅
- Social Proof: 3 testimonios (pendiente — no presente en diseño Stitch actual)

### ~~Fase 3 — SEO y rendimiento~~ ✅
- ~~`generateMetadata` dinámica~~ ✅
- ~~OpenGraph image (1200×630)~~ ✅
- ~~Schema.org markup (SoftwareApplication)~~ ✅

### ~~Fase 4 — Legal~~ ❌ (Cancelado/Suprimido)

---

## Notas y Contexto Importante
- **Tailwind v4 importante**: No existe `tailwind.config.ts`. Los tokens se definen con `@theme` dentro de `src/app/globals.css`. Los colores custom se añaden directamente ahí.
- **URL del sitio**: Usar `process.env.NEXT_PUBLIC_SITE_URL` || `https://winetastingnotes.app`
- El proyecto usa Antigravity con integración MCP a Stitch — los assets de diseño vienen de ahí.
- La CTA principal es descarga de app (doble botón: App Store + Google Play).
- Diseño Mobile First obligatorio.
- Sin scripts de terceros no auditados.

---

## Preguntas Abiertas / Pendientes de Decisión
- [ ] ¿URL final del deploy? (necesario para metadata SEO y sitemap)
- [ ] ¿Disponibles los mockups de la app para el Hero? Sí.
- [ ] ¿Nombre exacto y tagline de la app confirmados? Sí. Wine Tasting Notes.
- [ ] ¿Se requiere soporte multiidioma (ES/EN)? Sí.