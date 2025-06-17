
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, Calendar, DollarSign } from "lucide-react";
import { FilterType } from "./types";
import { formatCurrency } from "./utils";

interface KpiCardsProps {
  lowStockCount: number;
  expiryRiskCount: number;
  totalValue: number;
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function KpiCards({ 
  lowStockCount, 
  expiryRiskCount, 
  totalValue, 
  activeFilter, 
  onFilterChange 
}: KpiCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
      <Card 
        className={`cursor-pointer transition-all hover:shadow-md ${
          activeFilter === "lowStock" ? "ring-2 ring-red-500 bg-red-50" : ""
        }`}
        onClick={() => onFilterChange(activeFilter === "lowStock" ? "all" : "lowStock")}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xs md:text-sm font-medium">Товары с низким остатком</CardTitle>
          <TrendingDown className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-xl md:text-2xl font-bold text-red-600">{lowStockCount}</div>
          <p className="text-xs text-gray-600">SKU ниже минимального порога</p>
        </CardContent>
      </Card>

      <Card 
        className={`cursor-pointer transition-all hover:shadow-md ${
          activeFilter === "expiryRisk" ? "ring-2 ring-orange-500 bg-orange-50" : ""
        }`}
        onClick={() => onFilterChange(activeFilter === "expiryRisk" ? "all" : "expiryRisk")}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xs md:text-sm font-medium">Риски по срокам годности</CardTitle>
          <Calendar className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-xl md:text-2xl font-bold text-orange-600">{expiryRiskCount}</div>
          <p className="text-xs text-gray-600">SKU с истекающим сроком (&lt; 30 дней)</p>
        </CardContent>
      </Card>

      <Card className="cursor-pointer transition-all hover:shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xs md:text-sm font-medium">Общая стоимость склада</CardTitle>
          <DollarSign className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-xl md:text-2xl font-bold text-green-600">{formatCurrency(totalValue)}</div>
          <p className="text-xs text-gray-600">Суммарная стоимость всех товаров</p>
        </CardContent>
      </Card>
    </div>
  );
}
