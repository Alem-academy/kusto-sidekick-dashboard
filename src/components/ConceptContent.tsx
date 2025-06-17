
import { useState } from "react";
import { ConceptHeader } from "./concept/ConceptHeader";
import { StageCard } from "./concept/StageCard";
import { InvestmentCalculator } from "./concept/InvestmentCalculator";
import { PaymentSchedule } from "./concept/PaymentSchedule";

const stages = [
  {
    id: 1,
    title: "Оптимизация текущих процессов",
    duration: "3-6 месяцев",
    investment: "500,000 ₽",
    revenue: "1,200,000 ₽",
    status: "current" as const,
    timeline: "Q1-Q2 2024",
    description: "Автоматизация учета, внедрение CRM-системы, оптимизация логистики для повышения эффективности текущих операций.",
    keyPoints: [
      "Внедрение автоматизированной системы учета товаров и заказов",
      "Интеграция CRM для улучшения работы с клиентами",
      "Оптимизация маршрутов доставки для снижения затрат на логистику",
      "Обучение персонала работе с новыми системами",
      "Анализ и устранение узких мест в текущих процессах"
    ]
  },
  {
    id: 2,
    title: "Расширение ассортимента",
    duration: "6-9 месяцев",
    investment: "1,200,000 ₽",
    revenue: "2,800,000 ₽",
    status: "planned" as const,
    timeline: "Q3-Q4 2024",
    description: "Добавление новых линеек продуктов: натуральные соки премиум-класса, функциональные напитки, детское питание.",
    keyPoints: [
      "Исследование рынка и анализ потребительских предпочтений",
      "Поиск и заключение договоров с новыми поставщиками",
      "Сертификация новых продуктов",
      "Разработка маркетинговой стратегии для новых линеек",
      "Тестирование продуктов с фокус-группами"
    ]
  },
  {
    id: 3,
    title: "Развитие онлайн-продаж",
    duration: "4-8 месяцев",
    investment: "800,000 ₽",
    revenue: "2,200,000 ₽",
    status: "planned" as const,
    timeline: "Q1-Q2 2025",
    description: "Создание интернет-магазина, интеграция с маркетплейсами, развитие доставки для частных клиентов.",
    keyPoints: [
      "Разработка и запуск собственного интернет-магазина",
      "Размещение товаров на популярных маркетплейсах",
      "Организация доставки для физических лиц",
      "Создание программы лояльности для онлайн-клиентов",
      "Digital-маркетинг и продвижение в социальных сетях"
    ]
  }
];

export function ConceptContent() {
  const [expandedStages, setExpandedStages] = useState<number[]>([1]);

  const toggleStage = (stageId: number) => {
    setExpandedStages(prev => 
      prev.includes(stageId) 
        ? prev.filter(id => id !== stageId)
        : [...prev, stageId]
    );
  };

  return (
    <div className="space-y-8 p-6">
      <ConceptHeader />

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Этапы развития</h2>
        {stages.map((stage) => (
          <StageCard
            key={stage.id}
            stage={stage}
            isExpanded={expandedStages.includes(stage.id)}
            onToggle={() => toggleStage(stage.id)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InvestmentCalculator />
        <PaymentSchedule />
      </div>
    </div>
  );
}
