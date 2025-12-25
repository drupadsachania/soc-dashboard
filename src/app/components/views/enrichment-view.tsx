import { Database, Globe, Shield, TrendingUp, Copy, ExternalLink, Info } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { useState } from "react";

const iocData = {
  ip: "192.168.45.231",
  type: "IPv4",
  firstSeen: "2024-12-10 08:23:14 UTC",
  lastSeen: "2024-12-13 14:42:09 UTC",
  reputation: "Malicious",
  riskScore: 87,
  threatCategories: ["C2 Server", "Malware Distribution", "Phishing"],
  geolocation: {
    country: "Russia",
    city: "Moscow",
    asn: "AS12345",
    organization: "Unknown Hosting Provider"
  },
  relatedDomains: [
    "malicious-site.example.com",
    "phishing-portal.example.net",
    "c2-server.example.org"
  ],
  associatedMalware: [
    { name: "TrojanLoader.X", family: "Trojan", confidence: 95 },
    { name: "Ransomware.Payload", family: "Ransomware", confidence: 82 }
  ],
  mitreTactics: [
    { id: "TA0001", name: "Initial Access", techniques: ["T1566 - Phishing"] },
    { id: "TA0011", name: "Command and Control", techniques: ["T1071 - Application Layer Protocol"] }
  ]
};

export function EnrichmentView() {
  const [docsExpanded, setDocsExpanded] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-soc-foreground mb-2">Threat Intelligence & Enrichment</h2>
        <p className="text-sm text-soc-muted">
          Deep dive into IOCs with contextual threat intelligence and MITRE ATT&CK mapping.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main IOC Details */}
        <Card className="lg:col-span-2 p-6 bg-soc-card border-soc-border">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-soc-critical/10">
                  <Globe className="w-5 h-5 text-soc-critical" />
                </div>
                <div>
                  <h3 className="text-soc-foreground">IP Address Analysis</h3>
                  <code className="text-sm text-soc-muted font-mono">{iocData.ip}</code>
                </div>
              </div>
            </div>
            <Badge className="bg-soc-critical/20 text-soc-critical border-soc-critical">
              Risk Score: {iocData.riskScore}
            </Badge>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-lg bg-soc-surface/50">
            <div>
              <p className="text-xs text-soc-muted mb-1">Type</p>
              <p className="text-sm text-soc-foreground">{iocData.type}</p>
            </div>
            <div>
              <p className="text-xs text-soc-muted mb-1">Reputation</p>
              <Badge className="bg-soc-critical/20 text-soc-critical">{iocData.reputation}</Badge>
            </div>
            <div>
              <p className="text-xs text-soc-muted mb-1">First Seen</p>
              <p className="text-sm text-soc-foreground">{iocData.firstSeen}</p>
            </div>
            <div>
              <p className="text-xs text-soc-muted mb-1">Last Seen</p>
              <p className="text-sm text-soc-foreground">{iocData.lastSeen}</p>
            </div>
          </div>

          {/* Threat Categories */}
          <div className="mb-6">
            <h4 className="text-sm text-soc-muted mb-3">Threat Categories</h4>
            <div className="flex flex-wrap gap-2">
              {iocData.threatCategories.map((category, idx) => (
                <Badge key={idx} className="bg-soc-high/20 text-soc-high border-soc-high">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Geolocation */}
          <div className="mb-6">
            <h4 className="text-sm text-soc-muted mb-3">Geolocation</h4>
            <div className="grid grid-cols-2 gap-3 p-4 rounded-lg bg-soc-surface/50">
              <div>
                <p className="text-xs text-soc-muted">Country</p>
                <p className="text-sm text-soc-foreground">{iocData.geolocation.country}</p>
              </div>
              <div>
                <p className="text-xs text-soc-muted">City</p>
                <p className="text-sm text-soc-foreground">{iocData.geolocation.city}</p>
              </div>
              <div>
                <p className="text-xs text-soc-muted">ASN</p>
                <p className="text-sm text-soc-foreground">{iocData.geolocation.asn}</p>
              </div>
              <div>
                <p className="text-xs text-soc-muted">Organization</p>
                <p className="text-sm text-soc-foreground">{iocData.geolocation.organization}</p>
              </div>
            </div>
          </div>

          {/* Related Domains */}
          <div className="mb-6">
            <h4 className="text-sm text-soc-muted mb-3">Related Domains</h4>
            <div className="space-y-2">
              {iocData.relatedDomains.map((domain, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded bg-soc-surface/50 hover:bg-soc-hover transition-colors">
                  <code className="flex-1 text-sm font-mono text-soc-foreground">{domain}</code>
                  <Button variant="ghost" size="sm" className="h-7 px-2">
                    <Copy className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 px-2">
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Associated Malware */}
          <div>
            <h4 className="text-sm text-soc-muted mb-3">Associated Malware</h4>
            <div className="space-y-2">
              {iocData.associatedMalware.map((malware, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-soc-surface/50">
                  <div>
                    <p className="text-sm text-soc-foreground">{malware.name}</p>
                    <p className="text-xs text-soc-muted">Family: {malware.family}</p>
                  </div>
                  <Badge className="bg-soc-warning/20 text-soc-warning">
                    {malware.confidence}% confidence
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* MITRE ATT&CK & Context */}
        <div className="space-y-6">
          {/* MITRE ATT&CK */}
          <Card className="p-6 bg-soc-card border-soc-border">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-soc-accent" />
              <h3 className="text-soc-foreground">MITRE ATT&CK</h3>
            </div>
            <div className="space-y-3">
              {iocData.mitreTactics.map((tactic, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-soc-surface/50">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{tactic.id}</Badge>
                  </div>
                  <p className="text-sm text-soc-foreground mb-2">{tactic.name}</p>
                  <div className="space-y-1">
                    {tactic.techniques.map((technique, tidx) => (
                      <p key={tidx} className="text-xs text-soc-muted">• {technique}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Embedded Documentation */}
          <Card className="p-6 bg-soc-card border-soc-border">
            <Collapsible open={docsExpanded} onOpenChange={setDocsExpanded}>
              <CollapsibleTrigger className="flex items-center justify-between w-full mb-4 hover:text-soc-primary transition-colors">
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-soc-accent" />
                  <h3 className="text-soc-foreground">Why This Matters</h3>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-lg bg-soc-surface/30 border-l-2 border-soc-accent">
                    <h4 className="text-soc-foreground mb-2">What Happened</h4>
                    <p className="text-soc-muted">
                      This IP address has been identified as a known C2 (Command & Control) server associated with multiple malware families.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-soc-surface/30 border-l-2 border-soc-warning">
                    <h4 className="text-soc-foreground mb-2">Impact</h4>
                    <p className="text-soc-muted">
                      Communication with this IP indicates potential compromise. Immediate investigation required.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-soc-surface/30 border-l-2 border-soc-success">
                    <h4 className="text-soc-foreground mb-2">Next Steps</h4>
                    <p className="text-soc-muted">
                      1. Block IP at perimeter<br />
                      2. Identify affected hosts<br />
                      3. Execute playbook IR-003
                    </p>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>
      </div>
    </div>
  );
}
