
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";

interface WarehouseSelectorProps {
  control: Control<any>;
}

const warehouses = [
  {
    id: "warehouse-1",
    name: "Основной склад",
    address: "г. Москва, ул. Складская, д. 15"
  },
  {
    id: "warehouse-2", 
    name: "Центральный склад",
    address: "г. Москва, ул. Промышленная, д. 42"
  },
  {
    id: "warehouse-3",
    name: "Восточный склад",
    address: "г. Москва, ул. Логистическая, д. 8"
  },
  {
    id: "warehouse-4",
    name: "Северный распределительный центр",
    address: "г. Москва, ш. Ленинградское, д. 125"
  }
];

export function WarehouseSelector({ control }: WarehouseSelectorProps) {
  return (
    <FormField
      control={control}
      name="warehouseId"
      rules={{ required: "Выберите адрес склада" }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Адрес склада</FormLabel>
          <FormControl>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите склад для поставки" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                {warehouses.map((warehouse) => (
                  <SelectItem key={warehouse.id} value={warehouse.id}>
                    <div className="flex flex-col">
                      <span className="font-medium">{warehouse.name}</span>
                      <span className="text-sm text-gray-500">{warehouse.address}</span>
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
