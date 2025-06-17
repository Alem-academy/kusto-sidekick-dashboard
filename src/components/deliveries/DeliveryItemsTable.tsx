
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Info } from "lucide-react";
import { DeliveryItem, unitOptions } from "./types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface DeliveryItemsTableProps {
  items: DeliveryItem[];
  onAddItem: () => void;
  onUpdateItem: (id: string, field: keyof DeliveryItem, value: any) => void;
  onRemoveItem: (id: string) => void;
}

export function DeliveryItemsTable({ 
  items, 
  onAddItem, 
  onUpdateItem, 
  onRemoveItem 
}: DeliveryItemsTableProps) {
  
  const handleUnitPriceBlur = (itemId: string, unitPriceValue: string) => {
    const unitPrice = parseFloat(unitPriceValue) || 0;
    const item = items.find(item => item.id === itemId);
    onUpdateItem(itemId, "declaredUnitPrice", unitPrice);
    
    // Пересчитываем общую стоимость только если есть количество
    if (item && item.plannedQuantity && item.plannedQuantity > 0) {
      const totalPrice = unitPrice * item.plannedQuantity;
      onUpdateItem(itemId, "declaredTotalPrice", totalPrice);
    }
  };

  const handleTotalPriceBlur = (itemId: string, totalPriceValue: string) => {
    const totalPrice = parseFloat(totalPriceValue) || 0;
    const item = items.find(item => item.id === itemId);
    onUpdateItem(itemId, "declaredTotalPrice", totalPrice);
    
    // Пересчитываем стоимость за единицу только если есть количество
    if (item && item.plannedQuantity && item.plannedQuantity > 0) {
      const unitPrice = totalPrice / item.plannedQuantity;
      onUpdateItem(itemId, "declaredUnitPrice", unitPrice);
    }
  };

  const handleQuantityBlur = (itemId: string, quantityValue: string) => {
    const quantity = parseInt(quantityValue) || 0;
    const item = items.find(item => item.id === itemId);
    onUpdateItem(itemId, "plannedQuantity", quantity);
    
    // Пересчитываем общую стоимость при изменении количества, если есть цена за единицу
    if (item && item.declaredUnitPrice && quantity > 0) {
      const totalPrice = item.declaredUnitPrice * quantity;
      onUpdateItem(itemId, "declaredTotalPrice", totalPrice);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">Товары к поставке</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent className="max-w-sm">
                <p className="text-sm">
                  Объявленная стоимость используется для страховых расчетов. 
                  Если не указана, применяются стандартные условия договора.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button type="button" onClick={onAddItem} variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Добавить товар
        </Button>
      </div>

      {items.length > 0 && (
        <div className="space-y-4">
          {items.map((item, index) => (
            <Card key={item.id} className="p-4">
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-gray-700">Товар #{index + 1}</h4>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">SKU</label>
                    <Input
                      value={item.sku}
                      onChange={(e) => onUpdateItem(item.id, "sku", e.target.value)}
                      placeholder="JUICE-001"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Наименование</label>
                    <Input
                      value={item.name}
                      onChange={(e) => onUpdateItem(item.id, "name", e.target.value)}
                      placeholder="Сок яблочный 1л"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Количество</label>
                    <Input
                      type="number"
                      min="1"
                      value={item.plannedQuantity || ""}
                      onChange={(e) => onUpdateItem(item.id, "plannedQuantity", parseInt(e.target.value) || 0)}
                      onBlur={(e) => handleQuantityBlur(item.id, e.target.value)}
                      className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Единица измерения</label>
                    <Select
                      value={item.unit}
                      onValueChange={(value) => onUpdateItem(item.id, "unit", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите единицу" />
                      </SelectTrigger>
                      <SelectContent>
                        {unitOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Стоимость за единицу</label>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.declaredUnitPrice || ""}
                      onChange={(e) => onUpdateItem(item.id, "declaredUnitPrice", parseFloat(e.target.value) || 0)}
                      onBlur={(e) => handleUnitPriceBlur(item.id, e.target.value)}
                      placeholder="0.00"
                      className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Общая стоимость</label>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.declaredTotalPrice || ""}
                      onChange={(e) => onUpdateItem(item.id, "declaredTotalPrice", parseFloat(e.target.value) || 0)}
                      onBlur={(e) => handleTotalPriceBlur(item.id, e.target.value)}
                      placeholder="0.00"
                      className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-800 mb-2">Информация об объявленной стоимости</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Объявленная стоимость используется для расчета страхового возмещения</li>
          <li>• Можно указать стоимость за единицу или общую стоимость партии</li>
          <li>• При изменении одного поля другое пересчитывается автоматически</li>
          <li>• Если поля не заполнены, применяются стандартные условия договора</li>
        </ul>
      </div>
    </div>
  );
}
