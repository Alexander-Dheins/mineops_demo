"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  Code2,
  Database,
  LayoutGrid,
  LogOut,
  PanelLeft,
  QrCode,
  ShieldCheck,
  UserCircle,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { PROJECT } from "@/lib/data";

type Item = { label: string; href?: string; icon?: LucideIcon };

/* En esta demo solo navegan las pantallas que existen; el resto del menú
   se muestra, pero no lleva a ningún lado. */
function NavItem({ item, sub = false, onNavigate }: { item: Item; sub?: boolean; onNavigate: () => void }) {
  const pathname = usePathname();
  const active = item.href === pathname;
  const Icon = item.icon;
  const base = `flex w-full items-center gap-3 rounded-lg text-[14.5px] ${sub ? "py-2 pr-3 pl-7" : "px-3 py-2"}`;
  const body = (
    <>
      {Icon ? <Icon className="h-4 w-4 shrink-0" strokeWidth={1.8} /> : null}
      <span className="min-w-0 flex-1 truncate">{item.label}</span>
      {active ? <span className="h-1.5 w-1.5 rounded-full bg-ink" /> : null}
    </>
  );
  if (!item.href) {
    return (
      <span title="No disponible en la demo" className={`${base} cursor-default text-side-muted`}>
        {body}
      </span>
    );
  }
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`${base} transition-colors ${
        active ? "bg-white font-semibold text-ink" : "text-neutral-200 hover:bg-white/10"
      }`}
    >
      {body}
    </Link>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="px-2.5">
      <p className="px-3 pt-5 pb-2 text-[12px] font-semibold tracking-[0.08em] text-side-muted uppercase">{title}</p>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

function Module({ tag, title, items, onNavigate }: { tag: string; title: string; items: Item[]; onNavigate: () => void }) {
  const pathname = usePathname();
  const open = items.some((item) => item.href === pathname);
  return (
    <div>
      <p className="flex items-center gap-2.5 px-3 py-2 text-[13.5px] font-semibold text-neutral-200">
        <span className={`rounded px-1.5 py-px text-[10.5px] font-bold ${open ? "bg-white text-ink" : "bg-white/15 text-white"}`}>
          {tag}
        </span>
        <span className="flex-1">{title}</span>
        <ChevronDown className="h-4 w-4 text-side-muted" />
      </p>
      <div className="space-y-0.5">
        {items.map((item) => (
          <NavItem key={item.label} item={item} sub onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

type Props = {
  variant: "global" | "project";
  crumbs: string[];
  status: string;
  children: React.ReactNode;
};

export default function Shell({ variant, crumbs, status, children }: Props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const base = `/proyectos/${PROJECT.id}`;

  return (
    <div className="flex min-h-full">
      {open ? <button aria-label="Cerrar el menú" onClick={close} className="fixed inset-0 z-30 bg-black/40 lg:hidden" /> : null}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[254px] flex-col bg-side text-white transition-transform duration-200 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[60px] shrink-0 items-center gap-3 border-b border-side-line px-4">
          <Image src="/logo-blanco.png" alt="" width={36} height={36} className="h-9 w-9" />
          {variant === "global" ? (
            <div className="min-w-0 leading-tight">
              <p className="text-[14.5px] font-bold">MineOps</p>
              <p className="text-[12px] text-side-muted">Manager v1.0</p>
            </div>
          ) : (
            <div className="min-w-0 leading-tight">
              <p className="truncate text-[14px] font-bold">{PROJECT.name}</p>
              <p className="text-[11.5px] text-side-muted">{PROJECT.code}</p>
            </div>
          )}
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto pb-4">
          {variant === "global" ? (
            <>
              <Group title="General">
                <NavItem item={{ label: "Dashboard", icon: LayoutGrid }} onNavigate={close} />
              </Group>
              <Group title="Administración">
                <NavItem item={{ label: "Proyectos", icon: Building2, href: "/proyectos" }} onNavigate={close} />
                <NavItem item={{ label: "Usuarios", icon: UserCircle }} onNavigate={close} />
                <NavItem item={{ label: "Plantillas QR", icon: QrCode }} onNavigate={close} />
              </Group>
              <Group title="Sistema">
                <NavItem item={{ label: "Auditoría", icon: ShieldCheck }} onNavigate={close} />
                <NavItem item={{ label: "Backups", icon: Database }} onNavigate={close} />
                <NavItem item={{ label: "Conexión API", icon: Code2 }} onNavigate={close} />
              </Group>
            </>
          ) : (
            <>
              <div className="px-2.5 pt-3">
                <Link href="/proyectos" onClick={close} className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13.5px] font-semibold text-neutral-200 hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4" /> Volver a Proyectos
                </Link>
              </div>
              <Group title="General">
                <NavItem item={{ label: "Dashboard", icon: LayoutGrid }} onNavigate={close} />
              </Group>
              <Group title="Proyecto">
                <NavItem item={{ label: "Panel del proyecto", icon: LayoutGrid, href: base }} onNavigate={close} />
              </Group>
              <Group title="Módulos">
                <Module
                  tag="M1"
                  title="Embarque"
                  onNavigate={close}
                  items={[
                    { label: "Dashboard embarque", href: `${base}/embarque` },
                    { label: "Personal de embarque" },
                    { label: "Unidades y horarios" },
                    { label: "Punto de embarque" },
                  ]}
                />
                <Module
                  tag="M2"
                  title="Asistencia operativa"
                  onNavigate={close}
                  items={[{ label: "Trabajadores" }, { label: "Grupos y horarios" }, { label: "Pase de lista" }, { label: "Historial de asistencia" }]}
                />
                <Module
                  tag="M3"
                  title="Evaluación"
                  onNavigate={close}
                  items={[{ label: "Evaluaciones" }, { label: "Plantillas eval." }, { label: "Satisfacción del servicio" }]}
                />
              </Group>
            </>
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-3 border-t border-side-line px-4 py-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[12px] font-bold text-ink">AD</span>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-[14px] font-semibold">Administrador Demo</p>
            <p className="text-[12px] text-side-muted">Super Admin</p>
          </div>
          <Link href="/" aria-label="Salir" title="Salir" className="text-side-muted hover:text-white">
            <LogOut className="h-4 w-4" />
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-[60px] shrink-0 items-center gap-4 border-b border-line bg-white px-4 sm:px-8">
          <button aria-label="Abrir el menú" onClick={() => setOpen(true)} className="text-muted lg:pointer-events-none">
            <PanelLeft className="h-[18px] w-[18px]" />
          </button>
          <p className="min-w-0 flex-1 truncate text-[14.5px] text-faint">
            {crumbs.map((crumb, i) => (
              <span key={crumb}>
                {i > 0 ? <span className="mx-2">/</span> : null}
                <span className={i === crumbs.length - 1 ? "font-semibold text-ink" : ""}>{crumb}</span>
              </span>
            ))}
          </p>
          <span className="pill-soft hidden sm:inline-flex">Demo con datos de muestra</span>
          <span className="pill">{status}</span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-[11.5px] font-bold text-white">AD</span>
        </header>
        <main className="flex-1 px-4 py-7 sm:px-8">{children}</main>
      </div>
    </div>
  );
}
