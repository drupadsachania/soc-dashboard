# SOC Dashboard — Centralized Security Operations Console

**SOC Dashboard** is a modern, unified **Security Operations Center (SOC) interface** built with **React & Vite**.  
It combines real-time alert monitoring, enrichment, history analysis, documentation, and playbooks — all from a single console designed for SOC analysts.

Unlike fragmented tools, this project puts everything an analyst needs in one place:  
📊 Dashboards • 🧠 Intelligence • 📚 Documentation • ⚙️ Automation

---

## 🚀 Why This Project Exists

Security teams face **alert overload**, fragmented insights, and scattered tooling. Analysts end up shifting between dashboards, SIEM tools, threat intel portals, and internal docs — which hurts productivity and increases response time.

**SOC Dashboard solves this by:**
- Centralizing views (alerts, trends, context)
- Embedding documentation where decisions matter
- Enabling enrichment + similarity scoring
- Supporting human-in-loop automation decisions

This project is designed to **assist analysts** — not replace them.

---

## 🧠 Key Features

### 📌 Unified Console
- Sidebar navigation to key sections (Overview, Alerts, Enrichment, History, Playbooks, Documentation, Settings)
- Topbar with global search and notifications

### 🛡️ SOC-Focused Views
- Alerts card with severity indicators
- Similarity scoring against historical incidents
- Enrichment details (e.g., threat intel and indicators)
- Expandable context panels for drill-downs

### 📚 Inline Documentation
Documentation is embedded within workflows — analysts don’t need to open separate wiki pages.

### 🧠 ML & Intelligence-Assisted
- Local embeddings + classifier for historical similarity indexing
- Integrations with enrichment APIs and internal telemetry

### ⚙️ Human-in-Loop Automation
- Suggested playbook steps (recommended actions)
- Human approval gates before containment

---

## 🏛️ Architecture Overview

```

```
                            +------------------+
 Alerts/Webhooks  --------> |   n8n Orchestrator |
                            +------------------+
                                     |
                                     v
```

+-------------+      +------------------------------+
| Web UI (SPA)| <--> | FastAPI Orchestrator Service |
|  React + Vite|     +------------------------------+
+-------------+                |
|                      |
v                      v
+-------------------+   +------------------+
| FAISS Index + DB  |   | ML Models        |
| (historical       |   | Embeddings +     |
|  alerts metadata) |   | Classifier       |
+-------------------+   +------------------+

````

- **React + Vite** — Fast, modular frontend with modern developer experience.
- **n8n** — Orchestration (webhooks, enrichment APIs, notifications).
- **FastAPI** — Serves ML inference (similarity + recommendations).
- **FAISS + SQLite** — Efficient historical alert search index.
- **Local ML** — Lightweight embedding model + classifier optimized for CPU.

This stack emphasizes **performance, modularity, and analyst empowerment**.

---

## 📦 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js v16+**
- **NPM or Yarn**
- (Optional) **Python 3.9+** for model training & indexing

---

### 🧑‍💻 Frontend Setup

Clone the repo:
```sh
git clone https://github.com/drupadsachania/soc-dashboard.git
cd soc-dashboard
````

Install dependencies:

```sh
npm install
```

Start the frontend:

```sh
npm run dev
```

Navigate to `http://localhost:5173`.

---

### ⚙️ Back-end & Orchestrator

If using the optional FastAPI orchestrator:

1. Create Python virtual environment
2. Install requirements
3. Run API server

```sh
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
uvicorn fastapi_orchestrator:app --reload --port 8000
```

---

## 📁 Example Project Structure

```
soc-dashboard/
├── public/
├── src/
│   ├── components/
│   ├── layout/
│   ├── pages/
│   ├── hooks/
│   ├── styles/
│   └── App.tsx
├── design-tokens.md
├── component-map.md
├── n8n/
├── docs/
├── .gitignore
├── package.json
└── README.md
```

You’ll find:

* **src/components/** — Reusable UI components
* **src/pages/** — Routes and page containers
* **layout/** — App shell (sidebar, topbar, responsive layout)

---

## 📊 Design & UX Principles

This project follows:

* **Dark-mode first design**
* **Component-driven architecture**
* **Embedded documentation** (no context switching)
* **Clear visual hierarchy** for critical alerts and decisions
* **Reusable tokens & spacing system** from Figma guidelines

All UI matches specifications created from the project’s Figma design.

---

## 🧠 Machine Learning

The project includes:

* **Local embeddings model** (lightweight, CPU-friendly)
* **Similarity scoring against historical alerts**
* **Classifier for “known vs new” recommendations**

Model training and indexing scripts are included under `/scripts`.

---

## 📈 Why It Matters

This tool isn’t just a dashboard — it’s an **analyst’s command center** that:

* Reduces cognitive load
* Provides contextual insights
* Speeds investigations
* Keeps analysts in control

Every action suggestion requires explicit analyst approval.

---

## 🛠 Contributions

Contributions are welcome!
Please open issues or pull requests to suggest features, fix bugs, or improve documentation.

---

## 📝 License

This project is open source and licensed under the **MIT License**.

---

## 🔗 Related Links

* **Figma Design Guidelines**
* **Project Architecture Documentation**
* **Deployment & CI/CD Templates**

```

---

### 📌 Notes For Best Results
- Replace the 🔗 *Related Links* section with actual links (Figma, architecture docs, deployment scripts).
- If you prefer a shorter intro version, I can generate that too.

---

Would you like the README in **HTML format**, a **badges / metrics section** (e.g., build status, dependencies), or a **Quick-Start video embed section**?
::contentReference[oaicite:0]{index=0}
```
