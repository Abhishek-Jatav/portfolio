// components/contact.tsx
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}>
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="bold text-lg text-blue-400" href="mailto:abhidel44@gmail.com">
          abhidel44@gmail.com
        </a>{" "}
        or through this form.
      </p>

      {/* <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);

          const senderEmail = formData.get("senderEmail");
          const title = formData.get("title");
          const message = formData.get("message");

          const res = await fetch("/api/sendEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ senderEmail, title, message }),
          });

          if (!res.ok) {
            const { error } = await res.json();
            toast.error(error || "Failed to send email.");
            return;
          }

          toast.success("Email sent successfully!");
          form.reset();
        }}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="title"
          type="text"
          required
          maxLength={100}
          placeholder="Subject or Title"
        />

        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mt-4"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />

        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        <SubmitBtn />
      </form> */}
    </motion.section>
  );
}
