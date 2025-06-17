import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, MapPin, List, Map, Edit, ToggleLeft, ToggleRight, Users, Building } from "lucide-react";
import { AddClientModal } from "./clients/AddClientModal";
import { AddDeliveryPointModal } from "./clients/AddDeliveryPointModal";

interface DeliveryPoint {
  id: number;
  name: string;
  address: string;
  contact: string;
  phone: string;
  status: 'active' | 'inactive';
  coordinates?: { lat: number; lng: number };
}

interface Client {
  id: number;
  name: string;
  bin: string;
  contact: string;
  phone: string;
  email: string;
  deliveryPoints: DeliveryPoint[];
}

const mockClients: Client[] = [
  {
    id: 1,
    name: "ТОО 'Ресторанный Двор'",
    bin: "123456789012",
    contact: "Иванов Иван Иванович",
    phone: "+7 (777) 123-45-67",
    email: "ivanov@restaurant-dvor.kz",
    deliveryPoints: [
      {
        id: 1,
        name: "Ресторан 'Astana'",
        address: "ул. Абая, 150, Алматы",
        contact: "Айгуль",
        phone: "+7 (701) 111-22-33",
        status: 'active',
        coordinates: { lat: 43.2567, lng: 76.9286 }
      },
      {
        id: 2,
        name: "Ресторан на Сатпаева",
        address: "ул. Сатпаева, 90, Алматы",
        contact: "Дамир",
        phone: "+7 (701) 444-55-66",
        status: 'active',
        coordinates: { lat: 43.2220, lng: 76.8512 }
      },
      {
        id: 3,
        name: "Кафе в ТРЦ Мега",
        address: "ТРЦ Мега Алматы, 2 этаж",
        contact: "Анара",
        phone: "+7 (701) 777-88-99",
        status: 'inactive',
        coordinates: { lat: 43.2075, lng: 76.6669 }
      }
    ]
  },
  {
    id: 2,
    name: "ООО 'Вкусмарт'",
    bin: "987654321098",
    contact: "Петров Петр Петрович",
    phone: "+7 (777) 987-65-43",
    email: "petrov@vkusmart.kz",
    deliveryPoints: [
      {
        id: 4,
        name: "Супермаркет на Достык",
        address: "пр. Достык, 200, Алматы",
        contact: "Марат",
        phone: "+7 (701) 222-33-44",
        status: 'active',
        coordinates: { lat: 43.2394, lng: 76.9457 }
      },
      {
        id: 5,
        name: "Магазин на Республики",
        address: "пр. Республики, 15, Алматы",
        contact: "Жанар",
        phone: "+7 (701) 555-66-77",
        status: 'active',
        coordinates: { lat: 43.2630, lng: 76.9299 }
      }
    ]
  },
  {
    id: 3,
    name: "ИП Сокова А.А.",
    bin: "456789123456",
    contact: "Сокова Анна Алексеевна",
    phone: "+7 (777) 456-78-90",
    email: "sokova@gmail.com",
    deliveryPoints: [
      {
        id: 6,
        name: "Кафе 'Бриз'",
        address: "ул. Жандосова, 98, Алматы",
        contact: "Анна",
        phone: "+7 (701) 888-99-00",
        status: 'active',
        coordinates: { lat: 43.2502, lng: 76.8789 }
      }
    ]
  }
];

