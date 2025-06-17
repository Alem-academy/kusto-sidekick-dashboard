
export interface Batch {
  id: string;
  quantity: number;
  arrivalDate: string;
  expiryDate: string;
  status: "good" | "low" | "critical";
  purchasePrice: number;
  declaredPrice?: number; // Объявленная стоимость единицы
}

export interface WarehouseItem {
  id: string;
  name: string;
  article: string;
  totalQuantity: number;
  batches: Batch[];
  totalValue: number;
  minStockLevel: number;
  declaredTotalValue?: number; // Общая объявленная стоимость
}

export type FilterType = "all" | "lowStock" | "expiryRisk";
