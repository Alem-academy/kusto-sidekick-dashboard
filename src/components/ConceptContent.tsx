
import { FileText, ArrowRight, Database, Settings, Users, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ConceptContent() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4 md:p-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#073B4C] mb-2">
            Архитектура и Интеграция
          </h1>
          <p className="text-xl md:text-2xl text-[#118AB2]">
            Личный Кабинет Клиента MKS-Kusto
          </p>
        </header>

        <main className="space-y-16">
          {/* Section 1: Core Concept */}
          <section className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#073B4C] mb-4">
                Центральная Роль: Сервисный Хаб
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Личный Кабинет (ЛК) не является изолированной системой. Он выступает в роли центрального 
                сервисного хаба, который агрегирует данные из внутренних систем MKS-Kusto и предоставляет 
                их клиентам в удобном виде, а также принимает от них заказы и запросы.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-5xl mb-2">🛡️</span>
                  <h3 className="font-bold text-lg text-[#118AB2]">Безопасность</h3>
                  <p className="text-sm text-center text-gray-600">
                    Изоляция внутренних систем от прямого доступа клиентов.
                  </p>
                </div>
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-5xl mb-2">⚙️</span>
                  <h3 className="font-bold text-lg text-[#06D6A0]">Гибкость</h3>
                  <p className="text-sm text-center text-gray-600">
                    Легкая замена или обновление внутренних систем без влияния на клиента.
                  </p>
                </div>
                <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg">
                  <span className="text-5xl mb-2">🎯</span>
                  <h3 className="font-bold text-lg text-[#FFD166]">Единый Источник</h3>
                  <p className="text-sm text-center text-gray-600">
                    Все данные и операции для клиента доступны в одном окне.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: System Architecture Flowchart */}
          <section>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-center text-[#073B4C] mb-8">
                Архитектура Системы и Потоки Данных
              </h2>
              
              {/* Desktop Flowchart */}
              <div className="relative w-full min-h-[600px] md:min-h-[450px] hidden md:block">
                {/* Lines */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/4 h-1 bg-[#073B4C] z-0"></div>
                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/4 h-1 bg-[#073B4C] z-0"></div>
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-1/4 w-1 bg-[#073B4C] z-0"></div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1/4 w-1 bg-[#073B4C] z-0"></div>
                
                {/* Central Box */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/3 flex items-center justify-center p-4 bg-white border-2 border-[#073B4C] rounded-lg shadow-2xl z-10">
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-[#073B4C]">Личный Кабинет</h3>
                    <p className="text-xs text-gray-500">Сервисный Хаб</p>
                  </div>
                </div>
                
                {/* Top Box - 1C */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1/4 flex items-center justify-center p-2 bg-blue-100 border-2 border-blue-500 rounded-lg z-10">
                  <div className="text-center">
                    <h4 className="font-bold text-blue-800">1C</h4>
                    <p className="text-xs text-blue-600">Система учета</p>
                    <p className="text-xs font-semibold mt-1">→ ЛК</p>
                  </div>
                </div>
                
                {/* Bottom Box - Routing */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1/4 flex items-center justify-center p-2 bg-red-100 border-2 border-red-500 rounded-lg z-10">
                  <div className="text-center">
                    <h4 className="font-bold text-red-800">Сервис Маршрутизации</h4>
                    <p className="text-xs text-red-600">Последняя миля</p>
                    <p className="text-xs font-semibold mt-1">↔ ЛК</p>
                  </div>
                </div>
                
                {/* Left Box - WMS */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-1/3 flex items-center justify-center p-2 bg-green-100 border-2 border-green-500 rounded-lg z-10">
                  <div className="text-center">
                    <h4 className="font-bold text-green-800">WMS</h4>
                    <p className="text-xs text-green-600">Управление складом</p>
                    <p className="text-xs font-semibold mt-1">↔ ЛК</p>
                  </div>
                </div>
                
                {/* Right Box - CRM */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-1/3 flex items-center justify-center p-2 bg-yellow-100 border-2 border-yellow-500 rounded-lg z-10">
                  <div className="text-center">
                    <h4 className="font-bold text-yellow-800">CRM</h4>
                    <p className="text-xs text-yellow-600">Управление клиентами</p>
                    <p className="text-xs font-semibold mt-1">↔ ЛК</p>
                  </div>
                </div>
              </div>
              
              {/* Mobile View */}
              <div className="md:hidden space-y-4">
                <div className="text-center p-4 bg-white border-2 border-[#073B4C] rounded-lg shadow-xl">
                  <h3 className="font-bold text-lg text-[#073B4C]">Личный Кабинет</h3>
                  <p className="text-xs text-gray-500">Центральный Сервисный Хаб</p>
                </div>
                <div className="text-center text-2xl font-bold">↕</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-2 bg-green-100 border-2 border-green-500 rounded-lg text-center">
                    <h4 className="font-bold text-green-800">WMS</h4>
                    <p className="text-xs text-green-600">↔ ЛК</p>
                  </div>
                  <div className="p-2 bg-yellow-100 border-2 border-yellow-500 rounded-lg text-center">
                    <h4 className="font-bold text-yellow-800">CRM</h4>
                    <p className="text-xs text-yellow-600">↔ ЛК</p>
                  </div>
                  <div className="p-2 bg-blue-100 border-2 border-blue-500 rounded-lg text-center">
                    <h4 className="font-bold text-blue-800">1C</h4>
                    <p className="text-xs text-blue-600">→ ЛК</p>
                  </div>
                  <div className="p-2 bg-red-100 border-2 border-red-500 rounded-lg text-center">
                    <h4 className="font-bold text-red-800">Маршрутизация</h4>
                    <p className="text-xs text-red-600">↔ ЛК</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Data Exchange Intensity */}
          <section>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-center text-[#073B4C] mb-4">
                Интенсивность Обмена Данными
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
                Визуализация количества потоков данных, которыми обменивается Личный Кабинет с каждой 
                из внутренних систем. Это показывает, насколько глубока интеграция с каждым компонентом.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800">WMS</h4>
                  <div className="flex justify-center mt-2 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                  <p className="text-xs text-green-600 mt-1">4/5 потоков</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800">1C</h4>
                  <div className="flex justify-center mt-2 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                  <p className="text-xs text-blue-600 mt-1">3/5 потоков</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-bold text-yellow-800">CRM</h4>
                  <div className="flex justify-center mt-2 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-3 h-3 rounded-full ${i < 2 ? 'bg-yellow-500' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                  <p className="text-xs text-yellow-600 mt-1">2/5 потоков</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-800">Маршрутизация</h4>
                  <div className="flex justify-center mt-2 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-red-500' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                  <p className="text-xs text-red-600 mt-1">3/5 потоков</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Tech Stack */}
          <section>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-center text-[#073B4C] mb-8">
                Технологический Стек Интеграции
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="text-center p-6 bg-gray-100 rounded-lg">
                  <div className="text-6xl mb-3">🔄</div>
                  <h3 className="text-xl font-bold text-[#073B4C]">REST API</h3>
                  <p className="text-gray-600 mt-1">
                    Основной метод обмена данными. Гибкий и универсальный отраслевой стандарт.
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-100 rounded-lg">
                  <div className="text-6xl mb-3">{ }</div>
                  <h3 className="text-xl font-bold text-[#073B4C]">JSON</h3>
                  <p className="text-gray-600 mt-1">
                    Легковесный формат данных, понятный для всех современных систем и разработчиков.
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-100 rounded-lg">
                  <div className="text-6xl mb-3">🎣</div>
                  <h3 className="text-xl font-bold text-[#073B4C]">Webhooks</h3>
                  <p className="text-gray-600 mt-1">
                    Асинхронные уведомления для мгновенного обновления статусов без лишних запросов.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Integration Plan Timeline */}
          <section>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-center text-[#073B4C] mb-12">
                Поэтапный План Интеграции
              </h2>
              <div className="relative max-w-4xl mx-auto">
                {/* Timeline line for desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#118AB2] hidden md:block"></div>
                
                <div className="space-y-12 md:space-y-0">
                  {/* Step 1 */}
                  <div className="relative flex md:items-center flex-col md:flex-row">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-[#118AB2] hidden md:block"></div>
                    <div className="w-full md:w-5/12 md:ml-auto md:text-right">
                      <div className="p-6 bg-green-50 border-l-4 md:border-l-0 md:border-r-4 border-green-400 rounded-lg">
                        <p className="text-sm font-semibold text-green-600">Этап 1</p>
                        <h3 className="text-xl font-bold text-green-800">MVP и WMS</h3>
                        <p className="mt-2 text-gray-700">
                          Интеграция со складом. Клиенты видят остатки и могут создавать заказы. 
                          Решение главной "боли".
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative flex md:items-center flex-col md:flex-row-reverse">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-[#118AB2] hidden md:block"></div>
                    <div className="w-full md:w-5/12 md:mr-auto md:text-left">
                      <div className="p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg">
                        <p className="text-sm font-semibold text-blue-600">Этап 2</p>
                        <h3 className="text-xl font-bold text-blue-800">1C и CRM</h3>
                        <p className="mt-2 text-gray-700">
                          Подключение документооборота и синхронизация клиентской базы. 
                          Полноценное управление.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative flex md:items-center flex-col md:flex-row">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-[#118AB2] hidden md:block"></div>
                    <div className="w-full md:w-5/12 md:ml-auto md:text-right">
                      <div className="p-6 bg-red-50 border-l-4 md:border-l-0 md:border-r-4 border-red-400 rounded-lg">
                        <p className="text-sm font-semibold text-red-600">Этап 3</p>
                        <h3 className="text-xl font-bold text-red-800">Сервис Маршрутизации</h3>
                        <p className="mt-2 text-gray-700">
                          Интеграция с сервисом "последней мили". Клиенты отслеживают доставку 
                          в реальном времени.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Client Onboarding */}
          <section>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-center text-[#073B4C] mb-8">
                Процесс Подключения Клиента
              </h2>
              <div className="max-w-2xl mx-auto">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-[#118AB2] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Создание учетной записи</h4>
                      <p className="text-gray-600">
                        Менеджер MKS-Kusto регистрирует нового клиента в системе.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-[#118AB2] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Отправка приглашения</h4>
                      <p className="text-gray-600">
                        Клиент получает email со ссылкой для активации аккаунта и установки пароля.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-[#118AB2] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Первичная синхронизация</h4>
                      <p className="text-gray-600">
                        Система автоматически подтягивает все исторические данные клиента из WMS и 1С.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-[#118AB2] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Обучение и поддержка</h4>
                      <p className="text-gray-600">
                        Проведение короткого онлайн-обучения и предоставление инструкций.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center mt-16 py-6 border-t">
          <p className="text-gray-500">
            &copy; 2025 MKS-Kusto. Архитектурная концепция Личного Кабинета.
          </p>
        </footer>
      </div>
    </div>
  );
}
