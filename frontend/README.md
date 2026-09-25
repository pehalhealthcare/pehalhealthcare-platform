# PehalHealthcare Patient Portal

This repository contains the frontend for the **PehalHealthcare Patient Portal** — a scalable, feature-based React + TypeScript application that supports patient-facing healthcare workflows including appointments, electronic medical records, prescriptions, lab reports, teleconsultation, family management, insurance, payments, and more.

---

## Frontend

The complete frontend application is located inside the `frontend/` directory.

The frontend is built with the following primary stack:

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| Server state | TanStack React Query v5 |
| Client state | Zustand v5 |
| HTTP client | Axios |
| Icons | Lucide React |

---

## Frontend Folder Structure

```
frontend/
├── public/
│   ├── images/
│   ├── icons/
│   └── logos/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── illustrations/
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── MobileNavbar.tsx
│   │   │   ├── Topbar.tsx
│   │   │   ├── PortalLayout.tsx
│   │   │   └── PageHeader.tsx
│   │   │
│   │   └── common/
│   │       ├── PatientAvatar.tsx
│   │       ├── NotificationBell.tsx
│   │       ├── SearchBar.tsx
│   │       ├── DatePicker.tsx
│   │       ├── FileUploader.tsx
│   │       └── LoadingState.tsx
│   │
│   ├── features/
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   │   ├── WelcomeHeader.tsx
│   │   │   │   ├── UpcomingAppointment.tsx
│   │   │   │   ├── RecentReports.tsx
│   │   │   │   ├── HealthScoreCard.tsx
│   │   │   │   ├── MedicineReminder.tsx
│   │   │   │   ├── FamilyMembersCard.tsx
│   │   │   │   └── QuickActions.tsx
│   │   │   ├── dashboard.api.ts
│   │   │   ├── dashboard.hooks.ts
│   │   │   ├── dashboard.types.ts
│   │   │   └── dashboard.utils.ts
│   │   │
│   │   ├── appointments/
│   │   │   ├── components/
│   │   │   ├── appointments.api.ts
│   │   │   ├── appointments.hooks.ts
│   │   │   ├── appointments.types.ts
│   │   │   └── appointments.utils.ts
│   │   │
│   │   ├── emr/
│   │   │   ├── components/
│   │   │   │   ├── EMRHeader.tsx
│   │   │   │   ├── EMRCategoryCard.tsx
│   │   │   │   ├── EMRFolderGrid.tsx
│   │   │   │   ├── DocumentCard.tsx
│   │   │   │   ├── DocumentViewer.tsx
│   │   │   │   ├── DocumentUpload.tsx
│   │   │   │   ├── DocumentShare.tsx
│   │   │   │   └── DocumentFilters.tsx
│   │   │   ├── emr.api.ts
│   │   │   ├── emr.hooks.ts
│   │   │   ├── emr.types.ts
│   │   │   └── emr.utils.ts
│   │   │
│   │   ├── prescriptions/
│   │   ├── lab-reports/
│   │   ├── radiology/
│   │   ├── teleconsultation/
│   │   ├── health-timeline/
│   │   ├── family/
│   │   ├── insurance/
│   │   ├── payments/
│   │   ├── emergency-card/
│   │   ├── notifications/
│   │   ├── profile/
│   │   └── support/
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── ForgotPassword.tsx
│   │   │   └── VerifyOTP.tsx
│   │   │
│   │   └── portal/
│   │       ├── Dashboard.tsx
│   │       ├── Appointments.tsx
│   │       ├── BookAppointment.tsx
│   │       ├── EMR.tsx
│   │       ├── Prescriptions.tsx
│   │       ├── LabReports.tsx
│   │       ├── Radiology.tsx
│   │       ├── Teleconsultation.tsx
│   │       ├── HealthTimeline.tsx
│   │       ├── Family.tsx
│   │       ├── Insurance.tsx
│   │       ├── Payments.tsx
│   │       ├── EmergencyCard.tsx
│   │       ├── Notifications.tsx
│   │       ├── Profile.tsx
│   │       └── Support.tsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.tsx
│   │   ├── ProtectedRoute.tsx
│   │   └── AuthRoute.tsx
│   │
│   ├── lib/
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   ├── endpoints.ts
│   │   │   └── interceptors.ts
│   │   │
│   │   ├── auth/
│   │   │   ├── auth.ts
│   │   │   ├── session.ts
│   │   │   └── permissions.ts
│   │   │
│   │   ├── storage/
│   │   │   └── storage.ts
│   │   │
│   │   └── utils/
│   │       ├── date.ts
│   │       ├── currency.ts
│   │       ├── validation.ts
│   │       └── file.ts
│   │
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   ├── useMediaQuery.ts
│   │   └── usePagination.ts
│   │
│   ├── store/
│   │   ├── auth.store.ts
│   │   ├── patient.store.ts
│   │   └── ui.store.ts
│   │
│   ├── types/
│   │   ├── patient.ts
│   │   ├── doctor.ts
│   │   ├── appointment.ts
│   │   ├── prescription.ts
│   │   ├── lab-report.ts
│   │   ├── emr.ts
│   │   └── api.ts
│   │
│   ├── config/
│   │   ├── navigation.ts
│   │   ├── constants.ts
│   │   └── environment.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## Architecture Overview

### `public/`

Contains static public assets — images, icons, and logos — that are served directly without going through the Vite build system. Files placed here are referenced by absolute URL paths (e.g. `/logo.svg`).

### `src/assets/`

Contains application-managed assets that are imported through the React/Vite build pipeline (e.g. `import logo from '@/assets/images/logo.svg'`). Unlike `public/`, assets here are processed, fingerprinted, and optimised at build time. Use `src/assets/` for assets tightly coupled to components and `public/` for truly static files like favicons or OG images.

### `src/components/`

Contains reusable UI components shared across multiple features or pages.

| Subdirectory | Purpose |
|---|---|
| `ui/` | Generic, design-system-level primitives: `Button`, `Input`, `Modal`, `Badge`, `Skeleton`, `EmptyState`, `Dropdown`. All exported via a barrel `index.ts`. |
| `layout/` | Application shell components: `Sidebar` (collapsible desktop nav), `Topbar` (sticky header), `MobileNavbar` (bottom navigation), `PortalLayout` (Outlet wrapper), `PageHeader` (page title + action slot). |
| `common/` | Healthcare/application-specific reusable components that are not generic UI primitives: `PatientAvatar`, `NotificationBell`, `SearchBar`, `DatePicker`, `FileUploader`, `LoadingState`. |

### `src/features/`

The core of the application architecture. Every patient portal feature is self-contained inside its own subdirectory. Each feature co-locates its:

- **Components** — feature-specific UI that does not belong in `src/components/`
- **API service** — functions that call the backend via the central Axios client
- **Hooks** — TanStack Query hooks that wrap the API service
- **Types** — TypeScript interfaces specific to that feature
- **Utilities** — pure helper functions relevant only to that feature

Current feature modules:

- `dashboard/` — patient overview and health summary
- `appointments/` — appointment listing and management
- `emr/` — electronic medical records
- `prescriptions/` — medication prescriptions
- `lab-reports/` — diagnostic test results
- `radiology/` — imaging reports (X-ray, MRI, CT)
- `teleconsultation/` — video consultation sessions
- `health-timeline/` — chronological health history
- `family/` — family member management
- `insurance/` — insurance policy management
- `payments/` — billing and payment history
- `emergency-card/` — patient emergency profile
- `notifications/` — in-app notification centre
- `profile/` — patient personal profile
- `support/` — help and support tickets

### `src/pages/`

Contains route-level page components. Pages are thin — their primary responsibility is composing feature components into a complete view. Pages should not contain business logic, API calls, or direct Axios usage.

| Directory | Purpose |
|---|---|
| `pages/auth/` | Authentication pages: Login, Register, ForgotPassword, VerifyOTP |
| `pages/portal/` | Patient portal pages: Dashboard, Appointments, EMR, and all other modules |

### `src/routes/`

| File | Purpose |
|---|---|
| `AppRoutes.tsx` | Central route configuration — defines the full route tree for auth and portal paths |
| `ProtectedRoute.tsx` | Guards `/portal/*` routes — redirects unauthenticated users to `/login`, preserving the intended destination |
| `AuthRoute.tsx` | Guards auth routes — redirects already-authenticated users to `/portal/dashboard` |

### `src/lib/`

Contains application infrastructure and shared utilities.

| Subdirectory | Purpose |
|---|---|
| `api/` | Central Axios client (`client.ts`), all endpoint definitions (`endpoints.ts`), request/response interceptors (`interceptors.ts`) |
| `auth/` | Authentication API service (`auth.ts`), session persistence helpers (`session.ts`), UI-level permission helpers (`permissions.ts`) |
| `storage/` | Typed browser `localStorage` abstraction — manages access tokens, refresh tokens, and the cached user object |
| `utils/` | Pure utility functions: `date.ts` (formatting), `currency.ts` (INR), `validation.ts` (email, phone, password), `file.ts` (size and type checks) |

### `src/hooks/`

Contains reusable React hooks that are not tied to any single feature:

| Hook | Purpose |
|---|---|
| `useDebounce` | Generic debouncing for search inputs and similar |
| `useMediaQuery` / `useIsMobile` / `useIsTablet` | Responsive breakpoint detection |
| `usePagination` | Pagination state management |

### `src/store/`

Contains client-side application state managed by Zustand. Zustand stores manage UI and session state only — they are **not** a cache for server data (that is TanStack Query's responsibility).

| Store | Purpose |
|---|---|
| `auth.store.ts` | Authentication state: `isAuthenticated`, `patient`, `login()`, `logout()`, `updatePatient()` |
| `patient.store.ts` | Patient context: currently selected family member for appointment booking |
| `ui.store.ts` | UI preferences: sidebar collapsed/expanded state |

### `src/types/`

Contains shared TypeScript domain types and API envelope types used across features.

| File | Domain |
|---|---|
| `api.ts` | Generic API response and error types |
| `patient.ts` | Patient, Address, EmergencyContact, FamilyMember |
| `doctor.ts` | Doctor, HospitalAffiliation |
| `appointment.ts` | Appointment, BookAppointmentPayload |
| `prescription.ts` | Prescription, Medication |
| `lab-report.ts` | LabReport, LabParameter |
| `emr.ts` | EMRDocument, DocumentAccess, DocumentShare, UploadDocumentPayload |

Feature-specific types belong inside the relevant `src/features/<feature>/` directory.

### `src/config/`

Contains application-wide configuration files.

| File | Purpose |
|---|---|
| `navigation.ts` | **Single source of truth** for all navigation items — consumed by the sidebar, mobile bottom nav, and mobile drawer. Never duplicate nav arrays across components. |
| `constants.ts` | Application constants: storage keys, date formats, file size limits, allowed MIME types |
| `environment.ts` | Typed accessor for `import.meta.env` variables — always import from here, never directly from `import.meta.env` in feature code |

---

## Feature Architecture

Every feature follows the same layered pattern:

```
Page
    ↓
Feature Component
    ↓
Feature Hook  (TanStack Query)
    ↓
Feature API Service
    ↓
Central API Client  (src/lib/api/client.ts)
    ↓
Backend API
```

### Example — Dashboard feature

```
src/features/dashboard/
├── components/          # Dashboard-specific UI cards
│   ├── WelcomeHeader.tsx
│   ├── UpcomingAppointment.tsx
│   └── ...
├── dashboard.api.ts     # Calls the backend via apiClient
├── dashboard.hooks.ts   # TanStack Query hooks (useDashboardSummary, etc.)
├── dashboard.types.ts   # DashboardSummary, HealthScore, MedicineReminder
└── dashboard.utils.ts   # Pure helpers (getHealthScoreColor, etc.)
```

- `dashboard.api.ts` calls `get(ENDPOINTS.DASHBOARD.SUMMARY)` — it never imports Axios directly.
- `dashboard.hooks.ts` wraps `dashboardApi.getSummary` in a `useQuery` and exposes `{ data, isLoading, isError }`.
- Dashboard components receive props from the hook result — they never call the API directly.
- `pages/portal/Dashboard.tsx` composes the feature components — it contains no business logic.

**Rule: UI components must never directly call Axios.**

---

## State Management

### TanStack React Query — server state

Used for all data that originates from the backend:

- Fetching and caching API responses
- Loading and error states for every API-driven view
- Mutations (create, update, delete)
- Background refetching and stale-time configuration

### Zustand — client state

Used only for UI and session state that does not originate from the backend:

- Authentication flags and the cached patient profile
- Sidebar collapsed/expanded preference
- Patient context (e.g. selected family member for booking)

**Do not duplicate server data inside Zustand.** If data comes from an API, TanStack Query owns it.

---

## API Architecture

All HTTP communication flows through a single Axios instance:

```
Component
    ↓
Feature Hook  (TanStack Query)
    ↓
Feature API Service  (e.g. dashboard.api.ts)
    ↓
Central Axios Client  (src/lib/api/client.ts)
    ↓
Backend API
```

### Base URL

The backend API base URL is configured exclusively via environment variables:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

This value is accessed through `src/config/environment.ts` — never hardcoded.

### Centralised features in `src/lib/api/`

| File | Responsibility |
|---|---|
| `client.ts` | Axios instance creation; typed `get`, `post`, `put`, `patch`, `del`, `upload` helpers |
| `endpoints.ts` | All endpoint paths in one place. Endpoints not yet confirmed with the backend are marked `[PROPOSED]`. |
| `interceptors.ts` | Request interceptor attaches the Bearer token. Response interceptor handles: silent token refresh on 401, queuing of concurrent requests during refresh, redirect to `/login` if refresh fails. |

### Error handling

The response interceptor and feature API services handle:

| Status | Handling |
|---|---|
| 401 Unauthorized | Automatic token refresh attempt; redirect to login on failure |
| 403 Forbidden | Surfaces a user-friendly access-denied message |
| 404 Not Found | Handled at feature level — shows EmptyState or error message |
| 422 Validation Error | Validation errors returned to the form |
| 429 Too Many Requests | User-friendly rate-limit message |
| 500 Server Error | Generic "something went wrong" message — no stack traces exposed to patients |
| Network error | Offline/network-failure message |

---

## Authentication

Authentication logic is fully separated from page presentation components.

### Files

| File | Purpose |
|---|---|
| `src/lib/auth/auth.ts` | Auth API service: `login`, `register`, `logout`, `forgotPassword`, `verifyOtp`, `resendOtp` |
| `src/lib/auth/session.ts` | Session helpers: `persist` (stores tokens after login), `clear` (clears on logout), `isAuthenticated`, `getCurrentUser` |
| `src/lib/auth/permissions.ts` | UI-level permission helpers (frontend gating only — backend enforces real authorisation) |
| `src/lib/storage/storage.ts` | Typed localStorage wrapper: access token, refresh token, cached user — no sensitive data is logged |
| `src/store/auth.store.ts` | Zustand store: `isAuthenticated`, `patient`, `login()`, `logout()` |
| `src/routes/ProtectedRoute.tsx` | Guards `/portal/*` — unauthenticated users are redirected to `/login` with the `from` location preserved |
| `src/routes/AuthRoute.tsx` | Guards `/login`, `/register`, etc. — authenticated users are redirected to `/portal/dashboard` |

### Flow

1. User submits login form → `authService.login()` is called
2. On success, `session.persist()` stores the access token, refresh token, and patient object in localStorage
3. `useAuthStore` updates `isAuthenticated: true` and `patient`
4. React Router navigates to the originally intended destination (or `/portal/dashboard`)
5. The Axios request interceptor attaches `Authorization: Bearer <token>` to every subsequent request
6. On a 401 response, the interceptor silently attempts token refresh before retrying the original request
7. Logout clears all tokens and navigates to `/login`

### Auth pages

| Page | Path |
|---|---|
| Login | `/login` |
| Register | `/register` |
| Forgot Password | `/forgot-password` |
| OTP Verification | `/verify-otp` |

---

## Patient Portal Modules

| # | Module | Route | Description |
|---|---|---|---|
| 1 | Dashboard | `/portal/dashboard` | Patient health overview: upcoming appointments, recent reports, health score, medicine reminders, family members, and quick actions |
| 2 | Appointments | `/portal/appointments` | View, filter, and manage upcoming and past appointments |
| 3 | Book Appointment | `/portal/appointments/book` | Search for doctors by specialisation and schedule a new appointment |
| 4 | My EMR | `/portal/emr` | Electronic medical records organised by category — view, upload, download, and share documents |
| 5 | Prescriptions | `/portal/prescriptions` | Active and past prescriptions from treating doctors |
| 6 | Lab Reports | `/portal/lab-reports` | Diagnostic test results with parameter-level detail |
| 7 | Radiology | `/portal/radiology` | Imaging reports including X-ray, MRI, CT scan, and ultrasound |
| 8 | Teleconsultation | `/portal/teleconsultation` | Join or review video consultation sessions with doctors |
| 9 | Health Timeline | `/portal/health-timeline` | Chronological view of all health events, reports, and visits |
| 10 | Family | `/portal/family` | Add and manage health records for family members |
| 11 | Insurance | `/portal/insurance` | View and manage health insurance policies and claims |
| 12 | Payments | `/portal/payments` | Billing history, invoices, and payment initiation |
| 13 | Emergency Card | `/portal/emergency-card` | Critical patient information — blood group, allergies, emergency contact — for emergency use |
| 14 | Notifications | `/portal/notifications` | In-app health alerts, appointment reminders, and system notifications |
| 15 | Profile | `/portal/profile` | View and edit personal information and account settings |
| 16 | Support | `/portal/support` | Contact support, raise tickets, and browse FAQs |

---

## EMR Architecture

The EMR module is one of the most critical features of the patient portal. It provides a structured, categorised view of a patient's complete medical history.

### Document categories

| Category | Description |
|---|---|
| Prescriptions | Doctor-issued medication prescriptions |
| Lab Reports | Blood tests, urine analysis, and other diagnostic results |
| Radiology | X-ray, MRI, CT scan, ultrasound images and reports |
| Discharge Summary | Hospital discharge and admission summaries |
| Surgery | Operative notes and surgical reports |
| Vaccination | Immunisation records and certificates |
| Allergy | Known allergies and adverse reactions |
| Chronic Disease | Long-term condition management records |
| Insurance | Policy documents and claim records |
| Emergency Profile | Critical health summary for emergency situations |

### Frontend EMR components

| Component | Purpose |
|---|---|
| `EMRHeader` | Section heading with filter and upload actions |
| `EMRCategoryCard` | Clickable category tile with document count |
| `EMRFolderGrid` | Grid view of category cards |
| `DocumentCard` | Individual document summary tile with metadata |
| `DocumentViewer` | In-portal document preview (PDF/image) |
| `DocumentUpload` | Drag-and-drop / file-picker upload flow |
| `DocumentShare` | Consent-based document sharing with doctors or hospitals |
| `DocumentFilters` | Filter documents by category, date range, uploader |

> **Security note:** The frontend EMR architecture is designed to integrate with backend-enforced authorisation, consent validation, and audit logging. Frontend code alone does not constitute a security boundary for sensitive medical documents. All document access, sharing, and download operations must be authorised server-side.

---

## Development Guidelines

- **Use TypeScript** for all new files. Avoid `any` unless there is an explicitly documented reason.
- **Keep API logic outside UI components.** Components call hooks — hooks call API services — API services call the Axios client.
- **Keep business logic outside presentation components.** Pages compose components; they do not process data.
- **Use reusable components.** Before creating a new component, check `src/components/ui/`, `src/components/layout/`, and `src/components/common/`.
- **Never duplicate navigation configuration.** All nav items are defined once in `src/config/navigation.ts`.
- **Never duplicate API calls.** A feature's API logic belongs in `src/features/<feature>/<feature>.api.ts`.
- **Do not hardcode sensitive data.** Credentials, tokens, and secret keys must never appear in source code.
- **Do not log sensitive patient information.** No medical records, authentication tokens, or personal data in `console.log`.
- **Keep feature logic inside the feature directory.** Code for `prescriptions` does not belong in the `emr` folder.
- **Prefer composition over large monolithic components.** Small, focused components are easier to maintain, test, and reuse.
- **Maintain responsive behaviour.** Every page and component must work correctly at 360px, 768px, 1024px, and 1440px viewports.
- **Every API-driven view must implement** loading, error, empty, and success states — never leave a blank screen.

---

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

```env
# Backend API base URL
VITE_API_BASE_URL=http://localhost:8080/api

# Application metadata
VITE_APP_NAME=PehalHealthcare
VITE_APP_VERSION=1.0.0
```

> **Never commit `.env` files containing real credentials or production secrets.** The `.env.example` file is safe to commit as it contains only placeholder values.

All environment variables must be accessed through `src/config/environment.ts` — never import `import.meta.env` directly in feature or component code.

---

## Installation

```bash
cd frontend
npm install
```

**Prerequisites:**

- Node.js ≥ 18
- npm ≥ 9

---

## Development

```bash
cd frontend
npm run dev
```

Runs the development server at `http://localhost:3000` with HMR enabled.

---

## Production Build

```bash
cd frontend
npm run build
```

Outputs a production-optimised bundle to `frontend/dist/`.

---

## Backend Integration Notes

Endpoints in `src/lib/api/endpoints.ts` marked `[PROPOSED]` are frontend-defined API contracts that have not yet been confirmed with the backend team. These should be validated against the backend OpenAPI specification before production integration.

The frontend never hardcodes patient data. When the backend is not connected, the portal displays proper loading and empty states instead of fabricated medical records.
