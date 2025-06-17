
import { useState } from "react";
import { RoleSwitcher } from "@/components/RoleSwitcher";
import { DirectorDashboard } from "@/components/dashboard/DirectorDashboard";
import { AccountantDashboard } from "@/components/dashboard/AccountantDashboard";
import { LogisticianDashboard } from "@/components/dashboard/LogisticianDashboard";
import { MobileSectionIcons } from "@/components/MobileSectionIcons";

interface DashboardContentProps {
  onSectionChange?: (section: string) => void;
}

export function DashboardContent({ onSectionChange }: DashboardContentProps) {
  const [activeRole, setActiveRole] = useState("director");

  const renderDashboard = () => {
    switch (activeRole) {
      case "director":
        return <DirectorDashboard />;
      case "accountant":
        return <AccountantDashboard />;
      case "logistician":
        return <LogisticianDashboard />;
      default:
        return <DirectorDashboard />;
    }
  };

  const getRoleTitle = () => {
    switch (activeRole) {
      case "director":
        return "Дашборд руководителя";
      case "accountant":
        return "Дашборд бухгалтера";
      case "logistician":
        return "Дашборд логиста";
      default:
        return "Дашборд руководителя";
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-6 pb-20 md:pb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{getRoleTitle()}</h1>
        <p className="text-gray-600 mt-1">Система управления складом ИП "Соки и напитки"</p>
      </div>

      {/* Mobile Section Icons */}
      {onSectionChange && <MobileSectionIcons onSectionChange={onSectionChange} />}

      {/* Role Switcher */}
      <RoleSwitcher activeRole={activeRole} onRoleChange={setActiveRole} />

      {/* Role-specific Dashboard */}
      {renderDashboard()}
    </div>
  );
}
