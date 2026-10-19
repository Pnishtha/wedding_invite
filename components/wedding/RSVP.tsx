"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  Heart,
  Mail,
  Send,
  Sparkles,
  Users,
  X,
} from "lucide-react";

type RSVPForm = {
  name: string;
  phone: string;
  guests: string;
  attending: "yes" | "no";
  meal: string;
  message: string;
};

const initialForm: RSVPForm = {
  name: "",
  phone: "",
  guests: "1",
  attending: "yes",
  meal: "Vegetarian",
  message: "",
};

const mealOptions = [
  "Vegetarian",
  "Vegan",
  "Jain",
  "No Preference",
];

const guestOptions = ["1", "2", "3", "4", "5", "6"];

export default function RSVP() {
  const [form, setForm] = useState<RSVPForm>(initialForm);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState("");

  const [copied, setCopied] = useState(false);

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const updateField = <K extends keyof RSVPForm>(
    field: K,
    value: RSVPForm[K]
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
  };

  /* =========================================================
     SUBMIT RSVP
  ========================================================= */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    /* Basic validation */

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (form.phone.trim().length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Something went wrong."
        );
      }

      setSubmitted(true);

      setForm(initialForm);
    } catch (submissionError) {
      console.error(
        "RSVP submission error:",
        submissionError
      );

      setError(
        "We couldn't submit your RSVP. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================================
     COPY INVITATION
  ========================================================= */

  const handleCopyInvitation = async () => {
 
const message = `You're invited to celebrate the wedding of Govind & Nishtha ❤️

02 December 2026
Hotel Bobina, Gorakhpur, Uttar Pradesh

We would love to celebrate this beautiful day with you. 💍✨`;


    try {
      await navigator.clipboard.writeText(message);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Failed to copy invitation:",
        error
      );
    }
  };

  return (
    <section
      id="rsvp"
      className="relative overflow-hidden bg-[#F6E7D8] px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C8A45D]/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 rounded-full bg-[#E8B7A5]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#722536]/5 blur-3xl" />

      {/* Decorative corners */}

      <div className="pointer-events-none absolute left-5 top-5 h-20 w-20 border-l border-t border-[#C8A45D]/35 sm:left-10 sm:top-10" />

      <div className="pointer-events-none absolute bottom-5 right-5 h-20 w-20 border-b border-r border-[#C8A45D]/35 sm:bottom-10 sm:right-10" />

      <div className="relative mx-auto max-w-5xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#FBEFE5] px-4 py-2">
            <Mail
              size={14}
              className="text-[#C8A45D]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#722536]">
              Your Presence Means Everything
            </span>
          </div>

          <h2 className="font-serif text-4xl text-[#722536] sm:text-5xl lg:text-6xl">
            RSVP
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C8A45D]/50" />

            <Heart
              size={14}
              fill="currentColor"
              className="text-[#C8A45D]"
            />

            <span className="h-px w-12 bg-[#C8A45D]/50" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#3B2925]/65 sm:text-base">
            We would be honoured to celebrate this special
            day with you. Please let us know if you'll be
            joining us.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN CARD
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative overflow-hidden rounded-[2rem] border border-[#C8A45D]/25 bg-[#FBEFE5] shadow-[0_30px_80px_rgba(114,37,54,0.10)]"
        >
          {/* Gold top line */}

          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />

          <AnimatePresence mode="wait">

            {/* =================================================
                SUCCESS STATE
            ================================================= */}

            {submitted ? (
              <motion.div
                key="success"
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="flex min-h-[520px] flex-col items-center justify-center px-6 py-16 text-center"
              >
                {/* Animated heart */}

                <motion.div
                  initial={{
                    scale: 0,
                    rotate: -15,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 12,
                  }}
                  className="relative mb-8"
                >
                  <div className="absolute inset-0 scale-150 rounded-full bg-[#C8A45D]/15 blur-2xl" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#C8A45D]/40 bg-[#722536] text-[#F6E7D8] shadow-xl">
                    <Heart
                      size={38}
                      fill="currentColor"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                  }}
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A45D]">
                    RSVP Received
                  </p>

                  <h3 className="font-serif text-4xl text-[#722536] sm:text-5xl">
                    Thank You! {form.name}
                  </h3>

                  <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#3B2925]/65">
                    Your response has been received. We
                    can't wait to celebrate this beautiful
                    day with you.
                  </p>

                  <div className="mx-auto mt-8 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-[#C8A45D]/40" />

                    <Sparkles
                      size={15}
                      className="text-[#C8A45D]"
                    />

                    <span className="h-px w-10 bg-[#C8A45D]/40" />
                  </div>

                  <p className="mt-7 font-serif text-lg italic text-[#722536]/80">
                    Govind & Nishtha
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#C8A45D]">
                    02 · 12 · 2026
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-xs font-medium text-[#722536] underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    Submit another response
                  </button>
                </motion.div>
              </motion.div>
            ) : (

              /* =================================================
                 FORM
              ================================================= */

              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="p-6 sm:p-10 lg:p-14"
              >

                {/* ============================================
                    ATTENDANCE
                ============================================ */}

                <div className="mb-10">

                  <div className="mb-5 text-center">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8A45D]">
                      Will you join us?
                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-[#722536] sm:text-3xl">
                      We hope to see you there {form.name}
                    </h3>

                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    {/* YES */}

                    <AttendanceCard
                      selected={form.attending === "yes"}
                      icon={
                        <Heart
                          size={25}
                          fill={
                            form.attending === "yes"
                              ? "currentColor"
                              : "none"
                          }
                        />
                      }
                      title="Joyfully Accept"
                      description="I wouldn't miss it!"
                      onClick={() =>
                        updateField(
                          "attending",
                          "yes"
                        )
                      }
                    />

                    {/* NO */}

                    <AttendanceCard
                      selected={form.attending === "no"}
                      icon={<X size={25} />}
                      title="Regretfully Decline"
                      description="I'll be celebrating from afar."
                      onClick={() =>
                        updateField(
                          "attending",
                          "no"
                        )
                      }
                    />

                  </div>
                </div>


                {/* ============================================
                    FORM FIELDS
                ============================================ */}

                <div className="grid gap-6 sm:grid-cols-2">

                  {/* NAME */}

                  <InputField
                    label="Your Name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(value) =>
                      updateField(
                        "name",
                        value
                      )
                    }
                    required
                  />

                  {/* PHONE */}

                  <InputField
                    label="Phone Number"
                    placeholder="+91 98765 43210"
                    type="tel"
                    value={form.phone}
                    onChange={(value) =>
                      updateField(
                        "phone",
                        value
                      )
                    }
                    required
                  />

                  {/* GUESTS */}

                  <SelectField
                    label="Number of Guests"
                    value={form.guests}
                    options={guestOptions}
                    icon={<Users size={17} />}
                    onChange={(value) =>
                      updateField(
                        "guests",
                        value
                      )
                    }
                  />

                  {/* MEAL */}

                  <SelectField
                    label="Meal Preference"
                    value={form.meal}
                    options={mealOptions}
                    onChange={(value) =>
                      updateField(
                        "meal",
                        value
                      )
                    }
                  />

                </div>


                {/* ============================================
                    MESSAGE
                ============================================ */}

                <div className="mt-6">

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#722536]">
                    A Little Note
                    <span className="ml-1 font-normal normal-case tracking-normal text-[#3B2925]/40">
                      (optional)
                    </span>
                  </label>

                  <textarea
                    value={form.message}
                    onChange={(event) =>
                      updateField(
                        "message",
                        event.target.value
                      )
                    }
                    placeholder="Leave a message for Govind & Nishtha..."
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-[#C8A45D]/25 bg-[#F6E7D8]/60 px-4 py-4 text-sm text-[#3B2925] outline-none transition placeholder:text-[#3B2925]/35 focus:border-[#722536]/50 focus:ring-2 focus:ring-[#722536]/10"
                  />

                </div>


                {/* ============================================
                    ERROR
                ============================================ */}

                <AnimatePresence>

                  {error && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -5,
                      }}
                      className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700"
                    >
                      {error}
                    </motion.div>
                  )}

                </AnimatePresence>


                {/* ============================================
                    SUBMIT
                ============================================ */}

                <div className="mt-8 flex justify-center">

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={
                      !isSubmitting
                        ? {
                            y: -3,
                          }
                        : undefined
                    }
                    whileTap={
                      !isSubmitting
                        ? {
                            scale: 0.98,
                          }
                        : undefined
                    }
                    className="inline-flex min-w-[210px] items-center justify-center gap-3 rounded-full bg-[#722536] px-8 py-4 text-sm font-medium text-white shadow-xl shadow-[#722536]/20 transition-colors hover:bg-[#5f1e2d] disabled:cursor-not-allowed disabled:opacity-60"
                  >

                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                        />

                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={17} />

                        Send RSVP

                        <Heart
                          size={15}
                          fill="currentColor"
                        />
                      </>
                    )}

                  </motion.button>

                </div>


                {/* ============================================
                    PRIVACY NOTE
                ============================================ */}

                <p className="mx-auto mt-5 max-w-md text-center text-[11px] leading-5 text-[#3B2925]/40">
                  {form.name} details are only used to help us
                  organise our celebration and will remain
                  private.
                </p>

              </motion.form>
            )}

          </AnimatePresence>

        </motion.div>


        {/* ===================================================
            SHARE INVITATION
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-10 text-center"
        >

          <p className="mb-4 text-xs text-[#3B2925]/50">
            Know someone who should be here?
          </p>

          <button
            type="button"
            onClick={handleCopyInvitation}
            className="inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#FBEFE5] px-5 py-2.5 text-xs font-medium text-[#722536] transition-colors hover:bg-[#F1DED0]"
          >

            {copied ? (
              <>
                <Check size={14} />
                Invitation Copied
              </>
            ) : (
              <>
                <Mail size={14} />
                Copy Invitation Message
              </>
            )}

          </button>

        </motion.div>


        {/* ===================================================
            BOTTOM DECORATION
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mt-14 flex items-center justify-center gap-3"
        >

          <span className="h-px w-16 bg-[#C8A45D]/25" />

          <span className="text-sm text-[#C8A45D]">
            ✦
          </span>

          <span className="h-px w-16 bg-[#C8A45D]/25" />

        </motion.div>

      </div>
    </section>
  );
}


/* ===========================================================
   ATTENDANCE CARD
=========================================================== */

function AttendanceCard({
  selected,
  icon,
  title,
  description,
  onClick,
}: {
  selected: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{
        scale: 0.98,
      }}
      className={`relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
        selected
          ? "border-[#722536] bg-[#722536] text-[#F6E7D8] shadow-lg shadow-[#722536]/15"
          : "border-[#C8A45D]/20 bg-[#F6E7D8]/60 text-[#3B2925] hover:border-[#C8A45D]/50"
      }`}
    >

      {/* Selected glow */}

      {selected && (
        <motion.div
          layoutId="attendanceGlow"
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
        />
      )}

      <div className="relative flex items-center gap-4">

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
            selected
              ? "bg-[#F6E7D8]/15 text-[#F6E7D8]"
              : "bg-[#722536]/8 text-[#722536]"
          }`}
        >
          {icon}
        </div>

        <div>

          <p
            className={`font-serif text-lg ${
              selected
                ? "text-[#F6E7D8]"
                : "text-[#722536]"
            }`}
          >
            {title}
          </p>

          <p
            className={`mt-1 text-xs ${
              selected
                ? "text-[#F6E7D8]/65"
                : "text-[#3B2925]/50"
            }`}
          >
            {description}
          </p>

        </div>

        {/* Radio indicator */}

        <div
          className={`ml-auto flex h-5 w-5 items-center justify-center rounded-full border ${
            selected
              ? "border-[#F6E7D8] bg-[#F6E7D8]"
              : "border-[#722536]/25"
          }`}
        >
          {selected && (
            <div className="h-2 w-2 rounded-full bg-[#722536]" />
          )}
        </div>

      </div>

    </motion.button>
  );
}


/* ===========================================================
   INPUT FIELD
=========================================================== */

function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>

      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#722536]">
        {label}

        {required && (
          <span className="ml-1 text-[#C8A45D]">
            *
          </span>
        )}
      </label>

      <input
        type={type}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-[#C8A45D]/25 bg-[#F6E7D8]/60 px-4 py-3.5 text-sm text-[#3B2925] outline-none transition placeholder:text-[#3B2925]/35 focus:border-[#722536]/50 focus:ring-2 focus:ring-[#722536]/10"
      />

    </div>
  );
}


/* ===========================================================
   SELECT FIELD
=========================================================== */

function SelectField({
  label,
  value,
  options,
  onChange,
  icon,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}) {
  return (
    <div>

      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#722536]">
        {label}
      </label>

      <div className="relative">

        {icon && (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#722536]">
            {icon}
          </div>
        )}

        <select
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className={`w-full appearance-none rounded-2xl border border-[#C8A45D]/25 bg-[#F6E7D8]/60 py-3.5 pr-10 text-sm text-[#3B2925] outline-none transition focus:border-[#722536]/50 focus:ring-2 focus:ring-[#722536]/10 ${
            icon ? "pl-11" : "pl-4"
          }`}
        >
          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#722536]"
        />

      </div>

    </div>
  );
}