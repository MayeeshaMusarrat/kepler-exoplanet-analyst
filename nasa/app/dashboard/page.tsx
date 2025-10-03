"use client";

import { useState, useEffect } from "react";
import ModelParameters from "@/components/dashboard/ModelParameters";
import TrainingProgress from "@/components/dashboard/TrainingProgress";
import DataInput from "@/components/dashboard/DataInput";
import PredictionResult from "@/components/dashboard/PredictionResult";
import ShapAnalysis from "@/components/dashboard/ShapAnalysis";
import ActiveDataSources from "@/components/dashboard/ActiveDataSources";

export default function DashboardPage() {
    const [simulationData, setSimulationData] = useState({
        epoch: 0,
        totalEpochs: 50,
        accuracy: 94.7,
        loss: 0.143,
        precision: 92.1,
        recall: 96.3,
        probability: 87.3,
        isTraining: false,
    });

    const [inputData, setInputData] = useState({
        transitDepth: "",
        period: "",
        duration: "",
        snr: "",
    });

    // Simulation effect - runs when training is active
    useEffect(() => {
        if (!simulationData.isTraining) return;

        const interval = setInterval(() => {
            setSimulationData((prev) => {
                const newEpoch = prev.epoch + 1;
                if (newEpoch > prev.totalEpochs) {
                    return { ...prev, isTraining: false };
                }

                // Simulate improving metrics
                const accuracyIncrease = Math.random() * 0.3;
                const lossDecrease = Math.random() * 0.005;
                const precisionIncrease = Math.random() * 0.2;
                const recallIncrease = Math.random() * 0.2;

                return {
                    ...prev,
                    epoch: newEpoch,
                    accuracy: Math.min(99.9, prev.accuracy + accuracyIncrease),
                    loss: Math.max(0.01, prev.loss - lossDecrease),
                    precision: Math.min(
                        99.5,
                        prev.precision + precisionIncrease
                    ),
                    recall: Math.min(99.8, prev.recall + recallIncrease),
                };
            });
        }, 500); // Update every 500ms

        return () => clearInterval(interval);
    }, [simulationData.isTraining]);

    const handleStartTraining = () => {
        setSimulationData((prev) => ({
            ...prev,
            isTraining: true,
            epoch: 1,
            accuracy: 60 + Math.random() * 10,
            loss: 0.8 + Math.random() * 0.3,
            precision: 55 + Math.random() * 10,
            recall: 58 + Math.random() * 10,
        }));
    };

    const handleAnalyzeData = () => {
        // Simulate analysis with random probability
        const newProbability = 65 + Math.random() * 30;
        setSimulationData((prev) => ({
            ...prev,
            probability: newProbability,
        }));
    };

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <ModelParameters
                    onStartTraining={handleStartTraining}
                    isTraining={simulationData.isTraining}
                />
                <div className="lg:col-span-2">
                    <TrainingProgress
                        epoch={simulationData.epoch}
                        totalEpochs={simulationData.totalEpochs}
                        accuracy={simulationData.accuracy}
                        loss={simulationData.loss}
                        precision={simulationData.precision}
                        recall={simulationData.recall}
                        isTraining={simulationData.isTraining}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <DataInput
                    onAnalyze={handleAnalyzeData}
                    inputData={inputData}
                    setInputData={setInputData}
                />
                <PredictionResult probability={simulationData.probability} />
                <ShapAnalysis />
            </div>

            <ActiveDataSources />
        </>
    );
}
