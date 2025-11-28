import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

const Header = () => {
  return (
    <div>
      <header className="bg-whitesticky top-0 z-40 w-full border-b shadow-2xl bg-white backdrop-blur">
        <div className="flex h-16 items-center px-4">
          {/* Mobile hamburger */}
          <SidebarTrigger className="" />
          {/* Search (opsional) */}
          <div className="ml-auto flex items-center space-x-4">
            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 cursor-pointer focus:outline-none">
                  <h1 className="text-sm font-medium text-primary font-baloo">
                    insan
                  </h1>
                  <Avatar className="h-8 w-8 text-primary">
                    <AvatarImage src="/user.png" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="bg-neutral-800 text-primary font-baloo border-neutral-700"
              >
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem className="text-red-400">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
