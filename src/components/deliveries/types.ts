
export interface DeliveryItem {
  id: string;
  sku: string;
  name: string;
  plannedQuantity: number;
  actualQuantity?: number;
  unit: string;
  declaredUnitPrice?: number; // Объявленная стоимость единицы
  declaredTotalPrice?: number; // Общая объявленная стоимость партии
}

export interface DeliveryRequest {
  id: string;
  warehouseId: string;
  plannedDate: string;
  plannedTime: string;
  transportNumber: string;
  driverName: string;
  driverPhone: string;
  items: DeliveryItem[];
  documents: File[];
  status: DeliveryStatus;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export type DeliveryStatus = 
  | "awaiting_arrival"      // Ожидает прибытия
  | "on_territory"          // Машина на территории
  | "in_progress"           // Идет приемка
  | "completed_discrepancy" // Приемка завершена с расхождениями
  | "completed";            // Приемка завершена

export const deliveryStatusLabels: Record<DeliveryStatus, string> = {
  awaiting_arrival: "Ожидает прибытия",
  on_territory: "Машина на территории", 
  in_progress: "Идет приемка",
  completed_discrepancy: "Приемка завершена с расхождениями",
  completed: "Приемка завершена"
};

export const deliveryStatusColors: Record<DeliveryStatus, string> = {
  awaiting_arrival: "bg-blue-100 text-blue-800",
  on_territory: "bg-yellow-100 text-yellow-800",
  in_progress: "bg-orange-100 text-orange-800", 
  completed_discrepancy: "bg-red-100 text-red-800",
  completed: "bg-green-100 text-green-800"
};
