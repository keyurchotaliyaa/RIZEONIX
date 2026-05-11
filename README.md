# RIZEONIX - Solar Cleaning System

A modern, responsive business website for RIZEONIX, a solar cleaning system company.

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Authentication**: JWT-based (frontend ready)
- **State Management**: Context API
- **Icons**: Lucide React

## Features

- Responsive design with mobile-first approach
- Modern glassmorphism UI with orange-black theme
- JWT authentication system (frontend)
- Protected routes structure
- Interactive quotation calculator
- Professional service showcase
- Gallery with modal views
- Smooth animations and transitions

## Project Structure

```
src/
├── assets/                 # Static assets
├── components/
│   ├── common/            # Reusable components
│   ├── layout/            # Layout components (Header, Footer)
│   └── ui/                # UI components
├── pages/                 # Page components
│   ├── Home/
│   ├── Services/
│   ├── Calculator/
│   ├── Material/
│   ├── Gallery/
│   └── Auth/              # Login/Signup
├── routes/                # Routing configuration
├── context/               # React Context (Auth)
├── hooks/                 # Custom hooks
├── utils/                 # Utility functions
├── services/              # API services
├── data/                  # Static data
└── styles/                # Additional styles
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Color Theme

- Primary Orange: `#ff7a00`
- Black: `#0a0a0a`
- Dark Gray: `#1a1a1a`
- White: `#ffffff`

## Pages

- **Home**: Hero section, features, CTA
- **Services**: Service offerings with details
- **Quotation Calculator**: Interactive pricing calculator
- **Material**: Equipment and materials showcase
- **Gallery**: Project photos and testimonials
- **Auth**: Login/Signup pages

## Authentication

- Mobile number + password authentication
- JWT token storage in localStorage
- Protected route components
- Auth context for state management

## Future Backend Integration

The frontend is structured for easy backend integration:

- Auth context ready for API calls
- Service layer for API communication
- Protected routes for authenticated content
- Form validation and error handling

## Development

- Clean, scalable code architecture
- Functional components with hooks
- Tailwind utility classes
- Modular component structure
- Production-ready setup