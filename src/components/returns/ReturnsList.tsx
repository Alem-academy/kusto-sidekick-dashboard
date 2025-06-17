
import { useState } from "react";
import { ReturnRequest } from "./types";
import { ReturnsStatsCards } from "./ReturnsStatsCards";
import { ReturnsFilters } from "./ReturnsFilters";
import { ReturnsTable } from "./ReturnsTable";

// Мокированные данные для демонстрации
const mockReturns: ReturnRequest[] = [
  {
    id: "RET-001",
    warehouseId: "warehouse-1",
    plannedDate: "2024-06-21",
    plannedTime: "10:00",
    transportNumber: "A 123 BC 01",
    driverName: "Иванов Иван Иванович",
    driverPhone: "+7 (701) 123-45-67",
    items: [
      { id: "1", sku: "JUICE-001", name: "Сок яблочный 1л", batchNumber: "LOT-2024-001", expiryDate: "2024-08-15", requestedQuantity: 50, unit: "шт" },
      { id: "2", sku: "JUICE-002", name: "Сок апельсиновый 1л", batchNumber: "LOT-2024-002", expiryDate: "2024-09-20", requestedQuantity: 30, unit: "шт" }
    ],
    status: "new",
    createdAt: "2024-06-19T14:30:00Z",
    updatedAt: "2024-06-19T14:30:00Z"
  },
  {
    id: "RET-002",
    warehouseId: "warehouse-2", 
    plannedDate: "2024-06-20",
    plannedTime: "14:30",
    transportNumber: "B 456 CD 02",
    driverName: "Петров Петр Петрович",
    driverPhone: "+7 (702) 987-65-43",
    items: [
      { id: "3", sku: "WATER-001", name: "Вода питьевая 0.5л", batchNumber: "LOT-2024-003", expiryDate: "2024-12-31", requestedQuantity: 100, preparedQuantity: 100, unit: "шт" }
    ],
    status: "ready_for_pickup",
    createdAt: "2024-06-18T10:15:00Z",
    updatedAt: "2024-06-20T16:45:00Z"
  },
  {
    id: "RET-003",
    warehouseId: "warehouse-1",
    plannedDate: "2024-06-19",
    plannedTime: "09:00", 
    transportNumber: "C 789 DE 03",
    driverName: "Сидоров Сидор Сидорович",
    driverPhone: "+7 (703) 555-44-33",
    items: [
      { id: "4", sku: "JUICE-003", name: "Сок томатный 1л", batchNumber: "LOT-2024-004", expiryDate: "2024-07-10", requestedQuantity: 25, preparedQuantity: 25, unit: "шт" }
    ],
    status: "completed",
    createdAt: "2024-06-17T12:00:00Z",
    updatedAt: "2024-06-19T11:30:00Z"
  }
];

export function ReturnsList() {
  const [returns] = useState<ReturnRequest[]>(mockReturns);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredReturns = returns.filter(returnReq => {
    const matchesSearch = 
      returnReq.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      returnReq.transportNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      returnReq.driverName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || returnReq.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <ReturnsStatsCards returns={returns} />
      
      <ReturnsFilters 
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        onSearchChange={setSearchQuery}
        onStatusFilterChange={setStatusFilter}
      />

      <ReturnsTable returns={filteredReturns} />
    </div>
  );
}
