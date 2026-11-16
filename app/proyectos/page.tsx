import Link from "next/link";
import { ArrowRight, Building2, ChevronDown, CircleCheck, Expand, Landmark, Lock, Plus, Presentation, Search, SquarePen } from "lucide-react";
import Shell from "@/components/Shell";
import { PROJECTS } from "@/lib/data";

const STATS = [
  { label: "Total proyectos", value: "10", hint: "En todas las unidades", icon: Landmark },
  { label: "Abiertos", value: "10", hint: "En operación", icon: CircleCheck },
  { label: "Unidades Mineras", value: "4", hint: "Agrupan los proyectos", icon: Building2 },
  { label: "Módulos completos", value: "10", hint: "Proyectos activos completos", icon: Expand },
];

export default function Proyectos() {
  return (
    <Shell variant="global" crumbs={["MineOps", "Proyectos"]} status="En línea">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-extrabold tracking-[-0.01em]">Proyectos</h1>
          <p className="mt-1 text-[14.5px] text-muted">
            Cada proyecto pertenece a una Unidad Minera. Los proyectos se cierran, nunca se eliminan.
          </p>
        </div>
        <span className="btn !px-4 !py-2.5 !text-[14.5px]">
          <Plus className="h-4 w-4" /> Nuevo proyecto
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map(({ label, value, hint, icon: Icon }) => (
          <div key={label} className="card p-5">
            <div className="flex items-start justify-between">
              <p className="text-[14.5px] text-muted">{label}</p>
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-soft">
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </span>
            </div>
            <p className="mt-2 text-[32px] leading-none font-extrabold">{value}</p>
            <p className="mt-3 text-[12.5px] text-faint">{hint}</p>
          </div>
        ))}
      </div>

      <div className="card mt-8 overflow-hidden">
        <div className="flex flex-wrap items-center gap-3 p-4">
          <div className="field min-w-[220px] flex-1">
            <Search className="h-4 w-4" /> Buscar por nombre o código...
          </div>
          <span className="btn-ghost">
            Todas las unidades <ChevronDown className="h-4 w-4 text-muted" />
          </span>
          <span className="btn-ghost">Todos</span>
          <span className="btn">Abiertos</span>
          <span className="btn-ghost">Cerrados</span>
          <span className="font-mono text-[11.5px] text-faint">10 proyectos</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left">
            <thead className="border-y border-line bg-soft/60">
              <tr className="label-caps">
                <th className="px-5 py-3">Proyecto</th>
                <th className="px-5 py-3">Unidad minera</th>
                <th className="px-5 py-3">Personal</th>
                <th className="px-5 py-3">Estado</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {PROJECTS.map((project) => (
                <tr key={project.code}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3.5">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">
                        <Presentation className="h-[18px] w-[18px]" strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="text-[14.5px] font-semibold">{project.name}</p>
                        <p className="font-mono text-[11.5px] text-faint">
                          {project.code} · {project.client}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="flex items-center gap-2 text-[14.5px] font-medium">
                      <Building2 className="h-4 w-4 text-muted" strokeWidth={1.8} /> {project.unit}
                    </p>
                    <p className="pl-6 font-mono text-[11.5px] text-faint">{project.place}</p>
                  </td>
                  <td className="px-5 py-4 text-[14.5px]">
                    <span className="font-bold">{project.staff}</span> <span className="text-[13px] text-faint">asignados</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="pill">Abierto</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      {project.href ? (
                        <Link href={project.href} className="btn-ghost transition-colors hover:bg-soft">
                          Entrar al panel <ArrowRight className="h-4 w-4" />
                        </Link>
                      ) : (
                        <span className="btn-ghost cursor-default text-faint" title="No disponible en la demo">
                          Entrar al panel <ArrowRight className="h-4 w-4" />
                        </span>
                      )}
                      <span className="btn-ghost !px-2">
                        <SquarePen className="h-4 w-4" />
                      </span>
                      <span className="btn-ghost !px-2">
                        <Lock className="h-4 w-4" />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Shell>
  );
}
