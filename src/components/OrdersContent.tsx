import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Plus, Truck, Clock, CheckCircle, CalendarDays, Users, MapPin } from "lucide-react";
import { CreateOrderPage } from "./CreateOrderPage";
import { ClientManagement } from "./ClientManagement";

export function OrdersContent() {
  const orders = [
    {
      id: "#ORD-001",
      customer: "ООО Вкусмарт",
      date: "15.06.2025",
      amount: "₸45,680",
      status: "processing",
      items: ["Сок яблочный Rich 1л - 50 шт", "Сок апельсиновый Tropicana 1л - 30 шт"],
      delivery: "Самовывоз"
    },
    {
      id: "#ORD-002",
      customer: "ИП Сокова А.А.",
      date: "14.06.2025",
      amount: "₸12,340",
      status: "shipped",
      items: ["Сок мультифрукт Добрый 0.5л - 120 шт"],
      delivery: "Курьер"
    },
    {
      id: "#ORD-003",
      customer: "ООО Фрешторг",
      date: "14.06.2025",
      amount: "₸89,750",
      status: "delivered",
      items: ["Сок томатный Я 1л - 200 шт", "Сок виноградный Santal 1л - 150 шт"],
      delivery: "Транспортная компания"
    },
    {
      id: "#ORD-004",
      customer: "ЗАО Соколенд",
      date: "13.06.2025",
      amount: "₸34,520",
      status: "processing",
      items: ["Сок персиковый Rich 1л - 80 шт"],
      delivery: "Самовывоз"
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Clock className="w-4 h-4" />;
      case 'shipped':
        return <Truck className="w-4 h-4" />;
      case 'delivered':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'processing':
        return 'В обработке';
      case 'shipped':
        return 'Отправлен';
      case 'delivered':
        return 'Доставлен';
      default:
        return 'Неизвестен';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Заказы и доставка</h1>
          <p className="text-gray-600 mt-1">Управление клиентами, заказами и отслеживание доставки</p>
        </div>
      </div>

      <Tabs defaultValue="clients" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="clients">Мои клиенты</TabsTrigger>
          <TabsTrigger value="create">Создать заказ</TabsTrigger>
          <TabsTrigger value="history">История заказов</TabsTrigger>
        </TabsList>

        <TabsContent value="clients" className="space-y-6">
          <ClientManagement />
        </TabsContent>

        <TabsContent value="create">
          <CreateOrderPage />
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          {/* Order Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">В обработке</p>
                    <p className="text-2xl font-bold text-yellow-600">2</p>
                  </div>
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Отправлено</p>
                    <p className="text-2xl font-bold text-blue-600">1</p>
                  </div>
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Доставлено</p>
                    <p className="text-2xl font-bold text-green-600">1</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Общая сумма</p>
                    <p className="text-2xl font-bold text-purple-600">₸182,290</p>
                  </div>
                  <ShoppingCart className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Orders List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-blue-600" />
                История заказов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="space-y-1">
                          <div className="font-semibold text-lg">{order.id}</div>
                          <div className="text-gray-600">{order.customer}</div>
                          <div className="text-sm text-gray-500">{order.date}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Товаров: {order.items.length}</div>
                          <div className="text-sm text-gray-600">Доставка: {order.delivery}</div>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="text-xl font-bold text-gray-900">{order.amount}</div>
                        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          {getStatusText(order.status)}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <strong>Состав заказа:</strong>
                      <ul className="mt-1 list-disc list-inside">
                        {order.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline">Подробнее</Button>
                      <Button size="sm" variant="outline">Печать</Button>
                      {order.status === 'processing' && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Отправить
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
