"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatedButton } from "../../../../components/animated-button";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(2, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [dialogMessage, setDialogMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const payload = {
      user: {
        email: values.email,
        name: values.name,
      },
      inquiry: {
        subject: values.subject,
        message: values.phone
          ? `${values.message}\n\nPhone: ${values.phone}`
          : values.message,
      },
    };

    const response = await fetch("https://api.carwash.mikrosell.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setDialogMessage(
        "Could not send your message right now. Please try again shortly.",
      );
      return;
    }

    setDialogMessage(
      "Your message has been sent. I will get back to you soon.",
    );
    reset();
  };

  return (
    <section className="section" id='contact'>
      <div className="container contact-grid">
        <div>
          <h2 className="sec-title">Contact Me</h2>
          <p className="muted">
            Feel free to reach out for collaborations, inquiries, or just a
            quick conversation.
          </p>
          <div className="contact-lines muted">
            <p className="hover:text-primary hover:underline">
              <a href="mailto:laban405@gmail.com">laban405@gmail.com</a>
            </p>
            <p className="hover:text-primary hover:underline">
              <a href="tel:+254797313732">+254 797 313 732</a>
            </p>
            {/* <p>DAGORETTI, NGONG ROAD, NAIROBI</p> */}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Your Name"
            aria-invalid={Boolean(errors.name)}
            className={errors.name ? "border-b-red-500" : ""}
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-xs text-red-600 -mt-2">{errors.name.message}</p>
          ) : null}

          <input
            placeholder="Your Email"
            aria-invalid={Boolean(errors.email)}
            className={errors.email ? "border-b-red-500" : ""}
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs text-red-600 -mt-2">{errors.email.message}</p>
          ) : null}

          <input placeholder="Your Phone" {...register("phone")} />

          <input
            placeholder="Subject"
            aria-invalid={Boolean(errors.subject)}
            className={errors.subject ? "border-b-red-500" : ""}
            {...register("subject")}
          />
          {errors.subject ? (
            <p className="text-xs text-red-600 -mt-2">{errors.subject.message}</p>
          ) : null}

          <textarea
            placeholder="Message"
            rows={4}
            aria-invalid={Boolean(errors.message)}
            className={errors.message ? "border-b-red-500" : ""}
            {...register("message")}
          />
          {errors.message ? (
            <p className="text-xs text-red-600 -mt-2">{errors.message.message}</p>
          ) : null}

          <AnimatedButton
            type="submit"
           className="bg-primary border-none text-primary-foreground w-fit"
            style={{ width: "fit-content" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </AnimatedButton>
        </form>
      </div>

      {dialogMessage ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6">
            <h3 className="text-2xl font-semibold mb-3">Message Status</h3>
            <p className="muted mb-5">{dialogMessage}</p>
            <AnimatedButton className="w-fit py-1! bg-primary text-primary-foreground border-none!" onClick={() => setDialogMessage(null)}>
              Close
            </AnimatedButton>
          </div>
        </div>
      ) : null}
    </section>
  );
}
