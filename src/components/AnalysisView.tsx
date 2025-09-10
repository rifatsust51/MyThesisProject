import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  FileText,
  MessageSquare,
  Star,
} from "lucide-react";
import React, { useState } from "react";
import type { ContractAnalysis } from "../types";

interface AnalysisViewProps {
  contract: ContractAnalysis;
  onStartChat: () => void;
  onViewSuggestions: () => void;
}

const AnalysisView: React.FC<AnalysisViewProps> = ({
  contract,
  onStartChat,
  onViewSuggestions,
}) => {
  const [activeTab, setActiveTab] = useState<
    "summary" | "risks" | "obligations"
  >("summary");

  const getRiskColor = (level: "high" | "medium" | "low") => {
    switch (level) {
      case "high":
        return "bg-red-100 border-red-200 text-red-800";
      case "medium":
        return "bg-yellow-100 border-yellow-200 text-yellow-800";
      case "low":
        return "bg-green-100 border-green-200 text-green-800";
    }
  };

  const getRiskIcon = (level: "high" | "medium" | "low") => {
    switch (level) {
      case "high":
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case "medium":
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case "low":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
    }
  };

  const getObligationIcon = (type: string) => {
    switch (type) {
      case "payment":
        return "💳";
      case "termination":
        return "📋";
      case "liability":
        return "⚖️";
      case "confidentiality":
        return "🔒";
      default:
        return "📄";
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {contract.fileName}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center">
                <FileText className="h-4 w-4 mr-1" />
                {contract.contractType}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Analyzed {contract.uploadDate.toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                Complete
              </span>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onStartChat}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all flex items-center"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Ask Questions
            </button>
            <button
              onClick={onViewSuggestions}
              className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 transition-all flex items-center"
            >
              <Star className="h-5 w-5 mr-2" />
              Suggestions
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-t-2xl shadow-lg">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-8">
            <button
              onClick={() => setActiveTab("summary")}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "summary"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Plain English Summary
            </button>
            <button
              onClick={() => setActiveTab("risks")}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "risks"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Risks & Red Flags ({contract.risks.length})
            </button>
            <button
              onClick={() => setActiveTab("obligations")}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "obligations"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Your Obligations ({contract.obligations.length})
            </button>
          </nav>
        </div>

        <div className="p-8">
          {activeTab === "summary" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contract Summary in Plain English
              </h3>
              <div className="space-y-4">
                {contract.summary.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "risks" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Identified Risks & Red Flags
              </h3>
              <div className="space-y-6">
                {contract.risks.map((risk) => (
                  <div
                    key={risk.id}
                    className={`border rounded-xl p-6 ${getRiskColor(
                      risk.level
                    )}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getRiskIcon(risk.level)}
                        <span className="font-semibold capitalize">
                          {risk.level} Risk
                        </span>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">{risk.description}</h4>
                    <p className="text-sm mb-3">
                      <strong>Found in:</strong> {risk.clause}
                    </p>
                    <p className="text-sm">
                      <strong>Potential Impact:</strong> {risk.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "obligations" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Your Responsibilities & Deadlines
              </h3>
              <div className="space-y-4">
                {contract.obligations.map((obligation) => (
                  <div
                    key={obligation.id}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">
                        {getObligationIcon(obligation.type)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {obligation.description}
                        </h4>
                        {obligation.deadline && (
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>Deadline:</strong> {obligation.deadline}
                          </p>
                        )}
                        {obligation.consequence && (
                          <p className="text-sm text-red-600">
                            <strong>Consequence if missed:</strong>{" "}
                            {obligation.consequence}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalysisView;
