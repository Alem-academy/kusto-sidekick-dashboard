
export interface Batch {
  id: string;
  quantity: number;
  arrivalDate: string;
  expiryDate: string;
  status: "good" | "low" | "critical";
  purchasePrice: number;
}

export interface WarehouseItem {
  id: string;
  name: string;
  article: string;
  totalQuantity: number;
  batches: Batch[];
  totalValue: number;
  minStockLevel: number;
}

export type FilterType = "all" | "lowStock" | "expiryRisk";
