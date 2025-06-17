
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DocumentFilters as FilterType } from "./types";

interface DocumentFiltersProps {
  filters: FilterType;
  onFiltersChange: (filters: FilterType) => void;
  onResetFilters: () => void;
}

export function DocumentFilters({ filters, onFiltersChange, onResetFilters }: DocumentFiltersProps) {
  const updateFilter = (key: keyof FilterType, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div>
            <Label htmlFor="dateFrom">Дата с</Label>
            <Input
              id="dateFrom"
              type="date"
              value={filters.dateFrom}
              onChange={(e) => updateFilter("dateFrom", e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="dateTo">Дата по</Label>
            <Input
              id="dateTo"
              type="date"
              value={filters.dateTo}
              onChange={(e) => updateFilter("dateTo", e.target.value)}
            />
          </div>

          <div>
            <Label>Тип документа</Label>
            <Select value={filters.documentType} onValueChange={(value) => updateFilter("documentType", value)}>
              <SelectTrigger>
                <SelectValue />
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

          <div>
            <Label>Статус оплаты</Label>
            <Select value={filters.paymentStatus} onValueChange={(value) => updateFilter("paymentStatus", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все статусы</SelectItem>
                <SelectItem value="paid">Оплачен</SelectItem>
                <SelectItem value="pending">Ожидает оплаты</SelectItem>
                <SelectItem value="overdue">Просрочен</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={onResetFilters}
              className="flex-1"
            >
              Сбросить
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
