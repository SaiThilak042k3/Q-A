"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SuggestedQuestion from "./suggested-question"
import ProcessingStage from "./processing-stage"
import AnswerDisplay from "./answer-display"

// Mock data for demonstration
const SUGGESTED_QUESTIONS = [
  "How does a neural network work?",
  "What are the benefits of knowledge graphs?",
  "Explain vector databases in simple terms",
  "What is the difference between RAG and fine-tuning?",
]

// Mock subqueries for demonstration
const MOCK_SUBQUERIES = [
  "What is the basic structure of a neural network?",
  "How do neurons in a neural network process information?",
  "What are activation functions in neural networks?",
  "How does backpropagation work in neural networks?",
]

export default function QueryInterface() {
  const [query, setQuery] = useState("")
  const [currentStage, setCurrentStage] = useState<"idle" | "processing" | "subqueries" | "routing" | "llm" | "result">(
    "idle",
  )
  const [subqueries, setSubqueries] = useState<string[]>([])
  const [answer, setAnswer] = useState({ text: "", source: "" })
  const [visibleSubqueries, setVisibleSubqueries] = useState<number>(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    // Start the processing animation flow
    setCurrentStage("processing")

    // Simulate processing delay
    setTimeout(() => {
      setCurrentStage("subqueries")
      setSubqueries(MOCK_SUBQUERIES)

      // Animate subqueries appearing one by one
      let count = 0
      const interval = setInterval(() => {
        count++
        setVisibleSubqueries(count)
        if (count >= MOCK_SUBQUERIES.length) {
          clearInterval(interval)
          setTimeout(() => {
            setCurrentStage("routing")
            setTimeout(() => {
              setCurrentStage("llm")
              setTimeout(() => {
                setCurrentStage("result")
                setAnswer({
                  text: "Neural networks are computational systems inspired by the human brain. They consist of layers of interconnected nodes (neurons) that process information. Each connection has a weight that adjusts as the network learns, allowing it to recognize patterns and make predictions.",
                  source: "Introduction to Neural Networks, Chapter 2",
                })
              }, 3000)
            }, 3000)
          }, 2000)
        }
      }, 500)
    }, 1500)
  }

  const handleSuggestedQuestion = (question: string) => {
    setQuery(question)
    // Auto-submit after a short delay
    setTimeout(() => {
      handleSubmit({ preventDefault: () => {} } as React.FormEvent)
    }, 300)
  }

  const resetInterface = () => {
    setCurrentStage("idle")
    setQuery("")
    setSubqueries([])
    setVisibleSubqueries(0)
    setAnswer({ text: "", source: "" })
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {currentStage === "idle" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {SUGGESTED_QUESTIONS.map((question, index) => (
              <SuggestedQuestion key={index} question={question} onClick={() => handleSuggestedQuestion(question)} />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask your question..."
              className="flex-1"
            />
            <Button type="submit" disabled={!query.trim()}>
              <Send className="h-4 w-4 mr-2" />
              Ask
            </Button>
          </form>
        </>
      )}

      {currentStage === "processing" && (
        <ProcessingStage title="Processing your query into sub-questions..." icon="processing" />
      )}

      {currentStage === "subqueries" && (
        <div className="space-y-6">
          <ProcessingStage title="Breaking down your question into sub-queries..." icon="subqueries" />
          <div className="space-y-3 mt-4">
            {subqueries.slice(0, visibleSubqueries).map((subquery, index) => (
              <div key={index} className="bg-slate-50 p-3 rounded-lg border border-slate-200 animate-fadeIn">
                <p className="text-slate-700">{subquery}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentStage === "routing" && (
        <ProcessingStage title="Routing sub-queries to appropriate data sources..." icon="routing" />
      )}

      {currentStage === "llm" && <ProcessingStage title="Sending routed results to LLM..." icon="llm" />}

      {currentStage === "result" && (
        <AnswerDisplay answer={answer.text} source={answer.source} onReset={resetInterface} />
      )}
    </div>
  )
}
