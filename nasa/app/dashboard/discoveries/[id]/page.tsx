"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    ArrowLeft,
    Download,
    Share2,
    Info,
    AlertCircle,
    CheckCircle2,
    Activity,
    Eye,
    Filter,
    Lightbulb,
    Orbit,
} from "lucide-react";

interface PlanetData {
    name: string;
    dataset: string;
    model: string;
    lastUpdated: string;
    sector: number;
    radius: number;
    period: number;
    distance: number;
    magnitude: number;
    confidence: number;
    transitDepth: number;
    transitDuration: number;
    signalToNoise: number;
    detectionConfidence: {
        planetCandidate: number;
        falsePositive: number;
        stellarVariability: number;
    };
    estimatedProperties: {
        habitabilityZone: number;
        earthSimilarityIndex: number;
        atmosphericRetention: number;
    };
    validationTests: {
        centroidTest: string;
        evenOddTest: string;
        ghostDiagnostic: string;
        plusSensitivity: string;
    };
    starInfo: {
        name: string;
        type: string;
        mass: number;
        age: number;
    };
}

// Sample planet data (in a real app, this would come from an API/database)
const planetsData: Record<string, PlanetData> = {
    "kepler-452b": {
        name: "Kepler-452b",
        dataset: "KOI-7016.01",
        model: "Model-v-2.1",
        lastUpdated: "2024-01-15 14:42 UTC",
        sector: 42,
        radius: 1.63,
        period: 385.2,
        distance: 1402,
        magnitude: 13.426,
        confidence: 94.2,
        transitDepth: 0.0024,
        transitDuration: 6.84,
        signalToNoise: 12.4,
        detectionConfidence: {
            planetCandidate: 94.2,
            falsePositive: 4.1,
            stellarVariability: 1.7,
        },
        estimatedProperties: {
            habitabilityZone: 0.83,
            earthSimilarityIndex: 0.83,
            atmosphericRetention: 0.76,
        },
        validationTests: {
            centroidTest: "passed",
            evenOddTest: "passed",
            ghostDiagnostic: "passed",
            plusSensitivity: "inclusive",
        },
        starInfo: {
            name: "Kepler-452",
            type: "G-type star",
            mass: 1.04,
            age: 6.0,
        },
    },
};

