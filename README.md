# 🧭 Entropy — Epistemic AI Security System

*A centralized, uncertainty-aware SOC console for human-in-the-loop intelligence.*

---

## 🔍 Overview

SOC Dashboard has evolved from a frontend-first SOC console into a **decision-support platform for epistemically aware security automation**.
It unifies dashboards, investigations, enrichment context, and AI-driven sense-making — while maintaining full analyst oversight and explainability.

The new architecture integrates **Large Language Models (LLMs)**, **Retrieval-Augmented Generation (RAG)**, and **agentic control loops** to ensure every recommendation is traceable, explainable, and uncertainty-aware.
It’s not just a tool for monitoring — it’s a framework for *thinking clearly under pressure.*

---

## 🚀 Why This Exists

Modern security operations face **epistemic failure under scale**:

* Alerts multiply faster than they can be reasoned about
* Analysts reuse past conclusions as facts
* AI models generate confident but unverified narratives
* Systems reward closure over correctness

**SOC Dashboard: Epistemic Edition** is built to fix that — by exposing uncertainty instead of hiding it.

> “We’re not trying to be right faster.
> We’re trying to stay honest longer.”

---

## 🧩 Core Principles

| ❌ We Refuse To                       | ✅ We Insist On                                            |
| ------------------------------------ | --------------------------------------------------------- |
| Let LLMs decide                      | LLMs generate *hypotheses*, not truth                     |
| Collapse uncertainty into confidence | Make uncertainty *observable and actionable*              |
| Automate irreversible actions        | Require explicit human or agentic approval                |
| Reward speed over honesty            | Reward traceability, explainability, and epistemic safety |
| Hide reasoning behind dashboards     | Expose reasoning trails in the open                       |

---

## 🧠 Key Features

### 🧭 Centralized, Uncertainty-Aware Console

A single workspace that unifies alerts, enrichment, and epistemic reasoning:

* Context panels that display **contradictions and missing evidence**
* Real-time **hypothesis scoring** and **deferral tracking**
* Embedded documentation and rationale visualization

### 🔄 Agentic Decision Loops

Implements a modern **OODA (Observe–Orient–Decide–Act)** pattern:

* **Observe:** Collect telemetry from EDR, CTI, and SIEMs
* **Orient:** LLM-generated hypotheses normalized via RAG
* **Decide:** Specialized agents gate ACT / DEFER / ESCALATE
* **Act:** Human-reviewed, auditable, and reversible actions

### 🧠 RAG-Based Grounding

All AI reasoning is context-anchored using retrieval-augmented generation:

* Prevents hallucination through grounding and evidence scoring
* Introduces *Epistemic Uncertainty Index (EUI)* for every LLM output

### 📊 Observability by Design

Every model output, agent decision, and uncertainty signal is recorded:

* **Raw → Normalized → Scored → Gated → Acted** chain
* Structured observability for AI behavior and analyst review

### 🧩 Extensible Agent Framework

Tower-specific agents (Threat Intel, Incident Response, Uncertainty Control) handle domain workflows independently but cooperate through a shared decision bus.

---

## ⚙️ Architecture Overview

### High-Level Design

```
 ┌──────────────────────────────────────────────┐
 │                SOC Dashboard UI               │
 │             (React + Vite SPA)                │
 │----------------------------------------------│
 │  • Alerts, Enrichment, and Rationale Panels   │
 │  • Agent Decision Loop Visualization          │
 │  • Human-in-Loop Approvals                    │
 │  • Documentation Embedded in Context          │
 └──────────────────────────────────────────────┘
                     │
                     ▼
 ┌──────────────────────────────────────────────┐
 │     AI Decision Support & Agent Layer        │
 │----------------------------------------------│
 │  • LLM Hypothesis Engine (Ollama)            │
 │  • Retrieval-Augmented Context (RAG)         │
 │  • Uncertainty Quantification Module          │
 │  • Domain Agents (Threat, CTI, IR)           │
 │  • Deferral & Escalation Logic               │
 └──────────────────────────────────────────────┘
                     │
                     ▼
 ┌──────────────────────────────────────────────┐
 │          Integrations & Data Sources         │
 │----------------------------------------------│
 │  • SIEM / EDR / XDR                         │
 │  • Threat Intelligence APIs                  │
 │  • Observability & Audit Pipelines           │
 │  • Optional ML / Analytics Services          │
 └──────────────────────────────────────────────┘
```

---

## 🧪 Epistemic Metrics (in development)

| Metric                                   | Purpose                                                        |
| ---------------------------------------- | -------------------------------------------------------------- |
| **EUI — Epistemic Uncertainty Index**    | Quantifies contradiction, dispersion, and evidence sufficiency |
| **HSR — Hallucination Suppression Rate** | Measures false narrative mitigation                            |
| **DR — Deferral Ratio**                  | Tracks valid “I don’t know” outcomes                           |
| **ATI — Analyst Trust Index**            | Captures user trust and explainability quality                 |

---

## 🧰 Tech Stack

**Frontend:** React + Vite
**Agent Framework:** LangGraph / Python services
**LLM Engine:** Ollama (local inference)
**RAG Layer:** Vectorized context embeddings
**Styling:** Token-driven design system (Figma → React sync)
**Logging:** Structured observability with reasoning trails

---

## 🧩 Roadmap

**Phase 1 (Complete):** Control and Orientation correctness
**Phase 2 (In Progress):** RAG integration and uncertainty scoring
**Phase 3 (Planned):** Federated agent orchestration (FeRAG-style)
**Phase 4 (Planned):** Quantitative epistemic evaluation metrics

---

## 🧑‍💻 Who This Is For

* SOC analysts seeking clarity under complexity
* Security engineers designing human-first automation
* Researchers exploring epistemic uncertainty and explainable AI
* Anyone experimenting with **safe, grounded LLMs in security**

---

## 🤝 Contributions

We welcome collaboration in:

* RAG + vector search optimization
* Agent orchestration and decision gating
* Uncertainty quantification
* UI visualization for epistemic metrics

> Pull requests that improve reasoning visibility or trust calibration are especially encouraged.

---

## 📜 License

MIT License

---

## 🧭 Closing Note

**SOC Dashboard** has evolved from a SOC console into a platform for **epistemic integrity** in AI-driven security.
It doesn’t promise certainty — it promises **clarity, traceability, and humility** in the face of uncertainty.

> *“The goal isn’t to eliminate doubt.
> It’s to make doubt work for you.”*
