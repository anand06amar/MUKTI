'use client'
import { Button } from "../ui/moving-border";
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
import { ComboboxDemo } from "./combo-box"
import { HTMLInputTypeAttribute, useRef, useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "@/firebase/config";

const db = getFirestore(app)

export function DialogDemo() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [year, setYear] = useState('1')
  const [institute, setInstitute] = useState('')

  async function handleSubmit() {

    if (mobile.length != 10) {
      alert('Please enter a valid mobile number')
    }
    setDoc(doc(db, 'users', email), { name: name, email: email, mobile: mobile, year: year, institute: institute }).then(() => console.log('success')).catch((e) => console.log(e))
    console.log(name, email, mobile, year, institute)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          borderRadius="2.25rem"
          className=" dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 z-50"
        >
          Register Yourself
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] text-white">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>
            Enter your details
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" onChange={(e) => setName(e.target.value)} value={name} className="col-span-3 bg-slate-900" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" onChange={(e) => setEmail(e.target.value)} value={email} className="col-span-3 bg-slate-900" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mobilenumber" className="text-right">
              Mobile Number
            </Label>
            <Input id="mobileNumber" onChange={(e) => setMobile(e.target.value)} value={mobile} className="col-span-3 bg-slate-900" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="college" className="text-right">
              Institute Name
            </Label>
            <Input id="college" onChange={(e) => setInstitute(e.target.value)} value={institute} className="col-span-3 bg-slate-900" />
          </div>
          <div className="flex justify-center">
            <ComboboxDemo year={setYear} />
            {/* <Input id="year" value="1" className="col-span-3 bg-slate-900" /> */}
          </div>
        </div>

        <DialogFooter>
          <div onClick={handleSubmit}>
            <Button type="submit">Register</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

