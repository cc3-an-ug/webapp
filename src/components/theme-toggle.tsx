'use client';

import { Loader2, Moon, Settings, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import * as DropdownMenu from '@/components/ui/dropdown-menu';

import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const isLight = theme === 'light';
  const isSysLight = theme === 'system' && systemTheme === 'light';

  const isDark = theme === 'dark';
  const isSysDark = theme === 'system' && systemTheme === 'dark';

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button size="icon" variant="ghost" className="text-muted-foreground">
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {!loading && (isLight || isSysLight) && <Sun className="h-4 w-4" />}
          {!loading && (isDark || isSysDark) && <Moon className="h-4 w-4" />}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" sideOffset={20} className="w-40">
        <DropdownMenu.Item onClick={() => setTheme('light')}>
          Light
          <DropdownMenu.Shortcut>
            <Sun className="h-4 w-4" />
          </DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('dark')}>
          Dark
          <DropdownMenu.Shortcut>
            <Moon className="h-4 w-4" />
          </DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('system')}>
          System
          <DropdownMenu.Shortcut>
            <Settings className="h-4 w-4" />
          </DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
