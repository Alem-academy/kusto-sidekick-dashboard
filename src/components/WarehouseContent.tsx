
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Archive } from "lucide-react";
import { WarehouseItem, FilterType } from "./warehouse/types";
import { WarehouseHeader } from "./warehouse/WarehouseHeader";
import { SearchAndFilters } from "./warehouse/SearchAndFilters";
import { KpiCards } from "./warehouse/KpiCards";
import { MobileItemCard } from "./warehouse/MobileItemCard";
import { DesktopTable } from "./warehouse/DesktopTable";
import { EmptyState } from "./warehouse/EmptyState";
import { hasExpiryRisk } from "./warehouse/utils";

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

  // Calculate KPI data
  const kpiData = useMemo(() => {
    const lowStockItems = warehouseData.filter(item => item.totalQuantity < item.minStockLevel);
    const expiryRiskItems = warehouseData.filter(item => hasExpiryRisk(item));
    const totalValue = warehouseData.reduce((sum, item) => sum + item.totalValue, 0);

    return {
      lowStockCount: lowStockItems.length,
      expiryRiskCount: expiryRiskItems.length,
      totalValue
    };
  }, [warehouseData]);

  // Filter data
  const filteredData = useMemo(() => {
    let filtered = warehouseData;

    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.article.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeFilter === "lowStock") {
      filtered = filtered.filter(item => item.totalQuantity < item.minStockLevel);
    } else if (activeFilter === "expiryRisk") {
      filtered = filtered.filter(item => hasExpiryRisk(item));
    }

    return filtered;
  }, [searchQuery, activeFilter, warehouseData]);

  return (
    <div className="p-3 md:p-6 space-y-4 md:space-y-6">
      <WarehouseHeader />

      <div className="space-y-4">
        <SearchAndFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <KpiCards
          lowStockCount={kpiData.lowStockCount}
          expiryRiskCount={kpiData.expiryRiskCount}
          totalValue={kpiData.totalValue}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <Archive className="w-4 md:w-5 h-4 md:h-5 text-blue-600" />
            Детализированная таблица остатков ({filteredData.length} товаров)
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 md:p-6">
          <div className="block md:hidden">
            {filteredData.map((item) => (
              <MobileItemCard key={item.id} item={item} />
            ))}
          </div>

          <div className="hidden md:block">
            <DesktopTable items={filteredData} />
          </div>
          
          {filteredData.length === 0 && <EmptyState />}
        </CardContent>
      </Card>
    </div>
  );
}
