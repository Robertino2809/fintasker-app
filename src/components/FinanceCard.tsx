import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePickerDemo } from "./Date"

export default function FinanceCard() {
  return (
    <div className="flex flex-col shadow-md w-full h-full border border-neutral-300 rounded-2xl p-5">
      <h1 className="text-lg mb-2 text-neutral-500">Avaliable Budget</h1>
      <h1 className="text-3xl font-semibold">$19,456.74</h1>
      <div className="flex w-full h-full justify-end items-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-primary text-white hover:bg-secondary hover:text-white">Add new transaction</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new transaction</DialogTitle>
              <DialogDescription>
                Add new transaction to your budget.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-left">
                  Description
                </Label>
                <Input id="name" placeholder="Buying groceries..." className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-left">
                  Category
                </Label>
                <Input id="username" placeholder="Fuel, Food..." className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-left">
                  Date
                </Label>
                <DatePickerDemo></DatePickerDemo>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-primary">Add transaction</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}