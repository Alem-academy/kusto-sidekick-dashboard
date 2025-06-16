
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardContent } from "@/components/DashboardContent";
import { WarehouseContent } from "@/components/WarehouseContent";
import { OrdersContent } from "@/components/OrdersContent";
import { ReportsContent } from "@/components/ReportsContent";
import { DocumentsContent } from "@/components/DocumentsContent";
import { ProfileContent } from "@/components/ProfileContent";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardContent />;
      case "warehouse":
        return <WarehouseContent />;
      case "orders":
        return <OrdersContent />;
      case "reports":
        return <ReportsContent />;
      case "documents":
        return <DocumentsContent />;
      case "profile":
        return <ProfileContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
