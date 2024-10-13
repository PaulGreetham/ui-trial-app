import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DrawerTrigger } from "@/components/ui/drawer";

export function HamburgerMenu() {
  return (
    <DrawerTrigger asChild>
      <Button variant="outline" className="p-2 m-4">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open Menu</span>
      </Button>
    </DrawerTrigger>
  );
}
