
import { useState } from "react";
import { TopAnalyticsPanel } from "./documents/TopAnalyticsPanel";
import { HierarchicalDocumentsTable } from "./documents/HierarchicalDocumentsTable";

export function DocumentsContent() {
  const [filters, setFilters] = useState({
    period: "all",
    documentType: "all",
    paymentStatus: "all"
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Управление документами</h1>
          <p className="text-gray-600 mt-1">Финансовая аналитика и отслеживание статусов оплаты</p>
        </div>
      </div>

      <TopAnalyticsPanel 
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      <HierarchicalDocumentsTable />
    </div>
  );
}
