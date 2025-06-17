
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Paperclip, X } from "lucide-react";
import { SupportTicket, SupportMessage } from "./SupportContent";

interface SupportTicketViewProps {
  ticket: SupportTicket;
  onBack: () => void;
  onNewMessage: (ticketId: string, message: string) => void;
  onCloseTicket: (ticketId: string) => void;
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

export function SupportTicketView({ 
  ticket, 
  onBack, 
  onNewMessage, 
  onCloseTicket 
}: SupportTicketViewProps) {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onNewMessage(ticket.id, newMessage.trim());
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSendMessage();
    }
  };

  return (
    <div className="p-6 space-y-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к списку тикетов
          </Button>
        </div>
      </div>

      {/* Ticket Info */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-3">
              <span>Тема: {ticket.subject} #{ticket.id}</span>
            </CardTitle>
            <div className="flex items-center gap-3">
              {getStatusBadge(ticket.status)}
              {ticket.status !== 'closed' && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onCloseTicket(ticket.id)}
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  <X className="w-4 h-4 mr-1" />
                  Закрыть тикет
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Chat Messages */}
      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <CardTitle>История переписки</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="flex-1 space-y-4 mb-6 overflow-y-auto max-h-96">
            {ticket.messages.map((message) => (
              <div key={message.id} className={`flex ${message.author === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${message.author === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`rounded-lg p-4 ${
                    message.author === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <div className="text-sm">
                      {message.content}
                    </div>
                  </div>
                  <div className={`text-xs text-gray-500 mt-1 ${
                    message.author === 'user' ? 'text-right' : 'text-left'
                  }`}>
                    <span className="font-medium">
                      {message.author === 'user' ? 'Вы' : 'Служба поддержки'}
                    </span>
                    {' - '}
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reply Form */}
          {ticket.status !== 'closed' && (
            <div className="border-t pt-4 space-y-4">
              <div>
                <Textarea
                  placeholder="Введите ваше сообщение..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="min-h-[100px] resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Нажмите Ctrl+Enter для быстрой отправки
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <Button variant="outline" className="text-gray-600">
                  <Paperclip className="w-4 h-4 mr-2" />
                  Прикрепить файл
                </Button>
                
                <Button 
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Отправить ответ
                </Button>
              </div>
            </div>
          )}

          {ticket.status === 'closed' && (
            <div className="border-t pt-4">
              <div className="text-center text-gray-500 py-4">
                <X className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="font-medium">Тикет закрыт</p>
                <p className="text-sm">Переписка по данному обращению завершена</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
