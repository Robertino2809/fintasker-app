'use client'

import { DropdownMenuDemo } from "./Dropdown"
import { Avatar, AvatarImage } from "./ui/avatar"

export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-lg p-2">
      <div className="avatar rounded-full min-h-10 min-w-10 text-white font-[700] flex justify-center items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Robertino</p>
        <p className="text-[12px] text-neutral-500">robertino@gmail.com</p>
      </div>
    </div>
  )
}