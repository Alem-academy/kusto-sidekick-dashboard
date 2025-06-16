
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package, Search, Filter, Plus, Minus, AlertTriangle } from "lucide-react";

interface Batch {
  id: string;
  quantity: number;
  arrivalDate: string;
  expiryDate: string;
  status: "good" | "low" | "critical";
}

interface WarehouseItem {
  id: string;
  name: string;
  article: string;
  totalQuantity: number;
  batches: Batch[];
  hasMultipleBatches: boolean;
}

export function WarehouseContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const warehouseData: WarehouseItem[] = [
    {
      id: "WH001",
      name: 'Сок "Juicy" Апельсиновый 1л',
      article: "JC-ORAN-001",
      totalQuantity: 1247,
      hasMultipleBatches: true,
      batches: [
        {
          id: "BATCH-001-1",
          quantity: 856,
          arrivalDate: "10.06.2025",
          expiryDate: "10.12.2025",
          status: "good"
        },
        {
          id: "BATCH-001-2",
          quantity: 302,
          arrivalDate: "12.06.2025",
          expiryDate: "15.08.2025",
          status: "good"
        },
        {
          id: "BATCH-001-3",
          quantity: 89,
          arrivalDate: "14.06.2025",
          expiryDate: "25.07.2025",
          status: "critical"
        }
      ]
    },
    {
      id: "WH002",
      name: "Сок яблочный Rich 1л",
      article: "JC-APPL-002",
      totalQuantity: 567,
      hasMultipleBatches: false,
      batches: [
        {
          id: "BATCH-002-1",
          quantity: 567,
          arrivalDate: "14.06.2025",
          expiryDate: "20.09.2025",
          status: "good"
        }
      ]
    },
    {
      id: "WH003",
      name: "Сок томатный Я 1л",
      article: "JC-TOMT-003",
      totalQuantity: 15,
      hasMultipleBatches: false,
      batches: [
        {
          id: "BATCH-003-1",
          quantity: 15,
          arrivalDate: "08.06.2025",
          expiryDate: "25.07.2025",
          status: "low"
        }
      ]
    },
    {
      id: "WH004",
      name: "Сок виноградный Santal 1л",
      article: "JC-GRAP-004",
      totalQuantity: 892,
      hasMultipleBatches: false,
      batches: [
        {
          id: "BATCH-004-1",
          quantity: 892,
          arrivalDate: "15.06.2025",
          expiryDate: "18.11.2025",
          status: "good"
        }
      ]
    },
    {
      id: "WH005",
      name: "Сок персиковый Rich 1л",
      article: "JC-PEAC-005",
      totalQuantity: 234,
      hasMultipleBatches: false,
      batches: [
        {
          id: "BATCH-005-1",
          quantity: 234,
          arrivalDate: "11.06.2025",
          expiryDate: "05.08.2025",
          status: "good"
        }
      ]
    }
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

  const filteredData = warehouseData.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.article.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const lowStockItems = warehouseData.filter(item => 
    item.batches.some(batch => batch.status === "low" || batch.status === "critical")
  );

  const getWorstStatus = (batches: Batch[]) => {
    if (batches.some(batch => batch.status === "critical")) return "critical";
    if (batches.some(batch => batch.status === "low")) return "low";
    return "good";
  };

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
                  <span className={`px-2 py-1 rounded text-sm ${getStatusColor(getWorstStatus(item.batches))}`}>
                    {item.totalQuantity} шт.
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
            Товары на складе ({filteredData.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Наименование</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Артикул</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Общее количество</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-700">Статус</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-700">Действия</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <>
                    {/* Main Row */}
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          {item.hasMultipleBatches && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() => toggleExpand(item.id)}
                            >
                              {expandedItems.has(item.id) ? (
                                <Minus className="w-4 h-4" />
                              ) : (
                                <Plus className="w-4 h-4" />
                              )}
                            </Button>
                          )}
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono text-sm text-gray-600">{item.article}</td>
                      <td className="py-3 px-4">
                        <span className="font-semibold">{item.totalQuantity} шт.</span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(getWorstStatus(item.batches))}`}>
                          {getStatusText(getWorstStatus(item.batches))}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex gap-2 justify-center">
                          <Button size="sm" variant="outline">Изменить</Button>
                          <Button size="sm" variant="outline">История</Button>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Expanded Batch Rows */}
                    {expandedItems.has(item.id) && item.hasMultipleBatches && (
                      <>
                        <tr className="bg-gray-50">
                          <td colSpan={5} className="py-2 px-8">
                            <div className="text-sm font-medium text-gray-700 mb-2">Партии товара:</div>
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-gray-200">
                                  <th className="text-left py-2 px-2 font-medium text-gray-600">Количество</th>
                                  <th className="text-left py-2 px-2 font-medium text-gray-600">Дата прихода</th>
                                  <th className="text-left py-2 px-2 font-medium text-gray-600">Срок годности</th>
                                  <th className="text-center py-2 px-2 font-medium text-gray-600">Статус</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.batches.map((batch) => (
                                  <tr key={batch.id} className="border-b border-gray-100 last:border-b-0">
                                    <td className="py-2 px-2">
                                      <span className="font-semibold">{batch.quantity} шт.</span>
                                    </td>
                                    <td className="py-2 px-2 text-gray-600">{batch.arrivalDate}</td>
                                    <td className="py-2 px-2 text-gray-600">{batch.expiryDate}</td>
                                    <td className="py-2 px-2 text-center">
                                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(batch.status)}`}>
                                        {getStatusText(batch.status)}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredData.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Package className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Товары не найдены</p>
              <p className="text-sm">Попробуйте изменить критерии поиска</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
