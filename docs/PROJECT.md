# Projet : Portfolio Astro + Cloudflare

Architecture et planification pour un portfolio optimisé pour le SEO et la performance.

## Stack Technique
* **Framework** : Astro (mode SSG - Static Site Generation)
* **Styling** : Vanilla CSS (Zéro framework CSS lourd)
* **Hébergement** : Cloudflare Pages (Edge network)
* **Qualité** : PageSpeed Insights (cible 100/100), Lighthouse, Core Web Vitals

## Structure du Projet (Cible)
```text
/
├── docs/                      # Spécifications et documentation
│   ├── PROJECT.md             # Suivi du projet et architecture
│   ├── SEO-SPEC.md            # Règles d'optimisation SEO
│   └── CLOUDFLARE.md          # Configuration et déploiement
├── public/                    # Fichiers statiques (sitemap, robots.txt, icônes)
├── src/
│   ├── components/            # Composants UI réutilisables
│   ├── layouts/               # Layouts de page (Header, Footer, Meta)
│   ├── pages/                 # Pages (routes Astro)
│   └── styles/                # Styles Vanilla CSS globaux et variables
├── astro.config.mjs           # Configuration Astro
├── package.json               # Dépendances
└── wrangler.json              # Configuration Cloudflare Pages (optionnel)
```

## Étapes de Développement
1. **Initialisation** : Setup d'Astro, TypeScript et structure de base.
2. **Design & Components** : Layout de base, composants sémantiques.
3. **Optimisation SEO** : Intégration du SEO-SPEC (metadata, sitemap, compression).
4. **Déploiement** : Configuration Cloudflare, headers HTTP et redirection.
