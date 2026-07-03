# Sybiz Vision Help Redesign Prototype

This repository contains a **presentation-style HTML prototype** for the proposed Sybiz Vision Help redesign.

The prototype is intended to be reviewed as a **click-through web experience**. It explains the design concept through the screens themselves: why the Help Home is divided into five entry points, how each guide area is organised, how the task-based TOC flow works, and how redesigned topic pages can still support existing F1-mapped help topics.

> Review note: this is not final approved RoboHelp content. It is an internal prototype for discussing navigation, TOC structure, user task flow, F1 compatibility, and topic presentation.

---

## Open the published prototype

After GitHub Pages is enabled, replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with the actual GitHub Pages URL.

| Start here | Link |
|---|---|
| Open the prototype map | [Open Prototype](https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/) |
| Start from the Help Home screen | [Help Home](https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/sybiz_help_home.html) |
| Open the Workflow-Based User Guide | [Workflow-Based User Guide](https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/sybiz_user_guide_landing.html) |
| Open the Sales and Order Management example | [Sales and Order Management](https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/sybiz_landing_sales_order.html) |
| Open the redesigned topic example | [Example Topic Page](https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/sybiz_topic_preview.html) |

---

## How to use this prototype

The prototype works best if it is reviewed like a short presentation. Start from the Help Home, click through the cards, and then open the example topic page.

### 1. Start from the Help Home

Open **Help Home**.

The Home page shows the proposed five main entry points:

| Click this card | What it demonstrates |
|---|---|
| **Getting Started with Vision** | For new users or returning users who need basic orientation before doing work. The page shows grouped starter topics and the workbook-aligned TOC names. |
| **Setup and Administration** | For administrators, implementers, or power users preparing and maintaining the Vision environment. The page shows setup/admin groups and the matching TOC structure. |
| **Workflow-Based User Guide** | The main path for day-to-day users. It lets users choose a business area and follow the order of work rather than searching by ribbon tab. |
| **Customisation and Extensions** | For users adapting Vision to business-specific needs, such as reports, layouts, fields, imports, exports, or extension-related work. |
| **Glossary** | For quick concept and terminology support. This is shown as a separate entry because terminology support cuts across all guides. |

The purpose of the Home page is to show that the redesign is organised by **why users come to help**, not only by product menu structure.

---

### 2. Open Workflow-Based User Guide

From the Home page, click **Workflow-Based User Guide**.

This screen shows the main task-based guide areas such as Sales, Purchasing, Inventory, Manufacturing, Jobs, Service, Accounting, CRM, and Reports.

Important things to notice on this screen:

| Area | What to look for |
|---|---|
| Business area cards | Each card represents a practical work area, not just a ribbon tab. |
| Full task-based TOC flow link | Opens the full work-sequence board for all workflow sections. |
| Role-Based Job Aids link | Shows the same help topics through a role lens, such as Sales Admin, Warehouse, Accounts Receivable, Purchasing, or System Administrator. |

The design idea is that the Workflow-Based User Guide does **not** replace existing F1 topics. It provides an additional navigation path to reach relevant help topics from the user's work context.

---

### 3. Open Sales and Order Management

From Workflow-Based User Guide, click **Sales and Order Management**.

This page demonstrates how a section can explain its own TOC structure.

It shows:

| Section on the page | What it demonstrates |
|---|---|
| Page explanation | Why this section exists and which users would come here. |
| User task flow behind this TOC | The typical order of sales work: setup, quote/order, pick/pack/deliver, invoice, payment, follow-up, and review. |
| Task-based TOC cards | The proposed TOC groups. Click each card to change the detail panel below. |
| Selected TOC group panel | Shows the topics inside the selected TOC group and explains the purpose/result of that group. |
| F1 compatibility note | Explains that workflow navigation and F1 mapping can coexist. |

Try clicking these cards:

- **Set up sales**
- **Quote and order**
- **Pick, pack and deliver**
- **Invoice customers**
- **Receive customer payments**
- **Sales enquiries and review**
- **Sales troubleshooting**

The active card changes the content in the same area of the page, so the reviewer does not need to scroll through a long static document to understand the structure.

---

### 4. Open the example topic page

From the Sales and Order Management page, open the **topic example**.

This page demonstrates how an existing F1 help topic could be redesigned for readability while keeping the familiar screen-help purpose.

The topic page has two main tabs:

| Tab | What it shows |
|---|---|
| **How to** | Step-by-step guidance using screenshots, notes, warnings, result/output information, and suggested next actions in one flow. |
| **Menu & field reference** | Ribbon path, window/menu location, key fields, controls, conditions, and related F1/context references. |

The design idea is that a user pressing F1 from a Vision screen should quickly understand:

1. what this screen is used for,
2. how to complete the task,
3. what the result will be,
4. what the likely next step is,
5. and where the function sits in the ribbon/menu structure.

---

### 5. Review the supporting guide areas

Return to the Home page and click the other main cards.

| Page | What to check |
|---|---|
| **Getting Started with Vision** | Shows starter topic groups with the actual TOC names listed under each group. |
| **Setup and Administration** | Shows admin/setup topic groups and their supporting TOC entries. |
| **Customisation and Extensions** | Explains why customisation is separate from daily workflow help and lists the aligned TOC entries. |
| **Glossary** | Shows glossary as a concept-support entry point rather than a workflow. |
| **Job-Based Aids** | Shows how users can enter the same topic set by role rather than by workflow or ribbon. |

---

## Key design ideas included in the prototype

### 1. Five purpose-based Help entry points

The five Home cards are intended to match different help-seeking situations:

- first-time use,
- system setup,
- daily business tasks,
- business-specific customisation,
- and concept/terminology lookup.

### 2. Task-based TOC flow

The TOC is presented in the order users are likely to perform work. This supports a more natural flow than an alphabetic or ribbon-only structure.

### 3. F1 mapping compatibility

The redesign does not require removing existing F1/context-sensitive help mapping. A user can still press F1 from a Vision screen and land on the mapped topic. The workflow guide simply provides another path to the same or related topic.

### 4. Role-Based Job Aids as a shortcut layer

Job-Based Aids are not a replacement for the main TOC. They are a role-based shortcut layer over the same topic set, helping users find tasks by responsibility.

### 5. Topic pages split action guidance from reference detail

The example topic page separates practical task guidance from menu/field reference by using tabs:

- **How to** for completing the task,
- **Menu & field reference** for screen and control explanation.

---

## Main prototype pages

| File | Purpose |
|---|---|
| `index.html` | Prototype map and suggested review route |
| `sybiz_help_home.html` | Proposed Help Home with five main entry points |
| `sybiz_user_guide_landing.html` | Workflow-Based User Guide landing page |
| `sybiz_landing_sales_order.html` | Example workflow section with task-based TOC groups |
| `sybiz_topic_preview.html` | Redesigned F1-compatible topic example |
| `sybiz_landing_getting_started.html` | Getting Started with Vision landing page |
| `sybiz_landing_setup_admin.html` | Setup and Administration landing page |
| `sybiz_landing_customisation.html` | Customisation and Extensions landing page |
| `sybiz_glossary_landing.html` | Glossary landing page |
| `sybiz_job_based_aids.html` | Role-based shortcut layer |
| `vision_entry_journeys.html` | Entry scenario explanation for review |
| `vision_journey_boards.html` | Full task-based TOC flow board |

---

## GitHub Pages setup note

Recommended publishing source:

- Branch: `main`
- Folder: `/root` or `/`

The repository should contain `index.html` at the top level so GitHub Pages can serve the prototype entry page.

Do not upload the ZIP file itself to the repository. Upload the extracted files and folders.
