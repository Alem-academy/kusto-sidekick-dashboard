
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, RotateCcw, MapPin } from "lucide-react";

export function LogisticianDashboard() {
  const kpiMetrics = [
    {
      title: "Заказов в пути",
      value: "23",
      icon: Truck,
      color: "text-blue-600"
    },
    {
      title: "Поставок ожидается сегодня",
      value: "5",
      icon: Package,
      color: "text-green-600"
    },
    {
      title: "Возвратов готово к выдаче",
      value: "8",
      icon: RotateCcw,
      color: "text-orange-600"
    }
  ];

  const timelineEvents = [
    {
      time: "09:00",
      title: "Прибытие поставки #123",
      description: "ТОО \"Поставщик Сок\" - 150 коробок",
      status: "upcoming"
    },
    {
      time: "11:30",
      title: "Отгрузка заказа #456",
      description: "ТОО \"Магнум\" - доставка до 15:00",
      status: "in-progress"
    },
    {
      time: "14:00",
      title: "Отгрузка заказа #789",
      description: "ИП \"Продукты\" - самовывоз",
      status: "upcoming"
    },
    {
      time: "16:30",
      title: "Прием возврата #321",
      description: "Возврат от ТОО \"Ритейл\" - 25 единиц",
      status: "upcoming"
    }
  ];

  const trucks = [
    { id: 1, x: 25, y: 35, status: "delivery" },
    { id: 2, x: 60, y: 20, status: "return" },
    { id: 3, x: 80, y: 70, status: "pickup" }
  ];

  return (
    <div className="space-y-6">
      {/* KPI Карточки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {kpiMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{metric.title}</p>
                  <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                </div>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Логистическая карта */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            Логистическая карта
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-200 overflow-hidden">
            {/* Имитация карты с сеткой */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Грузовики на карте */}
            {trucks.map((truck) => (
              <div
                key={truck.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${truck.x}%`, top: `${truck.y}%` }}
              >
                <div className={`p-2 rounded-full shadow-lg ${
                  truck.status === "delivery" ? "bg-blue-500" :
                  truck.status === "return" ? "bg-orange-500" : "bg-green-500"
                }`}>
                  <Truck className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
            
            {/* Легенда */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow">
              <div className="text-xs font-medium mb-2">Легенда:</div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Доставка</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Забор груза</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Возврат</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ближайшие события */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5 text-green-600" />
            Ближайшие события
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${
                    event.status === "in-progress" 
                      ? "bg-blue-500" 
                      : "bg-gray-300"
                  }`}></div>
                  {index < timelineEvents.length - 1 && (
                    <div className="w-px h-8 bg-gray-200 mt-1"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-blue-600">{event.time}</span>
                    {event.status === "in-progress" && (
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                        В процессе
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                  <p className="text-xs text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
