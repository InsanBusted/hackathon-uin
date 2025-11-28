"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { getFromCookies } from "@/lib/cookies";

import { Home, Briefcase } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = getFromCookies("user");

  const role = user?.role?.toLowerCase();

  // console.log(role);

  const menuItems = [
    { label: "Dashboard", icon: Home, href: `/dashboard/${role}` },
    {
      label: role === "client" ? "Project" : "Lowongan",
      icon: Briefcase,
      href: `/dashboard/${role}/${role === "client" ? "project" : "lowongan"}`,
    },
  ];

  return (
    <Sidebar className="border-r border-neutral-200 text-primary">
      <SidebarHeader className="flex items-center pt-4">
        <Image
          src="/lokerin.png"
          alt="Lokerin Logo"
          width={150}
          height={50}
          priority
        />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>

          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  className="[&.active]:bg-primary/10 [&.active]:text-primary"
                >
                  <Link href={item.href} className="flex items-center gap-2">
                    <item.icon className="size-5" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="text-xs px-3 pb-3 text-primary/50">
        © 2024 LOKERIN
      </SidebarFooter>
    </Sidebar>
  );
}
