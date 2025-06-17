
import { useState } from "react";
import { DeliveryRequest } from "./types";
import { DeliveryStatsCards } from "./DeliveryStatsCards";
import { DeliveryFilters } from "./DeliveryFilters";
import { DeliveryTable } from "./DeliveryTable";

// Мокированные данные для демонстрации
const mockDeliveries: DeliveryRequest[] = [
  {
    id: "DEL-001",
    warehouseId: "warehouse-1",
    plannedDate: "2024-06-20",
    plannedTime: "10:00",
    transportNumber: "123 ABC 01",
    driverName: "Иванов Иван Иванович",
    driverPhone: "+7 (900) 123-45-67",
    items: [
      { id: "1", sku: "JUICE-001", name: "Сок яблочный 1л", plannedQuantity: 100, unit: "шт" },
      { id: "2", sku: "JUICE-002", name: "Сок апельсиновый 1л", plannedQuantity: 50, unit: "шт" }
    ],
    documents: [],
    status: "awaiting_arrival",
    createdAt: "2024-06-18T14:30:00Z",
    updatedAt: "2024-06-18T14:30:00Z"
  },
  {
    id: "DEL-002",
    warehouseId: "warehouse-2", 
    plannedDate: "2024-06-19",
    plannedTime: "14:30",
    transportNumber: "456 BCD 02",
    driverName: "Петров Петр Петрович",
    driverPhone: "+7 (900) 987-65-43",
    items: [
      { id: "3", sku: "WATER-001", name: "Вода питьевая 0.5л", plannedQuantity: 200, actualQuantity: 195, unit: "шт" }
    ],
    documents: [],
    status: "completed_discrepancy",
    createdAt: "2024-06-17T10:15:00Z",
    updatedAt: "2024-06-19T16:45:00Z"
  },
  {
    id: "DEL-003",
    warehouseId: "warehouse-3",
    plannedDate: "2024-06-18",
    plannedTime: "09:00", 
    transportNumber: "789 CDE 03",
    driverName: "Сидоров Сидор Сидорович",
    driverPhone: "+7 (900) 555-44-33",
    items: [
      { id: "4", sku: "JUICE-003", name: "Сок томатный 1л", plannedQuantity: 75, actualQuantity: 75, unit: "шт" },
      { id: "5", sku: "JUICE-004", name: "Сок виноградный 1л", plannedQuantity: 25, actualQuantity: 25, unit: "шт" }
    ],
    documents: [],
    status: "completed",
    createdAt: "2024-06-16T12:00:00Z",
    updatedAt: "2024-06-18T11:30:00Z"
  }
];

export function DeliveriesList() {
  const [deliveries] = useState<DeliveryRequest[]>(mockDeliveries);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredDeliveries = deliveries.filter(delivery => {
    const matchesSearch = 
      delivery.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.transportNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.driverName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || delivery.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <DeliveryStatsCards deliveries={deliveries} />
      
      <DeliveryFilters 
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        onSearchChange={setSearchQuery}
        onStatusFilterChange={setStatusFilter}
      />

      <DeliveryTable deliveries={filteredDeliveries} />
    </div>
  );
}
