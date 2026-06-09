"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatedButton } from "../../../../components/animated-button";
import { ArrowUpRight } from "lucide-react";
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(2, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  const container = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        animate: "show",
        variants: {
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.08,
            },
          },
        },
      };

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 26 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: easeOutExpo },
          },
        },
      };
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
    <section
      className="mx-4 sm:mx-0 scroll-mt-24 sm:min-h-[100vh]"
      id="contact"
    >
      <div className="max-w-2xl mx-auto pt-8 mb-14" {...container}>
        <h2 className="sec-title">
          Let&apos;s <span className="text-primary">Connect.</span>
        </h2>
        <p className="muted">
          Feel free to reach out for collaborations, inquiries, or just a quick
          conversation.
        </p>
        <div className="grid sm:grid-cols-3">
          <div className="text-sm flex gap-4 text-[14px] font-semibold flex-col mt-3">
            <a
              href="mailto:laban405@gmail.com"
              className="hover:text-primary hover:underline flex gap-3 group"
            >
              <span>laban405@gmail.com</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-primary group-hover:-translate-y-1 transition-transform duration-300 ease-in-out self-end" />
            </a>
            <a
              href="tel:+254797313732"
              className="hover:text-primary hover:underline flex gap-3 group"
            >
              <span>+254 797 313 732</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-primary group-hover:-translate-y-1 transition-transform duration-300 ease-in-out self-end" />
            </a>

            <motion.a
              href="https://github.com/laban405"
              target="_blank"
              rel="noreferrer"
              className="items-center  hover:underline hover:text-primary flex gap-3 group"
              // whileHover={
              //   prefersReducedMotion
              //     ? undefined
              //     : {
              //         y: -2,
              //         transition: { duration: 0.2, ease: easeOutExpo },
              //       }
              // }
            >
              <span>Github</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-primary group-hover:-translate-y-1 transition-transform duration-300 ease-in-out self-end" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/laban405/"
              target="_blank"
              rel="noreferrer"
              className="items-center  hover:underline hover:text-primary flex gap-3 group"
              // whileHover={
              //   prefersReducedMotion
              //     ? undefined
              //     : {
              //         y: -2,
              //         transition: { duration: 0.2, ease: easeOutExpo },
              //       }
              // }
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-primary group-hover:-translate-y-1 transition-transform duration-300 ease-in-out self-end" />
            </motion.a>
          </div>
          <form
            className="contact-form sm:col-span-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="Your Name"
              aria-invalid={Boolean(errors.name)}
              className={errors.name ? "border-b-red-500" : ""}
              {...register("name")}
            />
            {errors.name ? (
              <p className="text-xs text-red-600 -mt-2">
                {errors.name.message}
              </p>
            ) : null}

            <input
              placeholder="Your Email"
              aria-invalid={Boolean(errors.email)}
              className={errors.email ? "border-b-red-500" : ""}
              {...register("email")}
            />
            {errors.email ? (
              <p className="text-xs text-red-600 -mt-2">
                {errors.email.message}
              </p>
            ) : null}

            <input placeholder="Your Phone" {...register("phone")} />

            <input
              placeholder="Subject"
              aria-invalid={Boolean(errors.subject)}
              className={errors.subject ? "border-b-red-500" : ""}
              {...register("subject")}
            />
            {errors.subject ? (
              <p className="text-xs text-red-600 -mt-2">
                {errors.subject.message}
              </p>
            ) : null}

            <textarea
              placeholder="Message"
              rows={4}
              aria-invalid={Boolean(errors.message)}
              className={errors.message ? "border-b-red-500" : ""}
              {...register("message")}
            />
            {errors.message ? (
              <p className="text-xs text-red-600 -mt-2">
                {errors.message.message}
              </p>
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
      </div>

      {dialogMessage ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6">
            <h3 className="text-2xl font-semibold mb-3">Message Status</h3>
            <p className="muted mb-5">{dialogMessage}</p>
            <AnimatedButton
              className="w-fit py-1! bg-primary text-primary-foreground border-none!"
              onClick={() => setDialogMessage(null)}
            >
              Close
            </AnimatedButton>
          </div>
        </div>
      ) : null}
    </section>
  );
}
