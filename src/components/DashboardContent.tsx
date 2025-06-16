import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Package, ShoppingCart, Users, AlertTriangle } from "lucide-react";
import { MobileSectionIcons } from "@/components/MobileSectionIcons";

const revenueData = [
  { month: "Янв", revenue: 4500000 },
  { month: "Фев", revenue: 3800000 },
  { month: "Мар", revenue: 5200000 },
  { month: "Апр", revenue: 4900000 },
  { month: "Май", revenue: 6100000 },
  { month: "Июн", revenue: 5800000 },
];

const categoryData = [
  { name: "Соки фруктовые", value: 35, color: "#3B82F6" },
  { name: "Соки овощные", value: 25, color: "#EF4444" },
  { name: "Нектары", value: 20, color: "#10B981" },
  { name: "Морсы и компоты", value: 20, color: "#F59E0B" },
];

interface DashboardContentProps {
  onSectionChange?: (section: string) => void;
}

export function DashboardContent({ onSectionChange }: DashboardContentProps) {
  return (
    <div className="p-4 md:p-6 space-y-6 pb-20 md:pb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Главная панель</h1>
        <p className="text-gray-600 mt-1">Добро пожаловать в систему управления складом ИП "Соки и напитки"</p>
      </div>

      {/* Mobile Section Icons */}
      {onSectionChange && <MobileSectionIcons onSectionChange={onSectionChange} />}

      {/* Key Metrics - Responsive Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-gray-600">Общий оборот</p>
                <p className="text-lg md:text-2xl font-bold text-green-600">₸ 28.3М</p>
                <p className="text-xs text-green-600 mt-1">+12%</p>
              </div>
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-gray-600">Товаров</p>
                <p className="text-lg md:text-2xl font-bold text-blue-600">1,247</p>
                <p className="text-xs text-blue-600 mt-1">156 новых</p>
              </div>
              <Package className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-gray-600">Заказов</p>
                <p className="text-lg md:text-2xl font-bold text-orange-600">89</p>
                <p className="text-xs text-orange-600 mt-1">23 активных</p>
              </div>
              <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-gray-600">Клиентов</p>
                <p className="text-lg md:text-2xl font-bold text-purple-600">342</p>
                <p className="text-xs text-purple-600 mt-1">+28 новых</p>
              </div>
              <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row - Stack on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm md:text-base">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              Оборот по месяцам (₸)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}М`} fontSize={12} />
                <Tooltip formatter={(value) => [`₸ ${value.toLocaleString('ru-RU')}`, "Оборот"]} />
                <Bar dataKey="revenue" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm md:text-base">
              <Package className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              Структура товаров
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs md:text-sm">
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

      {/* Recent Activity & Alerts - Stack on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm md:text-base">Последние операции</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm">Поступление товара</p>
                  <p className="text-xs text-gray-600 truncate">Соки фруктовые - 150 единиц</p>
                </div>
                <div className="text-right ml-2">
                  <p className="font-bold text-green-600 text-sm">₸ 450К</p>
                  <p className="text-xs text-gray-500">2ч назад</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm">Заказ отправлен</p>
                  <p className="text-xs text-gray-600 truncate">Заказ #1247</p>
                </div>
                <div className="text-right ml-2">
                  <p className="font-bold text-blue-600 text-sm">₸ 125К</p>
                  <p className="text-xs text-gray-500">4ч назад</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm">Новый заказ</p>
                  <p className="text-xs text-gray-600 truncate">Заказ #1248</p>
                </div>
                <div className="text-right ml-2">
                  <p className="font-bold text-orange-600 text-sm">₸ 89К</p>
                  <p className="text-xs text-gray-500">6ч назад</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm md:text-base">
              <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
              Уведомления
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
                <p className="font-medium text-red-800 text-sm">Критический остаток</p>
                <p className="text-xs text-red-600">Сок яблочный - осталось 5 единиц</p>
              </div>
              
              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="font-medium text-yellow-800 text-sm">Истекает срок</p>
                <p className="text-xs text-yellow-600">Сок апельсиновый "Добрый" - до 18.06.2025</p>
              </div>
              
              <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                <p className="font-medium text-blue-800 text-sm">Просроченный заказ</p>
                <p className="text-xs text-blue-600">Заказ #1245 - задержка доставки</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
