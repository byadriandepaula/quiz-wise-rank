
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HomeIcon, PlayIcon, TrophyIcon } from '@/components/CustomIcons';
import { NotificationDropdown } from '@/components/NotificationDropdown';
import { useTheme, ThemeProvider } from '@/hooks/useTheme';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContent = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Play Quiz', href: '/quiz', icon: PlayIcon },
    { name: 'Ranking', href: '/ranking', icon: TrophyIcon },
    { name: 'Perfil', href: '/profile', icon: User },
    { name: 'Configurações', href: '/settings', icon: User },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="wise-card border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-wise-green rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <span className="font-semibold text-lg">QuizMaster</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-wise-green-pale text-wise-green"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <NotificationDropdown />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <div className="grid grid-cols-5 gap-1 p-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex flex-col items-center justify-center p-2 rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-wise-green-pale text-wise-green"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
};

export default Layout;
