
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { User, Mail, Lock, CreditCard, Bell, Trash2, Eye, EyeOff } from 'lucide-react';

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [systemMessages, setSystemMessages] = useState(true);

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
            <div className="w-16 h-16 bg-wise-green rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <Button variant="outline" size="sm">
              Alterar Foto
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Nome Completo</label>
              <Input defaultValue="João Silva" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input defaultValue="joao.silva@email.com" type="email" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Data de Criação</label>
            <Input defaultValue="15/03/2024" disabled className="bg-muted" />
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
            <span>Alterar Senha</span>
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
                className="absolute right-3 top-3 text-muted-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Nova Senha</label>
            <Input type="password" placeholder="Digite sua nova senha" />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Confirmar Nova Senha</label>
            <Input type="password" placeholder="Confirme sua nova senha" />
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
            <p className="text-sm text-green-600 mt-1">✓ Confirmada</p>
          </div>

          <div className="bg-wise-green-pale p-3 rounded-lg">
            <p className="text-sm text-wise-green font-medium">⚠️ Importante</p>
            <p className="text-sm text-muted-foreground mt-1">
              Certifique-se de que sua chave PIX está correta para receber os prêmios. 
              Alterações podem levar até 24h para serem validadas.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="wise-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-wise-green" />
            <span>Notificações e Preferências</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
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
        </CardContent>
      </Card>

      {/* Account Deletion */}
      <Card className="wise-card border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-600">
            <Trash2 className="w-5 h-5" />
            <span>Excluir Conta</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Esta ação é irreversível. Todos os seus dados, histórico e prêmios pendentes serão perdidos.
          </p>
          <Button variant="destructive">
            Excluir Conta Permanentemente
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
