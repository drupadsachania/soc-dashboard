import { Play, CheckCircle2, Circle, Clock, AlertCircle, User, Terminal } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "../ui/utils";

type StepStatus = "completed" | "active" | "pending" | "waiting";

interface PlaybookStep {
  id: string;
  title: string;
  description: string;
  status: StepStatus;
  automated: boolean;
  assignedTo?: string;
  command?: string;
  waitingFor?: string;
}

const mockPlaybook = {
  id: "IR-001",
  name: "Malware Incident Response",
  description: "Standard incident response playbook for confirmed malware detections",
  triggeredBy: "ALT-2024-001",
  startedAt: "2024-12-13 14:40:22 UTC",
  steps: [
    {
      id: "step-1",
      title: "Initial Triage",
      description: "Gather basic information about the alert and affected systems",
      status: "completed" as const,
      automated: true,
    },
    {
      id: "step-2",
      title: "Endpoint Isolation",
      description: "Isolate the affected endpoint from the network to prevent lateral movement",
      status: "completed" as const,
      automated: true,
      command: "isolate-host --hostname WS-2451 --preserve-evidence"
    },
    {
      id: "step-3",
      title: "Artifact Collection",
      description: "Collect forensic artifacts including memory dump, disk image, and logs",
      status: "active" as const,
      automated: true,
      command: "collect-artifacts --host WS-2451 --include memory,disk,logs"
    },
    {
      id: "step-4",
      title: "Human Validation Required",
      description: "Review collected artifacts and validate the malware classification",
      status: "waiting" as const,
      automated: false,
      assignedTo: "J. Smith",
      waitingFor: "Artifact collection to complete"
    },
    {
      id: "step-5",
      title: "Malware Analysis",
      description: "Submit samples to sandbox environment for detailed analysis",
      status: "pending" as const,
      automated: true,
    },
    {
      id: "step-6",
      title: "Remediation",
      description: "Remove malware and restore system to known good state",
      status: "pending" as const,
      automated: false,
      assignedTo: "Unassigned"
    },
    {
      id: "step-7",
      title: "Post-Incident Review",
      description: "Document findings and update detection rules",
      status: "pending" as const,
      automated: false,
    }
  ] as PlaybookStep[]
};

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "text-soc-success",
    bgColor: "bg-soc-success/10",
    label: "Completed"
  },
  active: {
    icon: Clock,
    color: "text-soc-primary",
    bgColor: "bg-soc-primary/10",
    label: "In Progress"
  },
  waiting: {
    icon: AlertCircle,
    color: "text-soc-warning",
    bgColor: "bg-soc-warning/10",
    label: "Waiting"
  },
  pending: {
    icon: Circle,
    color: "text-soc-muted",
    bgColor: "bg-soc-muted/10",
    label: "Pending"
  }
};

