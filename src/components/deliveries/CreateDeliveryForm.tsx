
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { DeliveryItem } from "./types";
import { WarehouseSelector } from "./WarehouseSelector";
import { DeliveryBasicInfo } from "./DeliveryBasicInfo";
import { DeliveryItemsTable } from "./DeliveryItemsTable";
import { DeliveryDocuments } from "./DeliveryDocuments";
import { DeliveryFormProvider, DeliveryFormData } from "./DeliveryFormProvider";
import { DeliveryFormActions } from "./DeliveryFormActions";
import { DeliveryValueSummary } from "./DeliveryValueSummary";

interface CreateDeliveryFormProps {
  onSuccess: () => void;
}

export function CreateDeliveryForm({ onSuccess }: CreateDeliveryFormProps) {
  const { toast } = useToast();
  const [items, setItems] = useState<DeliveryItem[]>([]);
  const [documents, setDocuments] = useState<File[]>([]);

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
      const itemValue = item.declaredUnitPrice && item.plannedQuantity ? 
        item.declaredUnitPrice * item.plannedQuantity : 0;
      return total + itemValue;
    }, 0);
  };

  const resetForm = (form: any) => {
    form.reset();
    setItems([]);
    setDocuments([]);
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
          <DeliveryFormProvider>
            {(form) => (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <WarehouseSelector control={form.control} />
                  <DeliveryBasicInfo control={form.control} />
                  
                  <DeliveryItemsTable
                    items={items}
                    onAddItem={addItem}
                    onUpdateItem={updateItem}
                    onRemoveItem={removeItem}
                  />

                  <DeliveryValueSummary totalDeclaredValue={totalDeclaredValue} />

                  <DeliveryDocuments
                    documents={documents}
                    onFileUpload={handleFileUpload}
                    onRemoveDocument={removeDocument}
                  />

                  <DeliveryFormActions
                    form={form}
                    items={items}
                    documents={documents}
                    onReset={() => resetForm(form)}
                  />
                </form>
              </Form>
            )}
          </DeliveryFormProvider>
        </CardContent>
      </Card>
    </div>
  );
}
