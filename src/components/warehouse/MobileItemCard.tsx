
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, AlertTriangle, Calendar } from "lucide-react";
import { WarehouseItem } from "./types";
import { getStatusText, getStatusColor, getWorstStatus, isLowStock, hasExpiryRisk, formatCurrency } from "./utils";

interface MobileItemCardProps {
  item: WarehouseItem;
}

export function MobileItemCard({ item }: MobileItemCardProps) {
  return (
    <div className="border-b border-gray-200 p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Package className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <h3 className="font-semibold text-sm text-gray-900 truncate">{item.name}</h3>
            {isLowStock(item) && (
              <span title="Низкий остаток">
                <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
              </span>
            )}
            {hasExpiryRisk(item) && (
              <span title="Риск по сроку годности">
                <Calendar className="w-4 h-4 text-orange-500 flex-shrink-0" />
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 font-mono">{item.article}</p>
        </div>
        <Badge className={getStatusColor(getWorstStatus(item.batches))}>
          {getStatusText(getWorstStatus(item.batches))}
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-500">Количество:</span>
          <p className="font-semibold">{item.totalQuantity} шт.</p>
        </div>
        <div>
          <span className="text-gray-500">Стоимость:</span>
          <p className="font-semibold">{formatCurrency(item.totalValue)}</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-700">Партии:</p>
        {item.batches.map((batch, batchIndex) => (
          <div key={batch.id} className="bg-gray-50 rounded p-2 text-xs">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">Партия {batchIndex + 1}</span>
              <Badge variant="outline" className={getStatusColor(batch.status)}>
                {getStatusText(batch.status)}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 text-gray-600">
              <div>Кол-во: {batch.quantity} шт.</div>
              <div>Стоимость: {formatCurrency(batch.quantity * batch.purchasePrice)}</div>
              <div>Приход: {batch.arrivalDate}</div>
              <div>Срок: {batch.expiryDate}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 pt-2">
        <Button size="sm" variant="outline" className="flex-1 text-xs">Изменить</Button>
        <Button size="sm" variant="outline" className="flex-1 text-xs">История</Button>
      </div>
    </div>
  );
}
