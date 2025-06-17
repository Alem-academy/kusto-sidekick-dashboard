
import { Card, CardContent } from "@/components/ui/card";

interface DeliveryValueSummaryProps {
  totalDeclaredValue: number;
}

export function DeliveryValueSummary({ totalDeclaredValue }: DeliveryValueSummaryProps) {
  if (totalDeclaredValue <= 0) return null;

  return (
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
  );
}
