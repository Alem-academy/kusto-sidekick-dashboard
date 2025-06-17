
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TopAnalyticsPanelProps {
  filters: {
    period: string;
    documentType: string;
    paymentStatus: string;
  };
  onFilterChange: (filterType: string, value: string) => void;
}

export function TopAnalyticsPanel({ filters, onFilterChange }: TopAnalyticsPanelProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between">
      {/* Левая часть - карточки аналитики */}
      <div className="flex gap-4">
        <Card className="border-orange-200 bg-orange-50 cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm font-medium text-orange-600 mb-1">К Оплате</p>
              <p className="text-2xl font-bold text-orange-700">285 000 тг</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50 cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm font-medium text-red-600 mb-1">Просрочено</p>
              <p className="text-2xl font-bold text-red-700">75 000 тг</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Правая часть - фильтры */}
      <div className="flex gap-4">
        <div className="min-w-[150px]">
          <Select value={filters.period} onValueChange={(value) => onFilterChange("period", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Период" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Весь период</SelectItem>
              <SelectItem value="today">Сегодня</SelectItem>
              <SelectItem value="week">Неделя</SelectItem>
              <SelectItem value="month">Месяц</SelectItem>
              <SelectItem value="quarter">Квартал</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="min-w-[150px]">
          <Select value={filters.documentType} onValueChange={(value) => onFilterChange("documentType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Тип документа" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все типы</SelectItem>
              <SelectItem value="invoice">Счет-фактура</SelectItem>
              <SelectItem value="act">Акт выполненных работ</SelectItem>
              <SelectItem value="delivery">Накладная</SelectItem>
              <SelectItem value="contract">Договор</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="min-w-[150px]">
          <Select value={filters.paymentStatus} onValueChange={(value) => onFilterChange("paymentStatus", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Статус оплаты" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все статусы</SelectItem>
              <SelectItem value="paid">Оплачен</SelectItem>
              <SelectItem value="pending">Ожидает оплаты</SelectItem>
              <SelectItem value="overdue">Просрочен</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
