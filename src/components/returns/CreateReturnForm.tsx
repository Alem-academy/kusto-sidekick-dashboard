
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { WarehouseSelector } from "../deliveries/WarehouseSelector";
import { ReturnItemsSelector } from "./ReturnItemsSelector";
import { ReturnRequest, ReturnItem } from "./types";

interface CreateReturnFormProps {
  onSuccess: () => void;
}

interface ReturnFormData {
  warehouseId: string;
  plannedDate: string;
  plannedTime: string;
  transportNumber: string;
  driverName: string;
  driverPhone: string;
}

export function CreateReturnForm({ onSuccess }: CreateReturnFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedItems, setSelectedItems] = useState<ReturnItem[]>([]);

  const form = useForm<ReturnFormData>({
    defaultValues: {
      warehouseId: "",
      plannedDate: "",
      plannedTime: "",
      transportNumber: "",
      driverName: "",
      driverPhone: ""
    }
  });

  const onSubmit = async (data: ReturnFormData) => {
    if (selectedItems.length === 0) {
      console.warn("No items selected for return");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const returnRequest = {
        ...data,
        items: selectedItems
      };
      
      console.log("Creating return request:", returnRequest);
      
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Return request created successfully");
      onSuccess();
    } catch (error) {
      console.error("Error creating return request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedWarehouseId = form.watch("warehouseId");

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Новая заявка на возврат товара</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Информация о заборе</h3>
              <WarehouseSelector 
                control={form.control} 
                label="Выберите склад для забора"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="plannedDate"
                rules={{ required: "Укажите дату вывоза" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Планируемая дата вывоза</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="plannedTime"
                rules={{ required: "Укажите время вывоза" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Планируемое время</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Данные о транспорте</h3>
              
              <FormField
                control={form.control}
                name="transportNumber"
                rules={{ required: "Укажите гос. номер машины" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Гос. номер машины</FormLabel>
                    <FormControl>
                      <Input placeholder="A 123 BC 01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="driverName"
                rules={{ required: "Укажите ФИО водителя" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ФИО водителя</FormLabel>
                    <FormControl>
                      <Input placeholder="Иванов Иван Иванович" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="driverPhone"
                rules={{ required: "Укажите телефон водителя" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон водителя</FormLabel>
                    <FormControl>
                      <Input placeholder="+7 (700) 123-45-67" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Товары для возврата</h3>
              <ReturnItemsSelector
                warehouseId={selectedWarehouseId}
                selectedItems={selectedItems}
                onItemsChange={setSelectedItems}
              />
            </div>

            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting || selectedItems.length === 0}
              >
                {isSubmitting ? "Создание заявки..." : "Создать заявку на возврат"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
