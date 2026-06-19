"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Eye Exam",
  "Contact Lens Fitting",
  "Frame Browsing / Eyewear",
  "Kids' Eye Care",
  "Dry Eye Treatment",
  "Frame Adjustment or Repair",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  reason: string;
  message: string;
}

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  reason: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "A valid email is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.reason) e.reason = "Please select a reason for your visit.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const field =
    "w-full px-4 py-3 rounded-lg border-2 border-ink/10 bg-paper text-ink placeholder-slate focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-colors text-sm";
  const label = "block text-sm font-semibold text-ink/80 mb-1.5";

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-16 px-8">
        <CheckCircle2 size={56} className="text-teal-dark mb-5" />
        <h3 className="font-display text-ink text-2xl font-bold mb-3">
          Request received!
        </h3>
        <p className="text-slate max-w-sm leading-relaxed">
          Thank you, {form.name.split(" ")[0]}. We&apos;ll be in touch within
          one business day to confirm your appointment.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm(empty);
          }}
          className="mt-8 text-sm text-teal-dark hover:underline font-semibold"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label className={label}>
          Full Name <span className="text-teal-dark">*</span>
        </label>
        <input
          type="text"
          placeholder="Your full name"
          className={`${field} ${errors.name ? "border-red-400 focus:ring-red-200" : ""}`}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>
            Email <span className="text-teal-dark">*</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className={`${field} ${errors.email ? "border-red-400 focus:ring-red-200" : ""}`}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className={label}>
            Phone <span className="text-teal-dark">*</span>
          </label>
          <input
            type="tel"
            placeholder="(416) 000-0000"
            className={`${field} ${errors.phone ? "border-red-400 focus:ring-red-200" : ""}`}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>Preferred Appointment Date</label>
          <input
            type="date"
            className={field}
            value={form.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>
        <div>
          <label className={label}>
            Reason for Visit <span className="text-teal-dark">*</span>
          </label>
          <select
            className={`${field} ${errors.reason ? "border-red-400 focus:ring-red-200" : ""} appearance-none`}
            value={form.reason}
            onChange={(e) => setForm({ ...form, reason: e.target.value })}
          >
            <option value="">Select a reason…</option>
            {reasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.reason && (
            <p className="text-red-500 text-xs mt-1">{errors.reason}</p>
          )}
        </div>
      </div>

      <div>
        <label className={label}>Message (optional)</label>
        <textarea
          rows={4}
          placeholder="Anything we should know before your visit? Insurance info, current prescription, etc."
          className={`${field} resize-none`}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-teal text-ink font-bold rounded-lg hover:bg-teal-dark hover:text-paper transition-colors duration-200 text-sm"
      >
        Request Appointment
      </button>

      <p className="text-center text-slate text-xs">
        We&apos;ll confirm within one business day. For urgent inquiries, call{" "}
        <a href="tel:4167448868" className="text-teal-dark hover:underline">
          (416) 744-8868
        </a>
        .
      </p>
    </form>
  );
}
