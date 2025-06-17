
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, AlertTriangle, CheckCircle, FileText } from "lucide-react";

interface KPICardsProps {
  data: {
    toPay: number;
    overdue: number;
    totalPaid: number;
    totalDocuments: number;
  };
  onFilterByToPay: () => void;
  onFilterByOverdue: () => void;
}

export function KPICards({ data, onFilterByToPay, onFilterByOverdue }: KPICardsProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ru-KZ', {
      style: 'currency',
      currency: 'KZT',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card 
        className="cursor-pointer hover:shadow-md transition-shadow border-orange-200 bg-orange-50"
        onClick={onFilterByToPay}
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600">К оплате</p>
              <p className="text-2xl font-bold text-orange-700">{formatCurrency(data.toPay)}</p>
            </div>
            <CreditCard className="w-8 h-8 text-orange-500" />
          </div>
        </CardContent>
      </Card>

      <Card 
        className="cursor-pointer hover:shadow-md transition-shadow border-red-200 bg-red-50"
        onClick={onFilterByOverdue}
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-600">Просрочено</p>
              <p className="text-2xl font-bold text-red-700">{formatCurrency(data.overdue)}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">Оплачено</p>
              <p className="text-2xl font-bold text-green-700">{formatCurrency(data.totalPaid)}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600">Всего документов</p>
              <p className="text-2xl font-bold text-blue-700">{data.totalDocuments}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
