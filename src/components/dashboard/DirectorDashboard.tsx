
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Package, Clock, AlertTriangle, DollarSign } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const profitData = [
  { month: "Янв", profit: 450000 },
  { month: "Фев", profit: 380000 },
  { month: "Мар", profit: 520000 },
  { month: "Апр", profit: 490000 },
  { month: "Май", profit: 610000 },
  { month: "Июн", profit: 580000 },
];

const salesData = [
  { name: "Соки фруктовые", value: 35, color: "#3B82F6" },
  { name: "Соки овощные", value: 25, color: "#EF4444" },
  { name: "Нектары", value: 20, color: "#10B981" },
  { name: "Морсы", value: 20, color: "#F59E0B" },
];

export function DirectorDashboard() {
  const kpiMetrics = [
    {
      title: "Общая стоимость склада",
      value: "₸ 45.2М",
      icon: Package,
      color: "text-blue-600"
    },
    {
      title: "Товарооборот за месяц",
      value: "₸ 28.3М",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Среднее время хранения",
      value: "14 дней",
      icon: Clock,
      color: "text-orange-600"
    },
    {
      title: "Просроченных счетов",
      value: "8",
      icon: AlertTriangle,
      color: "text-red-600"
    }
  ];

  const criticalRisks = [
    {
      title: "Истекает срок годности",
      description: "Сок яблочный \"Добрый\" - до 18.06.2025",
      severity: "high"
    },
    {
      title: "Низкий остаток",
      description: "Сок апельсиновый - осталось 5 единиц",
      severity: "medium"
    },
    {
      title: "Задержка поставки",
      description: "Поставка #1247 - задержка 2 дня",
      severity: "high"
    }
  ];

  return (
    <div className="space-y-6">
      {/* KPI Карточки */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Пульс бизнеса */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Прибыль/убытки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={profitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}М`} fontSize={12} />
                <Tooltip formatter={(value) => [`₸ ${value.toLocaleString('ru-RU')}`, "Прибыль"]} />
                <Line type="monotone" dataKey="profit" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-green-600" />
              Продажи по категориям
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={salesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {salesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Доля"]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {salesData.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Критические риски */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            Критические риски
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {criticalRisks.map((risk, index) => (
              <div key={index} className={`p-3 rounded border-l-4 ${
                risk.severity === "high" 
                  ? "bg-red-50 border-red-400" 
                  : "bg-yellow-50 border-yellow-400"
              }`}>
                <p className={`font-medium text-sm ${
                  risk.severity === "high" ? "text-red-800" : "text-yellow-800"
                }`}>
                  {risk.title}
                </p>
                <p className={`text-xs ${
                  risk.severity === "high" ? "text-red-600" : "text-yellow-600"
                }`}>
                  {risk.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
