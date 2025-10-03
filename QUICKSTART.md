# 🚀 NASA ExoPlanet Discovery AI - Quick Start Guide

## Overview

A modern web application for analyzing exoplanet data using machine learning, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features Implemented

### ✨ Landing Page (`/`)

- Hero section with space background
- Animated starfield effect
- Statistics showcase
- Call-to-action buttons linking to dashboard

### 📊 Dashboard (`/dashboard`)

A comprehensive AI analysis dashboard featuring:

1. **Model Configuration Panel**
   - Adjustable learning rate
   - Batch size selection
   - Hidden layers configuration
   - Dropout rate control

2. **Training Visualization**
   - Real-time progress tracking
   - Performance metrics display
   - Interactive charts

3. **Data Input Interface**
   - Transit depth input
   - Orbital period
   - Duration measurements
   - Signal-to-noise ratio

4. **Prediction Display**
   - Probability percentage
   - Classification results
   - Confidence indicators

5. **SHAP Feature Analysis**
   - Feature importance visualization
   - Impact scores

6. **Data Source Overview**
   - Kepler, TESS, CoRoT, Ground missions
   - Confirmed exoplanet counts

## Technology Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Component Library**: Radix UI

## Running the Application

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format
```

## Project Structure

```ascii
nasa/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard page
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── dashboard/            # 8 modular dashboard components
│   └── ui/                   # shadcn components
├── lib/
│   └── utils.ts
└── public/
    └── herobg.png            # Hero background image
```

## Navigation

1. **Home to Dashboard**: Click "Start Analysis" or "Launch Dashboard"
2. **Dashboard Navigation**: Use sidebar for future sections

## Design System

### Color Palette

- Background: `#0f1419`
- Cards: `#1a2332`
- Accents: Blue, Green, Orange, Teal, Purple

### Components

All components are modular, reusable, and type-safe.

## Development Notes

- All dashboard components are client components (`'use client'`)
- Fully responsive design
- Accessible with proper ARIA labels
- TypeScript strict mode enabled
- Biome for linting and formatting

## Future Enhancements

- [ ] Integrate real ML model
- [ ] Add data visualization with recharts
- [ ] Implement data fetching from NASA APIs
- [ ] Add user authentication
- [ ] Create additional dashboard pages
- [ ] Add export functionality
- [ ] Implement real-time updates

## Credits

Built for the NASA Space Apps Challenge 2025
