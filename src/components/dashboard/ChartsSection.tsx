
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Package } from "lucide-react";

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

export function ChartsSection() {
  return (
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
  );
}
