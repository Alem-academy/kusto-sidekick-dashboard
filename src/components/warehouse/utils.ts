
import { Batch, WarehouseItem } from "./types";

export const getStatusText = (status: string) => {
  switch (status) {
    case 'good': return 'В наличии';
    case 'low': return 'Мало';
    case 'critical': return 'Критично';
    default: return 'Неизвестен';
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'good': return 'bg-green-100 text-green-800';
    case 'low': return 'bg-yellow-100 text-yellow-800';
    case 'critical': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const getWorstStatus = (batches: Batch[]) => {
  if (batches.some(batch => batch.status === "critical")) return "critical";
  if (batches.some(batch => batch.status === "low")) return "low";
  return "good";
};

export const isLowStock = (item: WarehouseItem) => item.totalQuantity < item.minStockLevel;

export const hasExpiryRisk = (item: WarehouseItem) => {
  return item.batches.some(batch => {
    const expiryDate = new Date(batch.expiryDate.split('.').reverse().join('-'));
    const today = new Date();
    const daysDiff = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return daysDiff <= 30;
  });
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('kk-KZ', {
    style: 'currency',
    currency: 'KZT',
    minimumFractionDigits: 0
  }).format(value);
};
