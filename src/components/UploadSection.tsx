import { Upload } from "lucide-react";
import React, { useRef, useState } from "react";
import type { ContractAnalysis } from "../types";
import AnalyzingAnimation from "./AnalyzingAnimation";

interface UploadSectionProps {
  onAnalysisStart: () => void;
  onAnalysisComplete: (analysis: ContractAnalysis) => void;
  isAnalyzing: boolean;
}

const UploadSection: React.FC<UploadSectionProps> = ({
  onAnalysisStart,
  onAnalysisComplete,
  isAnalyzing,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    onAnalysisStart();

    setTimeout(() => {
      const mockAnalysis: ContractAnalysis = {
        id: Date.now().toString(),
        fileName: file.name,
        summary: [
          "This is a standard service agreement between contractor and client",
          "Payment terms require 50% upfront, 50% on completion within 30 days",
          "Work includes web development services with 3 rounds of revisions",
          "Contract term is 6 months with automatic renewal clause",
          "Either party can terminate with 30 days written notice",
        ],
        risks: [
          {
            id: "1",
            level: "high",
            description:
              "Unlimited liability clause could expose you to significant financial risk",
            clause: "Section 8.2 - Contractor shall be liable for all damages",
            impact: "Could result in claims exceeding project value",
          },
          {
            id: "2",
            level: "medium",
            description:
              "Broad intellectual property assignment without compensation",
            clause: "Section 12 - All work product becomes client property",
            impact: "Loss of rights to reuse code or designs",
          },
          {
            id: "3",
            level: "low",
            description:
              "Automatic renewal clause may lock you into unwanted extension",
            clause: "Section 3.1 - Contract renews automatically",
            impact: "Continued obligations without active consent",
          },
        ],
        obligations: [
          {
            id: "1",
            type: "termination",
            description:
              "Must provide 30 days written notice before termination",
            deadline: "30 days before intended termination date",
            consequence: "May be liable for breach of contract",
          },
          {
            id: "2",
            type: "payment",
            description: "Invoice client within 5 days of milestone completion",
            deadline: "5 days after each milestone",
            consequence: "Payment may be delayed",
          },
          {
            id: "3",
            type: "confidentiality",
            description: "Maintain confidentiality of all client information",
            consequence: "Legal action and damages for disclosure",
          },
        ],
        status: "complete",
        uploadDate: new Date(),
        contractType: "Service Agreement",
      };

      onAnalysisComplete(mockAnalysis);
    }, 3000);
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Upload Your Contract
        </h1>
        <p className="text-xl text-gray-600">
          Drop your contract file here or click to browse. We support PDF, DOC,
          and TXT files.
        </p>
      </div>

      {!isAnalyzing ? (
        <div
          className={`border-2 border-dashed rounded-3xl p-16 text-center transition-all ${
            dragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:border-blue-400 hover:bg-blue-50/50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <Upload className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Drop your contract here
          </h3>
          <p className="text-gray-600 mb-8">
            Or click to select files from your computer
          </p>
          <button
            onClick={handleFileSelect}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
          >
            Select Files
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Supports PDF, DOC, DOCX, TXT files up to 10MB
          </p>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
            className="hidden"
          />
        </div>
      ) : (
        <AnalyzingAnimation />
      )}
    </div>
  );
};

export default UploadSection;
