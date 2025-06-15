
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Crown, Medal, Star, Clock, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Geração de dados mock para ranking completo
const generateRankingData = () => {
  const names = [
    'Maria Silva', 'Carlos Santos', 'Ana Costa', 'Pedro Lima', 'Julia Ferreira',
    'Bruno Oliveira', 'Camila Rocha', 'Diego Alves', 'Fernanda Luz', 'Rafael Gomes',
    'Lucas Martins', 'Patrícia Souza', 'Roberto Dias', 'Mariana Castro', 'Felipe Nunes',
    'Isabela Ramos', 'Thiago Barbosa', 'Amanda Correia', 'Daniel Moreira', 'Gabriela Pinto'
  ];
  
  const surnames = ['Silva', 'Santos', 'Costa', 'Lima', 'Ferreira', 'Oliveira', 'Rocha', 'Alves', 'Luz', 'Gomes'];
  
  return Array.from({ length: 100 }, (_, index) => {
    const position = index + 1;
    let prize = 'R$ 7,00';
    
    if (position === 1) prize = 'R$ 150,00';
    else if (position <= 5) prize = 'R$ 100,00';
    else if (position <= 10) prize = 'R$ 70,00';
    else if (position <= 20) prize = 'R$ 30,00';
    else if (position <= 50) prize = 'R$ 15,00';
    
    const basePoints = 2600 - (position * 20) - Math.random() * 50;
    const points = Math.max(100, Math.floor(basePoints));
    
    const nameIndex = index < names.length ? index : Math.floor(Math.random() * names.length);
    const surnameIndex = Math.floor(Math.random() * surnames.length);
    const name = index < names.length ? names[nameIndex] : 
                 `${names[nameIndex].split(' ')[0]} ${surnames[surnameIndex]}`;
    
    return {
      position,
      name,
      points,
      prize
    };
  });
};

const rankingData = generateRankingData();

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
  const [showAll, setShowAll] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState('2d 14h 32m');

  const displayedData = showAll ? rankingData : rankingData.slice(0, 20);

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
          <p className="text-lg font-semibold text-wise-green">{timeRemaining} restantes</p>
          <p className="text-xs text-muted-foreground mt-1">
            ⚠️ Ranking zera toda quinta-feira às 23h59
          </p>
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

      {/* User Position - Fixed Display */}
      <Card className="wise-card border-wise-green/50 bg-wise-green-pale">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-wise-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">23</span>
              </div>
              <div>
                <p className="font-semibold">Sua Posição Atual</p>
                <p className="text-sm text-muted-foreground">1.250 pontos</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-wise-green">R$ 30,00</p>
              <p className="text-sm text-muted-foreground">Prêmio estimado</p>
              <p className="text-xs text-wise-green">+45% vs semana anterior</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ranking List */}
      <Card className="wise-card">
        <CardHeader>
          <CardTitle>Top 100 - Ranking Semanal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {displayedData.map((player) => (
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
                  <span className="font-bold text-lg w-8">{player.position}º</span>
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
          
          {!showAll && (
            <div className="text-center pt-4">
              <Button 
                onClick={() => setShowAll(true)}
                className="wise-button-secondary px-6 py-2 rounded-lg flex items-center space-x-2"
              >
                <span>Ver todas as {rankingData.length} posições</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          )}

          {showAll && (
            <div className="text-center pt-4">
              <Button 
                onClick={() => setShowAll(false)}
                variant="outline"
                className="px-6 py-2 rounded-lg"
              >
                Mostrar menos
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Ranking;
