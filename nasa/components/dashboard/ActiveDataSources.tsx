"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Satellite } from "lucide-react";

const dataSources = [
    { name: "Kepler", confirmed: 4043, color: "bg-chart-1", icon: "❄️" },
    { name: "TESS", confirmed: 1682, color: "bg-chart-2", icon: "🌐" },
    { name: "CoRoT", confirmed: 37, color: "bg-chart-5", icon: "🎯" },
    { name: "Ground", confirmed: 342, color: "bg-chart-4", icon: "🌍" },
];

export default function ActiveDataSources() {
    const total = dataSources.reduce(
        (sum, source) => sum + source.confirmed,
        0
    );

    return (
        <Card className="bg-card border-border">
            <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                    <Satellite className="w-5 h-5" />
                    Active Data Sources
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {dataSources.map((source) => (
                        <div
                            key={source.name}
                            className="bg-muted/20 rounded-lg p-4 border border-border hover:border-muted-foreground/30 transition-colors"
                        >
                            <div className="text-center mb-3">
                                <div className="text-3xl mb-2">
                                    {source.icon}
                                </div>
                                <h3 className="text-foreground font-semibold mb-1">
                                    {source.name}
                                </h3>
                                <p className="text-xs text-muted-foreground">
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
