import React from "react";
import {
  MapPin, Clock, Phone, Sparkles, ShieldCheck, HeartHandshake,
  CalendarCheck, Leaf, Flame, Droplets, Gem, MoonStar, Star,
  ArrowRight, BadgeCheck, HandHeart, Sun, MessageCircle
} from "lucide-react";
import logoImg from "container:///mnt/data/src/assets/a5f23111611b23b5-leandro_logo_oficial_limpo.png";
import mixImg from "container:///mnt/data/src/assets/fed2998adb39d111-image_20261117_092344.webp";
import terapiasImg from "container:///mnt/data/src/assets/6c99f1020f77db7f-image_20261117_092338.webp";
import relaxanteImg from "container:///mnt/data/src/assets/b62a3e318a698030-image_20261117_092438.webp";
import pedrasImg from "container:///mnt/data/src/assets/6678c8686def4915-image_20261117_092443.webp";
import taroImg from "container:///mnt/data/src/assets/7ee9dd3bd864fc92-image_20261117_092343.webp";

const whatsapp = "https://wa.me/5511986182838";

function SectionHeading({ number, eyebrow, title, subtitle }: { number: string; eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="mb-7 sm:mb-10">
      <div className="flex items-center gap-3">
        <span className="serif text-[clamp(2rem,6vw,3.2rem)] leading-none text-[var(--green)]">{number}</span>
        <div>
          <p className="eyebrow text-[var(--green)]">{eyebrow}</p>
          <h2 className="serif text-[clamp(2rem,7vw,3.6rem)] leading-[0.95] font-semibold text-[var(--navy)]">{title}</h2>
        </div>
      </div>
      <div className="gold-rule mt-5 max-w-[180px]" />
      <p className="mt-4 max-w-2xl text-[15px] sm:text-lg leading-relaxed text-[var(--brown)]">{subtitle}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-[12px] font-medium text-[var(--navy)]">
      {children}
    </span>
  );
}

function SectionFooter({ light = false }: { light?: boolean }) {
  return (
    <div className={`mt-12 flex flex-col items-center justify-center gap-3 border-t pt-6 text-center ${light ? "border-white/20" : "border-[var(--gold)]/50"}`}>
      <img src={logoImg} alt="Logotipo oficial Leandro Patrício — Massoterapia & Podologia" className={`h-12 w-auto rounded-full bg-white object-contain p-1 shadow-sm ${light ? "" : "border border-[var(--line)]"}`} />
      <p className={`text-[10px] font-semibold tracking-[.22em] ${light ? "text-[var(--beige-text)]/80" : "text-[var(--navy)]/70"}`}>LEANDRO PATRÍCIO • MASSOTERAPIA &amp; PODOLOGIA</p>
    </div>
  );
}

