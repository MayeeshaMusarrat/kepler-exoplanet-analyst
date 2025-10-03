"use client";

import {
    Activity,
    Database,
    BarChart3,
    Telescope,
    Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
    { icon: Activity, label: "AI Model", href: "/dashboard" },
    { icon: Database, label: "Data Sources", href: "/dashboard/data" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Telescope, label: "Discoveries", href: "/dashboard/discoveries" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
            <button
                className="p-6 border-b border-sidebar-border w-full text-left cursor-pointer"
                onClick={() => router.push("/")}
                type="button"
            >
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-chart-1 rounded-lg flex items-center justify-center">
                        <Telescope className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                        <h2 className="text-sidebar-foreground font-semibold">
                            NASA ExoPlanet
                        </h2>
                        <p className="text-xs text-muted-foreground">
                            Discovery Dashboard
                        </p>
                    </div>
                </div>
            </button>

            <nav className="flex-1 p-4">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                        pathname === item.href ||
                        (item.href === "/dashboard/discoveries" &&
                            pathname?.startsWith("/dashboard/discoveries"));

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                                isActive
                                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-sidebar-border">
                <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-chart-1 to-chart-5 flex items-center justify-center">
                        <span className="text-primary-foreground text-xs font-semibold">
                            AM
                        </span>
                    </div>
                    <div className="flex-1">
                        <p className="text-sidebar-foreground text-sm font-medium">
                            Abrar Mahir Esam
                        </p>
                        <p className="text-muted-foreground text-xs">
                            Researcher & Software Engineer
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
