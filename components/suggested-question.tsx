"use client"

import { Button } from "@/components/ui/button"

interface SuggestedQuestionProps {
  question: string
  onClick: () => void
}

export default function SuggestedQuestion({ question, onClick }: SuggestedQuestionProps) {
  return (
    <Button
      variant="outline"
      className="justify-start h-auto py-3 px-4 text-left font-normal hover:bg-slate-50 hover:text-slate-900 transition-all"
      onClick={onClick}
    >
      <span className="mr-2">💡</span>
      {question}
    </Button>
  )
}
