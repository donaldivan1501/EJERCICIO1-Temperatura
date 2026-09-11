import { useState } from 'react';

const MINIMA = 10;
const MAXIMA = 30;

export default function ControlTemperatura() {
  const [temperatura, setTemperatura] = useState(20);

  // La condición y el estilo se calculan a partir del estado actual.
  const condicion = temperatura <= 17
    ? { mensaje: 'Ambiente frío', color: 'text-sky-700', fondo: 'bg-sky-100', barra: 'bg-sky-500' }
    : temperatura <= 24
      ? { mensaje: 'Temperatura agradable', color: 'text-emerald-700', fondo: 'bg-emerald-100', barra: 'bg-emerald-500' }
      : { mensaje: 'Ambiente caliente', color: 'text-orange-700', fondo: 'bg-orange-100', barra: 'bg-orange-500' };

  // Math.min y Math.max protegen los límites incluso al llamar directamente a la función.
  const aumentar = () => setTemperatura(actual => Math.min(MAXIMA, actual + 1));
  const disminuir = () => setTemperatura(actual => Math.max(MINIMA, actual - 1));
  const porcentaje = ((temperatura - MINIMA) / (MAXIMA - MINIMA)) * 100;

  return (
    <section aria-labelledby="titulo" className="w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-300/40">
      <header className="bg-slate-900 px-6 py-7 text-white sm:px-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-sky-300">Laboratorio universitario</p>
        <h1 id="titulo" className="text-2xl font-bold sm:text-3xl">Control de temperatura</h1>
        <p className="mt-2 text-base text-slate-300">Ajusta la temperatura del ambiente.</p>
      </header>

      <div className="px-6 py-8 sm:px-8">
        <div aria-live="polite" aria-atomic="true" className="text-center">
          <p className="text-sm font-medium text-slate-500">Temperatura actual</p>
          <p className={`my-5 font-bold tabular-nums tracking-tight ${condicion.color}`}>
            <span className="text-8xl">{temperatura}</span><span className="ml-2 text-4xl">°C</span>
          </p>
          <p className={`inline-block rounded-full px-4 py-2 text-base font-semibold ${condicion.fondo} ${condicion.color}`}>
            {condicion.mensaje}
          </p>
        </div>

        <div className="mt-8">
          <div role="meter" aria-label="Temperatura del ambiente" aria-valuemin={MINIMA} aria-valuemax={MAXIMA} aria-valuenow={temperatura} aria-valuetext={`${temperatura} grados Celsius`} className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div className={`h-full rounded-full transition-all duration-300 ${condicion.barra}`} style={{ width: `${porcentaje}%` }} />
          </div>
          <div className="mt-2 flex justify-between text-sm text-slate-500"><span>10 °C</span><span>20 °C</span><span>30 °C</span></div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <button type="button" onClick={disminuir} disabled={temperatura === MINIMA} className="min-h-12 rounded-xl bg-sky-600 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-sky-700 disabled:bg-slate-200 disabled:text-slate-500">Disminuir -1 °C</button>
          <button type="button" onClick={aumentar} disabled={temperatura === MAXIMA} className="min-h-12 rounded-xl bg-orange-600 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-700 disabled:bg-slate-200 disabled:text-slate-500">Aumentar +1 °C</button>
        </div>
        <p className="mt-5 text-center text-sm text-slate-500">Simulación · Rango permitido: 10 °C a 30 °C</p>
      </div>
    </section>
  );
}