export default function PlanetDetailPage() {
    const params = useParams();
    const planetId = params.id as string;
    const planet = planetsData[planetId] || planetsData["kepler-452b"];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/discoveries">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                            <Orbit className="w-8 h-8 text-chart-1" />
                            {planet.name} Candidate Analysis
                        </h1>
                        <p className="text-muted-foreground mt-1">
                            Deep dive analysis of exoplanet candidate{" "}
                            {planet.dataset}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span>Last updated: {planet.lastUpdated}</span>
                            <span>•</span>
                            <span>Model: {planet.model}</span>
                            <span>•</span>
                            <span>Dataset: TESS Sector {planet.sector}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Badge
                        variant="default"
                        className="bg-chart-1 text-primary-foreground"
                    >
                        Confidence: {planet.confidence}%
                    </Badge>
                    <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export Analysis
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Share2 className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-4 gap-4">
                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                            <Info className="w-4 h-4 text-chart-1" />
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Planet Radius
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                            {planet.radius} R⊕
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Earth radii
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-chart-2" />
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Orbital Period
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                            {planet.period}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Earth days
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-chart-3" />
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Stellar Magnitude
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                            {planet.magnitude}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Kepler magnitude
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-border bg-card">
                    <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                            <Filter className="w-4 h-4 text-chart-4" />
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                Distance
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                            {planet.distance}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Light years
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Light Curve Analysis */}
                <Card className="lg:col-span-2 border-border bg-card">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-foreground">
                                Light Curve Analysis
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Transit detection and phase-folded light curve
                            </p>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <Badge variant="outline">Raw Data</Badge>
                            <Badge variant="default">Detrended</Badge>
                            <Badge variant="outline">Phase Folded</Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {/* Light Curve Chart */}
                        <div className="h-64 bg-muted/20 rounded-lg p-4 relative overflow-hidden">
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 700 200"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                {/* Baseline */}
                                <line
                                    x1="0"
                                    y1="40"
                                    x2="700"
                                    y2="40"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-border"
                                    strokeDasharray="4 4"
                                />

                                {/* Light curve with transit dip */}
                                <polyline
                                    points="0,40 70,40 140,40 175,40 210,50 245,90 280,130 315,150 350,130 385,90 420,50 455,40 490,40 560,40 630,40 700,40"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-chart-1"
                                />

                                {/* Data points */}
                                {[
                                    0, 70, 140, 175, 210, 245, 280, 315, 350,
                                    385, 420, 455, 490, 560, 630, 700,
                                ].map((x, i) => {
                                    const y =
                                        i >= 4 && i <= 11
                                            ? [
                                                40, 50, 90, 130, 150, 130, 90,
                                                50,
                                            ][i - 4]
                                            : 40;
                                    return (
                                        <circle
                                            key={`point-${x}-${Math.random()}`}
                                            cx={x}
                                            cy={y}
                                            r="3"
                                            fill="currentColor"
                                            className="text-chart-1"
                                        />
                                    );
                                })}
                            </svg>

                            <div className="absolute bottom-2 left-4 right-4 flex justify-between text-xs text-muted-foreground">
                                <span>0</span>
                                <span>Time (days)</span>
                                <span>14</span>
                            </div>

                            <div className="absolute top-2 left-4 text-xs text-muted-foreground rotate-[-90deg] origin-left">
                                Relative Flux
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                            <div className="bg-muted/30 rounded p-3">
                                <p className="text-muted-foreground text-xs">
                                    Transit Depth:
                                </p>
                                <p className="font-semibold text-foreground">
                                    {planet.transitDepth} ± 0.0003 (relative
                                    flux)
                                </p>
                            </div>
                            <div className="bg-muted/30 rounded p-3">
                                <p className="text-muted-foreground text-xs">
                                    Transit Duration:
                                </p>
                                <p className="font-semibold text-foreground">
                                    {planet.transitDuration} ± 0.12 hours
                                </p>
                            </div>
                            <div className="bg-muted/30 rounded p-3">
                                <p className="text-muted-foreground text-xs">
                                    Signal-to-Noise:
                                </p>
                                <p className="font-semibold text-foreground">
                                    {planet.signalToNoise}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* AI Detection Confidence */}
                <Card className="border-border bg-card">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-foreground">
                            <Lightbulb className="w-5 h-5 text-chart-2" />
                            AI Detection Confidence
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Donut Chart */}
                        <div className="flex items-center justify-center mb-6">
                            <div className="relative w-48 h-48">
                                <svg
                                    viewBox="0 0 100 100"
                                    className="transform -rotate-90"
                                    aria-hidden="true"
                                >
                                    {/* Background circle */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="12"
                                        className="text-muted"
                                    />
                                    {/* Planet Candidate segment - 94.2% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="12"
                                        strokeDasharray={`${
                                            planet.detectionConfidence
                                                .planetCandidate * 2.51
                                        } 251`}
                                        className="text-chart-1"
                                    />
                                    {/* False Positive segment - 4.1% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="12"
                                        strokeDasharray={`${
                                            planet.detectionConfidence
                                                .falsePositive * 2.51
                                        } 251`}
                                        strokeDashoffset={
                                            -planet.detectionConfidence
                                                .planetCandidate * 2.51
                                        }
                                        className="text-chart-3"
                                    />
                                    {/* Stellar Variability segment - 1.7% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="12"
                                        strokeDasharray={`${
                                            planet.detectionConfidence
                                                .stellarVariability * 2.51
                                        } 251`}
                                        strokeDashoffset={
                                            -(
                                                planet.detectionConfidence
                                                    .planetCandidate +
                                                planet.detectionConfidence
                                                    .falsePositive
                                            ) * 2.51
                                        }
                                        className="text-muted-foreground"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                                    <span className="text-sm text-foreground">
                                        Planet Candidate
                                    </span>
                                </div>
                                <span className="font-bold text-chart-1">
                                    {planet.detectionConfidence.planetCandidate}
                                    %
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-chart-3"></div>
                                    <span className="text-sm text-foreground">
                                        False Positive
                                    </span>
                                </div>
                                <span className="font-bold text-foreground">
                                    {planet.detectionConfidence.falsePositive}%
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                                    <span className="text-sm text-foreground">
                                        Stellar Variability
                                    </span>
                                </div>
                                <span className="font-bold text-foreground">
                                    {
                                        planet.detectionConfidence
                                            .stellarVariability
                                    }
                                    %
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Estimated Properties */}
                <Card className="border-border bg-card">
                    <CardHeader>
                        <CardTitle className="text-foreground">
                            Estimated Properties
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-foreground">
                                    Habitability Zone
                                </span>
                                <span className="text-sm font-semibold text-chart-1">
                                    In Zone
                                </span>
                            </div>
                            <Progress
                                value={
                                    planet.estimatedProperties
                                        .habitabilityZone * 100
                                }
                                className="h-2"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-foreground">
                                    Earth Similarity Index
                                </span>
                                <span className="text-sm font-semibold text-foreground">
                                    {
                                        planet.estimatedProperties
                                            .earthSimilarityIndex
                                    }
                                </span>
                            </div>
                            <Progress
                                value={
                                    planet.estimatedProperties
                                        .earthSimilarityIndex * 100
                                }
                                className="h-2"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-foreground">
                                    Atmospheric Retention
                                </span>
                                <span className="text-sm font-semibold text-chart-4">
                                    High
                                </span>
                            </div>
                            <Progress
                                value={
                                    planet.estimatedProperties
                                        .atmosphericRetention * 100
                                }
                                className="h-2"
                            />
                        </div>

                        <div className="bg-chart-1/10 border border-chart-1/30 rounded-lg p-3 mt-4">
                            <div className="flex items-start gap-2">
                                <Lightbulb className="w-4 h-4 text-chart-1 mt-0.5 flex-shrink-0" />
                                <p className="text-xs text-foreground leading-relaxed">
                                    <strong>AI Insight:</strong> This candidate
                                    shows strong potential for being a rocky
                                    planet within the habitable zone. Surface
                                    conditions may allow liquid water.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Planetary System Visualization */}
            <Card className="border-border bg-card">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-foreground">
                            Planetary System Visualization
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                            Scale representation of the {planet.starInfo.name}{" "}
                            system
                        </p>
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                        <Orbit className="w-4 h-4 mr-2" />
                        Animate Orbit
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="bg-gradient-to-r from-primary/5 via-chart-1/10 to-primary/5 rounded-lg p-8 relative overflow-hidden min-h-[300px] flex items-center justify-center">
                        {/* Star */}
                        <div className="absolute left-1/4 top-1/2 -translate-y-1/2">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-chart-2 to-chart-4 shadow-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-xs font-semibold text-primary-foreground">
                                        {planet.starInfo.name}
                                    </div>
                                    <div className="text-[10px] text-primary-foreground/80">
                                        G-type star
                                    </div>
                                </div>
                            </div>
                            {/* Orbit ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                <div className="w-64 h-64 border-2 border-dashed border-chart-1/30 rounded-full"></div>
                            </div>
                        </div>

                        {/* Planet */}
                        <div className="absolute left-[60%] top-1/2 -translate-y-1/2">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-chart-1 to-chart-5 shadow-md"></div>
                        </div>

                        {/* Info boxes */}
                        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-4 text-xs">
                            <div className="bg-card/80 backdrop-blur rounded p-2 border border-border">
                                <p className="text-muted-foreground">
                                    {planet.starInfo.name}
                                </p>
                                <p className="font-semibold text-foreground">
                                    {planet.starInfo.mass} M☉
                                </p>
                                <p className="text-muted-foreground">
                                    Semi-major axis
                                </p>
                            </div>
                            <div className="bg-card/80 backdrop-blur rounded p-2 border border-border">
                                <p className="text-muted-foreground">1.04 AU</p>
                                <p className="font-semibold text-foreground">
                                    Semi-major axis
                                </p>
                            </div>
                            <div className="bg-card/80 backdrop-blur rounded p-2 border border-border">
                                <p className="text-muted-foreground">
                                    {planet.starInfo.age} Gyr
                                </p>
                                <p className="font-semibold text-foreground">
                                    Stellar age
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Validation Tests */}
            <Card className="border-border bg-card">
                <CardHeader>
                    <CardTitle className="text-foreground">
                        Validation Tests
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Centroid Analysis Chart */}
                        <div>
                            <h3 className="text-sm font-semibold text-foreground mb-3">
                                Centroid Analysis
                            </h3>
                            <div className="h-48 bg-muted/20 rounded-lg p-4 relative">
                                <svg
                                    className="w-full h-full"
                                    viewBox="0 0 200 150"
                                    aria-hidden="true"
                                >
                                    {/* Axes */}
                                    <line
                                        x1="100"
                                        y1="0"
                                        x2="100"
                                        y2="150"
                                        stroke="currentColor"
                                        className="text-border"
                                        strokeWidth="1"
                                    />
                                    <line
                                        x1="0"
                                        y1="75"
                                        x2="200"
                                        y2="75"
                                        stroke="currentColor"
                                        className="text-border"
                                        strokeWidth="1"
                                    />

                                    {/* In Transit points (red) */}
                                    <circle
                                        cx="95"
                                        cy="72"
                                        r="3"
                                        fill="currentColor"
                                        className="text-destructive"
                                    />
                                    <circle
                                        cx="102"
                                        cy="78"
                                        r="3"
                                        fill="currentColor"
                                        className="text-destructive"
                                    />
                                    <circle
                                        cx="98"
                                        cy="75"
                                        r="3"
                                        fill="currentColor"
                                        className="text-destructive"
                                    />
                                    <circle
                                        cx="105"
                                        cy="70"
                                        r="3"
                                        fill="currentColor"
                                        className="text-destructive"
                                    />

                                    {/* Out of Transit points (green) */}
                                    <circle
                                        cx="96"
                                        cy="74"
                                        r="3"
                                        fill="currentColor"
                                        className="text-chart-1"
                                    />
                                    <circle
                                        cx="103"
                                        cy="76"
                                        r="3"
                                        fill="currentColor"
                                        className="text-chart-1"
                                    />
                                    <circle
                                        cx="100"
                                        cy="75"
                                        r="3"
                                        fill="currentColor"
                                        className="text-chart-1"
                                    />
                                    <circle
                                        cx="104"
                                        cy="72"
                                        r="3"
                                        fill="currentColor"
                                        className="text-chart-1"
                                    />

                                    {/* Labels */}
                                    <text
                                        x="10"
                                        y="20"
                                        className="text-[8px] fill-muted-foreground"
                                    >
                                        Y-Offset (pixels)
                                    </text>
                                    <text
                                        x="150"
                                        y="145"
                                        className="text-[8px] fill-muted-foreground"
                                    >
                                        X-Offset
                                    </text>
                                </svg>
                                <div className="absolute bottom-2 left-4 flex gap-4 text-xs">
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-destructive"></div>
                                        <span className="text-muted-foreground">
                                            In Transit
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-chart-1"></div>
                                        <span className="text-muted-foreground">
                                            Out of Transit
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Even/Odd Transit Comparison */}
                        <div>
                            <h3 className="text-sm font-semibold text-foreground mb-3">
                                Even/Odd Transit Comparison
                            </h3>
                            <div className="h-48 bg-muted/20 rounded-lg p-4 relative">
                                <svg
                                    className="w-full h-full"
                                    viewBox="0 0 200 150"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    {/* Even transits */}
                                    <polyline
                                        points="0,30 40,30 60,50 80,80 100,90 120,80 140,50 160,30 200,30"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-chart-1"
                                    />
                                    {/* Odd transits */}
                                    <polyline
                                        points="0,35 40,35 60,55 80,85 100,95 120,85 140,55 160,35 200,35"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-chart-3"
                                        strokeDasharray="4 2"
                                    />
                                </svg>
                                <div className="absolute bottom-2 left-4 flex gap-4 text-xs">
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-0.5 bg-chart-1"></div>
                                        <span className="text-muted-foreground">
                                            Even Transits
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-0.5 bg-chart-3 border-dashed"></div>
                                        <span className="text-muted-foreground">
                                            Odd Transits
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Test Results */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
                        {Object.entries(planet.validationTests).map(
                            ([test, result]: [string, string]) => (
                                <div
                                    key={test}
                                    className="bg-muted/30 rounded-lg p-3 text-center"
                                >
                                    {result === "passed" ? (
                                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto mb-2" />
                                    ) : result === "inclusive" ? (
                                        <CheckCircle2 className="w-6 h-6 text-chart-2 mx-auto mb-2" />
                                    ) : (
                                        <AlertCircle className="w-6 h-6 text-destructive mx-auto mb-2" />
                                    )}
                                    <p className="text-xs font-semibold text-foreground capitalize">
                                        {test.replace(/([A-Z])/g, " $1").trim()}
                                    </p>
                                    <p className="text-xs text-muted-foreground capitalize mt-1">
                                        {result}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
