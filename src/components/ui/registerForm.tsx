"use client";
import { Button } from "../ui/moving-border";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComboboxDemo } from "./combo-box";
import { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "@/firebase/config";
import { Alert, Snackbar } from "@mui/material";
import { ComboboxDemo2 } from "./combo-box2";

const db = getFirestore(app);

export function DialogDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [roll, setRoll] = useState("");
  const [year, setYear] = useState("1");
  const [tech, setTech] = useState("HTML")
  const [institute, setInstitute] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit() {
    if (
      mobile.length === 10 &&
      name !== "" &&
      email !== "" &&
      roll !== "" &&
      tech !== "" &&
      institute !== "" &&
      year !== ""
    ) {
      setDoc(doc(db, "users", email), {
        name: name,
        email: email,
        mobile: mobile,
        year: year,
        tech: tech,
        roll:roll,
        institute: institute,
      })
        .then(() => setSuccess(true))
        .catch((e) => console.log(e));
    } else {
      setError(true);
    }
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  const handleSuccessClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            borderRadius="2.25rem"
            className=" dark:bg-slate-900 dark:text-white !font-semibold border-neutral-200 dark:border-slate-800 z-40"
          >
            Register Yourself
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[550px] text-white">
          <DialogHeader>
            <DialogTitle>Register</DialogTitle>
            <DialogDescription>Enter your details</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="col-span-3 bg-slate-900"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="col-span-3 bg-slate-900"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="mobilenumber" className="text-right">
                Mobile Number
              </Label>
              <Input
                id="mobileNumber"
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
                className="col-span-3 bg-slate-900"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="college" className="text-right">
                Institute Name
              </Label>
              <Input
                id="college"
                onChange={(e) => setInstitute(e.target.value)}
                value={institute}
                className="col-span-3 bg-slate-900"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="roll" className="text-right">
                Roll No.
              </Label>
              <Input
                id="roll"
                onChange={(e) => setRoll(e.target.value)}
                value={roll}
                className="col-span-3 bg-slate-900"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="year" className="text-right">
                Year
              </Label>
              <ComboboxDemo year={setYear} />
              {/* <Input id="year" value="1" className="col-span-3 bg-slate-900" /> */}
            </div>
            <div className="font-bold flex justify-center">
              If you want to join in Tech Mentorship fill the below field
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tech" className="text-right">
                Tech
              </Label>
              <ComboboxDemo2 year={setTech} />
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
      <Snackbar open={error} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Please fill all the fields correctly
        </Alert>
      </Snackbar>
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={handleSuccessClose}
      >
        <Alert
          onClose={handleSuccessClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          You are successfully registered
        </Alert>
      </Snackbar>
    </>
  );
}
