
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardContent } from "@/components/DashboardContent";
import { WarehouseContent } from "@/components/WarehouseContent";
import { OrdersContent } from "@/components/OrdersContent";
import { ReportGeneratorContent } from "@/components/ReportGeneratorContent";
import { DocumentsContent } from "@/components/DocumentsContent";
import { ProfileContent } from "@/components/ProfileContent";
import { ConceptContent } from "@/components/ConceptContent";
import { MobileBottomMenu } from "@/components/MobileBottomMenu";
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
      case "orders":
        return <OrdersContent />;
      case "reports":
        return <ReportGeneratorContent />;
      case "documents":
        return <DocumentsContent />;
      case "profile":
        return <ProfileContent />;
      case "concept":
        return <ConceptContent />;
      default:
        return <DashboardContent onSectionChange={setActiveSection} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        )}
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>

        {/* Mobile Bottom Menu */}
        {isMobile && (
          <MobileBottomMenu 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
        )}
      </div>
    </SidebarProvider>
  );
};

export default Index;
