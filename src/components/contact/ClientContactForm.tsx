import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/utils/contactApi";
import whitearrow from "../../assets/Icons/white-right-arrow.svg";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().optional(),
  company: z.string().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
  website: z.string().optional()
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ClientContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      website: ""
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await sendContactEmail({
        type: "client",
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        company: data.company,
        message: data.message,
        website: data.website,
      });
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending client contact form:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="fs-18 text-[#222222] font-normal">First Name *</FormLabel>
                <FormControl>
                  <Input 
                    className="fs-18 px-3 xl:py-[var(--size-33)] py-6 text-[#000000] focus:!outline-none focus:!ring-transparent focus:!transparent" 
                    {...field} 
                  />
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
                <FormLabel className="fs-18 text-[#222222] font-normal">Last Name *</FormLabel>
                <FormControl>
                  <Input 
                    className="fs-18 px-3 xl:py-[var(--size-33)] py-6 text-[#000000] focus:!outline-none focus:!ring-transparent focus:!transparent" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="fs-18 text-[#222222] font-normal">Email *</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    className="fs-18 px-3 xl:py-[var(--size-33)] py-6 text-[#000000] focus:!outline-none focus:!ring-transparent focus:!transparent" 
                    {...field} 
                  />
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
                <FormLabel className="fs-18 text-[#222222] font-normal">Phone</FormLabel>
                <FormControl>
                  <Input 
                    type="tel" 
                    className="fs-18 px-3 xl:py-[var(--size-33)] py-6 text-[#000000] focus:!outline-none focus:!ring-transparent focus:!transparent" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Company */}
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="fs-18 text-[#222222] font-normal">Company</FormLabel>
              <FormControl>
                <Input 
                  className="fs-18 px-3 xl:py-[var(--size-33)] py-6 text-[#000000] focus:!outline-none focus:!ring-transparent focus:!transparent" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="fs-18 text-[#222222] font-normal">Message *</FormLabel>
              <FormControl>
                <Textarea 
                  className="lg:min-h-[var(--size-125)] min-h-[95px] text-[#000000] focus:!outline-none focus:!ring-transparent focus:!transparent" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button and Email Option */}
        <div className="flex sm:gap-0 gap-5 sm:items-end justify-between sm:flex-row flex-col">
          <button 
            type="submit" 
            disabled={form.formState.isSubmitting}
            className="primary-button border border-[#3A6CC9] text-[#ffffff] flex items-center justify-center sm:m-0 m-auto gap-3 fs-18 mt-3 py-3 px-4 w-auto"
          >
            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
            <img src={whitearrow} alt="service-arrow-icon" />
          </button>

          <div className="sm:text-end text-center">
            <div className="fs-16 text-[#7C7C7C]">Prefer email?</div>
            <a 
              href="mailto:ai@navasoftware.com" 
              className="text-[#00328E] fs-18"
            >
              info@navasoftware.com
            </a>
          </div>

          <input
            type="text"
            {...form.register("website")}
            style={{ display: "none" }}
            autoComplete="off"
          />
        </div>
      </form>
    </Form>
  );
};
