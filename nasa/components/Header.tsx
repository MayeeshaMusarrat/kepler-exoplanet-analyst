import { Button } from "./ui/button";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border/40">
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-chart-1 rounded-lg flex items-center justify-center">
                        <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                        </svg>
                    </div>
                    <span className="text-foreground font-semibold text-xl">
                        ExoHunter AI
                    </span>
                </div>

                <div className="flex items-center gap-8">
                    <a
                        href="#about"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="#research"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Research
                    </a>
                    <a
                        href="#team"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Team
                    </a>
                    <ThemeSwitcher />
                    <Link href="/dashboard">
                        <Button className="bg-chart-2 hover:bg-chart-2/90 text-white">
                            Launch Dashboard
                        </Button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
