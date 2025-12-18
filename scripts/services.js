// Configuration data with enhanced details
const configData = {
  web: {
  "title": "Configuration du serveur Web/Marketing",
  "subtitle": "Pile Apache2 + Nginx + PHP + MySQL",
  "icon": "bi-globe",
  "estimatedTime": "20–30 minutes",
  "color": "#667eea",
  "steps": [
    {
      "title": "Mise à jour du système & prérequis",
      "command": "sudo apt update && sudo apt upgrade -y",
      "details": "Mettre à jour les paquets du système et installer les dépendances de base"
    },
    {
      "title": "Installer le serveur Web Apache2",
      "command": "sudo apt install apache2 -y",
      "details": "Installer Apache2 avec les configurations par défaut"
    },
    {
      "title": "Installer la base de données MySQL",
      "command": "sudo apt install mysql-server -y",
      "details": "Installer MySQL 8.0 avec une configuration sécurisée"
    },
    {
      "title": "Installer PHP & les modules requis",
      "command": "sudo apt install php libapache2-mod-php php-mysql php-curl php-gd php-mbstring php-xml php-zip -y",
      "details": "Installer PHP 8.1+ avec les extensions couramment utilisées"
    },
    {
      "title": "Configurer l’hôte virtuel",
      "command": "sudo nano /etc/apache2/sites-available/entreprisesyrine.conf",
      "details": "Créer le fichier de configuration de l’hôte virtuel"
    },
    {
      "title": "Activer le site & les modules",
      "command": "sudo a2ensite entreprisesyrine.conf && sudo a2enmod rewrite && sudo a2enmod ssl",
      "details": "Activer le site et les modules nécessaires"
    },
    {
      "title": "Configuration de la base de données",
      "command": "mysql -e \"CREATE DATABASE entreprise; CREATE USER 'webuser'@'localhost' IDENTIFIED BY 'SecurePass123!'; GRANT ALL ON entreprise.* TO 'webuser'@'localhost'; FLUSH PRIVILEGES;\"",
      "details": "Créer la base de données et l’utilisateur avec des identifiants sécurisés"
    },
    {
      "title": "Déployer l’application Web",
      "command": "sudo cp -r web_app/* /var/www/html/ && sudo chown -R www-data:www-data /var/www/html",
      "details": "Copier les fichiers de l’application et définir les permissions appropriées"
    },
    {
      "title": "Certificat SSL (Let’s Encrypt)",
      "command": "sudo apt install certbot python3-certbot-apache -y && sudo certbot --apache",
      "details": "Installer et configurer le certificat SSL pour le HTTPS"
    },
    {
      "title": "Configuration finale & redémarrage",
      "command": "sudo systemctl restart apache2 && sudo systemctl restart mysql",
      "details": "Redémarrer tous les services et vérifier l’installation"
    }
  ],
  "quickCommands": [
    { "command": "sudo systemctl status apache2", "label": "Vérifier l’état d’Apache" },
    { "command": "sudo mysql -u webuser -p", "label": "Accéder à la base de données" },
    { "command": "sudo tail -f /var/log/apache2/error.log", "label": "Voir les journaux d’erreurs" }
  ],
  "quickInfo": {
    "ports": ["80 (HTTP)", "443 (HTTPS)", "3306 (MySQL)"],
    "directories": ["/var/www/html", "/etc/apache2", "/var/log/apache2"],
    "dependencies": ["Apache2", "MySQL 8.0", "PHP 8.1+", "Certbot"]
  }
},
  monitoring: {
  "title": "Configuration du serveur de supervision Zabbix",
  "subtitle": "Supervision d’infrastructure de niveau entreprise",
  "icon": "bi-graph-up",
  "estimatedTime": "25–35 minutes",
  "color": "#10b981",
  "steps": [
    {
      "title": "Préparation du système",
      "command": "sudo apt update && sudo apt upgrade -y && sudo apt install -y wget gnupg2 software-properties-common",
      "details": "Mettre à jour le système et installer les prérequis"
    },
    {
      "title": "Ajouter le dépôt Zabbix",
      "command": "wget https://repo.zabbix.com/zabbix/6.4/ubuntu/pool/main/z/zabbix-release/zabbix-release_6.4-1+ubuntu$(lsb_release -rs)_all.deb",
      "details": "Télécharger le paquet du dépôt Zabbix"
    },
    {
      "title": "Installer le dépôt",
      "command": "sudo dpkg -i zabbix-release_*.deb && sudo apt update",
      "details": "Installer le dépôt et mettre à jour la liste des paquets"
    },
    {
      "title": "Installer les composants Zabbix",
      "command": "sudo apt install -y zabbix-server-mysql zabbix-frontend-php zabbix-apache-conf zabbix-sql-scripts zabbix-agent",
      "details": "Installer tous les composants du serveur Zabbix"
    },
    {
      "title": "Créer la base de données Zabbix",
      "command": "sudo mysql -uroot -e \"create database zabbix character set utf8mb4 collate utf8mb4_bin; create user zabbix@localhost identified by 'StrongPassword123'; grant all privileges on zabbix.* to zabbix@localhost;\"",
      "details": "Créer la base de données avec des identifiants sécurisés"
    },
    {
      "title": "Importer le schéma initial",
      "command": "sudo zcat /usr/share/zabbix-sql-scripts/mysql/server.sql.gz | mysql --default-character-set=utf8mb4 -uzabbix -p zabbix",
      "details": "Importer la structure de la base de données et les données initiales"
    },
    {
      "title": "Configurer le serveur Zabbix",
      "command": "sudo sed -i \"s/# DBPassword=/DBPassword=StrongPassword123/\" /etc/zabbix/zabbix_server.conf",
      "details": "Mettre à jour le mot de passe de la base de données dans la configuration"
    },
    {
      "title": "Configurer les paramètres PHP",
      "command": "sudo sed -i \"s/# php_value date.timezone Europe\\/Riga/php_value date.timezone Europe\\/Paris/\" /etc/zabbix/apache.conf",
      "details": "Définir le fuseau horaire correct pour PHP"
    },
    {
      "title": "Configurer l’agent Zabbix",
      "command": "sudo sed -i \"s/Server=127.0.0.1/Server=127.0.0.1,172.24.64.5/\" /etc/zabbix/zabbix_agentd.conf",
      "details": "Mettre à jour la configuration de l’agent"
    },
    {
      "title": "Démarrer & activer les services",
      "command": "sudo systemctl restart zabbix-server zabbix-agent apache2 && sudo systemctl enable zabbix-server zabbix-agent apache2",
      "details": "Démarrer tous les services et activer le démarrage automatique"
    }
  ],
  "quickCommands": [
    {
      "command": "sudo systemctl status zabbix-server",
      "label": "Vérifier le serveur Zabbix"
    },
    {
      "command": "zabbix_get -s 127.0.0.1 -k agent.ping",
      "label": "Tester la connexion de l’agent"
    },
    {
      "command": "sudo tail -f /var/log/zabbix/zabbix_server.log",
      "label": "Surveiller les journaux du serveur"
    }
  ],
  "quickInfo": {
    "ports": ["10051 (Serveur)", "10050 (Agent)", "80 (Web)"],
    "directories": ["/usr/share/zabbix", "/etc/zabbix", "/var/log/zabbix"],
    "webInterface": "http://ip_du_serveur/zabbix (admin:zabbix)"
  }
},
  database: {
  "title": "Configuration du serveur de base de données MySQL",
  "subtitle": "Cluster de base de données haute disponibilité",
  "icon": "bi-database",
  "estimatedTime": "15–25 minutes",
  "color": "#f59e0b",
  "steps": [
    {
      "title": "Mise à jour du système",
      "command": "sudo apt update && sudo apt upgrade -y",
      "details": "Mettre à jour les paquets du système"
    },
    {
      "title": "Installer le serveur MySQL",
      "command": "sudo apt install mysql-server -y",
      "details": "Installer le serveur MySQL 8.0"
    },
    {
      "title": "Sécuriser l’installation MySQL",
      "command": "sudo mysql_secure_installation",
      "details": "Lancer l’assistant de configuration de sécurité"
    },
    {
      "title": "Activer l’accès distant",
      "command": "sudo sed -i \"s/^bind-address.*/bind-address = 0.0.0.0/\" /etc/mysql/mysql.conf.d/mysqld.cnf",
      "details": "Configurer MySQL pour accepter les connexions distantes"
    },
    {
      "title": "Créer un utilisateur distant",
      "command": "mysql -e \"CREATE USER 'client'@'172.24.72.%' IDENTIFIED BY 'Client@Secure2025'; GRANT ALL PRIVILEGES ON *.* TO 'client'@'172.24.72.%' WITH GRANT OPTION; FLUSH PRIVILEGES;\"",
      "details": "Créer un utilisateur distant sécurisé avec les permissions appropriées"
    },
    {
      "title": "Configurer les règles du pare-feu",
      "command": "sudo ufw allow from 172.24.72.0/24 to any port 3306",
      "details": "Autoriser l’accès à la base de données depuis un sous-réseau spécifique"
    },
    {
      "title": "Configurer l’utilisateur de sauvegarde",
      "command": "mysql -e \"CREATE USER 'backup_user'@'localhost' IDENTIFIED BY 'Backup@123'; GRANT SELECT, RELOAD, PROCESS, LOCK TABLES ON *.* TO 'backup_user'@'localhost';\"",
      "details": "Créer un utilisateur dédié aux sauvegardes avec des permissions limitées"
    },
    {
      "title": "Mettre en place des sauvegardes automatiques",
      "command": "echo \"0 2 * * * /usr/bin/mysqldump -u backup_user -pBackup@123 --all-databases | gzip > /backup/mysql-\\$(date +\\%Y\\%m\\%d).sql.gz\" | sudo crontab -",
      "details": "Configurer des sauvegardes quotidiennes automatisées"
    },
    {
      "title": "Activer la journalisation binaire",
      "command": "echo \"server-id = 1\nlog_bin = /var/log/mysql/mysql-bin.log\" | sudo tee -a /etc/mysql/mysql.conf.d/mysqld.cnf",
      "details": "Configurer la journalisation binaire pour la réplication"
    },
    {
      "title": "Redémarrer & vérifier",
      "command": "sudo systemctl restart mysql && sudo mysql -e 'SHOW VARIABLES LIKE \"bind_address\";'",
      "details": "Redémarrer le service et vérifier la configuration"
    }
  ],
  "quickCommands": [
    {
      "command": "sudo mysql -u root -p",
      "label": "Accéder à la console MySQL"
    },
    {
      "command": "sudo systemctl status mysql",
      "label": "Vérifier l’état du service"
    },
    {
      "command": "mysql -u client -h 172.24.72.5 -p",
      "label": "Tester la connexion distante"
    }
  ],
  "quickInfo": {
    "ports": ["3306 (MySQL)", "33060 (Protocole MySQL X)"],
    "directories": ["/var/lib/mysql", "/etc/mysql", "/var/log/mysql"],
    "credentials": "client:Client@Secure2025 | root : [Défini lors de l’installation]"
  }
},
  nfs: {
  "title": "Configuration du serveur de partage de fichiers NFS",
  "subtitle": "Système de fichiers réseau de niveau entreprise",
  "icon": "bi-folder",
  "estimatedTime": "10–20 minutes",
  "color": "#8b5cf6",
  "steps": [
    {
      "title": "Préparation du système",
      "command": "sudo apt update && sudo apt upgrade -y",
      "details": "Mettre à jour les paquets du système"
    },
    {
      "title": "Installer le serveur NFS",
      "command": "sudo apt install nfs-kernel-server -y",
      "details": "Installer le paquet du serveur NFS"
    },
    {
      "title": "Créer le répertoire partagé",
      "command": "sudo mkdir -p /srv/nfs_collab && sudo chmod 755 /srv/nfs_collab",
      "details": "Créer le répertoire partagé et définir les permissions"
    },
    {
      "title": "Créer l’utilisateur et le groupe NFS",
      "command": "sudo groupadd -g 50000 nfsusers && sudo useradd -u 50000 -g nfsusers -s /bin/false -m nfsuser",
      "details": "Créer un utilisateur dédié aux opérations NFS"
    },
    {
      "title": "Définir le propriétaire du répertoire",
      "command": "sudo chown nfsuser:nfsusers /srv/nfs_collab",
      "details": "Attribuer le bon propriétaire au répertoire partagé"
    },
    {
      "title": "Configurer les exports NFS",
      "command": "echo \"/srv/nfs_collab 172.24.74.0/24(rw,sync,no_subtree_check,all_squash,anonuid=50000,anongid=50000)\" | sudo tee -a /etc/exports",
      "details": "Configurer les permissions d’export pour un sous-réseau spécifique"
    },
    {
      "title": "Appliquer la configuration des exports",
      "command": "sudo exportfs -ra",
      "details": "Rafraîchir la configuration des exports"
    },
    {
      "title": "Démarrer les services NFS",
      "command": "sudo systemctl start nfs-kernel-server && sudo systemctl enable nfs-kernel-server",
      "details": "Démarrer et activer les services NFS"
    },
    {
      "title": "Configurer le pare-feu",
      "command": "sudo ufw allow from 172.24.74.0/24 to any port nfs",
      "details": "Autoriser le trafic NFS depuis un sous-réseau spécifique"
    },
    {
      "title": "Tester le serveur NFS",
      "command": "showmount -e localhost",
      "details": "Vérifier que les exports NFS sont correctement configurés"
    }
  ],
  "quickCommands": [
    {
      "command": "showmount -e localhost",
      "label": "Lister les exports NFS"
    },
    {
      "command": "sudo systemctl status nfs-kernel-server",
      "label": "Vérifier l’état du service NFS"
    },
    {
      "command": "sudo exportfs -v",
      "label": "Afficher les détails des exports"
    }
  ],
  "quickInfo": {
    "ports": ["2049 (NFS)", "111 (RPC)", "20048 (Mountd)"],
    "directories": ["/srv/nfs_collab", "/etc/exports", "/var/log/nfs"],
    "clientCommand": "sudo mount -t nfs 172.24.74.5:/srv/nfs_collab /mnt/nfs_local"
  }
}

};

