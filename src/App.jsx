import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Eye,
  MapPin,
  MessageSquare,
  MoonStar,
  Sparkles,
  Users,
} from 'lucide-react';
import GlimmerBackground from './components/GlimmerBackground';

const whatsappLink = 'https://wa.me/message/CNX3SVHV2LLWO1';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

function Section({ eyebrow, title, children, dark = false, id }) {
  return (
    <section id={id} className={`relative px-6 py-24 md:py-32 ${dark ? 'bg-neutral-950/85' : 'bg-black/90'} border-t border-white/5`}>
      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={reveal}
      >
        {eyebrow && <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-gold-medium">{eyebrow}</p>}
        <h2 className="mb-8 font-serif text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h2>
        <div className="space-y-6 text-base font-light leading-8 text-gray-300 md:text-lg">{children}</div>
      </motion.div>
    </section>
  );
}

function CTA({ label = 'Aparta tu lugar', className = '' }) {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-gold-medium via-amber-glow to-gold-bright px-7 py-4 text-sm font-black uppercase tracking-wider text-black shadow-2xl transition hover:scale-105 active:scale-95 ${className}`}
    >
      {label}
      <ArrowRight className="h-5 w-5" />
    </a>
  );
}

export default function App() {
  return (
    <div className="templo-shell relative min-h-screen overflow-x-hidden bg-black font-sans text-gray-200 selection:bg-gold-medium selection:text-black">
      <GlimmerBackground />

      <header className="absolute inset-x-0 top-0 z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <p className="font-serif text-sm font-bold tracking-[0.22em] text-gold-medium md:text-lg">INTEGRARSE</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-gray-300 hover:text-gold-light">
          Contacto directo
        </a>
      </header>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-28 text-center">
        <div className="absolute inset-0">
          <img src="./images/mali10.jpeg" alt="Paisaje nocturno del encuentro" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_60%)]" />
        </div>

        <motion.div className="relative z-10 mx-auto max-w-5xl" initial="hidden" animate="visible" variants={reveal}>
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-gold-medium/30 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold-light backdrop-blur">
            <MoonStar className="h-4 w-4" /> Seminario presencial sobre Vav, la falta y el acto
          </div>
          <h1 className="font-serif text-6xl font-black leading-[0.95] text-white md:text-8xl lg:text-9xl">
            Bendita mi <span className="block bg-gradient-to-r from-gold-dark via-gold-light to-white bg-clip-text pb-3 text-transparent">oscuridad</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-gray-300 md:text-2xl">
            Un espacio para mirar lo que falta sin escapar y escuchar qué puede nacer desde ahí.
          </p>
          <div className="my-10 flex flex-col items-center justify-center gap-5 text-sm uppercase tracking-wider text-gray-200 sm:flex-row sm:gap-10">
            <span className="flex items-center gap-2"><Calendar className="h-5 w-5 text-gold-medium" />5 y 6 de diciembre</span>
            <span className="flex items-center gap-2"><MapPin className="h-5 w-5 text-gold-medium" />Cuernavaca, Morelos</span>
            <span className="flex items-center gap-2"><Users className="h-5 w-5 text-gold-medium" />20 lugares</span>
          </div>
          <CTA />
        </motion.div>
      </section>

      <Section eyebrow="La pregunta" title="Cuando el Otro no puede darte lo que esperabas" id="inicio">
        <p>Hay silencios que pesan más que una discusión. Hay personas que no responden, vínculos que no se resuelven, proyectos que se detienen y preguntas que permanecen abiertas. Entonces aparece la urgencia: explicar, insistir, salvar, agradar, resolver, llenarlo todo con algo.</p>
        <p className="border-l-2 border-gold-medium pl-6 font-serif text-2xl italic text-white">Pero hay una verdad incómoda: nadie puede completar por nosotros aquello que nos falta.</p>
        <p>La falta del Otro duele. También puede ser el inicio de una pregunta más honesta: <strong className="text-white">¿qué hago yo cuando ya no puedo pedirle al mundo que me devuelva lo que necesito?</strong></p>
        <p><strong className="text-gold-light">Bendita mi oscuridad</strong> es un seminario para detener esa carrera. No para celebrar el dolor ni para resignarte a él, sino para mirarlo sin escapar. Para descubrir que, cuando dejamos de tapar el vacío a toda costa, puede aparecer un espacio nuevo: un lugar desde el cual pensar, elegir y actuar de otra manera.</p>
        <CTA className="mt-4" />
      </Section>

      <Section eyebrow="La pausa" title="La oscuridad no es un error" dark>
        <p>Nos han enseñado a resolver rápido, a mostrar fortaleza, a mantenernos positivos y a no incomodar a nadie con lo que duele. Sin embargo, hay momentos en que esa prisa por “estar bien” nos aleja de lo que realmente está pidiendo ser escuchado.</p>
        <p>La oscuridad no siempre es un fracaso. A veces es el sitio donde cae una forma de vivir que ya no alcanza. Es el momento en que una respuesta heredada deja de funcionar. Es la pausa antes de una decisión que no puede tomarse desde el miedo ni desde la necesidad de aprobación.</p>
        <p className="font-serif text-2xl text-gold-light">¿Puedo permanecer frente a lo que falta sin convertirlo en una condena, una identidad o una exigencia para los demás?</p>
      </Section>

      <Section eyebrow="Método de Iniciación Cibernética" title="¿Qué es Vav?">
        <p>Vav es una figura del Método de Iniciación Cibernética. Nombra el instante en que dejamos de reaccionar de manera automática y empezamos a observar qué nos mueve.</p>
        <p>No es “tener más control”. No es imponer la propia voluntad. No es construirse una identidad espiritual.</p>
        <p>Vav es hacer una pausa entre el impulso y el acto. Es reconocer cuándo estamos intentando que el Otro nos complete. Es distinguir si una acción sirve a una repetición del ego o a una Obra que vale la pena sostener.</p>
        <p>En ese espacio puede nacer una Ley: no una regla rígida impuesta desde afuera, sino una orientación que se vuelve real cuando toma forma en actos claros.</p>
        <div className="my-10 grid gap-4 md:grid-cols-3">
          {['No todo lo que falta debe llenarse.', 'No todo lo que duele debe negarse.', 'No toda intuición debe obedecerse sin pasar por una pregunta.'].map((text) => (
            <div key={text} className="rounded-2xl border border-gold-medium/20 bg-white/[0.03] p-6 font-serif text-xl text-white"><Eye className="mb-4 h-6 w-6 text-gold-medium" />{text}</div>
          ))}
        </div>
      </Section>

      <div className="relative h-[55vh] overflow-hidden">
        <img src="./images/mali3.jpeg" alt="Paisaje para permanecer ante la pregunta" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/55 px-6 text-center">
          <p className="max-w-4xl font-serif text-4xl text-white md:text-6xl">Permanecer ante lo que no se resuelve</p>
        </div>
      </div>

      <Section eyebrow="Dos días de trabajo" title="Una experiencia para mirar, discernir y actuar" dark>
        <p>Durante dos días trabajaremos con reflexión, conversación, ejercicios personales y prácticas de atención. No necesitas experiencia previa en meditación, filosofía, psicología o tradiciones iniciáticas.</p>
        <div className="grid gap-4 pt-4 md:grid-cols-2">
          {[
            'La falta del Otro: cómo aparece en nuestras relaciones, decisiones y expectativas.',
            'El paso de He a Vav: de la separación a una Ley que puede encarnarse.',
            'El ego y la Obra: cómo reconocer cuándo una acción busca aplauso, seguridad o control.',
            'El corte: la pausa necesaria para no responder desde la inercia.',
            'El agnosticismo del resultado: actuar con claridad sin depender de lo que el mundo devuelva.',
            'El Dabar: convertir una intuición en una decisión concreta, verificable y posible.',
            'La meditación como práctica de observación para reconocer una respuesta distinta.',
          ].map((item) => <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-black/30 p-5"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold-medium" /><span>{item}</span></div>)}
        </div>
        <p className="pt-4 font-serif text-2xl italic text-white">No venimos a memorizar conceptos. Venimos a ponerlos a prueba en la vida.</p>
      </Section>

      <Section eyebrow="La repetición" title="Para quien siente que está repitiendo algo">
        <p>Este seminario está dirigido a personas que atraviesan una pregunta importante, un cambio, una pérdida, una crisis relacional o un cansancio que ya no se resuelve con las mismas respuestas.</p>
        <p>Es para ti si reconoces que, ante la ausencia, el silencio o la incertidumbre, tiendes a exigir, rescatar, convencer, controlar o abandonarte.</p>
        <p>Es para ti si quieres aprender a mirar esa repetición con seriedad, sin culpa y sin discursos vacíos.</p>
        <p>Es para ti si intuyes que una decisión distinta no nace de hacer más, sino de escuchar mejor.</p>
        <p className="font-serif text-2xl text-gold-light">No necesitas llegar con respuestas. Solo con la disposición de estar presente.</p>
      </Section>

      <Section eyebrow="Lo que puedes llevarte" title="Una decisión que encuentre forma, acto y feedback" dark>
        <p>Al finalizar, tendrás una aproximación clara y vivida a la Vav como práctica de discernimiento. Podrás llevarte preguntas más precisas para observar tus automatismos, herramientas de atención para detenerte antes de actuar y un primer Dabar: una formulación concreta que puedas comprobar en tu vida cotidiana.</p>
        <p>No prometemos una transformación instantánea. Proponemos algo más serio: un espacio para que una decisión verdadera encuentre forma, acto y feedback.</p>
      </Section>

      <section className="relative border-t border-white/5 bg-black px-6 py-24 md:py-32">
        <motion.div className="relative z-10 mx-auto max-w-5xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-medium">Información del encuentro</p>
            <h2 className="font-serif text-5xl font-bold text-white md:text-7xl">Bendita mi oscuridad</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-300">
              <span className="flex items-center gap-2"><Calendar className="text-gold-medium" />5 y 6 de diciembre</span>
              <span className="flex items-center gap-2"><MapPin className="text-gold-medium" />Cuernavaca, Morelos</span>
              <span className="flex items-center gap-2"><Users className="text-gold-medium" />Solo 20 lugares</span>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-gold-medium/30 bg-neutral-950 p-7"><p className="text-sm uppercase tracking-widest text-gray-400">Anticipado</p><p className="my-3 font-serif text-4xl text-white">$1,350</p><p className="text-sm text-gold-light">MXN · antes del 15 de octubre</p></div>
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-7"><p className="text-sm uppercase tracking-widest text-gray-400">Regular</p><p className="my-3 font-serif text-4xl text-white">$1,750</p><p className="text-sm text-gray-400">MXN · después del 15 de octubre</p></div>
            <div className="rounded-3xl border border-gold-medium/30 bg-gradient-to-b from-gold-dark/20 to-neutral-950 p-7"><p className="text-sm uppercase tracking-widest text-gold-light">3 personas</p><p className="my-3 font-serif text-4xl text-white">$3,750</p><p className="text-sm text-gray-300">MXN · antes del 11 de octubre<br />Apartado mínimo: $2,500 MXN</p></div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-gray-400">Los lugares se reservan conforme se confirma la inscripción. El grupo será de máximo 20 personas para cuidar la presencia, el trabajo y la conversación compartida.</p>
        </motion.div>
      </section>

      <section className="relative overflow-hidden px-6 py-32 text-center">
        <img src="./images/mali9.jpeg" alt="Una invitación a mirar la oscuridad" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black" />
        <motion.div className="relative z-10 mx-auto max-w-4xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <Sparkles className="mx-auto mb-6 h-8 w-8 text-gold-medium" />
          <h2 className="font-serif text-5xl font-bold text-white md:text-7xl">Una invitación</h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg font-light leading-8 text-gray-300">Tal vez no necesitas otra respuesta inmediata. Tal vez necesitas la valentía de quedarte un momento frente a la pregunta.</p>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-light leading-8 text-gray-300">La falta no siempre anuncia que algo está roto. A veces abre el lugar donde una vida más propia puede comenzar a tomar forma.</p>
          <p className="mx-auto my-10 max-w-3xl font-serif text-3xl italic text-gold-light">Ven a mirar tu oscuridad sin negarla. Ven a escuchar qué puedes hacer nacer desde ahí.</p>
          <CTA />
        </motion.div>
      </section>

      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Solicitar información por WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gold-medium px-5 py-3 text-sm font-black text-black shadow-2xl transition hover:scale-105">
        <MessageSquare className="h-5 w-5" /> <span className="hidden sm:inline">Aparta tu lugar</span>
      </a>

      <footer className="border-t border-white/5 bg-black px-6 py-12 text-center">
        <p className="font-serif text-lg font-bold tracking-[0.25em] text-gold-medium">INTEGRARSE</p>
        <p className="mt-4 text-xs text-gray-500">Seminario presencial · Cuernavaca, Morelos · 2026</p>
      </footer>
    </div>
  );
}
