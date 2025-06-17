
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export function ActivitySection() {
  const recentActivity = [
    {
      title: "Поступление товара",
      description: "Соки фруктовые - 150 единиц",
      amount: "₸ 450К",
      time: "2ч назад",
      bgColor: "bg-green-50"
    },
    {
      title: "Заказ отправлен",
      description: "Заказ #1247",
      amount: "₸ 125К",
      time: "4ч назад",
      bgColor: "bg-blue-50"
    },
    {
      title: "Новый заказ",
      description: "Заказ #1248",
      amount: "₸ 89К",
      time: "6ч назад",
      bgColor: "bg-orange-50"
    }
  ];

  const alerts = [
    {
      title: "Критический остаток",
      description: "Сок яблочный - осталось 5 единиц",
      bgColor: "bg-red-50",
      borderColor: "border-red-400",
      textColor: "text-red-800",
      descColor: "text-red-600"
    },
    {
      title: "Истекает срок",
      description: "Сок апельсиновый \"Добрый\" - до 18.06.2025",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
      textColor: "text-yellow-800",
      descColor: "text-yellow-600"
    },
    {
      title: "Просроченный заказ",
      description: "Заказ #1245 - задержка доставки",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-400",
      textColor: "text-blue-800",
      descColor: "text-blue-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm md:text-base">Последние операции</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className={`flex items-center justify-between p-3 ${activity.bgColor} rounded-lg`}>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm">{activity.title}</p>
                  <p className="text-xs text-gray-600 truncate">{activity.description}</p>
                </div>
                <div className="text-right ml-2">
                  <p className="font-bold text-green-600 text-sm">{activity.amount}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm md:text-base">
            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
            Уведомления
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className={`p-3 ${alert.bgColor} border-l-4 ${alert.borderColor} rounded`}>
                <p className={`font-medium ${alert.textColor} text-sm`}>{alert.title}</p>
                <p className={`text-xs ${alert.descColor}`}>{alert.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