export function ClientManagement() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(mockClients[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [sortBy, setSortBy] = useState<keyof DeliveryPoint>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [clients, setClients] = useState(mockClients);

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.bin.includes(searchTerm)
  );

  const handleSort = (column: keyof DeliveryPoint) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedDeliveryPoints = selectedClient?.deliveryPoints.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortOrder === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    return 0;
  });

  const toggleDeliveryPointStatus = (pointId: number) => {
    if (!selectedClient) return;
    
    const updatedPoints = selectedClient.deliveryPoints.map(point =>
      point.id === pointId 
        ? { ...point, status: point.status === 'active' ? 'inactive' as const : 'active' as const }
        : point
    );
    
    const updatedClient = {
      ...selectedClient,
      deliveryPoints: updatedPoints
    };
    
    setSelectedClient(updatedClient);
    setClients(prev => prev.map(client => 
      client.id === selectedClient.id ? updatedClient : client
    ));
  };

  const handleAddClient = (newClientData: {
    name: string;
    bin: string;
    contact: string;
    phone: string;
    email: string;
  }) => {
    const newClient: Client = {
      id: Math.max(...clients.map(c => c.id)) + 1,
      ...newClientData,
      deliveryPoints: []
    };
    
    setClients(prev => [...prev, newClient]);
    console.log('Добавлен новый клиент:', newClient);
  };

  const handleAddDeliveryPoint = (newPointData: {
    name: string;
    address: string;
    contact: string;
    phone: string;
  }) => {
    if (!selectedClient) return;
    
    const newPoint: DeliveryPoint = {
      id: Math.max(...selectedClient.deliveryPoints.map(p => p.id), 0) + 1,
      ...newPointData,
      status: 'active'
    };
    
    const updatedClient = {
      ...selectedClient,
      deliveryPoints: [...selectedClient.deliveryPoints, newPoint]
    };
    
    setSelectedClient(updatedClient);
    setClients(prev => prev.map(client => 
      client.id === selectedClient.id ? updatedClient : client
    ));
    
    console.log('Добавлена новая точка доставки:', newPoint);
  };

  return (
    <div className="flex h-[calc(100vh-200px)] gap-6">
      {/* Левая панель - Список клиентов */}
      <div className="w-[30%] space-y-4">
        <Card className="h-full">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Клиенты
              </CardTitle>
              <AddClientModal onAddClient={handleAddClient} />
            </div>
            
            {/* Поиск */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Поиск по названию или БИН..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="space-y-1 max-h-[calc(100vh-350px)] overflow-y-auto">
              {filteredClients.map((client) => (
                <div
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className={`p-3 cursor-pointer border-l-4 hover:bg-gray-50 transition-colors ${
                    selectedClient?.id === client.id
                      ? 'bg-blue-50 border-l-blue-600'
                      : 'border-l-transparent'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="font-medium text-gray-900 text-sm leading-tight">
                      {client.name}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">БИН: {client.bin}</span>
                      <Badge variant="outline" className="text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {client.deliveryPoints.length} точек
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Правая панель - Детальная информация */}
      <div className="w-[70%] space-y-4">
        {selectedClient ? (
          <>
            {/* Заголовок и действия */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5 text-blue-600" />
                      <h2 className="text-2xl font-bold text-gray-900">{selectedClient.name}</h2>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><strong>БИН:</strong> {selectedClient.bin}</p>
                      <p><strong>Контактное лицо:</strong> {selectedClient.contact}</p>
                      <p><strong>Телефон:</strong> {selectedClient.phone}</p>
                      <p><strong>Email:</strong> {selectedClient.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Edit className="w-4 h-4 mr-2" />
                      Редактировать клиента
                    </Button>
                    <AddDeliveryPointModal onAddDeliveryPoint={handleAddDeliveryPoint} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Точки доставки */}
            <Card className="flex-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Точки доставки ({selectedClient.deliveryPoints.length})
                  </CardTitle>
                  
                  {/* Переключатель вида */}
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className={viewMode === 'list' ? 'bg-white shadow-sm' : ''}
                    >
                      <List className="w-4 h-4 mr-2" />
                      Список
                    </Button>
                    <Button
                      variant={viewMode === 'map' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('map')}
                      className={viewMode === 'map' ? 'bg-white shadow-sm' : ''}
                    >
                      <Map className="w-4 h-4 mr-2" />
                      Карта
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {viewMode === 'list' ? (
                  <div className="overflow-hidden rounded-lg border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead 
                            className="cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('name')}
                          >
                            Название точки {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
                          </TableHead>
                          <TableHead 
                            className="cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('address')}
                          >
                            Адрес {sortBy === 'address' && (sortOrder === 'asc' ? '↑' : '↓')}
                          </TableHead>
                          <TableHead>Контактное лицо</TableHead>
                          <TableHead>Статус</TableHead>
                          <TableHead>Действия</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sortedDeliveryPoints?.map((point) => (
                          <TableRow key={point.id}>
                            <TableCell className="font-medium">{point.name}</TableCell>
                            <TableCell>{point.address}</TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{point.contact}</div>
                                <div className="text-sm text-gray-500">{point.phone}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge 
                                variant={point.status === 'active' ? 'default' : 'secondary'}
                                className={point.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                              >
                                {point.status === 'active' ? 'Активна' : 'Неактивна'}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  <Edit className="w-3 h-3" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => toggleDeliveryPointStatus(point.id)}
                                >
                                  {point.status === 'active' ? (
                                    <ToggleRight className="w-3 h-3" />
                                  ) : (
                                    <ToggleLeft className="w-3 h-3" />
                                  )}
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Map className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Интерактивная карта</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Здесь будет отображена карта с точками доставки
                      </p>
                      <div className="mt-4 text-xs text-gray-400">
                        {selectedClient.deliveryPoints.length} точек для отображения
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="h-full flex items-center justify-center">
            <div className="text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Выберите клиента</p>
              <p className="text-sm text-gray-500 mt-1">
                Выберите клиента из списка слева для просмотра подробной информации
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
