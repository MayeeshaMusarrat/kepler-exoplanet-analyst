# Quick Start: Dashboard Simulation

## Try It Now! 🚀

### 1. Start Training

```
Click "Start Training" in the Model Parameters panel
→ Watch metrics improve in real-time
→ Training runs from Epoch 1 to 100
→ Updates every 500ms
```

### 2. Analyze Data

```
Enter values in the Data Input panel:
- Transit Depth: 2500 (ppm)
- Period: 365.25 (days)  
- Duration: 13.2 (hours)
- SNR: 15.7

Click "Analyze Data"
→ Get instant probability prediction
→ See classification and confidence
```

### 3. Experiment

```
Try multiple analyses:
- Different input values
- Multiple clicks on "Analyze Data"
- Each run gives different probability (65-95%)
```

## What You'll See ✨

### Training Mode

- ⏱️ Epoch counter: 1/100 → 100/100
- 📈 Accuracy: ~65% → ~99%
- 📉 Loss: ~1.0 → ~0.01
- 🎯 Precision & Recall improving
- 💫 "Training..." indicator pulsing

### Prediction Results

- 🟢 **High Probability (≥75%)**: Green check, "Likely Exoplanet"
- ⚪ **Low Probability (<75%)**: Gray X, "Uncertain Result"
- 🏷️ **Classifications**: Super Earth, Neptune-like, Sub-Neptune, Uncertain
- 📊 **Confidence Levels**: Very High, High, Medium, Low

## Features at a Glance

| Feature | Description |
|---------|-------------|
| Real-time Training | Live metric updates every 500ms |
| Interactive Buttons | State changes & disabled states |
| Dynamic Colors | Adaptive UI based on results |
| Controlled Inputs | Full form management |
| Auto-completion | Training stops at epoch 100 |
| Theme Support | Light/Dark mode compatible |

## Pro Tips 💡

1. **Watch the metrics carefully** - Notice how accuracy approaches 100% asymptotically
2. **Try the analyze button multiple times** - Each click simulates a new inference
3. **Compare results** - High vs low probability shows different UI states
4. **Check the animations** - Smooth transitions and pulse effects
5. **Test responsiveness** - Resize window to see adaptive layout

## Next Steps

- 📖 Read [SIMULATION_GUIDE.md](./SIMULATION_GUIDE.md) for detailed documentation
- 🎬 Check [DEMO_SCRIPT.md](./DEMO_SCRIPT.md) for presentation ideas
- 🌟 Explore the Discoveries page for planet analysis
- 🎨 Try the theme switcher in the header

## Need Help?

Common issues and solutions:

**Training not starting?**

- Check if button shows "Start Training" (not "Training in Progress...")
- Refresh the page if needed

**No prediction updates?**

- Make sure to click "Analyze Data" button
- Each click generates a new random probability

**Want to restart training?**

- Wait for training to complete (epoch 100)
- Or refresh the page to reset

---

**Built with ❤️ for NASA Space Apps Challenge 2025**
