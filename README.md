<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Dancing+Script&size=70&pause=1000&color=FF69B4&center=true&vCenter=true&width=1000&height=180&lines=SHADE+HORI+BOT;Version+1.0.0;Created+By+SHADE" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <img src="https://files.catbox.moe/6ofj4c.jpg" width="800" alt="Shade Hori Bot Banner"/>
</p>

---

## 🗿 Customization & Fork

Obtenez votre propre copie du projet pour configurer et déployer votre instance personnalisée du bot :

<p align="left">
  <a href="https://github.com/3voldi/Flemme/fork">
    <img src="https://img.shields.io/badge/FORK%20REPO-Click%20Here-FF69B4?style=for-the-badge&logo=github" alt="Fork Repo"/>
  </a>
</p>

---

## 🚀 Plateformes de Déploiement

Choisissez votre plateforme cloud préférée pour héberger et exécuter **Shade Hori Bot** instantanément :

| Plateforme | Lien Direct de Déploiement |
| :--- | :--- |
| **TalkDrove** | <a href="https://host.talkdrove.com/dashboard/select-bot/prepare-deployment?botId=51" target="_blank"><img alt="Deploy to TalkDrove" src="https://img.shields.io/badge/DEPLOY-NOW-8A2BE2?style=for-the-badge&logo=visualstudiocode"/></a> |
| **Replit** | <a href="https://repl.it/github/3voldi/Flemme" target="_blank"><img alt="Deploy to Replit" src="https://img.shields.io/badge/REPLIT-orange?style=for-the-badge&logo=replit&logoColor=white"/></a> |
| **Koyeb** | <a href="https://app.koyeb.com/auth/signin" target="_blank"><img alt="Deploy to Koyeb" src="https://img.shields.io/badge/KOYEB-blue?style=for-the-badge&logo=koyeb&logoColor=white"/></a> |
| **Railway** | <a href="https://railway.app/new" target="_blank"><img alt="Deploy to Railway" src="https://img.shields.io/badge/RAILWAY-black?style=for-the-badge&logo=railway"/></a> |

### 🌐 Solutions d'Infrastructure Alternatives

* **Glitch:** <a href="https://glitch.com/signup" target="_blank"><img src="https://img.shields.io/badge/GLITCH-pink?style=flat-square&logo=glitch" alt="Glitch"/></a>
* **Codespaces:** <a href="https://github.com/codespaces/new" target="_blank"><img src="https://img.shields.io/badge/CODESPACE-navy?style=flat-square&logo=github" alt="Codespaces"/></a>
* **Render:** <a href="https://dashboard.render.com" target="_blank"><img src="https://img.shields.io/badge/RENDER-maroon?style=flat-square&logo=render" alt="Render"/></a>

---

## 🛠️ Modules & Commandes Exclusives

Ce dépôt intègre des modules personnalisés avancés conçus pour une expérience utilisateur premium.

### 📌 1. Catalogue Pinterest Interactif (`pinterest.js`)
Génère une grille graphique de sous-images fusionnées via Canvas (10 photos par page) avec navigation dynamique.
* **Usage :** `pinterest [mot-clé]` (Alias : `pin`)
* **Fonctionnement :** Répondre avec un chiffre (`1` à `10`) pour recevoir l'image HD unique, ou taper `page [N°]` pour scroller dans le catalogue.

### 🎧 2. Playlist Permanente Locale (`shadey.js`)
Système de streaming audio complet doté d'une persistance des données via stockage local JSON.
* **Usage Public :** `shadey list` (voir les titres) et `shadey play [Numéro]` (écouter un son).
* **Gestion Admin (Owner Restreint) :** `shadey add Titre | Lien_MP3` et `shadey remove` pour nettoyer la liste.

### 💘 3. Matchmaking Automatique (`pair.js`)
Algorithme de calcul de compatibilité amoureuse au sein du groupe avec polices stylisées et superposition d'avatars.
* **Usage :** `paire` (Alias : `couple`, `match`)

---

## ⚡ Exemple de Workflow CI/CD

Configuration automatisée pour l'intégration et le déploiement continu via GitHub Actions (`.github/workflows/deploy.yml`) :

```yaml
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: npm install

      - name: Start application
        run: npm start
