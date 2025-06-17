
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, FileText, Clock, Download } from "lucide-react";

export function AccountantDashboard() {
  const kpiMetrics = [
    {
      title: "Сумма к оплате",
      value: "₸ 2.4М",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Просроченных счетов",
      value: "12",
      icon: Clock,
      color: "text-red-600"
    },
    {
      title: "Новых документов за неделю",
      value: "47",
      icon: FileText,
      color: "text-blue-600"
    }
  ];

  const invoices = [
    {
      number: "СФ-2024-001",
      client: "ТОО \"Магнум\"",
      amount: "₸ 450,000",
      status: "Оплачен",
      date: "15.06.2025"
    },
    {
      number: "СФ-2024-002",
      client: "ИП \"Продукты\"",
      amount: "₸ 125,000",
      status: "Ожидает оплаты",
      date: "16.06.2025"
    },
    {
      number: "СФ-2024-003",
      client: "ТОО \"Ритейл\"",
      amount: "₸ 890,000",
      status: "Просрочен",
      date: "10.06.2025"
    }
  ];

  const attentionItems = [
    {
      title: "Счет СФ-2024-005",
      description: "Истекает срок оплаты через 2 дня - ₸ 320,000",
      urgency: "high"
    },
    {
      title: "Счет СФ-2024-007",
      description: "Истекает срок оплаты через 5 дней - ₸ 180,000",
      urgency: "medium"
    },
    {
      title: "Акт сверки ТОО \"Магнум\"",
      description: "Требует подготовки и отправки",
      urgency: "low"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Оплачен":
        return "text-green-600 bg-green-50";
      case "Ожидает оплаты":
        return "text-yellow-600 bg-yellow-50";
      case "Просрочен":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="space-y-6">
      {/* KPI Карточки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {kpiMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{metric.title}</p>
                  <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                </div>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Финансовые операции */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Финансовые операции
            </CardTitle>
            <Button size="sm" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Выгрузить акт сверки
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Номер счета</TableHead>
                <TableHead>Клиент</TableHead>
                <TableHead>Сумма</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Дата</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{invoice.number}</TableCell>
                  <TableCell>{invoice.client}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell>{invoice.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Требует внимания */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-600" />
            Требует внимания
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {attentionItems.map((item, index) => (
              <div key={index} className={`p-3 rounded border-l-4 ${
                item.urgency === "high" 
                  ? "bg-red-50 border-red-400" 
                  : item.urgency === "medium"
                  ? "bg-yellow-50 border-yellow-400"
                  : "bg-blue-50 border-blue-400"
              }`}>
                <p className={`font-medium text-sm ${
                  item.urgency === "high" 
                    ? "text-red-800" 
                    : item.urgency === "medium"
                    ? "text-yellow-800"
                    : "text-blue-800"
                }`}>
                  {item.title}
                </p>
                <p className={`text-xs ${
                  item.urgency === "high" 
                    ? "text-red-600" 
                    : item.urgency === "medium"
                    ? "text-yellow-600"
                    : "text-blue-600"
                }`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
