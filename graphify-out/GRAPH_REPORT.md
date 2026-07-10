# Graph Report - portfolio  (2026-07-10)

## Corpus Check
- 15 files · ~175,942 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 81 nodes · 69 edges · 13 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3632c575`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]

## God Nodes (most connected - your core abstractions)
1. `Product` - 8 edges
2. `scripts` - 7 edges
3. `Configuration Déploiement Cloudflare Pages` - 6 edges
4. `Portfolio | Développeur Front-End & WordPress` - 5 edges
5. `Spécifications SEO & Performance` - 5 edges
6. `../../layouts/Layout.astro` - 4 edges
7. `Projet : Portfolio Astro + Cloudflare` - 4 edges
8. `🛠️ Stack Technique & Compétences` - 3 edges
9. `engines` - 2 edges
10. `4. Fonctions Serveur (Cloudflare Pages Functions)` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (13 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (14): devDependencies, wrangler, engines, node, name, scripts, astro, build (+6 more)

### Community 1 - "Community 1"
Cohesion: 0.20
Nodes (6): ../assets/images/headshot.png, ../assets/images/project-briquerouge.png, ../assets/images/project-ecommerce.png, ../assets/images/project-vtc.png, ../../layouts/Layout.astro, personSchema

### Community 2 - "Community 2"
Cohesion: 0.22
Nodes (8): Accessibility & Inclusion, Anti-references, Brand Personality, Design Principles, Product, Product Purpose, Register, Users

### Community 3 - "Community 3"
Cohesion: 0.25
Nodes (7): 1. Configuration du Build, 2. En-têtes HTTP (`public/_headers`), 3. Redirections (`public/_redirects`), 4. Fonctions Serveur (Cloudflare Pages Functions), 5. Cache & Cloudflare CDN, Configuration Déploiement Cloudflare Pages, Variables d'environnement requises :

### Community 4 - "Community 4"
Cohesion: 0.25
Nodes (7): ⚙️ Commandes de Développement, Compétences Secondaires & Transverses, Expertises Principales, ⚡ Performances & Objectifs SEO du Projet, Portfolio | Développeur Front-End & WordPress, 👤 Profil & Expertise, 🛠️ Stack Technique & Compétences

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (5): Architecture, Cloudflare Deployment (from `docs/CLOUDFLARE.md`), Commands, Project, SEO & Performance Rules (from `docs/SEO-SPEC.md`)

### Community 6 - "Community 6"
Cohesion: 0.33
Nodes (5): 1. Métadonnées & Balises HTML, 2. Performances & Core Web Vitals, 3. Optimisation des Assets, 4. Fichiers Systématiques (Générés à la compilation), Spécifications SEO & Performance

### Community 7 - "Community 7"
Cohesion: 0.40
Nodes (4): Projet : Portfolio Astro + Cloudflare, Stack Technique, Structure du Projet (Cible), Étapes de Développement

### Community 8 - "Community 8"
Cohesion: 0.50
Nodes (4): dependencies, astro, @astrojs/cloudflare, @astrojs/sitemap

### Community 9 - "Community 9"
Cohesion: 0.50
Nodes (3): exclude, extends, include

## Knowledge Gaps
- **51 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+46 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 8` to `Community 0`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _51 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._