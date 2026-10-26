# Français A2.1 — site d'étude

Application Expo (React Native Web) pour réviser les modules A2.1 : résumés en français, illustrations (vêtements, météo, etc.) et exercices (choix multiple + écriture avec correction souple).

## Lancer en local

```bash
npm install
npm run web
```

## Build production (hébergement type Render)

```bash
npm run build:web
npm run start:prod   # optionnel en local (Node) ; pas nécessaire sur Static Site
```

### Render — Static Site (recommandé)

1. New → **Static Site**, repo `a2-1`
2. **Build command:** `npm install && npm run build:web`
3. **Publish directory:** `dist`
4. **Redirects/Rewrites** (Settings) — règle SPA obligatoire :

| Source | Destination | Action |
| --- | --- | --- |
| `/*` | `/index.html` | **Rewrite** |

Sans cette règle, un refresh sur une route React Navigation renvoie 404.

Le fichier [`render.yaml`](render.yaml) définit déjà cette rewrite pour un déploiement Blueprint.

## Contenu

- Cours 1 à 13 (routine, présent, physique, vêtements, caractère, pays, météo, quartier, directions, habitation, location)
- Module vocabulaire vêtements
- Écriture : `cest` est accepté pour `c'est` ; petites fautes acceptées avec affichage de la forme correcte
