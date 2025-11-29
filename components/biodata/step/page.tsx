"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Stepper, { Step } from "@/components/Stepper";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  fullName: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  photoProfile: z.string().url().optional(),
  documentUrl: z.string().url().optional(),
  portfolio: z.array(z.string().url()).optional(),
  bidangId: z.string().optional(),
  skills: z.array(z.string()).optional(),
});

const StepComponent: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [photoPreview, setPhotoPreview] = useState<string>(
    "https://via.placeholder.com/150"
  );

  const form = useForm({ resolver: zodResolver(schema), defaultValues: {} });

  const [stepCompleted, setStepCompleted] = useState({
    step1: false,
    step2: false,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function submitAll(values: any) {
    await fetch("http://localhost:3000/api/biodata/cmike597s0003ut64g1hbp6pz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
  }

  return (
    <div>
      <Stepper
        initialStep={1}
        backButtonText="Previous"
        nextButtonText="Next"
        onStepChange={() => {}}
        onFinalStepCompleted={form.handleSubmit(submitAll)}
      >
        {/* STEP 1 */}
        <Step>
          <Form {...form}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={photoPreview} />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
                <FormField
                  control={form.control}
                  name="photoProfile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Photo Profile URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://..."
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            setPhotoPreview(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Form>
        </Step>

        {/* STEP 2 */}
        <Step>
          <Form {...form}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="documentUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Document URL</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="portfolio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio URL (comma separated)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => {
                          const arr = e.target.value
                            .split(",")
                            .map((s) => s.trim());
                          field.onChange(arr);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Form>
        </Step>

        {/* STEP 3 */}
        <Step>
          <Form {...form}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="bidangId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bidang ID</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills (comma separated)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => {
                          const arr = e.target.value
                            .split(",")
                            .map((s) => s.trim());
                          field.onChange(arr);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Form>
        </Step>
      </Stepper>
    </div>
  );
};

export default StepComponent;
