import { 
  Home, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  FileText, 
  User, 
  Menu,
  Building2
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: "dashboard", title: "Главная", icon: Home },
  { id: "warehouse", title: "Склад и остатки", icon: Package },
  { id: "orders", title: "Заказы и доставка", icon: ShoppingCart },
  { id: "reports", title: "Отчеты", icon: BarChart3 },
  { id: "documents", title: "Документы", icon: FileText },
  { id: "profile", title: "Профиль и поддержка", icon: User },
];

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} border-r border-gray-200 bg-white shadow-sm`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-semibold text-gray-900">ИП "Соки и напитки"</h2>
              <p className="text-sm text-gray-500">Личный кабинет</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className={`${collapsed ? "sr-only" : ""} text-gray-500 text-xs uppercase tracking-wider font-medium mb-2`}>
            Навигация
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                      ${activeSection === item.id
                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                  >
                    <item.icon className={`w-5 h-5 ${activeSection === item.id ? "text-blue-600" : ""}`} />
                    {!collapsed && (
                      <span className="font-medium">{item.title}</span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="mt-auto p-3 border-t border-gray-200">
        <SidebarTrigger className="w-full flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          <Menu className="w-5 h-5" />
        </SidebarTrigger>
      </div>
    </Sidebar>
  );
}
