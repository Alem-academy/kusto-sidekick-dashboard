
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle, Package, MessageSquare } from "lucide-react";

export function RecentEvents() {
  const events = [
    {
      id: 1,
      type: "delivery",
      icon: CheckCircle,
      title: "Заказ №742 доставлен",
      time: "15 минут назад",
      color: "text-green-600"
    },
    {
      id: 2,
      type: "supply",
      icon: Package,
      title: "Принята поставка №П-109",
      time: "1 час назад",
      color: "text-blue-600"
    },
    {
      id: 3,
      type: "support",
      icon: MessageSquare,
      title: "Закрыт тикет #781",
      time: "2 часа назад",
      color: "text-purple-600"
    },
    {
      id: 4,
      type: "delivery",
      icon: CheckCircle,
      title: "Заказ №741 доставлен",
      time: "3 часа назад",
      color: "text-green-600"
    },
    {
      id: 5,
      type: "supply",
      icon: Package,
      title: "Создана заявка на поставку №П-110",
      time: "4 часа назад",
      color: "text-orange-600"
    },
    {
      id: 6,
      type: "delivery",
      icon: CheckCircle,
      title: "Заказ №740 отправлен",
      time: "5 часов назад",
      color: "text-blue-600"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Clock className="w-5 h-5 text-gray-600" />
          Последние события
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-80 overflow-y-auto">
          {events.map((event) => (
            <div key={event.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <event.icon className={`w-5 h-5 mt-0.5 ${event.color}`} />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm">{event.title}</p>
                <p className="text-xs text-gray-500">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
