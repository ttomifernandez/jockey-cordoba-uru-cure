export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <main className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Jockey Club Córdoba
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              vs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-8">
              Uru Cure
            </h2>
            <p className="text-lg text-blue-100">
              Partidos de Rugby - Sábado
            </p>
          </div>

          {/* Match Schedule */}
          <div className="space-y-6 mb-12">
            {/* M19 B */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-6 md:p-8 hover:bg-opacity-15 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    M19 B
                  </h3>
                  <p className="text-blue-100">
                    Jockey Club Córdoba vs Uru Cure
                  </p>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-orange-400">
                  13:00
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Mirar
                </a>
              </div>
            </div>

            {/* M19 A */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-6 md:p-8 hover:bg-opacity-15 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    M19 A
                  </h3>
                  <p className="text-blue-100">
                    Jockey Club Córdoba vs Uru Cure
                  </p>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-orange-400">
                  14:20
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Mirar
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-blue-100 text-sm">
            <p>© 2026 Jockey Club Córdoba</p>
          </div>
        </main>
      </div>
    </div>
  );
}
