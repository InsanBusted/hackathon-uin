"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useForm } from "react-hook-form";

const FormFillData = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      education: "",
      experience: "",
      skills: "",
      portfolio: "",
      salary: "",
      bank: "",
      accountNumber: "",
    },
  });
  return (
    <div className="w-full flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6 bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">
        Fill In Your Data
      </h1>

      {/* Upload Photo */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-32 h-32 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center overflow-hidden">
          <Image
            src="/icons/camera.png"
            width={40}
            height={40}
            alt="Upload"
            className="opacity-60"
          />
        </div>
        <p className="text-blue-500 text-sm mt-2 cursor-pointer">
          Upload Photo *
        </p>
      </div>

      {/* FORM */}
      <Form {...form}>
        <form className="flex flex-col items-center justify-around gap-6 w-full max-w-8xl px-4">
          <div className="flex">
            {/* First Name */}
            <FormField
              name="firstName"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name *" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              name="lastName"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Last Name *" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex">
            {/* Email */}
            <FormField
              name="email"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email *" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              name="phone"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone Number *" type="tel" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex">
            {/* Address */}
            <FormField
              name="address"
              render={() => (
                <FormItem className="md:col-span-2">
                  <FormControl>
                    <Input placeholder="Address *" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Highest Education */}
            <FormField
              name="education"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Highest Education *" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex">
            {/* Work Experience */}
            <FormField
              name="experience"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Work Experience *" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Skills */}
            <FormField
              name="skills"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Type Your Skill..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex">
            {/* Portfolio */}
            <FormField
              name="portfolio"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Type Your Portfolio Link" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Salary Expectation */}
            <FormField
              name="salary"
              render={() => (
                <FormItem>
                  <FormControl>
                    <select className="border rounded-md p-2 w-full">
                      <option value="">Choose Your Salary Range</option>
                      <option>1 - 2 Juta</option>
                      <option>2 - 4 Juta</option>
                      <option>4 - 6 Juta</option>
                      <option>6 - 10 Juta</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex">
            {/* Bank */}
            <FormField
              name="bank"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Bank" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Account Number */}
            <FormField
              name="accountNumber"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Account Number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-end mt-4">
            <Button className="px-8">Next</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormFillData;
