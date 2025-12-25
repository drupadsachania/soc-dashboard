import { FileText, Search, BookOpen, Shield, AlertTriangle, Terminal, Copy } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

const documentationSections = [
  {
    category: "Incident Response",
    icon: AlertTriangle,
    color: "text-soc-critical",
    docs: [
      {
        id: "ir-001",
        title: "Malware Incident Response",
        description: "Comprehensive guide for responding to malware detections",
        tags: ["Critical", "Automated"]
      },
      {
        id: "ir-002",
        title: "Data Breach Response",
        description: "Steps to take when data exfiltration is suspected",
        tags: ["Critical", "Manual"]
      },
      {
        id: "ir-003",
        title: "Ransomware Containment",
        description: "Rapid response procedures for ransomware incidents",
        tags: ["Critical", "Time-Sensitive"]
      }
    ]
  },
  {
    category: "Threat Analysis",
    icon: Shield,
    color: "text-soc-primary",
    docs: [
      {
        id: "ta-001",
        title: "IOC Enrichment Guide",
        description: "How to perform comprehensive IOC analysis",
        tags: ["Analysis", "Tools"]
      },
      {
        id: "ta-002",
        title: "MITRE ATT&CK Mapping",
        description: "Understanding and applying MITRE ATT&CK framework",
        tags: ["Framework", "Reference"]
      },
      {
        id: "ta-003",
        title: "Threat Actor Profiles",
        description: "Known threat actors and their TTPs",
        tags: ["Intelligence", "Reference"]
      }
    ]
  },
  {
    category: "Tools & Commands",
    icon: Terminal,
    color: "text-soc-accent",
    docs: [
      {
        id: "tc-001",
        title: "EDR Command Reference",
        description: "Common EDR commands for investigation and remediation",
        tags: ["Commands", "Quick Reference"]
      },
      {
        id: "tc-002",
        title: "Network Analysis Tools",
        description: "Guide to network traffic analysis and packet capture",
        tags: ["Network", "Analysis"]
      }
    ]
  }
];

const sampleDocument = {
  id: "ir-001",
  title: "Malware Incident Response",
  lastUpdated: "2024-12-01",
  version: "2.3",
  content: {
    overview: "This playbook provides step-by-step guidance for responding to confirmed or suspected malware incidents. It is designed to ensure rapid containment while preserving forensic evidence.",
    scope: "This procedure applies to all malware detections across endpoints, servers, and network devices within the organization.",
    phases: [
      {
        name: "Detection & Triage",
        steps: [
          "Receive alert from EDR/SIEM system",
          "Validate the alert is not a false positive",
          "Classify severity based on asset criticality and malware type",
          "Assign to appropriate tier analyst"
        ]
      },
      {
        name: "Containment",
        steps: [
          "Isolate affected system from network",
          "Preserve memory and disk state for forensics",
          "Identify and isolate additional compromised systems",
          "Block IOCs at network perimeter"
        ]
      },
      {
        name: "Eradication",
        steps: [
          "Remove malware from all affected systems",
          "Patch vulnerabilities that enabled infection",
          "Reset credentials for affected accounts",
          "Verify complete removal with secondary scan"
        ]
      }
    ],
    commands: [
      {
        description: "Isolate endpoint",
        command: "isolate-host --hostname <HOSTNAME> --preserve-evidence"
      },
      {
        description: "Collect artifacts",
        command: "collect-artifacts --host <HOSTNAME> --include memory,disk,logs --output /evidence/<CASE_ID>"
      },
      {
        description: "Block IOC at firewall",
        command: "firewall-block --ip <MALICIOUS_IP> --duration permanent"
      }
    ]
  }
};

