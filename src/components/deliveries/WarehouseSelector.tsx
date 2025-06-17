
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";

// Мокданные складов
const mockWarehouses = [
  { id: "wh1", name: "Главный склад", address: "г. Алматы, ул. Абая 100" },
  { id: "wh2", name: "Склад №2", address: "г. Астана, пр. Назарбаева 50" },
  { id: "wh3", name: "Региональный склад", address: "г. Шымкент, ул. Байтурсынова 75" }
];

interface WarehouseSelectorProps {
  control: Control<any>;
  label?: string;
}

export function WarehouseSelector({ control, label = "Адрес склада" }: WarehouseSelectorProps) {
  return (
    <FormField
      control={control}
      name="warehouseId"
      rules={{ required: "Выберите склад" }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите склад" />
              </SelectTrigger>
              <SelectContent>
                {mockWarehouses.map((warehouse) => (
                  <SelectItem key={warehouse.id} value={warehouse.id}>
                    <div>
                      <div className="font-medium">{warehouse.name}</div>
                      <div className="text-sm text-gray-500">{warehouse.address}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
