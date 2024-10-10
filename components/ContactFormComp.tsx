"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import  IconType  from "@/public/ButtonIconWhite.svg"
import Button from "./ButtonCustom";
import { useState } from 'react'; 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";


// Define the schema using zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(11, {
    message: "Enter vaild Phone Number",
  }),
  email: z.string().email({
    message: "Enter vaild Email address",
  }),
  messageBody: z.string().min(20, {
    message: "Message must be at least 20 characters."
  }),
});

export function ProfileForm() {
  // Initialize the form using useForm and zodResolver

  const [submittedData, setSubmittedData] = useState(null); 
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "", // Provide a default value
      phone: "", // Provide a default value
      email: "", // Provide a default value
      messageBody: "", // Provide a default value
    },
  });

  // Submit handler
  const onSubmit = (datas: any) => {
    console.log(datas); // Handle form submission
    setSubmittedData(datas); 
  };

  return (
    <Form {...form}>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage className="pt-3 px-3" />
            </FormItem>
          )}
        />
         
        <FormField control={form.control}  name="phone" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Phone No." {...field} />
              </FormControl>
              <FormMessage className="pt-3 px-3" />
            </FormItem>
          )}
        />
           <FormField control={form.control}  name="email" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email Address" {...field} />
              </FormControl>
              <FormMessage className="pt-3 px-3" />
            </FormItem>
          )}
        />
        <FormField control={form.control}  name="messageBody" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea  placeholder="Message" {...field}  rows={10}/>
              </FormControl>
              <FormMessage className="pt-3 px-3" />
            </FormItem>
          )}
        />
       
         <Button type="submit"  icon={IconType} iconPosition="right" variant="primarySubmit" size="md" className="mx-auto sm:mx-0 pt-2">
             Submit
          </Button>
      </form>

       {/* Conditionally render submitted data in JSON format */}
       {submittedData && (
        <div className="mt-5 p-3 border rounded ">
          <h3 className="text-lg font-semibold">Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre> {/* Formatting the JSON for readability */}
        </div>
      )}
    </Form>
  );
}
