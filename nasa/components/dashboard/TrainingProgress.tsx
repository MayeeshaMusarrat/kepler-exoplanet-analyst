"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function TrainingProgress() {
    return (
        <Card className="bg-[#1a2332] border-gray-800">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Training Progress
                    </CardTitle>
                    <div className="text-sm text-gray-400">
                        Epoch:{" "}
                        <span className="text-white font-semibold">47/100</span>{" "}
                        •<span className="text-blue-400 ml-1">4m 15s</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {/* Chart placeholder - would use recharts or similar */}
                <div className="h-48 bg-[#0f1419] rounded-lg p-4 relative overflow-hidden">
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
                            stroke="#06b6d4"
                            strokeWidth="2"
                        />
                        {/* Validation Accuracy (blue) */}
                        <polyline
                            points="0,130 50,110 100,95 150,88 200,83 250,80 300,78 350,76 400,75 450,74 500,73 550,73 600,72 650,72 700,72"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                        />
                        {/* Loss (red) */}
                        <polyline
                            points="0,20 50,35 100,48 150,60 200,75 250,88 300,98 350,108 400,118 450,128 500,135 550,142 600,148 650,152 700,155"
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="2"
                        />
                    </svg>

                    {/* Legend */}
                    <div className="absolute bottom-2 left-4 flex gap-4 text-xs">
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-0.5 bg-cyan-400"></div>
                            <span className="text-gray-400">
                                Training Accuracy
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-0.5 bg-blue-500"></div>
                            <span className="text-gray-400">
                                Validation Accuracy
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-0.5 bg-red-500"></div>
                            <span className="text-gray-400">Loss</span>
                        </div>
                    </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-4 mt-6">
                    <MetricCard
                        label="Accuracy"
                        value="94.7%"
                        color="text-green-400"
                    />
                    <MetricCard
                        label="Loss"
                        value="0.143"
                        color="text-blue-400"
                    />
                    <MetricCard
                        label="Precision"
                        value="92.1%"
                        color="text-purple-400"
                    />
                    <MetricCard
                        label="Recall"
                        value="96.3%"
                        color="text-orange-400"
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
        <div className="bg-[#0f1419] rounded-lg p-4">
            <p className="text-gray-400 text-xs mb-1">{label}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
        </div>
    );
}
