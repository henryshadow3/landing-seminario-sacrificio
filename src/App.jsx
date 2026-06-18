import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Sparkles,
  Compass,
  CheckCircle2,
  Flame,
  BookOpen,
  ArrowRight,
  MessageSquare,
  DollarSign,
  Info,
  Clock,
  ChevronDown
} from 'lucide-react';
import GlimmerBackground from './components/GlimmerBackground';

// Helper for scroll reveal animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function App() {
  const whatsappLink = "https://wa.me/message/CNX3SVHV2LLWO1";

  // Parallax hooks
  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const parallaxY2 = useTransform(scrollY, [1000, 3000], [0, -200]);
  const heroParallax = useTransform(scrollY, [0, 600], [0, -120]);

  return (
    <div className="relative min-h-screen bg-black text-gray-200 font-sans selection:bg-gold-medium selection:text-black overflow-x-hidden">

      {/* 1. White Glimmer Particle Background */}
      <GlimmerBackground />

      {/* Ambient Red Glow in Background */}
      <div className="absolute top-[80vh] left-1/4 w-[60vw] h-[60vw] bg-terracota-dark/5 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Ambient Gold/Teal Glow in Background */}
      <div className="absolute top-[200vh] right-1/4 w-[50vw] h-[50vw] bg-teal-pool-dark/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-[350vh] left-1/3 w-[45vw] h-[45vw] bg-gold-dark/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Floating WhatsApp CTA Button (Sticky) */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-gradient-to-r from-gold-medium via-amber-glow to-gold-bright text-black font-semibold px-5 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300 group border border-white/20 box-glow-gold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="text-sm tracking-wide uppercase font-bold">Reservar Lugar</span>
        <MessageSquare className="w-5 h-5 fill-black" />
      </motion.a>

      {/* HEADER / NAVBAR */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <span className="font-serif text-lg tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-gold-medium via-amber-glow to-gold-light font-bold">
            INTEGRARSE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-terracota"></span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-gold-medium hover:text-gold-light border-b border-gold-medium/40 hover:border-gold-light transition-colors duration-300 pb-1"
          >
            Contacto Directo
          </a>
        </motion.div>
      </header>

      {/* HERO SECTION WITH REAL NIGHT-SHOT BACKGROUND */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-12 pb-24 text-center overflow-hidden">

        {/* Background Night Image (mali10.jpeg) with parallax */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 scale-125"
            style={{ y: heroParallax }}
          >
            <img
              src="/images/mali10.jpeg"
              alt="Malinalco de noche"
              className="w-full h-full object-cover opacity-35 filter brightness-75"
            />
          </motion.div>
          {/* Subtle slow rotation overlay mandala behind the text */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10" />
        </div>

        {/* Sacred Geometry Lotus Mandala Spinning slowly */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-70">
          <svg className="w-[85vw] h-[85vw] max-w-[650px] max-h-[650px] text-gold-medium/10 animate-[spin_200s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.15">
            <circle cx="50" cy="50" r="47" strokeDasharray="1,2" />
            <circle cx="50" cy="50" r="42" />
            <circle cx="50" cy="50" r="35" strokeDasharray="1,1" />
            <circle cx="50" cy="50" r="28" />
            <circle cx="50" cy="50" r="18" strokeDasharray="2,2" />
            <circle cx="50" cy="50" r="10" />
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const x1 = 50 + 10 * Math.cos(angle);
              const y1 = 50 + 10 * Math.sin(angle);
              const x2 = 50 + 47 * Math.cos(angle);
              const y2 = 50 + 47 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
            })}
          </svg>
        </div>

        <motion.div
          className="max-w-4xl mx-auto flex flex-col items-center relative z-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Tagline Badge */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 px-4 py-1.5 bg-neutral-950/70 border border-gold-medium/20 rounded-full text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold-medium mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-medium animate-pulse" />
            <span>Seminario Vivencial Iniciático</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-medium animate-pulse" />
          </motion.div>

          {/* Golden Divine & Terracota Title */}
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-6 font-black"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400">
              El Sacrificio de los
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-bright to-gold-light text-glow-gold pb-2">
              Que No Esperan
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-12"
          >
            Aprende a actuar sin la expectativa de la recompensa.
            Descubre una libertad inquebrantable en el templo natural de Malinalco.
          </motion.p>

          {/* Info Badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-sm text-gray-300 tracking-wider mb-14"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-amber-glow" />
              <span>1 y 2 DE AGOSTO DE 2026</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-terracota" />
              <span>MALINALCO, CASA DE RETIRO</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-gradient-to-r from-gold-medium via-amber-glow to-gold-bright rounded-full shadow-lg group overflow-hidden box-glow-gold hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shine_0.75s_ease-out]" />
              <span>POSTULAR AL SEMINARIO</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#el-problema"
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 mt-2 sm:mt-0"
            >
              Comenzar lectura
              <ChevronDown className="w-4 h-4 animate-bounce text-gold-medium" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Parallax Strip after Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 scale-125"
          style={{ y: parallaxY1 }}
        >
          <img src="/images/mali3.jpeg" alt="El Valle" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-60" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gold-medium text-xl md:text-3xl font-light tracking-[0.3em] text-center px-8 drop-shadow-2xl">
            MALINALCO · ESTADO DE MÉXICO
          </p>
        </div>
      </div>

      {/* EL PROBLEMA SECTION WITH TERRACOTA AND SACRIFICIAL IMAGES */}
      <section id="el-problema" className="relative py-28 px-6 bg-black border-t border-white/5 overflow-hidden">

        {/* Subtle red/terracota background glow */}
        <div className="absolute inset-0 bg-radial-gradient from-terracota-dark/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-terracota font-bold mb-4">
              <Flame className="w-4 h-4 text-terracota animate-pulse" />
              <span>El Conflicto de la Ansiedad</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-glow-terracota font-bold">
              Vivimos Corriendo Detrás de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracota via-sacred-red to-terracota-light font-black">
                Algo que No Existe
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 space-y-6 text-gray-400 text-base sm:text-lg font-light leading-relaxed"
            >
              <p>
                Mira a tu alrededor. O mejor: mírate al espejo. Todos estamos corriendo. Corremos detrás del dinero, del ascenso, de la pareja ideal, del cuerpo perfecto, de los likes, del reconocimiento. Corremos como si la meta nos estuviera esperando con los brazos abiertos. Pero hay un problema: <span className="text-white font-medium">la meta se mueve. Siempre se mueve.</span>
              </p>

              <p className="border-l-2 border-terracota pl-4 text-gray-300 italic py-2 bg-terracota-dark/5">
                "Llegas al sueldo que querías y ya estás pensando en el siguiente. Consigues la relación y ya tienes miedo de perderla. Logras el cuerpo que buscabas y encuentras otro defecto que arreglar. Es una carrera sin línea de meta."
              </p>

              <p>
                Ansiedad. Insomnio. Estrés crónico. Relaciones que se rompen porque uno de los dos están demasiado ocupados persiguiendo algo para detenerse a ver al que tienen enfrente. Padres que no ven crecer a sus hijos porque "están construyendo el futuro". Y el futuro llega, pero los hijos ya se fueron.
              </p>

              <p>
                El sistema te vendió una mentira: "si te esfuerzas lo suficiente, algún día vas a estar completo". Y tú te la creíste. Pero ese día no llega. Porque el vacío que intentas llenar con logros no se llena con logros. Se llena con otra cosa.
              </p>
            </motion.div>

            {/* Pain point cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 grid gap-6"
            >
              <div className="p-6 bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-2xl border border-terracota/20 shadow-xl hover:border-terracota/40 transition-all duration-300 group">
                <h3 className="font-semibold text-white text-lg mb-2 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-terracota animate-pulse" />
                  La Factura de la Expectativa
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Actuar se volvió sinónimo de sufrir. Porque cada acción viene con una factura: la expectativa. Y cuando el resultado no llega como lo imaginaste, sientes que tú no eres suficiente.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-2xl border border-terracota/20 shadow-xl hover:border-terracota/40 transition-all duration-300 group">
                <h3 className="font-semibold text-white text-lg mb-2 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-terracota animate-pulse" />
                  Esclavos del Deseo
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Mientras más corre la gente desesperada detrás de logros y validación, más atada se siente. Vive enferma de ansiedad y frustrada porque nada de lo que alcanza llena el vacío.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Split image reveal after pain point cards */}
          <motion.div
            className="mt-16 grid grid-cols-2 gap-2 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden rounded-tl-3xl rounded-bl-3xl h-64 relative group">
              <img src="/images/mali8.jpeg" alt="El Santuario" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-terracota-base/30" />
            </div>
            <div className="overflow-hidden rounded-tr-3xl rounded-br-3xl h-64 relative group">
              <img src="/images/mali1.jpeg" alt="La Terraza" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-terracota-base/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS THE SEMINAR (YAJNA / OFFERING CONCEPT) */}
      <section className="relative py-28 px-6 bg-neutral-950 border-t border-b border-white/5 overflow-hidden">

        {/* Subtle background pool teal / gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-teal-pool/5 rounded-full blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-teal-pool font-bold">
              <Compass className="w-4 h-4 text-teal-pool" />
              <span>¿Qué es este seminario?</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-glow-teal font-bold">
              Una Experiencia de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-medium via-teal-pool to-gold-light font-black">
                Desapego y Acción
              </span>
            </h2>

            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              "El Sacrificio de los que No Esperan" es un entrenamiento vivencial de dos días donde vas a aprender a actuar —en tu trabajo, en tu pareja, en tu vida— <span className="text-white">sin que tu paz dependa del resultado.</span>
            </p>

            <div className="h-px w-24 bg-gold-medium/30 mx-auto my-12" />

            <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
              <div className="space-y-3">
                <h4 className="font-serif text-gold-light text-lg font-semibold flex items-center gap-2">
                  <span className="text-gold-medium">✦</span> Una Ofrenda del Bhagavad Gita
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Un texto sagrado de hace más de 5,000 años dice que toda acción debe ser un sacrificio (<span className="text-gold-medium italic">Yajna</span>). No de sufrir, sino de <span className="text-white font-medium">OFRECER</span>. Haces lo que haces con todo tu corazón, y luego lo sueltas. No te encadenas. Actúas, ofreces, y confías.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-gold-light text-lg font-semibold flex items-center gap-2">
                  <span className="text-gold-medium">✦</span> Acciones con Cuerpo y Alma
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  No es motivación vacía de "sí se puede". Es un trabajo práctico. En una hermosa casa privada de Malinalco, trabajarás con técnicas de visualización, PNL, dinámicas gestálticas y ejercicios introspectivos para soltar el fruto en tu propio cuerpo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHAT YOU GET (BENEFICIOS) */}
      <section className="py-28 px-6 bg-black relative">
        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-medium mb-4 font-bold">
              <Sparkles className="w-4 h-4 text-gold-medium" />
              <span>El Despertar de la Libertad</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-glow-gold font-bold">
              ¿Qué te Llevas?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-4 text-sm sm:text-base font-light">
              Dos días para detener la carrera mental, sumergirte en el silencio de Malinalco y adquirir herramientas reales.
            </p>
          </motion.div>

          {/* Horizontal scroll strip */}
          <div className="overflow-x-auto scrollbar-hide mb-12 -mx-4 px-4">
            <div className="flex gap-4 w-max">
              {[
                { src: '/images/mali4.jpeg', label: 'La Terraza' },
                { src: '/images/mali10.jpeg', label: 'Noche de Estrellas' },
                { src: '/images/mali3.jpeg', label: 'El Valle' },
                { src: '/images/mali2.jpeg', label: 'La Alberca' },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  className="relative w-48 h-64 flex-shrink-0 overflow-hidden rounded-2xl group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-white text-xs tracking-widest uppercase">{img.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Benefit 1 */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl glass-card-terracota flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-terracota/10 border border-terracota/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-terracota" />
                </div>
                <h3 className="font-serif text-xl text-white font-bold mb-3">Discernir el Origen</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Aprenderás a distinguir claramente cuándo actúas por la ansiedad del resultado y cuándo desde una decisión libre y real, sintiéndolo en tu propio cuerpo.
                </p>
              </div>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl glass-card flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-dark/10 border border-gold-medium/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-gold-medium" />
                </div>
                <h3 className="font-serif text-xl text-white font-bold mb-3">Liberación Corporal</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Entenderás por qué perseguir resultados te enferma y cómo soltarlos te libera. No es un concepto intelectual bonito: es una habilidad física que se entrena.
                </p>
              </div>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl glass-card-terracota flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-terracota/10 border border-terracota/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-terracota" />
                </div>
                <h3 className="font-serif text-xl text-white font-bold mb-3">Paz Independiente</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Descubrirás que puedes moverte, crear, trabajar, amar y construir sin que tu paz interior dependa de lo que el mundo te dé a cambio. Imagina eso un instante.
                </p>
              </div>
            </motion.div>

            {/* Wide image between benefit rows (after 3rd card, before 4th) */}
            <motion.div
              className="col-span-full overflow-hidden rounded-2xl h-56 relative group my-2"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src="/images/mali9.jpeg" alt="El Campo" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/90 text-lg tracking-[0.25em] font-light">EL LUGAR DONDE TODO CAMBIA</p>
              </div>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl glass-card flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-dark/10 border border-gold-medium/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-gold-medium" />
                </div>
                <h3 className="font-serif text-xl text-white font-bold mb-3">Herramientas Prácticas</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Saldrás con herramientas prácticas de visualización, PNL y Gestalt que podrás empezar a utilizar en tu vida cotidiana a partir del lunes siguiente.
                </p>
              </div>
            </motion.div>

            {/* Benefit 5 */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl glass-card-terracota flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-terracota/10 border border-terracota/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-terracota" />
                </div>
                <h3 className="font-serif text-xl text-white font-bold mb-3">Santuario en Malinalco</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Pasarás dos días en una villa única rodeada de naturaleza, fuera de los ruidos urbanos, en un espacio diseñado específicamente para que puedas detenerte.
                </p>
              </div>
            </motion.div>

            {/* Benefit 6 */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl glass-card flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-dark/10 border border-gold-medium/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-gold-medium" />
                </div>
                <h3 className="font-serif text-xl text-white font-bold mb-3">Conexión con Buscadores</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Conocerás a otras personas en la misma búsqueda. A veces la mayor revelación no viene del facilitador: viene de ver que no estás solo en este camino.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Parallax Pool between Benefits and Investment */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 scale-125"
          style={{ y: parallaxY2 }}
        >
          <img src="/images/mali2.jpeg" alt="La Alberca" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/80 text-lg md:text-2xl font-light tracking-widest"
          >
            UN ESPACIO DISEÑADO PARA LA TRANSFORMACIÓN
          </motion.p>
          <div className="w-16 h-px bg-gold-medium" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gold-medium text-sm tracking-[0.4em] uppercase"
          >
            Malinalco · 1 y 2 de Agosto 2026
          </motion.p>
        </div>
      </div>

      {/* PROMO IMAGE SECTION */}
      <section className="py-0 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto px-4 py-16"
        >
          <img
            src="/images/malinalcoseminario.png"
            alt="El Sacrificio de los Que No Esperan"
            className="w-full rounded-3xl shadow-2xl shadow-black/80"
            style={{ border: '1px solid rgba(212,175,55,0.2)' }}
          />
          <div className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ boxShadow: 'inset 0 0 80px rgba(212,175,55,0.05)' }} />
        </motion.div>
      </section>

      {/* INVESTMENT & SCARCITY SECTION */}
      <section className="py-28 px-6 bg-black relative border-b border-white/5">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header centered */}
          <div className="text-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-medium font-bold">
                <DollarSign className="w-4 h-4 text-gold-medium" />
                <span>Tu Consagración</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-glow-gold font-bold">
                Inversión del Seminario
              </h2>
              <p className="text-gray-400 text-base max-w-xl mx-auto font-light">
                Aparta tu lugar con anticipación. El seminario es de cupo estrictamente limitado.
              </p>
            </motion.div>
          </div>

          {/* Two columns: video + pricing */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Video vertical en bucle */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/80" style={{ border: '1px solid rgba(212,175,55,0.2)', maxWidth: '320px', width: '100%' }}>
                <video
                  src="/images/maliseminario.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ boxShadow: 'inset 0 -60px 60px rgba(0,0,0,0.6)' }} />
              </div>
            </motion.div>

            {/* Pricing cards */}
            <div className="space-y-6">

          <div className="grid grid-cols-1 gap-6">

            {/* Regular price card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 flex flex-col justify-between text-left"
            >
              <div>
                <span className="text-xs uppercase text-gray-500 tracking-widest font-semibold block mb-2">Inscripción Regular</span>
                <h4 className="text-2xl font-serif text-white font-bold mb-4">Inversión Regular</h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 font-light">
                  Aplica para postulaciones posteriores al 1 de julio de 2026 o al agotarse los cupos con descuento.
                </p>
              </div>
              <div>
                <div className="text-3xl font-serif font-black text-white mb-2">$1,500 <span className="text-sm font-sans font-normal text-gray-400">MXN</span></div>
                <div className="text-[10px] text-gray-500 tracking-wider">Por persona, estancia completa</div>
              </div>
            </motion.div>

            {/* Early bird discount price card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-neutral-950 to-neutral-900 border border-gold-medium/40 flex flex-col justify-between text-left relative overflow-hidden box-glow-gold"
            >
              {/* Early Bird Badge */}
              <div className="absolute top-0 right-0 bg-gold-medium text-black text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-bl-lg">
                Descuento Especial
              </div>

              <div>
                <span className="text-xs uppercase text-gold-medium tracking-widest font-semibold block mb-2">Cupo Limitado</span>
                <h4 className="text-2xl font-serif text-white font-bold mb-4">Antes del 1 de Julio</h4>

                {/* Scarcity message */}
                <div className="mb-6 bg-gold-medium/5 border border-gold-medium/20 rounded-xl p-3 flex items-start gap-3">
                  <Clock className="w-4.5 h-4.5 text-gold-medium shrink-0 mt-0.5 animate-pulse" />
                  <p className="text-[11px] text-gold-light leading-relaxed font-light">
                    <span className="font-bold">¡Solo 5 lugares disponibles con este costo!</span> Congela el precio apartando tu cupo hoy.
                  </p>
                </div>
              </div>

              <div>
                <div className="text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-medium to-gold-bright mb-2">$1,000 <span className="text-sm font-sans font-normal text-gray-400">MXN</span></div>
                <div className="text-[10px] text-gold-medium tracking-wider font-semibold">Ahorras $500 MXN postulando con anticipación</div>
              </div>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-14"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black bg-gradient-to-r from-gold-medium via-amber-glow to-gold-bright rounded-full shadow-lg group overflow-hidden box-glow-gold hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>APARTAR MI LUGAR VÍA WHATSAPP</span>
              <MessageSquare className="w-5 h-5 ml-2 fill-black" />
            </a>
            <p className="text-[10px] text-gray-500 tracking-wider mt-4">
              La postulación se formaliza con una breve llamada de alineación previa para el grupo de Integrarse.
            </p>
          </motion.div>

            </div>{/* end pricing cards column */}
          </div>{/* end two columns grid */}
        </div>{/* end max-w-5xl */}
      </section>

      {/* Asymmetric photo grid after Investment, before Philosophy */}
      <div className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-12 gap-3">
        <motion.div
          className="col-span-7 overflow-hidden rounded-2xl h-80 relative group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src="/images/mali5.jpeg" alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <p className="text-white text-sm tracking-widest uppercase">Habitaciones</p>
          </div>
        </motion.div>
        <div className="col-span-5 grid grid-rows-2 gap-3">
          <motion.div
            className="overflow-hidden rounded-2xl relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <img src="/images/mali6.jpeg" alt="Rincón" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-2xl relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src="/images/mali7.jpeg" alt="Camastros" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white text-sm tracking-widest uppercase">Descanso</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PHILOSOPHY SECTION (POR QUÉ ESTE NOMBRE) */}
      <section className="py-32 px-6 bg-neutral-950 relative overflow-hidden">

        {/* Subtle geometric vectors in bg */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0">
          <svg className="w-[100vw] h-[100vw]" viewBox="0 0 100 100" stroke="currentColor">
            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="none" strokeWidth="0.5" />
            <polygon points="50,95 5,75 5,25 50,5 95,25 95,75" fill="none" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto relative z-10 text-center space-y-10">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold-medium/40 bg-gold-medium/5 mb-4"
          >
            <BookOpen className="w-5 h-5 text-gold-medium" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-2xl sm:text-4xl text-white tracking-wide"
          >
            ¿Por Qué <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-medium to-gold-light text-glow-gold">
              "El Sacrificio de los que No Esperan"
            </span>?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 font-serif font-light text-base sm:text-xl leading-relaxed italic max-w-2xl mx-auto border-t border-b border-gold-medium/20 py-8 px-4 bg-white/[0.01]"
          >
            "El Bhagavad Gita —uno de los textos más antiguos de la humanidad— dice que toda acción debe ser un sacrificio (Yajna): una ofrenda que haces sin esperar el fruto. El que actúa esperando recompensa se encadena. El que actúa y lo ofrece, se libera."
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed font-light max-w-xl mx-auto"
          >
            "Los que no esperan" son quienes ya entendieron que su paz no depende de lo que pase afuera. No esperan que el jefe reconozca, que la pareja cambie, que el mundo les dé permiso. Actúan desde adentro y ofrecen hacia afuera. Son libres. Esta es su iniciación.
          </motion.p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 px-6 border-t border-white/5 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">

          <div className="flex justify-center items-center gap-2">
            <span className="font-serif text-xl tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-gold-medium to-gold-light font-bold">
              INTEGRARSE
            </span>
            <span className="w-2 h-2 rounded-full bg-terracota"></span>
          </div>

          <p className="text-gray-500 text-xs max-w-md mx-auto leading-relaxed font-light">
            Seminario Vivencial de Introspección y Desapego. Malinalco, Estado de México, 2026. Inspirado en filosofías orientales de autoconocimiento.
          </p>

          <div className="flex justify-center gap-6 text-xs tracking-widest uppercase text-gray-400">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold-medium transition-colors">WhatsApp</a>
            <span>•</span>
            <a href="#el-problema" className="hover:text-gold-medium transition-colors">El Problema</a>
            <span>•</span>
            <a href="#root" className="hover:text-gold-medium transition-colors">Volver Arriba</a>
          </div>

          <div className="text-[10px] text-gray-600 pt-4 border-t border-white/5">
            &copy; {new Date().getFullYear()} Integrarse. Todos los derechos reservados.
          </div>

        </div>
      </footer>

    </div>
  );
}
