
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Search, Plus, Minus, Trash2, CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  stock: number;
  category?: string;
}

interface OrderItem {
  product: Product;
  quantity: number;
}

const availableProducts: Product[] = [
  { id: '1', name: 'Сок "Juicy" Апельсиновый 1л', stock: 900 },
  { id: '2', name: 'Сок "Fresh" Яблочный 0.5л', stock: 1200 },
  { id: '3', name: 'Сок "Tropical" Манго 1л', stock: 450 },
  { id: '4', name: 'Сок "Nature" Томатный 1л', stock: 320 },
];

const clients = [
  { id: '1', name: 'ТОО "Ресторанный Двор"' },
  { id: '2', name: 'ООО "Вкусмарт"' },
  { id: '3', name: 'ИП Сокова А.А.' },
];

const deliveryPoints = [
  { id: '1', name: 'Ресторан на Абая', clientId: '1' },
  { id: '2', name: 'Ресторан на Сатпаева', clientId: '1' },
  { id: '3', name: 'Кафе в ТРЦ Мега', clientId: '1' },
  { id: '4', name: 'Магазин на Назарбаева', clientId: '2' },
];

export function CreateOrderPage() {
  const [selectedClient, setSelectedClient] = useState<string>('');
  const [selectedDeliveryPoint, setSelectedDeliveryPoint] = useState<string>('');
  const [deliveryDate, setDeliveryDate] = useState<Date>();
  const [comment, setComment] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    {
      product: { id: '0', name: 'Сок "Juicy" Яблочный 1л', stock: 500 },
      quantity: 2
    }
  ]);

  const filteredProducts = availableProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const availableDeliveryPoints = deliveryPoints.filter(point =>
    point.clientId === selectedClient
  );

  const addProductToOrder = (product: Product) => {
    const existingItem = orderItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      setOrderItems(orderItems.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setOrderItems([...orderItems, { product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromOrder(productId);
      return;
    }
    
    setOrderItems(orderItems.map(item =>
      item.product.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const removeFromOrder = (productId: string) => {
    setOrderItems(orderItems.filter(item => item.product.id !== productId));
  };

  const handleCreateOrder = () => {
    console.log('Создание заказа:', {
      client: selectedClient,
      deliveryPoint: selectedDeliveryPoint,
      deliveryDate,
      comment,
      items: orderItems
    });
    alert('Заказ успешно создан!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Создать заказ</h1>
        
        <div className="grid grid-cols-5 gap-6 h-[calc(100vh-120px)]">
          {/* Левая колонка - Детали заказа (40%) */}
          <div className="col-span-2 space-y-6">
            {/* Блок получатель */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Получатель</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="client">Выберите клиента</Label>
                  <Select value={selectedClient} onValueChange={(value) => {
                    setSelectedClient(value);
                    setSelectedDeliveryPoint('');
                  }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите клиента..." />
                    </SelectTrigger>
                    <SelectContent>
                      {clients.map((client) => (
                        <SelectItem key={client.id} value={client.id}>
                          {client.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="delivery-point">Выберите точку доставки</Label>
                  <Select 
                    value={selectedDeliveryPoint} 
                    onValueChange={setSelectedDeliveryPoint}
                    disabled={!selectedClient}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите точку доставки..." />
                    </SelectTrigger>
                    <SelectContent>
                      {availableDeliveryPoints.map((point) => (
                        <SelectItem key={point.id} value={point.id}>
                          {point.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Параметры доставки */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Параметры доставки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Желаемая дата доставки</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !deliveryDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {deliveryDate ? format(deliveryDate, "dd.MM.yyyy") : "Выберите дату"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={deliveryDate}
                        onSelect={setDeliveryDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <Label htmlFor="comment">Комментарий к заказу</Label>
                  <Textarea
                    id="comment"
                    placeholder="Дополнительные пожелания или инструкции..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Состав заказа */}
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="text-lg">Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent>
                {orderItems.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">Заказ пуст</p>
                ) : (
                  <div className="space-y-3">
                    {orderItems.map((item) => (
                      <div key={item.product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.product.name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="h-7 w-7 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="h-7 w-7 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromOrder(item.product.id)}
                            className="h-7 w-7 p-0 text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <Button 
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 h-12 text-lg"
                  onClick={handleCreateOrder}
                  disabled={orderItems.length === 0}
                >
                  Оформить заказ
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Правая колонка - Каталог товаров (60%) */}
          <div className="col-span-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Каталог товаров на складе</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Поиск по названию или артикулу"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600">Доступно на складе: {product.stock} шт</p>
                      </div>
                      <Button
                        onClick={() => addProductToOrder(product)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Добавить в заказ
                      </Button>
                    </div>
                  ))}
                  
                  {filteredProducts.length === 0 && (
                    <p className="text-gray-500 text-center py-8">Товары не найдены</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
