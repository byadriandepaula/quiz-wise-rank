
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Trophy, Star, Clock, ArrowUp, ArrowDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weekData = [
  { day: 'Qui', points: 120 },
  { day: 'Sex', points: 280 },
  { day: 'Sáb', points: 450 },
  { day: 'Dom', points: 680 },
  { day: 'Seg', points: 920 },
  { day: 'Ter', points: 1150 },
  { day: 'Qua', points: 1250 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 pb-16 md:pb-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Olá, João! 👋</h1>
          <p className="text-muted-foreground">Bem-vindo de volta ao QuizMaster</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Ranking encerra em</p>
          <p className="text-lg font-semibold text-foreground">2d 14h 32m</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="wise-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-wise-green" />
              <div>
                <p className="text-sm text-muted-foreground">Posição</p>
                <p className="text-2xl font-bold">23º</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="wise-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-wise-green" />
              <div>
                <p className="text-sm text-muted-foreground">Pontos</p>
                <p className="text-2xl font-bold">1.250</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="wise-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-wise-green rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">R$</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Prêmio</p>
                <p className="text-2xl font-bold text-wise-green">R$ 30</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="wise-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <ArrowUp className="w-5 h-5 text-wise-green" />
              <div>
                <p className="text-sm text-muted-foreground">Evolução</p>
                <p className="text-2xl font-bold text-wise-green">+45%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card className="wise-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-wise-green" />
            <span>Evolução de Pontos - Esta Semana</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weekData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="points" 
                  stroke="hsl(var(--wise-green))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--wise-green))', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="wise-card">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-wise-green">R$ 425</p>
              <p className="text-sm text-muted-foreground">Total já ganho</p>
            </div>
          </CardContent>
        </Card>

        <Card className="wise-card">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-wise-green">7º</p>
              <p className="text-sm text-muted-foreground">Melhor posição</p>
            </div>
          </CardContent>
        </Card>

        <Card className="wise-card">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-wise-green">24</p>
              <p className="text-sm text-muted-foreground">Quizzes completados</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="wise-card">
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="wise-button-primary p-4 rounded-lg text-left">
              <div className="flex items-center space-x-3">
                <Play className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Jogar Quiz</p>
                  <p className="text-sm opacity-90">Continue ganhando pontos</p>
                </div>
              </div>
            </button>
            
            <button className="wise-button-secondary p-4 rounded-lg text-left">
              <div className="flex items-center space-x-3">
                <Trophy className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Ver Ranking</p>
                  <p className="text-sm opacity-75">Confira sua posição</p>
                </div>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
