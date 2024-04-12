"use client";
import React from "react";
import { Navbar, NavbarContent } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface TopNavbarProps {}

export default function TopNavbar({}: TopNavbarProps) {
  const router = useRouter();

  return (
    <Navbar isBordered={false} className="w-full h-auto">
      <NavbarContent className="w-full justify-center border-b-4">
        <div
          className="hover:cursor-pointer my-6 text-3xl"
          onClick={() => router.push("/")}
        >
          <p className="font-semibold text-4xl">Modern Walk</p>
        </div>
      </NavbarContent>
    </Navbar>
  );
}
