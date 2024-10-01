"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
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
import Image from "next/image";
import { clsx } from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 flex h-20 items-center gap-4 border-b border-border-color bg-background px-4 md:px-12 w-full justify-between">
      <span>
        <Link href="/"> {/* to make the logo clickable and redirect to the home page  */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={140} // Adjust the width and height based on your design needs
          height={50}
          className="h-auto w-auto" // Ensures the image retains its aspect ratio
        />
        </Link>
      </span>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#hero"
          className={clsx(
            "relative group font-medium text-foreground transition-colors hover:text-primary duration-300 pb-2 pr-2",
            {
              "text-primary": pathname === "/", // Apply the same text color as hover for active path
            }
          )}
        >
          Home
          <span
            className={clsx(
              "absolute left-[-10px] bottom-0 h-1 w-full bg-primary origin-left transition-transform duration-300",
              {
                "scale-x-125": pathname === "/", // Apply the hover-like scaling effect for the active path
                "scale-x-0 group-hover:scale-x-125": pathname !== "/", // Only scale on hover for non-active paths
              }
            )}
          ></span>
        </Link>
        <Link
          href="#about"
          className={clsx(
            "relative group font-medium text-foreground transition-colors hover:text-primary duration-300 pb-2 pr-2",
            {
              "text-primary": pathname === "/about", // Apply the same text color as hover for active path
            }
          )}
        >
          About
          <span
            className={clsx(
              "absolute left-[-10px] bottom-0 h-1 w-full bg-primary origin-left transition-transform duration-300",
              {
                "scale-x-125": pathname === "/about", // Apply the hover-like scaling effect for the active path
                "scale-x-0 group-hover:scale-x-125": pathname !== "/about", // Only scale on hover for non-active paths
              }
            )}
          ></span>
        </Link>
        <Link
          href="#services"
          className={clsx(
            "relative group font-medium text-foreground transition-colors hover:text-primary duration-300 pb-2 pr-2",
            {
              "text-primary": pathname === "/services", // Apply the same text color as hover for active path
            }
          )}
        >
          Services
          <span
            className={clsx(
              "absolute left-[-10px] bottom-0 h-1 w-full bg-primary origin-left transition-transform duration-300",
              {
                "scale-x-125": pathname === "/services", // Apply the hover-like scaling effect for the active path
                "scale-x-0 group-hover:scale-x-125": pathname !== "/services", // Only scale on hover for non-active paths
              }
            )}
          ></span>
        </Link>
        <Link
          href="#contact"
          className={clsx(
            "relative group font-medium text-foreground transition-colors hover:text-primary duration-300 pb-2 pr-2",
            {
              "text-primary": pathname === "/contact", // Apply the same text color as hover for active path
            }
          )}
        >
          Contact
          <span
            className={clsx(
              "absolute left-[-10px] bottom-0 h-1 w-full bg-primary origin-left transition-transform duration-300",
              {
                "scale-x-125": pathname === "/contact", // Apply the hover-like scaling effect for the active path
                "scale-x-0 group-hover:scale-x-125": pathname !== "/contact", // Only scale on hover for non-active paths
              }
            )}
          ></span>
        </Link>
        
        <span className="text-muted-foreground transition-colors hover:text-primary duration-300 pb-2 pr-2">
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
          className="flex flex-col border-2  justify-between"
        >
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-muted-foreground hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#contact"
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
