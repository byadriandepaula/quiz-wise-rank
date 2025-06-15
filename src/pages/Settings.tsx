
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Lock, CreditCard, Bell, Trash2, Eye, EyeOff, Moon, Sun, Upload, Check, AlertTriangle } from 'lucide-react';

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [systemMessages, setSystemMessages] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [pixKeyStatus, setPixKeyStatus] = useState('confirmed'); // confirmed, pending, invalid

  const getPixStatusConfig = (status: string) => {
    switch (status) {
      case 'confirmed':
        return {
          icon: <Check className="w-4 h-4 text-green-600" />,
          text: 'Confirmada',
          color: 'text-green-600',
          bgColor: 'bg-green-100'
        };
      case 'pending':
        return {
          icon: <AlertTriangle className="w-4 h-4 text-yellow-600" />,
          text: 'Pendente',
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-100'
        };
      default:
        return {
          icon: <AlertTriangle className="w-4 h-4 text-red-600" />,
          text: 'Inválida',
          color: 'text-red-600',
          bgColor: 'bg-red-100'
        };
    }
  };

  const pixStatus = getPixStatusConfig(pixKeyStatus);

  return (
    <div className="space-y-6 pb-16 md:pb-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Configurações</h1>
        <p className="text-muted-foreground">Gerencie sua conta e preferências</p>
      </div>

      {/* Account Information */}
      <Card className="wise-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5 text-wise-green" />
            <span>Informações da Conta</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="w-16 h-16 bg-wise-green rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <Upload className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <Button variant="outline" size="sm">
                Alterar Foto
              </Button>
              <p className="text-xs text-muted-foreground mt-1">
                JPG, PNG ou GIF. Máximo 2MB.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Nome Completo</label>
              <Input defaultValue="João Silva" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <div className="relative">
                <Input defaultValue="joao.silva@email.com" type="email" />
                <Badge className="absolute right-2 top-2 bg-green-100 text-green-800 text-xs">
                  Verificado
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Data de Criação</label>
              <Input defaultValue="15/03/2024" disabled className="bg-muted" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Último Login</label>
              <Input defaultValue="Hoje às 14:32" disabled className="bg-muted" />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="wise-button-primary">Salvar Alterações</Button>
          </div>
        </CardContent>
      </Card>

      {/* Password Settings */}
      <Card className="wise-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-wise-green" />
            <span>Segurança da Conta</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Senha Atual</label>
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"} 
                placeholder="Digite sua senha atual"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Nova Senha</label>
            <Input type="password" placeholder="Digite sua nova senha" />
            <div className="mt-1 text-xs text-muted-foreground">
              Mínimo 8 caracteres, incluindo números e símbolos
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Confirmar Nova Senha</label>
            <Input type="password" placeholder="Confirme sua nova senha" />
          </div>

          <div className="bg-wise-green-pale p-3 rounded-lg">
            <p className="text-sm text-wise-green font-medium">💡 Dica de Segurança</p>
            <p className="text-sm text-muted-foreground mt-1">
              Use uma senha única que você não usa em outros sites. Considere usar um gerenciador de senhas.
            </p>
          </div>

          <div className="flex justify-end">
            <Button className="wise-button-primary">Atualizar Senha</Button>
          </div>
        </CardContent>
      </Card>

      {/* Financial Data */}
      <Card className="wise-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-wise-green" />
            <span>Dados Financeiros</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Chave PIX</label>
            <div className="flex space-x-2">
              <Input defaultValue="joao.silva@email.com" className="flex-1" />
              <Button variant="outline">Editar</Button>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              {pixStatus.icon}
              <span className={`text-sm font-medium ${pixStatus.color}`}>
                {pixStatus.text}
              </span>
            </div>
          </div>

          <div className="bg-wise-green-pale p-3 rounded-lg">
            <p className="text-sm text-wise-green font-medium">⚠️ Importante</p>
            <p className="text-sm text-muted-foreground mt-1">
              Certifique-se de que sua chave PIX está correta para receber os prêmios. 
              Alterações podem levar até 24h para serem validadas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">Total Recebido</p>
              <p className="text-2xl font-bold text-wise-green">R$ 425,00</p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">Pendente</p>
              <p className="text-2xl font-bold text-yellow-600">R$ 30,00</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications and Preferences */}
      <Card className="wise-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-wise-green" />
            <span>Notificações e Preferências</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Notificações por Email</p>
              <p className="text-sm text-muted-foreground">Receber atualizações e resultados</p>
            </div>
            <Switch 
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Mensagens do Sistema</p>
              <p className="text-sm text-muted-foreground">Receber avisos importantes</p>
            </div>
            <Switch 
              checked={systemMessages}
              onCheckedChange={setSystemMessages}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {darkMode ? <Moon className="w-5 h-5 text-muted-foreground" /> : <Sun className="w-5 h-5 text-muted-foreground" />}
              <div>
                <p className="font-medium">Modo Escuro</p>
                <p className="text-sm text-muted-foreground">Alternar tema da interface</p>
              </div>
            </div>
            <Switch 
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              Suas preferências são salvas automaticamente e sincronizadas entre dispositivos.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Account Deletion */}
      <Card className="wise-card border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-600">
            <Trash2 className="w-5 h-5" />
            <span>Zona de Perigo</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="text-red-800 font-medium mb-2">Excluir Conta Permanentemente</p>
            <p className="text-red-700 text-sm mb-3">
              Esta ação é irreversível. Todos os seus dados, histórico, pontuações e prêmios pendentes serão perdidos permanentemente.
            </p>
            <Button variant="destructive" size="sm">
              Excluir Conta Permanentemente
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
