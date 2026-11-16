import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Lock, Mail } from "lucide-react";

export default function Login() {
  return (
    <div className="grid min-h-screen lg:grid-cols-[1.08fr_1fr]">
      <section className="relative hidden flex-col justify-between overflow-hidden bg-side p-8 text-white lg:flex">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }}
        />
        <div className="relative flex items-center gap-3">
          <Image src="/logo-blanco.png" alt="" width={44} height={44} className="h-11 w-11" />
          <span className="text-[18px] font-bold">MineOps Manager</span>
        </div>

        <div className="relative">
          <h1 className="text-[clamp(2.5rem,4vw,3.25rem)] leading-[1.02] font-extrabold tracking-[-0.02em]">
            Gestión de
            <br />
            <span className="text-side-muted">operaciones</span>
            <br />
            mineras
          </h1>
          <p className="mt-12 text-[12px] font-semibold tracking-[0.1em] text-side-muted uppercase">Demo desarrollada por</p>
          <div className="mt-3 inline-flex items-center gap-4 rounded-2xl border border-side-line bg-white/5 px-5 py-4">
            <Image src="/logo-blanco.png" alt="" width={48} height={48} className="h-12 w-12" />
            <div>
              <p className="text-[18px] font-bold">lexpy.cloud</p>
              <p className="text-[14px] text-side-muted">Alexander Dheins</p>
            </div>
          </div>
        </div>

        <p className="relative text-[13px] text-side-muted">
          lexpy.cloud © 2026 · Demo con datos de muestra
          <br />
          Desarrollado por <span className="font-semibold text-white">Alexander Dheins</span>
        </p>
      </section>

      <section className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-[448px]">
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <Image src="/logo-negro.png" alt="" width={40} height={40} className="h-10 w-10" />
            <span className="text-[17px] font-bold">MineOps Manager</span>
          </div>
          <h2 className="text-[26px] font-extrabold tracking-[-0.01em]">Bienvenido de vuelta</h2>
          <p className="mt-1.5 text-[14.5px] text-muted">Esta es una demo: entra sin credenciales.</p>

          <label className="mt-8 block text-[14.5px] font-medium">Correo electrónico o usuario</label>
          <div className="field mt-2 !py-3">
            <Mail className="h-4 w-4" /> demo
          </div>
          <label className="mt-6 block text-[14.5px] font-medium">Contraseña</label>
          <div className="field mt-2 !py-3">
            <Lock className="h-4 w-4" />
            <span className="flex-1 tracking-[0.2em]">••••••••</span>
            <Eye className="h-4 w-4" />
          </div>

          <Link href="/proyectos" className="btn mt-6 w-full justify-center !rounded-[10px] !py-3.5 !text-[16px]">
            Ingresar al sistema <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-8 flex items-center gap-4 text-[13px] text-faint">
            <span className="h-px flex-1 bg-line" /> Demo estática, sin funcionalidad <span className="h-px flex-1 bg-line" />
          </p>
        </div>
      </section>
    </div>
  );
}
