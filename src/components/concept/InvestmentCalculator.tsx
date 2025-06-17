
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, Percent } from "lucide-react";

export function InvestmentCalculator() {
  const [investment, setInvestment] = useState(500000);
  const [years, setYears] = useState(3);
  
  const calculateReturns = () => {
    const annualReturn = 0.45; // 45% годовая доходность
    const totalReturn = investment * Math.pow(1 + annualReturn, years);
    const profit = totalReturn - investment;
    const roi = (profit / investment) * 100;
    
    return {
      totalReturn: Math.round(totalReturn),
      profit: Math.round(profit),
      roi: Math.round(roi * 10) / 10
    };
  };

  const results = calculateReturns();

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <Calculator className="w-5 h-5" />
          Калькулятор инвестиций
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="investment">Сумма инвестиций (₽)</Label>
            <Input
              id="investment"
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="years">Период (лет)</Label>
            <Input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="bg-white"
              min="1"
              max="10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-600">Общий доход</span>
            </div>
            <div className="text-2xl font-bold text-green-600">
              {results.totalReturn.toLocaleString()} ₽
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Прибыль</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">
              {results.profit.toLocaleString()} ₽
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-600">ROI</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">
              {results.roi}%
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-600 mb-2">
            <strong>Примечание:</strong> Расчеты основаны на прогнозируемой годовой доходности 45% 
            и могут варьироваться в зависимости от рыночных условий и эффективности реализации плана.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
