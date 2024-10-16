"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import IconType from "@/public/ButtonIconWhite.svg";
import Button from "./ButtonCustom";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { sendContactForm } from "@/lib/api";
import { toast } from "react-hot-toast"; // Import toast

// Define the schema using zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(11, {
    message: "Enter valid Phone Number",
  }),
  email: z.string().email({
    message: "Enter valid Email address",
  }),
  messageBody: z.string().min(20, {
    message: "Message must be at least 20 characters.",
  }),
});

export function ProfileForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      messageBody: "",
    },
  });

  // Submit handler
  const onSubmit = async (data: any) => {
    setLoading(true); // Set loading to true while sending

    const locale = "en"; // or use a dynamic locale value

    try {
      const response = await sendContactForm(data, locale);

      if (response.ok) {
        const jsonResponse = await response.json();
        toast.success(jsonResponse.message); // Show success toast
        form.reset(); // Clear the form fields after successful submission
      } else {
        const errorResponse = await response.json();
        toast.error(errorResponse.error); // Show error toast
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Failed to send the email: " + error.message); // Show error toast
      } else {
        toast.error("Failed to send the email: " + String(error)); // Show error toast
      }
    } finally {
      setLoading(false); // Reset loading state
    }
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
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Phone No." {...field} />
              </FormControl>
              <FormMessage className="pt-3 px-3" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email Address" {...field} />
              </FormControl>
              <FormMessage className="pt-3 px-3" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="messageBody"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Message" {...field} rows={10} />
              </FormControl>
              <FormMessage className="pt-3 px-3" />
            </FormItem>
          )}
        />
        <div className="mt-3">
          <Button
            type="submit"
            icon={IconType}
            iconPosition="right"
            variant="primarySubmit"
            size="md"
            className="mx-auto sm:mx-0 mt-7"
          >
            {loading ? "Sending..." : "Submit"} {/* Show loading text */}
          </Button>
        </div>
      </form>
    </Form>
  );
}
