import { useState } from "react";
import { SOCSidebar } from "./components/soc-sidebar";
import { SOCTopBar } from "./components/soc-topbar";
import { OverviewView } from "./components/views/overview-view";
import { AlertsView } from "./components/views/alerts-view";
import { EnrichmentView } from "./components/views/enrichment-view";
import { HistoryView } from "./components/views/history-view";
import { PlaybooksView } from "./components/views/playbooks-view";
import { DocumentationView } from "./components/views/documentation-view";
import { SettingsView } from "./components/views/settings-view";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderView = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewView />;
      case "alerts":
        return <AlertsView />;
      case "enrichment":
        return <EnrichmentView />;
      case "history":
        return <HistoryView />;
      case "playbooks":
        return <PlaybooksView />;
      case "documentation":
        return <DocumentationView />;
      case "settings":
        return <SettingsView />;
      default:
        return <OverviewView />;
    }
  };

  return (
    <div className="dark min-h-screen bg-soc-background flex">
      {/* Sidebar */}
      <SOCSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <SOCTopBar />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-[1800px] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
