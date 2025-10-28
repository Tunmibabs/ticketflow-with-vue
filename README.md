TicketFlow - Vue.js Implementation
This document outlines the setup, structure, and details for the Vue.js version of the TicketFlow application.

Frameworks and Libraries Used
This project is a client-side application built with the following technologies:

Core Framework: Vue.js 3 (using the Composition API)

Build Tool: Vue CLI (vue-cli-service)

Routing: Vue Router

Styling: Tailwind CSS

Setup and Execution
Install Dependencies: Clone the repository and install the required npm packages from the root directory.
npm install

Run the Development Server: This command starts the Vue CLI development server, typically on http://localhost:8080.
npm run serve 

Build for Production: This command bundles the application for deployment.
npm run build

UI Components and State Structure
State Structure
This application uses a client-side state management strategy based on Vue's Composition API.
Global State: There is no global state manager (like Vuex or Pinia). Instead, a global "Toast" notification state is provided from App.vue and consumed via the useToast composable.
Page-Level State: Pages like TicketsPage.vue manage their own state (e.g., tickets, showForm, editingTicket) using Vue's ref, computed, and onMounted functions.
Data Persistence: All application data (users, tickets) is persisted directly in the browser's localStorage. This is a simulation of a database.
localStorage.getItem("users"): Stores an array of user objects.
localStorage.getItem("tickets"): Stores an array of all ticket objects.
localStorage.getItem("currentUser"): Stores the currently logged-in user object.
localStorage.getItem("authToken"): Simulates a user session token.

Routing: Client-side routing is handled by vue-router. The router/index.js file defines all routes and includes a global beforeEach navigation guard to protect routes by checking for the authToken in localStorage.

Core UI Components
App.vue: The main application entry point. It provides the global ToastContext and renders the router-view and ToastContainer.
DashboardLayout.vue: A wrapper for all authenticated pages. It includes the DashboardSidebar and provides the main content area via a <slot />.
DashboardSidebar.vue: The main navigation sidebar for the app, including links to pages and the logout button.
TicketForm.vue: A reusable form for both creating and editing tickets. It accepts initialData as a prop and emits submit or cancel events. It contains its own validation logic.
DeleteConfirmationDialog.vue: A reusable modal component to confirm a destructive action. It is controlled by an isOpen prop and emits confirm or cancel events.
ToastContainer.vue: Renders the list of active toast notifications by consuming the useToast composable.
StatCard.vue: A simple component to display a single statistic (title, value, icon) on the dashboard.
TicketChart.vue: A simple bar chart component that renders static data passed in as a data prop.

Accessibility and Known Issues

Accessibility
Form Labels: All inputs in TicketForm.vue, LoginPage.vue, and SignupPage.vue are associated with label elements.
Modals: The delete confirmation dialog provides a basic modal overlay. Full keyboard trap and focus management are not implemented.

Known Issues
localStorage Data: The use of localStorage as a database is not secure and is only for demonstration. All data is stored in plain text on the user's computer.
Authentication: The "auth token" is a simple timestamp and is not validated, providing no real security.
Chart Data: The analytics charts on the Dashboard and Analytics pages are placeholders using static, hard-coded data.
Signup Page: The SignupPage.vue file contains a copy of the TicketsPage.vue code and is not a functional signup form. This is a bug that was later rectified.

Test User Credentials
You can create a new user on the Sign Up page (once the bug is fixed). Alternatively, to test the login flow, you can use the following steps:

Sign Up a new user:
Email: test@example.com
Password: password123
Log Out using the button in the sidebar.
Log In on the login page with the same credentials.
