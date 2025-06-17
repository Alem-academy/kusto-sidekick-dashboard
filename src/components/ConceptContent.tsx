
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ConceptContent() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        {/* Первая часть: Концепт */}
        <header className="text-center my-8 md:my-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#003f5c]">Новый стандарт сервиса</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Превращаем складскую логистику в прозрачную, управляемую и эффективную цифровую экосистему для ваших клиентов.
          </p>
        </header>

        <section className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">От склада к сервисному партнеру</h2>
            <p className="mt-2 text-slate-500 max-w-2xl mx-auto">
              Мы предлагаем не просто сайт, а фундаментальный сдвиг в подходе к клиентскому сервису: 
              от ручных операций к полной автоматизации.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
            <div className="w-full md:w-2/5 text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#7a5195]">Традиционный подход</h3>
              <div className="text-4xl my-4">📞 📧 📠</div>
              <p className="text-slate-600">
                Постоянные звонки, путаница в письмах, ручное отслеживание статусов. Медленно и неэффективно.
              </p>
            </div>
            <div className="w-full md:w-1/5 flex justify-center items-center px-4">
              <div className="w-full h-1 bg-[#7a5195] relative hidden md:block">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-[#7a5195] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
              </div>
              <div className="text-5xl text-[#7a5195] md:hidden">⬇️</div>
            </div>
            <div className="w-full md:w-2/5 text-center p-6 bg-white rounded-lg shadow-xl border-2 border-[#7a5195]">
              <h3 className="text-xl font-semibold text-[#7a5195]">Цифровая платформа</h3>
              <div className="text-4xl my-4">💻 📊 🚀</div>
              <p className="text-slate-600">
                Единый кабинет для всех операций, аналитики и коммуникаций. Быстро, прозрачно и удобно.
              </p>
            </div>
          </div>
        </section>

        <section className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Возможности для ваших клиентов</h2>
            <p className="mt-2 text-slate-500 max-w-2xl mx-auto">
              Мы спроектировали модульную систему, где каждый раздел решает конкретные задачи бизнеса.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#003f5c] mb-4">Дашборд «Склад и остатки»</h3>
              <p className="text-slate-600 mb-6">
                Клиент получает полный контроль над своими запасами 24/7. Система проактивно подсвечивает 
                проблемные зоны, такие как низкий остаток или истекающие сроки годности.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-100 rounded">
                  <span className="font-medium">Соки</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">1200 шт</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-100 rounded">
                  <span className="font-medium">Снэки</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">⚠️ 300 шт</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-100 rounded">
                  <span className="font-medium">Вода</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">1900 шт</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#003f5c] mb-4">Аналитика и Финансы</h3>
              <p className="text-slate-600 mb-6">
                Интерактивные отчеты помогают анализировать динамику продаж и структуру запасов. 
                Умный финансовый архив упрощает работу бухгалтерии.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-slate-100 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Отгрузки за месяц</span>
                    <span className="font-bold text-[#003f5c]">95 тыс. шт</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-[#003f5c] h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="text-center text-sm text-slate-500">↗️ +18% к прошлому месяцу</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#003f5c] mb-4">Управление логистикой</h3>
              <p className="text-slate-600 mb-6">
                Единый интерфейс для всех логистических операций. Создание и отслеживание заявок в несколько кликов, 
                что сокращает время и исключает ошибки.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                  <span className="text-3xl">📥</span>
                  <div>
                    <h4 className="font-semibold text-slate-800">Заявки на поставку</h4>
                    <p className="text-sm text-slate-500">Планирование приемки товара на склад.</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                  <span className="text-3xl">➡️</span>
                  <div>
                    <h4 className="font-semibold text-slate-800">Заказы на доставку</h4>
                    <p className="text-sm text-slate-500">Быстрая отгрузка товара конечным клиентам.</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                  <span className="text-3xl">📤</span>
                  <div>
                    <h4 className="font-semibold text-slate-800">Заявки на возврат</h4>
                    <p className="text-sm text-slate-500">Контролируемый возврат товара со склада.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#003f5c] mb-4">Коммуникации и Поддержка</h3>
              <p className="text-slate-600 mb-6">
                Интерактивный справочник клиентов с картой и структурированная система тикетов 
                для быстрой и прозрачной связи со службой поддержки.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                  <span className="text-3xl">📇</span>
                  <div>
                    <h4 className="font-semibold text-slate-800">Справочник клиентов</h4>
                    <p className="text-sm text-slate-500">Управление точками доставки на карте.</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                  <span className="text-3xl">🎫</span>
                  <div>
                    <h4 className="font-semibold text-slate-800">Система тикетов</h4>
                    <p className="text-sm text-slate-500">Прозрачное решение всех вопросов.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        
        <section className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Ценность для вашего бизнеса</h2>
            <p className="mt-2 text-slate-500 max-w-2xl mx-auto">
              Внедрение Личного Кабинета — это прямая инвестиция в эффективность, лояльность и рост.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#003f5c] text-white p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-5xl font-extrabold text-[#ffa600]">-40%</div>
              <div className="mt-2 font-semibold">Операционной нагрузки</div>
              <p className="text-sm font-light mt-2 opacity-80">
                Автоматизация рутинных запросов высвобождает время менеджеров.
              </p>
            </div>
            <div className="bg-[#003f5c] text-white p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-5xl font-extrabold text-[#ff764a]">+25%</div>
              <div className="mt-2 font-semibold">Лояльности клиентов</div>
              <p className="text-sm font-light mt-2 opacity-80">
                Мощный и удобный инструмент — лучший способ удержать клиентов.
              </p>
            </div>
            <div className="bg-[#003f5c] text-white p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-5xl font-extrabold text-[#ef5675]">🏆</div>
              <div className="mt-2 font-semibold">Конкурентное преимущество</div>
              <p className="text-sm font-light mt-2 opacity-80">
                Цифровая платформа — ключевой аргумент для привлечения новых клиентов.
              </p>
            </div>
            <div className="bg-[#003f5c] text-white p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-5xl font-extrabold text-[#bc5090]">🚀</div>
              <div className="mt-2 font-semibold">Основа для роста</div>
              <p className="text-sm font-light mt-2 opacity-80">
                Фундамент для внедрения новых цифровых услуг и моделей монетизации.
              </p>
            </div>
          </div>
        </section>

        {/* Вторая часть: Архитектура */}
        <div className="border-t-4 border-[#7a5195] mt-20 pt-16">
          <header className="text-center my-8 md:my-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#003f5c]">Архитектура Интеграции</h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Как мы свяжем Личный Кабинет с вашими системами для обеспечения безопасности, гибкости и стабильности.
            </p>
          </header>

          <section className="my-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800">Наша философия: Центральный Хаб</h2>
              <p className="mt-2 text-slate-500 max-w-3xl mx-auto">
                Мы не подключаем клиентов напрямую к вашим внутренним системам. Вместо этого, 
                Личный Кабинет становится изолированным сервисным хабом, как терминал в аэропорту, 
                который управляет всеми потоками данных.
              </p>
            </div>
            
            <div className="relative min-h-[600px] md:min-h-[750px] flex items-center justify-center">
              {/* Линии для desktop */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hidden md:block">
                {/* Вертикальная линия сверху */}
                <div className="absolute w-0.5 h-[180px] left-1/2 top-[60px] -translate-x-1/2 bg-slate-500"></div>
                <div className="absolute left-1/2 top-[240px] -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-slate-500"></div>
                
                {/* Вертикальная линия снизу */}
                <div className="absolute w-0.5 h-[180px] left-1/2 bottom-[60px] -translate-x-1/2 bg-slate-500"></div>
                <div className="absolute left-1/2 bottom-[240px] -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-slate-500"></div>
                
                {/* Горизонтальная линия слева */}
                <div className="absolute h-0.5 w-[180px] left-[60px] top-1/2 -translate-y-1/2 bg-slate-500"></div>
                <div className="absolute left-[240px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-slate-500"></div>

                {/* Горизонтальная линия справа */}
                <div className="absolute h-0.5 w-[180px] right-[60px] top-1/2 -translate-y-1/2 bg-slate-500"></div>
                <div className="absolute right-[240px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[10px] border-t-transparent border-b-transparent border-r-slate-500"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto items-center">
                
                {/* Центральный хаб */}
                <div className="md:col-start-2 flex justify-center order-1 md:order-2">
                  <div className="bg-white rounded-xl p-6 shadow-lg border-4 border-[#7a5195] transform scale-105 w-full max-w-xs text-center relative z-10">
                    <div className="text-5xl">🏢</div>
                    <h3 className="text-xl font-bold mt-2 text-[#7a5195]">Личный Кабинет</h3>
                    <p className="text-sm mt-1 text-slate-500">Центральный хаб</p>
                  </div>
                </div>

                {/* WMS */}
                <div className="flex justify-center order-2 md:order-1">
                  <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-xs relative z-10">
                    <h4 className="font-bold text-[#003f5c]">WMS (Склад)</h4>
                    <p className="text-xs text-slate-400 mb-2">Двусторонняя связь</p>
                    <p className="text-sm font-semibold text-green-600">→ Получает:</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 pl-2">
                      <li>Заявки на отгрузку</li>
                      <li>Заявки на поставку</li>
                      <li>Заявки на возврат</li>
                    </ul>
                    <p className="text-sm font-semibold text-blue-600 mt-2">← Отдает:</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 pl-2">
                      <li>Остатки и партии</li>
                      <li>Статусы операций</li>
                    </ul>
                  </div>
                </div>

                {/* 1C */}
                <div className="flex justify-center order-3 md:order-3">
                  <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-xs relative z-10">
                    <h4 className="font-bold text-[#ef5675]">1С (Бухгалтерия)</h4>
                    <p className="text-xs text-slate-400 mb-2">Односторонняя связь</p>
                    <p className="text-sm font-semibold text-green-600">→ Получает:</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 pl-2">
                      <li>Ничего</li>
                    </ul>
                    <p className="text-sm font-semibold text-blue-600 mt-2">← Отдает:</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 pl-2">
                      <li>Счета-фактуры, акты</li>
                      <li>Статусы оплаты</li>
                    </ul>
                  </div>
                </div>

                {/* CRM */}
                <div className="md:col-start-1 flex justify-center order-4 md:order-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-xs relative z-10">
                    <h4 className="font-bold text-[#ff764a]">CRM (Клиенты)</h4>
                    <p className="text-xs text-slate-400 mb-2">Двусторонняя связь</p>
                    <p className="text-sm font-semibold text-green-600">→ Получает:</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 pl-2">
                      <li>Данные об активности</li>
                    </ul>
                    <p className="text-sm font-semibold text-blue-600 mt-2">← Отдает:</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 pl-2">
                      <li>Справочник клиентов</li>
                      <li>Точки доставки</li>
                    </ul>
                  </div>
                </div>
                
                {/* Сервис маршрутизации */}
                <div className="md:col-start-3 flex justify-center order-5 md:order-5">
                  <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-xs relative z-10">
                    <h4 className="font-bold text-[#ffa600]">Сервис Маршрутизации</h4>
                    <p className="text-xs text-slate-400 mb-2">Двусторонняя связь</p>
                    <p className="text-sm font-semibold text-green-600">→ Получает:</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 pl-2">
                      <li>Задачи на доставку</li>
                    </ul>
                    <p className="text-sm font-semibold text-blue-600 mt-2">← Отдает:</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 pl-2">
                      <li>Статусы "В пути"</li>
                      <li>Координаты на карте</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="my-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800">Ключевые преимущества архитектуры</h2>
              <p className="mt-2 text-slate-500 max-w-2xl mx-auto">
                Такой подход обеспечивает надежность сегодня и открывает возможности для роста завтра.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Безопасность</h3>
                <p className="text-slate-600">
                  Ваши внутренние системы полностью изолированы от прямого доступа извне, что минимизирует риски.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Управляемость</h3>
                <p className="text-slate-600">
                  Весь поток данных проходит через одну контролируемую точку, что упрощает мониторинг и отладку.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Гибкость</h3>
                <p className="text-slate-600">
                  Замена любой из систем (например, CRM) потребует перенастройки только одного "шлюза", 
                  а не всей архитектуры.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 py-8 bg-slate-800 text-slate-400 rounded-lg">
          <p>&copy; 2025 MKS-Kusto. Цифровая платформа и архитектура интеграции.</p>
        </footer>
      </div>
    </div>
  );
}
