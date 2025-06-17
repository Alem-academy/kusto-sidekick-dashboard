import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Eye, Search, Filter, Truck, Calendar, Package } from "lucide-react";
import { DeliveryRequest, deliveryStatusLabels, deliveryStatusColors, DeliveryStatus } from "./types";

// Мокированные данные для демонстрации
const mockDeliveries: DeliveryRequest[] = [
  {
    id: "DEL-001",
    warehouseId: "warehouse-1",
    plannedDate: "2024-06-20",
    plannedTime: "10:00",
    transportNumber: "А123БВ777",
    driverName: "Иванов Иван Иванович",
    driverPhone: "+7 (900) 123-45-67",
    items: [
      { id: "1", sku: "JUICE-001", name: "Сок яблочный 1л", plannedQuantity: 100, unit: "шт" },
      { id: "2", sku: "JUICE-002", name: "Сок апельсиновый 1л", plannedQuantity: 50, unit: "шт" }
    ],
    documents: [],
    status: "awaiting_arrival",
    createdAt: "2024-06-18T14:30:00Z",
    updatedAt: "2024-06-18T14:30:00Z"
  },
  {
    id: "DEL-002",
    warehouseId: "warehouse-2", 
    plannedDate: "2024-06-19",
    plannedTime: "14:30",
    transportNumber: "В456ГД888",
    driverName: "Петров Петр Петрович",
    driverPhone: "+7 (900) 987-65-43",
    items: [
      { id: "3", sku: "WATER-001", name: "Вода питьевая 0.5л", plannedQuantity: 200, actualQuantity: 195, unit: "шт" }
    ],
    documents: [],
    status: "completed_discrepancy",
    createdAt: "2024-06-17T10:15:00Z",
    updatedAt: "2024-06-19T16:45:00Z"
  },
  {
    id: "DEL-003",
    warehouseId: "warehouse-3",
    plannedDate: "2024-06-18",
    plannedTime: "09:00", 
    transportNumber: "С789ЕЖ999",
    driverName: "Сидоров Сидор Сидорович",
    driverPhone: "+7 (900) 555-44-33",
    items: [
      { id: "4", sku: "JUICE-003", name: "Сок томатный 1л", plannedQuantity: 75, actualQuantity: 75, unit: "шт" },
      { id: "5", sku: "JUICE-004", name: "Сок виноградный 1л", plannedQuantity: 25, actualQuantity: 25, unit: "шт" }
    ],
    documents: [],
    status: "completed",
    createdAt: "2024-06-16T12:00:00Z",
    updatedAt: "2024-06-18T11:30:00Z"
  }
];

export function DeliveriesList() {
  const [deliveries] = useState<DeliveryRequest[]>(mockDeliveries);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredDeliveries = deliveries.filter(delivery => {
    const matchesSearch = 
      delivery.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.transportNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.driverName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || delivery.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('ru-RU');
  };

  const getTotalQuantity = (delivery: DeliveryRequest) => {
    return delivery.items.reduce((sum, item) => sum + item.plannedQuantity, 0);
  };

  return (
    <div className="space-y-6">
      {/* Статистика */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всего заявок</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{deliveries.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ожидают прибытия</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {deliveries.filter(d => d.status === "awaiting_arrival").length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">В процессе</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {deliveries.filter(d => ["on_territory", "in_progress"].includes(d.status)).length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Завершены</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {deliveries.filter(d => ["completed", "completed_discrepancy"].includes(d.status)).length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Фильтры */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Поиск по номеру заявки, машине или водителю..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Статус" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все статусы</SelectItem>
            <SelectItem value="awaiting_arrival">Ожидает прибытия</SelectItem>
            <SelectItem value="on_territory">На территории</SelectItem>
            <SelectItem value="in_progress">В процессе</SelectItem>
            <SelectItem value="completed_discrepancy">С расхождениями</SelectItem>
            <SelectItem value="completed">Завершены</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Таблица */}
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
                {filteredDeliveries.map((delivery) => (
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
          
          {filteredDeliveries.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Заявки не найдены
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
