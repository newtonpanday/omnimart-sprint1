# Software Requirements Specification (SRS) - OmniMart

## 1. Introduction
OmniMart is an integrated e-commerce platform designed to streamline administrative management and user interactions.

## 2. User Roles
- **Admin**: Manages security settings, updates system credentials, and monitors business analytics.
- **Customer**: Registers, logs in, and interacts with the e-commerce interface.

## 3. Functional Requirements (FR)
1. **FR1**: System shall provide user registration with full name, email, and password.
2. **FR2**: System shall provide user sign-in with email and password authentication.
3. **FR3**: System shall allow tab switching between Sign In and Create Account forms.
4. **FR4**: System shall display active user profile card with user details.
5. **FR5**: System shall provide an administrative credential update form.
6. **FR6**: System shall validate email format in real-time.
7. **FR7**: System shall audit password strength dynamically with visual indicators.
8. **FR8**: System shall display real-time analytics cards for revenue, active orders, and low stock items.

## 4. Non-Functional Requirements (NFR)
1. **NFR1 (Usability)**: UI shall be responsive and fully built using Tailwind CSS.
2. **NFR2 (Performance)**: Dynamic DOM manipulation shall execute without page reload.
3. **NFR3 (Security)**: Real-time validation shall prevent weak passwords and invalid email submissions.
4. **NFR4 (Maintainability)**: Code shall follow standard modular JavaScript practices.