export function PlaybooksView() {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  const completedSteps = mockPlaybook.steps.filter(s => s.status === "completed").length;
  const totalSteps = mockPlaybook.steps.length;
  const progress = (completedSteps / totalSteps) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-soc-foreground mb-2">Active Playbook</h2>
        <p className="text-sm text-soc-muted">
          Guided incident response workflow with automated and human-in-the-loop steps.
        </p>
      </div>

      {/* Playbook Header */}
      <Card className="p-6 bg-soc-card border-soc-border">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-soc-primary/10">
                <Play className="w-5 h-5 text-soc-primary" />
              </div>
              <div>
                <h3 className="text-soc-foreground">{mockPlaybook.name}</h3>
                <p className="text-sm text-soc-muted">{mockPlaybook.id} • Started {mockPlaybook.startedAt}</p>
              </div>
            </div>
          </div>
          <Badge className="bg-soc-primary/20 text-soc-primary">
            {completedSteps}/{totalSteps} Steps
          </Badge>
        </div>

        <p className="text-sm text-soc-muted mb-4">{mockPlaybook.description}</p>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-soc-muted">Progress</span>
            <span className="text-soc-foreground">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-soc-surface rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-soc-primary to-soc-accent transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-soc-surface/50 border-l-2 border-soc-accent">
          <p className="text-sm text-soc-muted">
            <strong className="text-soc-foreground">Triggered by:</strong> Alert {mockPlaybook.triggeredBy}
          </p>
        </div>
      </Card>

      {/* Playbook Steps */}
      <div className="space-y-3">
        {mockPlaybook.steps.map((step, idx) => {
          const config = statusConfig[step.status];
          const Icon = config.icon;
          const isSelected = selectedStep === step.id;

          return (
            <Card
              key={step.id}
              className={cn(
                "p-5 bg-soc-card border-soc-border transition-all cursor-pointer",
                isSelected && "ring-2 ring-soc-primary shadow-lg shadow-soc-primary/10",
                "hover:shadow-lg hover:shadow-soc-primary/5"
              )}
              onClick={() => setSelectedStep(isSelected ? null : step.id)}
            >
              <div className="flex items-start gap-4">
                {/* Step Number & Status */}
                <div className="flex flex-col items-center gap-2 min-w-[60px]">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", config.bgColor)}>
                    <Icon className={cn("w-5 h-5", config.color)} />
                  </div>
                  {idx < mockPlaybook.steps.length - 1 && (
                    <div className={cn(
                      "w-0.5 h-12 rounded-full",
                      step.status === "completed" ? "bg-soc-success" : "bg-soc-border"
                    )} />
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-soc-foreground mb-1">
                        Step {idx + 1}: {step.title}
                      </h4>
                      <p className="text-sm text-soc-muted">{step.description}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Badge className={cn("text-xs", config.bgColor, config.color, "border-0")}>
                        {config.label}
                      </Badge>
                      {step.automated ? (
                        <Badge variant="outline" className="text-xs">
                          <Terminal className="w-3 h-3 mr-1" />
                          Automated
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          <User className="w-3 h-3 mr-1" />
                          Manual
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isSelected && (
                    <div className="mt-4 space-y-3">
                      {step.command && (
                        <div>
                          <p className="text-xs text-soc-muted mb-2">Command</p>
                          <code className="block px-3 py-2 bg-soc-surface rounded text-sm font-mono text-soc-foreground">
                            {step.command}
                          </code>
                        </div>
                      )}

                      {step.assignedTo && (
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-soc-muted" />
                          <span className="text-sm text-soc-muted">
                            Assigned to: <span className="text-soc-foreground">{step.assignedTo}</span>
                          </span>
                        </div>
                      )}

                      {step.waitingFor && (
                        <div className="p-3 rounded-lg bg-soc-warning/10 border-l-2 border-soc-warning">
                          <p className="text-sm text-soc-foreground">
                            <strong>Waiting for:</strong> {step.waitingFor}
                          </p>
                        </div>
                      )}

                      {step.status === "waiting" && (
                        <div className="flex gap-2">
                          <Button className="bg-soc-primary hover:bg-soc-accent text-white">
                            Approve & Continue
                          </Button>
                          <Button variant="outline" className="border-soc-border">
                            Escalate
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Embedded Documentation */}
      <Card className="p-6 bg-soc-card border-soc-border border-l-4 border-l-soc-accent">
        <h4 className="text-soc-foreground mb-3">Playbook Documentation</h4>
        <div className="space-y-3 text-sm">
          <div>
            <strong className="text-soc-foreground">Purpose:</strong>
            <p className="text-soc-muted mt-1">
              This playbook automates the initial response to malware detections, ensuring rapid containment
              while preserving forensic evidence for investigation.
            </p>
          </div>
          <div>
            <strong className="text-soc-foreground">When to Use:</strong>
            <p className="text-soc-muted mt-1">
              Trigger this playbook when confirmed or suspected malware is detected on an endpoint.
              Critical alerts should trigger automatically.
            </p>
          </div>
          <div>
            <strong className="text-soc-foreground">Expected Duration:</strong>
            <p className="text-soc-muted mt-1">
              Automated steps: ~5-10 minutes | Manual review: ~30-60 minutes | Total: ~1-2 hours
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
