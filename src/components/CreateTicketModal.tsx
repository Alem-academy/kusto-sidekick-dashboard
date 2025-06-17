
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Paperclip, X } from "lucide-react";

interface CreateTicketModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateTicket: (ticketData: {
    category: string;
    subject: string;
    message: string;
    attachments?: string[];
  }) => void;
}

const categories = [
  { value: "general", label: "Общие вопросы" },
  { value: "finance", label: "Финансовые вопросы (Бухгалтерия)" },
  { value: "warehouse", label: "Вопросы по складу" },
  { value: "technical", label: "Техническая поддержка ЛК" },
];

export function CreateTicketModal({ open, onOpenChange, onCreateTicket }: CreateTicketModalProps) {
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!category || !subject.trim()) {
      return;
    }

    onCreateTicket({
      category,
      subject: subject.trim(),
      message: message.trim(),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    // Reset form
    setCategory("");
    setSubject("");
    setMessage("");
    setAttachments([]);
    onOpenChange(false);
  };

  const handleCancel = () => {
    // Reset form
    setCategory("");
    setSubject("");
    setMessage("");
    setAttachments([]);
    onOpenChange(false);
  };

  const handleFileAttach = () => {
    // Simulate file attachment (in real app, this would open file picker)
    const fileName = `Прикрепленный_файл_${Date.now()}.pdf`;
    setAttachments(prev => [...prev, fileName]);
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Новое обращение в поддержку
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-medium text-gray-700">
              Категория запроса *
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
              Тема обращения *
            </Label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Опишите суть вашего вопроса"
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Сообщение
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Детально опишите ваш вопрос или проблему"
              className="min-h-[100px] w-full"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Прикрепить файл
            </Label>
            <div className="space-y-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleFileAttach}
                className="w-full flex items-center gap-2"
              >
                <Paperclip className="w-4 h-4" />
                Прикрепить файл
              </Button>
              
              {attachments.length > 0 && (
                <div className="space-y-1">
                  {attachments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded border">
                      <span className="text-sm text-gray-700 truncate">{file}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAttachment(index)}
                        className="h-6 w-6 p-0"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
              disabled={!category || !subject.trim()}
            >
              Создать тикет
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="flex-1"
            >
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
