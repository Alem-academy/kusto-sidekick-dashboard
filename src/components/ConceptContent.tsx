
import { FileText, ArrowRight, Database, Settings, Users, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ConceptContent() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Предложенная концепция
        </h1>
        <p className="text-lg text-gray-600">
          Архитектурная концепция и план интеграции Личного Кабинета (ЛК)
        </p>
      </div>

      {/* Центральная роль ЛК */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-6 h-6 text-blue-600" />
            1. Центральная роль Личного Кабинета
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Личный Кабинет не является изолированной системой. Он выступает в роли центрального 
            сервисного хаба (Service Hub), который агрегирует данные из внутренних систем MKS-Kusto 
            и предоставляет их клиентам в удобном и доступном виде.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-3">Такой подход позволяет:</h4>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 text-blue-600" />
                <span><strong>Изолировать внутренние системы:</strong> Клиенты не получают прямого доступа к WMS или 1С</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 text-blue-600" />
                <span><strong>Обеспечить гибкость:</strong> При замене систем потребуется изменить только интеграцию с ЛК</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 text-blue-600" />
                <span><strong>Создать единый источник правды:</strong> Все данные в одном месте для клиента</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Архитектура системы */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-6 h-6 text-green-600" />
            2. Архитектура системы и потоки данных
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700">
            Личный Кабинет взаимодействует с существующими и планируемыми системами компании:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* WMS Integration */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <Badge variant="outline" className="bg-green-100 text-green-800">WMS</Badge>
                Двусторонняя интеграция
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-green-800">Из WMS в ЛК:</p>
                  <ul className="text-green-700 ml-4 space-y-1">
                    <li>• Данные о товарах и артикулах</li>
                    <li>• Актуальные остатки по партиям</li>
                    <li>• Сроки годности</li>
                    <li>• Статусы приемки и отгрузки</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-green-800">Из ЛК в WMS:</p>
                  <ul className="text-green-700 ml-4">
                    <li>• Новые заказы на отгрузку</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 1C Integration */}
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <Badge variant="outline" className="bg-orange-100 text-orange-800">1C</Badge>
                Односторонняя интеграция
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-orange-800">Из 1С в ЛК:</p>
                  <ul className="text-orange-700 ml-4 space-y-1">
                    <li>• Финансовые документы</li>
                    <li>• Данные о клиентах</li>
                    <li>• Цены и тарифы на услуги</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CRM Integration */}
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                <Badge variant="outline" className="bg-purple-100 text-purple-800">CRM</Badge>
                Двусторонняя интеграция
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-purple-800">Из CRM в ЛК:</p>
                  <ul className="text-purple-700 ml-4 space-y-1">
                    <li>• Контактная информация</li>
                    <li>• Справочник клиентов</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-purple-800">Из ЛК в CRM:</p>
                  <ul className="text-purple-700 ml-4">
                    <li>• История активности клиентов</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Routing Service */}
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                <Badge variant="outline" className="bg-indigo-100 text-indigo-800">Маршрутизация</Badge>
                Двусторонняя интеграция
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-indigo-800">Из ЛК в Сервис:</p>
                  <ul className="text-indigo-700 ml-4 space-y-1">
                    <li>• Данные о заказе</li>
                    <li>• Адрес доставки</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-indigo-800">Из Сервиса в ЛК:</p>
                  <ul className="text-indigo-700 ml-4 space-y-1">
                    <li>• Статус доставки</li>
                    <li>• Трекинг курьера</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Технологический стек */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-600" />
            3. Технологический стек и методы интеграции
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-3">Рекомендуемые технологии:</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-100 text-purple-800">REST API</Badge>
                <span className="text-purple-700">Основной метод с использованием JSON</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-100 text-purple-800">Синхронные запросы</Badge>
                <span className="text-purple-700">Для операций, требующих немедленного ответа</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-100 text-purple-800">Webhooks</Badge>
                <span className="text-purple-700">Для асинхронных уведомлений</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Поэтапный план */}
      <Card className="border-l-4 border-l-yellow-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-yellow-600" />
            4. Поэтапный план интеграции и запуска
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-3">Этап 1: Интеграция с WMS (MVP)</h4>
              <ul className="text-yellow-800 space-y-1 ml-4">
                <li>• Настройка API WMS для получения остатков и партий</li>
                <li>• Разработка функционала отображения данных в ЛК</li>
                <li>• Настройка API для получения заказов на отгрузку</li>
              </ul>
              <p className="text-yellow-700 mt-3 font-medium">
                Результат: Клиенты видят остатки и создают заказы на доставку
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3">Этап 2: Интеграция с 1С и CRM</h4>
              <ul className="text-green-800 space-y-1 ml-4">
                <li>• Настройка выгрузки документов из 1С в ЛК</li>
                <li>• Синхронизация справочника клиентов</li>
              </ul>
              <p className="text-green-700 mt-3 font-medium">
                Результат: Доступ к документации и управление клиентской базой
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">Этап 3: Интеграция с сервисом маршрутизации</h4>
              <ul className="text-blue-800 space-y-1 ml-4">
                <li>• Подключение API сервиса маршрутизации</li>
                <li>• Реализация передачи данных о заказах</li>
                <li>• Разработка интерфейса отслеживания на карте</li>
              </ul>
              <p className="text-blue-700 mt-3 font-medium">
                Результат: Полный контроль над доставкой в реальном времени
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Процесс подключения */}
      <Card className="border-l-4 border-l-indigo-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6 text-indigo-600" />
            5. Процесс подключения клиента к Личному Кабинету
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-3 bg-indigo-50 rounded-lg">
              <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-indigo-900">Создание учетной записи</h4>
                <p className="text-indigo-700 text-sm">Менеджер создает основного пользователя для клиента</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-3 bg-indigo-50 rounded-lg">
              <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-indigo-900">Отправка приглашения</h4>
                <p className="text-indigo-700 text-sm">Клиент получает ссылку для активации аккаунта</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-3 bg-indigo-50 rounded-lg">
              <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-indigo-900">Первичная синхронизация</h4>
                <p className="text-indigo-700 text-sm">Автоматическая подтяжка всех данных клиента</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-3 bg-indigo-50 rounded-lg">
              <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-indigo-900">Обучение и поддержка</h4>
                <p className="text-indigo-700 text-sm">Онлайн-обучение и предоставление инструкций</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <p className="text-gray-600 text-sm italic text-center">
          Этот документ является основой для технического задания и дорожной карты проекта, 
          позволяя всем участникам процесса иметь единое видение системы.
        </p>
      </div>
    </div>
  );
}
