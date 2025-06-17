
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";

interface DeliveryBasicInfoProps {
  control: Control<any>;
}

export function DeliveryBasicInfo({ control }: DeliveryBasicInfoProps) {
  return (
    <div className="space-y-6">
      {/* Основная информация */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="plannedDate"
          rules={{ required: "Укажите дату поставки" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Планируемая дата поставки</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="plannedTime"
          rules={{ required: "Укажите время поставки" }}
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

        <FormField
          control={control}
          name="transportNumber"
          rules={{ required: "Укажите номер транспорта" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер транспорта</FormLabel>
              <FormControl>
                <Input placeholder="А123БВ777" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="driverPhone"
          rules={{ required: "Укажите телефон водителя" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Телефон водителя</FormLabel>
              <FormControl>
                <Input placeholder="+7 (900) 123-45-67" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
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
        control={control}
        name="notes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Примечания (необязательно)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Дополнительная информация о поставке..."
                className="min-h-[80px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
