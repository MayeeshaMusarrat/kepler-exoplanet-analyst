# Dashboard Simulation Guide

## Overview

The NASA ExoPlanet Discovery AI Dashboard now features an interactive simulation that demonstrates real-time machine learning training and prediction analysis.

## Features

### 1. **Interactive Training Simulation**

- **Location**: Model Parameters panel (left column)
- **How to Use**:
  - Click the "Start Training" button to begin the simulation
  - Watch metrics improve in real-time over 100 epochs
  - The button changes to "Training in Progress..." and is disabled during training
  - Training automatically stops at epoch 100

- **What Happens**:
  - Accuracy increases from ~65% to ~99%
  - Loss decreases from ~1.0 to near 0.01
  - Precision and Recall improve progressively
  - Updates occur every 500ms for smooth visualization

### 2. **Real-Time Training Metrics**

- **Location**: Training Progress panel (right side, top row)
- **Dynamic Elements**:
  - **Epoch Counter**: Shows current epoch (1-100) with live updates
  - **Accuracy**: Displays improving accuracy percentage
  - **Loss**: Shows decreasing loss value
  - **Precision**: Monitors precision improvements
  - **Recall**: Tracks recall improvements
  - **Training Indicator**: Shows "Training..." with pulse animation when active

### 3. **Data Analysis Simulation**

- **Location**: Data Input panel (left column, middle row)
- **How to Use**:
  - Enter exoplanet observation data:
    - Transit Depth (ppm)
    - Period (days)
    - Duration (hours)
    - Signal-to-Noise Ratio
  - Click "Analyze Data" to run prediction
  - Probability updates in the Prediction Result panel

- **What Happens**:
  - Generates random probability between 65% and 95%
  - Can be triggered multiple times with different results
  - Simulates model inference on new data

### 4. **Dynamic Prediction Results**

- **Location**: Prediction Result panel (middle column, middle row)
- **Adaptive Display**:
  - **Probability ≥ 75%**:
    - Green check icon
    - "Likely Exoplanet" status
    - Teal-colored percentage
  - **Probability < 75%**:
    - X icon
    - "Uncertain Result" status
    - Muted colors
  
- **Dynamic Classifications**:
  - ≥ 90%: Very High confidence
  - ≥ 85%: Super Earth classification
  - ≥ 75%: High confidence
  - ≥ 70%: Neptune-like classification
  - ≥ 60%: Medium confidence, Sub-Neptune
  - < 60%: Low confidence, Uncertain

## Simulation Workflow

### Typical User Journey

1. **Adjust Model Parameters**
   - Set Learning Rate (0.001 - 0.1)
   - Choose Batch Size (32, 64, 128, 256)
   - Configure Hidden Layers
   - Set Dropout Rate (0 - 0.5)

2. **Start Training**
   - Click "Start Training" button
   - Watch real-time metric improvements
   - Observe epoch progression (1-100)
   - Training completes automatically

3. **Input Data**
   - Enter observation parameters
   - Click "Analyze Data"
   - View prediction probability

4. **Interpret Results**
   - Check probability percentage
   - Review confidence level
   - See planet classification
   - Estimated radius (static)

## Technical Details

### State Management

- Uses React `useState` hook for simulation data
- Parent component (`dashboard/page.tsx`) manages global state
- Props passed down to child components for reactivity

### Update Mechanism

- Training updates every 500ms using `setInterval`
- Metrics improve with random increments for realistic simulation
- Automatic cleanup on component unmount or training completion

### Component Architecture

```
DashboardPage (Parent - Client Component)
├── State: simulationData, inputData
├── Effects: Training simulation loop
├── Handlers: handleStartTraining, handleAnalyzeData
└── Children:
    ├── ModelParameters (receives onStartTraining, isTraining)
    ├── TrainingProgress (receives epoch, accuracy, loss, etc.)
    ├── DataInput (receives onAnalyze, inputData, setInputData)
    ├── PredictionResult (receives probability)
    ├── ShapAnalysis (static)
    └── ActiveDataSources (static)
```

## Future Enhancements

Potential additions to the simulation:

- [ ] Pause/Resume training functionality
- [ ] Save/Load model states
- [ ] Custom epoch limit selection
- [ ] Historical training run comparison
- [ ] Real-time loss curve visualization
- [ ] Export prediction results
- [ ] Batch data analysis
- [ ] Integration with actual ML models

## Development Notes

### Adding New Metrics

To add a new metric to the simulation:

1. Add to state in `dashboard/page.tsx`:

```typescript
const [simulationData, setSimulationData] = useState({
  // ...existing metrics
  newMetric: 0,
});
```

2. Update in simulation effect:

```typescript
setSimulationData((prev) => ({
  ...prev,
  newMetric: prev.newMetric + Math.random() * 0.1,
}));
```

3. Pass to component:

```tsx
<TrainingProgress newMetric={simulationData.newMetric} />
```

4. Update component props interface and display.

## Troubleshooting

### Training Doesn't Start

- Check browser console for errors
- Ensure no TypeScript errors in components
- Verify button onClick handler is properly connected

### Metrics Don't Update

- Confirm component is receiving props
- Check that parent component is client-side (`"use client"`)
- Verify useEffect dependencies are correct

### Performance Issues

- Reduce update frequency (increase interval from 500ms)
- Limit number of metric updates per iteration
- Use React.memo for static components

## Credits

Built for NASA Space Apps Challenge 2025

- Real-time simulation framework
- Interactive ML training visualization
- Dynamic exoplanet analysis interface
