# 📚 Billed - Débuggez et testez un SaaS RH

![home](./images/home.png)

## 📋 Description du projet

Ce projet consiste à déboguer et tester un SaaS RH nommé **Billed**. Le projet est divisé en deux parties :

* **Backend** : API Node.js avec gestion des utilisateurs et des factures.
* **Frontend** : Interface utilisateur en HTML, CSS et JavaScript.

---

## 🛠️ Technologies utilisées

* **HTML**
* **CSS**
* **JavaScript**
* **Jest**
* **Node.js**
* **Express**

---

## 🚀 Installation et configuration

### 🔧 Prérequis

Assurez-vous d'avoir **Node.js** (version 18.16.1 recommandée) installé.

### 🖥️ Installation sur Windows

1. Installer **NVM pour Windows** : [Télécharger NVM](https://github.com/coreybutler/nvm-windows/tags)
2. Changer la version de Node.js :

   ```bash
   nvm install 18.16.1
   nvm use 18.16.1
   ```
3. Ouvrir PowerShell en mode administrateur et exécuter :

   ```powershell
   Set-ExecutionPolicy RemoteSigned
   npm install -g win-node-env
   ```
4. Fermer toutes les instances de terminal.

### 🍎 Installation sur Mac

1. Installer **NVM** : [Télécharger NVM](https://github.com/nvm-sh/nvm)
2. Changer la version de Node.js :

   ```bash
   nvm install 18.16.1
   nvm use 18.16.1
   ```

---

## L'architecture du projet

```
/
├── back/ 
├── front/  
└── images/              
```

---

## 📦 Installation des dépendances

### Backend

```bash
cd back
npm install
```

### Frontend

```bash
cd front
npm install

```

---

## 🏃‍♂️ Lancer le projet

### Backend (API)

```bash
cd back
npm run run:dev
```

L'API est accessible sur **[http://localhost:5678](http://localhost:5678)**.

### Frontend

```bash
cd front
npm start
```

Le frontend est accessible sur **[http://localhost:8080](http://localhost:8080)**.

---

## 👥 Utilisateurs par défaut

### Administrateur

* **Email** : [admin@test.tld](mailto:admin@test.tld)
* **Mot de passe** : admin

### Employé

* **Email** : [employee@test.tld](mailto:employee@test.tld)
* **Mot de passe** : employee

---

## Comment lancer tous les tests en local avec Jest ?

```
$ npm run test
```

## Comment lancer un seul test ?

Installez jest-cli :

```
$npm i -g jest-cli
$jest src/__tests__/your_test_file.js
```

## Comment voir la couverture de test ?

`http://127.0.0.1:8080/coverage/lcov-report/` test
``
