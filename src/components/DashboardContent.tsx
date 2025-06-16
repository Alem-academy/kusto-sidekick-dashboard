
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Package, ShoppingCart, Users, AlertTriangle } from "lucide-react";

const revenueData = [
  { month: "Янв", revenue: 4500000 },
  { month: "Фев", revenue: 3800000 },
  { month: "Мар", revenue: 5200000 },
  { month: "Апр", revenue: 4900000 },
  { month: "Май", revenue: 6100000 },
  { month: "Июн", revenue: 5800000 },
];

const categoryData = [
  { name: "Молочные продукты", value: 35, color: "#3B82F6" },
  { name: "Мясные изделия", value: 25, color: "#EF4444" },
  { name: "Овощи и фрукты", value: 20, color: "#10B981" },
  { name: "Хлебобулочные", value: 20, color: "#F59E0B" },
];

export function DashboardContent() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Главная панель</h1>
        <p className="text-gray-600 mt-1">Добро пожаловать в систему управления складом МКС</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Общий оборот</p>
                <p className="text-2xl font-bold text-green-600">₸ 28,300,000</p>
                <p className="text-xs text-green-600 mt-1">+12% к пред. месяцу</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Товаров на складе</p>
                <p className="text-2xl font-bold text-blue-600">1,247</p>
                <p className="text-xs text-blue-600 mt-1">156 новых позиций</p>
              </div>
              <Package className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Активных заказов</p>
                <p className="text-2xl font-bold text-orange-600">89</p>
                <p className="text-xs text-orange-600 mt-1">23 в обработке</p>
              </div>
              <ShoppingCart className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Активных клиентов</p>
                <p className="text-2xl font-bold text-purple-600">342</p>
                <p className="text-xs text-purple-600 mt-1">+28 новых</p>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Оборот по месяцам (₸)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}М`} />
                <Tooltip formatter={(value) => [`₸ ${value.toLocaleString('ru-RU')}`, "Оборот"]} />
                <Bar dataKey="revenue" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-green-600" />
              Структура товаров
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Доля"]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Последние операции</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium">Поступление товара</p>
                  <p className="text-sm text-gray-600">Молочные продукты - 150 единиц</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">₸ 450,000</p>
                  <p className="text-xs text-gray-500">2 часа назад</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium">Заказ отправлен</p>
                  <p className="text-sm text-gray-600">Заказ #1247 - ТОО "Алматы Продукт"</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600">₸ 125,500</p>
                  <p className="text-xs text-gray-500">4 часа назад</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div>
                  <p className="font-medium">Новый заказ</p>
                  <p className="text-sm text-gray-600">Заказ #1248 - ИП "Қасымов"</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-orange-600">₸ 89,200</p>
                  <p className="text-xs text-gray-500">6 часов назад</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Уведомления
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
                <p className="font-medium text-red-800">Критический остаток</p>
                <p className="text-sm text-red-600">Молоко 3.2% - осталось 5 единиц</p>
                <p className="text-xs text-red-500 mt-1">Требуется пополнение</p>
              </div>
              
              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="font-medium text-yellow-800">Истекает срок годности</p>
                <p className="text-sm text-yellow-600">Творог "Алматы" - до 18.06.2025</p>
                <p className="text-xs text-yellow-500 mt-1">Осталось 2 дня</p>
              </div>
              
              <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                <p className="font-medium text-blue-800">Просроченный заказ</p>
                <p className="text-sm text-blue-600">Заказ #1245 - задержка доставки</p>
                <p className="text-xs text-blue-500 mt-1">Свяжитесь с клиентом</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
