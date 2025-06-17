
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

interface AddDeliveryPointModalProps {
  onAddDeliveryPoint: (point: {
    name: string;
    address: string;
    contact: string;
    phone: string;
  }) => void;
}

export function AddDeliveryPointModal({ onAddDeliveryPoint }: AddDeliveryPointModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddDeliveryPoint(formData);
    setFormData({
      name: "",
      address: "",
      contact: "",
      phone: ""
    });
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Добавить точку доставки
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Добавить точку доставки</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="point-name">Название точки</Label>
            <Input
              id="point-name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Ресторан 'Название'"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Адрес</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="ул. Абая, 150, Алматы"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="point-contact">Контактное лицо</Label>
            <Input
              id="point-contact"
              value={formData.contact}
              onChange={(e) => handleInputChange("contact", e.target.value)}
              placeholder="Айгуль"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="point-phone">Телефон</Label>
            <Input
              id="point-phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+7 (701) 111-22-33"
              required
            />
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Отмена
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Добавить точку
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
