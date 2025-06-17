
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

const movementData = [
  { day: "1", incoming: 120, outgoing: 80 },
  { day: "5", incoming: 150, outgoing: 95 },
  { day: "10", incoming: 180, outgoing: 110 },
  { day: "15", incoming: 200, outgoing: 140 },
  { day: "20", incoming: 170, outgoing: 120 },
  { day: "25", incoming: 190, outgoing: 160 },
  { day: "30", incoming: 220, outgoing: 180 },
];

export function InventoryMovement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Движение товаров
        </CardTitle>
        <p className="text-sm text-gray-600">Динамика приходов и расходов за последние 30 дней</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={movementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="day" 
              fontSize={12}
              tickFormatter={(value) => `${value} день`}
            />
            <YAxis 
              fontSize={12}
              tickFormatter={(value) => `${value} шт`}
            />
            <Tooltip 
              formatter={(value, name) => [
                `${value} единиц`, 
                name === "incoming" ? "Приход" : "Расход"
              ]}
              labelFormatter={(value) => `День ${value}`}
            />
            <Line 
              type="monotone" 
              dataKey="incoming" 
              stroke="#10B981" 
              strokeWidth={2}
              dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
              name="incoming"
            />
            <Line 
              type="monotone" 
              dataKey="outgoing" 
              stroke="#EF4444" 
              strokeWidth={2}
              dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
              name="outgoing"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
