import React from 'react';

interface Match {
  id: string;
  category: string;
  time: string;
  link: string;
}

const matches: Match[] = [
  {
    id: 'M19B',
    category: 'M19 B',
    time: '13:00',
    link: 'https://www.rugbyproscore.com.ar/match/oQq6iq0S6tr9xmuQOXJo',
  },
  {
    id: 'M19A',
    category: 'M19 A',
    time: '14:20',
    link: 'https://www.rugbyproscore.com.ar/match/ByoyCYczZzT2v43C7fTb',
  },
];

const MatchCard: React.FC<{ match: Match }> = ({ match }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Decorative accent bar */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#0f3a5e] to-[#d4a547]" />
      
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left: Category */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4b5563] dark:text-gray-400 mb-2">
              Categoría
            </p>
            <h3 className="text-3xl md:text-4xl font-800 text-[#0f3a5e] dark:text-white leading-tight">
              {match.category}
            </h3>
          </div>

          {/* Right: Time */}
          <div className="flex flex-col items-end">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4b5563] dark:text-gray-400 mb-2">
              Horario
            </p>
            <div className="bg-gradient-to-br from-[#0f3a5e] to-[#1a4a73] text-white rounded-lg px-6 py-3 shadow-md">
              <time className="text-2xl md:text-3xl font-700 font-mono">
                {match.time}
              </time>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <a
            href={match.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#d4a547] to-[#e8b854] text-white font-700 text-base rounded-lg shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4a547] dark:focus:ring-offset-gray-900 transition-all duration-300"
          >
            <span>Mirar en Vivo</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f3a5e] via-[#1a4a73] to-[#0f3a5e] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(212,165,71,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(212,165,71,0.3),transparent_50%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-[#d4a547] text-xs md:text-sm font-bold uppercase tracking-widest mb-4 inline-block">
              🏉 Partidos de Rugby
            </p>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-3">
              Jockey Club Córdoba
            </h1>
            <p className="text-[#d4a547] text-lg md:text-2xl font-bold mb-3">vs</p>
            <h2 className="text-[#e8b854] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Uru Cure
            </h2>
          </div>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Sigue los mejores partidos de la temporada. Categorías M19 B y M19 A en transmisión en vivo.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <p className="text-[#d4a547] text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
              Próximos Encuentros
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f3a5e] dark:text-white mb-4">
              Cronograma de Partidos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              Todos los partidos se transmiten en vivo. Haz clic para seguir la acción completa.
            </p>
          </div>

          {/* Match Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f3a5e] dark:bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-[#1a4a73] dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Info */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-[#d4a547]">Jockey Club Córdoba</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Uno de los clubes de rugby más tradicionales de Córdoba, con una trayectoria destacada en competencias nacionales.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-[#d4a547]">Enlaces Útiles</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="https://www.rugbyproscore.com.ar" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a547] transition-colors">
                    Rugby Proscore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4a547] transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400 text-xs">
              © 2026 Jockey Club Córdoba. Todos los derechos reservados. | Diseño profesional y responsivo
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
