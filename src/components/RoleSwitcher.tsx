
import { Button } from "@/components/ui/button";

interface RoleSwitcherProps {
  activeRole: string;
  onRoleChange: (role: string) => void;
}

export function RoleSwitcher({ activeRole, onRoleChange }: RoleSwitcherProps) {
  const roles = [
    { id: "director", label: "Руководитель" },
    { id: "accountant", label: "Бухгалтер" },
    { id: "logistician", label: "Логист" }
  ];

  return (
    <div className="flex gap-2 mb-6">
      {roles.map((role) => (
        <Button
          key={role.id}
          variant={activeRole === role.id ? "default" : "outline"}
          onClick={() => onRoleChange(role.id)}
          className="text-sm"
        >
          {role.label}
        </Button>
      ))}
    </div>
  );
}
