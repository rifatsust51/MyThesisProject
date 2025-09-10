export type AppView = "home" | "upload" | "analysis" | "chat" | "suggestions";

export interface ContractAnalysis {
  id: string;
  fileName: string;
  summary: string[];
  risks: RiskItem[];
  obligations: ObligationItem[];
  status: "analyzing" | "complete" | "error";
  uploadDate: Date;
  contractType: string;
}

export interface RiskItem {
  id: string;
  level: "high" | "medium" | "low";
  description: string;
  clause: string;
  impact: string;
}

export interface ObligationItem {
  id: string;
  type: "payment" | "termination" | "liability" | "confidentiality" | "other";
  description: string;
  deadline?: string;
  consequence?: string;
}

export interface ChatMessage {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

export interface MissingClause {
  id: string;
  title: string;
  description: string;
  importance: "critical" | "recommended" | "optional";
  suggestedText: string;
}
