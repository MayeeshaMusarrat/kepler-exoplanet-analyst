"use client";

import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

export default function DashboardHeader() {
    return (
        <header className="bg-[#2a3441] border-b border-gray-800 px-6 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        Exoplanet Discovery AI Dashboard
                    </h1>
                    <p className="text-sm text-gray-400">
                        NASA Space Apps Challenge 2025
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <Badge className="bg-green-600 text-white hover:bg-green-700">
                        <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                        Model Active
                    </Badge>
                    <button
                        type="button"
                        className="relative p-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
