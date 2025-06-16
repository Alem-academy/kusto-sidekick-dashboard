
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User, Settings, Users, HelpCircle, Plus, Key } from "lucide-react";

export function ProfileContent() {
  const [supportMessage, setSupportMessage] = useState("");

  const users = [
    {
      id: 1,
      name: "Иван Петрович Сидоров",
      role: "Администратор"
    },
    {
      id: 2,
      name: "Анна Владимировна Коваль",
      role: "Менеджер"
    },
    {
      id: 3,
      name: "Сергей Александрович Петров",
      role: "Кладовщик"
    },
    {
      id: 4,
      name: "Мария Ивановна Смирнова",
      role: "Бухгалтер"
    }
  ];

  const handleSupportSubmit = () => {
    if (supportMessage.trim()) {
      console.log("Отправка обращения:", supportMessage);
      setSupportMessage("");
      // Здесь можно добавить логику отправки
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Профиль и поддержка</h1>
          <p className="text-gray-600 mt-1">Настройки аккаунта и управление системой</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Настройки профиля
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Управление пользователями
          </TabsTrigger>
          <TabsTrigger value="support" className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Служба поддержки
          </TabsTrigger>
        </TabsList>

        {/* Profile Settings Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                Основная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Полное имя
                </label>
                <Input defaultValue="Иван Петрович Сидоров" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input defaultValue="i.sidorov@company.kz" type="email" />
              </div>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Сохранить изменения
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  Сменить пароль
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* User Management Tab */}
        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Список пользователей
                </CardTitle>
                <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Добавить пользователя
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Имя</TableHead>
                      <TableHead>Роль</TableHead>
                      <TableHead className="text-center">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {user.role}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex gap-2 justify-center">
                            <Button size="sm" variant="outline">
                              Редактировать
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                              Удалить
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Support Tab */}
        <TabsContent value="support" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                Обратиться в службу поддержки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Опишите ваш вопрос или проблему
                </label>
                <Textarea
                  placeholder="Введите подробное описание вашего обращения..."
                  value={supportMessage}
                  onChange={(e) => setSupportMessage(e.target.value)}
                  rows={6}
                />
              </div>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleSupportSubmit}
                disabled={!supportMessage.trim()}
              >
                Отправить обращение
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium">Телефон поддержки</div>
                  <div className="text-blue-600">+7 (727) 456-78-90</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium">Email поддержки</div>
                  <div className="text-green-600">support@mks-almaty.kz</div>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <div className="font-medium">Время работы</div>
                  <div className="text-yellow-700">Пн-Пт: 9:00 - 18:00 (GMT+6)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
