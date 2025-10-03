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
import { Sliders, Play } from "lucide-react";
import { useState } from "react";

export default function ModelParameters() {
    const [learningRate, setLearningRate] = useState([0.001]);
    const [dropoutRate, setDropoutRate] = useState([0.2]);

    return (
        <Card className="bg-[#1a2332] border-gray-800">
            <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                    <Sliders className="w-5 h-5" />
                    Model Parameters
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label className="text-gray-300">Learning Rate</Label>
                    <div className="flex items-center gap-4">
                        <Slider
                            value={learningRate}
                            onValueChange={setLearningRate}
                            min={0}
                            max={0.1}
                            step={0.001}
                            className="flex-1"
                        />
                        <span className="text-gray-400 text-sm w-16 text-right">
                            {learningRate[0].toFixed(3)}
                        </span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>0.001</span>
                        <span>0.061</span>
                        <span>0.1</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="text-gray-300">Batch Size</Label>
                    <Select defaultValue="64">
                        <SelectTrigger className="bg-[#2a3441] border-gray-700 text-white">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2a3441] border-gray-700">
                            <SelectItem value="32">32</SelectItem>
                            <SelectItem value="64">64</SelectItem>
                            <SelectItem value="128">128</SelectItem>
                            <SelectItem value="256">256</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label className="text-gray-300">Hidden Layers</Label>
                    <Input
                        type="number"
                        defaultValue="3"
                        className="bg-[#2a3441] border-gray-700 text-white"
                    />
                </div>

                <div className="space-y-2">
                    <Label className="text-gray-300">Dropout Rate</Label>
                    <div className="flex items-center gap-4">
                        <Slider
                            value={dropoutRate}
                            onValueChange={setDropoutRate}
                            min={0}
                            max={0.5}
                            step={0.1}
                            className="flex-1"
                        />
                        <span className="text-gray-400 text-sm w-16 text-right">
                            {dropoutRate[0].toFixed(1)}
                        </span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>0</span>
                        <span>0.2</span>
                        <span>0.5</span>
                    </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Start Training
                </Button>
            </CardContent>
        </Card>
    );
}
