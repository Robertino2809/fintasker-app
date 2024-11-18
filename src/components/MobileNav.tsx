"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CalendarDays, CircleDollarSign, House, Settings, SquareKanban, User, LogOut } from "lucide-react"

const menuList = [
  {
    group: "General",
    items: [
      {
        link: "/",
        icon: <House />,
        text: "Dashboard"
      },
      {
        link: "/finances",
        icon: <CircleDollarSign />,
        text: "Finances"
      },
      {
        link: "/kanban",
        icon: <SquareKanban />,
        text: "Kanban"
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
      },
    ]
  },
  {
    group: "Sign Out",
    items: [
      {
        link: "/signout",
        icon: <LogOut />,
        text: "Sign Out"
      },
    ]
  }
]

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export default function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">

              </div>
              <div className="grid grid-cols-4 items-center gap-4">

              </div>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
