import { AlertTriangle, TrendingUp, Clock, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "./ui/badge";
import { cn } from "./ui/utils";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type Severity = "critical" | "high" | "medium" | "low";

interface AlertCardProps {
  id: string;
  title: string;
  severity: Severity;
  timestamp: string;
  source: string;
  tags: string[];
  similarityScore?: number;
  description?: string;
  iocs?: { type: string; value: string }[];
  recommendation?: string;
}

const severityConfig = {
  critical: { 
    color: "text-soc-critical", 
    bgColor: "bg-soc-critical/10", 
    borderColor: "border-soc-critical/30",
    label: "CRITICAL" 
  },
  high: { 
    color: "text-soc-high", 
    bgColor: "bg-soc-high/10", 
    borderColor: "border-soc-high/30",
    label: "HIGH" 
  },
  medium: { 
    color: "text-soc-warning", 
    bgColor: "bg-soc-warning/10", 
    borderColor: "border-soc-warning/30",
    label: "MEDIUM" 
  },
  low: { 
    color: "text-soc-success", 
    bgColor: "bg-soc-success/10", 
    borderColor: "border-soc-success/30",
    label: "LOW" 
  },
};

export function AlertCard({ 
  id, 
  title, 
  severity, 
  timestamp, 
  source, 
  tags, 
  similarityScore,
  description,
  iocs,
  recommendation 
}: AlertCardProps) {
  const [expanded, setExpanded] = useState(false);
  const config = severityConfig[severity];

  return (
    <motion.div
      layout
      className={cn(
        "bg-soc-card border rounded-lg overflow-hidden transition-all",
        "hover:shadow-lg hover:shadow-soc-primary/5",
        config.borderColor
      )}
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-start gap-3 flex-1">
            <div className={cn("mt-0.5 p-2 rounded-lg", config.bgColor)}>
              <AlertTriangle className={cn("w-4 h-4", config.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-soc-foreground mb-1">{title}</h4>
              <div className="flex items-center gap-3 text-xs text-soc-muted">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {timestamp}
                </span>
                <span>•</span>
                <span>{source}</span>
              </div>
            </div>
          </div>
          <Badge className={cn("shrink-0", config.bgColor, config.color, "border-0")}>
            {config.label}
          </Badge>
        </div>

        {/* Tags & Similarity */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {tags.map((tag, idx) => (
            <Badge key={idx} variant="outline" className="text-xs bg-soc-hover border-soc-border text-soc-muted">
              {tag}
            </Badge>
          ))}
          {similarityScore !== undefined && (
            <Badge className="text-xs bg-soc-accent/20 border-soc-accent text-soc-accent border">
              <TrendingUp className="w-3 h-3 mr-1" />
              {similarityScore}% similar
            </Badge>
          )}
        </div>

        {/* Expand Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-soc-primary hover:text-soc-accent transition-colors"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Hide Details
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show Details
            </>
          )}
        </button>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-soc-border"
          >
            <div className="p-4 space-y-4 bg-soc-surface/50">
              {/* Description */}
              {description && (
                <div>
                  <h5 className="text-sm text-soc-muted mb-2">What Happened</h5>
                  <p className="text-sm text-soc-foreground">{description}</p>
                </div>
              )}

              {/* IOCs */}
              {iocs && iocs.length > 0 && (
                <div>
                  <h5 className="text-sm text-soc-muted mb-2">Indicators of Compromise</h5>
                  <div className="space-y-2">
                    {iocs.map((ioc, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Badge variant="outline" className="text-xs">{ioc.type}</Badge>
                        <code className="flex-1 px-2 py-1 bg-soc-hover rounded text-xs font-mono text-soc-foreground">
                          {ioc.value}
                        </code>
                        <button className="text-soc-primary hover:text-soc-accent">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendation */}
              {recommendation && (
                <div className="pt-3 border-t border-soc-border">
                  <h5 className="text-sm text-soc-success mb-2">Recommended Action</h5>
                  <p className="text-sm text-soc-foreground">{recommendation}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
