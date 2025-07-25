
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

interface MobileBottomMenuProps {
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

export function MobileBottomMenu({ activeSection, onSectionChange }: MobileBottomMenuProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden">
      <div className="flex justify-around items-center px-1 py-2 overflow-x-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`
              flex flex-col items-center justify-center p-2 rounded-lg transition-colors min-w-0 flex-1 max-w-[80px] relative
              ${activeSection === item.id
                ? item.id === "concept"
                  ? "text-orange-600 bg-orange-50 shadow-md"
                  : item.id === "support"
                  ? "text-purple-600 bg-purple-50"
                  : "text-blue-600 bg-blue-50"
                : item.id === "concept"
                ? "text-orange-600 bg-orange-50/70 hover:text-orange-700 hover:bg-orange-100"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }
            `}
          >
            <item.icon className={`w-4 h-4 mb-1 ${
              activeSection === item.id 
                ? item.id === "concept" 
                  ? "text-orange-600" 
                  : item.id === "support"
                  ? "text-purple-600"
                  : "text-blue-600" 
                : item.id === "concept"
                ? "text-orange-600"
                : ""
            }`} />
            <span className={`text-xs font-medium truncate ${item.id === "concept" ? "font-semibold" : ""}`}>
              {item.title}
            </span>
            {item.id === "concept" && (
              <div className="absolute -top-1 -right-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
