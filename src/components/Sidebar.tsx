"use client";

import { usePathname } from "next/navigation"; // Import usePathname to get the current path
import { CalendarDays, CircleDollarSign, House, Settings, SquareKanban, User, LogOut } from "lucide-react";
import UserItem from "./UserItem";
import MobileNav from "./MobileNav";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname(); // Get current path

  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/home",
          icon: <House />,
          text: "Dashboard"
        },
        {
          link: "/finances",
          icon: <CircleDollarSign />,
          text: "Finances"
        },
        {
          link: "/tasks",
          icon: <SquareKanban />,
          text: "Tasks"
        },
        {
          link: "/calendar",
          icon: <CalendarDays />,
          text: "Calendar"
        }
      ]
    },
    {
      group: "Settings",
      items: [
        {
          link: "/settings",
          icon: <Settings />,
          text: "Settings"
        },
        {
          link: "/profile",
          icon: <User />,
          text: "Profile"
        }
      ]
    },
    {
      group: "Sign Out",
      items: [
        {
          link: "/signout",
          icon: <LogOut />,
          text: "Sign Out"
        }
      ]
    }
  ];

  return (
    <div className="fixed flex flex-col gap-4 xl:min-w-[300px] border-r p-4 min-h-screen">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <Link key={optionKey} href={option.link} passHref>
                    <CommandItem
                      className={`flex gap-2 cursor-pointer mt-2 ${
                        pathname === option.link ? 'bg-blue-500 text-white' : 'text-black'
                      }`}
                    >
                      {option.icon}
                      {option.text}
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>
        <Button className="bg-white text-black flex gap-2 cursor-pointer shadow-none">
          <LogOut />
          Sign Out
        </Button>
      </div>
      <MobileNav />
    </div>
  );
}
