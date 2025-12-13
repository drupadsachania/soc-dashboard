# SOC Automation Dashboard - Requirements & Roadmap

## 1. Project Overview
**Goal:** Build a sophisticated, premium-looking web dashboard for a SOC Automation orchestration system.
**Core Stack:** React (Frontend), n8n (Orchestration), Local ML (Inference), Human-in-the-loop (Decision Making).
**Aesthetic:** Premium Dark Mode, "Neon Core" (Cyan/Purple accents), Glassmorphism, Semantic CSS.

## 2. Implemented Features (Frontend)
### 2.1 Dashboard (`/`)
- [x] **KPI Cards**: Active Queue, Avg Search Time, Mean Time to Detect, Critical Threats.
- [x] **Flow Visualizer**: Interactive diagram showing the automation steps (Ingest -> Enrich -> Decide -> Act).
- [x] **Alert List**: Recent alerts with risk levels and status.
- [x] **Classification Chart**: Visual breakdown of alert types.

### 2.2 Playbooks (`/playbooks`)
- [x] **Quick Rules**: UI to view automation logic.
- [x] **High Risk Rules**: Critical logic requiring human approval (Quarantine, Isolate).
- [x] **Low Risk Rules**: Automated actions for lower threats.

### 2.3 Workflows (`/workflows`)
- [x] **Orchestration Canvas**: Placeholder for n8n workflow management.
- [x] **Document Generator**: UI for generating audit-ready reports.

### 2.4 Health Stats (`/health`)
- [x] **Service Status**: Real-time status of n8n, Postgres, Redis, and FastAPI.
- [x] **LLM Stats**: Local model performance monitoring.

### 2.5 Audit Logs (`/audit`)
- [x] **Audit Table**: Immutable record of system actions with filtering and offsets.

### 2.6 Visual Design System
- [x] **Global Layout**: Fixed Sidebar/Header with centered content area.
- [x] **Design System**: Semantic CSS (`index.css`) with custom variables for colors, glassmorphism (`.glass-panel`), and animations (`fadeIn`, `pulse`).

## 3. Future Requirements & Roadmap
### 3.1 Data Architecture
- [ ] **Connectors**:
    - Build/Configure connectors for data ingestion (e.g., Splunk, Elastic, Sentinel).
    - Establish API communication between n8n and the Frontend.
- [ ] **Real-time Data**:
    - Replace mock data with live hooks from n8n webhooks or a backend API.
    - Implement WebSockets for live dashboard updates.

### 3.2 Orchestration (n8n)
- [ ] **Workflow Integration**: Embed or link actual n8n workflows in the `/workflows` page.
- [ ] **Action Triggers**: Allow dashboard buttons ("Approve", "Quarantine") to trigger n8n webhooks.

### 3.3 Enhancements
- [ ] **Interactive Elements**: More complex animations for flow steps.
- [ ] **User Auth**: Implement real user authentication and role-based access.
- [ ] **Advanced Filtering**: Full search capability on Audit Logs and Alerts.

## 4. Technical Constraints
- **Styling**: Use Semantic CSS (`index.css`), avoid inline styles where possible. No Tailwind build step configured.
- **Frontend**: React (Vite).
- **Backend**: Python (FastAPI) for local ML + n8n for flow logic.
