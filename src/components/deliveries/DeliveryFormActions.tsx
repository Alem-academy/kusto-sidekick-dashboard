
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { DeliveryFormData } from "./DeliveryFormProvider";
import { DeliveryItem } from "./types";

interface DeliveryFormActionsProps {
  form: UseFormReturn<DeliveryFormData>;
  items: DeliveryItem[];
  documents: File[];
  onReset: () => void;
}

export function DeliveryFormActions({ 
  form, 
  items, 
  documents, 
  onReset 
}: DeliveryFormActionsProps) {
  return (
    <div className="flex justify-end gap-4">
      <Button type="button" variant="outline" onClick={onReset}>
        Отменить
      </Button>
      <Button type="submit">
        Создать заявку
      </Button>
    </div>
  );
}
