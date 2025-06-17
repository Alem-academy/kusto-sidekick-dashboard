
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";
import { ReturnItem } from "./types";

// Мокданные товаров на складе
const mockWarehouseInventory = [
  {
    sku: "MED001",
    name: "Парацетамол 500мг",
    batches: [
      { batchNumber: "PAR001", expiryDate: "2025-12-31", availableQuantity: 1000, unit: "шт" },
      { batchNumber: "PAR002", expiryDate: "2025-06-30", availableQuantity: 500, unit: "шт" }
    ]
  },
  {
    sku: "MED002", 
    name: "Ибупрофен 400мг",
    batches: [
      { batchNumber: "IBU001", expiryDate: "2025-10-15", availableQuantity: 750, unit: "шт" },
      { batchNumber: "IBU002", expiryDate: "2025-03-20", availableQuantity: 300, unit: "шт" }
    ]
  },
  {
    sku: "MED003",
    name: "Аспирин 100мг", 
    batches: [
      { batchNumber: "ASP001", expiryDate: "2025-08-10", availableQuantity: 2000, unit: "шт" }
    ]
  }
];

interface ReturnItemsSelectorProps {
  warehouseId: string;
  selectedItems: ReturnItem[];
  onItemsChange: (items: ReturnItem[]) => void;
}

export function ReturnItemsSelector({ warehouseId, selectedItems, onItemsChange }: ReturnItemsSelectorProps) {
  const [inventory, setInventory] = useState(mockWarehouseInventory);

  // В реальном приложении здесь будет загрузка данных склада
  useEffect(() => {
    if (warehouseId) {
      console.log("Loading inventory for warehouse:", warehouseId);
      // Здесь будет API запрос для получения товаров склада
      setInventory(mockWarehouseInventory);
    }
  }, [warehouseId]);

  const addNewItem = () => {
    const newItem: ReturnItem = {
      id: `temp-${Date.now()}`,
      sku: "",
      name: "",
      batchNumber: "",
      expiryDate: "",
      requestedQuantity: 0,
      unit: ""
    };
    onItemsChange([...selectedItems, newItem]);
  };

  const updateItem = (index: number, field: keyof ReturnItem, value: any) => {
    const updatedItems = [...selectedItems];
    updatedItems[index] = { ...updatedItems[index], [field]: value };

    // Если выбран SKU, обновляем название товара и единицу измерения
    if (field === "sku") {
      const selectedProduct = inventory.find(product => product.sku === value);
      if (selectedProduct) {
        updatedItems[index].name = selectedProduct.name;
        updatedItems[index].unit = selectedProduct.batches[0]?.unit || "";
        updatedItems[index].batchNumber = "";
        updatedItems[index].expiryDate = "";
      }
    }

    // Если выбрана партия, обновляем срок годности
    if (field === "batchNumber") {
      const selectedProduct = inventory.find(product => product.sku === updatedItems[index].sku);
      const selectedBatch = selectedProduct?.batches.find(batch => batch.batchNumber === value);
      if (selectedBatch) {
        updatedItems[index].expiryDate = selectedBatch.expiryDate;
        updatedItems[index].unit = selectedBatch.unit;
      }
    }

    onItemsChange(updatedItems);
  };

  const removeItem = (index: number) => {
    const updatedItems = selectedItems.filter((_, i) => i !== index);
    onItemsChange(updatedItems);
  };

  if (!warehouseId) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-gray-500 text-center">Сначала выберите склад для загрузки списка товаров</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {selectedItems.map((item, index) => {
        const selectedProduct = inventory.find(product => product.sku === item.sku);
        const availableBatches = selectedProduct?.batches || [];
        const selectedBatch = availableBatches.find(batch => batch.batchNumber === item.batchNumber);
        const maxQuantity = selectedBatch?.availableQuantity || 0;

        return (
          <Card key={item.id} className="relative">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Товар {index + 1}</CardTitle>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeItem(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SKU товара
                  </label>
                  <Select
                    value={item.sku}
                    onValueChange={(value) => updateItem(index, "sku", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите товар" />
                    </SelectTrigger>
                    <SelectContent>
                      {inventory.map((product) => (
                        <SelectItem key={product.sku} value={product.sku}>
                          {product.sku} - {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Партия
                  </label>
                  <Select
                    value={item.batchNumber}
                    onValueChange={(value) => updateItem(index, "batchNumber", value)}
                    disabled={!item.sku}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите партию" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableBatches.map((batch) => (
                        <SelectItem key={batch.batchNumber} value={batch.batchNumber}>
                          {batch.batchNumber} (до {batch.expiryDate}, доступно: {batch.availableQuantity} {batch.unit})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {item.sku && (
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm text-gray-600">
                    <strong>Товар:</strong> {item.name}
                  </p>
                  {item.batchNumber && (
                    <>
                      <p className="text-sm text-gray-600">
                        <strong>Срок годности:</strong> {item.expiryDate}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Доступно на складе:</strong> {maxQuantity} {item.unit}
                      </p>
                    </>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Количество для возврата
                </label>
                <Input
                  type="number"
                  placeholder="0"
                  value={item.requestedQuantity || ""}
                  onChange={(e) => updateItem(index, "requestedQuantity", parseInt(e.target.value) || 0)}
                  max={maxQuantity}
                  disabled={!item.batchNumber}
                />
                {item.batchNumber && maxQuantity > 0 && (
                  <p className="text-xs text-gray-500 mt-1">
                    Максимум: {maxQuantity} {item.unit}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}

      <Button
        type="button"
        variant="outline"
        onClick={addNewItem}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        Добавить товар
      </Button>

      {selectedItems.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-500 text-center">Добавьте товары для возврата</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
