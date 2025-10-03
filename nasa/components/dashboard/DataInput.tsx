"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Database, Search } from "lucide-react";

interface DataInputProps {
    onAnalyze: () => void;
    inputData: {
        transitDepth: string;
        period: string;
        duration: string;
        snr: string;
    };
    setInputData: React.Dispatch<
        React.SetStateAction<{
            transitDepth: string;
            period: string;
            duration: string;
            snr: string;
        }>
    >;
}

export default function DataInput({
    onAnalyze,
    inputData,
    setInputData,
}: DataInputProps) {
    return (
        <Card className="bg-card border-border">
            <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Data Input
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label className="text-foreground">
                        Transit Depth (ppm)
                    </Label>
                    <Input
                        type="number"
                        value={inputData.transitDepth}
                        onChange={(e) =>
                            setInputData((prev) => ({
                                ...prev,
                                transitDepth: e.target.value,
                            }))
                        }
                        placeholder="2500"
                        className="bg-background border-border text-foreground"
                    />
                </div>

                <div className="space-y-2">
                    <Label className="text-foreground">Period (days)</Label>
                    <Input
                        type="number"
                        value={inputData.period}
                        onChange={(e) =>
                            setInputData((prev) => ({
                                ...prev,
                                period: e.target.value,
                            }))
                        }
                        placeholder="365.25"
                        className="bg-background border-border text-foreground"
                    />
                </div>

                <div className="space-y-2">
                    <Label className="text-foreground">Duration (hours)</Label>
                    <Input
                        type="number"
                        value={inputData.duration}
                        onChange={(e) =>
                            setInputData((prev) => ({
                                ...prev,
                                duration: e.target.value,
                            }))
                        }
                        placeholder="13.2"
                        className="bg-background border-border text-foreground"
                    />
                </div>

                <div className="space-y-2">
                    <Label className="text-foreground">
                        Signal-to-Noise Ratio
                    </Label>
                    <Input
                        type="number"
                        value={inputData.snr}
                        onChange={(e) =>
                            setInputData((prev) => ({
                                ...prev,
                                snr: e.target.value,
                            }))
                        }
                        placeholder="15.7"
                        className="bg-background border-border text-foreground"
                    />
                </div>

                <Button
                    onClick={onAnalyze}
                    className="w-full bg-chart-1 hover:bg-chart-1/90 text-primary-foreground"
                >
                    <Search className="w-4 h-4 mr-2" />
                    Analyze Data
                </Button>
            </CardContent>
        </Card>
    );
}
