
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Home, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  FileText, 
  User,
  Lightbulb,
  HelpCircle,
  Users,
  Truck,
  ArrowLeft
} from "lucide-react";

interface MobileHeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: "dashboard", title: "Главная", icon: Home },
  { id: "warehouse", title: "Склад", icon: Package },
  { id: "clients", title: "Клиенты", icon: Users },
  { id: "orders", title: "Заказы", icon: ShoppingCart },
  { id: "deliveries", title: "Поставки", icon: Truck },
  { id: "returns", title: "Возвраты", icon: ArrowLeft },
  { id: "reports", title: "Отчеты", icon: BarChart3 },
  { id: "documents", title: "Документы", icon: FileText },
  { id: "profile", title: "Профиль", icon: User },
  { id: "support", title: "Поддержка", icon: HelpCircle },
  { id: "concept", title: "Концепция", icon: Lightbulb },
];

export function MobileHeader({ activeSection, onSectionChange }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  const currentSection = menuItems.find(item => item.id === activeSection);

  return (
    <div className="md:hidden">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50 h-14">
        <div className="flex items-center justify-between px-4 h-full">
          <div className="flex items-center gap-3">
            {currentSection && (
              <>
                <currentSection.icon className="w-5 h-5 text-blue-600" />
                <h1 className="text-lg font-semibold text-gray-900">{currentSection.title}</h1>
              </>
            )}
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-[280px] p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Меню</h2>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="p-2">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleMenuItemClick(item.id)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors mb-1
                          ${activeSection === item.id
                            ? item.id === "concept"
                              ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
                              : item.id === "support"
                              ? "bg-purple-50 text-purple-700 border border-purple-200"
                              : "bg-blue-50 text-blue-700 border border-blue-200"
                            : "text-gray-700 hover:bg-gray-50"
                          }
                        `}
                      >
                        <item.icon className={`w-5 h-5 ${
                          activeSection === item.id 
                            ? item.id === "concept" 
                              ? "text-yellow-600" 
                              : item.id === "support"
                              ? "text-purple-600"
                              : "text-blue-600" 
                            : "text-gray-500"
                        }`} />
                        <span className="font-medium">{item.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-14"></div>
    </div>
  );
}
