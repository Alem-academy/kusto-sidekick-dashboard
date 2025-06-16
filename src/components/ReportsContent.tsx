
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, Calendar, TrendingUp } from "lucide-react";

export function ReportsContent() {
  const reports = [
    {
      name: "Отчет по продажам",
      description: "Детальная информация о продажах за период",
      lastGenerated: "14.06.2025",
      type: "sales"
    },
    {
      name: "Остатки на складе",
      description: "Текущие остатки товаров на складе",
      lastGenerated: "15.06.2025",
      type: "inventory"
    },
    {
      name: "Движение товаров",
      description: "Приход и расход товаров за период",
      lastGenerated: "13.06.2025",
      type: "movement"
    },
    {
      name: "Клиентская база",
      description: "Информация о клиентах и их заказах",
      lastGenerated: "12.06.2025",
      type: "customers"
    }
  ];

  const quickStats = [
    { label: "Продажи за месяц", value: "₽2,847,390", change: "+8.2%" },
    { label: "Средний чек", value: "₽15,680", change: "+12.1%" },
    { label: "Количество заказов", value: "156", change: "+24" },
    { label: "Новые клиенты", value: "23", change: "+15%" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Отчеты</h1>
          <p className="text-gray-600 mt-1">Аналитика и отчетность по бизнесу</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Calendar className="w-4 h-4 mr-2" />
          Настроить период
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            Доступные отчеты
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reports.map((report, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{report.name}</h3>
                    <p className="text-gray-600 text-sm">{report.description}</p>
                  </div>
                  <div className="text-xs text-gray-500">
                    Последнее создание: {report.lastGenerated}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Создать отчет
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-3 h-3 mr-1" />
                      Скачать
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Шаблоны отчетов</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="font-medium">Ежедневный отчет продаж</div>
                <div className="text-sm text-gray-600">Автоматически генерируется каждый день в 18:00</div>
              </div>
              <Button size="sm" variant="outline">Настроить</Button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="font-medium">Еженедельный складской отчет</div>
                <div className="text-sm text-gray-600">Каждый понедельник в 9:00</div>
              </div>
              <Button size="sm" variant="outline">Настроить</Button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="font-medium">Месячный финансовый отчет</div>
                <div className="text-sm text-gray-600">1 число каждого месяца</div>
              </div>
              <Button size="sm" variant="outline">Настроить</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
