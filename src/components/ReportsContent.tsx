
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Download, TrendingUp, Package, AlertTriangle, Clock } from "lucide-react";
import { format, startOfMonth, endOfMonth } from "date-fns";
import { cn } from "@/lib/utils";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

export function ReportsContent() {
  const [dateFrom, setDateFrom] = useState<Date>(startOfMonth(new Date()));
  const [dateTo, setDateTo] = useState<Date>(endOfMonth(new Date()));

  // KPI данные
  const kpiData = {
    totalStock: { value: "2,847", unit: "шт.", change: "+8.2%" },
    turnover: { value: "1,156", unit: "шт.", change: "+15.3%" },
    criticalStock: { value: "23", unit: "позиций", change: "-2" },
    expiryRisk: { value: "156", unit: "шт.", change: "+12" }
  };

  // Данные для графика движения товаров
  const movementData = [
    { day: "01.06", income: 120, outcome: 80 },
    { day: "05.06", income: 200, outcome: 150 },
    { day: "10.06", income: 180, outcome: 120 },
    { day: "15.06", income: 250, outcome: 200 },
    { day: "20.06", income: 300, outcome: 180 },
    { day: "25.06", income: 220, outcome: 250 },
    { day: "30.06", income: 280, outcome: 200 }
  ];

  // Данные для структуры остатков
  const stockStructureData = [
    { name: "Соки 1л", value: 45, color: "#3b82f6" },
    { name: "Соки 0.2л", value: 30, color: "#10b981" },
    { name: "Мультифрукт", value: 15, color: "#f59e0b" },
    { name: "Другое", value: 10, color: "#ef4444" }
  ];

  // Данные для рисков по срокам
  const expiryRiskData = [
    { period: "< 30 дней", count: 156, color: "#ef4444" },
    { period: "30-90 дней", count: 89, color: "#f59e0b" },
    { period: "90+ дней", count: 2602, color: "#10b981" }
  ];

  // Данные для детальных таблиц
  const movementTableData = [
    { 
      datetime: "15.06.2025 14:30", 
      operation: "Расход", 
      product: "Сок \"Juicy\" Апельсиновый 1л", 
      article: "J-001", 
      quantity: "-100", 
      document: "Заказ на доставку №742" 
    },
    { 
      datetime: "12.06.2025 10:15", 
      operation: "Приход", 
      product: "Сок \"Juicy\" Яблочный 1л", 
      article: "J-002", 
      quantity: "+500", 
      document: "Приходная накладная №П-109" 
    },
    { 
      datetime: "10.06.2025 18:00", 
      operation: "Расход", 
      product: "Сок \"Juicy\" Вишневый 0.2л", 
      article: "J-005", 
      quantity: "-250", 
      document: "Заказ на доставку №731" 
    }
  ];

  const stockTableData = [
    { 
      product: "Сок \"Juicy\" Апельсиновый 1л", 
      article: "J-001", 
      available: "850", 
      reserved: "50", 
      total: "900", 
      unit: "шт." 
    },
    { 
      product: "Сок \"Juicy\" Яблочный 1л", 
      article: "J-002", 
      available: "200", 
      reserved: "0", 
      total: "200", 
      unit: "шт." 
    },
    { 
      product: "Сок \"Juicy\" Мультифрукт 1л", 
      article: "J-003", 
      available: "400", 
      reserved: "120", 
      total: "520", 
      unit: "шт." 
    }
  ];

  const expiryTableData = [
    { 
      product: "Сок \"Juicy\" Вишневый 0.2л", 
      article: "J-005", 
      batch: "P-5514", 
      expiry: "15.07.2025", 
      daysLeft: 28, 
      quantity: "150" 
    },
    { 
      product: "Сок \"Juicy\" Апельсиновый 1л", 
      article: "J-001", 
      batch: "P-5598", 
      expiry: "10.09.2025", 
      daysLeft: 85, 
      quantity: "400" 
    }
  ];

  const chartConfig = {
    income: {
      label: "Приход",
      color: "#10b981",
    },
    outcome: {
      label: "Расход", 
      color: "#3b82f6",
    },
  };

  const getDaysLeftColor = (days: number): string => {
    if (days <= 30) return "text-red-600 bg-red-50";
    if (days <= 90) return "text-orange-600 bg-orange-50";
    return "text-green-600 bg-green-50";
  };

  const handleExportExcel = (type: string) => {
    console.log(`Экспорт в Excel: ${type}`);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Отчеты и аналитика</h1>
        <p className="text-gray-600 mt-1">Анализ товарооборота и управление запасами</p>
      </div>

      {/* Блок 1: Фильтры и KPI */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <CardTitle className="text-lg">Период анализа</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(dateFrom, "dd.MM.yyyy")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={dateFrom} onSelect={setDateFrom} initialFocus />
                </PopoverContent>
              </Popover>
              <span className="self-center text-gray-500">—</span>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(dateTo, "dd.MM.yyyy")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={dateTo} onSelect={setDateTo} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Общий остаток</p>
                  <p className="text-2xl font-bold text-blue-900">{kpiData.totalStock.value}</p>
                  <p className="text-xs text-blue-600">{kpiData.totalStock.unit}</p>
                </div>
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <TrendingUp className="w-3 h-3 mr-1" />
                {kpiData.totalStock.change}
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 font-medium">Товарооборот</p>
                  <p className="text-2xl font-bold text-green-900">{kpiData.turnover.value}</p>
                  <p className="text-xs text-green-600">{kpiData.turnover.unit}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <TrendingUp className="w-3 h-3 mr-1" />
                {kpiData.turnover.change}
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-600 font-medium">Критический остаток</p>
                  <p className="text-2xl font-bold text-orange-900">{kpiData.criticalStock.value}</p>
                  <p className="text-xs text-orange-600">{kpiData.criticalStock.unit}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex items-center mt-2 text-sm text-red-600">
                <span className="mr-1">▼</span>
                {kpiData.criticalStock.change}
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-600 font-medium">Риск по срокам</p>
                  <p className="text-2xl font-bold text-red-900">{kpiData.expiryRisk.value}</p>
                  <p className="text-xs text-red-600">{kpiData.expiryRisk.unit}</p>
                </div>
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex items-center mt-2 text-sm text-red-600">
                <span className="mr-1">▲</span>
                {kpiData.expiryRisk.change}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Блок 2: Визуальный дашборд */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Движение товаров */}
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Движение товаров</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <LineChart data={movementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} name="Приход" />
                <Line type="monotone" dataKey="outcome" stroke="#3b82f6" strokeWidth={2} name="Расход" />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Структура остатков */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Структура остатков</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stockStructureData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {stockStructureData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Риски по срокам годности */}
        <Card className="xl:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg">Риски по срокам годности</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expiryRiskData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="period" type="category" width={100} />
                  <ChartTooltip />
                  <Bar dataKey="count" fill="#8884d8">
                    {expiryRiskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Блок 3: Детализированные отчеты */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Детализированные отчеты</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="movement" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="movement">Движение</TabsTrigger>
              <TabsTrigger value="stock">Остатки</TabsTrigger>
              <TabsTrigger value="expiry">Сроки годности</TabsTrigger>
            </TabsList>

            <TabsContent value="movement" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Движение товаров</h3>
                <Button onClick={() => handleExportExcel("movement")} className="bg-green-600 hover:bg-green-700">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать в Excel
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Дата и время</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Операция</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Товар</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Артикул</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-700">Количество</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Документ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movementTableData.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-600">{item.datetime}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.operation === 'Приход' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {item.operation}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-medium">{item.product}</td>
                        <td className="py-3 px-4 text-gray-600">{item.article}</td>
                        <td className={`py-3 px-4 text-right font-semibold ${
                          item.quantity.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {item.quantity}
                        </td>
                        <td className="py-3 px-4 text-gray-600">{item.document}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="stock" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Остатки на складе</h3>
                <Button onClick={() => handleExportExcel("stock")} className="bg-green-600 hover:bg-green-700">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать в Excel
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Товар</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Артикул</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-700">Доступно</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-700">В резерве</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-700">Всего</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-700">Ед. изм.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockTableData.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{item.product}</td>
                        <td className="py-3 px-4 text-gray-600">{item.article}</td>
                        <td className="py-3 px-4 text-right font-semibold text-green-600">{item.available}</td>
                        <td className="py-3 px-4 text-right font-semibold text-orange-600">{item.reserved}</td>
                        <td className="py-3 px-4 text-right font-semibold">{item.total}</td>
                        <td className="py-3 px-4 text-center text-gray-600">{item.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="expiry" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Сроки годности</h3>
                <Button onClick={() => handleExportExcel("expiry")} className="bg-green-600 hover:bg-green-700">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать в Excel
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Товар</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Артикул</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Партия</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Срок годности</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-700">Дней осталось</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-700">Количество</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expiryTableData.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{item.product}</td>
                        <td className="py-3 px-4 text-gray-600">{item.article}</td>
                        <td className="py-3 px-4 text-gray-600">{item.batch}</td>
                        <td className="py-3 px-4 text-gray-600">{item.expiry}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDaysLeftColor(item.daysLeft)}`}>
                            {item.daysLeft}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-semibold">{item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
