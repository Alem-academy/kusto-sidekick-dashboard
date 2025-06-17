
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
import { DeliveryRequest, deliveryStatusLabels, deliveryStatusColors } from "./types";

interface DeliveryTableProps {
  deliveries: DeliveryRequest[];
}

export function DeliveryTable({ deliveries }: DeliveryTableProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('ru-RU');
  };

  const getTotalQuantity = (delivery: DeliveryRequest) => {
    return delivery.items.reduce((sum, item) => sum + item.plannedQuantity, 0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Заявки на поставку</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>№ заявки</TableHead>
                <TableHead>Дата/время</TableHead>
                <TableHead>Транспорт</TableHead>
                <TableHead>Водитель</TableHead>
                <TableHead>Позиций</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveries.map((delivery) => (
                <TableRow key={delivery.id}>
                  <TableCell className="font-medium">{delivery.id}</TableCell>
                  <TableCell>
                    <div>
                      <div>{formatDate(delivery.plannedDate)}</div>
                      <div className="text-sm text-gray-500">{delivery.plannedTime}</div>
                    </div>
                  </TableCell>
                  <TableCell>{delivery.transportNumber}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{delivery.driverName}</div>
                      <div className="text-sm text-gray-500">{delivery.driverPhone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{delivery.items.length} SKU</div>
                      <div className="text-sm text-gray-500">{getTotalQuantity(delivery)} шт</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={deliveryStatusColors[delivery.status]}>
                      {deliveryStatusLabels[delivery.status]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Детали
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {deliveries.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Заявки не найдены
          </div>
        )}
      </CardContent>
    </Card>
  );
}
