
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  FileText,
  Users,
  DollarSign
} from "lucide-react";

export function DashboardContent() {
  const stats = [
    {
      title: "Товары на складе",
      value: "1,247",
      change: "+12%",
      changeType: "positive",
      icon: Package,
      color: "blue"
    },
    {
      title: "Активные заказы",
      value: "89",
      change: "+3%",
      changeType: "positive",
      icon: ShoppingCart,
      color: "green"
    },
    {
      title: "Оборот за месяц",
      value: "₽2,847,390",
      change: "+8%",
      changeType: "positive",
      icon: DollarSign,
      color: "purple"
    },
    {
      title: "Документы",
      value: "156",
      change: "+24",
      changeType: "neutral",
      icon: FileText,
      color: "orange"
    }
  ];

  const recentOrders = [
    { id: "#ORD-001", customer: "ООО Техносфера", amount: "₽45,680", status: "В обработке", date: "15.06.2025" },
    { id: "#ORD-002", customer: "ИП Иванов А.А.", amount: "₽12,340", status: "Отправлен", date: "14.06.2025" },
    { id: "#ORD-003", customer: "ООО Металлинвест", amount: "₽89,750", status: "Доставлен", date: "14.06.2025" },
    { id: "#ORD-004", customer: "ЗАО Прогресс", amount: "₽34,520", status: "В обработке", date: "13.06.2025" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Личный кабинет</h1>
          <p className="text-gray-600 mt-1">Добро пожаловать в систему управления MKS-Kusto</p>
        </div>
        <div className="text-sm text-gray-500">
          Последнее обновление: {new Date().toLocaleString('ru-RU')}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${
                stat.color === 'blue' ? 'bg-blue-100' :
                stat.color === 'green' ? 'bg-green-100' :
                stat.color === 'purple' ? 'bg-purple-100' :
                'bg-orange-100'
              }`}>
                <stat.icon className={`w-4 h-4 ${
                  stat.color === 'blue' ? 'text-blue-600' :
                  stat.color === 'green' ? 'text-green-600' :
                  stat.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className={`text-xs flex items-center mt-1 ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-gray-500'
              }`}>
                {stat.changeType === 'positive' && <TrendingUp className="w-3 h-3 mr-1" />}
                {stat.change} с прошлого месяца
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              Последние заказы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium text-gray-900">{order.id}</div>
                    <div className="text-sm text-gray-600">{order.customer}</div>
                    <div className="text-xs text-gray-500">{order.date}</div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="font-semibold text-gray-900">{order.amount}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Доставлен' ? 'bg-green-100 text-green-800' :
                      order.status === 'Отправлен' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-purple-600" />
              Быстрые действия
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <div className="font-medium text-blue-900">Создать новый заказ</div>
                <div className="text-sm text-blue-700">Оформить заказ для клиента</div>
              </button>
              <button className="w-full p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <div className="font-medium text-green-900">Проверить остатки</div>
                <div className="text-sm text-green-700">Посмотреть наличие товаров</div>
              </button>
              <button className="w-full p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <div className="font-medium text-purple-900">Сформировать отчет</div>
                <div className="text-sm text-purple-700">Создать отчет по продажам</div>
              </button>
              <button className="w-full p-3 text-left bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                <div className="font-medium text-orange-900">Загрузить документы</div>
                <div className="text-sm text-orange-700">Добавить новые документы</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
