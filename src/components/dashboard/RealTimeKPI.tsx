
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Truck, Package, DollarSign } from "lucide-react";

export function RealTimeKPI() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600">Активные заказы</p>
              <p className="text-2xl font-bold text-blue-700">23</p>
              <p className="text-xs text-blue-600 mt-1">в процессе доставки</p>
            </div>
            <ShoppingCart className="w-8 h-8 text-blue-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">Ожидаемые поставки</p>
              <p className="text-2xl font-bold text-green-700">7</p>
              <p className="text-xs text-green-600 mt-1">заявок к принятию</p>
            </div>
            <Truck className="w-8 h-8 text-green-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 bg-orange-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600">Товаров на складе</p>
              <p className="text-2xl font-bold text-orange-700">1,247</p>
              <p className="text-xs text-orange-600 mt-1">уникальных SKU</p>
            </div>
            <Package className="w-8 h-8 text-orange-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 bg-purple-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600">Стоимость склада</p>
              <p className="text-2xl font-bold text-purple-700">₸ 28.3М</p>
              <p className="text-xs text-purple-600 mt-1">общая стоимость</p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-500" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
