"use client";

import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function DashboardHeader() {
    return (
        <header className="bg-card border-b border-border px-6 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">
                        Exoplanet Discovery AI Dashboard
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        NASA Space Apps Challenge 2025
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <Badge className="bg-chart-1 text-primary-foreground hover:bg-chart-1/90">
                        <div className="w-2 h-2 bg-primary-foreground/70 rounded-full mr-2 animate-pulse"></div>
                        Model Active
                    </Badge>
                    <ThemeSwitcher />
                    <button
                        type="button"
                        className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
