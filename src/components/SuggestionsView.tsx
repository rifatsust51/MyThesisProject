import { AlertTriangle, CheckCircle, Star } from "lucide-react";
import React from "react";
import type { ContractAnalysis, MissingClause } from "../types";

const SuggestionsView: React.FC<{ contract: ContractAnalysis }> = ({
  contract,
}) => {
  const mockSuggestions: MissingClause[] = [
    {
      id: "1",
      title: "Force Majeure Clause",
      description:
        "Protection against unforeseeable circumstances that prevent contract fulfillment",
      importance: "critical",
      suggestedText:
        "Neither party shall be liable for any failure to perform due to acts of God, war, terrorism, pandemic, or other circumstances beyond reasonable control.",
    },
    {
      id: "2",
      title: "Limitation of Liability",
      description:
        "Cap your maximum financial exposure in case of disputes or damages",
      importance: "critical",
      suggestedText:
        "In no event shall Contractor's total liability exceed the total amount paid under this agreement.",
    },
    {
      id: "3",
      title: "Dispute Resolution",
      description:
        "Establish process for handling disagreements before they become lawsuits",
      importance: "recommended",
      suggestedText:
        "Any disputes shall first be addressed through good faith negotiation, followed by binding arbitration if necessary.",
    },
    {
      id: "4",
      title: "Scope Change Process",
      description:
        "Define how additional work or changes will be handled and billed",
      importance: "recommended",
      suggestedText:
        "Any changes to the original scope must be agreed upon in writing and may result in additional fees and timeline adjustments.",
    },
    {
      id: "5",
      title: "Data Security Requirements",
      description:
        "Specify how sensitive information will be protected during the project",
      importance: "optional",
      suggestedText:
        "Contractor agrees to implement industry-standard security measures to protect all client data and information.",
    },
  ];

  const getImportanceColor = (
    importance: "critical" | "recommended" | "optional"
  ) => {
    switch (importance) {
      case "critical":
        return "bg-red-100 border-red-200 text-red-800";
      case "recommended":
        return "bg-yellow-100 border-yellow-200 text-yellow-800";
      case "optional":
        return "bg-blue-100 border-blue-200 text-blue-800";
    }
  };

  const getImportanceIcon = (
    importance: "critical" | "recommended" | "optional"
  ) => {
    switch (importance) {
      case "critical":
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case "recommended":
        return <Star className="h-5 w-5 text-yellow-600" />;
      case "optional":
        return <CheckCircle className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Suggested Contract Improvements
        </h1>
        <p className="text-xl text-gray-600">
          Based on our analysis of {contract.fileName}, here are clauses that
          could better protect your interests
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {mockSuggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getImportanceIcon(suggestion.importance)}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getImportanceColor(
                    suggestion.importance
                  )}`}
                >
                  {suggestion.importance.toUpperCase()}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {suggestion.title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {suggestion.description}
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Suggested Language:
              </h4>
              <p className="text-sm text-gray-700 italic leading-relaxed">
                "{suggestion.suggestedText}"
              </p>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all">
                Add to Contract
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Need Help Implementing These Changes?
        </h2>
        <p className="text-lg opacity-90 mb-6">
          Our legal experts can help you draft and negotiate these contract
          improvements
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
          Connect with Legal Expert
        </button>
      </div>
    </div>
  );
};

export default SuggestionsView;
