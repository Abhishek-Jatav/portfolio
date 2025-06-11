// lib/sendEmail.ts
import emailjs from "@emailjs/browser";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;
  const title = formData.get("title") as string;

  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: title, // maps to {{from_name}}
        from_email: senderEmail, // maps to {{from_email}}
        message: message, // maps to {{message}}
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    return { data: result, error: null };
  } catch (error: any) {
    return { data: null, error: "Email failed to send. Try again later." };
  }
};
