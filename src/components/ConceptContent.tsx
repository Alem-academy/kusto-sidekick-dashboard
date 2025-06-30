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

        {/* Введение */}
        <section className="my-16">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#003f5c] mb-6">Введение: Новый стандарт сервиса</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Мы предлагаем разработать и внедрить Личный Кабинет — современную цифровую платформу, которая станет единой точкой входа для всех клиентов MKS-Kusto. Это не просто сайт, а полноценный рабочий инструмент, который переведет взаимодействие с клиентами из телефонных звонков и электронной почты в эффективную и прозрачную онлайн-среду.
            </p>
          </div>
        </section>

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

        {/* Ключевая идея */}
        <section className="my-16">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#003f5c] mb-6">Ключевая идея: От склада к сервисному партнеру</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Основная цель платформы — трансформировать восприятие MKS-Kusto. Из компании, предоставляющей складские услуги, вы превращаетесь в незаменимого сервисного партнера, глубоко интегрированного в бизнес-процессы клиента. Личный Кабинет автоматизирует рутину и дает вашим клиентам инструменты для управления собственной логистикой, финансами и запасами.
            </p>
          </div>
        </section>

        <section className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Возможности для ваших клиентов</h2>
            <p className="mt-2 text-slate-500 max-w-2xl mx-auto">
              Мы спроектировали модульную систему, где каждый раздел решает конкретные задачи бизнеса.
            </p>
          </div>

          {/* Что получают ваши клиенты */}
          <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-[#003f5c] mb-6">Что получают ваши клиенты?</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Мы спроектировали модульную систему, где каждый раздел решает конкретные задачи клиента и автоматизирует весь логистический цикл:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-lg">
                <h4 className="text-lg font-bold text-[#003f5c] mb-3">Централизованное управление поставками</h4>
                <p className="text-slate-700">
                  <strong>Заявки на поставку:</strong> Клиенты заранее создают электронные заявки, указывая склад назначения, состав партии, единицы измерения и оценочную стоимость. Это гарантирует быструю и предсказуемую приемку товара.
                </p>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-lg">
                <h4 className="text-lg font-bold text-[#003f5c] mb-3">Прозрачный контроль над запасами</h4>
                <p className="text-slate-700">
                  <strong>Дашборд «Склад и остатки»:</strong> Полная картина остатков 24/7 в разрезе всех складов MKS-Kusto. Система проактивно информирует о низких запасах и истекающих сроках годности.
                </p>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-lg">
                <h4 className="text-lg font-bold text-[#003f5c] mb-3">Гибкое управление отгрузками</h4>
                <p className="text-slate-700">
                  <strong>Заказы на доставку:</strong> Оптимизированный интерфейс для быстрой отгрузки товаров конечным клиентам.<br/>
                  <strong>Заявки на возврат:</strong> Контролируемый процесс возврата товара со склада владельцу с выбором конкретных партий.
                </p>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-lg">
                <h4 className="text-lg font-bold text-[#003f5c] mb-3">Финансовая аналитика и документооборот</h4>
                <p className="text-slate-700">
                  <strong>Интерактивные отчеты:</strong> Визуальные дашборды для анализа продаж и структуры запасов.<br/>
                  <strong>Финансовый архив:</strong> Умный архив документов со статусами оплаты и группировкой.<br/>
                  <strong>Прозрачность тарифов:</strong> Возможность просматривать тарифы на услуги и использовать калькулятор для предварительного расчета стоимости.
                </p>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-lg md:col-span-2">
                <h4 className="text-lg font-bold text-[#003f5c] mb-3">Эффективные коммуникации</h4>
                <p className="text-slate-700">
                  <strong>Справочник клиентов:</strong> Интерактивный справочник с картой для управления точками доставки.<br/>
                  <strong>Система поддержки:</strong> Структурированная система тикетов для быстрой и прозрачной связи со службой поддержки.
                </p>
              </div>
            </div>
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

          {/* Ценность для бизнеса MKS-Kusto */}
          <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-[#003f5c] mb-6">Ценность для бизнеса MKS-Kusto</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Внедрение Личного Кабинета принесет прямую выгоду вашей компании:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-lg">
                <h4 className="text-lg font-bold text-[#003f5c] mb-3">Снижение операционной нагрузки</h4>
                <p className="text-slate-700">
                  Автоматизация рутинных запросов («сколько у меня товара?», «где мой заказ?», «пришлите счет-фактуру») высвободит время ваших менеджеров для решения более сложных задач.
                </p>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-lg">
                <h4 className="text-lg font-bold text-[#003f5c] mb-3">Повышение лояльности клиентов</h4>
                <p className="text-slate-700">
                  Предоставление такого мощного и удобного инструмента — это лучший способ удержать существующих клиентов и повысить их удовлетворенность.
                </p>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-lg">
                <h4 className="text-lg font-bold text-[#003f5c] mb-3">Решающее конкурентное преимущество</h4>
                <p className="text-slate-700">
                  Наличие современной цифровой платформы станет ключевым аргументом при привлечении новых крупных клиентов.
                </p>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-lg">
                <h4 className="text-lg font-bold text-[#003f5c] mb-3">Основа для будущего роста</h4>
                <p className="text-slate-700">
                  Эта платформа — фундамент, на который в будущем можно будет добавлять новые цифровые услуги и модели монетизации.
                </p>
              </div>
            </div>
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

        {/* Новая секция: Инвестиция в будущее */}
        <div className="border-t-4 border-[#ffa600] mt-20 pt-16">
          <header className="text-center my-8 md:my-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#003f5c]">Инвестиция в будущее</h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Стратегическое обоснование стоимости, зоны ответственности и возврат инвестиций.
            </p>
          </header>

          {/* Введение: Инвестиция в будущее */}
          <section className="my-16">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-[#003f5c] mb-6">Введение: Инвестиция в будущее, а не затраты</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Мы понимаем, что предложенная стоимость — это значительная инвестиция. Наша цель — показать, что это не просто расходы на разработку сайта, а стратегическая инвестиция в эффективность, лояльность клиентов и будущий рост вашей компании. Этот документ объясняет, из чего складывается цена и как Личный Кабинет окупит себя, принося прямую финансовую выгоду.
              </p>
            </div>
          </section>

          {/* Из чего складывается стоимость */}
          <section className="my-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800">Из чего складывается стоимость?</h2>
              <p className="mt-2 text-slate-500 max-w-3xl mx-auto">
                Цена проекта отражает создание сложного, надежного и кастомизированного продукта, а не шаблонного решения.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-[#003f5c] mb-6">Основные компоненты стоимости:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">🎨</span>
                    <h4 className="text-lg font-bold text-[#003f5c]">Проектирование и UX/UI дизайн</h4>
                  </div>
                  <p className="text-slate-700">
                    Мы не просто рисуем кнопки. Мы создаем интуитивно понятные и эффективные рабочие процессы для каждого раздела, чтобы клиенты могли пользоваться кабинетом без обучения.
                  </p>
                </div>
                
                <div className="p-6 bg-slate-50 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">🔒</span>
                    <h4 className="text-lg font-bold text-[#003f5c]">Разработка безопасного ядра платформы</h4>
                  </div>
                  <p className="text-slate-700">
                    Создание фундамента, который будет стабильно работать под нагрузкой и надежно защищать данные.
                  </p>
                </div>
                
                <div className="p-6 bg-slate-50 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">🔗</span>
                    <h4 className="text-lg font-bold text-[#003f5c]">Сложные интеграции (WMS, 1С, CRM)</h4>
                  </div>
                  <p className="text-slate-700">
                    Это самая трудоемкая и критически важная часть. Мы обеспечиваем бесшовный и безопасный обмен данными в реальном времени, что является «сердцем» всей системы.
                  </p>
                </div>
                
                <div className="p-6 bg-slate-50 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">✅</span>
                    <h4 className="text-lg font-bold text-[#003f5c]">Комплексное тестирование и запуск</h4>
                  </div>
                  <p className="text-slate-700">
                    Мы гарантируем, что вы получите стабильный и проверенный продукт, готовый к работе с первого дня.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Зона ответственности */}
          <section className="my-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800">Зона ответственности</h2>
              <p className="mt-2 text-slate-500 max-w-3xl mx-auto">
                Наш партнерский подход к интеграции четко разделяет зоны ответственности для эффективной работы.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-[#003f5c] mb-6">Наш партнерский подход к интеграции</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Для успешной и быстрой интеграции мы используем партнерский подход, который четко разделяет зоны ответственности.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Нам не нужно знать тонкости ваших внутренних систем. Мы строим наш API на основе современных, общеотраслевых IT-стандартов (REST API, JSON), чтобы обеспечить максимальную совместимость. Мы создаем универсальный и документированный «порт для подключения».
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
                  <h4 className="text-xl font-bold text-green-800 mb-4">
                    <span className="text-2xl mr-2">👩‍💻</span>
                    Наша ответственность
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">(разработчика Личного Кабинета)</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-green-800 mb-2">Предоставить готовый и понятный API:</h5>
                      <p className="text-slate-700 text-sm">
                        Мы разработаем, полностью задокументируем (в формате Swagger) и предоставим вам все необходимые эндпоинты. Наш API спроектирован так, чтобы быть доступным для интеграции даже для команды с базовым или средним уровнем технической компетенции.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-800 mb-2">Консультировать ваших специалистов:</h5>
                      <p className="text-slate-700 text-sm">
                        Мы будем оказывать полную консультационную поддержку вашей технической команде по всем вопросам, связанным с работой нашего API.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">
                    <span className="text-2xl mr-2">🏢</span>
                    Ответственность MKS-Kusto
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">(клиента)</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-2">Обеспечить доступ:</h5>
                      <p className="text-slate-700 text-sm">
                        Выделить технического специалиста или команду со своей стороны, которые знают ваши внутренние системы (WMS, 1С, CRM).
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-2">Реализовать «подключение» на своей стороне:</h5>
                      <p className="text-slate-700 text-sm">
                        Ваши специалисты будут ответственны за доработку ваших внутренних систем, чтобы они могли корректно отправлять и принимать данные через предоставленный нами API.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <h4 className="text-lg font-bold text-yellow-800 mb-3">
                  <span className="text-xl mr-2">💡</span>
                  Почему это эффективно?
                </h4>
                <p className="text-slate-700">
                  Никто не знает ваши внутренние системы лучше, чем ваши специалисты. Этот подход гарантирует, что интеграция будет выполнена максимально быстро и безопасно, не требуя от нас глубокого погружения в вашу инфраструктуру.
                </p>
              </div>
            </div>
          </section>

          {/* Прямая экономия и возврат инвестиций */}
          <section className="my-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800">Прямая экономия и возврат инвестиций (ROI)</h2>
              <p className="mt-2 text-slate-500 max-w-3xl mx-auto">
                Главная ценность Личного Кабинета измеряется в сэкономленных деньгах и времени.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-[#003f5c] mb-6">Экономия времени менеджеров</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Личный Кабинет автоматизирует большинство рутинных запросов от клиентов:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="p-4 bg-slate-100 rounded-lg flex items-center">
                    <span className="text-2xl mr-3">❓</span>
                    <span className="text-slate-700">"Сколько у меня товара на складе?"</span>
                  </div>
                  <div className="p-4 bg-slate-100 rounded-lg flex items-center">
                    <span className="text-2xl mr-3">📄</span>
                    <span className="text-slate-700">"Пришлите, пожалуйста, акт сверки/счет-фактуру"</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-100 rounded-lg flex items-center">
                    <span className="text-2xl mr-3">📍</span>
                    <span className="text-slate-700">"Какой статус у моего заказа на доставку?"</span>
                  </div>
                  <div className="p-4 bg-slate-100 rounded-lg flex items-center">
                    <span className="text-2xl mr-3">🚛</span>
                    <span className="text-slate-700">"Можете принять машину завтра в 10 утра?"</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
                <h4 className="text-lg font-bold text-green-800 mb-3">Расчет экономии:</h4>
                <p className="text-slate-700 mb-4">
                  Даже если каждый из ваших менеджеров будет экономить всего 1-2 часа в день, которые раньше уходили на эти задачи, в масштабах года это высвобождает сотни рабочих часов.
                </p>
                <p className="text-slate-700 mb-4">
                  Это время ваши специалисты смогут потратить на развитие отношений с ключевыми клиентами и продажу дополнительных услуг, напрямую влияя на прибыль компании.
                </p>
                <p className="text-slate-700 font-semibold">
                  В итоге, прямая экономия на операционных расходах может составлять миллионы тенге в год.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-[#003f5c] mb-6">Снижение операционных ошибок</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-red-50 rounded-lg border-2 border-red-200">
                  <h4 className="text-lg font-bold text-red-800 mb-3">
                    <span className="text-xl mr-2">📦</span>
                    Неправильная отгрузка
                  </h4>
                  <p className="text-slate-700">
                    Электронная заявка с точным указанием SKU и партий практически исключает риск отгрузить не тот товар. Это избавляет от затрат на возврат, повторную доставку и, что важнее, от потери доверия клиента.
                  </p>
                </div>
                
                <div className="p-6 bg-orange-50 rounded-lg border-2 border-orange-200">
                  <h4 className="text-lg font-bold text-orange-800 mb-3">
                    <span className="text-xl mr-2">🚛</span>
                    Простои транспорта
                  </h4>
                  <p className="text-slate-700">
                    Планирование поставок и возвратов через ЛК означает, что транспорт клиента не будет стоять в очереди, ожидая, пока склад освободится.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Стратегическое предложение */}
          <section className="my-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800">Наше стратегическое предложение</h2>
              <p className="mt-2 text-slate-500 max-w-3xl mx-auto">
                Партнерство вместо подряда — мы хотим быть вашим долгосрочным партнером и внешним R&D-центром.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-[#003f5c] mb-6">Партнерство вместо подряда</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Мы хотим быть для вас не просто подрядчиком, а долгосрочным партнером и вашим внешним R&D-центром по части клиентского сервиса.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Мы понимаем, что рыночная стоимость разработки подобной кастомной системы в Казахстане составляет от 35,000,000 до 90,000,000 тенге ($80,000 - $200,000+) в зависимости от сложности.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Однако, в рамках стратегического партнерства, мы готовы предложить эксклюзивные условия, которые делают эту инвестицию значительно более доступной.
              </p>
            </div>

            {/* Инфографика этапов реализации */}
            <div className="my-16 flex justify-center">
              <div className="max-w-lg w-full">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/00287c58-5097-444a-8067-3c077b177aee.png" 
                    alt="Этапы реализации проекта: 1. Разработка платформы, 2. Интеграция системы, 3. Обучение клиентов, 4. Запуск платформы, 5. Поддержка и развитие" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="text-center text-slate-500 text-sm mt-4">
                  Поэтапная реализация проекта от разработки до поддержки
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8 border-4 border-blue-200">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-600">Этап 1</div>
                  <h3 className="text-2xl font-bold text-slate-800 mt-2">Совместная разработка и внедрение</h3>
                </div>
                <p className="text-slate-700 mb-6">
                  Мы готовы разработать и полностью адаптировать под ваши бизнес-процессы Личный Кабинет на специальных условиях.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 mb-6">
                  <h4 className="text-xl font-bold text-blue-800 mb-3">Инвестиция в разработку:</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">25,000,000 - 40,000,000 ₸</div>
                  <p className="text-slate-600 text-sm">
                    Итоговая сумма зависит от выбранной скорости реализации и глубины кастомизации.
                  </p>
                </div>
                
                {/* Подробный порядок оплаты */}
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-slate-800 mb-4">Порядок оплаты (транши):</h4>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">30%</span>
                        <h5 className="font-bold text-slate-800">Стартовый платеж</h5>
                      </div>
                      <p className="text-sm text-slate-600 mb-3"><strong>Когда:</strong> После подписания договора</p>
                      <p className="text-sm text-slate-700 mb-3">
                        Этот платеж инициирует проект и покрывает затраты на первый, самый важный этап — создание архитектурного и визуального фундамента будущего продукта.
                      </p>
                      <div className="bg-white p-4 rounded border-l-2 border-blue-200">
                        <h6 className="font-semibold text-slate-800 mb-2">Что включает:</h6>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• <strong>Формирование проектной команды:</strong> Выделение и закрепление ключевых специалистов: менеджера проекта, системного архитектора и UX/UI дизайнера</li>
                          <li>• <strong>Проектирование архитектуры:</strong> Серия воркшопов с вашей командой для изучения бизнес-процессов и создания технической архитектуры</li>
                          <li>• <strong>UX/UI дизайн и прототипирование:</strong> Разработка интерактивных прототипов всех ключевых экранов системы</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">40%</span>
                        <h5 className="font-bold text-slate-800">После демонстрации MVP</h5>
                      </div>
                      <p className="text-sm text-slate-600 mb-3"><strong>Когда:</strong> После разработки и демонстрации рабочей версии</p>
                      <p className="text-sm text-slate-700">
                        Оплата после разработки и демонстрации рабочей версии с ключевым функционалом (например, «Склад и остатки» и «Заказы»).
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">30%</span>
                        <h5 className="font-bold text-slate-800">Финальный платеж</h5>
                      </div>
                      <p className="text-sm text-slate-600 mb-3"><strong>Когда:</strong> После завершения всех работ и запуска</p>
                      <p className="text-sm text-slate-700">
                        После полного завершения всех работ, тестирования и успешного запуска платформы.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 border-4 border-green-200">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600">Этап 2</div>
                  <h3 className="text-2xl font-bold text-slate-800 mt-2">Поддержка и стратегическое развитие</h3>
                </div>
                <p className="text-slate-700 mb-6">
                  После запуска мы не просто «поддерживаем» систему. Мы берем на себя постоянное развитие платформы, ее адаптацию к новым требованиям вашего бизнеса и рынка.
                </p>
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                  <h4 className="text-xl font-bold text-green-800 mb-3">Ежемесячный платеж:</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">$2,500 в месяц</div>
                  <p className="text-slate-600 text-sm mb-3">
                    Срок: Договор заключается на 2 года с возможностью дальнейшего продления.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 border-2 border-purple-200 mb-12">
              <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">
                <span className="text-3xl mr-2">🎯</span>
                Ключевое преимущество нашего ценообразования
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Фиксированная стоимость, неограниченное количество пользователей
                </h4>
                <p className="text-slate-700 mb-4">
                  Предложенная стоимость разработки и поддержки не зависит от количества ваших клиентов, которые будут пользоваться системой. Будет это 10 пользователей или 10 000 — цена останется неизменной.
                </p>
                <p className="text-slate-700">
                  Это возможно при условии размещения платформы на вашей серверной инфраструктуре, что дает вам полный контроль и предсказуемость расходов.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-[#003f5c] mb-6">Что вы получаете за $2500 в месяц?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-50 rounded-lg text-center">
                  <div className="text-4xl mb-4">🔧</div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Не просто поддержку</h4>
                  <p className="text-slate-600">
                    А гарантию того, что ваш продукт будет развиваться, обновляться и всегда оставаться актуальным.
                  </p>
                </div>
                
                <div className="p-6 bg-slate-50 rounded-lg text-center">
                  <div className="text-4xl mb-4">🧠</div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">R&D по запросу</h4>
                  <p className="text-slate-600">
                    Мы будем вашими руками и головой в области улучшения клиентского опыта.
                  </p>
                </div>
                
                <div className="p-6 bg-slate-50 rounded-lg text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Стабильность и предсказуемость</h4>
                  <p className="text-slate-600">
                    Вы получаете высококлассную команду разработки за фиксированную и понятную плату.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Заключение */}
          <section className="my-16">
            <div className="bg-gradient-to-r from-[#003f5c] to-[#7a5195] text-white rounded-lg shadow-xl p-8 max-w-5xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">Заключение: Ценность превосходит цену</h3>
              <p className="text-lg leading-relaxed mb-6">
                Наше предложение — это уникальная возможность получить кастомный продукт высочайшего класса по цене, значительно ниже рыночной, и обеспечить его постоянное развитие в рамках долгосрочного партнерства.
              </p>
              <p className="text-xl font-semibold">
                Это шаг, который превращает MKS-Kusto из сервисной компании в технологического лидера отрасли.
              </p>
            </div>
          </section>
        </div>

        {/* Архитектура интеграции */}
        <div className="border-t-4 border-[#7a5195] mt-20 pt-16">
          <header className="text-center my-8 md:my-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#003f5c]">Архитектура Интеграции</h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Как мы свяжем Личный Кабинет с вашими системами для обеспечения безопасности, гибкости и стабильности.
            </p>
          </header>

          {/* Введение архитектуры */}
          <section className="my-16">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-[#003f5c] mb-6">Введение: Как всё связать?</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Личный Кабинет будет невероятно полезен, но только при условии, что он будет надежно и в реальном времени обмениваться данными с вашими ключевыми системами. Мы предлагаем построить архитектуру, которая обеспечит безопасность, гибкость и стабильность этого обмена, а также сможет поддерживать работу со всеми вашими складами.
              </p>
            </div>
          </section>

          <section className="my-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800">Наша философия: Центральный Хаб</h2>
              <p className="mt-2 text-slate-500 max-w-3xl mx-auto">
                Мы не подключаем клиентов напрямую к вашим внутренним системам. Вместо этого, 
                Личный Кабинет становится изолированным сервисным хабом, как терминал в аэропорту, 
                который управляет всеми потоками данных.
              </p>
            </div>

            {/* Философия центрального хаба */}
            <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-[#003f5c] mb-6">Наша философия: Личный Кабинет как центральный хаб</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Мы не будем подключать клиентов напрямую к вашим внутренним системам. Вместо этого, Личный Кабинет станет центральным сервисным хабом.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Представьте аэропорт. Пассажиры (ваши клиенты) не бегают по летному полю от одного самолета к другому. Они взаимодействуют только с терминалом (Личным Кабинетом). А уже терминал сам управляет посадкой на рейсы (WMS, 1С и т.д.).
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Такой подход решает три главные задачи:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="text-lg font-bold text-[#003f5c] mb-2">Безопасность</h4>
                  <p className="text-slate-700">Внутренние системы полностью изолированы.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="text-lg font-bold text-[#003f5c] mb-2">Управляемость</h4>
                  <p className="text-slate-700">Весь поток данных проходит через одну точку, что легко контролировать.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="text-lg font-bold text-[#003f5c] mb-2">Гибкость</h4>
                  <p className="text-slate-700">Если вы решите поменять, например, CRM-систему, нам нужно будет перенастроить только один «шлюз» к Личному Кабинету, а не переделывать всё с нуля.</p>
                </div>
              </div>
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

          {/* Как это работает на практике */}
          <section className="my-16">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-[#003f5c] mb-6">Как это работает на практике?</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Личный Кабинет будет обмениваться данными с каждой вашей системой по четко определенным правилам:
              </p>
              
              <div className="space-y-8">
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h4 className="text-lg font-bold text-[#003f5c] mb-3">WMS (Склад) ↔ Личный Кабинет</h4>
                  <p className="text-slate-700 mb-3"><strong>Связь:</strong> Двусторонняя, это «сердце» операций.</p>
                  <p className="text-slate-700 mb-2"><strong>Что отдает WMS:</strong> Информацию об остатках, партиях, сроках годности и статусах приемки/отгрузки в разрезе каждого склада.</p>
                  <p className="text-slate-700"><strong>Что получает WMS:</strong> Заявки на отгрузку, поставку и возврат товара, которые теперь содержат конкретный склад, единицы измерения (шт, кор, плт) и объявленную ценность товара для корректного страхования и учета ответственности.</p>
                </div>
                
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h4 className="text-lg font-bold text-[#ef5675] mb-3">1С (Бухгалтерия) → Личный Кабинет</h4>
                  <p className="text-slate-700 mb-3"><strong>Связь:</strong> Односторонняя, это «банк».</p>
                  <p className="text-slate-700"><strong>Что отдает 1С:</strong> Готовые финансовые документы (счета-фактуры, акты) и их статусы оплаты.</p>
                </div>
                
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h4 className="text-lg font-bold text-[#ff764a] mb-3">CRM (Клиенты) ↔ Личный Кабинет</h4>
                  <p className="text-slate-700 mb-3"><strong>Связь:</strong> Двусторонняя, это «адресная книга».</p>
                  <p className="text-slate-700 mb-2"><strong>Что отдает CRM:</strong> Справочник клиентов и их точек доставки.</p>
                  <p className="text-slate-700"><strong>Что получает CRM:</strong> Информацию об активности клиента в ЛК для обогащения его карточки.</p>
                </div>
                
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h4 className="text-lg font-bold text-[#ffa600] mb-3">Сервис маршрутизации ↔ Личный Кабинет</h4>
                  <p className="text-slate-700 mb-3"><strong>Связь:</strong> Двусторонняя, это «навигатор».</p>
                  <p className="text-slate-700 mb-2"><strong>Что получает сервис:</strong> Задачи на доставку с адресами.</p>
                  <p className="text-slate-700"><strong>Что отдает сервис:</strong> Статусы заказа («В пути», «Доставлен») и координаты для отслеживания на карте.</p>
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

          {/* Заключение */}
          <section className="my-16">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-[#003f5c] mb-6">Заключение</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Предлагаемая архитектура — это не просто техническое решение. Это стратегический фундамент, который обеспечивает надежность и безопасность сегодня, и позволяет легко добавлять новые сервисы и функции в будущем, не затрагивая ядро вашего бизнеса.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 py-8 bg-slate-800 text-slate-400 rounded-lg">
          <div className="space-y-2">
            <p>&copy; 2025 Предложение для MKS-Kusto. Цифровая платформа для сервиса клиентам и архитектура интеграции.</p>
            <div className="space-y-1">
              <p>Телефон: +7 702 5400055</p>
              <p>Whatsapp: +7 705 2238899</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
