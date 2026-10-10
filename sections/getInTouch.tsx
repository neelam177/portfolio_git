
"use client";

import { FormEvent, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa6";

const contactInfo = [
  {
    title: "Email",
    value: "gneela2004@gmail.com",
    href: "mailto:your.email@example.com",
    icon: FaEnvelope,
  },

  {
    title: "Location",
    value: "India",
    href: undefined,
    icon: FaLocationDot,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
];

export default function GetInTouch() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("");

    const recipient = "gneelam2004@gmail.com";
    const emailSubject = encodeURIComponent(form.subject);
    const emailBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    const mailtoUrl =
      `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    // Opens the visitor's configured email application.
    window.location.href = mailtoUrl;

    setStatus(
      "Your email app should open with your message. Send it there to complete delivery."
    );
    setSending(false);
  }

  function updateField(
    field: keyof typeof form,
    value: string
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
    setStatus("");
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-slate-50 px-5 py-20 sm:px-8 lg:py-18"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 -z-10 h-80 w-80 rounded-full bg-sky-200/40 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-[100px]"
      />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 motion-reduce:animate-none" />
            Let's Connect
          </span> */}

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl md:text-5xl">
            Get In{" "}
            <span className="text-[#8fc1e3]">
              Touch
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Have a project in mind or want to collaborate?
            Let&apos;s create something amazing together.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />
        </div>

        {/* Main layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Left column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Let&apos;s Connect
              </h3>

              <p className="mt-4 max-w-lg leading-7 text-slate-600">
                Whether you have a project in mind, want to
                collaborate, or just want to say hello, I&apos;d
                love to hear from you. Feel free to reach out
                through any of the channels below.
              </p>
            </div>

            {/* Contact information cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-xl text-sky-600 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-200">
                      <Icon aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-500">
                        {item.title}
                      </p>
                      <p className="mt-1 break-words font-semibold text-slate-800 transition-colors group-hover:text-sky-700">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <FaArrowRight
                        aria-hidden="true"
                        className="shrink-0 text-sm text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-600"
                      />
                    )}
                  </>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/70 sm:p-5"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.title}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/70 sm:p-5"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Follow Me
              </h4>

              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg text-sky-600 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-500 hover:bg-sky-500 hover:text-white hover:shadow-lg hover:shadow-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>

           
          </div>

          {/* Right column: contact form */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-[26px] bg-gradient-to-br from-sky-200/60 via-transparent to-blue-200/60 blur-xl"
            />

            <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_15px_50px_rgba(15,23,42,0.06)] sm:p-8">
              <div className="mb-7">
               

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  Send a Message
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill in the details below and let&apos;s start
                  a conversation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Doe"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-sky-300 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-sky-300 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    required
                    maxLength={150}
                    value={form.subject}
                    onChange={(event) =>
                      updateField("subject", event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-sky-300 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    minLength={10}
                    maxLength={4000}
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-sky-300 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                  />

                  <p className="mt-2 text-right text-xs text-slate-400">
                    {form.message.length}/5000 characters
                  </p>
                </div>

                {status && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm leading-6 text-sky-800"
                  >
                    {status}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-sky-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:from-sky-600 hover:to-blue-700 hover:shadow-xl hover:shadow-sky-200 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Preparing...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                      />
                      Send Message
                      <FaArrowRight
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

                {/* <p className="text-center text-xs leading-5 text-slate-400">
                  Your email application will open to send your
                  message. No message is sent automatically by
                  this form.
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}