import { Brain, Database, Network, RefreshCw } from "lucide-react"

interface ProcessingStageProps {
  title: string
  icon: "processing" | "subqueries" | "routing" | "llm"
}

export default function ProcessingStage({ title, icon }: ProcessingStageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="mb-4">
        {icon === "processing" && <RefreshCw className="h-12 w-12 text-blue-500 animate-spin" />}
        {icon === "subqueries" && <Database className="h-12 w-12 text-purple-500 animate-pulse" />}
        {icon === "routing" && <Network className="h-12 w-12 text-green-500 animate-pulse" />}
        {icon === "llm" && <Brain className="h-12 w-12 text-amber-500 animate-pulse" />}
      </div>
      <h3 className="text-xl font-medium text-slate-800">{title}</h3>

      {icon === "routing" && (
        <div className="mt-8 w-full max-w-md">
          <div className="relative">
            <div className="flex justify-between mb-2">
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-sm font-medium">Vector DB</div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm font-medium">
                Knowledge Graph
              </div>
            </div>

            <div className="h-24 w-full relative">
              {/* Animated routing lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100">
                <path
                  d="M50,10 C150,10 150,90 350,90"
                  fill="none"
                  stroke="#9333ea"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-dashmove"
                />
                <path
                  d="M50,10 C100,10 100,50 350,50"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-dashmove-delay"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