export default function App() {
  return (
    <div data-safe-area-inset-root style={{ boxSizing: "border-box", paddingTop: "var(--safe-area-inset-top)", minHeight: "100vh", background: "var(--cream)" }} className="overflow-x-clip text-[var(--brown)]">
      {/* Top navigation */}
      <header data-safe-area-sticky-top style={{ top: "var(--safe-area-inset-top)" }} className="no-print sticky z-30 border-b border-[var(--gold)]/50 bg-[var(--navy)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img src={logoImg} alt="Logotipo oficial Leandro Patrício" className="h-10 w-10 shrink-0 rounded-full bg-white object-contain p-1" />
            <span className="min-w-0">
              <span className="serif block truncate text-[20px] font-semibold leading-none text-[var(--beige-text)]">Leandro Patrício</span>
              <span className="eyebrow mt-1 block text-[9px] text-[var(--green-light)]">Massoterapia &amp; Podologia</span>
            </span>
          </a>
          <nav className="no-scrollbar hidden items-center gap-5 text-[13px] font-medium text-[var(--beige-text)] md:flex" aria-label="Seções do catálogo">
            <a href="#mix" className="hover:text-[var(--green-light)]">Mix de Massagem</a>
            <a href="#terapias" className="hover:text-[var(--green-light)]">Terapias</a>
            <a href="#relaxante" className="hover:text-[var(--green-light)]">Relaxante</a>
            <a href="#pedras" className="hover:text-[var(--green-light)]">Pedras Quentes</a>
            <a href="#taro" className="hover:text-[var(--green-light)]">Tarô</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noopener" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--green)] px-3 py-2 text-[12px] font-semibold text-white sm:px-4 sm:text-[13px]">
            <MessageCircle size={16} /> Agendar
          </a>
        </div>
        <div className="no-scrollbar flex gap-5 overflow-x-auto px-4 pb-2 text-[12px] font-medium text-[var(--beige-text)]/90 md:hidden">
          <a href="#mix" className="whitespace-nowrap">Mix de Massagem</a>
          <a href="#terapias" className="whitespace-nowrap">Terapias</a>
          <a href="#relaxante" className="whitespace-nowrap">Relaxante</a>
          <a href="#pedras" className="whitespace-nowrap">Pedras Quentes</a>
          <a href="#taro" className="whitespace-nowrap">Tarô</a>
        </div>
      </header>

      <main>
        {/* COVER */}
        <section id="inicio" className="relative overflow-hidden bg-white text-[var(--navy)]">
          <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 text-center sm:px-6 sm:pt-14 lg:pb-14">
            <div className="mx-auto flex flex-col items-center">
              <img src={logoImg} alt="Logotipo oficial Leandro Patrício — Massoterapia & Podologia, EST. 2024, Saúde • Bem-Estar" className="h-auto w-[clamp(280px,82vw,560px)] rounded-[26px] border border-[var(--line)] bg-white object-contain p-3 shadow-[0_24px_60px_rgba(15,58,74,0.14)]" />
              <p className="ornament mt-7 text-sm">✦ &nbsp; ✦ &nbsp; ✦</p>
              <h1 className="serif mt-4 text-[clamp(3.1rem,11vw,6.8rem)] font-semibold leading-[0.82] text-[var(--navy)]">
                Leandro<br /><span className="italic font-medium text-[var(--green)]">Patrício</span>
              </h1>
              <p className="serif mt-5 text-[clamp(1.5rem,5vw,2.5rem)] leading-tight text-[var(--navy)]">Massoterapia <span className="text-[var(--green)]">&amp;</span> Podologia</p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--navy)]/90 sm:text-lg">
                Um espaço de cuidado reservado e humanizado, no coração da Vila Carrão.
                Aqui, cada atendimento é pensado para o seu corpo, o seu ritmo e o seu momento.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <Pill><HeartHandshake size={15} /> Atendimento humanizado</Pill>
                <Pill><ShieldCheck size={15} /> Material esterilizado</Pill>
                <Pill><CalendarCheck size={15} /> Com hora marcada</Pill>
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a href={whatsapp} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[var(--green)] px-5 py-3 text-sm font-semibold text-white">
                  <Phone size={17} /> Chama no WhatsApp <ArrowRight size={16} />
                </a>
                <a href="#mix" className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)] px-5 py-3 text-sm font-semibold text-[var(--navy)]">Ver o catálogo</a>
              </div>
            </div>

            <aside className="card-shadow mx-auto mt-10 max-w-3xl rounded-[26px] border border-[var(--gold)]/50 bg-white p-5 text-left text-[var(--brown)] sm:p-6">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-[var(--green)]">Onde encontrar</p>
                <MapPin className="text-[var(--green)]" />
              </div>
              <h2 className="serif mt-3 text-3xl font-semibold leading-tight text-[var(--navy)]">Rua Garimpos, 24</h2>
              <p className="mt-1 font-medium text-[var(--navy)]">Vila Carrão • São Paulo</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--brown)]">A apenas 2 minutos do Metrô Carrão. Chegue com calma, saia renovado.</p>
              <div className="gold-rule my-5" />
              <div className="grid gap-4 text-sm sm:grid-cols-3">
                <div className="flex gap-3"><Clock className="mt-0.5 shrink-0 text-[var(--green)]" size={19} /><div><p className="font-semibold">Segunda a sexta</p><p className="text-[var(--brown)]">8h às 18h</p></div></div>
                <div className="flex gap-3"><Sun className="mt-0.5 shrink-0 text-[var(--green)]" size={19} /><div><p className="font-semibold">Sábado</p><p className="text-[var(--brown)]">8h às 14h</p></div></div>
                <div className="flex gap-3"><Phone className="mt-0.5 shrink-0 text-[var(--green)]" size={19} /><div><p className="font-semibold">WhatsApp</p><p className="text-[var(--brown)]">11 98618-2838</p></div></div>
              </div>
              <div className="mt-6 rounded-2xl bg-[var(--cream)] px-4 py-4">
                <p className="serif text-xl italic leading-snug text-[var(--navy)]">“Cuidar do corpo é abrir espaço para respirar melhor.”</p>
                <p className="mt-2 text-xs font-semibold tracking-wider text-[var(--brown)]">ATENDIMENTO RESERVADO • HORA MARCADA</p>
              </div>
            </aside>
          </div>
          <div className="border-t border-[var(--gold)]/50 bg-[var(--navy-dark)]">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 text-[11px] font-semibold tracking-[.14em] text-[var(--beige-text)] sm:px-6 sm:text-xs">
              <span>ALÍVIO • EQUILÍBRIO • PRESENÇA</span><span className="hidden sm:inline">VILA CARRÃO • SP</span><span>RESERVADO &amp; HUMANIZADO</span>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 sm:px-6"><SectionFooter /></div>
        </section>

        {/* 1 MIX */}
        <section id="mix" className="print-page mx-auto max-w-6xl scroll-mt-28 px-4 py-12 sm:px-6 sm:py-20">
          <SectionHeading number="01" eyebrow="O cuidado completo" title="Mix de Massagem" subtitle="Uma combinação inteligente de técnicas para aliviar tensões, soltar o corpo e devolver leveza ao seu dia." />
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="photo-frame min-h-[280px] sm:min-h-[430px]"><img src={mixImg} alt="Mix de Massagem — sessão de massoterapia com toalha, pedras e ambiente de spa" /></div>
            <div>
              <p className="serif text-2xl italic leading-snug text-[var(--navy)]">Cinco técnicas em um só atendimento, no ritmo que o seu corpo pede.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: <Leaf size={19} />, t: "Liberação miofascial", d: "Alívio de pontos de tensão e mais mobilidade." },
                  { icon: <HandHeart size={19} />, t: "Anmá", d: "Tradição oriental para relaxar e equilibrar." },
                  { icon: <Sparkles size={19} />, t: "Shiatsu", d: "Pressão precisa nos pontos de tensão do corpo." },
                  { icon: <ArrowRight size={19} />, t: "Alongamentos", d: "Soltura, leveza e amplitude de movimento." },
                  { icon: <Flame size={19} />, t: "Ventosaterapia comum", d: "Estímulo da circulação e alívio muscular." },
                ].map((item) => (
                  <article key={item.t} className="rounded-2xl border border-[var(--line)] bg-white p-4">
                    <span className="text-[var(--green)]">{item.icon}</span>
                    <h3 className="mt-3 font-semibold text-[var(--navy)]">{item.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--brown)]">{item.d}</p>
                  </article>
                ))}
                <article className="rounded-2xl bg-[var(--navy)] p-4 text-white">
                  <p className="eyebrow text-[var(--green-light)]">Para quem é</p>
                  <p className="mt-2 text-sm leading-relaxed">Para quem vive com tensão, cansaço ou dores do dia a dia e quer um cuidado completo.</p>
                </article>
              </div>
            </div>
          </div>
          <SectionFooter />
        </section>

        {/* 2 TERAPIAS */}
        <section id="terapias" className="print-page scroll-mt-28 border-y border-[var(--gold)]/50 bg-white/60">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
            <SectionHeading number="02" eyebrow="Complementos do tratamento" title="Terapias Integrativas Adicionais" subtitle="Recursos adicionais para potencializar o seu tratamento, escolhidos com você conforme a necessidade do momento." />
            <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-10">
              <div className="photo-frame min-h-[280px] sm:min-h-[400px]"><img src={terapiasImg} alt="Terapias Integrativas Adicionais — ambiente de massoterapia com toalhas e velas" /></div>
              <div className="space-y-3">
                {[
                  { name: "Ventosaterapia com água morna", price: "R$ 20", desc: "Conforto térmico e relaxamento muscular." },
                  { name: "Ventosaterapia de estagnação sanguínea", price: "R$ 40", desc: "Cuidado direcionado para áreas congestionadas." },
                  { name: "Ventosaterapia de fogo", price: "R$ 30", desc: "Tradição, calor e estímulo da circulação." },
                  { name: "Terapias com Pedras Quentes", price: "R$ 20", desc: "Calor profundo para soltar tensões." },
                  { name: "Dry Needling + Moxaterapia", price: "R$ 50", desc: "Precisão no ponto de tensão + calor terapêutico." },
                ].map((s) => (
                  <article key={s.name} className="card-shadow flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--line)] bg-white p-4 sm:p-5">
                    <div className="min-w-0">
                      <h3 className="text-[17px] font-semibold leading-tight text-[var(--navy)]">{s.name}</h3>
                      <p className="mt-1 text-sm text-[var(--brown)]">{s.desc}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-[var(--green)] px-4 py-2 text-sm font-semibold text-white">{s.price}</span>
                  </article>
                ))}
                <div className="rounded-2xl border border-[var(--gold)]/60 bg-white p-4 text-sm leading-relaxed text-[var(--brown)]">
                  <strong>Importante:</strong> Serviços complementares realizados por profissional habilitado. Não substitui tratamento médico.
                </div>
              </div>
            </div>
            <SectionFooter />
          </div>
        </section>

        {/* 3 RELAXANTE */}
        <section id="relaxante" className="print-page mx-auto max-w-6xl scroll-mt-28 px-4 py-12 sm:px-6 sm:py-20">
          <SectionHeading number="03" eyebrow="Respire. Solte. Descanse." title="Massagem Relaxante" subtitle="A técnica clássica para desacelerar — com presença, ritmo e toque cuidadoso do início ao fim." />
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="order-2 lg:order-1">
              <p className="serif text-[clamp(1.5rem,4vw,2.1rem)] leading-snug text-[var(--navy)]">Movimentos suaves, contínuos, firmes e ritmados por todo o corpo.</p>
              <p className="mt-4 leading-relaxed text-[var(--brown)]">A massagem relaxante é uma técnica terapêutica manual que convida o corpo a sair do modo de alerta. Aos poucos, a respiração aprofunda, os ombros descem e a mente encontra silêncio.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Bem-estar físico", "Bem-estar mental", "Alívio do estresse"].map((x) => (
                  <div key={x} className="rounded-2xl border border-[var(--line)] bg-white p-4 text-center">
                    <Sparkles className="mx-auto text-[var(--green)]" size={22} />
                    <p className="mt-2 text-sm font-semibold text-[var(--navy)]">{x}</p>
                  </div>
                ))}
              </div>
              <a href={whatsapp} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--navy)] underline decoration-[var(--gold)] decoration-2 underline-offset-8">Reservar uma sessão relaxante <ArrowRight size={17} /></a>
            </div>
            <div className="photo-frame order-1 min-h-[300px] sm:min-h-[430px] lg:order-2"><img src={relaxanteImg} alt="Massagem Relaxante — pessoa deitada em maca de spa recebendo massagem nas costas" /></div>
          </div>
          <SectionFooter />
        </section>

        {/* 4 PEDRAS */}
        <section id="pedras" className="print-page scroll-mt-28 border-y border-[var(--gold)]/50 bg-[var(--navy)] text-[var(--beige-text)]">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-[var(--green-light)]">04 • Calor que abraça</p>
                <h2 className="serif mt-2 text-[clamp(2.2rem,7vw,3.8rem)] font-semibold leading-[0.95] text-[var(--beige-text)]">Massagem com<br />Pedras Quentes</h2>
                <div className="gold-rule mt-4 max-w-[180px]" />
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[var(--beige-text)]/90">Pedras vulcânicas de basalto aquecidas, movimentos manuais e óleos aromáticos em uma experiência profunda de entrega.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="photo-frame min-h-[300px] sm:min-h-[440px]"><img src={pedrasImg} alt="Massagem com Pedras Quentes — pedras de basalto sobre as costas durante sessão de spa" /></div>
              <div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: <MoonStar size={19} />, t: "Relaxamento profundo" },
                    { icon: <HeartHandshake size={19} />, t: "Alívio de dores e tensões" },
                    { icon: <Droplets size={19} />, t: "Melhora da circulação" },
                    { icon: <Leaf size={19} />, t: "Redução do estresse e ansiedade" },
                    { icon: <Star size={19} />, t: "Liberação de endorfinas" },
                    { icon: <Gem size={19} />, t: "Calor + aroma + toque" },
                  ].map((b) => (
                    <div key={b.t} className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4"><span className="text-[var(--green-light)]">{b.icon}</span><p className="text-sm font-medium leading-snug">{b.t}</p></div>
                  ))}
                </div>
                <p className="mt-6 border-l-2 border-[var(--gold)] pl-4 text-sm leading-relaxed text-[var(--beige-text)]/90">Ideal para quem sente o corpo pesado, frio ou travado — e quer sair da maca como quem saiu de um banho morno e demorado.</p>
              </div>
            </div>
            <SectionFooter light />
          </div>
        </section>

        {/* 5 TARÔ */}
        <section id="taro" className="print-page mx-auto max-w-6xl scroll-mt-28 px-4 py-12 sm:px-6 sm:py-20">
          <SectionHeading number="05" eyebrow="Bruxaria ancestral • Escuta e direção" title="Leitura de Tarô" subtitle="Um momento de pausa para olhar para dentro, organizar os pensamentos e enxergar o próximo passo com mais clareza." />
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="photo-frame min-h-[300px] sm:min-h-[440px]"><img src={taroImg} alt="Leitura de Tarô — cartas de tarô sobre mesa com cristais e objetos místicos" /></div>
            <div>
              <p className="serif text-2xl leading-snug text-[var(--navy)]">Foco, clareza mental e alinhamento dos pensamentos.</p>
              <p className="mt-4 leading-relaxed text-[var(--brown)]">A leitura também traz alertas sobre questões negativas — não para assustar, mas para que você se proteja, se prepare e escolha com mais consciência.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--navy)] border border-[var(--line)]">Atendimento online</span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--navy)] border border-[var(--line)]">Atendimento presencial</span>
              </div>
              <div className="mt-6 rounded-2xl border border-[var(--line)] bg-white p-5">
                <p className="font-semibold text-[var(--navy)]">Como funciona?</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--brown)]">Você chega com uma pergunta ou um tema. A leitura abre o mapa, a conversa organiza o que estava embaralhado — e você sai com direção.</p>
              </div>
            </div>
          </div>
          <SectionFooter />
        </section>

        {/* FINAL CTA */}
        <section id="contato" className="print-page px-4 pb-14 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[30px] bg-[var(--navy)] px-5 py-10 text-center text-white sm:px-10 sm:py-14">
            <img src={logoImg} alt="Logotipo oficial Leandro Patrício" className="mx-auto h-20 w-auto rounded-full bg-white object-contain p-1" />
            <p className="eyebrow mt-5 text-[var(--green-light)]">Seu próximo passo</p>
            <h2 className="serif mx-auto mt-4 max-w-3xl text-[clamp(2.4rem,8vw,4.5rem)] font-semibold leading-[0.9] text-[var(--beige-text)]">Comece pelo<br /><span className="italic text-[var(--green-light)]">seu cuidado.</span></h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[var(--beige-text)]/90">Chama no WhatsApp e garanta seu horário na Vila Carrão. Atendimento reservado, com hora marcada.</p>
            <div className="mx-auto mt-7 flex max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noopener" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--green)] px-6 py-4 font-semibold text-white sm:w-auto"><Phone size={18} /> Chama no WhatsApp <span>11 98618-2838</span></a>
            </div>
            <div className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-left"><BadgeCheck className="text-[var(--green-light)]" /><p className="mt-2 font-semibold">Avaliação inclusa</p><p className="text-sm text-[var(--beige-text)]/90">No seu 1º atendimento.</p></div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-left"><Star className="text-[var(--green-light)]" /><p className="mt-2 font-semibold">10% OFF</p><p className="text-sm text-[var(--beige-text)]/90">Para quem veio do anúncio.</p></div>
            </div>
            <p className="mt-8 text-xs tracking-[.16em] text-[var(--beige-text)]/80">RUA GARIMPOS, 24 • VILA CARRÃO • 2 MIN DO METRÔ CARRÃO</p>
            <div className="mt-8 border-t border-white/20 pt-6"><SectionFooter light /></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--gold)]/50 bg-[var(--navy-dark)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-[var(--beige-text)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="flex items-center gap-3"><img src={logoImg} alt="Logotipo Leandro Patrício" className="h-10 w-10 rounded-full bg-white object-contain p-1" /><span className="serif text-lg font-semibold text-[var(--beige-text)]">Leandro Patrício — Massoterapia &amp; Podologia</span></p>
          <p>Seg a Sex 8h–18h • Sáb 8h–14h • WhatsApp 11 98618-2838</p>
        </div>
      </footer>
    </div>
  );
}
