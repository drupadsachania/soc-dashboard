import { Settings, Bell, Shield, Users, Database, Palette } from "lucide-react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

export function SettingsView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-soc-foreground mb-2">Settings</h2>
        <p className="text-sm text-soc-muted">
          Configure console preferences, notifications, and integrations.
        </p>
      </div>

      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="bg-soc-surface border border-soc-border">
          <TabsTrigger value="notifications" className="data-[state=active]:bg-soc-hover">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-soc-hover">
            <Shield className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="team" className="data-[state=active]:bg-soc-hover">
            <Users className="w-4 h-4 mr-2" />
            Team
          </TabsTrigger>
          <TabsTrigger value="integrations" className="data-[state=active]:bg-soc-hover">
            <Database className="w-4 h-4 mr-2" />
            Integrations
          </TabsTrigger>
          <TabsTrigger value="appearance" className="data-[state=active]:bg-soc-hover">
            <Palette className="w-4 h-4 mr-2" />
            Appearance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card className="p-6 bg-soc-card border-soc-border">
            <h3 className="text-soc-foreground mb-4">Alert Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-soc-foreground">Critical Alerts</Label>
                  <p className="text-sm text-soc-muted">Receive notifications for critical severity alerts</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-soc-foreground">High Alerts</Label>
                  <p className="text-sm text-soc-muted">Receive notifications for high severity alerts</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-soc-foreground">Medium Alerts</Label>
                  <p className="text-sm text-soc-muted">Receive notifications for medium severity alerts</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-soc-card border-soc-border">
            <h3 className="text-soc-foreground mb-4">Playbook Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-soc-foreground">Human Action Required</Label>
                  <p className="text-sm text-soc-muted">Notify when manual intervention is needed</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-soc-foreground">Playbook Completion</Label>
                  <p className="text-sm text-soc-muted">Notify when playbooks complete</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6 space-y-6">
          <Card className="p-6 bg-soc-card border-soc-border">
            <h3 className="text-soc-foreground mb-4">Session Security</h3>
            <div className="space-y-4">
              <div>
                <Label className="text-soc-foreground mb-2 block">Session Timeout</Label>
                <Input 
                  type="number" 
                  defaultValue="30"
                  className="bg-soc-input border-soc-border w-32"
                />
                <p className="text-sm text-soc-muted mt-1">Minutes of inactivity before logout</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-soc-foreground">Two-Factor Authentication</Label>
                  <p className="text-sm text-soc-muted">Require 2FA for all sessions</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-soc-card border-soc-border">
            <h3 className="text-soc-foreground mb-4">Audit Logging</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-soc-foreground">Log All Actions</Label>
                  <p className="text-sm text-soc-muted">Record all user actions for audit trail</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-soc-foreground">Extended Retention</Label>
                  <p className="text-sm text-soc-muted">Keep logs for 90 days instead of 30</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="mt-6 space-y-6">
          <Card className="p-6 bg-soc-card border-soc-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-soc-foreground">Team Members</h3>
              <Button className="bg-soc-primary hover:bg-soc-accent text-white">
                Invite Member
              </Button>
            </div>
            <div className="space-y-3">
              {[
                { name: "Jessica Smith", role: "Senior Analyst", status: "Active" },
                { name: "Michael Chen", role: "Analyst", status: "Active" },
                { name: "Ana Rodriguez", role: "Team Lead", status: "Active" },
                { name: "David Park", role: "Analyst", status: "Away" },
              ].map((member, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-soc-surface/50">
                  <div>
                    <p className="text-sm text-soc-foreground">{member.name}</p>
                    <p className="text-xs text-soc-muted">{member.role}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 text-xs rounded ${
                      member.status === "Active" 
                        ? "bg-soc-success/20 text-soc-success" 
                        : "bg-soc-warning/20 text-soc-warning"
                    }`}>
                      {member.status}
                    </span>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="mt-6 space-y-6">
          <Card className="p-6 bg-soc-card border-soc-border">
            <h3 className="text-soc-foreground mb-4">Connected Systems</h3>
            <div className="space-y-3">
              {[
                { name: "SIEM Platform", status: "Connected", lastSync: "2 min ago" },
                { name: "EDR Solution", status: "Connected", lastSync: "5 min ago" },
                { name: "Threat Intelligence Feed", status: "Connected", lastSync: "1 min ago" },
                { name: "Email Gateway", status: "Disconnected", lastSync: "2 hours ago" },
              ].map((system, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-soc-surface/50 border border-soc-border">
                  <div>
                    <p className="text-sm text-soc-foreground">{system.name}</p>
                    <p className="text-xs text-soc-muted">Last sync: {system.lastSync}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center gap-2 ${
                      system.status === "Connected" ? "text-soc-success" : "text-soc-critical"
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        system.status === "Connected" ? "bg-soc-success" : "bg-soc-critical"
                      }`} />
                      <span className="text-sm">{system.status}</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-soc-border">
                      Configure
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="mt-6 space-y-6">
          <Card className="p-6 bg-soc-card border-soc-border">
            <h3 className="text-soc-foreground mb-4">Display Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-soc-foreground">Dark Mode</Label>
                  <p className="text-sm text-soc-muted">Use dark color scheme (recommended for SOC)</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-soc-foreground">Compact View</Label>
                  <p className="text-sm text-soc-muted">Display more information on screen</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-soc-foreground">Animations</Label>
                  <p className="text-sm text-soc-muted">Enable smooth transitions and effects</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
