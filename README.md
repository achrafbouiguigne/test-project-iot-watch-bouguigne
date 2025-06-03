
##  Contribution : Intégration d’un chatbot RAG (FellahGPT)

Cette contribution ajoute un chatbot intelligent spécialisé dans l’agriculture marocaine, accessible via un bouton flottant sur l’interface web.

---

###  Fichiers ajoutés

#### Backend (`/backend/RAG`)
- `rag.py` : moteur RAG utilisant le contenu de documents PDF.
- `requirements.txt` : dépendances spécifiques au chatbot.
- `agri_laws_in_morocco.pdf`, `agro_climate_zones.pdf`, `corps_techniques.pdf` : documents utilisés pour répondre aux questions.
- `.env` : variables d’environnement (clés API).

#### Frontend (`/frontend/ReactApp`)
- `src/components/RAGchat.jsx` : composant chatbot React.
- `src/api/rag.js` : module API pour interroger le backend.
- Modification de `src/pages/Home.jsx` : intégration du composant `<RAGchat />`.
- Bouton flottant activé via la bibliothèque `lucide-react`.


## Project Structure
```
iot-temp-watch/
├── .githup/
│   └── workflows/
│       └── ci.yml
├── backend/
    ├──RAG/  
        └── rag.py
│       └── requirments.txt
        └──agri_laws_in_morocco.pdf
        └──agro_climate_zones.pdf
        └──corps_techniques.pdf



│   ├──
│   ├── app.py
│   ├── models.py
│   ├── requirements.txt
│   ├── database/
│   ├── model/
│   │   └── m.keras
│   └── services/
│       └── weather_fetcher.py
├── data/
│   └── latest.js
│   └── history.js
├── frontend/
│   └── ReactApp/
│       ├── src/
           └── api/
               └── rag.js  i puted just the added 
            └── api/
                └── RAGChat.jsx

       
              

│       ├── public/
│       ├── dist/
│       └── package.json
│
└── README.md
```

---

### ⚙️ Installation Backend

1. Activer l’environnement Python :

   ```bash
   source iot-env/bin/activate  # ou iot-env\Scripts\activate sous Windows


2.Installer les dépendances du chatbot :
 
   pip install -r backend/RAG/requirements.txt

   Contenu typique de requirements.txt :

         flask
         flask-cors
         pymupdf
         faiss-cpu
         scikit-learn
         google-generativeai
         langchain
         python-dotenv

3.Créer ou vérifier le fichier .env dans backend/RAG/ avec :


         GOOGLE_API_KEY=AIzaSyCAi1XPo_dBVxTjTln7LVJVMvBgRd1Qzgk
         GOOGLE_MODEL_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash"

4.Installation Frontend
       Accéder au répertoire frontend :


                cd frontend/
                Installer la dépendance pour le bouton flottant :


                npm install lucide-react
                Lancer le serveur de développement React :


npm run dev

Utilisation
Le chatbot s’active via un bouton flottant.

Posez des questions sur l’agriculture, les lois ou le climat.

FellahGPT génère des réponses basées sur les documents PDF intégrés.

Projet d’origine
https://github.com/Agri40-Stage/test-project-iot-wat




## Annexes

### État du projet d’origine

Toutes les étapes d’installation et de configuration initiales du projet (backend Flask, base SQLite, frontend React, installation des dépendances, lancement des serveurs) ont été réalisées dans la branche principale (`main`) du dépôt d’origine.

### Ajout pour le futur : Chatbot RAG FellahGPT

Cette branche/fonctionnalité s’appuie sur le projet existant et ajoute une nouvelle fonctionnalité d’intelligence artificielle sous la forme d’un chatbot RAG (Retrieval-Augmented Generation), spécialisé en agriculture marocaine.

Ainsi, cette contribution ne modifie pas les bases déjà mises en place mais :

- Ajoute un dossier `RAG` dans le backend contenant le moteur, les documents, et la configuration.
- Intègre un composant React dans le frontend avec un bouton flottant pour le chatbot.
- Nécessite une installation et configuration supplémentaires détaillées dans ce README pour initialiser le pipeline RAG.

---

