# NASA ExoPlanet Discovery Dashboard

A modern, interactive dashboard for analyzing exoplanet data using machine learning models trained on NASA's Kepler and TESS mission data.

## Features

### 🤖 AI Model Section

- **Model Parameters Configuration**
  - Learning Rate slider (0.001 - 0.1)
  - Batch Size selection (32, 64, 128, 256)
  - Hidden Layers configuration
  - Dropout Rate slider (0 - 0.5)
  - Start Training button

### 📊 Training Progress

- Real-time training visualization
- Metrics display:
  - Accuracy: 94.7%
  - Loss: 0.143
  - Precision: 92.1%
  - Recall: 96.3%
- Training curves for accuracy and loss
- Epoch tracking (47/100)
- Time estimation

### 📥 Data Input

- Transit Depth (ppm)
- Period (days)
- Duration (hours)
- Signal-to-Noise Ratio
- Analyze Data button

### 🔮 Prediction Result

- Exoplanet probability percentage
- Classification badge
- Confidence level
- Estimated radius

### ✨ SHAP Analysis

- Feature importance visualization
- Impact scores for:
  - Transit Depth
  - Period
  - Duration
  - SNR

### 🛰️ Active Data Sources

- Kepler: 4,043 confirmed
- TESS: 1,682 confirmed
- CoRoT: 37 confirmed
- Ground: 342 confirmed

## Components Structure

```ascii
components/
├── dashboard/
│   ├── Sidebar.tsx              # Navigation sidebar
│   ├── DashboardHeader.tsx      # Top header with status
│   ├── ModelParameters.tsx      # ML model configuration
│   ├── TrainingProgress.tsx     # Training visualization
│   ├── DataInput.tsx            # Data input form
│   ├── PredictionResult.tsx     # Prediction display
│   ├── ShapAnalysis.tsx         # Feature importance
│   └── ActiveDataSources.tsx    # Data source cards
└── ui/                          # shadcn components
    ├── card.tsx
    ├── slider.tsx
    ├── badge.tsx
    ├── progress.tsx
    ├── label.tsx
    ├── input.tsx
    └── select.tsx
```

## Routes

- `/` - Landing page with hero section
- `/dashboard` - Main AI model dashboard

## Technologies

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **Radix UI** - Accessible components

## Getting Started

1. Navigate to the dashboard by clicking "Start Analysis" on the landing page
2. Configure model parameters in the left panel
3. Input exoplanet transit data
4. Click "Analyze Data" to get predictions
5. View SHAP analysis for feature importance
6. Monitor training progress in real-time

## Color Scheme

- Background: `#0f1419`
- Cards: `#1a2332`
- Secondary: `#2a3441`
- Accent Blue: `#3b82f6`
- Accent Green: `#10b981`
- Accent Orange: `#f97316`
- Accent Teal: `#14b8a6`
