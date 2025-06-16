
import { 
  Home, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  FileText, 
  User,
  Lightbulb
} from "lucide-react";

interface MobileBottomMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: "dashboard", title: "Главная", icon: Home },
  { id: "warehouse", title: "Склад", icon: Package },
  { id: "orders", title: "Заказы", icon: ShoppingCart },
  { id: "reports", title: "Отчеты", icon: BarChart3 },
  { id: "documents", title: "Документы", icon: FileText },
  { id: "profile", title: "Профиль", icon: User },
  { id: "concept", title: "Концепция", icon: Lightbulb },
];

export function MobileBottomMenu({ activeSection, onSectionChange }: MobileBottomMenuProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden">
      <div className="flex justify-around items-center px-2 py-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`
              flex flex-col items-center justify-center p-2 rounded-lg transition-colors min-w-0 flex-1
              ${activeSection === item.id
                ? item.id === "concept"
                  ? "text-yellow-600 bg-yellow-50"
                  : "text-blue-600 bg-blue-50"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }
            `}
          >
            <item.icon className={`w-5 h-5 mb-1 ${
              activeSection === item.id 
                ? item.id === "concept" 
                  ? "text-yellow-600" 
                  : "text-blue-600" 
                : ""
            }`} />
            <span className="text-xs font-medium truncate">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
