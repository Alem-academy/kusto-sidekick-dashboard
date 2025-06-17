
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Clock, FileText, MessageSquare } from "lucide-react";

interface AttentionRequiredProps {
  onSectionChange: (section: string) => void;
}

export function AttentionRequired({ onSectionChange }: AttentionRequiredProps) {
  const alerts = [
    {
      id: 1,
      type: "stock",
      icon: AlertTriangle,
      title: 'Сок "Juicy" Яблочный 1л',
      description: "Осталось 15 шт. (ниже порога)",
      urgency: "high",
      section: "warehouse"
    },
    {
      id: 2,
      type: "expiry",
      icon: Clock,
      title: 'Партия сока "Juicy" Вишня #P-5514',
      description: "Срок истекает через 28 дней",
      urgency: "medium",
      section: "warehouse"
    },
    {
      id: 3,
      type: "payment",
      icon: FileText,
      title: "Счет-фактура №95",
      description: "Оплата просрочена на 7 дней",
      urgency: "high",
      section: "documents"
    },
    {
      id: 4,
      type: "support",
      icon: MessageSquare,
      title: "Тикет #785",
      description: "Получен новый ответ от поддержки",
      urgency: "medium",
      section: "support"
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "border-red-200 bg-red-50 hover:bg-red-100";
      case "medium":
        return "border-yellow-200 bg-yellow-50 hover:bg-yellow-100";
      default:
        return "border-blue-200 bg-blue-50 hover:bg-blue-100";
    }
  };

  const getIconColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-600";
      default:
        return "text-blue-600";
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          Требует внимания
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${getUrgencyColor(alert.urgency)}`}
              onClick={() => onSectionChange(alert.section)}
            >
              <div className="flex items-start gap-3">
                <alert.icon className={`w-5 h-5 mt-0.5 ${getIconColor(alert.urgency)}`} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{alert.title}</p>
                  <p className="text-sm text-gray-600">{alert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
