import { Search, Bell, User, Command } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { cn } from "./ui/utils";

interface SOCTopBarProps {
  onSearchFocus?: () => void;
}

export function SOCTopBar({ onSearchFocus }: SOCTopBarProps) {
  return (
    <div className="h-16 border-b border-soc-border bg-soc-surface flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-soc-muted" />
          <Input
            placeholder="Search alerts, IOCs, documentation..."
            className="pl-10 pr-20 bg-soc-input border-soc-border text-soc-foreground placeholder:text-soc-muted"
            onFocus={onSearchFocus}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 text-xs bg-soc-hover border border-soc-border rounded">
              <Command className="w-3 h-3 inline" />
            </kbd>
            <kbd className="px-1.5 py-0.5 text-xs bg-soc-hover border border-soc-border rounded">K</kbd>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 ml-6">
        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-soc-hover transition-colors">
          <Bell className="w-5 h-5 text-soc-muted" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-soc-critical text-white text-xs">
            3
          </Badge>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-soc-border">
          <div className="text-right">
            <div className="text-sm text-soc-foreground">Admin User</div>
            <div className="text-xs text-soc-muted">Security Analyst</div>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-soc-primary to-soc-accent flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
