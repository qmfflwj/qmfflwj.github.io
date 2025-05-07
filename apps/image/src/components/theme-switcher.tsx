'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import * as React from 'react';
import { Button } from '@workspace/ui/components/ui/button';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Button size={'icon'} onClick={handleThemeChange}>
      <Sun className="hidden dark:inline stroke-foreground" />
      <Moon className="inline dark:hidden stroke-foreground" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
