
import { Package } from "lucide-react";

export function EmptyState() {
  return (
    <div className="text-center py-8 text-gray-500">
      <Package className="w-12 h-12 mx-auto mb-4 text-gray-300" />
      <p>Товары не найдены</p>
      <p className="text-sm">Попробуйте изменить критерии поиска или фильтры</p>
    </div>
  );
}
