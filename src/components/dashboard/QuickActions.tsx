
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, HelpCircle } from "lucide-react";

interface QuickActionsProps {
  onSectionChange: (section: string) => void;
}

export function QuickActions({ onSectionChange }: QuickActionsProps) {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Панель быстрых действий</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            size="lg" 
            className="h-16 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700"
            onClick={() => onSectionChange("orders")}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="font-semibold">Создать заказ на доставку</span>
          </Button>
          
          <Button 
            size="lg" 
            className="h-16 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700"
            onClick={() => onSectionChange("deliveries")}
          >
            <Truck className="w-6 h-6" />
            <span className="font-semibold">Создать заявку на поставку</span>
          </Button>
          
          <Button 
            size="lg" 
            className="h-16 flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700"
            onClick={() => onSectionChange("support")}
          >
            <HelpCircle className="w-6 h-6" />
            <span className="font-semibold">Создать обращение в поддержку</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
