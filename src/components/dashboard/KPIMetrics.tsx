
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Package, ShoppingCart, Users } from "lucide-react";

export function KPIMetrics() {
  const metrics = [
    {
      title: "Общий оборот",
      value: "₸ 28.3М",
      change: "+12%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Товаров",
      value: "1,247",
      change: "156 новых",
      icon: Package,
      color: "text-blue-600"
    },
    {
      title: "Заказов",
      value: "89",
      change: "23 активных",
      icon: ShoppingCart,
      color: "text-orange-600"
    },
    {
      title: "Клиентов",
      value: "342",
      change: "+28 новых",
      icon: Users,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-gray-600">{metric.title}</p>
                <p className={`text-lg md:text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                <p className={`text-xs ${metric.color} mt-1`}>{metric.change}</p>
              </div>
              <metric.icon className={`w-6 h-6 md:w-8 md:h-8 ${metric.color}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
