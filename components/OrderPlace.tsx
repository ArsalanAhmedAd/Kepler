"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Button from "./ButtonCustom";
import IconType from "@/public/ButtonIconBlue.svg";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactForm } from "@/lib/api";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

export const OrderPlace = () => {
  const tOrderPlace = useTranslations("OrderPlace");
  const tOrderPlaceValid = useTranslations("OrderPlace.Formvalidation");

  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  
  const formSchema = z.object({
    username: z.string().min(2, {
      message: `${tOrderPlaceValid("NameMessage")}`,
    }),
    email: z.string().email({
      message: `${tOrderPlaceValid("EmailMessage")}`,
    }),
    phone: z
    .string()
    .min(11, { message: `${tOrderPlaceValid("PhoneMessage")}` })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true); // Set loading to true while sending

    if (!recaptchaToken) {
      // alert('Please complete the reCAPTCHA.');
      toast.error(`${tOrderPlaceValid("ReCaptecha")}`);
      setLoading(false); // Reset loading state
      return;
    }
    const locale = "en"; // or use a dynamic locale value

    try {
      const response = await sendContactForm({ ...data, recaptchaToken }, locale);

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
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-14">
      <div className="bg-blue-default rounded-20 py-7 px-7 sm:py-12 sm:px-10 text-white grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 items-center">
        <div className="OrderPlaceContent ">
          <div className="text-2xl sm:text-[32px] font-bold w-full lg:w-3/6 sm:leading-10 mb-3">
            {tOrderPlace("title")}
          </div>
          <div className="text-[16px] sm:text-lg">
            {tOrderPlace("Description")}
          </div>
        </div>
        <div className="OrderPlaceForm flex justify-center flex-col w-full md:w-10/12 lg:w-1/2 mx-auto pt-6 md:pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                       placeholder={tOrderPlace("NamePlaceHolder")}
                        {...field}
                        className="bg-transparent border-2 border-white rounded-full  placeholder:text-white placeholder: placeholder:focus:text-white focus-visible:border-2 focus-visible:ring-0"
                      />
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
                      <Input
                         placeholder={tOrderPlace("EamilPlaceHolder")}
                        {...field}
                        className="bg-transparent border-2 border-white rounded-full  placeholder:text-white placeholder: placeholder:focus:text-white focus-visible:border-2 focus-visible:ring-0"
                      />
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
                      <Input
                        placeholder={tOrderPlace("NumberPlaceHolder")}
                        {...field}
                        className="bg-transparent border-2 border-white rounded-full  placeholder:text-white placeholder: placeholder:focus:text-white focus-visible:border-2 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="pt-3 px-3" />
                  </FormItem>
                )}
              />

              <div className="flex justify-between items-center">
               <div>
               <Button
                  type="submit"
                  icon={IconType.src}
                  iconPosition="right"
                  variant="primary"
                  size="md"
                >
                  {loading
                    ? `${tOrderPlace("ButtonTextSending")}`
                    : `${tOrderPlace("ButtonText")}`}
                </Button>
               </div>
             

              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_CAPTACHA_SITE_KEY || ''} 
                onChange={(token) => setRecaptchaToken(token)}
              />
               </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
