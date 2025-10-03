import { Button } from './ui/button'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url(/herobg.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/80 via-[#0a0e27]/60 to-[#0a0e27]/90" />
            </div>

            {/* Stars effect */}
            <div className="absolute inset-0 z-0">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Main Heading */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                    A World Away —
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Discover distant worlds using machine learning to analyze
                    light curves from NASA's Kepler and TESS missions. Join the
                    search for potentially habitable exoplanets beyond our solar
                    system.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Link href="/dashboard">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-orange-500/50 transition-all">
                            Start Analysis{" "}
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        className="bg-transparent border-2 border-white/30 text-white px-8 py-6 text-lg font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                        Watch Demo (240s)
                    </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                            6,000+
                        </div>
                        <div className="text-gray-400 text-sm">
                            Exoplanets Discovered
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                            87.33%
                        </div>
                        <div className="text-gray-400 text-sm">
                            Detection Accuracy
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                            5
                        </div>
                        <div className="text-gray-400 text-sm">
                            Research Partners
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Credit */}
            <div className="absolute bottom-4 right-4 z-10">
                <p className="text-gray-500 text-xs">
                    Image: NASA (public domain)
                </p>
            </div>
        </section>
    );
}
