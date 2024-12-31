"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavBar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Course</HoveredLink>
            <HoveredLink href="/courses">
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/courses">Advance Composition</HoveredLink>
            <HoveredLink href="/courses">Song Writing</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
          <HoveredLink href="/contact">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </HoveredLink>
      </Menu>
    </div>
  );
}
