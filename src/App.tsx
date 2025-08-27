import React, { useMemo, useState, useEffect } from "react";

/**
 * Nova página inicial inspirada no design fornecido (hero fullscreen com CTA) + Formulário de planilha
 *
 * Features:
 * - Hero section estilo "Find Your Strength" com call to action
 * - Navegação simples (links de topo simulados)
 * - Integração com o formulário existente
 */

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        <div className="font-extrabold text-2xl tracking-tight">RUNPLAN</div>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#trainings" className="hover:text-gray-500">Treinos</a></li>
          <li><a href="#form" className="hover:text-gray-500">Gerar Planilha</a></li>
          <li><a href="#tips" className="hover:text-gray-500">Dicas</a></li>
          <li><a href="#contact" className="hover:text-gray-500">Contato</a></li>
        </ul>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 rounded-full border border-gray-800 hover:bg-gray-900 hover:text-white transition"
        >
          Criar minha planilha
        </button>
      </nav>

      {/* Hero */}
      <header className="relative bg-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-wide font-semibold text-gray-500">Atinga seus objetivos</p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-4">
            Encontre sua força <br />
            <span className="text-gray-500">dentro e fora da corrida.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Gere sua planilha personalizada de 5k ou 10k e alcance sua próxima meta com segurança e estratégia.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 rounded-full bg-black text-white font-semibold text-lg hover:opacity-90"
            >
              Criar minha planilha agora
            </button>
          </div>
        </div>
      </header>

      {/* Formulário */}
      {showForm && (
        <section id="form" className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Monte sua planilha</h2>
          <p className="text-center text-gray-600 mb-12">Responda algumas perguntas e geraremos sua planilha de corrida personalizada.</p>

          <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-200">
            <div>
              <label className="block text-sm font-medium mb-2">Distância alvo</label>
              <select className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-black">
                <option>5k</option>
                <option>10k</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Nível</label>
              <select className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-black">
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Semanas até a prova</label>
                <input type="number" className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Minutos por treino</label>
                <input type="number" className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-black" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Pace atual (mm:ss)</label>
                <input type="text" placeholder="7:30" className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pace alvo (mm:ss)</label>
                <input type="text" placeholder="6:30" className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-black" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Objetivo</label>
              <select className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-black">
                <option>Completar a prova</option>
                <option>Ganhar resistência</option>
                <option>Melhorar o pace</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="strength" className="rounded border-gray-300" />
              <label htmlFor="strength" className="text-sm">Incluir fortalecimento (2x/semana)</label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Restrições (opcional)</label>
              <textarea rows={3} className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-black" />
            </div>

            <div className="flex justify-center">
              <button type="submit" className="px-6 py-3 rounded-full bg-black text-white font-semibold text-lg hover:opacity-90">
                Gerar planilha
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Footer */}
      <footer id="contact" className="text-center text-sm text-gray-500 py-10 border-t mt-20">
        Feito com ❤️ para corredores. Use com bom senso e ajuste conforme seu corpo responde.
      </footer>
    </div>
  );
}

