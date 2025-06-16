
import { 
  Home, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  FileText, 
  User,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MobileSectionIconsProps {
  onSectionChange: (section: string) => void;
}

const quickActions = [
  { id: "warehouse", title: "Склад", icon: Package, color: "bg-blue-50 text-blue-600", count: "1,247" },
  { id: "orders", title: "Заказы", icon: ShoppingCart, color: "bg-orange-50 text-orange-600", count: "89" },
  { id: "reports", title: "Отчеты", icon: BarChart3, color: "bg-green-50 text-green-600", count: "12" },
  { id: "documents", title: "Документы", icon: FileText, color: "bg-purple-50 text-purple-600", count: "456" },
];

const statusCards = [
  { title: "Активные заказы", value: "23", icon: Clock, color: "text-orange-600" },
  { title: "Завершенные", value: "156", icon: CheckCircle, color: "text-green-600" },
  { title: "Требуют внимания", value: "3", icon: AlertTriangle, color: "text-red-600" },
  { title: "Общий оборот", value: "₸28.3М", icon: TrendingUp, color: "text-blue-600" },
];

export function MobileSectionIcons({ onSectionChange }: MobileSectionIconsProps) {
  return (
    <div className="space-y-6 md:hidden">
      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Быстрые действия</h2>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <Card 
              key={action.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onSectionChange(action.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{action.title}</p>
                    <p className="text-lg font-bold text-gray-600">{action.count}</p>
                  </div>
                  <div className={`p-3 rounded-full ${action.color}`}>
                    <action.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Status Overview */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Статус</h2>
        <div className="grid grid-cols-2 gap-3">
          {statusCards.map((status, index) => (
            <Card key={index}>
              <CardContent className="p-3">
                <div className="flex items-center gap-3">
                  <status.icon className={`w-5 h-5 ${status.color}`} />
                  <div className="min-w-0">
                    <p className="text-xs text-gray-600 truncate">{status.title}</p>
                    <p className={`text-sm font-bold ${status.color}`}>{status.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
