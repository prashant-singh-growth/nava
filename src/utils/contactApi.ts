import commonConfig from "../config/commonConfig";

export interface ClientContactData {
  type: "client";
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  website?: string;
}

export interface JobSeekerContactData {
  type: "job";
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  message: string;
  file_url?: string;
  website?: string;
}

export type ContactData = ClientContactData | JobSeekerContactData;

export const sendContactEmail = async (data: ContactData): Promise<void> => {
  const url = `${commonConfig.EMAIL_BASE}/send-email`;
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || `Failed to send email: ${response.statusText}`);
  }

  return response.json();
};

export const uploadFileToWordPress = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  const headers = new Headers();
  headers.append("Authorization", "Basic " + btoa(`${commonConfig.USERNAME}:${commonConfig.PWD}`));

  const response = await fetch(`${commonConfig.MEDIA_BASE}/media`, {
    method: "POST",
    body: formData,
    headers: headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to upload file: ${response.statusText}`);
  }

  const data = await response.json();
  return data.source_url;
};
