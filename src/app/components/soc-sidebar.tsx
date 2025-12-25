import { 
  LayoutDashboard, 
  AlertTriangle, 
  Database, 
  History, 
  BookOpen, 
  FileText, 
  Settings,
  ChevronLeft,
  Shield
} from "lucide-react";
import { cn } from "./ui/utils";
import { motion } from "motion/react";

interface SOCSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "alerts", label: "Alerts", icon: AlertTriangle },
  { id: "enrichment", label: "Enrichment", icon: Database },
  { id: "history", label: "History", icon: History },
  { id: "playbooks", label: "Playbooks", icon: BookOpen },
  { id: "documentation", label: "Documentation", icon: FileText },
  { id: "settings", label: "Settings", icon: Settings },
];

export function SOCSidebar({ activeSection, onSectionChange, collapsed, onToggleCollapse }: SOCSidebarProps) {
  return (
    <motion.div
      className={cn(
        "h-screen bg-soc-sidebar border-r border-soc-border flex flex-col relative",
        "transition-all duration-300"
      )}
      initial={false}
      animate={{ width: collapsed ? 80 : 256 }}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-soc-border">
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-soc-primary to-soc-accent flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-soc-foreground">SOC Console</span>
          </motion.div>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-soc-primary to-soc-accent flex items-center justify-center mx-auto">
            <Shield className="w-5 h-5 text-white" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all",
                "hover:bg-soc-hover",
                isActive && "bg-soc-active text-soc-primary",
                !isActive && "text-soc-muted hover:text-soc-foreground",
                collapsed && "justify-center"
              )}
            >
              <Icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-soc-primary")} />
              {!collapsed && (
                <span className="text-sm">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={onToggleCollapse}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-soc-sidebar border border-soc-border flex items-center justify-center hover:bg-soc-hover transition-colors"
      >
        <ChevronLeft className={cn(
          "w-4 h-4 text-soc-muted transition-transform",
          collapsed && "rotate-180"
        )} />
      </button>
    </motion.div>
  );
}
