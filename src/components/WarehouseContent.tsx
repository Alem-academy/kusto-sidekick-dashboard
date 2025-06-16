
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package, Search, Filter, Plus, AlertTriangle } from "lucide-react";

export function WarehouseContent() {
  const warehouseData = [
    { 
      id: "WH001", 
      name: "Сок яблочный Rich", 
      article: "JC-APPL-001", 
      arrivalDate: "10.06.2025", 
      expiryDate: "10.12.2025", 
      quantity: { pcs: 1247, boxes: 52, pallets: 2 }, 
      status: "good" 
    },
    { 
      id: "WH002", 
      name: "Сок апельсиновый Tropicana", 
      article: "JC-ORAN-002", 
      arrivalDate: "12.06.2025", 
      expiryDate: "15.08.2025", 
      quantity: { pcs: 89, boxes: 4, pallets: 0 }, 
      status: "critical" 
    },
    { 
      id: "WH003", 
      name: "Сок мультифрукт Добрый", 
      article: "JC-MULT-003", 
      arrivalDate: "14.06.2025", 
      expiryDate: "20.09.2025", 
      quantity: { pcs: 567, boxes: 24, pallets: 1 }, 
      status: "good" 
    },
    { 
      id: "WH004", 
      name: "Сок томатный Я", 
      article: "JC-TOMT-004", 
      arrivalDate: "08.06.2025", 
      expiryDate: "25.07.2025", 
      quantity: { pcs: 15, boxes: 1, pallets: 0 }, 
      status: "low" 
    },
    { 
      id: "WH005", 
      name: "Сок виноградный Santal", 
      article: "JC-GRAP-005", 
      arrivalDate: "15.06.2025", 
      expiryDate: "18.11.2025", 
      quantity: { pcs: 892, boxes: 37, pallets: 1 }, 
      status: "good" 
    },
    { 
      id: "WH006", 
      name: "Сок персиковый Rich", 
      article: "JC-PEAC-006", 
      arrivalDate: "11.06.2025", 
      expiryDate: "05.08.2025", 
      quantity: { pcs: 234, boxes: 10, pallets: 0 }, 
      status: "good" 
    },
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case 'good': return 'В наличии';
      case 'low': return 'Мало';
      case 'critical': return 'Критично';
      default: return 'Неизвестен';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-100 text-green-800';
      case 'low': return 'bg-yellow-100 text-yellow-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
                  <span className={`px-2 py-1 rounded text-sm ${getStatusColor(item.status)}`}>
                    {item.quantity.pcs} шт. / {item.quantity.boxes} кор.
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
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Наименование</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Артикул</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Дата прихода</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Срок годности</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Количество</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-700">Статус</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-700">Действия</th>
                </tr>
              </thead>
              <tbody>
                {warehouseData.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{item.name}</td>
                    <td className="py-3 px-4 font-mono text-sm text-gray-600">{item.article}</td>
                    <td className="py-3 px-4 text-gray-600">{item.arrivalDate}</td>
                    <td className="py-3 px-4 text-gray-600">{item.expiryDate}</td>
                    <td className="py-3 px-4">
                      <div className="text-sm">
                        <div><span className="font-semibold">{item.quantity.pcs}</span> шт.</div>
                        <div><span className="font-semibold">{item.quantity.boxes}</span> кор.</div>
                        <div><span className="font-semibold">{item.quantity.pallets}</span> пал.</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
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
