"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Satellite } from "lucide-react";

const dataSources = [
    { name: "Kepler", confirmed: 4043, color: "bg-blue-500", icon: "❄️" },
    { name: "TESS", confirmed: 1682, color: "bg-green-500", icon: "🌐" },
    { name: "CoRoT", confirmed: 37, color: "bg-purple-500", icon: "🎯" },
    { name: "Ground", confirmed: 342, color: "bg-orange-500", icon: "🌍" },
];

export default function ActiveDataSources() {
    const total = dataSources.reduce(
        (sum, source) => sum + source.confirmed,
        0
    );

    return (
        <Card className="bg-[#1a2332] border-gray-800">
            <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                    <Satellite className="w-5 h-5" />
                    Active Data Sources
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {dataSources.map((source) => (
                        <div
                            key={source.name}
                            className="bg-[#0f1419] rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition-colors"
                        >
                            <div className="text-center mb-3">
                                <div className="text-3xl mb-2">
                                    {source.icon}
                                </div>
                                <h3 className="text-white font-semibold mb-1">
                                    {source.name}
                                </h3>
                                <p className="text-xs text-gray-400">
                                    {source.confirmed.toLocaleString()}{" "}
                                    confirmed
                                </p>
                            </div>
                            <Progress
                                value={(source.confirmed / total) * 100}
                                className="h-1.5"
                            />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
