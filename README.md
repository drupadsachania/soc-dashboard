
# SOC Dashboard — Centralized Security Operations Console

SOC Dashboard is a **modern, frontend‑first Security Operations Center (SOC) console** built with **React and Vite**.  
It is designed as a **single, unified workspace** where dashboards, investigations, enrichment context, playbooks, and documentation coexist — so analysts never need to context‑switch or hunt for information.

This project focuses on **analyst experience, clarity, and extensibility**, while remaining backend‑agnostic and integration‑ready.

---

## 🚀 Why This Project Exists

Security operations teams deal with:
- Alert fatigue
- Fragmented tooling
- Context spread across SIEMs, threat intel portals, and internal wikis

This results in slower investigations and higher risk of human error.

**SOC Dashboard addresses this by:**
- Centralizing information into one interface
- Embedding documentation directly into workflows
- Presenting enrichment and historical context alongside alerts
- Supporting human‑in‑the‑loop decision making

> This project is designed to **assist security analysts, not replace them**.

---

## ✨ Key Features

### 🧭 Centralized Console
- Single navigation surface for dashboards, alerts, playbooks, and documentation
- No external wiki or tool hopping required

### 📊 SOC‑Focused Views
- Alert cards with severity and metadata
- Investigation‑friendly layouts
- Expandable context panels for enrichment and history

### 📚 Embedded Documentation
- Documentation lives next to data
- Explanations, playbooks, and guidance appear where decisions are made

### 🧠 Intelligence‑Ready Design
- Designed to support enrichment, similarity scoring, and ML‑assisted insights
- Clear visual hierarchy for dense technical data

### ⚙️ Automation‑Friendly (Human‑in‑Loop)
- UI patterns designed for action recommendations
- Explicit approval gates before any response or containment action

---

## 🏗️ Architecture Overview

SOC Dashboard is designed as a **frontend‑first, integration‑ready SOC console**.

The project emphasizes **UX, workflow clarity, and information architecture**, while remaining flexible enough to integrate with orchestration, enrichment, and analytics backends.

### High‑Level Architecture

```
┌─────────────────────────────────────────────┐
│              SOC Dashboard UI               │
│             (React + Vite SPA)               │
│                                             │
│  • Overview & Metrics                        │
│  • Alerts & Investigation Views              │
│  • Context Panels & Enrichment Display       │
│  • Embedded Documentation & Playbooks        │
│                                             │
└─────────────────────────────────────────────┘
                     │
                     │ API / Webhook / Adapter Layer
                     │ (pluggable, backend‑agnostic)
                     ▼
┌─────────────────────────────────────────────┐
│        External & Internal Systems           │
│                                             │
│  • SIEM / EDR / XDR platforms                │
│  • Threat Intelligence Providers             │
│  • Workflow Orchestrators (e.g., n8n)        │
│  • Analytics / ML services (optional)        │
│                                             │
└─────────────────────────────────────────────┘
```

---

### Design Philosophy

- **Frontend as the control plane**  
  The UI is the analyst’s primary workspace, not a thin visualization layer.

- **Backend‑agnostic by design**  
  The project does not assume a specific SIEM, EDR, or automation engine.

- **Composable integrations**  
  Data can be ingested via APIs, webhooks, or adapters without changing UI logic.

- **Human‑centric workflows**  
  Automation and intelligence assist analysts — final decisions remain human‑driven.

---

## 🔮 Future Integrations (Planned)

The architecture supports optional integrations such as:
- Workflow orchestration (e.g., n8n)
- Threat intelligence enrichment pipelines
- Historical alert similarity analysis
- ML‑assisted alert classification
- Human‑in‑the‑loop response automation

These capabilities are intentionally decoupled to preserve flexibility and maintainability.

---

## 🧑‍💻 Tech Stack

- **Frontend:** React, Vite
- **Styling:** Token‑driven, component‑based design (derived from Figma)
- **State & Logic:** Modular, composable components
- **Integrations:** API / webhook‑based (pluggable)

---

## 📁 Project Structure

```
soc-dashboard/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── layout/          # App shell (sidebar, topbar)
│   ├── pages/           # Route‑level views
│   ├── hooks/           # Shared logic
│   ├── styles/          # Design tokens & global styles
│   └── App.tsx
├── design-tokens.md     # Design system contract
├── component-map.md     # Figma → React mapping
├── docs/                # Architecture & usage docs
├── package.json
└── README.md
```

---

## 🎨 Design & UX Principles

- Dark‑mode first
- Clear visual hierarchy for severity and risk
- Calm, professional, analyst‑friendly UI
- Token‑driven spacing, typography, and colors
- Components designed to map cleanly from Figma to React

This project intentionally avoids visual noise and prioritizes **clarity and decision support**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
git clone https://github.com/drupadsachania/soc-dashboard.git
cd soc-dashboard
npm install
```

### Run Locally

```bash
npm run dev
```

Open:  
`http://localhost:5173`

---

## 🧪 Development Notes

- This repository currently focuses on **frontend architecture and UX**
- Backend services are intentionally decoupled
- Mock data and adapters can be used during development
- Designed to integrate cleanly with existing SOC tooling

---

## 🧩 Who This Is For

- SOC analysts
- Security engineers
- Platform engineers
- Anyone exploring **modern SOC UX design**
- Portfolio / learning projects focused on security tooling

---

## 🤝 Contributions

Contributions, feedback, and ideas are welcome.

If you’d like to:
- Improve UX patterns
- Add integrations
- Refine documentation
- Extend the design system

Please open an issue or pull request.

---

## 📜 License

MIT License

---

## 🧭 Closing Note

SOC Dashboard is not just a UI — it is an exploration of how **security tooling should feel**:
centralized, calm, context‑aware, and human‑first.