// Service icons mapping
const serviceIcons = {
  web: "bi-globe",
  monitoring: "bi-graph-up",
  database: "bi-database",
  nfs: "bi-folder"
};

// Function to show enhanced configuration modal
function showConfig(serviceType) {
  const service = configData[serviceType];
  const modal = new bootstrap.Modal(document.getElementById('configModal'));
  
  // Set modal title and icon
  document.getElementById('configModalLabel').textContent = service.title;
  document.getElementById('modalSubtitle').textContent = service.subtitle;
  document.getElementById('modalServiceIcon').innerHTML = `<i class="bi ${service.icon}"></i>`;
  document.getElementById('stepsCount').textContent = `${service.steps.length} Steps`;
  document.getElementById('estimatedTime').textContent = service.estimatedTime;
  
  // Set header gradient based on service color
  const header = document.querySelector('.gradient-header');
  header.style.background = `linear-gradient(135deg, ${service.color} 0%, ${adjustColor(service.color, -20)} 100%)`;
  
  // Load steps with timeline design
  const stepsContent = document.getElementById('stepsContent');
  stepsContent.innerHTML = service.steps.map((step, index) => `
    <div class="step-item" data-step="${index + 1}">
      <div class="step-number">${index + 1}</div>
      <div class="step-content">
        <div class="d-flex justify-content-between align-items-start">
          <h6 class="step-title">${step.title}</h6>
          <span class="badge bg-light text-dark small">Step ${index + 1}</span>
        </div>
        <p class="text-muted small mb-2">${step.details}</p>
        <div class="step-command">
          <button class="copy-btn" onclick="copyToClipboard('${step.command.replace(/'/g, "\\'")}')">
            <i class="bi bi-clipboard"></i>
          </button>
          <pre><code>${step.command}</code></pre>
        </div>
      </div>
    </div>
  `).join('');
  
  // Load quick commands
  const quickCommands = document.getElementById('quickCommands');
  quickCommands.innerHTML = service.quickCommands.map(cmd => `
    <div class="col-12">
      <div class="quick-command" onclick="copyToClipboard('${cmd.command.replace(/'/g, "\\'")}')">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <pre class="mb-1">${cmd.command}</pre>
            <small><i class="bi bi-terminal me-1"></i>${cmd.label}</small>
          </div>
          <i class="bi bi-clipboard text-primary"></i>
        </div>
      </div>
    </div>
  `).join('');
  
  // Load quick info
  const quickInfo = document.getElementById('quickInfo');
  quickInfo.innerHTML = `
    <div class="info-item">
      <div class="info-icon">
        <i class="bi bi-hdd-network"></i>
      </div>
      <div class="info-content">
        <h6>Service IP</h6>
        <p>${getServiceIP(serviceType)}</p>
      </div>
    </div>
    
    <div class="info-item">
      <div class="info-icon">
        <i class="bi bi-diagram-3"></i>
      </div>
      <div class="info-content">
        <h6>VLAN</h6>
        <p>${getServiceVLAN(serviceType)}</p>
      </div>
    </div>
    
    <div class="info-item">
      <div class="info-icon">
        <i class="bi bi-door-open"></i>
      </div>
      <div class="info-content">
        <h6>Ports</h6>
        <p>${service.quickInfo.ports.join(', ')}</p>
      </div>
    </div>
    
    <div class="info-item">
      <div class="info-icon">
        <i class="bi bi-folder"></i>
      </div>
      <div class="info-content">
        <h6>Key Directories</h6>
        <p>${service.quickInfo.directories.join(', ')}</p>
      </div>
    </div>
  `;
  
  // Set up download button
  const downloadBtn = document.getElementById('downloadScriptBtn');
  downloadBtn.onclick = function() {
    downloadScript(serviceType);
  };
  
  // Set up copy commands button
  document.getElementById('copyCommandsBtn').onclick = function() {
    const allCommands = service.steps.map(step => step.command).join('\n');
    copyToClipboard(allCommands);
    showToast('All commands copied to clipboard!', 'success');
  };
  
  // Set up print button
  document.getElementById('printGuideBtn').onclick = function() {
    printConfiguration(serviceType);
  };
  
  // Set up start installation button
  document.getElementById('startInstallBtn').onclick = function() {
    if (confirm(`Start installation of ${service.title}? This will download the installation script.`)) {
      downloadScript(serviceType);
    }
  };
  
  // Show modal with animation
  modal.show();
  
  // Add smooth animation to steps
  setTimeout(() => {
    const steps = document.querySelectorAll('.step-item');
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-20px)';
        step.offsetHeight; // Trigger reflow
        step.style.transition = 'all 0.5s ease';
        step.style.opacity = '1';
        step.style.transform = 'translateX(0)';
      }, index * 100);
    });
  }, 300);
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
  let usePound = false;
  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) + amount;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  let b = ((num >> 8) & 0x00FF) + amount;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  let g = (num & 0x0000FF) + amount;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
}

