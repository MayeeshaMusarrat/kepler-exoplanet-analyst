"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, CheckCircle2 } from "lucide-react";

export default function PredictionResult() {
    return (
        <Card className="bg-[#1a2332] border-gray-800">
            <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    Prediction Result
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-center mb-6">
                    <div className="text-6xl font-bold text-green-400 mb-2">
                        87.3%
                    </div>
                    <p className="text-gray-400">Exoplanet Probability</p>
                </div>

                <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">
                            Likely Exoplanet
                        </span>
                    </div>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Classification:</span>
                        <Badge className="bg-blue-600 text-white">
                            Super Earth
                        </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Confidence:</span>
                        <span className="text-white font-semibold">High</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Est. Radius:</span>
                        <span className="text-white font-semibold">1.4 R⊕</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
