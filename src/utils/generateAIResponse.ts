/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ContractAnalysis } from "../types";

export const generateAIResponse = (
  question: string,
  contract: ContractAnalysis
): string => {
  const lowerQuestion = question.toLowerCase();

  if (lowerQuestion.includes("cancel") || lowerQuestion.includes("terminate")) {
    return "Based on your contract analysis, you can terminate this agreement with 30 days written notice as specified in Section 3.1. However, you may still be liable for any work completed up to the termination date and must pay outstanding invoices.";
  }

  if (lowerQuestion.includes("payment") || lowerQuestion.includes("pay")) {
    return "According to the payment terms, you're required to pay 50% upfront and the remaining 50% within 30 days of project completion. Late payments may incur additional fees as outlined in the contract.";
  }

  if (lowerQuestion.includes("liability") || lowerQuestion.includes("damage")) {
    return "I notice a concerning unlimited liability clause in Section 8.2. This means you could be held responsible for damages that exceed the project value. I strongly recommend negotiating a liability cap to limit your financial exposure.";
  }

  if (
    lowerQuestion.includes("intellectual property") ||
    lowerQuestion.includes("ownership")
  ) {
    return "The contract includes a broad intellectual property assignment in Section 12, meaning all work becomes the client's property without additional compensation. You may want to negotiate retaining rights to general methodologies or tools you use.";
  }

  if (
    lowerQuestion.includes("deadline") ||
    lowerQuestion.includes("timeline")
  ) {
    return "The main deadlines I found are: 30-day termination notice requirement, 5-day invoicing deadline after milestones, and the overall 6-month project timeline. Missing these could result in breach of contract.";
  }

  return "I'd be happy to help you understand that aspect of your contract. Could you be more specific about what you'd like to know? I can explain any clause, identify risks, or clarify your obligations based on the contract analysis.";
};
