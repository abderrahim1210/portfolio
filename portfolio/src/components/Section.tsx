import type { ReactNode } from "react";

interface Props { id: string; title: string; children: ReactNode }

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <h2 className="mb-10 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
}
