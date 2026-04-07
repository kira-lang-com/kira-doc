import {
  BookOpenText,
  Cable,
  Command,
  Wrench,
} from "lucide-react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import Link from "next/link";
import type { Metadata } from "next";
import { baseOptions } from "@/lib/layout.shared";

export const metadata: Metadata = {
  title: "Kira Documentation",
  description:
    "Documentation for the Kira programming language: compiler, backends, tools, and language reference.",
};

const guideLinks = [
  {
    title: "Read the Docs",
    href: "/docs",
    description: "Start at the main documentation and read through in order.",
    icon: BookOpenText,
  },
  {
    title: "A Quick Tour",
    href: "/docs/a-kira-tour",
    description:
      "Get a fast overview of syntax, types, and key language features.",
    icon: Cable,
  },
  {
    title: "Language Guide",
    href: "/docs/language-guide",
    description: "Detailed walkthrough of how the language works.",
    icon: Command,
  },
  {
    title: "Reference & Tools",
    href: "/docs/appendix",
    description: "CLI commands, FFI workflows, toolchain info, and examples.",
    icon: Wrench,
  },
];

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="kira-home-content mx-auto flex w-full flex-1 flex-col gap-14 px-4 py-10 md:px-6 md:py-16">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="flex flex-col gap-7">
          <div className="kira-kicker">Kira Language</div>
          <h1 className="kira-display max-w-2xl text-4xl font-bold leading-[1.15] text-fd-foreground md:text-5xl">
            A compiler with multiple execution backends.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-fd-muted-foreground md:text-lg md:leading-8">
            Kira is a programming language with a bytecode VM backend, LLVM
            native compilation, and hybrid execution. It includes a managed
            toolchain, a C FFI system with automatic bindings, and comprehensive
            documentation covering language features and workflows.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
            <Link className="kira-button kira-button-primary" href="/docs">
              Read the Docs
            </Link>
            <Link className="kira-button" href="/docs/a-kira-tour">
              Quick Tour
            </Link>
          </div>
        </section>

        {/* ── Info ─────────────────────────────────────────────── */}
        <section className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="mb-3 text-lg font-semibold text-fd-foreground">
              Execution Backends
            </h2>
            <p className="mb-4 text-sm leading-6 text-fd-muted-foreground">
              Choose how your code runs. The VM backend is great for development
              and testing. LLVM native compilation produces standalone
              executables and libraries. The hybrid backend lets you mix
              bytecode and native code in the same process.
            </p>
            <ul className="space-y-2 text-sm text-fd-muted-foreground">
              <li>
                • <strong>VM:</strong> Bytecode interpreter
              </li>
              <li>
                • <strong>LLVM Native:</strong> Native executables and libraries
              </li>
              <li>
                • <strong>Hybrid:</strong> Mix bytecode and native in one
                process
              </li>
              <li>
                • <strong>Toolchain:</strong> Managed LLVM versions
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-semibold text-fd-foreground">
              Key Features
            </h2>
            <ul className="space-y-2 text-sm text-fd-muted-foreground">
              <li>
                • Multiple backends: VM, native via LLVM, and hybrid execution
              </li>
              <li>
                • FFI system with C ABI support and auto-generated bindings
              </li>
              <li>• Managed toolchain with pinned LLVM versions</li>
              <li>
                • Examples covering callbacks, graphics (Sokol), and runtime
                interop
              </li>
            </ul>
          </div>
        </section>

        {/* ── Documentation ────────────────────────────────────── */}
        <section>
          <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-fd-muted-foreground">
            Documentation
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {guideLinks.map(({ icon: Icon, title, href, description }) => (
              <Link key={href} href={href} className="kira-link-card">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-lg border border-fd-border bg-fd-muted text-fd-primary">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="kira-display text-sm font-semibold text-fd-foreground">
                    {title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-fd-muted-foreground">
                  {description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
