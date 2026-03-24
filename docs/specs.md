# Project Specification — Wine Tasting Notes Landing Page

## 1. Objetivo
Landing page de alto rendimiento para una app móvil de notas de cata de vinos. El objetivo principal es la **conversión**: llevar al visitante a descargar la app (App Store / Google Play). Secundariamente, posicionamiento SEO para búsquedas relacionadas con cata de vinos y apps de sommelier.

**No es** un blog, tienda, ni app web — es una landing de descarga con una única CTA principal.

---

## 2. Audiencia objetivo
- Aficionados al vino (25–50 años) que quieren registrar y recordar sus catas.
- Sommeliers y profesionales que necesitan organizar notas rápidamente.
- Dispositivos: 70%+ acceso desde móvil — diseño Mobile First obligatorio.

---

## 3. Stack Técnico
| Capa | Tecnología | Motivo |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSR/SSG para SEO |
| Styling | Tailwind CSS + tokens de Stitch | Consistencia con el diseño |
| Componentes | Radix UI (primitives) | Accesibilidad WCAG 2.1 |
| Animaciones | Framer Motion | Micro-interacciones fluidas |
| Tipografía | Google Fonts (definida en design-system.md) | Rendimiento |
| Deploy | Vercel (o Antigravity hosting) | Zero-config con Next.js |

---

## 4. Secciones (Task List)

### Fase 1 — Estructura base
- [ ] Setup Next.js + Tailwind + Radix UI
- [ ] Configurar tokens de Stitch en `tailwind.config.ts`
- [ ] Layout base con Header y Footer

### Fase 2 — Contenido principal
- [ ] **Hero Section**: Headline principal, sub-headline, mockup de la app, CTA doble (App Store + Google Play)
- [ ] **App Showcase**: Carousel o grid de 3 pantallas clave de la app con descripción breve
- [ ] **Features Grid**: 4–6 beneficios con iconos (SVG inline, no librerías de iconos externas)
- [ ] **Social Proof**: Valoraciones / testimonios (3 máximo, reales o placeholder realista)
- [ ] **Second CTA**: Banner de descarga intermedio o final

### Fase 3 — SEO y rendimiento
- [ ] Metadata dinámica (`generateMetadata` en Next.js)
- [ ] OpenGraph tags (imagen específica 1200×630)
- [ ] `sitemap.xml` autogenerado
- [ ] `robots.txt`
- [ ] Schema.org markup (SoftwareApplication)

### Fase 4 — Legal y confianza
- [ ] Footer con links: Política de Privacidad, Términos de Uso, Contacto
- [ ] Página `/privacy` básica (ruta adicional solo para esta excepción legal)

---

## 5. Métricas de éxito
- Lighthouse Score: Performance ≥ 90, Accessibility ≥ 95, SEO = 100
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Sin errores de consola en producción

---

## 6. Assets necesarios (checklist)
- [ ] Logo de la app (SVG preferido)
- [ ] Mockups de pantallas de la app (PNG/WebP, fondo transparente)
- [ ] Imagen OpenGraph (1200×630px)
- [ ] Iconos de App Store y Google Play (SVG oficial)
- [ ] Favicon (ICO + PNG 192px + PNG 512px)