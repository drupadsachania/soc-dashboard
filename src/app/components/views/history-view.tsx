import { Clock, Filter, Download, ChevronRight } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { cn } from "../ui/utils";

const timelineData = [
  { time: "00:00", events: 12 },
  { time: "02:00", events: 8 },
  { time: "04:00", events: 5 },
  { time: "06:00", events: 15 },
  { time: "08:00", events: 34 },
  { time: "10:00", events: 28 },
  { time: "12:00", events: 31 },
  { time: "14:00", events: 42 },
  { time: "16:00", events: 38 },
  { time: "18:00", events: 25 },
  { time: "20:00", events: 18 },
  { time: "22:00", events: 14 },
];

const historyEvents = [
  {
    id: "EVT-2024-152",
    timestamp: "2024-12-13 14:42:09",
    type: "Alert Resolved",
    severity: "critical",
    description: "Malware incident ALT-2024-001 successfully remediated",
    user: "J. Smith",
    details: "Endpoint cleaned, malware removed, system restored"
  },
  {
    id: "EVT-2024-151",
    timestamp: "2024-12-13 14:25:33",
    type: "Playbook Completed",
    severity: "info",
    description: "IR-001 Malware Incident Response completed",
    user: "System",
    details: "All automated steps executed successfully"
  },
  {
    id: "EVT-2024-150",
    timestamp: "2024-12-13 14:15:22",
    type: "IOC Blocked",
    severity: "high",
    description: "Malicious IP 192.168.45.231 blocked at perimeter",
    user: "Firewall",
    details: "Rule added to firewall, effective immediately"
  },
  {
    id: "EVT-2024-149",
    timestamp: "2024-12-13 13:58:11",
    type: "Alert Acknowledged",
    severity: "high",
    description: "Alert ALT-2024-002 assigned to analyst",
    user: "M. Chen",
    details: "Investigation in progress"
  },
  {
    id: "EVT-2024-148",
    timestamp: "2024-12-13 13:42:45",
    type: "Enrichment Complete",
    severity: "info",
    description: "Threat intelligence gathered for IOC investigation",
    user: "ThreatIntel",
    details: "15 related IOCs identified, risk score: 87"
  },
  {
    id: "EVT-2024-147",
    timestamp: "2024-12-13 13:28:19",
    type: "Alert Triggered",
    severity: "medium",
    description: "Unusual network traffic detected",
    user: "SIEM",
    details: "Source: 10.0.5.23, Destination: external"
  },
  {
    id: "EVT-2024-146",
    timestamp: "2024-12-13 12:55:33",
    type: "Policy Updated",
    severity: "info",
    description: "Detection rule DR-2301 updated",
    user: "A. Rodriguez",
    details: "Threshold adjusted to reduce false positives"
  },
  {
    id: "EVT-2024-145",
    timestamp: "2024-12-13 12:33:08",
    type: "Alert Resolved",
    severity: "medium",
    description: "Phishing email investigation closed",
    user: "J. Smith",
    details: "Email quarantined, users notified"
  },
];

const severityColors = {
  critical: "text-soc-critical",
  high: "text-soc-high",
  medium: "text-soc-warning",
  info: "text-soc-primary",
  low: "text-soc-success"
};

export function HistoryView() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-soc-foreground mb-2">Activity History</h2>
          <p className="text-sm text-soc-muted">
            Complete audit trail of all security events, actions, and decisions.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-soc-border">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="border-soc-border">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Timeline Chart */}
      <Card className="p-6 bg-soc-card border-soc-border">
        <div className="mb-6">
          <h3 className="text-soc-foreground mb-1">Event Timeline (24h)</h3>
          <p className="text-sm text-soc-muted">Hourly event distribution</p>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={timelineData}>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
            <XAxis dataKey="time" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1a1a24', 
                border: '1px solid #2a2a3a',
                borderRadius: '8px',
                color: '#e5e7eb'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="events" 
              stroke="#6366f1" 
              strokeWidth={2}
              fill="url(#lineGradient)"
              dot={{ fill: '#6366f1', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Events Table */}
      <Card className="bg-soc-card border-soc-border overflow-hidden">
        <div className="p-4 border-b border-soc-border">
          <h3 className="text-soc-foreground">Recent Events</h3>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-soc-border hover:bg-transparent">
                <TableHead className="text-soc-muted">Event ID</TableHead>
                <TableHead className="text-soc-muted">Timestamp</TableHead>
                <TableHead className="text-soc-muted">Type</TableHead>
                <TableHead className="text-soc-muted">Description</TableHead>
                <TableHead className="text-soc-muted">User/Source</TableHead>
                <TableHead className="text-soc-muted"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historyEvents.map((event) => (
                <>
                  <TableRow 
                    key={event.id}
                    className={cn(
                      "border-soc-border cursor-pointer transition-colors",
                      selectedEvent === event.id ? "bg-soc-hover" : "hover:bg-soc-surface/50"
                    )}
                    onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                  >
                    <TableCell className="font-mono text-sm text-soc-foreground">
                      {event.id}
                    </TableCell>
                    <TableCell className="text-sm text-soc-muted">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {event.timestamp}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "text-xs",
                          severityColors[event.severity as keyof typeof severityColors]
                        )}
                      >
                        {event.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-soc-foreground max-w-md truncate">
                      {event.description}
                    </TableCell>
                    <TableCell className="text-sm text-soc-muted">
                      {event.user}
                    </TableCell>
                    <TableCell>
                      <ChevronRight className={cn(
                        "w-4 h-4 text-soc-muted transition-transform",
                        selectedEvent === event.id && "rotate-90"
                      )} />
                    </TableCell>
                  </TableRow>
                  {selectedEvent === event.id && (
                    <TableRow className="border-soc-border bg-soc-surface/50 hover:bg-soc-surface/50">
                      <TableCell colSpan={6} className="p-4">
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs text-soc-muted mb-1">Full Details</p>
                            <p className="text-sm text-soc-foreground">{event.details}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="border-soc-border">
                              View Related Events
                            </Button>
                            <Button size="sm" variant="outline" className="border-soc-border">
                              Export Event
                            </Button>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Context Panel */}
      <Card className="p-6 bg-soc-card border-soc-border border-l-4 border-l-soc-accent">
        <h4 className="text-soc-foreground mb-3">Understanding the Activity Log</h4>
        <div className="space-y-3 text-sm">
          <div>
            <strong className="text-soc-foreground">What This Shows:</strong>
            <p className="text-soc-muted mt-1">
              The activity history provides a complete audit trail of all security-related events, including
              alerts, analyst actions, automated responses, and system changes.
            </p>
          </div>
          <div>
            <strong className="text-soc-foreground">Why It Matters:</strong>
            <p className="text-soc-muted mt-1">
              This timeline helps you understand the sequence of events during incidents, validate that
              procedures were followed, and identify patterns that may indicate emerging threats.
            </p>
          </div>
          <div>
            <strong className="text-soc-foreground">Best Practices:</strong>
            <p className="text-soc-muted mt-1">
              • Review daily for unusual patterns<br />
              • Export logs for compliance audits<br />
              • Cross-reference with playbook execution times<br />
              • Document decisions in event notes
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
