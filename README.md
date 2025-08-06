# 🟦 Pixel Grid Fullstack

**Pixel Grid** est une application web **Full Stack** permettant d’interagir avec une grille de 20x20 pixels colorés :
- 🎨 Coloriez chaque pixel selon votre choix
- 💾 Sauvegarde persistante via une base de données locale
- ⚛️ Frontend en **React 19** avec **Vite 7**
- 🟢 Backend en **Express.js** avec **SQLite**

---

## ⚡ Fonctionnalités principales

| Fonctionnalité                  | Description                                                                 |
|---------------------------------|-----------------------------------------------------------------------------|
| 🖼️ Affichage de grille dynamique | Génère une grille 20x20 avec état (couleur) depuis la base de données       |
| 🎨 Sélecteur de couleur          | Barre d’outils avec boutons colorés personnalisables                        |
| 🖱️ Interaction utilisateur       | Cliquez sur un pixel pour changer sa couleur                               |
| 🔄 Persistant côté serveur       | Toutes les modifications sont sauvegardées dans la base **SQLite**         |
| 📡 Requêtes HTTP                | `GET /grid` pour récupérer la grille, `POST /setGridColor` pour la modifier |

---

## 🔧 Stack utilisée

| Côté         | Techno            | Détail                            |
|--------------|-------------------|-----------------------------------|
| Frontend     | React 19          | UI interactive avec Hooks         |
|              | Vite 7            | Environnement de dev rapide       |
|              | CSS               | Responsive avec media queries     |
| Backend      | Express.js        | Framework léger pour les routes   |
|              | better-sqlite3    | Base de données en local          |
| Outils       | Nodemon           | Redémarrage auto du serveur       |
|              | Concurrently      | Lancer front + back en une commande |
|              | ESLint            | Analyse statique du code JS/JSX   |

---

## 🚀 Lancer le projet en local

### 📦 Prérequis

- [Node.js](https://nodejs.org/) ≥ 18.x *(inclut npm ≥ 9.x)*

### 🧪 Étapes

#### 1. Cloner le repo
```bash
git clone https://github.com/Hamzael25/Pixel-Grid-Fullstack.git
cd Pixel-Grid-Fullstack
```

#### 2. Installer les dépendances et lancer le serveur de dev
```bash
npm install
npm run dev
