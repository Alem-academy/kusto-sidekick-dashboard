
import { MobileSectionIcons } from "@/components/MobileSectionIcons";
import { KPIMetrics } from "@/components/dashboard/KPIMetrics";
import { ChartsSection } from "@/components/dashboard/ChartsSection";
import { ActivitySection } from "@/components/dashboard/ActivitySection";

interface DashboardContentProps {
  onSectionChange?: (section: string) => void;
}

export function DashboardContent({ onSectionChange }: DashboardContentProps) {
  return (
    <div className="p-4 md:p-6 space-y-6 pb-20 md:pb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Главная панель</h1>
        <p className="text-gray-600 mt-1">Добро пожаловать в систему управления складом ИП "Соки и напитки"</p>
      </div>

      {/* Mobile Section Icons */}
      {onSectionChange && <MobileSectionIcons onSectionChange={onSectionChange} />}

      {/* Key Metrics */}
      <KPIMetrics />

      {/* Charts Row */}
      <ChartsSection />

      {/* Recent Activity & Alerts */}
      <ActivitySection />
    </div>
  );
}
