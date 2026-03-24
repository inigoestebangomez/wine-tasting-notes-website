# Design System — Wine Tasting Notes

> Este archivo documenta el sistema de diseño en lenguaje humano para que la IA lo interprete correctamente.
> La fuente de verdad técnica está en `tokens.json` (sincronizado desde Stitch vía MCP).

---

## Personalidad visual
La app habla de vino: elegancia, calidez, tradición con un toque moderno. El diseño debe transmitir **sofisticación accesible** — no intimidante como una carta de restaurante de lujo, sino como un diario personal bien cuidado.

**Palabras clave del diseño:** íntimo, cálido, preciso, sensorial.

---

## Paleta de colores
*(Valores de referencia — usar siempre los tokens de `tokens.json`)*

| Token | Uso |
|---|---|
| `color-primary` | Color principal de la marca (acción, CTAs) |
| `color-primary-dark` | Hover states, énfasis |
| `color-background` | Fondo principal de la página |
| `color-surface` | Cards, secciones con fondo diferenciado |
| `color-text-primary` | Texto principal |
| `color-text-muted` | Texto secundario, subtítulos |
| `color-accent` | Detalles decorativos, separadores |

---

## Tipografía
*(Fuentes a confirmar desde Stitch — estos son los roles)*

| Rol | Uso | Características |
|---|---|---|
| Display | Headlines de sección, Hero title | Grande, carácter, puede ser serif |
| Body | Texto corrido, descripciones | Alta legibilidad, tamaño 16px base |
| UI | Labels, botones, navegación | Medium weight, sin remates |

**Escala tipográfica:** Definida en `tokens.json`. No usar tamaños fuera de la escala.

---

## Espaciado
Sistema de espaciado basado en múltiplos de 4px, definido en tokens. Las secciones de la landing usan padding vertical generoso (mínimo `spacing-16` = 64px) para respirar.

---

## Componentes clave

### Botones CTA
- **Primario:** Fondo `color-primary`, texto blanco, border-radius redondeado. Con hover que oscurece.
- **App Store / Google Play:** Estilo propio con logo oficial. Fondo oscuro o claro según contexto.
- **Tamaño mínimo touch:** 44×44px (WCAG 2.1)

### Cards de features
- Fondo `color-surface`, sin sombra agresiva — sutil elevación.
- Icono SVG inline arriba, título, descripción corta (2 líneas máx).

### Mockups de la app
- Presentados en marco de dispositivo (iPhone frame).
- Sombra proyectada suave para dar profundidad.
- En mobile: un mockup central. En desktop: 2–3 en composición diagonal o apilada.

---

## Responsive breakpoints
| Nombre | Valor | Uso |
|---|---|---|
| `sm` | 640px | Teléfonos landscape |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop pequeño |
| `xl` | 1280px | Desktop estándar |

**Mobile First:** todos los estilos base son para móvil. Las variantes `md:` y `lg:` expanden el layout.

---

## Lo que NO hacer visualmente
- No usar gradientes genéricos purple/pink sin fundamento en los tokens.
- No usar sombras excesivas (`shadow-2xl` en todo).
- No centrar todo el texto — en desktop el hero puede tener alineación izquierda.
- No usar más de 2 fuentes distintas.
- No reducir el tamaño de texto bajo 14px en ningún caso.