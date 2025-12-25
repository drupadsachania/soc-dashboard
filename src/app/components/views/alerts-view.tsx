import { AlertCard } from "../alert-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Badge } from "../ui/badge";

const mockAlerts = [
  {
    id: "ALT-2024-001",
    title: "Suspicious PowerShell Execution Detected",
    severity: "critical" as const,
    timestamp: "2 min ago",
    source: "EDR",
    tags: ["powershell", "execution", "privilege-escalation"],
    similarityScore: 87,
    description: "PowerShell script executed with suspicious parameters attempting to download and execute remote payload from known malicious domain.",
    iocs: [
      { type: "IP", value: "192.168.45.231" },
      { type: "Domain", value: "malicious-site.example.com" },
      { type: "Hash", value: "a3d5c8f9e2b1..." }
    ],
    recommendation: "Isolate the affected endpoint immediately and initiate incident response playbook IR-001."
  },
  {
    id: "ALT-2024-002",
    title: "Multiple Failed Login Attempts",
    severity: "high" as const,
    timestamp: "8 min ago",
    source: "SIEM",
    tags: ["authentication", "brute-force", "user-account"],
    similarityScore: 92,
    description: "Detected 47 failed login attempts from multiple source IPs targeting admin accounts within 5-minute window.",
    iocs: [
      { type: "IP", value: "203.0.113.42" },
      { type: "IP", value: "198.51.100.15" },
      { type: "Username", value: "admin" }
    ],
    recommendation: "Enable account lockout policy and review authentication logs for pattern analysis."
  },
  {
    id: "ALT-2024-003",
    title: "Unusual Outbound Network Traffic",
    severity: "high" as const,
    timestamp: "15 min ago",
    source: "Network Monitor",
    tags: ["network", "data-exfiltration", "c2"],
    description: "Abnormal data transfer volume detected to unknown external IP address during non-business hours.",
    iocs: [
      { type: "IP", value: "185.220.101.67" },
      { type: "Port", value: "443" }
    ],
    recommendation: "Block the IP at firewall level and investigate the source workstation."
  },
  {
    id: "ALT-2024-004",
    title: "Malware Signature Match",
    severity: "critical" as const,
    timestamp: "22 min ago",
    source: "Antivirus",
    tags: ["malware", "trojan", "file-system"],
    similarityScore: 95,
    description: "Known trojan signature detected in downloaded file. File was quarantined automatically.",
    iocs: [
      { type: "Hash", value: "b8c4f3a2d9e7..." },
      { type: "File", value: "invoice_2024.exe" }
    ],
    recommendation: "Scan all network shares for similar signatures and review email gateway logs."
  },
  {
    id: "ALT-2024-005",
    title: "Privilege Escalation Attempt",
    severity: "medium" as const,
    timestamp: "35 min ago",
    source: "Host Monitor",
    tags: ["privilege-escalation", "user-behavior"],
    description: "User account attempted to access restricted system files without proper authorization.",
    recommendation: "Review user permissions and audit access control policies."
  },
  {
    id: "ALT-2024-006",
    title: "Phishing Email Detected",
    severity: "medium" as const,
    timestamp: "42 min ago",
    source: "Email Gateway",
    tags: ["phishing", "email", "social-engineering"],
    description: "Email with malicious attachment identified and quarantined before delivery.",
    recommendation: "Update email filtering rules and notify affected users."
  },
];

export function AlertsView() {
  const criticalCount = mockAlerts.filter(a => a.severity === "critical").length;
  const highCount = mockAlerts.filter(a => a.severity === "high").length;
  const mediumCount = mockAlerts.filter(a => a.severity === "medium").length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-soc-foreground mb-2">Active Alerts</h2>
        <p className="text-sm text-soc-muted">
          Monitor and investigate security alerts. Each alert includes context, IOCs, and recommended actions.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-soc-surface border border-soc-border">
          <TabsTrigger value="all" className="data-[state=active]:bg-soc-hover">
            All Alerts
            <Badge className="ml-2 bg-soc-primary text-white">{mockAlerts.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="critical" className="data-[state=active]:bg-soc-hover">
            Critical
            <Badge className="ml-2 bg-soc-critical text-white">{criticalCount}</Badge>
          </TabsTrigger>
          <TabsTrigger value="high" className="data-[state=active]:bg-soc-hover">
            High
            <Badge className="ml-2 bg-soc-high text-white">{highCount}</Badge>
          </TabsTrigger>
          <TabsTrigger value="medium" className="data-[state=active]:bg-soc-hover">
            Medium
            <Badge className="ml-2 bg-soc-warning text-white">{mediumCount}</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6 space-y-4">
          {mockAlerts.map((alert) => (
            <AlertCard key={alert.id} {...alert} />
          ))}
        </TabsContent>

        <TabsContent value="critical" className="mt-6 space-y-4">
          {mockAlerts.filter(a => a.severity === "critical").map((alert) => (
            <AlertCard key={alert.id} {...alert} />
          ))}
        </TabsContent>

        <TabsContent value="high" className="mt-6 space-y-4">
          {mockAlerts.filter(a => a.severity === "high").map((alert) => (
            <AlertCard key={alert.id} {...alert} />
          ))}
        </TabsContent>

        <TabsContent value="medium" className="mt-6 space-y-4">
          {mockAlerts.filter(a => a.severity === "medium").map((alert) => (
            <AlertCard key={alert.id} {...alert} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
