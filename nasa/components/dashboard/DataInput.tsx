"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Database, Search } from "lucide-react";

export default function DataInput() {
    return (
        <Card className="bg-[#1a2332] border-gray-800">
            <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Data Input
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label className="text-gray-300">Transit Depth (ppm)</Label>
                    <Input
                        type="number"
                        defaultValue="2500"
                        className="bg-[#2a3441] border-gray-700 text-white"
                    />
                </div>

                <div className="space-y-2">
                    <Label className="text-gray-300">Period (days)</Label>
                    <Input
                        type="number"
                        defaultValue="365.25"
                        className="bg-[#2a3441] border-gray-700 text-white"
                    />
                </div>

                <div className="space-y-2">
                    <Label className="text-gray-300">Duration (hours)</Label>
                    <Input
                        type="number"
                        defaultValue="13.2"
                        className="bg-[#2a3441] border-gray-700 text-white"
                    />
                </div>

                <div className="space-y-2">
                    <Label className="text-gray-300">
                        Signal-to-Noise Ratio
                    </Label>
                    <Input
                        type="number"
                        defaultValue="15.7"
                        className="bg-[#2a3441] border-gray-700 text-white"
                    />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Search className="w-4 h-4 mr-2" />
                    Analyze Data
                </Button>
            </CardContent>
        </Card>
    );
}
