
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { DeliveryItem } from "./types";
import { WarehouseSelector } from "./WarehouseSelector";
import { DeliveryBasicInfo } from "./DeliveryBasicInfo";
import { DeliveryItemsTable } from "./DeliveryItemsTable";
import { DeliveryDocuments } from "./DeliveryDocuments";

interface CreateDeliveryFormProps {
  onSuccess: () => void;
}

interface DeliveryFormData {
  warehouseId: string;
  plannedDate: string;
  plannedTime: string;
  transportNumber: string;
  driverName: string;
  driverPhone: string;
  notes?: string;
}

export function CreateDeliveryForm({ onSuccess }: CreateDeliveryFormProps) {
  const { toast } = useToast();
  const [items, setItems] = useState<DeliveryItem[]>([]);
  const [documents, setDocuments] = useState<File[]>([]);
  
  const form = useForm<DeliveryFormData>({
    defaultValues: {
      warehouseId: "",
      plannedDate: "",
      plannedTime: "",
      transportNumber: "",
      driverName: "",
      driverPhone: "",
      notes: ""
    }
  });

  const addItem = () => {
    const newItem: DeliveryItem = {
      id: `item-${Date.now()}`,
      sku: "",
      name: "",
      plannedQuantity: 0,
      unit: "шт",
      declaredUnitPrice: undefined,
      declaredTotalPrice: undefined
    };
    setItems([...items, newItem]);
  };

  const updateItem = (id: string, field: keyof DeliveryItem, value: any) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setDocuments([...documents, ...Array.from(files)]);
    }
  };

  const removeDocument = (index: number) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  const calculateTotalDeclaredValue = () => {
    return items.reduce((total, item) => {
      const itemValue = item.declaredTotalPrice || 
        (item.declaredUnitPrice && item.plannedQuantity ? 
          item.declaredUnitPrice * item.plannedQuantity : 0);
      return total + itemValue;
    }, 0);
  };

  const onSubmit = (data: DeliveryFormData) => {
    if (!data.warehouseId) {
      toast({
        title: "Ошибка",
        description: "Выберите адрес склада",
        variant: "destructive"
      });
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Ошибка",
        description: "Добавьте хотя бы одну позицию товара",
        variant: "destructive"
      });
      return;
    }

    const hasEmptyItems = items.some(item => !item.sku || !item.name || item.plannedQuantity <= 0);
    if (hasEmptyItems) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля для товаров",
        variant: "destructive"
      });
      return;
    }

    const totalDeclaredValue = calculateTotalDeclaredValue();
    
    // Здесь будет отправка данных на сервер
    console.log("Создание заявки:", { 
      ...data, 
      items, 
      documents,
      totalDeclaredValue
    });
    
    toast({
      title: "Успешно",
      description: `Заявка на поставку создана${totalDeclaredValue > 0 ? `. Общая объявленная стоимость: ${totalDeclaredValue.toLocaleString()} тенге` : ""}`
    });
    
    form.reset();
    setItems([]);
    setDocuments([]);
    onSuccess();
  };

  const totalDeclaredValue = calculateTotalDeclaredValue();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Создать заявку на поставку</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Выбор склада */}
              <WarehouseSelector control={form.control} />

              {/* Основная информация */}
              <DeliveryBasicInfo control={form.control} />

              {/* Товары */}
              <DeliveryItemsTable
                items={items}
                onAddItem={addItem}
                onUpdateItem={updateItem}
                onRemoveItem={removeItem}
              />

              {/* Сводка по объявленной стоимости */}
              {totalDeclaredValue > 0 && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-800">
                        Общая объявленная стоимость:
                      </span>
                      <span className="text-lg font-bold text-blue-900">
                        {totalDeclaredValue.toLocaleString()} тенге
                      </span>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">
                      Эта сумма будет использована для расчета страхового возмещения
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Документы */}
              <DeliveryDocuments
                documents={documents}
                onFileUpload={handleFileUpload}
                onRemoveDocument={removeDocument}
              />

              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => {
                  form.reset();
                  setItems([]);
                  setDocuments([]);
                }}>
                  Отменить
                </Button>
                <Button type="submit">
                  Создать заявку
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
