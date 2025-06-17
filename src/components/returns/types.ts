
export interface ReturnItem {
  id: string;
  sku: string;
  name: string;
  batchNumber: string;
  expiryDate: string;
  requestedQuantity: number;
  preparedQuantity?: number;
  unit: string;
}

export interface ReturnRequest {
  id: string;
  warehouseId: string;
  plannedDate: string;
  plannedTime: string;
  transportNumber: string;
  driverName: string;
  driverPhone: string;
  items: ReturnItem[];
  status: ReturnStatus;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export type ReturnStatus = 
  | "new"                   // Новая заявка
  | "picking"               // Комплектуется
  | "ready_for_pickup"      // Готов к выдаче
  | "completed"             // Выдан
  | "cancelled";            // Отменен

export const returnStatusLabels: Record<ReturnStatus, string> = {
  new: "Новая заявка",
  picking: "Комплектуется",
  ready_for_pickup: "Готов к выдаче",
  completed: "Выдан",
  cancelled: "Отменен"
};

export const returnStatusColors: Record<ReturnStatus, string> = {
  new: "bg-blue-100 text-blue-800",
  picking: "bg-yellow-100 text-yellow-800",
  ready_for_pickup: "bg-green-100 text-green-800",
  completed: "bg-gray-100 text-gray-800",
  cancelled: "bg-red-100 text-red-800"
};
