"use client"

import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

interface AnswerDisplayProps {
  answer: string
  source: string
  onReset: () => void
}

export default function AnswerDisplay({ answer, source, onReset }: AnswerDisplayProps) {
  return (
    <div className="animate-fadeIn">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
        <div className="flex items-start">
          <div className="bg-green-500 text-white p-1 rounded-full mr-3 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-green-800 mb-2">Final Answer</h3>
            <p className="text-slate-700">{answer}</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-slate-700 mb-1">Source:</h4>
        <p className="text-slate-600">{source}</p>
      </div>

      <div className="flex justify-center">
        <Button onClick={onReset} className="gap-2">
          <Home className="h-4 w-4" />
          Back to Home
        </Button>
      </div>
    </div>
  )
}
