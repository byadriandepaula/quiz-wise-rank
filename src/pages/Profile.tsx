
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Calendar, Award, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weeklyData = [
  { week: 'Sem 1', position: 45, prize: 15 },
  { week: 'Sem 2', position: 32, prize: 30 },
  { week: 'Sem 3', position: 18, prize: 30 },
  { week: 'Sem 4', position: 12, prize: 30 },
  { week: 'Sem 5', position: 23, prize: 30 },
];

const prizeHistory = [
  { week: '03/06 - 09/06', position: 12, points: 1850, prize: 'R$ 30,00', status: 'Pago' },
  { week: '27/05 - 02/06', position: 18, points: 1650, prize: 'R$ 30,00', status: 'Pago' },
  { week: '20/05 - 26/05', position: 32, points: 1420, prize: 'R$ 30,00', status: 'Pago' },
  { week: '13/05 - 19/05', position: 45, points: 1180, prize: 'R$ 15,00', status: 'Pago' },
];

const Profile = () => {
  return (
    <div className="space-y-6 pb-16 md:pb-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-wise-green rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">João Silva</h1>
          <p className="text-muted-foreground">Membro desde 15/03/2024</p>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="wise-card">
          <CardContent className="p-4 text-center">
            <Award className="w-6 h-6 text-wise-green mx-auto mb-2" />
            <p className="text-2xl font-bold text-wise-green">R$ 425</p>
            <p className="text-sm text-muted-foreground">Total ganho</p>
          </CardContent>
        </Card>

        <Card className="wise-card">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 text-wise-green mx-auto mb-2" />
            <p className="text-2xl font-bold text-wise-green">7º</p>
            <p className="text-sm text-muted-foreground">Melhor posição</p>
          </CardContent>
        </Card>

        <Card className="wise-card">
          <CardContent className="p-4 text-center">
            <Calendar className="w-6 h-6 text-wise-green mx-auto mb-2" />
            <p className="text-2xl font-bold text-wise-green">12</p>
            <p className="text-sm text-muted-foreground">Semanas ativas</p>
          </CardContent>
        </Card>

        <Card className="wise-card">
          <CardContent className="p-4 text-center">
            <User className="w-6 h-6 text-wise-green mx-auto mb-2" />
            <p className="text-2xl font-bold text-wise-green">24</p>
            <p className="text-sm text-muted-foreground">Quizzes feitos</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card className="wise-card">
        <CardHeader>
          <CardTitle>Evolução de Posições - Últimas 5 Semanas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px'
                  }}
                />
                <Bar dataKey="position" fill="hsl(var(--wise-green))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Prize History */}
      <Card className="wise-card">
        <CardHeader>
          <CardTitle>Histórico de Premiações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {prizeHistory.map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border border-border rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-wise-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{entry.position}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{entry.week}</p>
                    <p className="text-sm text-muted-foreground">{entry.points} pontos</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-wise-green">{entry.prize}</p>
                  <p className="text-sm text-green-600">{entry.status}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
