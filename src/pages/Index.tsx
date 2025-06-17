
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardContent } from "@/components/DashboardContent";
import { WarehouseContent } from "@/components/WarehouseContent";
import { ClientsContent } from "@/components/ClientsContent";
import { OrdersContent } from "@/components/OrdersContent";
import { DeliveriesContent } from "@/components/DeliveriesContent";
import { ReturnsContent } from "@/components/ReturnsContent";
import { ReportsContent } from "@/components/ReportsContent";
import { DocumentsContent } from "@/components/DocumentsContent";
import { ProfileContent } from "@/components/ProfileContent";
import { ConceptContent } from "@/components/ConceptContent";
import { SupportContent } from "@/components/SupportContent";
import { MobileHeader } from "@/components/MobileHeader";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const isMobile = useIsMobile();

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardContent onSectionChange={setActiveSection} />;
      case "warehouse":
        return <WarehouseContent />;
      case "clients":
        return <ClientsContent />;
      case "orders":
        return <OrdersContent />;
      case "deliveries":
        return <DeliveriesContent />;
      case "returns":
        return <ReturnsContent />;
      case "reports":
        return <ReportsContent />;
      case "documents":
        return <DocumentsContent />;
      case "profile":
        return <ProfileContent />;
      case "support":
        return <SupportContent />;
      case "concept":
        return <ConceptContent />;
      default:
        return <DashboardContent onSectionChange={setActiveSection} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        {/* Mobile Header */}
        {isMobile && (
          <MobileHeader 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
        )}

        {/* Desktop Sidebar */}
        {!isMobile && (
          <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        )}
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
