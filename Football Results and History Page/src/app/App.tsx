import { useState } from 'react';
import { Trophy, Calendar, History, Medal } from 'lucide-react';

export default function App() {
  const [selectedLeague, setSelectedLeague] = useState('liga-profesional');
  const [selectedTeams, setSelectedTeams] = useState({ team1: '', team2: '' });

  const leagueResults = {
    'liga-profesional': [
      { pos: 1, team: 'Ind. Rivadavia', played: 16, won: 10, drawn: 4, lost: 2, gf: 29, ga: 15, pts: 34 },
      { pos: 2, team: 'Estudiantes', played: 16, won: 9, drawn: 4, lost: 3, gf: 19, ga: 7, pts: 31 },
      { pos: 3, team: 'Boca Juniors', played: 16, won: 8, drawn: 4, lost: 2, gf: 22, ga: 9, pts: 30 },
      { pos: 4, team: 'River Plate', played: 16, won: 9, drawn: 2, lost: 5, gf: 22, ga: 12, pts: 29 },
      { pos: 5, team: 'Argentinos Jrs.', played: 16, won: 8, drawn: 5, lost: 3, gf: 17, ga: 13, pts: 29 }
    ],
    'champions-league': [
      { pos: 1, team: 'Arsenal', played: 8, won: 8, drawn: 0, lost: 0, gf: 23, ga: 4, pts: 24 },
      { pos: 2, team: 'Bayern Munich', played: 8, won: 7, drawn: 0, lost: 1, gf: 22, ga: 8, pts: 21 },
      { pos: 3, team: 'Liverpool', played: 8, won: 6, drawn: 0, lost: 2, gf: 20, ga: 8, pts: 18 },
      { pos: 4, team: 'Tottenham', played: 8, won: 5, drawn: 2, lost: 1, gf: 17, ga: 7, pts: 17 }
      { pos: 5, team: 'Barcelona', played: 8, won: 5, drawn: 1, lost: 2, gf: 22, ga: 14, pts: 16 }
    ],
    'copa-libertadores': [
      { pos: 1, team: 'Ind. Rivadavia', played: 6, won: 5, drawn: 1, lost: 0, gf: 15, ga: 6, pts: 16 },
      { pos: 2, team: 'Flamengo', played: 6, won: 5, drawn: 1, lost: 0, gf: 14, ga: 2, pts: 16 },
      { pos: 3, team: 'IDV', played: 6, won: 4, drawn: 1, lost: 1, gf: 11, ga: 6, pts: 13 },
      { pos: 4, team: 'U. Catolica', played: 6, won: 4, drawn: 1, lost: 1, gf: 8, ga: 4, pts: 13 }
    ]
  };

  const matchHistory: Record<string, any[]> = {
    'River Plate vs Boca Juniors': [
      { date: '15/04/2026', home: 'River Plate', away: 'Boca Juniors', score: '2-1', competition: 'Liga Profesional' },
      { date: '10/12/2025', home: 'Boca Juniors', away: 'River Plate', score: '1-1', competition: 'Copa Argentina' },
      { date: '22/09/2025', home: 'River Plate', away: 'Boca Juniors', score: '3-2', competition: 'Liga Profesional' },
      { date: '18/05/2025', home: 'Boca Juniors', away: 'River Plate', score: '0-1', competition: 'Copa Libertadores' },
      { date: '12/03/2025', home: 'River Plate', away: 'Boca Juniors', score: '2-0', competition: 'Liga Profesional' }
    ],
    'Racing vs Independiente': [
      { date: '04/04/2026', home: 'Independiente', away: 'Racing Club', score: '1-0', competition: 'Torneo Apertura' },
      { date: '28/09/2025', home: 'Racing Club', away: 'Independiente', score: '0-0', competition: 'Torneo Clausura' },
      { date: '16/03/2025', home: 'Independiente', away: 'Racing Club', score: '1-1', competition: 'Torneo Apertura' },
      { date: '25/08/2024', home: 'Racing Club', away: 'Independiente', score: '0-0', competition: 'Liga Profesional' },
      { date: '24/02/2024', home: 'Independiente', away: 'Racing Club', score: '0-1', competition: 'Copa de la Liga' }
    ],
    'San Lorenzo vs Huracan': [
      { date: '08/02/2026', home: 'Huracán', away: 'San Lorenzo', score: '1-0', competition: 'Liga Profesional' },
      { date: '30/08/2025', home: 'San Lorenzo', away: 'Huracán', score: '0-0', competition: 'Liga Profesional' },
      { date: '23/02/2025', home: 'Huracán', away: 'San Lorenzo', score: '2-0', competition: 'Liga Profesional' },
      { date: '20/07/2024', home: 'San Lorenzo', away: 'Huracán', score: '1-1', competition: 'Liga Profesional' },
      { date: '30/09/2023', home: 'San Lorenzo', away: 'Huracán', score: '1-1', competition: 'Copa de la Liga' }
    ],
    'Estudiantes vs Gimnasia y esgrima': [
      { date: '19/10/2025', home: 'Estudiantes', away: 'Gimnasia', score: '2-0', competition: 'Liga Profesional' },
      { date: '13/04/2025', home: 'Gimnasia', away: 'Estudiantes', score: '1-1', competition: 'Liga Profesional' },
      { date: '28/07/2024', home: 'Estudiantes', away: 'Gimnasia', score: '4-1', competition: 'Liga Profesional' },
      { date: '25/02/2024', home: 'Gimnasia', away: 'Estudiantes', score: '0-0', competition: 'Copa de la Liga' },
      { date: '01/10/2023', home: 'Estudiantes', away: 'Gimnasia', score: '0-0', competition: 'Copa de la Liga' }
    ],
     'Rosario Central vs Newell`s Old Boys': [
      { date: '01/03/2026', home: ' Newell`s Old Boys', away: 'Rosario Central', score: '0-2', competition: 'Liga Profesional' },
      { date: '23/08/2025', home: 'Rosario Central', away: ' Newell`s Old Boys', score: '1-0', competition: 'Liga Profesional' },
      { date: '16/02/2025', home: ' Newell`s Old Boys', away: 'Rosario Central', score: '1-2', competition: 'Liga Profesional' },
      { date: '10/08/2024', home: 'Rosario Central', away: ' Newell`s Old Boys', score: '1-0', competition: 'Liga Profesional' },
      { date: '25/02/2024', home: ' Newell`s Old Boys', away: 'Rosario Central', score: '0-1', competition: 'Copa de la Liga' }
    ],
     'Lanus vs Banfield': [
      { date: '03/11/2025', home: 'Banfield', away: 'Lanús', score: '2-1', competition: 'Liga Profesional' },
      { date: '19/04/2025', home: 'Lanús', away: 'Banfield', score: '1-1', competition: 'Liga Profesional' },
      { date: '30/11/2024', home: 'Banfield', away: 'Lanús', score: '0-1', competition: 'Liga Profesional' },
      { date: '25/02/2024', home: 'Lanús', away: 'Banfield', score: '1-1', competition: 'Copa de la Liga' },
      { date: '30/09/2023', home: 'Banfield', away: 'Lanús', score: '1-0', competition: 'Copa de la Liga' }
    ],
    'Real Madrid vs Barcelona': [
      { date: '21/04/2026', home: 'Real Madrid', away: 'Barcelona', score: '3-2', competition: 'La Liga' },
      { date: '26/10/2025', home: 'Barcelona', away: 'Real Madrid', score: '1-2', competition: 'La Liga' },
      { date: '19/03/2025', home: 'Real Madrid', away: 'Barcelona', score: '4-1', competition: 'Copa del Rey' }
    ],
    'Manchester United vs Liverpool': [
      { date: '17/03/2026', home: 'Manchester United', away: 'Liverpool', score: '2-2', competition: 'Premier League' },
      { date: '14/12/2025', home: 'Liverpool', away: 'Manchester United', score: '3-1', competition: 'Premier League' },
      { date: '01/09/2025', home: 'Manchester United', away: 'Liverpool', score: '1-2', competition: 'FA Cup' }
    ]
     'Bayern Munich vs Borussia Dortmund': [
      { date: '28/02/2026', home: 'Borussia Dortmund', away: 'Bayern Munich', score: '2-3', competition: 'Bundesliga' },
      { date: '18/10/2025', home: 'Bayern Munich', away: 'Borussia Dortmund', score: '2-1', competition: 'Bundesliga' },
      { date: '12/04/2025', home: 'Bayern Munich', away: 'Borussia Dortmund', score: '2-2', competition: 'Bundesliga' },
    ]
     'Juventus vs Inter Milan': [
      { date: '14/02/2026', home: 'Inter Milan', away: 'Juventus', score: '3-2', competition: 'Serie A' },
      { date: '13/09/2025', home: 'Juventus', away: 'Inter Milan', score: '4-3', competition: 'Serie A' },
      { date: '16/02/2025', home: 'Juventus', away: 'Inter Milan', score: '1-0', competition: 'Serie A' },
    ]
  };

  const historicalChampions: Record<string, any[]> = {
    'liga-profesional': [
      { year: 2025, champion: 'Estudiantes' },
      { year: 2024, champion: 'Velez' },
      { year: 2023, champion: 'River Plate' },
      { year: 2022, champion: 'Boca Juniors' },
      { year: 2021, champion: 'River Plate' }
    ],
    'copa-argentina': [
      { year: 2025, champion: 'Ind. Rivadavia' },
      { year: 2024, champion: 'Central Cordoba' },
      { year: 2023, champion: 'Estudiantes' },
      { year: 2022, champion: 'Patronato' },
      { year: 2020, champion: 'Boca Juniors' }
    ],
    'copa-libertadores': [
      { year: 2025, champion: 'Flamengo (BRA)' },
      { year: 2024, champion: 'Botafogo (BRA)' },
      { year: 2023, champion: 'Fluminense (BRA)' },
      { year: 2022, champion: 'Flamengo (BRA)' },
      { year: 2021, champion: 'Palmeiras (BRA)' }
    ],
    'copa-sudamericana': [
      { year: 2025, champion: 'Lanus (ARG)' },
      { year: 2024, champion: 'Racing Club (ARG)' },
      { year: 2023, champion: 'Liga de Quito (ECU)' },
      { year: 2022, champion: 'Independiente del Valle (ECU)' },
      { year: 2021, champion: 'Athletico Paranaense (BRA)' }
    ],
    'champions-league': [
      { year: 2025, champion: 'Paris Saint Germain (FRA)' },
      { year: 2024, champion: 'Real Madrid (ESP)' },
      { year: 2023, champion: 'Manchester City (ENG)' },
      { year: 2022, champion: 'Real Madrid (ESP)' },
      { year: 2021, champion: 'Chelsea (ENG)' }
    ],
    'world-cup': [
      { year: 2022, champion: 'Argentina' },
      { year: 2018, champion: 'France' },
      { year: 2014, champion: 'Germany' },
      { year: 2010, champion: 'Spain' },
      { year: 2006, champion: 'Italy' }
    ]
  };

  const argentineTeams = [
    'River Plate', 'Boca Juniors', 'Racing Club', 'Independiente', 'San Lorenzo',
    'Estudiantes', 'Newell\'s Old Boys', 'Rosario Central', 'Vélez Sarsfield', 'Lanús'
  ];

  const europeanTeams = [
    'Real Madrid', 'Barcelona', 'Manchester United', 'Liverpool', 'Manchester City',
    'Bayern Munich', 'Juventus', 'AC Milan', 'Inter Milan', 'Paris Saint-Germain'
  ];

  const allTeams = [...argentineTeams, ...europeanTeams].sort();

  const handleTeamSelection = (teamNumber: 'team1' | 'team2', team: string) => {
    setSelectedTeams({ ...selectedTeams, [teamNumber]: team });
  };

  const getMatchHistoryForTeams = () => {
    if (!selectedTeams.team1 || !selectedTeams.team2) return [];

    const key1 = `${selectedTeams.team1} vs ${selectedTeams.team2}`;
    const key2 = `${selectedTeams.team2} vs ${selectedTeams.team1}`;

    return matchHistory[key1] || matchHistory[key2] || [];
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500/30">
      <header className="bg-slate-950/90 border-b border-slate-800 sticky top-0 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400 shrink-0" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white leading-tight">Estadísticas Fútbol</h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Argentina • CONMEBOL • Europa • Mundial</p>
            </div>
          </div>
          
          <div className="w-full md:w-auto min-w-[280px]">
            <select
              value={selectedLeague}
              onChange={(e) => setSelectedLeague(e.target.value)}
              className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-3 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none shadow-sm cursor-pointer"
            >
              <optgroup label="Argentina">
                <option value="liga-profesional">Liga Profesional Argentina</option>
                <option value="copa-argentina">Copa Argentina</option>
              </optgroup>
              <optgroup label="CONMEBOL">
                <option value="copa-libertadores">Copa Libertadores</option>
                <option value="copa-sudamericana">Copa Sudamericana</option>
              </optgroup>
              <optgroup label="Europa">
                <option value="champions-league">UEFA Champions League</option>
                <option value="premier-league">Premier League</option>
                <option value="la-liga">La Liga</option>
                <option value="bundesliga">Bundesliga</option>
                <option value="serie-a">Serie A</option>
                <option value="ligue-1">Ligue 1</option>
              </optgroup>
              <optgroup label="Internacional">
                <option value="world-cup">Copa Mundial FIFA</option>
              </optgroup>
            </select>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:py-8 space-y-8">
        {/* Tabla de Posiciones */}
        <section className="bg-slate-800/40 rounded-xl border border-slate-700/50 overflow-hidden shadow-lg flex flex-col">
          <div className="bg-slate-800/80 p-4 border-b border-slate-700/50 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-bold text-white">Posiciones - Temporada Actual</h2>
          </div>
          <div className="p-0 sm:p-4 bg-slate-900/20">
            {leagueResults[selectedLeague as keyof typeof leagueResults] ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base whitespace-nowrap">
                  <thead>
                    <tr className="border-b border-slate-700 bg-slate-800/50">
                      <th className="text-center text-slate-400 py-3 px-3 font-semibold">Pos</th>
                      <th className="text-left text-slate-400 py-3 px-4 font-semibold">Equipo</th>
                      <th className="text-center text-slate-400 py-3 px-2 font-semibold" title="Partidos Jugados">PJ</th>
                      <th className="text-center text-slate-400 py-3 px-2 font-semibold" title="Ganados">G</th>
                      <th className="text-center text-slate-400 py-3 px-2 font-semibold" title="Empatados">E</th>
                      <th className="text-center text-slate-400 py-3 px-2 font-semibold" title="Perdidos">P</th>
                      <th className="text-center text-slate-400 py-3 px-2 font-semibold" title="Goles a Favor">GF</th>
                      <th className="text-center text-slate-400 py-3 px-2 font-semibold" title="Goles en Contra">GC</th>
                      <th className="text-center text-emerald-400 py-3 px-4 font-bold" title="Puntos">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leagueResults[selectedLeague as keyof typeof leagueResults].map((team: any, idx: number) => (
                      <tr key={idx} className="border-b border-slate-700/40 hover:bg-slate-800/60 transition-colors">
                        <td className="py-3.5 px-3 text-center text-slate-400 font-medium">{team.pos}</td>
                        <td className="py-3.5 px-4 text-white font-semibold">{team.team}</td>
                        <td className="py-3.5 px-2 text-center text-slate-300">{team.played}</td>
                        <td className="py-3.5 px-2 text-center text-emerald-400/90">{team.won}</td>
                        <td className="py-3.5 px-2 text-center text-slate-400">{team.drawn}</td>
                        <td className="py-3.5 px-2 text-center text-red-400/90">{team.lost}</td>
                        <td className="py-3.5 px-2 text-center text-slate-400">{team.gf}</td>
                        <td className="py-3.5 px-2 text-center text-slate-400">{team.ga}</td>
                        <td className="py-3.5 px-4 text-center text-white font-bold bg-slate-800/30">{team.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-8 text-center text-slate-400">
                No hay datos de posiciones disponibles para la temporada actual.
              </div>
            )}
          </div>
        </section>

        {/* Historial H2H */}
        <section className="bg-slate-800/40 rounded-xl border border-slate-700/50 overflow-hidden shadow-lg">
          <div className="bg-slate-800/80 p-4 border-b border-slate-700/50 flex items-center gap-3">
            <History className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-bold text-white">Historial de Enfrentamientos (H2H)</h2>
          </div>
          <div className="p-4 sm:p-6 bg-slate-900/20">
            <div className="flex flex-col md:flex-row gap-4 mb-6 relative">
              <div className="flex-1">
                <label className="block text-slate-400 text-xs mb-1.5 ml-1 uppercase tracking-wider font-semibold">Equipo Local</label>
                <select
                  value={selectedTeams.team1}
                  onChange={(e) => handleTeamSelection('team1', e.target.value)}
                  className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                >
                  <option value="">Selecciona equipo...</option>
                  {allTeams.map((team) => (
                    <option key={team} value={team}>{team}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-center -my-2 md:my-0 md:pt-6">
                <span className="bg-slate-700 text-slate-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-600">VS</span>
              </div>
              <div className="flex-1">
                <label className="block text-slate-400 text-xs mb-1.5 ml-1 uppercase tracking-wider font-semibold">Equipo Visitante</label>
                <select
                  value={selectedTeams.team2}
                  onChange={(e) => handleTeamSelection('team2', e.target.value)}
                  className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                >
                  <option value="">Selecciona equipo...</option>
                  {allTeams.map((team) => (
                    <option key={team} value={team}>{team}</option>
                  ))}
                </select>
              </div>
            </div>

            {getMatchHistoryForTeams().length > 0 ? (
              <div className="grid gap-3">
                {getMatchHistoryForTeams().map((match, idx) => (
                  <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-500 transition-colors">
                    <div className="flex flex-col gap-1.5 sm:min-w-[140px]">
                      <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase">{match.competition}</span>
                      <span className="text-slate-400 text-sm flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {match.date}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 sm:gap-6 bg-slate-900/60 py-3 px-4 rounded-lg flex-1 border border-slate-700/50">
                      <span className="text-white font-semibold text-right flex-1 truncate">{match.home}</span>
                      <span className="text-lg sm:text-xl font-bold text-white bg-slate-800 border border-slate-700 px-3 py-1 rounded shadow-inner tracking-widest">{match.score}</span>
                      <span className="text-white font-semibold text-left flex-1 truncate">{match.away}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : selectedTeams.team1 && selectedTeams.team2 ? (
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 text-center">
                <p className="text-slate-400">No hay historial de partidos registrado entre <span className="text-white font-medium">{selectedTeams.team1}</span> y <span className="text-white font-medium">{selectedTeams.team2}</span>.</p>
              </div>
            ) : (
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 text-center border-dashed">
                <p className="text-slate-400">Selecciona dos equipos arriba para ver su historial de enfrentamientos.</p>
              </div>
            )}
          </div>
        </section>

        {/* Campeones Históricos */}
        <section className="bg-slate-800/40 rounded-xl border border-slate-700/50 overflow-hidden shadow-lg">
          <div className="bg-slate-800/80 p-4 border-b border-slate-700/50 flex items-center gap-3">
            <Medal className="w-5 h-5 text-yellow-400" />
            <h2 className="text-lg font-bold text-white">Últimos Campeones</h2>
          </div>
          <div className="p-4 sm:p-6 bg-slate-900/20">
            {historicalChampions[selectedLeague] ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {historicalChampions[selectedLeague].map((record: any, idx: number) => (
                  <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:border-yellow-500/40 transition-colors shadow-sm">
                    <span className="text-yellow-400 font-bold text-xl mb-1.5">{record.year}</span>
                    <span className="text-slate-200 text-sm font-medium leading-tight">{record.champion}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-slate-400">
                No hay datos históricos disponibles para esta competición.
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 mt-8 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            Portal de Estadísticas Futbolísticas • {new Date().getFullYear()} • Optimizada para uso móvil
          </p>
        </div>
      </footer>
    </div>
  );
}
