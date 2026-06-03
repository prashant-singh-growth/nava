import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, uploadFileToWordPress } from "@/utils/contactApi";
import whitearrow from "../../assets/Icons/white-right-arrow.svg";

const jobSeekerSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
  website: z.string().optional()
});

type JobSeekerFormValues = z.infer<typeof jobSeekerSchema>;

const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const JobSeekerForm = () => {
  const { toast } = useToast();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const form = useForm<JobSeekerFormValues>({
    resolver: zodResolver(jobSeekerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      website: ""
    },
  });

  const validateFile = (file: File): boolean => {
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, DOC, or DOCX file.",
        variant: "destructive",
      });
      return false;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: "File too large",
        description: "File size must be less than 5MB.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleFileSelect = (file: File) => {
    if (!validateFile(file)) return;
    
    setUploadedFile(file);
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 100);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setUploadProgress(0);
  };

  const onSubmit = async (data: JobSeekerFormValues) => {
    try {
      let fileUrl: string | undefined;

      // Upload file first if present
      if (uploadedFile) {
        toast({
          title: "Uploading resume...",
          description: "Please wait while we upload your file.",
        });
        fileUrl = await uploadFileToWordPress(uploadedFile);
      }

      // Send email with form data and file URL
      await sendContactEmail({
        type: "job",
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        file_url: fileUrl,
        website: data.website,
      });
      
      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you soon.",
      });
      
      form.reset();
      setUploadedFile(null);
      setUploadProgress(0);
    } catch (error) {
      console.error("Error submitting job application:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit application. Please try again.",
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

        {/* File Upload */}
        <div>
          <label className="block fs-18 text-[#222222] font-normal mb-2">
            Upload Resume (PDF, DOC, DOCX)
          </label>
          {!uploadedFile ? (
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragging 
                  ? 'border-[#0059FF] bg-[#E8F0FF]' 
                  : 'border-[#D1D5DB] bg-[#F9FAFB]'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="mx-auto h-12 w-12 text-[#6B7280] mb-4" />
              <p className="fs-16 text-[#374151] mb-2">
                Drag and drop your resume here, or
              </p>
              <label className="cursor-pointer">
                <span className="text-[#0059FF] fs-16 underline">browse files</span>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                />
              </label>
              <p className="fs-14 text-[#6B7280] mt-2">
                Max file size: 5MB
              </p>
            </div>
          ) : (
            <div className="border border-[#D1D5DB] rounded-lg p-4 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 bg-[#E8F0FF] rounded-lg flex items-center justify-center">
                    <Upload className="h-5 w-5 text-[#0059FF]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="fs-16 text-[#111827] font-medium truncate">
                      {uploadedFile.name}
                    </p>
                    <p className="fs-14 text-[#6B7280]">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="ml-4 p-1 hover:bg-[#F3F4F6] rounded"
                >
                  <X className="h-5 w-5 text-[#6B7280]" />
                </button>
              </div>
              {uploadProgress < 100 && (
                <div className="mt-3">
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                    <div
                      className="bg-[#0059FF] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex sm:gap-0 gap-5 sm:items-end justify-between sm:flex-row flex-col">
          <button 
            type="submit" 
            disabled={form.formState.isSubmitting}
            className="primary-button border border-[#3A6CC9] text-[#ffffff] flex items-center justify-center sm:m-0 m-auto gap-3 fs-18 mt-3 py-3 px-4 w-auto"
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
            <img src={whitearrow} alt="service-arrow-icon" />
          </button>

          <div className="sm:text-end text-center">
            <div className="fs-16 text-[#7C7C7C]">Prefer email?</div>
            <a 
              href="mailto:careers@navasoftware.com" 
              className="text-[#00328E] fs-18"
            >
              careers@navasoftware.com
            </a>
          </div>
        </div>
        <input
            type="text"
            {...form.register("website")}
            style={{ display: "none" }}
            autoComplete="off"
          />
      </form>
    </Form>
  );
};
