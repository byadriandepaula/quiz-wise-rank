
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Calendar, Award, TrendingUp, Target, Zap, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const weeklyData = [
  { week: 'Sem 1', position: 45, prize: 15, points: 850 },
  { week: 'Sem 2', position: 32, prize: 30, points: 1200 },
  { week: 'Sem 3', position: 18, prize: 30, points: 1650 },
  { week: 'Sem 4', position: 12, prize: 30, points: 1850 },
  { week: 'Sem 5', position: 23, prize: 30, points: 1250 },
];

const monthlyData = [
  { month: 'Jan', points: 4200, position: 28 },
  { month: 'Fev', points: 5100, position: 22 },
  { month: 'Mar', points: 6800, position: 15 },
  { month: 'Abr', points: 5950, position: 18 },
  { month: 'Mai', points: 7200, position: 12 },
  { month: 'Jun', points: 8100, position: 8 },
];

const categoryData = [
  { name: 'História', points: 2580, color: '#8B5CF6' },
  { name: 'Geografia', points: 2100, color: '#06B6D4' },
  { name: 'Ciências', points: 1850, color: '#10B981' },
  { name: 'Literatura', points: 1420, color: '#F59E0B' },
  { name: 'Geral', points: 950, color: '#EF4444' },
];

const prizeHistory = [
  { week: '03/06 - 09/06', position: 12, points: 1850, prize: 'R$ 30,00', status: 'Pago', color: 'green' },
  { week: '27/05 - 02/06', position: 18, points: 1650, prize: 'R$ 30,00', status: 'Pago', color: 'green' },
  { week: '20/05 - 26/05', position: 32, points: 1420, prize: 'R$ 30,00', status: 'Pago', color: 'green' },
  { week: '13/05 - 19/05', position: 45, points: 1180, prize: 'R$ 15,00', status: 'Pago', color: 'green' },
  { week: '06/05 - 12/05', position: 28, points: 1350, prize: 'R$ 30,00', status: 'Pendente', color: 'yellow' },
  { week: '29/04 - 05/05', position: 52, points: 980, prize: 'R$ 7,00', status: 'Pago', color: 'green' },
];

const Profile = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('3-meses');
  const currentWeekPerformance = "+45%";
  const isPositivePerformance = currentWeekPerformance.startsWith('+');

  const periods = [
    { value: '3-meses', label: 'Últimos 3 meses' },
    { value: '6-meses', label: 'Últimos 6 meses' },
    { value: 'ano', label: 'Ano atual' },
    { value: 'tudo', label: 'Histórico completo' }
  ];

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
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-sm text-muted-foreground">Performance esta semana:</span>
            <span className={`text-sm font-semibold ${isPositivePerformance ? 'text-green-600' : 'text-red-600'}`}>
              {currentWeekPerformance} vs semana anterior
            </span>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
            <Target className="w-6 h-6 text-wise-green mx-auto mb-2" />
            <p className="text-2xl font-bold text-wise-green">24</p>
            <p className="text-sm text-muted-foreground">Quizzes feitos</p>
          </CardContent>
        </Card>

        <Card className="wise-card">
          <CardContent className="p-4 text-center">
            <Zap className="w-6 h-6 text-wise-green mx-auto mb-2" />
            <p className="text-2xl font-bold text-wise-green">87%</p>
            <p className="text-sm text-muted-foreground">Taxa de acerto</p>
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

      <div className="grid md:grid-cols-2 gap-6">
        {/* Monthly Performance */}
        <Card className="wise-card">
          <CardHeader>
            <CardTitle>Performance Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" />
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

        {/* Categories Chart */}
        <Card className="wise-card">
          <CardHeader>
            <CardTitle>Categorias Favoritas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="points"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-sm">{category.name}</span>
                  </div>
                  <span className="text-sm font-semibold">{category.points} pts</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Prize History */}
      <Card className="wise-card">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <CardTitle>Histórico de Premiações</CardTitle>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="p-2 border border-border rounded-md bg-background text-sm"
              >
                {periods.map(period => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
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
                  <p className={`text-sm ${
                    entry.status === 'Pago' ? 'text-green-600' : 
                    entry.status === 'Pendente' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {entry.status}
                  </p>
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
