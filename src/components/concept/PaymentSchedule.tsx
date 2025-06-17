
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign } from "lucide-react";

export function PaymentSchedule() {
  const payments = [
    { month: "Январь 2024", amount: 50000, type: "Первоначальный взнос", status: "paid" },
    { month: "Февраль 2024", amount: 75000, type: "Оборудование", status: "paid" },
    { month: "Март 2024", amount: 100000, type: "Расширение склада", status: "pending" },
    { month: "Апрель 2024", amount: 125000, type: "Маркетинг", status: "planned" },
    { month: "Май 2024", amount: 150000, type: "Новая линейка продуктов", status: "planned" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-100 text-green-800">Оплачено</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">В процессе</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-600">Планируется</Badge>;
    }
  };

  const totalAmount = payments.reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          График инвестиций
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <DollarSign className="w-4 h-4" />
          Общая сумма: <span className="font-semibold">{totalAmount.toLocaleString()} ₽</span>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Период</TableHead>
              <TableHead>Сумма</TableHead>
              <TableHead>Направление</TableHead>
              <TableHead>Статус</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{payment.month}</TableCell>
                <TableCell>{payment.amount.toLocaleString()} ₽</TableCell>
                <TableCell>{payment.type}</TableCell>
                <TableCell>{getStatusBadge(payment.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
