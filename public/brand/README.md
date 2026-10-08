# Package logo — Michaël Jongeau (« le sceau », 2026-10)

Symbole : un « M » italique blanc sur une pastille corail cerclée d'encre, avec une ombre décalée bleu océan.
Version complète : symbole + « Michaël Jongeau » + « DÉVELOPPEUR WEB ».

Couleurs : corail `#c8461f`, encre `#16262e`, océan `#2e6e80` (ombre ; `#4f8f9c` sur fond sombre),
papier `#fbf6ec`, soleil `#ffd65c` (mention sur fond sombre).
Typo : Fraunces italique 600, axe SOFT 100 (M et nom) / Archivo 800 (mention « Développeur web »).

Dans le site, le logo n'est pas une image : il est dessiné en SVG par `src/components/Logo.jsx`
(`<Logo />` pour la version complète, `<LogoMark />` pour le symbole seul).

## Fichiers

| Fichier | Taille | Usage |
|---|---|---|
| `logo-header-light.png` | 912×208 (@4x) | version complète sur fond clair, fond transparent |
| `logo-header-dark.png` | 912×208 (@4x) | version complète sur fond sombre, fond transparent |
| `logo-signature-mail.png` | 684×156 (@3x) | signature d'email, à afficher en 228×52 |
| `favicon-32.png` | 32×32 | favicon, fond transparent |
| `favicon-64.png` | 64×64 | favicon HD, fond transparent |
| `apple-touch-icon-180.png` | 180×180 | `apple-touch-icon`, fond papier |
| `icon-512.png` | 512×512 | icône PWA / manifest, fond papier |
| `icon-maskable-512.png` | 512×512 | icône `maskable` (symbole dans la zone sûre) |
| `avatar-400.png` | 400×400 | photo de profil réseaux |
| `logo-1024.png` | 1024×1024 | logo carré haute définition, fond papier (annuaires, Solocal, PagesJaunes…) |
| `logo-1024-transparent.png` | 1024×1024 | même logo carré, fond transparent |
| `og-1200x630.png` | 1200×630 | image Open Graph / Twitter card générique |
| `linkedin-banner-1584x396.png` | 1584×396 | bannière LinkedIn, optimisée pour ordinateur (contenu à droite, le coin bas gauche est masqué par la photo de profil) |

Les PNG sont rendus depuis le même SVG que le site (Playwright + polices auto-hébergées), donc identiques
au logo affiché en ligne. Pour un vrai fichier vectoriel (impression), il faudra vectoriser le « M » en
Fraunces italique : le reste n'est que deux cercles.
