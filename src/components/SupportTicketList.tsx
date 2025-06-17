
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, HelpCircle } from "lucide-react";
import { SupportTicket } from "./SupportContent";
import { CreateTicketModal } from "./CreateTicketModal";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  const handleCreateTicket = (ticketData: {
    category: string;
    subject: string;
    message: string;
    attachments?: string[];
  }) => {
    onCreateTicket(ticketData);
  };

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 pb-20 md:pb-6">
      <div className={`flex items-center justify-between ${isMobile ? 'flex-col gap-4' : ''}`}>
        <div className={isMobile ? 'text-center' : ''}>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3 justify-center md:justify-start">
            <HelpCircle className="w-6 md:w-8 h-6 md:h-8 text-purple-600" />
            Служба поддержки
          </h1>
          <p className="text-gray-600 mt-1 text-sm md:text-base">
            Управление обращениями и тикетами
          </p>
        </div>
        <Button 
          className={`bg-purple-600 hover:bg-purple-700 text-white ${isMobile ? 'w-full' : ''}`}
          onClick={() => setIsCreateModalOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Создать новый тикет
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
            <HelpCircle className="w-5 h-5 text-purple-600" />
            Мои обращения ({tickets.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {tickets.length > 0 ? (
            isMobile ? (
              /* Mobile Card Layout */
              <div className="space-y-3">
                {tickets.map((ticket) => (
                  <Card 
                    key={ticket.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => onTicketSelect(ticket)}
                  >
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <p className="font-mono text-sm text-gray-600">#{ticket.id}</p>
                            <h3 className="font-medium text-sm">{ticket.subject}</h3>
                          </div>
                          {getStatusBadge(ticket.status)}
                        </div>
                        <div className="flex items-center justify-between">
                          {getCategoryBadge(ticket.category || 'other')}
                          <span className="text-xs text-gray-500">{ticket.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              /* Desktop Table Layout */
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
            )
          ) : (
            <div className="text-center py-12 text-gray-500">
              <HelpCircle className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Нет обращений</h3>
              <p className="text-gray-500 mb-4 text-sm md:text-base">
                У вас пока нет созданных тикетов поддержки
              </p>
              <Button 
                className={`bg-purple-600 hover:bg-purple-700 text-white ${isMobile ? 'w-full max-w-xs' : ''}`}
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
