# Package logo — Michaël Jongeau (variante 5b)

Couleurs : vert `#435e3a`, vert clair `#8aa87e`, crème `#eef1ea`, encre `#17140f`.
Typo : Archivo 800 (mark) / Archivo 600 (mention). Google Fonts.

## Fichiers

| Fichier | Taille | Usage |
|---|---|---|
| `logo-header-light.png` | 524×288 (@4x) | header sur fond clair, fond transparent |
| `logo-header-dark.png` | 524×288 (@4x) | header sur fond sombre, fond transparent |
| `logo-signature-mail.png` | 960×216 (@3x) | signature d'email, à afficher en 320×72 |
| `favicon-32.png` | 32×32 | favicon (MJ seul, crochets retirés pour la lisibilité) |
| `favicon-64.png` | 64×64 | favicon HD, deux crochets |
| `apple-touch-icon-180.png` | 180×180 | `apple-touch-icon` |
| `icon-512.png` | 512×512 | icône PWA / manifest |
| `icon-maskable-512.png` | 512×512 | icône `maskable` (marque dans la zone sûre) |
| `avatar-400.png` | 400×400 | photo de profil réseaux |
| `og-1200x630.png` | 1200×630 | image Open Graph / Twitter card |

## Header en CSS (net à toutes les tailles, pas d'image)

```html
<a class="mj-logo" href="/">
  <span class="mj-c mj-tl"></span><span class="mj-c mj-tr"></span>
  <span class="mj-c mj-bl"></span><span class="mj-c mj-br"></span>
  <span class="mj-mark">MJ</span>
  <span class="mj-sub">Dév. Freelance</span>
</a>
```

```css
.mj-logo{position:relative;display:inline-block;padding:14px 20px 11px;text-align:center;
  text-decoration:none;font-family:Archivo,Helvetica,sans-serif;--mj:#435e3a}
.mj-mark{display:block;font-size:32px;font-weight:800;letter-spacing:-.05em;line-height:.95;color:var(--mj)}
.mj-sub{display:block;margin-top:8px;font-size:7.5px;font-weight:600;letter-spacing:.26em;
  text-transform:uppercase;color:var(--mj)}
.mj-c{position:absolute;width:10px;height:10px}
.mj-tl{top:0;left:0;border-top:2px solid var(--mj);border-left:2px solid var(--mj)}
.mj-tr{top:0;right:0;border-top:2px solid var(--mj);border-right:2px solid var(--mj)}
.mj-bl{bottom:0;left:0;border-bottom:2px solid var(--mj);border-left:2px solid var(--mj)}
.mj-br{bottom:0;right:0;border-bottom:2px solid var(--mj);border-right:2px solid var(--mj)}
/* fond sombre */
.mj-logo.is-dark{--mj:#8aa87e}
.mj-logo.is-dark .mj-mark{color:#eef1ea}
```

## Balises head

```html
<link rel="icon" href="/favicon-32.png" sizes="32x32">
<link rel="icon" href="/favicon-64.png" sizes="64x64">
<link rel="apple-touch-icon" href="/apple-touch-icon-180.png">
<link rel="manifest" href="/manifest.webmanifest">
<meta property="og:image" content="/og-1200x630.png">
```

```json
{
  "name": "Michaël Jongeau",
  "short_name": "MJ",
  "theme_color": "#435e3a",
  "background_color": "#f7f6f2",
  "icons": [
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

## À faire côté vectoriel

Les PNG sont générés à partir du rendu HTML. Pour un vrai SVG/EPS (impression, grand format),
il faut vectoriser le « MJ » en Archivo 800 — les crochets sont de simples rectangles,
faciles à redessiner à l'identique.
