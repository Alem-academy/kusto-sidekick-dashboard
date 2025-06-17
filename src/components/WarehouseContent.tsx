import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Package, 
  Search, 
  Filter, 
  Plus, 
  AlertTriangle, 
  Calendar,
  DollarSign,
  TrendingDown,
  Archive
} from "lucide-react";

interface Batch {
  id: string;
  quantity: number;
  arrivalDate: string;
  expiryDate: string;
  status: "good" | "low" | "critical";
  purchasePrice: number;
}

interface WarehouseItem {
  id: string;
  name: string;
  article: string;
  totalQuantity: number;
  batches: Batch[];
  totalValue: number;
  minStockLevel: number;
}

type FilterType = "all" | "lowStock" | "expiryRisk";

export function WarehouseContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const warehouseData: WarehouseItem[] = [
    {
      id: "WH001",
      name: 'Сок "Juicy" Апельсиновый 1л',
      article: "JC-ORAN-001",
      totalQuantity: 1247,
      minStockLevel: 100,
      totalValue: 62350,
      batches: [
        {
          id: "BATCH-001-1",
          quantity: 856,
          arrivalDate: "10.06.2025",
          expiryDate: "10.12.2025",
          status: "good",
          purchasePrice: 50
        },
        {
          id: "BATCH-001-2",
          quantity: 302,
          arrivalDate: "12.06.2025",
          expiryDate: "15.08.2025",
          status: "good",
          purchasePrice: 50
        },
        {
          id: "BATCH-001-3",
          quantity: 89,
          arrivalDate: "14.06.2025",
          expiryDate: "25.07.2025",
          status: "critical",
          purchasePrice: 50
        }
      ]
    },
    {
      id: "WH002",
      name: "Сок яблочный Rich 1л",
      article: "JC-APPL-002",
      totalQuantity: 567,
      minStockLevel: 150,
      totalValue: 31185,
      batches: [
        {
          id: "BATCH-002-1",
          quantity: 567,
          arrivalDate: "14.06.2025",
          expiryDate: "20.09.2025",
          status: "good",
          purchasePrice: 55
        }
      ]
    },
    {
      id: "WH003",
      name: "Сок томатный Я 1л",
      article: "JC-TOMT-003",
      totalQuantity: 15,
      minStockLevel: 50,
      totalValue: 900,
      batches: [
        {
          id: "BATCH-003-1",
          quantity: 15,
          arrivalDate: "08.06.2025",
          expiryDate: "25.07.2025",
          status: "low",
          purchasePrice: 60
        }
      ]
    },
    {
      id: "WH004",
      name: "Сок виноградный Santal 1л",
      article: "JC-GRAP-004",
      totalQuantity: 892,
      minStockLevel: 200,
      totalValue: 49060,
      batches: [
        {
          id: "BATCH-004-1",
          quantity: 892,
          arrivalDate: "15.06.2025",
          expiryDate: "18.11.2025",
          status: "good",
          purchasePrice: 55
        }
      ]
    },
    {
      id: "WH005",
      name: "Сок персиковый Rich 1л",
      article: "JC-PEAC-005",
      totalQuantity: 234,
      minStockLevel: 100,
      totalValue: 12870,
      batches: [
        {
          id: "BATCH-005-1",
          quantity: 234,
          arrivalDate: "11.06.2025",
          expiryDate: "05.08.2025",
          status: "good",
          purchasePrice: 55
        }
      ]
    }
  ];

  // Вычисляем KPI
  const kpiData = useMemo(() => {
    const lowStockItems = warehouseData.filter(item => item.totalQuantity < item.minStockLevel);
    const expiryRiskItems = warehouseData.filter(item => 
      item.batches.some(batch => {
        const expiryDate = new Date(batch.expiryDate.split('.').reverse().join('-'));
        const today = new Date();
        const daysDiff = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
        return daysDiff <= 30;
      })
    );
    const totalValue = warehouseData.reduce((sum, item) => sum + item.totalValue, 0);

    return {
      lowStockCount: lowStockItems.length,
      expiryRiskCount: expiryRiskItems.length,
      totalValue
    };
  }, [warehouseData]);

  // Фильтрация данных
  const filteredData = useMemo(() => {
    let filtered = warehouseData;

    // Применяем поиск
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.article.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Применяем фильтр
    if (activeFilter === "lowStock") {
      filtered = filtered.filter(item => item.totalQuantity < item.minStockLevel);
    } else if (activeFilter === "expiryRisk") {
      filtered = filtered.filter(item => 
        item.batches.some(batch => {
          const expiryDate = new Date(batch.expiryDate.split('.').reverse().join('-'));
          const today = new Date();
          const daysDiff = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
          return daysDiff <= 30;
        })
      );
    }

    return filtered;
  }, [searchQuery, activeFilter, warehouseData]);

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

  const getWorstStatus = (batches: Batch[]) => {
    if (batches.some(batch => batch.status === "critical")) return "critical";
    if (batches.some(batch => batch.status === "low")) return "low";
    return "good";
  };

  const isLowStock = (item: WarehouseItem) => item.totalQuantity < item.minStockLevel;

  const hasExpiryRisk = (item: WarehouseItem) => {
    return item.batches.some(batch => {
      const expiryDate = new Date(batch.expiryDate.split('.').reverse().join('-'));
      const today = new Date();
      const daysDiff = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
      return daysDiff <= 30;
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Склад и остатки</h1>
          <p className="text-gray-600 mt-1">Проактивное управление товарами и контроль остатков</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Добавить товар
        </Button>
      </div>

      {/* Панель быстрого реагирования */}
      <div className="space-y-4">
        {/* Поиск */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Поиск по названию или артикулу..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* KPI карточки-фильтры */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card 
            className={`cursor-pointer transition-all hover:shadow-md ${
              activeFilter === "lowStock" ? "ring-2 ring-red-500 bg-red-50" : ""
            }`}
            onClick={() => setActiveFilter(activeFilter === "lowStock" ? "all" : "lowStock")}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Товары с низким остатком</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{kpiData.lowStockCount}</div>
              <p className="text-xs text-gray-600">SKU ниже минимального порога</p>
            </CardContent>
          </Card>

          <Card 
            className={`cursor-pointer transition-all hover:shadow-md ${
              activeFilter === "expiryRisk" ? "ring-2 ring-orange-500 bg-orange-50" : ""
            }`}
            onClick={() => setActiveFilter(activeFilter === "expiryRisk" ? "all" : "expiryRisk")}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Риски по срокам годности</CardTitle>
              <Calendar className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{kpiData.expiryRiskCount}</div>
              <p className="text-xs text-gray-600">SKU с истекающим сроком (&lt; 30 дней)</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Общая стоимость склада</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{formatCurrency(kpiData.totalValue)}</div>
              <p className="text-xs text-gray-600">Суммарная стоимость всех товаров</p>
            </CardContent>
          </Card>
        </div>

        {/* Активные фильтры */}
        {activeFilter !== "all" && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Активные фильтры:</span>
            <Badge variant="secondary" className="flex items-center gap-1">
              {activeFilter === "lowStock" ? "Низкий остаток" : "Риски по срокам"}
              <button
                onClick={() => setActiveFilter("all")}
                className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
              >
                ×
              </button>
            </Badge>
          </div>
        )}
      </div>

      {/* Детализированная таблица */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Archive className="w-5 h-5 text-blue-600" />
            Детализированная таблица остатков ({filteredData.length} товаров)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Наименование</TableHead>
                <TableHead>Артикул</TableHead>
                <TableHead>Количество</TableHead>
                <TableHead>Дата прихода</TableHead>
                <TableHead>Срок годности</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Стоимость</TableHead>
                <TableHead className="text-center">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <>
                  {/* Основная строка товара */}
                  <TableRow key={item.id} className="bg-gray-50 border-b-2 border-gray-200">
                    <TableCell className="font-bold">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-blue-600" />
                        {item.name}
                        {isLowStock(item) && (
                          <span title="Низкий остаток">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                          </span>
                        )}
                        {hasExpiryRisk(item) && (
                          <span title="Риск по сроку годности">
                            <Calendar className="w-4 h-4 text-orange-500" />
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm font-semibold">{item.article}</TableCell>
                    <TableCell className="font-bold text-lg">{item.totalQuantity} шт.</TableCell>
                    <TableCell className="text-gray-500">—</TableCell>
                    <TableCell className="text-gray-500">—</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(getWorstStatus(item.batches))}>
                        {getStatusText(getWorstStatus(item.batches))}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-bold">{formatCurrency(item.totalValue)}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex gap-1 justify-center">
                        <Button size="sm" variant="outline">Изменить</Button>
                        <Button size="sm" variant="outline">История</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  
                  {/* Вложенные строки партий */}
                  {item.batches.map((batch, batchIndex) => (
                    <TableRow key={batch.id} className="hover:bg-gray-50">
                      <TableCell className="pl-8 text-sm text-gray-600">
                        └─ Партия {batchIndex + 1}
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">—</TableCell>
                      <TableCell className="text-sm">{batch.quantity} шт.</TableCell>
                      <TableCell className="text-sm">{batch.arrivalDate}</TableCell>
                      <TableCell className="text-sm">{batch.expiryDate}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(batch.status)}>
                          {getStatusText(batch.status)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">
                        {formatCurrency(batch.quantity * batch.purchasePrice)}
                      </TableCell>
                      <TableCell className="text-center">
                        <Button size="sm" variant="ghost" className="text-xs">
                          Детали
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ))}
            </TableBody>
          </Table>
          
          {filteredData.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Package className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Товары не найдены</p>
              <p className="text-sm">Попробуйте изменить критерии поиска или фильтры</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
