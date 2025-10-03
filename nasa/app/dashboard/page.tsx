import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ModelParameters from "@/components/dashboard/ModelParameters";
import TrainingProgress from "@/components/dashboard/TrainingProgress";
import DataInput from "@/components/dashboard/DataInput";
import PredictionResult from "@/components/dashboard/PredictionResult";
import ShapAnalysis from "@/components/dashboard/ShapAnalysis";
import ActiveDataSources from "@/components/dashboard/ActiveDataSources";

export default function DashboardPage() {
    return (
        <div className="flex h-screen bg-[#0f1419] overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <DashboardHeader />

                <main className="flex-1 overflow-auto p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <ModelParameters />
                        <div className="lg:col-span-2">
                            <TrainingProgress />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <DataInput />
                        <PredictionResult />
                        <ShapAnalysis />
                    </div>

                    <ActiveDataSources />
                </main>
            </div>
        </div>
    );
}
