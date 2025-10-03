import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Telescope, Star, TrendingUp } from "lucide-react";

// Sample exoplanet data
const exoplanets = [
    {
        id: "kepler-452b",
        name: "Kepler-452b",
        radius: 1.63,
        period: 385.2,
        distance: 1402,
        magnitude: 13.426,
        confidence: 94.2,
        status: "confirmed",
        discovered: "2024-01-15",
    },
    {
        id: "kepler-186f",
        name: "Kepler-186f",
        radius: 1.11,
        period: 129.9,
        distance: 582,
        magnitude: 14.621,
        confidence: 89.5,
        status: "confirmed",
        discovered: "2024-02-08",
    },
    {
        id: "kepler-442b",
        name: "Kepler-442b",
        radius: 1.34,
        period: 112.3,
        distance: 1206,
        magnitude: 14.076,
        confidence: 92.1,
        status: "confirmed",
        discovered: "2024-01-22",
    },
    {
        id: "kepler-62f",
        name: "Kepler-62f",
        radius: 1.41,
        period: 267.3,
        distance: 1200,
        magnitude: 13.654,
        confidence: 88.7,
        status: "confirmed",
        discovered: "2024-03-10",
    },
    {
        id: "tess-700b",
        name: "TESS-700b",
        radius: 1.89,
        period: 421.6,
        distance: 890,
        magnitude: 12.983,
        confidence: 91.3,
        status: "candidate",
        discovered: "2024-04-05",
    },
    {
        id: "kepler-22b",
        name: "Kepler-22b",
        radius: 2.38,
        period: 289.9,
        distance: 620,
        magnitude: 11.664,
        confidence: 96.8,
        status: "confirmed",
        discovered: "2023-12-18",
    },
];

export default function DiscoveriesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">
                        Exoplanet Discoveries
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Browse confirmed and candidate exoplanets from NASA
                        missions
                    </p>
                </div>
                <Badge variant="secondary" className="text-sm">
                    <Telescope className="w-4 h-4 mr-2" />
                    {exoplanets.length} Planets Found
                </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exoplanets.map((planet) => (
                    <Link
                        key={planet.id}
                        href={`/dashboard/discoveries/${planet.id}`}
                    >
                        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-border bg-card">
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 text-chart-1" />
                                        <CardTitle className="text-lg text-card-foreground">
                                            {planet.name}
                                        </CardTitle>
                                    </div>
                                    <Badge
                                        variant={
                                            planet.status === "confirmed"
                                                ? "default"
                                                : "secondary"
                                        }
                                        className="text-xs"
                                    >
                                        {planet.status}
                                    </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Discovered:{" "}
                                    {new Date(
                                        planet.discovered
                                    ).toLocaleDateString()}
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <p className="text-muted-foreground text-xs">
                                            Radius
                                        </p>
                                        <p className="font-semibold text-foreground">
                                            {planet.radius} R⊕
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-xs">
                                            Period
                                        </p>
                                        <p className="font-semibold text-foreground">
                                            {planet.period} days
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-xs">
                                            Distance
                                        </p>
                                        <p className="font-semibold text-foreground">
                                            {planet.distance} ly
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-xs">
                                            Magnitude
                                        </p>
                                        <p className="font-semibold text-foreground">
                                            {planet.magnitude}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-border">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-muted-foreground">
                                            AI Confidence
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="w-3 h-3 text-chart-1" />
                                            <span className="font-bold text-chart-1">
                                                {planet.confidence}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
