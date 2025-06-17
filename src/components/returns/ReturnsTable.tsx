
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
import { ReturnRequest, returnStatusLabels, returnStatusColors } from "./types";

interface ReturnsTableProps {
  returns: ReturnRequest[];
}

export function ReturnsTable({ returns }: ReturnsTableProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('ru-RU');
  };

  const getTotalQuantity = (returnReq: ReturnRequest) => {
    return returnReq.items.reduce((sum, item) => sum + item.requestedQuantity, 0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Заявки на возврат</CardTitle>
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
              {returns.map((returnReq) => (
                <TableRow key={returnReq.id}>
                  <TableCell className="font-medium">{returnReq.id}</TableCell>
                  <TableCell>
                    <div>
                      <div>{formatDate(returnReq.plannedDate)}</div>
                      <div className="text-sm text-gray-500">{returnReq.plannedTime}</div>
                    </div>
                  </TableCell>
                  <TableCell>{returnReq.transportNumber}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{returnReq.driverName}</div>
                      <div className="text-sm text-gray-500">{returnReq.driverPhone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{returnReq.items.length} SKU</div>
                      <div className="text-sm text-gray-500">{getTotalQuantity(returnReq)} шт</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={returnStatusColors[returnReq.status]}>
                      {returnStatusLabels[returnReq.status]}
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
        
        {returns.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Заявки на возврат не найдены
          </div>
        )}
      </CardContent>
    </Card>
  );
}
