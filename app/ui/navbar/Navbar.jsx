"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ModeToggle } from "../modeToggle/ModeToggle";
import Image from "next/image";
import { clsx } from "clsx";

export default function Navbar() {
  const [hash, setHash] = useState("");
  const sectionsRef = useRef({}); // Reference to hold each section's ref

  // Set up IntersectionObserver to update hash on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHash(`#${entry.target.id}`); // Update hash when section is in view
          }
        });
      },
      {
        threshold: 0.5, // Adjust based on when you want to trigger, 0.5 means halfway visible
      }
    );

    // Observe each section
    const sectionIds = ["hero", "about", "services","team","contact"];
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        sectionsRef.current[id] = section;
        observer.observe(section);
      }
    });

    return () => {
      // Clean up observer on component unmount
      sectionIds.forEach((id) => {
        if (sectionsRef.current[id]) {
          observer.unobserve(sectionsRef.current[id]);
        }
      });
    };
  }, []);

  const handleScroll = (id) => {
    setHash(id);
    document.getElementById(id.substring(1))?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const pathname = usePathname();

  return (
    <header className="sticky z-30 top-0 min-h-[10vh] flex h-20 items-center gap-4 border-b border-border-color bg-background px-4 md:px-12 w-full justify-between">
      <div className="container flex justify-between px-4 xl:max-w-6xl mx-auto">
        <span className="">
          <Link href="/">
            {/* Logo clickable and redirect to the home page  */}
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={50}
              className="h-auto w-auto"
            />
          </Link>
        </span>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#hero"
            className={clsx(
              "relative group font-medium text-foreground transition-colors hover:text-primary duration-300 pb-2 pr-2",
              {
                "text-primary": hash === "#hero" || !hash,
              }
            )}
            onClick={() => handleScroll("#hero")}
          >
            Home
            <span
              className={clsx(
                "absolute left-[-10px] bottom-0 h-1 w-full bg-primary origin-left transition-transform duration-300",
                {
                  "scale-x-125": hash === "#hero" || !hash,
                  "scale-x-0 group-hover:scale-x-125": hash !== "#hero",
                }
              )}
            ></span>
          </Link>
          <Link
            href="#about"
            className={clsx(
              "relative group font-medium text-foreground transition-colors hover:text-primary duration-300 pb-2 pr-2",
              {
                "text-primary": hash === "#about",
              }
            )}
            onClick={() => handleScroll("#about")}
          >
            About
            <span
              className={clsx(
                "absolute left-[-10px] bottom-0 h-1 w-full bg-primary origin-left transition-transform duration-300",
                {
                  "scale-x-125": hash === "#about",
                  "scale-x-0 group-hover:scale-x-125": hash !== "#about",
                }
              )}
            ></span>
          </Link>
          <Link
            href="#services"
            className={clsx(
              "relative group font-medium text-foreground transition-colors hover:text-primary duration-300 pb-2 pr-2",
              {
                "text-primary": hash === "#services",
              }
            )}
            onClick={() => handleScroll("#services")}
          >
            Services
            <span
              className={clsx(
                "absolute left-[-10px] bottom-0 h-1 w-full bg-primary origin-left transition-transform duration-300",
                {
                  "scale-x-125": hash === "#services",
                  "scale-x-0 group-hover:scale-x-125": hash !== "#services",
                }
              )}
            ></span>
          </Link>
          <Link
        href="#team"
        className={clsx(
          "relative group font-medium text-foreground transition-colors hover:text-primary duration-300 pb-2 pr-2",
          {
            "text-primary": hash === "#team",
          }
        )}
        onClick={() => handleClick("#team")}
      >
        Team
        <span
          className={clsx(
            "absolute left-[-10px] bottom-0 h-1 w-full bg-primary origin-left transition-transform duration-300",
            {
              "scale-x-125": hash === "#team",
              "scale-x-0 group-hover:scale-x-125": hash !== "#team",
            }
          )}
        ></span>
      </Link>
          <Link
            href="#contact"
            className={clsx(
              "relative group font-medium text-foreground transition-colors hover:text-primary duration-300 pb-2 pr-2",
              {
                "text-primary": hash === "#contact",
              }
            )}
            onClick={() => handleScroll("#contact")}
          >
            Contact
            <span
              className={clsx(
                "absolute left-[-10px] bottom-0 h-1 w-full bg-primary origin-left transition-transform duration-300",
                {
                  "scale-x-125": hash === "#contact",
                  "scale-x-0 group-hover:scale-x-125": hash !== "#contact",
                }
              )}
            ></span>
          </Link>
          

          <span className="text-muted-foreground transition-colors hover:text-primary duration-300 pb-2 pr-2">
            <ModeToggle />
          </span>
        </nav>
        <Sheet>
          <span className="sticky flex shrink-0 md:hidden gap-2 ml-4 bottom-0 text-muted-foreground transition-colors hover:text-foreground ">
            <ModeToggle />
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
          </span>

          <SheetContent
            side="left"
            className="flex flex-col border-2  justify-between"
          >
            <nav className="grid gap-6 text-lg font-medium">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#team"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Team
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
