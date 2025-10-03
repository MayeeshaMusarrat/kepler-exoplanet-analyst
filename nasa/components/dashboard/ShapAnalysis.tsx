"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function ShapAnalysis() {
    const features = [
        { name: "Transit Depth", value: 0.24, color: "bg-teal-500" },
        { name: "Period", value: -0.21, color: "bg-blue-500" },
        { name: "Duration", value: 0.15, color: "bg-cyan-500" },
        { name: "SNR", value: 0.12, color: "bg-orange-500" },
    ];

    return (
        <Card className="bg-[#1a2332] border-gray-800">
            <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    SHAP Analysis
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4 mb-4">
                    {features.map((feature) => (
                        <div key={feature.name} className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">
                                    {feature.name}
                                </span>
                                <span
                                    className={`font-semibold ${
                                        feature.value > 0
                                            ? "text-green-400"
                                            : "text-blue-400"
                                    }`}
                                >
                                    {feature.value > 0 ? "+" : ""}
                                    {feature.value.toFixed(2)}
                                </span>
                            </div>
                            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
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

                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-3 mt-4">
                    <p className="text-xs text-blue-300 leading-relaxed">
                        💡 The deep transit and orbital period are the strongest
                        indicators of an exoplanet.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
