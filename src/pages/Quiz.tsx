
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Play, Star, Search, Filter, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const quizzes = [
  {
    id: 1,
    name: 'Geografia Mundial',
    questions: 20,
    difficulty: 'Médio',
    points: 100,
    participants: 1420,
    category: 'Geografia',
    createdAt: '2024-06-10',
    isNew: true
  },
  {
    id: 2,
    name: 'História do Brasil',
    questions: 15,
    difficulty: 'Fácil',
    points: 75,
    participants: 2850,
    category: 'História',
    createdAt: '2024-06-05',
    isNew: false
  },
  {
    id: 3,
    name: 'Ciências Exatas',
    questions: 25,
    difficulty: 'Difícil',
    points: 150,
    participants: 680,
    category: 'Ciências',
    createdAt: '2024-06-12',
    isNew: true
  },
  {
    id: 4,
    name: 'Literatura Brasileira',
    questions: 18,
    difficulty: 'Médio',
    points: 90,
    participants: 1120,
    category: 'Literatura',
    createdAt: '2024-06-08',
    isNew: false
  },
  {
    id: 5,
    name: 'Conhecimentos Gerais',
    questions: 30,
    difficulty: 'Fácil',
    points: 120,
    participants: 3250,
    category: 'Geral',
    createdAt: '2024-06-01',
    isNew: false
  },
  {
    id: 6,
    name: 'Tecnologia e Inovação',
    questions: 22,
    difficulty: 'Difícil',
    points: 130,
    participants: 890,
    category: 'Tecnologia',
    createdAt: '2024-06-11',
    isNew: true
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Fácil': return 'text-green-600 bg-green-100';
    case 'Médio': return 'text-yellow-600 bg-yellow-100';
    case 'Difícil': return 'text-red-600 bg-red-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};

const getDifficultyStars = (difficulty: string) => {
  const count = difficulty === 'Fácil' ? 1 : difficulty === 'Médio' ? 2 : 3;
  return Array.from({ length: 3 }, (_, i) => (
    <Star
      key={i}
      className={cn(
        "w-3 h-3",
        i < count ? "text-yellow-500 fill-current" : "text-gray-300"
      )}
    />
  ));
};

const Quiz = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [sortBy, setSortBy] = useState('');

  const categories = ['Todos', 'Geografia', 'História', 'Ciências', 'Literatura', 'Geral', 'Tecnologia'];
  const difficulties = ['Todos', 'Fácil', 'Médio', 'Difícil'];
  const sortOptions = ['Padrão', 'Mais Recentes', 'Mais Pontos', 'Mais Participantes'];

  const filteredAndSortedQuizzes = quizzes
    .filter(quiz => {
      const matchesSearch = quiz.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || selectedCategory === 'Todos' || quiz.category === selectedCategory;
      const matchesDifficulty = !selectedDifficulty || selectedDifficulty === 'Todos' || quiz.difficulty === selectedDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'Mais Recentes':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'Mais Pontos':
          return b.points - a.points;
        case 'Mais Participantes':
          return b.participants - a.participants;
        default:
          return 0;
      }
    });

  return (
    <div className="space-y-6 pb-16 md:pb-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Quizzes Disponíveis</h1>
        <p className="text-muted-foreground">Escolha um quiz e ganhe pontos para o ranking</p>
      </div>

      {/* Search and Filters */}
      <Card className="wise-card">
        <CardContent className="p-4">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar quizzes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Categoria</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  {categories.map(category => (
                    <option key={category} value={category === 'Todos' ? '' : category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Dificuldade</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty === 'Todos' ? '' : difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Ordenar por</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option === 'Padrão' ? '' : option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button className="wise-button-secondary p-2 rounded-md w-full flex items-center justify-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>Limpar Filtros</span>
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quiz Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedQuizzes.map((quiz) => (
          <Card key={quiz.id} className="wise-card hover:shadow-md transition-shadow relative">
            {/* New Badge */}
            {quiz.isNew && (
              <Badge className="absolute top-3 right-3 bg-wise-green text-white z-10">
                Novo
              </Badge>
            )}

            <CardHeader className="pb-3">
              <div className="flex items-start justify-between pr-12">
                <CardTitle className="text-lg">{quiz.name}</CardTitle>
                <div className={cn("px-2 py-1 rounded text-xs font-medium", getDifficultyColor(quiz.difficulty))}>
                  {quiz.difficulty}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {getDifficultyStars(quiz.difficulty)}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Perguntas</p>
                    <p className="font-semibold">{quiz.questions}</p>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground">Pontos</p>
                  <p className="font-semibold text-wise-green">{quiz.points}</p>
                </div>
                <div className="col-span-2 flex items-center space-x-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Participantes</p>
                    <p className="font-semibold">{quiz.participants.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <button className="w-full wise-button-primary p-3 rounded-lg flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Jogar Agora</span>
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAndSortedQuizzes.length === 0 && (
        <Card className="wise-card">
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">Nenhum quiz encontrado com os filtros selecionados.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Quiz;
