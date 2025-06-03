# 🌡️ IoT Temp Watch

A full-stack mini project that fetches real-time temperature data from an online sensor API and displays it on a simple dashboard.

> ⏱ This project is designed as a 2-day technical test for technician-level developers.

---

## 📌 Project Goal

Build a small IoT-enabled web app that:
- Retrieves temperature or humidity data from a public sensor API
- Stores and exposes the data via a backend service
- Displays the data in real time or at regular intervals via a frontend interface
- integrate AI features (LLM, RAG, Model deep learning, ...)

---

## ⚙️ Stack Suggestions

### Backend
Python (Flask)
SQLite3 pour la persistance
IA : Modèle LSTM bidirectionnel (TensorFlow/Keras)

### Frontend
- React (preferred).

### Optional
- WebSocket for real-time updates
- SQLite or local JSON for persistence
- Docker/Docker Compose
- GitHub Actions CI
- How to Contribute : https://www.youtube.com/embed/yzeVMecydCE

---
## 🌐 Data Source

Use one of the following free/public sensor APIs:
- [Open-Meteo API](https://open-meteo.com/en/docs)
- [ThingSpeak](https://thingspeak.com/)
- Any dummy IoT API or mock sensor server
---

## ✅ What You’ll Be Assessed On

| Category        | Details                                                                 |
|----------------|-------------------------------------------------------------------------|
| Figma design    |  propose or improve a design figma
| 🏗 Project Setup | Proper use of JHipster to scaffold and configure the app               |
| 🔒 Authentication | Secure login system using JWT and protected API routes                  |
| 💻 Frontend       | Functional React UI to manage employees with proper state handling     |
| 📦 API Usage      | Clean and secure usage of RESTful APIs                                 |
| 🧼 Code Quality   | Maintainable, modular, and readable code                               |
| 🔁 Git Practices  | Use of Git flow, meaningful commit messages, and clean pull requests   |

## Evaluation Criteria
| Area              | Importance |
|-------------------|------------|
| Git usage         | ★★★★☆     |
| Backend functionality | ★★★★☆ |
| Frontend UX       | ★★★★☆     |
| Code quality      | ★★★★☆     |
| Documentation     | ★★★★☆     |
| Bonus features    | ★★☆☆☆     |
| IoT               | ★★★★☆     |

## Project Structure
```
iot-temp-watch/
├── .githup/
│   └── workflows/
│       └── ci.yml
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── requirements.txt
    ├── RAG/ 
         └──rag.py
│        └── agri_laws.pdf
│        └──agro_climate_zones.pdf
│        └── corps_techniques.pdf
         └── .env
        
│ └── .env
│   ├── database/
│   ├── model/
│   │   └── m.keras
│   └── services/
│       └── weather_fetcher.py
├── data/
│   └── latest.js
│   └── history.js
frontend/
│   └────── src/
│       ├── public/
│       ├── dist/
│       └── package.json
│
└── README.md

## Configuration manuelle

1. Télécharger Python 3.10 depuis le site officiel :
     https://www.python.org/downloads/release/python-3109/
 
 Créer un environnement virtuel Python :
   ```bash
   python3.10 -m venv iot-env
   ```
Activer l'environnement virtuel :
   - Windows :
     ```bash
     iot-env\Scripts\activate
     ```

2. ou bien Utiliser conda pour créer un environnement compatible :
 Windows PowerShell
 ```bash
  wget "https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe" -outfile ".\miniconda.exe"
  Start-Process -FilePath ".\miniconda.exe" -ArgumentList "/S" -Wait
  del .\miniconda.exe
 ```
 ```bash
 conda create -n iot-env python=3.10
 conda activate iot-env
 ```
3. Installer les dépendances Python :
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. Créer un fichier `.env` avec le contenu suivant :
   ```
   PORT=5000
   DATABASE_PATH=temperature.db
   DEBUG=True
   ```

5. Lancer l'application Flask :
   ```bash
   cd backend
   python app.py
   ```
## 💬 Fonctionnalité IA : Chatbot FellahGPT (RAG)

Une nouvelle fonctionnalité a été ajoutée : **FellahGPT**, un chatbot intelligent spécialisé dans l’agriculture marocaine, reposant sur des documents PDF indexés localement.
### 🔧 Installation (Backend RAG)
```bash
cd backend/RAG
pip install -r requirements.txt
````
Créer un fichier .env :
````bash
GOOGLE_API_KEY=AIzaSyCAi1XPo_dBVxTjTln7LVJVMvBgRd1Qzgk
GOOGLE_MODEL_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash
````
Lancer le moteur RAG :
````bash
python rag.py
````
### Configuration du Frontend

1. Depuis le répertoire frontend, installer les dépendances :
   ```bash
   cd ReactApp
   npm install
   ```

2. Créer un fichier `.env.local` avec le contenu suivant :
   ```
   VITE_API_URL=https://api.open-meteo.com/v1/forecast
   VITE_API_BASE_URL=http://localhost:5000
   ```

3. Lancer le serveur de développement :
   ```bash
   cd frontend/ReactApp
   npm install lucide-react
   npm run dev
   ```

## Points de terminaison de l'API

Le backend fournit les points de terminaison suivants :

- `/data/latest` – Obtenir la dernière température avec tendance
- `/data/history` – Obtenir l'historique des températures des dernières heures

Le chatbot est accessible via un bouton 💬 flottant sur l’interface. Il permet d’interroger des documents comme :

Lois agricoles marocaines

Zones agro-climatiques

Fiches techniques de culture

📚 Technologies utilisées
Flask, FAISS, LangChain, Google Generative AI

React, Vite

Python, JavaScript



## Projet origine
- https://github.com/agri40/test-project-iot-watch.git
