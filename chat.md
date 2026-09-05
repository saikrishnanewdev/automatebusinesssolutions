# AUTOMATE BUSINESS SOLUTIONS — WhatsApp AI Chatbot & Lead System Guide

> **Reference Document:** In-depth technical guide for the WhatsApp AI Business Lead Bot, n8n conversational workflows, prompt state machines, and frontend chat components in **Automate Business Solutions**.

---

## 1. 🤖 Overview of the WhatsApp AI Lead Bot

The project includes a complete production-ready **n8n AI Workflow** ([`whatsapp_ai_leads_workflow.json`](file:///c:/Projects/Automate%20Business%20Solutions/whatsapp_ai_leads_workflow.json)) that acts as an automated 24/7 lead intake assistant on Meta WhatsApp.

### System Architecture Flow:
```text
[ Incoming WhatsApp Message ]
             │
             ▼
[ Meta Webhook Endpoint (n8n) ]
             │
             ▼
[ Message Normalizer Code Node ]
             │
             ▼
[ Google Sheets CRM Lookup (by Phone) ]
             │
             ▼
[ LangChain AI Agent (Ollama Qwen2.5 3B + Memory Buffer) ]
             │
             ▼
[ Meta Graph API POST (WhatsApp Message Dispatcher) ]
```

---

## 2. 🧩 n8n Workflow Node Breakdown

| Node ID / Name | Node Type | Purpose & Details |
| :--- | :--- | :--- |
| `Webhook` | `n8n-nodes-base.webhook` | Receives HTTP POST webhooks from Meta's WhatsApp Cloud API platform. |
| `Respond to Webhook` | `n8n-nodes-base.respondToWebhook` | Handles Meta Webhook verification handshake by responding with `hub.challenge`. |
| `If3` | `n8n-nodes-base.if` | Verifies that incoming webhook payload actually contains user message data. |
| `Normalize Message` | `n8n-nodes-base.code` | JS script that parses and formats `phone`, `messageText`, and `normalizedText`. |
| `Get Row by Phone` | `n8n-nodes-base.googleSheets` | Queries Google Sheets CRM (`whatsapp_leads_template`) for recipient's state. |
| `AI Agent` | `@n8n/n8n-nodes-langchain.agent` | LangChain autonomous agent that executes system prompts based on customer status. |
| `Chat Ollama` | `@n8n/n8n-nodes-langchain.lmChatOllama` | Local LLM model provider (`qwen2.5:3b`) connected to AI Agent. |
| `Window Buffer Memory` | `@n8n/n8n-nodes-langchain.memoryBufferWindow` | Remembers recent chat context keyed by user's phone number. |
| `HTTP Request` | `n8n-nodes-base.httpRequest` | Sends POST request to Meta Graph API (`/v20.0/{phone_number_id}/messages`) with AI text response. |

---

## 3. 📜 Prompt Engineering & State Machine Logic

The AI agent follows a strict **State Machine** based on the lead record status in Google Sheets:

### 1. Business Directory (Services Offered):
1. App Development
2. Landing Page / Website
3. Excel Automation
4. Business Process Automation
5. System Integration
6. Other Software Solutions

### 2. State Machine Rules:
- **`Status: New` (Unregistered Phone Number):**
  - Bot greets customer, introduces Automate Business Solutions, lists the 6 service options, and asks customer to pick a number (1-6).
- **`Status: Waiting for Details`:**
  - Bot requests contact details in structured format:
    - *Name:*
    - *Mobile No:*
    - *Preferred Time Slot:*
- **`Status: Completed`:**
  - Bot informs customer that details have been received and a human representative will reach out shortly.

---

## 4. 🌐 Frontend Chat & Workflow Simulators

The Next.js web application includes visual elements to showcase this automated chat infrastructure:

1. **Automation Showcase (`src/components/AutomationShowcase.tsx`):**
   - 5-step visualizer (*Customer Request → Webhook Ingestion → Engine Processing → Database Sync → WhatsApp Notification*).
   - Real-time TypeScript code/JSON payload inspection window for client presentations.
2. **Hero Scenario Simulator (`src/components/Hero.tsx`):**
   - Interactive tab switcher showcasing WhatsApp bot payload transformations.
3. **Automation Command Center & Company Profile (`src/components/About.tsx`):**
   - Mock console logging real-time lead ingestion events and bot interactions.
   - **Leadership & Engineering Profiles:** Features **Charan M.C.A** (*Business Analyst & Test Engineer*) & **Krishna B.Tech** (*Database Administrator & DevOps Engineer*).
   - **Value Pillars & Services Grid:** Highlights *Faster Processes*, *Better Accuracy*, *Higher Productivity*, and *Smart Automation* across *Apps Development*, *Landpage Design*, *Excel Works*, *Integration Works*, and *System Work Automation*.
   - **Verified Entity Profile Card:** Displays official contact endpoints (`abs.innovates@gmail.com`, `automatebusinesssolutions@gmail.com`, `https://automatebusinesssolutions.vercel.app`) and headquarters (`Andhra Pradesh, India`).

---

## 5. 👥 Leadership & Technical Ownership

| Member | Degree / Credentials | Role & Responsibilities | Key Expertise |
| :--- | :--- | :--- | :--- |
| **CHARAN** | `M.C.A` | **Business Analyst & Test Engineer** | Workflow Analysis, Test Automation, Process Mapping, Quality Assurance |
| **KRISHNA** | `B.Tech` | **Database Administrator & DevOps Engineer** | Database Architecture, DevOps & CI/CD, Cloud Infrastructure, System Integration |

---

## 6. 🛠️ How to Deploy & Test the WhatsApp AI Bot

### Prerequisites:
- **n8n Instance:** Self-hosted or cloud n8n instance (`v1.0+`).
- **Ollama Local Instance:** Running `ollama run qwen2.5:3b`.
- **Meta WhatsApp Cloud API:** Developer app configured with permanent access token and Phone Number ID.
- **Google Sheets API Service Account:** Credentials JSON file shared with lead tracking spreadsheet.

### Import Steps:
1. Open n8n dashboard -> Click **Workflows** -> **Import from File**.
2. Select [`whatsapp_ai_leads_workflow.json`](file:///c:/Projects/Automate%20Business%20Solutions/whatsapp_ai_leads_workflow.json).
3. Update Credentials for:
   - Google Service Account (`googleApi`)
   - Ollama API Host (`ollamaApi`)
   - Meta WhatsApp Graph API Bearer Token in `HTTP Request` node.
4. Set Workflow to **Active**.

---

© 2026 **AUTOMATE BUSINESS SOLUTIONS**. All rights reserved.
