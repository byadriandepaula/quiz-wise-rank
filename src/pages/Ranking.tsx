
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Crown, Medal, Star, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const rankingData = [
  { position: 1, name: 'Maria Silva', points: 2580, prize: 'R$ 150,00' },
  { position: 2, name: 'Carlos Santos', points: 2450, prize: 'R$ 100,00' },
  { position: 3, name: 'Ana Costa', points: 2380, prize: 'R$ 100,00' },
  { position: 4, name: 'Pedro Lima', points: 2280, prize: 'R$ 100,00' },
  { position: 5, name: 'Julia Ferreira', points: 2180, prize: 'R$ 100,00' },
  { position: 6, name: 'Bruno Oliveira', points: 2080, prize: 'R$ 70,00' },
  { position: 7, name: 'Camila Rocha', points: 1980, prize: 'R$ 70,00' },
  { position: 8, name: 'Diego Alves', points: 1880, prize: 'R$ 70,00' },
  { position: 9, name: 'Fernanda Luz', points: 1780, prize: 'R$ 70,00' },
  { position: 10, name: 'Rafael Gomes', points: 1680, prize: 'R$ 70,00' },
];

const prizeRanges = [
  { range: '1º', prize: 'R$ 150,00', color: 'bg-yellow-500' },
  { range: '2º–5º', prize: 'R$ 100,00', color: 'bg-gray-400' },
  { range: '6º–10º', prize: 'R$ 70,00', color: 'bg-amber-600' },
  { range: '11º–20º', prize: 'R$ 30,00', color: 'bg-wise-green' },
  { range: '21º–50º', prize: 'R$ 15,00', color: 'bg-blue-500' },
  { range: '51º–100º', prize: 'R$ 7,00', color: 'bg-purple-500' },
];

const getPositionIcon = (position: number) => {
  if (position === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
  if (position <= 3) return <Medal className="w-5 h-5 text-gray-400" />;
  if (position <= 10) return <Trophy className="w-5 h-5 text-amber-600" />;
  return <Star className="w-5 h-5 text-wise-green" />;
};

const getPositionStyle = (position: number) => {
  if (position === 1) return 'bg-yellow-50 border-yellow-200';
  if (position <= 3) return 'bg-gray-50 border-gray-200';
  if (position <= 10) return 'bg-amber-50 border-amber-200';
  return 'bg-wise-green-pale border-wise-green/20';
};

const Ranking = () => {
  return (
    <div className="space-y-6 pb-16 md:pb-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Ranking Semanal</h1>
          <p className="text-muted-foreground">Top 100 jogadores da semana</p>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Encerra: 13/06/2025 às 23:59
            </span>
          </div>
          <p className="text-lg font-semibold text-wise-green">2d 14h 32m restantes</p>
        </div>
      </div>

      {/* Prize Information */}
      <Card className="wise-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-wise-green" />
            <span>Premiações da Semana</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {prizeRanges.map((range, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-muted/50">
                <div className={cn("w-3 h-3 rounded-full mx-auto mb-2", range.color)}></div>
                <p className="font-semibold text-sm">{range.range}</p>
                <p className="text-wise-green font-bold">{range.prize}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Position */}
      <Card className="wise-card border-wise-green/50 bg-wise-green-pale">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-wise-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">23</span>
              </div>
              <div>
                <p className="font-semibold">Sua Posição</p>
                <p className="text-sm text-muted-foreground">1.250 pontos</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-wise-green">R$ 30,00</p>
              <p className="text-sm text-muted-foreground">Prêmio estimado</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ranking List */}
      <Card className="wise-card">
        <CardHeader>
          <CardTitle>Top 100</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {rankingData.map((player) => (
            <div
              key={player.position}
              className={cn(
                "flex items-center justify-between p-3 rounded-lg border transition-colors hover:bg-muted/50",
                getPositionStyle(player.position)
              )}
            >
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  {getPositionIcon(player.position)}
                  <span className="font-bold text-lg w-6">{player.position}º</span>
                </div>
                <div>
                  <p className="font-semibold">{player.name}</p>
                  <p className="text-sm text-muted-foreground">{player.points} pontos</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-wise-green">{player.prize}</p>
              </div>
            </div>
          ))}
          
          <div className="text-center pt-4">
            <button className="wise-button-secondary px-6 py-2 rounded-lg">
              Carregar mais posições
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ranking;
