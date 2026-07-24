"use client";

import { useState, type FormEvent } from "react";
import { Mail, FileDown, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import PoweredBy from "./PoweredBy";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Wire this up to your endpoint / email service of choice.
    setTimeout(() => setStatus("sent"), 700);
  }

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <p className="text-sm font-medium uppercase tracking-wide text-accent-600">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Let's build something great together
            </h2>
            <p className="mt-4 text-zinc-500">
              Have a project in mind or just want to say hi? My inbox is
              always open.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:ianjosef.rivera@gmail.com"
                className="flex items-center gap-3 text-sm text-zinc-600 hover:text-accent-700"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                  <Mail className="h-4 w-4" strokeWidth={1.75} />
                </span>
                ianjosef.rivera@gmail.com
              </a>
              <a
                href="https://drive.google.com/file/d/1IwwntzKwRj2jqDvMy54Qpj2boSO4GDLG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-600 hover:text-accent-700"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                  <FileDown className="h-4 w-4" strokeWidth={1.75} />
                </span>
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/5 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="fullname"
                    className="mb-1.5 block text-sm font-medium text-zinc-700"
                  >
                    Full name
                  </label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-accent-400 focus:bg-white focus:ring-4 focus:ring-accent-100"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-zinc-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-accent-400 focus:bg-white focus:ring-4 focus:ring-accent-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-zinc-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me a bit about your project..."
                    className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-accent-400 focus:bg-white focus:ring-4 focus:ring-accent-100"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "sent" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent
                  </>
                ) : status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal
          as="div"
          className="mt-24 flex flex-col items-center gap-8 border-t border-zinc-200 pt-8"
        >
          <PoweredBy />
          <div className="flex w-full flex-col items-center justify-between gap-4 text-sm text-zinc-400 sm:flex-row">
            <p>© {new Date().getFullYear()} Ian Josef. All rights reserved.</p>
            <p>Designed &amp; built with care.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
