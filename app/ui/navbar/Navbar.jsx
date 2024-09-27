import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../modeToggle/ModeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-2 border-red-600 bg-background px-4 md:px-12 w-full justify-between">
      <span>Logo</span>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact
        </Link>
        <span className="text-muted-foreground transition-colors hover:text-foreground">
          <ModeToggle />
        </span>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col border-2 border-red-700 justify-between"
        >
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <span className="sticky bottom-0 text-muted-foreground transition-colors hover:text-foreground">
            <ModeToggle />
          </span>
        </SheetContent>
      </Sheet>
    </header>
  );
}
