import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { 
  Package, 
  ShoppingCart, 
  AlertTriangle, 
  Calendar,
  TrendingUp
} from "lucide-react";

export function DashboardContent() {
  const widgets = [
    {
      title: "Общий остаток товаров",
      value: "12,847",
      unit: "шт.",
      change: "+2.5%",
      changeType: "positive",
      icon: Package,
      color: "blue"
    },
    {
      title: "Заказы в обработке",
      value: "23",
      unit: "шт.",
      change: "+12%",
      changeType: "positive",
      icon: ShoppingCart,
      color: "green"
    },
    {
      title: "Критический остаток",
      value: "18",
      unit: "позиций",
      change: "-3",
      changeType: "negative",
      icon: AlertTriangle,
      color: "red"
    },
    {
      title: "Истекающие сроки годности",
      value: "7",
      unit: "позиций",
      change: "+2",
      changeType: "neutral",
      icon: Calendar,
      color: "orange"
    }
  ];

  const recentOperations = [
    { id: "OP-001", type: "Поступление", product: "Сок яблочный 1л", quantity: "+150 шт.", date: "16.06.2025 14:30", status: "Завершено" },
    { id: "OP-002", type: "Отгрузка", product: "Сок апельсиновый 0.5л", quantity: "-80 шт.", date: "16.06.2025 12:15", status: "Завершено" },
    { id: "OP-003", type: "Перемещение", product: "Сок томатный 1л", quantity: "45 шт.", date: "16.06.2025 10:45", status: "В процессе" },
    { id: "OP-004", type: "Списание", product: "Сок мультифрукт 0.2л", quantity: "-12 шт.", date: "15.06.2025 16:20", status: "Завершено" },
    { id: "OP-005", type: "Поступление", product: "Сок виноградный 1л", quantity: "+25 шт.", date: "15.06.2025 13:10", status: "Завершено" },
  ];

  const chartData = [
    { date: '10.06', incoming: 420, outgoing: 380 },
    { date: '11.06', incoming: 380, outgoing: 420 },
    { date: '12.06', incoming: 520, outgoing: 350 },
    { date: '13.06', incoming: 340, outgoing: 480 },
    { date: '14.06', incoming: 460, outgoing: 320 },
    { date: '15.06', incoming: 520, outgoing: 390 },
    { date: '16.06', incoming: 480, outgoing: 410 },
  ];

  const chartConfig = {
    incoming: {
      label: "Поступления",
      color: "#3b82f6",
    },
    outgoing: {
      label: "Отгрузки", 
      color: "#ef4444",
    },
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Личный кабинет</h1>
          <p className="text-gray-600 mt-1">Добро пожаловать в систему управления MKS-Kusto</p>
        </div>
        <div className="text-sm text-gray-500">
          Последнее обновление: {new Date().toLocaleString('ru-RU')}
        </div>
      </div>

      {/* Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {widgets.map((widget, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {widget.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${
                widget.color === 'blue' ? 'bg-blue-100' :
                widget.color === 'green' ? 'bg-green-100' :
                widget.color === 'red' ? 'bg-red-100' :
                'bg-orange-100'
              }`}>
                <widget.icon className={`w-4 h-4 ${
                  widget.color === 'blue' ? 'text-blue-600' :
                  widget.color === 'green' ? 'text-green-600' :
                  widget.color === 'red' ? 'text-red-600' :
                  'text-orange-600'
                }`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {widget.value} <span className="text-sm font-normal text-gray-500">{widget.unit}</span>
              </div>
              <div className={`text-xs flex items-center mt-1 ${
                widget.changeType === 'positive' ? 'text-green-600' : 
                widget.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
              }`}>
                {widget.changeType === 'positive' && <TrendingUp className="w-3 h-3 mr-1" />}
                {widget.change} за неделю
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Operations Table */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-600" />
              Последние операции
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Тип</TableHead>
                  <TableHead>Товар</TableHead>
                  <TableHead>Количество</TableHead>
                  <TableHead>Статус</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOperations.map((operation) => (
                  <TableRow key={operation.id}>
                    <TableCell className="font-medium">{operation.type}</TableCell>
                    <TableCell>{operation.product}</TableCell>
                    <TableCell className={
                      operation.quantity.startsWith('+') ? 'text-green-600' :
                      operation.quantity.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                    }>
                      {operation.quantity}
                    </TableCell>
                    <TableCell>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        operation.status === 'Завершено' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {operation.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Chart */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              График движения товаров
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="incoming" 
                    stroke={chartConfig.incoming.color}
                    strokeWidth={2}
                    dot={{ fill: chartConfig.incoming.color, strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="outgoing" 
                    stroke={chartConfig.outgoing.color}
                    strokeWidth={2}
                    dot={{ fill: chartConfig.outgoing.color, strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
