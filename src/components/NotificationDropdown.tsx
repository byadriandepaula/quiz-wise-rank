
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotificationDropdown = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount] = useState(3);

  const notifications = [
    {
      id: 1,
      title: 'Nova posição no ranking',
      message: 'Você subiu para a 23ª posição!',
      time: '2 min atrás',
      unread: true
    },
    {
      id: 2,
      title: 'Quiz disponível',
      message: 'Novo quiz de História disponível',
      time: '1 hora atrás',
      unread: true
    },
    {
      id: 3,
      title: 'Prêmio recebido',
      message: 'R$ 30,00 foram creditados',
      time: '3 horas atrás',
      unread: false
    }
  ];

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Button>

      {showNotifications && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-sm">Notificações</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b border-border hover:bg-muted/50 cursor-pointer ${
                  notification.unread ? 'bg-wise-green-pale/50' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{notification.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                  </div>
                  {notification.unread && (
                    <div className="w-2 h-2 bg-primary rounded-full ml-2 mt-1"></div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {notification.time}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-border">
            <Button variant="outline" size="sm" className="w-full">
              Ver todas as notificações
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
