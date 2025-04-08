import QueryInterface from "@/components/query-interface"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-slate-800">AI Knowledge Assistant</h1>
        <p className="text-slate-600 text-center mb-8">
          Ask a question and watch as it gets processed through our advanced pipeline
        </p>

        <QueryInterface />
      </div>
    </main>
  )
}
