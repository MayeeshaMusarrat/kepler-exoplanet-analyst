"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function ShapAnalysis() {
    const features = [
        { name: "Transit Depth", value: 0.24, color: "bg-chart-2" },
        { name: "Period", value: -0.21, color: "bg-chart-1" },
        { name: "Duration", value: 0.15, color: "bg-chart-3" },
        { name: "SNR", value: 0.12, color: "bg-chart-4" },
    ];

    return (
        <Card className="bg-card border-border">
            <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-chart-2" />
                    SHAP Analysis
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4 mb-4">
                    {features.map((feature) => (
                        <div key={feature.name} className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">
                                    {feature.name}
                                </span>
                                <span
                                    className={`font-semibold ${
                                        feature.value > 0
                                            ? "text-chart-1"
                                            : "text-chart-2"
                                    }`}
                                >
                                    {feature.value > 0 ? "+" : ""}
                                    {feature.value.toFixed(2)}
                                </span>
                            </div>
                            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${feature.color} transition-all duration-500`}
                                    style={{
                                        width: `${
                                            Math.abs(feature.value) * 100
                                        }%`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-chart-1/10 border border-chart-1/30 rounded-lg p-3 mt-4">
                    <p className="text-xs text-chart-1 leading-relaxed">
                        💡 The deep transit and orbital period are the strongest
                        indicators of an exoplanet.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
