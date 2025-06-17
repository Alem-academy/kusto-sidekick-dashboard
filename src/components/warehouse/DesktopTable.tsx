
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Package, AlertTriangle, Calendar } from "lucide-react";
import { WarehouseItem } from "./types";
import { getStatusText, getStatusColor, getWorstStatus, isLowStock, hasExpiryRisk, formatCurrency } from "./utils";

interface DesktopTableProps {
  items: WarehouseItem[];
}

export function DesktopTable({ items }: DesktopTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Наименование</TableHead>
          <TableHead>Артикул</TableHead>
          <TableHead>Количество</TableHead>
          <TableHead>Дата прихода</TableHead>
          <TableHead>Срок годности</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead>Стоимость</TableHead>
          <TableHead className="text-center">Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <>
            <TableRow key={item.id} className="bg-gray-50 border-b-2 border-gray-200">
              <TableCell className="font-bold">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-blue-600" />
                  {item.name}
                  {isLowStock(item) && (
                    <span title="Низкий остаток">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </span>
                  )}
                  {hasExpiryRisk(item) && (
                    <span title="Риск по сроку годности">
                      <Calendar className="w-4 h-4 text-orange-500" />
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell className="font-mono text-sm font-semibold">{item.article}</TableCell>
              <TableCell className="font-bold text-lg">{item.totalQuantity} шт.</TableCell>
              <TableCell className="text-gray-500">—</TableCell>
              <TableCell className="text-gray-500">—</TableCell>
              <TableCell>
                <Badge className={getStatusColor(getWorstStatus(item.batches))}>
                  {getStatusText(getWorstStatus(item.batches))}
                </Badge>
              </TableCell>
              <TableCell className="font-bold">{formatCurrency(item.totalValue)}</TableCell>
              <TableCell className="text-center">
                <div className="flex gap-1 justify-center">
                  <Button size="sm" variant="outline">Изменить</Button>
                  <Button size="sm" variant="outline">История</Button>
                </div>
              </TableCell>
            </TableRow>
            
            {item.batches.map((batch, batchIndex) => (
              <TableRow key={batch.id} className="hover:bg-gray-50">
                <TableCell className="pl-8 text-sm text-gray-600">
                  └─ Партия {batchIndex + 1}
                </TableCell>
                <TableCell className="text-sm text-gray-500">—</TableCell>
                <TableCell className="text-sm">{batch.quantity} шт.</TableCell>
                <TableCell className="text-sm">{batch.arrivalDate}</TableCell>
                <TableCell className="text-sm">{batch.expiryDate}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(batch.status)}>
                    {getStatusText(batch.status)}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm">
                  {formatCurrency(batch.quantity * batch.purchasePrice)}
                </TableCell>
                <TableCell className="text-center">
                  <Button size="sm" variant="ghost" className="text-xs">
                    Детали
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </>
        ))}
      </TableBody>
    </Table>
  );
}