// Get service IP from data attributes
function getServiceIP(serviceType) {
  const card = document.querySelector(`[data-service="${serviceType}"]`);
  return card ? card.getAttribute('data-ip') : 'N/A';
}

// Get service VLAN from data attributes
function getServiceVLAN(serviceType) {
  const card = document.querySelector(`[data-service="${serviceType}"]`);
  return card ? card.getAttribute('data-vlan') : 'N/A';
}

// Copy to clipboard function
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Command copied to clipboard!', 'success');
  }).catch(err => {
    console.error('Failed to copy: ', err);
    showToast('Failed to copy command', 'error');
  });
}

// Show toast notification
function showToast(message, type = 'info') {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();
  
  const toast = document.createElement('div');
  toast.className = `toast align-items-center text-bg-${type} border-0`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'assertive');
  toast.setAttribute('aria-atomic', 'true');
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        <i class="bi bi-${type === 'success' ? 'check-circle' : 'exclamation-circle'} me-2"></i>
        ${message}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  const bsToast = new bootstrap.Toast(toast, { delay: 3000 });
  bsToast.show();
  
  toast.addEventListener('hidden.bs.toast', () => {
    toast.remove();
  });
}

// Print configuration guide
function printConfiguration(serviceType) {
  const service = configData[serviceType];
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>${service.title} - Installation Guide</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
          h2 { color: #34495e; margin-top: 30px; }
          .step { margin: 20px 0; padding: 15px; border-left: 4px solid #3498db; background: #f8f9fa; }
          code { background: #2c3e50; color: #ecf0f1; padding: 2px 6px; border-radius: 3px; }
          .info-box { background: #e8f4fc; border: 1px solid #bce0fd; padding: 15px; margin: 20px 0; }
          @media print { .no-print { display: none; } }
        </style>
      </head>
      <body>
        <h1>${service.title}</h1>
        <p><strong>Subtitle:</strong> ${service.subtitle}</p>
        <p><strong>Estimated Time:</strong> ${service.estimatedTime}</p>
        
        <div class="info-box">
          <h3>Quick Information</h3>
          <p><strong>IP Address:</strong> ${getServiceIP(serviceType)}</p>
          <p><strong>VLAN:</strong> ${getServiceVLAN(serviceType)}</p>
          <p><strong>Ports:</strong> ${service.quickInfo.ports.join(', ')}</p>
        </div>
        
        <h2>Installation Steps</h2>
        ${service.steps.map((step, index) => `
          <div class="step">
            <h3>Step ${index + 1}: ${step.title}</h3>
            <p>${step.details}</p>
            <pre><code>${step.command}</code></pre>
          </div>
        `).join('')}
        
        <div class="no-print">
          <hr>
          <p><em>Document generated on ${new Date().toLocaleDateString()}</em></p>
          <button onclick="window.print()">Print Guide</button>
          <button onclick="window.close()">Close</button>
        </div>
        
        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

// Enhanced download function
function downloadScript(serviceType) {
  const service = configData[serviceType];
  const ip = getServiceIP(serviceType);
  const vlan = getServiceVLAN(serviceType);
  
  // Generate comprehensive script with header
  const header = `#!/bin/bash
# ================================================
# ${service.title}
# ${service.subtitle}
# ================================================
# Generated: ${new Date().toLocaleDateString()}
# Service IP: ${ip}
# VLAN: ${vlan}
# Estimated Time: ${service.estimatedTime}
# ================================================

# Color codes for output
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
BLUE='\\033[0;34m'
PURPLE='\\033[0;35m'
CYAN='\\033[0;36m'
NC='\\033[0m' # No Color

# Logging function
log() {
    echo -e "\${GREEN}[INFO]\${NC} \$1"
}

error() {
    echo -e "\${RED}[ERROR]\${NC} \$1"
}

warning() {
    echo -e "\${YELLOW}[WARNING]\${NC} \$1"
}

success() {
    echo -e "\${GREEN}[SUCCESS]\${NC} \$1"
}

# Check if running as root
if [ "\$(id -u)" -ne 0 ]; then
    error "This script must be run as root or with sudo"
    exit 1
fi

# Create log directory
mkdir -p /var/log/installation
LOG_FILE="/var/log/installation/${serviceType}_install_\$(date +%Y%m%d_%H%M%S).log"
exec > >(tee -a "\$LOG_FILE") 2>&1

log "Starting installation of ${service.title}"
log "Log file: \$LOG_FILE"

`;

  // Generate steps as functions
  const stepsScript = service.steps.map((step, index) => `
# Step ${index + 1}: ${step.title}
step_${index + 1}() {
    log "Step ${index + 1}: ${step.details}"
    echo -e "\${CYAN}Command:\${NC} ${step.command}"
    
    # Execute command
    if ${step.command}; then
        success "Step ${index + 1} completed successfully"
    else
        error "Step ${index + 1} failed"
        return 1
    fi
}

`).join('');

  // Main execution script
  let mainScript = `
# Main installation process
main() {
    log "Beginning installation process..."
    
    # Execute all steps
`;

  // Add each step to main function
  service.steps.forEach((step, index) => {
    mainScript += `    if ! step_${index + 1}; then
        error "Installation failed at step ${index + 1}"
        exit 1
    fi
    echo ""`;
  });

  mainScript += `    
    success "Installation completed successfully!"
    log "Installation log saved to: \$LOG_FILE"
    
    # Display summary
    echo "================================================"
    echo "         INSTALLATION SUMMARY"
    echo "================================================"
    echo "Service: ${service.title}"
    echo "IP Address: ${ip}"
    echo "VLAN: ${vlan}"
    echo "Ports: ${service.quickInfo.ports.join(', ')}"
    echo "Estimated Time: ${service.estimatedTime}"
    echo "Log File: \$LOG_FILE"
    echo "================================================"
}
  # Run main function
  main "$@"`;

  const fullScript = header + stepsScript + mainScript;

  // Create and trigger download
  const blob = new Blob([fullScript], { type: 'text/x-shellscript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${serviceType}_server_install.sh`;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  
  // Show success message
  showToast('Installation script downloaded successfully!', 'success');
  
  // Cleanup
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

// Initialize service cards
document.addEventListener('DOMContentLoaded', function() {
  // Add click handlers to all service cards
  document.querySelectorAll('.service-card').forEach(card => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', function(e) {
      // Don't trigger if clicking on buttons or links inside the card
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
      
      const serviceType = this.getAttribute('data-service');
      showConfig(serviceType);
    });
  });
  
  // Add toast container
  const toastContainer = document.createElement('div');
  toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
  toastContainer.style.zIndex = '9999';
  document.body.appendChild(toastContainer);
});