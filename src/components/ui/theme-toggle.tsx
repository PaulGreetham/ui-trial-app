"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Render nothing until mounted

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2"
    >
      {theme === "light" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
