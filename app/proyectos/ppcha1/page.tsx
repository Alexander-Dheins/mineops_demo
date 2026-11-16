import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Eye, Users } from "lucide-react";
import Shell from "@/components/Shell";
import { PROJECT } from "@/lib/data";

const MODULES = [
  {
    tag: "M1",
    title: "Embarque",
    links: [
      { label: "Dashboard embarque", href: "/proyectos/ppcha1/embarque" },
      { label: "Personal de embarque" },
      { label: "Unidades y horarios" },
      { label: "Punto de embarque" },
    ],
  },
  {
    tag: "M2",
    title: "Asistencia operativa",
    links: [{ label: "Trabajadores" }, { label: "Grupos y horarios" }, { label: "Pase de lista" }, { label: "Historial de asistencia" }],
  },
  {
    tag: "M3",
    title: "Evaluación",
    links: [{ label: "Evaluaciones" }, { label: "Plantillas eval." }, { label: "Satisfacción del servicio" }],
  },
];

export default function Panel() {
  return (
    <Shell variant="project" crumbs={[PROJECT.unit, PROJECT.name, "Panel del proyecto"]} status="En proyecto">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="flex flex-wrap items-center gap-3 text-[26px] font-extrabold tracking-[-0.01em]">
            {PROJECT.name}
            <span className="pill-soft font-mono !text-[11px]">{PROJECT.code}</span>
            <span className="pill">Abierto</span>
          </h1>
          <p className="mt-1.5 flex items-center gap-1.5 text-[14.5px] text-muted">
            <Building2 className="h-4 w-4" strokeWidth={1.8} /> {PROJECT.unit}
          </p>
        </div>
        <div className="flex gap-2">
          {MODULES.map((module) => (
            <span key={module.tag} className="rounded-full border border-line px-3 py-1 text-[12.5px] font-bold">
              {module.tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[320px_1fr] xl:gap-x-56">
        <section>
          <h2 className="label-caps mb-3 !text-[14px]">Módulos habilitados</h2>
          <div className="space-y-3.5">
            {MODULES.map((module) => (
              <div key={module.tag} className="card p-4">
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-2.5 text-[15px] font-semibold">
                    <span className="rounded-md border border-line px-1.5 py-0.5 text-[11px] font-bold">{module.tag}</span>
                    {module.title}
                  </p>
                  <span className="pill">Activo</span>
                </div>
                <div className="mt-3 flex flex-col items-start gap-2">
                  {module.links.map((link) =>
                    link.href ? (
                      <Link key={link.label} href={link.href} className="btn transition-opacity hover:opacity-85">
                        {link.label} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <span key={link.label} className="btn cursor-default" title="No disponible en la demo">
                        {link.label} <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="min-w-0">
          <h2 className="label-caps mb-3 !text-[14px]">Trabajadores del proyecto</h2>
          <div className="card overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-soft">
                  <Users className="h-[18px] w-[18px]" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[14.5px] font-semibold">21 trabajadores en el padrón</p>
                  <p className="text-[12.5px] text-faint">Base del proyecto · sincronizada con Trabajadores</p>
                </div>
              </div>
              <span className="btn-ghost">
                <Eye className="h-4 w-4" /> Ver trabajadores
              </span>
            </div>
            <div className="grid grid-cols-3 divide-x divide-line border-t border-line text-center">
              {[
                ["21", "Activos"],
                ["0", "Inactivos"],
                ["21", "Con QR"],
              ].map(([value, label]) => (
                <div key={label} className="py-4">
                  <p className={`text-[20px] font-extrabold ${value === "0" ? "text-faint" : ""}`}>{value}</p>
                  <p className="text-[12.5px] text-faint">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <span className="btn-ghost mt-4 w-full justify-center !py-2.5 !text-[14.5px] !font-semibold">
            <Users className="h-4 w-4" /> Historial de trabajadores <ArrowRight className="h-4 w-4" />
          </span>
          <p className="mt-2.5 text-center text-[11.5px] text-faint">
            Asistencia y evaluación de cada persona, con su historial en todas las operaciones.
          </p>

          <div className="mt-12 flex flex-col items-center">
            <Image src="/logo-negro.png" alt="lexpy.cloud" width={180} height={180} className="h-44 w-44" />
            <p className="mt-5 text-[13px] text-muted">
              Desarrollado por <span className="font-semibold text-ink">Alexander Dheins</span>
            </p>
          </div>
        </section>
      </div>
    </Shell>
  );
}
