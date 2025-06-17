
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, HelpCircle } from "lucide-react";
import { SupportTicket } from "./SupportContent";
import { CreateTicketModal } from "./CreateTicketModal";

interface SupportTicketListProps {
  tickets: SupportTicket[];
  onTicketSelect: (ticket: SupportTicket) => void;
  onCreateTicket: (ticketData: {
    category: string;
    subject: string;
    message: string;
    attachments?: string[];
  }) => void;
}

const getStatusBadge = (status: SupportTicket['status']) => {
  switch (status) {
    case 'open':
      return <Badge variant="destructive">Открыт</Badge>;
    case 'in-progress':
      return <Badge variant="default">В работе</Badge>;
    case 'answered':
      return <Badge variant="secondary">Отвечен</Badge>;
    case 'closed':
      return <Badge variant="outline">Закрыт</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getCategoryBadge = (category: string) => {
  const categoryColors: Record<string, string> = {
    'technical': 'bg-blue-100 text-blue-800',
    'order': 'bg-green-100 text-green-800',
    'delivery': 'bg-yellow-100 text-yellow-800',
    'billing': 'bg-purple-100 text-purple-800',
    'other': 'bg-gray-100 text-gray-800'
  };

  const categoryNames: Record<string, string> = {
    'technical': 'Техническая поддержка',
    'order': 'Вопросы по заказам',
    'delivery': 'Доставка',
    'billing': 'Биллинг',
    'other': 'Прочее'
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[category] || categoryColors.other}`}>
      {categoryNames[category] || category}
    </span>
  );
};

export function SupportTicketList({ tickets, onTicketSelect, onCreateTicket }: SupportTicketListProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreateTicket = (ticketData: {
    category: string;
    subject: string;
    message: string;
    attachments?: string[];
  }) => {
    onCreateTicket(ticketData);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-purple-600" />
            Служба поддержки
          </h1>
          <p className="text-gray-600 mt-1">Управление обращениями и тикетами</p>
        </div>
        <Button 
          className="bg-purple-600 hover:bg-purple-700 text-white"
          onClick={() => setIsCreateModalOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Создать новый тикет
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-purple-600" />
            Мои обращения ({tickets.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {tickets.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Категория</TableHead>
                    <TableHead>Тема</TableHead>
                    <TableHead>Дата создания</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow 
                      key={ticket.id}
                      className="cursor-pointer hover:bg-gray-50"
                      onClick={() => onTicketSelect(ticket)}
                    >
                      <TableCell className="font-mono text-sm">#{ticket.id}</TableCell>
                      <TableCell>{getCategoryBadge(ticket.category || 'other')}</TableCell>
                      <TableCell className="font-medium">{ticket.subject}</TableCell>
                      <TableCell>{ticket.date}</TableCell>
                      <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <HelpCircle className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Нет обращений</h3>
              <p className="text-gray-500 mb-4">У вас пока нет созданных тикетов поддержки</p>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => setIsCreateModalOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Создать первый тикет
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <CreateTicketModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onCreateTicket={handleCreateTicket}
      />
    </div>
  );
}
