import { useState, type ChangeEvent, type FormEvent } from "react";
import Section from "./Section";
import { useLang } from "../lib/i18n";
import { ui } from "../data/ui";
import { profile } from "../data/profile";

interface Values { name: string; email: string; message: string }
type Errors = Partial<Record<keyof Values, boolean>>;
type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const field = "mt-1.5 w-full rounded-lg border bg-transparent px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent dark:border-neutral-700";

export default function Contact() {
  const { t } = useLang();
  const [values, setValues] = useState<Values>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (v: Values): Errors => ({
    name: v.name.trim().length < 2,
    email: !EMAIL_RE.test(v.email.trim()),
    message: v.message.trim().length < 10,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;

    if (!profile.formEndpoint) {
      // Fallback: open the visitor's mail app with the message pre-filled.
      const subject = encodeURIComponent(`Portfolio contact from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n${values.name} (${values.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(profile.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const border = (bad?: boolean) => (bad ? "border-red-500" : "border-neutral-300");
  const Err = ({ show, text }: { show?: boolean; text: string }) =>
    show ? <p role="alert" className="mt-1 text-xs text-red-600 dark:text-red-400">{text}</p> : null;

  return (
    <Section id="contact" title={t(ui.contact.title)}>
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <form onSubmit={onSubmit} noValidate className="space-y-5">
          <p className="text-neutral-600 dark:text-neutral-400">{t(ui.contact.lead)}</p>
          <label className="block text-sm font-medium">
            {t(ui.contact.name)}
            <input name="name" value={values.name} onChange={onChange} autoComplete="name" aria-invalid={!!errors.name} className={`${field} ${border(errors.name)}`} />
            <Err show={errors.name} text={t(ui.contact.errName)} />
          </label>
          <label className="block text-sm font-medium">
            {t(ui.contact.email)}
            <input name="email" type="email" value={values.email} onChange={onChange} autoComplete="email" aria-invalid={!!errors.email} className={`${field} ${border(errors.email)}`} />
            <Err show={errors.email} text={t(ui.contact.errEmail)} />
          </label>
          <label className="block text-sm font-medium">
            {t(ui.contact.message)}
            <textarea name="message" rows={5} value={values.message} onChange={onChange} aria-invalid={!!errors.message} className={`${field} ${border(errors.message)} resize-y`} />
            <Err show={errors.message} text={t(ui.contact.errMsg)} />
          </label>
          <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
            {status === "sending" ? t(ui.contact.sending) : t(ui.contact.send)}
          </button>
          <div aria-live="polite" className="text-sm">
            {status === "success" && <p className="text-emerald-600 dark:text-emerald-400">{t(ui.contact.ok)}</p>}
            {status === "error" && <p className="text-red-600 dark:text-red-400">{t(ui.contact.fail)}</p>}
          </div>
        </form>

        <ul className="h-fit space-y-3 text-sm">
          {[
            { label: "Email", href: `mailto:${profile.email}`, text: profile.email },
            { label: "GitHub", href: profile.github, text: profile.github.replace("https://", "") },
            { label: "LinkedIn", href: profile.linkedin, text: profile.linkedin.replace("https://", "") },
          ].map((l) => (
            <li key={l.label} className="flex flex-col rounded-xl border border-neutral-200 px-4 py-3 dark:border-neutral-800">
              <span className="text-neutral-500">{l.label}</span>
              <a href={l.href} target="_blank" rel="noreferrer" dir="ltr" className="break-all text-accent hover:underline">{l.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
