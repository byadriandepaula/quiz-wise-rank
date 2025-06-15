
import React, { useState, useRef, useEffect } from 'react';
import { Bell, BellDot } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Novo Quiz Disponível',
    message: 'Quiz sobre História do Brasil está disponível!',
    time: '2h atrás',
    read: false
  },
  {
    id: '2',
    title: 'Prêmio Recebido',
    message: 'Você recebeu R$ 30,00 via PIX',
    time: '1d atrás',
    read: false
  },
  {
    id: '3',
    title: 'Ranking Atualizado',
    message: 'Você subiu para a 23ª posição!',
    time: '2d atrás',
    read: true
  }
];

export const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;
  const hasUnread = unreadCount > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-muted rounded-full transition-colors"
      >
        {hasUnread ? (
          <BellDot className="w-5 h-5 text-primary" />
        ) : (
          <Bell className="w-5 h-5 text-muted-foreground" />
        )}
        {hasUnread && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)} />
          <Card className="absolute right-0 mt-2 w-80 max-w-[90vw] z-50 shadow-lg border bg-background">
            <CardContent className="p-0">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold">Notificações</h3>
                {hasUnread && (
                  <button
                    onClick={markAllAsRead}
                    className="text-xs text-primary hover:underline"
                  >
                    Marcar todas como lidas
                  </button>
                )}
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground">
                    Nenhuma notificação
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => markAsRead(notification.id)}
                      className={`p-4 border-b hover:bg-muted/50 cursor-pointer transition-colors ${
                        !notification.read ? 'bg-primary/5' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        {!notification.read && (
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {notification.title}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};
