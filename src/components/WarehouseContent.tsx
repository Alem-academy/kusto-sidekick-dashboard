
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package, Search, Filter, Plus, AlertTriangle } from "lucide-react";

export function WarehouseContent() {
  const warehouseData = [
    { id: "WH001", name: "Метизы крепежные", category: "Крепеж", quantity: 1247, unit: "шт", minStock: 100, status: "good" },
    { id: "WH002", name: "Болты М6х20", category: "Болты", quantity: 89, unit: "шт", minStock: 200, status: "low" },
    { id: "WH003", name: "Гайки М8", category: "Гайки", quantity: 567, unit: "шт", minStock: 150, status: "good" },
    { id: "WH004", name: "Шайбы плоские", category: "Шайбы", quantity: 15, unit: "шт", minStock: 50, status: "critical" },
    { id: "WH005", name: "Винты самонарезающие", category: "Винты", quantity: 892, unit: "шт", minStock: 100, status: "good" },
  ];

  const lowStockItems = warehouseData.filter(item => item.status === "low" || item.status === "critical");

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Склад и остатки</h1>
          <p className="text-gray-600 mt-1">Управление товарами и контроль остатков</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Добавить товар
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Поиск товаров..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Фильтры
        </Button>
      </div>

      {/* Stock Alerts */}
      {lowStockItems.length > 0 && (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800">
              <AlertTriangle className="w-5 h-5" />
              Внимание: товары с низким остатком
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {lowStockItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="font-medium">{item.name}</span>
                  <span className={`px-2 py-1 rounded text-sm ${
                    item.status === 'critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.quantity} {item.unit} (мин: {item.minStock})
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Warehouse Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5 text-blue-600" />
            Товары на складе
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Код</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Наименование</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Категория</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">Количество</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-700">Статус</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-700">Действия</th>
                </tr>
              </thead>
              <tbody>
                {warehouseData.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">{item.id}</td>
                    <td className="py-3 px-4 font-medium">{item.name}</td>
                    <td className="py-3 px-4 text-gray-600">{item.category}</td>
                    <td className="py-3 px-4 text-right">
                      <span className="font-semibold">{item.quantity}</span> {item.unit}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'good' ? 'bg-green-100 text-green-800' :
                        item.status === 'low' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.status === 'good' ? 'В наличии' :
                         item.status === 'low' ? 'Мало' : 'Критично'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex gap-2 justify-center">
                        <Button size="sm" variant="outline">Изменить</Button>
                        <Button size="sm" variant="outline">История</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
