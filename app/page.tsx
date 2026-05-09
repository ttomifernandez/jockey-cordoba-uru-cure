export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <main className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2">
              Jockey Club Córdoba
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100">
              vs
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-400 mb-6">
              Uru Cure
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-blue-100">
              Partidos de Rugby - Sábado
            </p>
          </div>

          {/* Match Schedule */}
          <div className="space-y-4 mb-8">
            {/* M19 B */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-4 md:p-6 hover:bg-opacity-15 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                    M19 B
                  </h3>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-300 whitespace-nowrap">
                  13:00
                </div>
              </div>
              <div className="mt-3">
                <a
                  href="https://www.rugbyproscore.com.ar/match/oQq6iq0S6tr9xmuQOXJo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg text-sm sm:text-base"
                >
                  Mirar en Vivo
                </a>
              </div>
            </div>

            {/* M19 A */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-4 md:p-6 hover:bg-opacity-15 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                    M19 A
                  </h3>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-300 whitespace-nowrap">
                  14:20
                </div>
              </div>
              <div className="mt-3">
                <a
                  href="https://www.rugbyproscore.com.ar/match/ByoyCYczZzT2v43C7fTb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg text-sm sm:text-base"
                >
                  Mirar en Vivo
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-blue-100 text-xs sm:text-sm">
            <p>© 2026 Jockey Club Córdoba</p>
          </div>
        </main>
      </div>
    </div>
  );
}
