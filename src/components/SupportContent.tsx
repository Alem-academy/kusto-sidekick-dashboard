
import { useState } from "react";
import { SupportTicketList } from "./SupportTicketList";
import { SupportTicketView } from "./SupportTicketView";

export interface SupportTicket {
  id: string;
  subject: string;
  date: string;
  status: "open" | "in-progress" | "answered" | "closed";
  messages: SupportMessage[];
}

export interface SupportMessage {
  id: string;
  author: "user" | "support";
  content: string;
  timestamp: string;
  attachments?: string[];
}

const mockTickets: SupportTicket[] = [
  {
    id: "785",
    subject: "Неверное количество товара в отчете",
    date: "17.06.2025",
    status: "answered",
    messages: [
      {
        id: "1",
        author: "user",
        content: "Здравствуйте. В отчете по остаткам неверно указано количество по соку J-001.",
        timestamp: "17.06.2025, 10:40"
      },
      {
        id: "2",
        author: "support",
        content: "Добрый день! Мы проверили данные по складу. Расхождение исправлено. Пожалуйста, сформируйте отчет еще раз.",
        timestamp: "17.06.2025, 13:15"
      }
    ]
  },
  {
    id: "781",
    subject: "Вопрос по срокам доставки заказа №742",
    date: "15.06.2025",
    status: "closed",
    messages: [
      {
        id: "1",
        author: "user",
        content: "Когда ожидать доставку заказа №742?",
        timestamp: "15.06.2025, 09:30"
      },
      {
        id: "2",
        author: "support",
        content: "Заказ №742 запланирован к доставке 16.06.2025 до 14:00. Водитель свяжется с вами за час до приезда.",
        timestamp: "15.06.2025, 10:15"
      },
      {
        id: "3",
        author: "user",
        content: "Спасибо, получили заказ в срок!",
        timestamp: "16.06.2025, 13:45"
      }
    ]
  },
  {
    id: "779",
    subject: "Проблема с выгрузкой отчета",
    date: "14.06.2025",
    status: "closed",
    messages: [
      {
        id: "1",
        author: "user",
        content: "Не могу скачать отчет по продажам за май. Ошибка при генерации.",
        timestamp: "14.06.2025, 11:20"
      },
      {
        id: "2",
        author: "support",
        content: "Проблема устранена. Попробуйте сгенерировать отчет сейчас.",
        timestamp: "14.06.2025, 14:30"
      }
    ]
  }
];

export function SupportContent() {
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [tickets, setTickets] = useState<SupportTicket[]>(mockTickets);

  const handleTicketSelect = (ticket: SupportTicket) => {
    setSelectedTicket(ticket);
  };

  const handleBackToList = () => {
    setSelectedTicket(null);
  };

  const handleCreateTicket = (ticketData: {
    category: string;
    subject: string;
    message: string;
    attachments?: string[];
  }) => {
    const newTicket: SupportTicket = {
      id: (Math.floor(Math.random() * 1000) + 800).toString(),
      subject: ticketData.subject,
      date: new Date().toLocaleDateString('ru-RU'),
      status: "open",
      messages: [
        {
          id: "1",
          author: "user",
          content: ticketData.message || "Обращение создано",
          timestamp: new Date().toLocaleString('ru-RU'),
          attachments: ticketData.attachments
        }
      ]
    };

    setTickets(prevTickets => [newTicket, ...prevTickets]);
    console.log("Создан новый тикет:", newTicket);
  };

  const handleNewMessage = (ticketId: string, message: string) => {
    setTickets(prevTickets => 
      prevTickets.map(ticket => 
        ticket.id === ticketId 
          ? {
              ...ticket,
              status: "in-progress" as const,
              messages: [
                ...ticket.messages,
                {
                  id: Date.now().toString(),
                  author: "user" as const,
                  content: message,
                  timestamp: new Date().toLocaleString('ru-RU')
                }
              ]
            }
          : ticket
      )
    );
    
    // Update selected ticket if it's currently viewed
    if (selectedTicket && selectedTicket.id === ticketId) {
      const updatedTicket = tickets.find(t => t.id === ticketId);
      if (updatedTicket) {
        setSelectedTicket({
          ...updatedTicket,
          status: "in-progress" as const,
          messages: [
            ...updatedTicket.messages,
            {
              id: Date.now().toString(),
              author: "user" as const,
              content: message,
              timestamp: new Date().toLocaleString('ru-RU')
            }
          ]
        });
      }
    }
  };

  const handleCloseTicket = (ticketId: string) => {
    setTickets(prevTickets => 
      prevTickets.map(ticket => 
        ticket.id === ticketId 
          ? { ...ticket, status: "closed" as const }
          : ticket
      )
    );
    
    if (selectedTicket && selectedTicket.id === ticketId) {
      setSelectedTicket({ ...selectedTicket, status: "closed" });
    }
  };

  if (selectedTicket) {
    return (
      <SupportTicketView
        ticket={selectedTicket}
        onBack={handleBackToList}
        onNewMessage={handleNewMessage}
        onCloseTicket={handleCloseTicket}
      />
    );
  }

  return (
    <SupportTicketList 
      tickets={tickets}
      onTicketSelect={handleTicketSelect}
      onCreateTicket={handleCreateTicket}
    />
  );
}