export function DocumentationView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-soc-foreground mb-2">Documentation & Playbooks</h2>
        <p className="text-sm text-soc-muted">
          Access comprehensive guides, procedures, and reference materials without leaving the console.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Documentation Index */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="p-4 bg-soc-card border-soc-border">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-soc-muted" />
              <Input
                placeholder="Search documentation..."
                className="pl-10 bg-soc-input border-soc-border"
              />
            </div>

            <div className="space-y-4">
              {documentationSections.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.category}>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className={`w-4 h-4 ${section.color}`} />
                      <h4 className="text-sm text-soc-foreground">{section.category}</h4>
                    </div>
                    <div className="space-y-2 ml-6">
                      {section.docs.map((doc) => (
                        <button
                          key={doc.id}
                          className="w-full text-left p-2 rounded hover:bg-soc-hover transition-colors group"
                        >
                          <p className="text-sm text-soc-foreground group-hover:text-soc-primary transition-colors">
                            {doc.title}
                          </p>
                          <p className="text-xs text-soc-muted truncate">{doc.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Document Viewer */}
        <Card className="lg:col-span-2 bg-soc-card border-soc-border">
          <div className="p-6 border-b border-soc-border">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-soc-critical/10">
                  <BookOpen className="w-5 h-5 text-soc-critical" />
                </div>
                <div>
                  <h3 className="text-soc-foreground">{sampleDocument.title}</h3>
                  <p className="text-sm text-soc-muted">
                    Version {sampleDocument.version} • Updated {sampleDocument.lastUpdated}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-soc-border">
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
            </div>
          </div>

          <div className="p-6 max-h-[600px] overflow-y-auto">
            <Tabs defaultValue="guide" className="w-full">
              <TabsList className="bg-soc-surface border border-soc-border mb-6">
                <TabsTrigger value="guide">Guide</TabsTrigger>
                <TabsTrigger value="commands">Commands</TabsTrigger>
                <TabsTrigger value="reference">Quick Reference</TabsTrigger>
              </TabsList>

              <TabsContent value="guide" className="space-y-6">
                {/* Overview */}
                <div>
                  <h4 className="text-soc-foreground mb-2">Overview</h4>
                  <p className="text-sm text-soc-muted leading-relaxed">
                    {sampleDocument.content.overview}
                  </p>
                </div>

                {/* Scope */}
                <div className="p-4 rounded-lg bg-soc-surface/50 border-l-2 border-soc-primary">
                  <h4 className="text-soc-foreground mb-2">Scope</h4>
                  <p className="text-sm text-soc-muted leading-relaxed">
                    {sampleDocument.content.scope}
                  </p>
                </div>

                {/* Phases */}
                <div>
                  <h4 className="text-soc-foreground mb-4">Response Phases</h4>
                  <div className="space-y-4">
                    {sampleDocument.content.phases.map((phase, idx) => (
                      <Card key={idx} className="p-4 bg-soc-surface/30 border-soc-border">
                        <h5 className="text-soc-foreground mb-3">
                          Phase {idx + 1}: {phase.name}
                        </h5>
                        <ol className="space-y-2">
                          {phase.steps.map((step, sidx) => (
                            <li key={sidx} className="text-sm text-soc-muted flex gap-3">
                              <span className="text-soc-primary font-mono">{sidx + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="commands" className="space-y-4">
                <div className="p-4 rounded-lg bg-soc-warning/10 border-l-2 border-soc-warning mb-6">
                  <p className="text-sm text-soc-foreground">
                    <strong>⚠️ Important:</strong> Always verify system requirements and permissions before executing commands.
                  </p>
                </div>

                {sampleDocument.content.commands.map((cmd, idx) => (
                  <Card key={idx} className="p-4 bg-soc-surface/30 border-soc-border">
                    <div className="flex items-start justify-between mb-3">
                      <h5 className="text-sm text-soc-foreground">{cmd.description}</h5>
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                    <code className="block px-3 py-2 bg-soc-hover rounded text-sm font-mono text-soc-foreground">
                      {cmd.command}
                    </code>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reference" className="space-y-4">
                <Card className="p-4 bg-soc-surface/30 border-soc-border">
                  <h5 className="text-soc-foreground mb-3">Severity Classification</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-soc-critical text-white w-20">Critical</Badge>
                      <p className="text-sm text-soc-muted">Imminent threat to critical systems</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-soc-high text-white w-20">High</Badge>
                      <p className="text-sm text-soc-muted">Confirmed malicious activity</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-soc-warning text-white w-20">Medium</Badge>
                      <p className="text-sm text-soc-muted">Suspicious activity requiring investigation</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-soc-success text-white w-20">Low</Badge>
                      <p className="text-sm text-soc-muted">Policy violations or anomalies</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-soc-surface/30 border-soc-border">
                  <h5 className="text-soc-foreground mb-3">Response Time SLAs</h5>
                  <div className="space-y-2 text-sm text-soc-muted">
                    <p>• Critical: 15 minutes</p>
                    <p>• High: 1 hour</p>
                    <p>• Medium: 4 hours</p>
                    <p>• Low: 24 hours</p>
                  </div>
                </Card>

                <Card className="p-4 bg-soc-surface/30 border-soc-border">
                  <h5 className="text-soc-foreground mb-3">Escalation Contacts</h5>
                  <div className="space-y-2 text-sm text-soc-muted">
                    <p>• Tier 2 SOC: ext. 2345</p>
                    <p>• Incident Commander: ext. 3456</p>
                    <p>• CISO Office: ext. 4567</p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </Card>
      </div>
    </div>
  );
}
