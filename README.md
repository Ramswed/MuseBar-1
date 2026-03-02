# Muse Bar - Site Web Officiel

Site web pour le **Muse Bar**, un établissement de restauration d'exception situé au cœur de Rouen. Découvrez une expérience culinaire unique avec nos planches à partager, cocktails originaux et cave privatisable.

**Version actuelle : 1.0.0**

## Structure du Projet

```
MuseBar/
├── index.html              # Page principale - charge les fragments dynamiquement
├── html/                   # Fragments HTML modulaires
│   ├── navigation.html
│   ├── hero.html
│   ├── menu.html
│   ├── about.html
│   ├── privatisation.html
│   ├── find.html
│   ├── reviews.html
│   ├── media-banner.html
│   └── footer.html
├── css/                    # Styles CSS modulaires
│   ├── variables.css       # Variables CSS (couleurs, espacements)
│   ├── reset.css           # Reset CSS
│   ├── typography.css      # Typographie
│   ├── buttons.css         # Styles des boutons
│   ├── navigation.css      # Navigation
│   ├── hero.css            # Section hero
│   ├── animations.css      # Animations
│   ├── menu.css            # Menu
│   ├── about.css           # Section à propos
│   ├── privatisation.css   # Section privatisation
│   ├── find.css            # Section nous trouver
│   ├── reviews.css         # Section avis
│   ├── media-banner.css    # Bannière média
│   ├── footer.css          # Footer
│   └── responsive.css      # Media queries responsive
├── js/                     # Scripts JavaScript modulaires
│   ├── config/
│   │   ├── config.js       # Configuration principale du site
│   │   └── menu-config.js  # Configuration du menu
│   ├── loader.js           # Chargeur de fragments HTML
│   ├── utils.js            # Fonctions utilitaires
│   ├── navigation.js       # Gestion de la navigation
│   ├── smooth-scroll.js    # Défilement fluide
│   ├── menu-tabs.js        # Gestion des onglets du menu
│   ├── menu-generator.js   # Génération dynamique du menu
│   ├── animations.js       # Animations
│   ├── slideshow.js        # Carrousel d'images
│   └── horaires.js         # Gestion des horaires
├── images/                 # Assets visuels
│   ├── logo.svg            # Logo principal
│   ├── muse.svg            # Logo Muse
│   ├── orange.svg          # Icône favicon
│   ├── bière.png
│   ├── dehors.png
│   ├── terrasse.png
│   ├── cave-privatisation.jpg
│   └── carrousel/          # Images du carrousel
│       ├── bar.jpg
│       ├── biere.jpg
│       ├── cave.png
│       ├── planche.jpg
│       └── terrasse.jpg
├── package.json            # Configuration npm
└── README.md               # Documentation
```

## Architecture

Le site utilise une architecture modulaire avec chargement dynamique des fragments HTML :

- **Fragments HTML** : Chaque section est dans un fichier séparé chargé via `loader.js`
- **CSS modulaire** : Styles organisés par fonctionnalité/section
- **JavaScript modulaire** : Un fichier par fonctionnalité
- **Configuration centralisée** : `config.js` pour les informations du site et `menu-config.js` pour le menu

## Design System

### Palette de Couleurs

```css
:root {
  --primary-color: #f0775a; /* Orange signature */
  --secondary-color: #0b1a39; /* Bleu sophistiqué */
  --accent-color: #ebe7ca; /* Beige élégant */
  --text-color: #000000; /* Texte principal */
  --light-text: #333333; /* Texte secondaire */
  --background: #ffffff; /* Fond principal */
  --dark-bg: #0b1a39; /* Fond sombre */
  --border-color: #ebe7ca; /* Bordures */
  --shadow: rgba(11, 26, 57, 0.1); /* Ombres */
}
```

### Typographie

- **Playfair Display** : Titres principaux
- **Poppins** : Texte général
- **Funnel Display** : Accents

### Breakpoints Responsive

- Desktop : 1200px+
- Tablette : 992px - 1199px
- Mobile Large : 768px - 991px
- Mobile Standard : 576px - 767px
- Mobile Petit : < 576px

## Installation & Déploiement

### Prérequis

- Navigateur moderne (Chrome 90+, Firefox 88+, Safari 14+)
- Serveur web local pour le développement (les fragments HTML sont chargés via fetch)

### Installation Locale

```bash
# Avec npm
npm install
npm start

# Avec npx (sans installation)
npx serve . -p 8000

# Le site sera accessible sur http://localhost:8000
```

## Contact

**Muse Bar**

- Adresse : 4 impasse des Hauts Mariages, 76000 Rouen, France
- Instagram : [@muse_bar_rouen](https://www.instagram.com/muse_bar_rouen/)
- Site : [musebar.fr](https://musebar.fr)

---

Développé par @ramswed pour le Muse Bar

© 2025 Muse Bar. Tous droits réservés.

---

![Homepage du Muse Bar](images/homepage.png)
