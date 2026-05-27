# Configuration Déploiement Cloudflare Pages

Optimisation réseau, sécurité et cache pour Cloudflare Pages.

## 1. Configuration du Build
Dans l'interface Cloudflare Pages :
* **Framework preset** : Astro
* **Build command** : `npm run build`
* **Build output directory** : `dist`
* **Node.js version** : `>= 18.0.0` (variable d'environnement `NODE_VERSION`)

## 2. En-têtes HTTP (`public/_headers`)
Fichier copié dans le dossier `dist/` lors du build pour configurer les en-têtes réseau :

```text
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: interest-cohort=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

# Cache à vie pour les assets hashés (JS/CSS d'Astro)
/_astro/*
  Cache-Control: public, max-age=31536000, immutable
```

## 3. Redirections (`public/_redirects`)
Gestion des redirections de pages ou canonicalisation (ex: forcer le sans-www) :

```text
# Redirection vers HTTPS (géré auto par Cloudflare, mais utile à spécifier si besoin)
# Exemple de redirection 301 :
# /ancien-lien   /nouveau-lien   301
```

## 4. Fonctions Serveur (Cloudflare Pages Functions)
L'API de contact est hébergée sous `/functions/api/contact.js` et s'exécute directement sur l'infrastructure serverless de Cloudflare lors d'une soumission du formulaire.

### Variables d'environnement requises :
Dans le tableau de bord Cloudflare Pages (**Paramètres > Variables d'environnement**) :
1. **`RESEND_API_KEY`** : Ta clé API obtenue sur [Resend](https://resend.com/) pour autoriser l'envoi d'e-mails.
2. **`TO_EMAIL`** : L'adresse e-mail destinataire sur laquelle tu recevras les formulaires.
3. **`NODE_VERSION`** : Spécifier `20.20.0` (ou supérieur) pour garantir la compatibilité lors du build.

## 5. Cache & Cloudflare CDN
* Optimisation auto des images Cloudflare désactivée (car gérée par Astro lors de la compilation pour éviter les coûts inutiles).
* Activation du protocole **HTTP/3** et **Brotli** dans l'interface Cloudflare.

