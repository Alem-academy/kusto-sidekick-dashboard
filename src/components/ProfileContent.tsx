
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User, Settings, Users, Plus, Key } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function ProfileContent() {
  const isMobile = useIsMobile();
  
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

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 pb-20 md:pb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Профиль и настройки
          </h1>
          <p className="text-gray-600 mt-1 text-sm md:text-base">
            Настройки аккаунта и управление системой
          </p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className={`grid w-full grid-cols-2 ${isMobile ? 'h-12' : ''}`}>
          <TabsTrigger value="profile" className="flex items-center gap-1 md:gap-2">
            <User className="w-4 h-4" />
            <span className={isMobile ? 'text-xs' : ''}>Настройки профиля</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-1 md:gap-2">
            <Users className="w-4 h-4" />
            <span className={isMobile ? 'text-xs' : ''}>Управление пользователями</span>
          </TabsTrigger>
        </TabsList>

        {/* Profile Settings Tab */}
        <TabsContent value="profile" className="space-y-4 md:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
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
              <div className={`flex gap-4 ${isMobile ? 'flex-col' : ''}`}>
                <Button className={`bg-blue-600 hover:bg-blue-700 ${isMobile ? 'w-full' : ''}`}>
                  Сохранить изменения
                </Button>
                <Button 
                  variant="outline" 
                  className={`flex items-center gap-2 ${isMobile ? 'w-full' : ''}`}
                >
                  <Key className="w-4 h-4" />
                  Сменить пароль
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* User Management Tab */}
        <TabsContent value="users" className="space-y-4 md:space-y-6">
          <Card>
            <CardHeader>
              <div className={`flex items-center justify-between ${isMobile ? 'flex-col gap-4' : ''}`}>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Users className="w-5 h-5 text-blue-600" />
                  Список пользователей
                </CardTitle>
                <Button className={`bg-green-600 hover:bg-green-700 flex items-center gap-2 ${isMobile ? 'w-full' : ''}`}>
                  <Plus className="w-4 h-4" />
                  Добавить пользователя
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {isMobile ? (
                /* Mobile Card Layout */
                <div className="space-y-3">
                  {users.map((user) => (
                    <Card key={user.id}>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-medium text-sm">{user.name}</h3>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                              {user.role}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              Редактировать
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="flex-1 text-red-600 hover:text-red-700"
                            >
                              Удалить
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                /* Desktop Table Layout */
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
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
