"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sliders, Play, Square } from "lucide-react";
import { useState } from "react";

interface ModelParametersProps {
    onStartTraining: () => void;
    isTraining: boolean;
}

export default function ModelParameters({
    onStartTraining,
    isTraining,
}: ModelParametersProps) {
    const [learningRate, setLearningRate] = useState([0.001]);
    const [dropoutRate, setDropoutRate] = useState([0.2]);

    return (
        <Card className="bg-card border-border">
            <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                    <Sliders className="w-5 h-5" />
                    Model Parameters
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label className="text-foreground">Learning Rate</Label>
                    <div className="flex items-center gap-4">
                        <Slider
                            value={learningRate}
                            onValueChange={setLearningRate}
                            min={0}
                            max={0.1}
                            step={0.001}
                            className="flex-1"
                        />
                        <span className="text-muted-foreground text-sm w-16 text-right">
                            {learningRate[0].toFixed(3)}
                        </span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0.001</span>
                        <span>0.061</span>
                        <span>0.1</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="text-foreground">Batch Size</Label>
                    <Select defaultValue="64">
                        <SelectTrigger className="bg-background border-border text-foreground">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border">
                            <SelectItem value="32">32</SelectItem>
                            <SelectItem value="64">64</SelectItem>
                            <SelectItem value="128">128</SelectItem>
                            <SelectItem value="256">256</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label className="text-foreground">Hidden Layers</Label>
                    <Input
                        type="number"
                        defaultValue="3"
                        className="bg-background border-border text-foreground"
                    />
                </div>

                <div className="space-y-2">
                    <Label className="text-foreground">Dropout Rate</Label>
                    <div className="flex items-center gap-4">
                        <Slider
                            value={dropoutRate}
                            onValueChange={setDropoutRate}
                            min={0}
                            max={0.5}
                            step={0.1}
                            className="flex-1"
                        />
                        <span className="text-muted-foreground text-sm w-16 text-right">
                            {dropoutRate[0].toFixed(1)}
                        </span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0</span>
                        <span>0.2</span>
                        <span>0.5</span>
                    </div>
                </div>

                <Button
                    onClick={onStartTraining}
                    disabled={isTraining}
                    className="w-full bg-chart-1 hover:bg-chart-1/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isTraining ? (
                        <>
                            <Square className="w-4 h-4 mr-2" />
                            Training in Progress...
                        </>
                    ) : (
                        <>
                            <Play className="w-4 h-4 mr-2" />
                            Start Training
                        </>
                    )}
                </Button>
            </CardContent>
        </Card>
    );
}
