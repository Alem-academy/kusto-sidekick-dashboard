
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RealTimeKPI } from "@/components/dashboard/RealTimeKPI";
import { AttentionRequired } from "@/components/dashboard/AttentionRequired";
import { InventoryMovement } from "@/components/dashboard/InventoryMovement";
import { RecentEvents } from "@/components/dashboard/RecentEvents";
import { MobileSectionIcons } from "@/components/MobileSectionIcons";

interface DashboardContentProps {
  onSectionChange?: (section: string) => void;
}

export function DashboardContent({ onSectionChange }: DashboardContentProps) {
  return (
    <div className="p-4 md:p-6 space-y-6 pb-20 md:pb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Центр управления операциями</h1>
        <p className="text-gray-600 mt-1">Контролируйте весь бизнес из одного места</p>
      </div>

      {/* Mobile Section Icons - показываем только если есть onSectionChange */}
      {onSectionChange && <MobileSectionIcons onSectionChange={onSectionChange} />}

      {/* Quick Actions Panel */}
      {onSectionChange && <QuickActions onSectionChange={onSectionChange} />}

      {/* Real-time KPI */}
      <RealTimeKPI />

      {/* Attention Required */}
      {onSectionChange && <AttentionRequired onSectionChange={onSectionChange} />}

      {/* Visualization and Recent Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InventoryMovement />
        <RecentEvents />
      </div>
    </div>
  );
}
