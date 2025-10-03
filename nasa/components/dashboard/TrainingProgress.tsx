"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface TrainingProgressProps {
    epoch: number;
    totalEpochs: number;
    accuracy: number;
    loss: number;
    precision: number;
    recall: number;
    isTraining: boolean;
}

export default function TrainingProgress({
    epoch,
    totalEpochs,
    accuracy,
    loss,
    precision,
    recall,
    isTraining,
}: TrainingProgressProps) {
    return (
        <Card className="bg-card border-border">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-card-foreground flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Training Progress
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                        Epoch:{" "}
                        <span className="text-foreground font-semibold">
                            {epoch}/{totalEpochs}
                        </span>{" "}
                        {isTraining && (
                            <>
                                •
                                <span className="text-chart-1 ml-1 animate-pulse">
                                    Training...
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {/* Chart placeholder - would use recharts or similar */}
                <div className="h-48 bg-muted/20 rounded-lg p-4 relative overflow-hidden">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 700 180"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        {/* Training Accuracy (cyan) */}
                        <polyline
                            points="0,120 50,100 100,85 150,75 200,68 250,62 300,58 350,55 400,52 450,50 500,49 550,48 600,47 650,47 700,46"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-chart-2"
                        />
                        {/* Validation Accuracy (blue) */}
                        <polyline
                            points="0,130 50,110 100,95 150,88 200,83 250,80 300,78 350,76 400,75 450,74 500,73 550,73 600,72 650,72 700,72"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-chart-1"
                        />
                        {/* Loss (red) */}
                        <polyline
                            points="0,20 50,35 100,48 150,60 200,75 250,88 300,98 350,108 400,118 450,128 500,135 550,142 600,148 650,152 700,155"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-destructive"
                        />
                    </svg>

                    {/* Legend */}
                    <div className="absolute bottom-2 left-4 flex gap-4 text-xs">
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-0.5 bg-chart-2"></div>
                            <span className="text-muted-foreground">
                                Training Accuracy
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-0.5 bg-chart-1"></div>
                            <span className="text-muted-foreground">
                                Validation Accuracy
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-0.5 bg-destructive"></div>
                            <span className="text-muted-foreground">Loss</span>
                        </div>
                    </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-4 mt-6">
                    <MetricCard
                        label="Accuracy"
                        value={`${accuracy.toFixed(1)}%`}
                        color="text-chart-1"
                    />
                    <MetricCard
                        label="Loss"
                        value={loss.toFixed(3)}
                        color="text-chart-2"
                    />
                    <MetricCard
                        label="Precision"
                        value={`${precision.toFixed(1)}%`}
                        color="text-chart-5"
                    />
                    <MetricCard
                        label="Recall"
                        value={`${recall.toFixed(1)}%`}
                        color="text-chart-4"
                    />
                </div>
            </CardContent>
        </Card>
    );
}

function MetricCard({
    label,
    value,
    color,
}: {
    label: string;
    value: string;
    color: string;
}) {
    return (
        <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-muted-foreground text-xs mb-1">{label}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
        </div>
    );
}
