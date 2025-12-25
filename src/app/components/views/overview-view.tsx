import { AlertTriangle, Shield, TrendingUp, Activity, Clock } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const alertTrendData = [
  { time: "00:00", critical: 4, high: 12, medium: 23, low: 8 },
  { time: "04:00", critical: 2, high: 8, medium: 18, low: 12 },
  { time: "08:00", critical: 7, high: 15, medium: 31, low: 15 },
  { time: "12:00", critical: 3, high: 11, medium: 25, low: 10 },
  { time: "16:00", critical: 5, high: 19, medium: 28, low: 14 },
  { time: "20:00", critical: 8, high: 22, medium: 35, low: 18 },
];

const severityDistribution = [
  { name: "Critical", value: 29, color: "#ef4444" },
  { name: "High", value: 87, color: "#f97316" },
  { name: "Medium", value: 160, color: "#eab308" },
  { name: "Low", value: 77, color: "#22c55e" },
];

const recentActivity = [
  { id: 1, action: "Alert acknowledged", user: "J. Smith", time: "2 min ago", type: "info" },
  { id: 2, action: "Playbook executed", user: "System", time: "5 min ago", type: "success" },
  { id: 3, action: "Critical alert triggered", user: "SIEM", time: "8 min ago", type: "critical" },
  { id: 4, action: "IOC enrichment completed", user: "ThreatIntel", time: "12 min ago", type: "info" },
  { id: 5, action: "Incident resolved", user: "M. Chen", time: "15 min ago", type: "success" },
];

export function OverviewView() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 bg-soc-card border-soc-border hover:shadow-lg hover:shadow-soc-critical/5 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-soc-critical/10">
              <AlertTriangle className="w-6 h-6 text-soc-critical" />
            </div>
            <Badge className="bg-soc-critical/20 text-soc-critical border-0">+12%</Badge>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-soc-muted">Active Alerts</p>
            <h3 className="text-3xl text-soc-foreground">353</h3>
            <p className="text-xs text-soc-muted">29 critical, 87 high</p>
          </div>
        </Card>

        <Card className="p-6 bg-soc-card border-soc-border hover:shadow-lg hover:shadow-soc-primary/5 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-soc-primary/10">
              <Shield className="w-6 h-6 text-soc-primary" />
            </div>
            <Badge className="bg-soc-success/20 text-soc-success border-0">98.2%</Badge>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-soc-muted">Security Posture</p>
            <h3 className="text-3xl text-soc-foreground">Strong</h3>
            <p className="text-xs text-soc-muted">All systems monitored</p>
          </div>
        </Card>

        <Card className="p-6 bg-soc-card border-soc-border hover:shadow-lg hover:shadow-soc-primary/5 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-soc-accent/10">
              <TrendingUp className="w-6 h-6 text-soc-accent" />
            </div>
            <Badge className="bg-soc-warning/20 text-soc-warning border-0">-8%</Badge>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-soc-muted">MTTR</p>
            <h3 className="text-3xl text-soc-foreground">24m</h3>
            <p className="text-xs text-soc-muted">Mean time to resolve</p>
          </div>
        </Card>

        <Card className="p-6 bg-soc-card border-soc-border hover:shadow-lg hover:shadow-soc-primary/5 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-soc-success/10">
              <Activity className="w-6 h-6 text-soc-success" />
            </div>
            <Badge className="bg-soc-success/20 text-soc-success border-0">Active</Badge>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-soc-muted">Analysts Online</p>
            <h3 className="text-3xl text-soc-foreground">8</h3>
            <p className="text-xs text-soc-muted">Across 3 shifts</p>
          </div>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alert Trend */}
        <Card className="col-span-2 p-6 bg-soc-card border-soc-border">
          <div className="mb-6">
            <h3 className="text-soc-foreground mb-1">Alert Trend (24h)</h3>
            <p className="text-sm text-soc-muted">Real-time alert volume by severity</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={alertTrendData}>
              <defs>
                <linearGradient id="criticalGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="highGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
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
              <Area type="monotone" dataKey="critical" stroke="#ef4444" fillOpacity={1} fill="url(#criticalGradient)" />
              <Area type="monotone" dataKey="high" stroke="#f97316" fillOpacity={1} fill="url(#highGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Severity Distribution */}
        <Card className="p-6 bg-soc-card border-soc-border">
          <div className="mb-6">
            <h3 className="text-soc-foreground mb-1">By Severity</h3>
            <p className="text-sm text-soc-muted">Current distribution</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={severityDistribution} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
              <XAxis type="number" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis dataKey="name" type="category" stroke="#6b7280" style={{ fontSize: '12px' }} width={60} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a24', 
                  border: '1px solid #2a2a3a',
                  borderRadius: '8px',
                  color: '#e5e7eb'
                }} 
              />
              <Bar dataKey="value" fill="#6366f1" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6 bg-soc-card border-soc-border">
        <div className="mb-4">
          <h3 className="text-soc-foreground mb-1">Recent Activity</h3>
          <p className="text-sm text-soc-muted">Latest actions and events across the SOC</p>
        </div>
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg bg-soc-surface/50 hover:bg-soc-hover transition-colors">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'critical' ? 'bg-soc-critical' :
                activity.type === 'success' ? 'bg-soc-success' :
                'bg-soc-primary'
              }`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-soc-foreground">{activity.action}</p>
                <p className="text-xs text-soc-muted">by {activity.user}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-soc-muted">
                <Clock className="w-3 h-3" />
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
