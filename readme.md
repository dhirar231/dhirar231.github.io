# TechSolutions SARL - Infrastructure Réseau

## 📋 Description du Projet

Documentation complète et interactive de l'infrastructure réseau déployée pour TechSolutions SARL. Ce projet présente une architecture réseau moderne avec **backbone maillé**, segmentation VLAN et services virtualisés.

---

## 🏗️ Architecture du Réseau

### Topologie

-   Backbone totalement maillé pour une redondance maximale
-   4 routeurs principaux interconnectant les départements
-   Segmentation par VLAN pour l'isolation des services

### Routeurs Principaux

| Routeur | Département     | VLAN | Adresse IP     |
| ------- | --------------- | ---- | -------------- |
| RZ1     | Web/Marketing   | 10   | 172.24.0.1/18  |
| RZ2     | IT              | 20   | 172.24.64.1/21 |
| RZ3     | Base de Données | 30   | 172.24.72.1/23 |
| RZ4     | NFS             | 40   | 172.24.74.1/24 |

---

## 🚀 Services Déployés

### Machines Virtuelles par Département

| Département     | Service             | IP          | Statut         |
| --------------- | ------------------- | ----------- | -------------- |
| Web/Marketing   | Apache/Nginx        | 172.24.0.5  | ✅ Fonctionnel |
| IT              | Zabbix Monitoring   | 172.24.64.5 | ✅ Fonctionnel |
| Base de Données | MySQL/PostgreSQL    | 172.24.72.5 | ✅ Fonctionnel |
| NFS             | Serveur de Fichiers | 172.24.74.5 | ✅ Fonctionnel |

---

## 📁 Structure des Fichiers

```
techsolutions-network/
│
├── index.html             # Page d'accueil principale
├── architecture.html      # Détails de l'architecture réseau
├── configuration.html     # Configuration réseau et plan d'adressage
├── services.html          # Services VM et leurs spécifications
├── tests.html             # Résultats des tests et vérifications
├── commands.html          # Commandes de configuration réseau
└── README.md              # Ce fichier
```

---

## 🛠️ Technologies Utilisées

-   **Frontend:** HTML5, CSS3, Bootstrap 5.3.2
-   **Icons:** Bootstrap Icons 1.11.0
-   **Design:** CSS Custom Properties, Responsive Design
-   **Documentation:** Markdown

---

## ✨ Fonctionnalités

### 🎨 Interface Moderne

-   Design responsive et accessible
-   Navigation intuitive avec indicateurs d'état actif
-   Cartes interactives avec effets de survol
-   Schémas réseau visuels

### 📊 Contenu Détaillé

-   Architecture réseau complète avec diagrammes
-   Tables de configuration détaillées
-   Résultats de tests avec métriques de performance
-   Commandes de configuration avec coloration syntaxique

### 🔧 Organisation Technique

-   Onglets pour navigation dans les commandes
-   Badges de statut colorés
-   Progress bars pour les métriques de performance
-   Alertes contextuelles informatives

---

## 🌐 Pages Disponibles

1. **Accueil (index.html)** : Vue d'ensemble de l'infrastructure, cartes de navigation rapide, résumé des statuts des tests
2. **Architecture (architecture.html)** : Diagramme de topologie réseau, détails des routeurs et VLANs, caractéristiques techniques
3. **Configuration (configuration.html)** : Plan d'adressage IP complet, tables de configuration OSPF et VLAN, paramètres DHCP et NAT
4. **Services VM (services.html)** : Description détaillée des services, statuts en temps réel, avantages de la virtualisation
5. **Tests (tests.html)** : Résultats complets des tests de connectivité, métriques de performance, vérifications de sécurité
6. **Commandes (commands.html)** : Commandes de configuration organisées par catégorie, syntaxe colorée, bonnes pratiques

---

## 🎯 Résultats des Tests

### ✅ Connectivité

-   Ping inter-routeurs: 100% de succès
-   Connectivité clients-serveurs: 100% de succès
-   Accès Internet via NAT: 100% de succès

### ⚡ Performance

-   Débit réseau local: 950 Mbps en moyenne
-   Latence inter-routeurs: 1.2 ms en moyenne
-   Convergence OSPF: 3.5 secondes

### 🔒 Sécurité

-   Politiques inter-VLAN: Correctement appliquées
-   Authentification: Configurée sur tous les équipements
-   Monitoring: Actif 24/7 via Zabbix

---

## 🚀 Démarrage Rapide

### Téléchargement

```bash
git clone dhirar231.github.io
cd techsolutions-network
```

### Ouverture

-   Ouvrir `index.html` dans un navigateur web
-   Naviguer entre les pages via le menu de navigation

### Navigation

-   Utiliser le menu supérieur pour accéder aux différentes sections
-   Les liens internes permettent une navigation fluide entre les pages

---

## 📋 Prérequis

-   Navigateur web moderne (Chrome, Firefox, Safari, Edge)
-   Connexion Internet pour charger Bootstrap et les icônes
-   Résolution d'écran recommandée: 1280x720 ou supérieure

---

## 🎨 Personnalisation

Le design utilise des variables CSS pour une personnalisation facile :

```css
:root {
    --primary: #2c3e50;
    --secondary: #3498db;
    --accent: #e74c3c;
    --success: #2ecc71;
    --warning: #f39c12;
    --info: #17a2b8;
}
```
