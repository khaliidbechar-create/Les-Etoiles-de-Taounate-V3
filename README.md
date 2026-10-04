# ⭐ Les Étoiles de Taounate — V3

Application mobile PWA de gestion d'école de football.

## Modules V3
- Tableau de bord
- Joueurs : ajout, modification, suppression, recherche, fiche individuelle
- Catégories automatiques selon l'âge
- Présences par séance et par joueur
- Évaluations 1–10 avec moyenne
- Cotisations : paiements, montant, date, mode
- Matchs : date, heure, catégorie, adversaire, lieu, statut, score
- Packs dans la fiche joueur
- Statistiques par catégorie
- Sauvegarde/restauration JSON
- 128 joueurs issus du fichier Excel initial dans `data/seed.json`
- IndexedDB
- PWA
- Service Worker
- Installation Android

## Publication GitHub Pages
Le contenu de ce dossier doit être à la racine du dépôt GitHub :
`index.html`, `manifest.json`, `service-worker.js`, `offline.html`, `assets/`, `data/`.

GitHub Pages : Settings → Pages → Deploy from a branch → main → /(root).

## Important après une ancienne version
Si l'ancienne application reste affichée, supprimer les données/cache du site dans Chrome Android puis recharger.
La V3 utilise un nouveau nom de cache et une nouvelle base IndexedDB (`etoiles-taounate-v3`).

## PWABuilder
Une fois l'URL GitHub Pages publique et HTTPS, analyser cette URL avec PWABuilder pour préparer le package Android.
