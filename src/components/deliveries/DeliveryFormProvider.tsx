
import { ReactNode } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

export interface DeliveryFormData {
  warehouseId: string;
  plannedDate: string;
  plannedTime: string;
  transportNumber: string;
  driverName: string;
  driverPhone: string;
  notes?: string;
}

interface DeliveryFormProviderProps {
  children: (form: UseFormReturn<DeliveryFormData>) => ReactNode;
}

export function DeliveryFormProvider({ children }: DeliveryFormProviderProps) {
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

  return <>{children(form)}</>;
}
