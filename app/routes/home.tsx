import { BookOpenText, Cable, Command, Cpu, FileCode2, Wrench } from "lucide-react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import Link from "fumadocs-core/link";
import type { Route } from "./+types/home";
import { baseOptions } from "@/lib/layout.shared";

const guideLinks = [
  {
    title: "Read the Book",
    href: "/docs",
    description: "Start at The Kira Programming Language and read the manual in order.",
    icon: Wrench,
  },
  {
    title: "A Kira Tour",
    href: "/docs/a-kira-tour",
    description: "Take a compact guided pass through entrypoints, imports, types, and constructs.",
    icon: BookOpenText,
  },
  {
    title: "Language Guide",
    href: "/docs/language-guide",
    description: "Learn the current language surface chapter by chapter, in a Swift-style flow.",
    icon: Cable,
  },
  {
    title: "Appendix",
    href: "/docs/appendix",
    description: "Find operational material for the CLI, FFI workflows, toolchains, examples, and diagnostics.",
    icon: Command,
  },
];

const backendCards = [
  {
    icon: Cpu,
    title: "VM",
    body: "The default backend compiles Kira IR to bytecode and runs it in the repo's VM runtime.",
  },
  {
    icon: FileCode2,
    title: "LLVM Native",
    body: "The native path lowers the same IR through the LLVM C API and links a host executable.",
  },
  {
    icon: Cable,
    title: "Hybrid",
    body: "Keeps @Runtime functions in bytecode and @Native functions in a shared library — one process.",
  },
  {
    icon: Wrench,
    title: "Toolchain",
    body: "Managed LLVM installs under ~/.kira/toolchains/, fetched by kira-bootstrapper fetch-llvm.",
  },
];

const proofPoints = [
  "Managed Kira toolchain installs under ~/.kira/toolchains/<channel>/<version>/",
  "Pinned LLVM bundles under ~/.kira/toolchains/llvm/<llvm-version>/<host>/",
  "Generated bindings emitted as .kira files next to examples and tests",
  "Callbacks, Sokol proofs, and hybrid roundtrips all have corpus coverage",
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kira Documentation" },
    {
      name: "description",
      content:
        "The Kira Programming Language: a language-manual-first guide to the current Kira Zig toolchain, language surface, reference, and appendix workflows.",
    },
  ];
}

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="kira-home-content mx-auto flex w-full flex-1 flex-col gap-14 px-4 py-10 md:px-6 md:py-16">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="flex flex-col gap-7">
          <div className="kira-kicker">Kira language and toolchain</div>
          <h1 className="kira-display max-w-2xl text-4xl font-bold leading-[1.15] text-fd-foreground md:text-5xl">
            Read Kira as one language book, not a pile of disconnected notes.
          </h1>
          <p className="max-w-xl text-base leading-7 text-fd-muted-foreground md:text-lg md:leading-8">
            A Zig-hosted compiler with VM, LLVM native, and hybrid backends. Managed LLVM
            toolchains, construct-aware frontend coverage, and a manifest-driven C ABI FFI
            system. The docs now read as a single manual that documents what exists in this
            repo today.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link className="kira-button kira-button-primary" href="/docs">
              Read the Book
            </Link>
            <Link className="kira-button" href="/docs/a-kira-tour">
              A Kira Tour
            </Link>
            <Link className="kira-button" href="/docs/language-guide">
              Language Guide
            </Link>
            <Link className="kira-button" href="/docs/appendix">
              Appendix
            </Link>
          </div>
        </section>

        {/* ── Backends ─────────────────────────────────────────── */}
        <section>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-fd-muted-foreground">
            Backends
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {backendCards.map(({ icon: Icon, title, body }) => (
              <article key={title} className="kira-panel flex flex-col gap-3">
                <span className="flex size-8 items-center justify-center rounded-lg border border-fd-border bg-fd-muted text-fd-primary">
                  <Icon className="size-4" />
                </span>
                <div>
                  <h3 className="kira-display text-sm font-semibold text-fd-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-fd-muted-foreground">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Guides ───────────────────────────────────────────── */}
        <section>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-fd-muted-foreground">
            Guides
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {guideLinks.map(({ icon: Icon, title, href, description }) => (
              <Link key={href} href={href} className="kira-link-card">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-lg border border-fd-border bg-fd-muted text-fd-primary">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="kira-display text-sm font-semibold text-fd-foreground">{title}</h3>
                </div>
                <p className="text-sm leading-6 text-fd-muted-foreground">{description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── In the repo today ─────────────────────────────────── */}
        <section>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-fd-muted-foreground">
            In the repo today
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {proofPoints.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-fd-border bg-fd-card px-4 py-3 text-sm leading-6 text-fd-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </HomeLayout>
  );
}
