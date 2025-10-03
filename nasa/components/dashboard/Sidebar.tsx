"use client";

import {
    Activity,
    Database,
    BarChart3,
    Telescope,
    Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { icon: Activity, label: "AI Model", href: "/dashboard" },
    { icon: Database, label: "Data Sources", href: "/dashboard/data" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Telescope, label: "Discoveries", href: "/dashboard/discoveries" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-[#1a2332] border-r border-gray-800 flex flex-col">
            <div className="p-6 border-b border-gray-800">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Telescope className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h2 className="text-white font-semibold">
                            NASA ExoPlanet
                        </h2>
                        <p className="text-xs text-gray-400">
                            Discovery Dashboard
                        </p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 p-4">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                            }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                            DC
                        </span>
                    </div>
                    <div className="flex-1">
                        <p className="text-white text-sm font-medium">
                            Dr. Sarah Chen
                        </p>
                        <p className="text-gray-400 text-xs">Researcher</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
