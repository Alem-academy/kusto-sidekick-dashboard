
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Settings, Bell, Shield, HelpCircle, Phone } from "lucide-react";

export function ProfileContent() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Профиль и поддержка</h1>
          <p className="text-gray-600 mt-1">Настройки аккаунта и служба поддержки</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Информация профиля
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Имя пользователя
              </label>
              <Input defaultValue="Иван Петрович Сидоров" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input defaultValue="i.sidorov@company.ru" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Телефон
              </label>
              <Input defaultValue="+7 (495) 123-45-67" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Компания
              </label>
              <Input defaultValue="ООО 'Прогресс'" />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Сохранить изменения
            </Button>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              Настройки
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">Уведомления</div>
                  <div className="text-sm text-gray-600">Email уведомления о заказах</div>
                </div>
              </div>
              <Button size="sm" variant="outline">Настроить</Button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">Безопасность</div>
                  <div className="text-sm text-gray-600">Пароль и двухфакторная аутентификация</div>
                </div>
              </div>
              <Button size="sm" variant="outline">Настроить</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Support Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            Поддержка
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Контакты службы поддержки</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Телефон поддержки</div>
                    <div className="text-blue-600">+7 (495) 789-01-23</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <User className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium">Email поддержки</div>
                    <div className="text-green-600">support@mks-kusto.ru</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Часто задаваемые вопросы</h3>
              <div className="space-y-2">
                <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="font-medium">Как создать новый заказ?</div>
                  <div className="text-sm text-gray-600">Инструкция по оформлению заказа</div>
                </div>
                <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="font-medium">Как отследить доставку?</div>
                  <div className="text-sm text-gray-600">Способы отслеживания заказов</div>
                </div>
                <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="font-medium">Проблемы с авторизацией</div>
                  <div className="text-sm text-gray-600">Восстановление доступа к аккаунту</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Быстрые действия</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="p-4 h-auto">
              <div className="text-center">
                <HelpCircle className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <div className="font-medium">Создать тикет</div>
                <div className="text-sm text-gray-600">Обратиться в поддержку</div>
              </div>
            </Button>
            <Button variant="outline" className="p-4 h-auto">
              <div className="text-center">
                <Settings className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <div className="font-medium">Изменить пароль</div>
                <div className="text-sm text-gray-600">Обновить пароль</div>
              </div>
            </Button>
            <Button variant="outline" className="p-4 h-auto">
              <div className="text-center">
                <User className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <div className="font-medium">Скачать данные</div>
                <div className="text-sm text-gray-600">Экспорт информации</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
