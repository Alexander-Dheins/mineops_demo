import { Calendar, ChevronDown, CircleCheck, Clock, Info, MapPin, ScanFace, Search, TriangleAlert, Truck, Users } from "lucide-react";
import Shell from "@/components/Shell";
import { MARKS, PROJECT } from "@/lib/data";

const STATS = [
  { label: "Total a embarcar", value: "21", hint: "personal en el roster", icon: Users },
  { label: "Embarcados", value: "7", hint: "33.3 % completado", icon: CircleCheck },
  { label: "Pendientes", value: "14", hint: "en espera de embarque", icon: Clock },
  { label: "Unidades activas", value: "1", hint: "de 1 en la flota", icon: Truck },
  { label: "Por aprobar", value: "0", hint: "solicitudes públicas", icon: TriangleAlert },
];

function Select({ children }: { children: React.ReactNode }) {
  return (
    <span className="field justify-between !text-ink">
      {children} <ChevronDown className="h-4 w-4 text-muted" />
    </span>
  );
}

export default function Embarque() {
  return (
    <Shell variant="project" crumbs={[PROJECT.unit, PROJECT.name, "Dashboard de Embarque"]} status="En proyecto">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {STATS.map(({ label, value, hint, icon: Icon }) => (
          <div key={label} className="card p-5">
            <Icon className="h-5 w-5" strokeWidth={1.8} />
            <p className="mt-6 text-[14.5px] text-muted">{label}</p>
            <p className="mt-1 text-[32px] leading-none font-extrabold">{value}</p>
            <p className="mt-3 text-[12.5px] text-faint">{hint}</p>
          </div>
        ))}
      </div>

      <div className="card mt-6 px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[14.5px] font-semibold">Progreso de embarque — Roster del proyecto</p>
          <p className="flex gap-4 text-[12.5px] text-muted">
            <span className="flex items-center gap-1.5">
              <i className="h-2 w-2 rounded-full bg-ink" /> Embarcados 33.3%
            </span>
            <span className="flex items-center gap-1.5">
              <i className="h-2 w-2 rounded-full bg-neutral-300" /> Pendientes 66.7%
            </span>
          </p>
        </div>
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-soft">
          <div className="h-full w-1/3 rounded-full bg-ink" />
        </div>
      </div>

      <div className="card mt-6 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[15px] font-semibold">Cierre de embarque</p>
            <p className="mt-0.5 text-[12.5px] text-muted">
              Al cerrar un evento se bloquean el punto de embarque y el formulario público: nadie más puede marcar{" "}
              <b className="text-ink">ese día</b>. Los demás días siguen abiertos.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="field !text-ink">
              16/11/2026 <Calendar className="ml-6 h-4 w-4" />
            </span>
            <Select>Movilización</Select>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-soft/60 px-5 py-3">
          <p className="flex items-center gap-3 text-[13px]">
            <span className="pill-soft !rounded-full !font-semibold">Abierto</span> Movilización del 16/11/2026
          </p>
          <span className="btn">Cerrar embarque</span>
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_minmax(320px,0.48fr)]">
        <section className="min-w-0">
          <div className="inline-flex rounded-xl bg-soft p-1 text-[14.5px]">
            <span className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold shadow-sm">
              Marcaciones de viaje <span className="rounded-full bg-soft px-2 text-[11.5px]">7</span>
            </span>
            <span className="px-4 py-2 text-muted">Asistencias diarias</span>
          </div>

          <div className="card mt-4 overflow-hidden">
            <div className="flex items-start justify-between px-5 pt-4">
              <div>
                <p className="text-[15px] font-semibold">Marcaciones de embarque</p>
                <p className="text-[12.5px] text-muted">Registro de marcaciones del personal que embarcó</p>
              </div>
              <span className="text-[12.5px] font-medium">En vivo</span>
            </div>
            <div className="flex flex-wrap gap-2 p-4">
              <div className="field min-w-[200px] flex-1">
                <Search className="h-4 w-4" /> Buscar por nombre o DNI...
              </div>
              <Select>Todos los tipos</Select>
              <Select>Todos los estados</Select>
              <Select>Todas las unidades</Select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] text-left">
                <thead className="border-y border-line bg-soft/60">
                  <tr className="label-caps">
                    <th className="px-5 py-3">Trabajador</th>
                    <th className="px-4 py-3">Hora / Fecha</th>
                    <th className="px-4 py-3">Ubicación</th>
                    <th className="px-4 py-3">Unidad</th>
                    <th className="px-4 py-3">Tipo</th>
                    <th className="px-4 py-3">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {MARKS.map((mark) => (
                    <tr key={mark.dni}>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <ScanFace className="h-7 w-7 shrink-0" strokeWidth={1.5} />
                          <div>
                            <p className="text-[14.5px] font-semibold">{mark.name}</p>
                            <p className="flex items-center gap-2 text-[12px] text-faint">
                              DNI: {mark.dni} <span className="pill-soft !px-1.5 !py-0 !text-[10.5px] !font-semibold">Kiosco</span>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 font-mono">
                        <p className="text-[13px] font-bold">09:08</p>
                        <p className="text-[12px] text-faint">24/10/2026</p>
                      </td>
                      <td className="px-4 py-3.5 font-mono text-[12px]">
                        {mark.gps ? (
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" /> {mark.gps}
                          </span>
                        ) : (
                          <span className="text-faint">— sin GPS</span>
                        )}
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="pill-soft font-mono !px-1.5 !py-0 !text-[11px] !font-bold">{mark.unit}</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="pill-soft">Movilización</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="pill">A tiempo</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="card overflow-hidden">
            <div className="p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="flex items-center gap-2 text-[15px] font-semibold">
                  Pendientes por aprobar <span className="pill-soft !rounded-full !px-2 !py-0 !text-[10.5px]">Del viaje</span>
                </p>
                <span className="text-[12px] font-medium text-muted">Requiere revisión</span>
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                Personal que <b className="text-ink">ya está en el roster</b> y marcó su{" "}
                <b className="text-ink">movilización o desmovilización</b> desde el formulario público. Al aprobar solo se registra esa
                marcación del viaje.
              </p>
              <p className="mt-3 flex gap-2 rounded-lg border border-line bg-soft/60 px-3 py-2 text-[11.5px] text-muted">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>
                  Esto es el <b>viaje</b> (subir o bajar del bus), no la asistencia diaria al trabajo: esa se pasa en{" "}
                  <b>Asistencia operativa → Pase de lista</b>.
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center border-t border-line px-5 py-10 text-center">
              <CircleCheck className="h-8 w-8 text-neutral-300" strokeWidth={1.4} />
              <p className="mt-3 text-[14.5px] text-muted">No hay marcaciones de viaje pendientes</p>
              <p className="mt-1 text-[11.5px] text-faint">La asistencia diaria al trabajo se pasa en Asistencia operativa → Pase de lista</p>
            </div>
          </div>

          <div className="card p-5">
            <p className="text-[15px] font-semibold">Calendario de marcaciones</p>
            <p className="mt-1 text-[12.5px] text-muted">Selecciona un día para ver solo sus marcaciones.</p>
            <p className="mt-4 text-[13.5px] font-semibold">Noviembre 2026</p>
            <div className="mt-2 grid grid-cols-7 gap-y-1 text-center text-[12px]">
              {["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"].map((day) => (
                <span key={day} className="pb-1 text-faint">
                  {day}
                </span>
              ))}
              {Array.from({ length: 6 }, (_, i) => (
                <span key={`b${i}`} />
              ))}
              {Array.from({ length: 30 }, (_, i) => (
                <span
                  key={i}
                  className={`mx-auto grid h-7 w-7 place-items-center rounded-full ${
                    i + 1 === 16 ? "bg-ink font-bold text-white" : [9, 10, 11, 12, 13].includes(i + 1) ? "bg-soft" : "text-muted"
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Shell>
  );
}
