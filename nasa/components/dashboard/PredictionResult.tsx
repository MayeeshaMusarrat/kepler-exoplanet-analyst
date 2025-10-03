"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, CheckCircle2, XCircle } from "lucide-react";

interface PredictionResultProps {
    probability: number;
}

export default function PredictionResult({
    probability,
}: PredictionResultProps) {
    const isLikely = probability >= 75;
    const confidence =
        probability >= 90
            ? "Very High"
            : probability >= 75
            ? "High"
            : probability >= 60
            ? "Medium"
            : "Low";
    const classification =
        probability >= 85
            ? "Super Earth"
            : probability >= 70
            ? "Neptune-like"
            : probability >= 60
            ? "Sub-Neptune"
            : "Uncertain";
    return (
        <Card className="bg-card border-border">
            <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-chart-2" />
                    Prediction Result
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-center mb-6">
                    <div
                        className={`text-6xl font-bold mb-2 transition-colors ${
                            isLikely ? "text-chart-1" : "text-muted-foreground"
                        }`}
                    >
                        {probability.toFixed(1)}%
                    </div>
                    <p className="text-muted-foreground">
                        Exoplanet Probability
                    </p>
                </div>

                <div
                    className={`rounded-lg p-4 mb-6 transition-colors ${
                        isLikely
                            ? "bg-chart-1/10 border border-chart-1/30"
                            : "bg-muted/30 border border-border"
                    }`}
                >
                    <div className="flex items-center gap-2 mb-2">
                        {isLikely ? (
                            <CheckCircle2 className="w-5 h-5 text-chart-1" />
                        ) : (
                            <XCircle className="w-5 h-5 text-muted-foreground" />
                        )}
                        <span
                            className={`font-semibold ${
                                isLikely
                                    ? "text-chart-1"
                                    : "text-muted-foreground"
                            }`}
                        >
                            {isLikely ? "Likely Exoplanet" : "Uncertain Result"}
                        </span>
                    </div>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                            Classification:
                        </span>
                        <Badge
                            className={
                                isLikely
                                    ? "bg-chart-1 text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                            }
                        >
                            {classification}
                        </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                            Confidence:
                        </span>
                        <span className="text-foreground font-semibold">
                            {confidence}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                            Est. Radius:
                        </span>
                        <span className="text-foreground font-semibold">
                            1.4 R⊕
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
