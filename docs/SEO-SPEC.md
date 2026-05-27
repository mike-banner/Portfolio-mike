# Spécifications SEO & Performance

Règles strictes à respecter pour garantir un référencement optimal et un score Lighthouse de 100/100.

## 1. Métadonnées & Balises HTML

Chaque page doit obligatoirement inclure :
* **Balise `<title>`** : Maximum 60 caractères, structure `Sujet | Nom du Site`.
* **Balise `<meta name="description">`** : Entre 120 et 160 caractères, contenant un mot-clé principal.
* **Balise `<link rel="canonical">`** : URL absolue pour éviter le duplicate content.
* **Balises OpenGraph** (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`).
* **Balises Twitter Cards** (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
* **Langue** : Attribut `<html lang="fr">`.

## 2. Performances & Core Web Vitals

* **LCP (Largest Contentful Paint)** : < 1.2s (Images en `priority` ou `fetchpriority="high"` au-dessus de la ligne de flottaison).
* **CLS (Cumulative Layout Shift)** : 0 (Taille explicite `width` et `height` sur toutes les images/iframes, `font-display: swap` pour les polices).
* **INP (Interaction to Next Paint)** : < 50ms (Javascript minimaliste, utilisation d'Astro sans JS inutile).

## 3. Optimisation des Assets

* **Images** : 
  * Utiliser exclusivement le composant `<Image />` d'Astro.
  * Formats de sortie forcés : **AVIF** et **WebP**.
  * Compression maximale sans perte de qualité visible.
* **Polices** :
  * Auto-hébergées localement (pas d'appels externes vers Google Fonts).
  * Préchargement des formats `.woff2` critiques.
* **CSS** :
  * Inliné pour les styles critiques de la page, minifié.

## 4. Fichiers Systématiques (Générés à la compilation)

* **`sitemap.xml`** : Généré automatiquement à chaque build via `@astrojs/sitemap`.
* **`robots.txt`** : Pointant explicitement vers le Sitemap.
* **Données structurées (JSON-LD)** :
  * Schema `Person` sur la page d'accueil (nom, profession, réseaux sociaux, logo).
  * Schema `WebSite` globale.
