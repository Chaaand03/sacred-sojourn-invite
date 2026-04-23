import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Mandala } from "@/components/decor/Mandala";
import { Diya } from "@/components/decor/Diya";
import { Marigold } from "@/components/decor/Marigold";
import { Toran } from "@/components/decor/Toran";
import { Paisley } from "@/components/decor/Paisley";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gruhapravesham — Welcome to Anand Nivas" },
      {
        name: "description",
        content:
          "With joyful hearts, the Sharma family invites you to the housewarming of Anand Nivas. Join us for blessings, prayers and a warm welcome.",
      },
      { property: "og:title", content: "Gruhapravesham — Anand Nivas" },
      {
        property: "og:description",
        content: "A sacred housewarming ceremony — your presence will bless our new home.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Tangerine:wght@400;700&display=swap",
      },
    ],
  }),
});

/* ---------- Reveal helper with 3D tilt ---------- */
function Reveal3D({
  children,
  from = "bottom",
  className = "",
}: {
  children: React.ReactNode;
  from?: "left" | "right" | "bottom" | "zoom";
  className?: string;
}) {
  const variants = {
    left: { x: -120, rotateY: -25, opacity: 0 },
    right: { x: 120, rotateY: 25, opacity: 0 },
    bottom: { y: 80, rotateX: 20, opacity: 0 },
    zoom: { scale: 0.7, opacity: 0, rotateX: 10 },
  };
  return (
    <motion.div
      initial={variants[from]}
      whileInView={{ x: 0, y: 0, scale: 1, rotateX: 0, rotateY: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const mandalaRot = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden perspective-1000">
      {/* Background mandala */}
      <motion.div
        style={{ rotate: mandalaRot, opacity: 0.35 }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <Mandala size={900} className="hidden md:block" />
        <Mandala size={520} className="md:hidden" />
      </motion.div>

      {/* Toran across the top */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none">
        <Toran className="w-full h-full" />
      </div>

      {/* Floating marigolds */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-4 md:left-16 w-20 md:w-32 animate-float-slow"
      >
        <Marigold />
      </motion.div>
      <motion.div
        style={{ y }}
        className="absolute top-32 right-4 md:right-20 w-16 md:w-28 animate-float-slow"
      >
        <Marigold />
      </motion.div>

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-sm md:text-base tracking-[0.5em] uppercase text-[var(--gold-deep)] mb-6"
        >
          ॥ शुभ गृह प्रवेश ॥
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-script text-7xl md:text-9xl lg:text-[10rem] leading-none text-gold drop-shadow-sm"
        >
          Gruhapravesham
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="divider-gold w-64 md:w-96 mt-6"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="font-display italic text-3xl md:text-5xl mt-8 text-[var(--maroon)]"
        >
          Anand Nivas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-4 text-base md:text-lg text-muted-foreground max-w-md"
        >
          The abode of bliss — a new beginning blessed by family and friends
        </motion.p>

        {/* Diyas at the bottom */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 md:gap-16 px-6">
          <div className="w-16 md:w-24"><Diya /></div>
          <div className="w-20 md:w-32"><Diya /></div>
          <div className="w-16 md:w-24"><Diya /></div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs tracking-widest text-[var(--gold-deep)] z-20"
      >
        ◆ scroll ◆
      </motion.div>
    </section>
  );
}

/* ---------- Invitation message ---------- */
function Invitation() {
  return (
    <section className="relative py-32 px-6 perspective-1000 overflow-hidden">
      <div className="absolute top-10 left-0 w-32 md:w-48 opacity-40 -translate-x-1/3">
        <Paisley />
      </div>
      <div className="absolute bottom-10 right-0 w-32 md:w-48 opacity-40 translate-x-1/3 rotate-180">
        <Paisley />
      </div>

      <Reveal3D from="zoom" className="max-w-3xl mx-auto text-center">
        <p className="font-script text-5xl md:text-6xl text-gold mb-6">With joyful hearts</p>
        <div className="divider-gold w-32 mx-auto mb-8" />
        <p className="font-display text-xl md:text-2xl leading-relaxed text-[var(--maroon)] italic">
          As we step into our new home, we humbly invite you to grace this auspicious occasion
          with your presence. Your blessings, warmth and laughter will turn these walls into a
          sanctuary of memories. Let us share prayers, sweets and the gentle glow of diyas
          together.
        </p>
        <p className="mt-10 font-display text-lg md:text-xl text-muted-foreground">
          — pray, dine & celebrate with us —
        </p>
      </Reveal3D>
    </section>
  );
}

/* ---------- Date & Time card with 3D flip-in ---------- */
function DateTime() {
  return (
    <section className="relative py-32 px-6 perspective-1000 overflow-hidden">
      <Reveal3D from="left" className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl bg-[var(--cream)]/70 backdrop-blur-sm border border-[var(--gold)]/40 px-8 md:px-16 py-16 glow-gold"
          style={{ boxShadow: "var(--shadow-gold)" }}
        >
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24">
            <Diya />
          </div>

          <p className="text-center text-sm tracking-[0.4em] uppercase text-[var(--gold-deep)] mb-4">
            Save the Date
          </p>
          <div className="divider-gold w-24 mx-auto mb-10" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-4 items-center text-center">
            <div>
              <p className="font-script text-3xl text-[var(--maroon)]">Sunday</p>
              <p className="font-display text-sm uppercase tracking-widest text-muted-foreground mt-2">
                Day
              </p>
            </div>
            <div className="md:border-x border-[var(--gold)]/40 md:py-4">
              <p className="font-display text-7xl md:text-8xl text-gold leading-none">14</p>
              <p className="font-display text-2xl text-[var(--maroon)] mt-2">December 2025</p>
            </div>
            <div>
              <p className="font-script text-3xl text-[var(--maroon)]">10:30 AM</p>
              <p className="font-display text-sm uppercase tracking-widest text-muted-foreground mt-2">
                onwards
              </p>
            </div>
          </div>

          <div className="divider-gold w-48 mx-auto mt-12 mb-6" />
          <p className="text-center font-display italic text-lg text-[var(--maroon)]">
            Griha Pravesh Pooja followed by lunch
          </p>
        </div>
      </Reveal3D>
    </section>
  );
}

/* ---------- Family ---------- */
function Family() {
  const members = ["Rajesh Sharma", "Priya Sharma", "Aarav Sharma", "Ananya Sharma"];
  return (
    <section className="relative py-32 px-6 perspective-1000 overflow-hidden">
      <Reveal3D from="right" className="max-w-4xl mx-auto text-center">
        <p className="text-sm tracking-[0.5em] uppercase text-[var(--gold-deep)] mb-4">
          With Love
        </p>
        <h2 className="font-script text-6xl md:text-7xl text-gold">The Sharma Family</h2>
        <div className="divider-gold w-32 mx-auto my-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {members.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[var(--cream)]/60 backdrop-blur-sm border border-[var(--gold)]/30 rounded-2xl px-4 py-8"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="w-12 mx-auto mb-3 opacity-80">
                <Marigold />
              </div>
              <p className="font-display text-lg md:text-xl text-[var(--maroon)]">{name}</p>
            </motion.div>
          ))}
        </div>
      </Reveal3D>
    </section>
  );
}

/* ---------- Venue ---------- */
function Venue() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Anand+Nivas+42+Lotus+Avenue+Jubilee+Hills+Hyderabad";

  return (
    <section className="relative py-32 px-6 perspective-1000 overflow-hidden">
      <Reveal3D from="bottom" className="max-w-3xl mx-auto">
        <div
          className="relative rounded-3xl bg-gradient-to-br from-[var(--cream)] to-[var(--ivory)] border border-[var(--gold)]/40 p-10 md:p-16 text-center"
          style={{ boxShadow: "var(--shadow-gold)" }}
        >
          <div className="absolute inset-0 -z-10 opacity-20">
            <Mandala size={500} className="absolute inset-0 m-auto animate-spin-slow" />
          </div>

          <p className="text-sm tracking-[0.4em] uppercase text-[var(--gold-deep)] mb-4">Venue</p>
          <h2 className="font-script text-5xl md:text-6xl text-gold">Anand Nivas</h2>
          <div className="divider-gold w-24 mx-auto my-6" />

          <p className="font-display text-xl md:text-2xl text-[var(--maroon)] leading-relaxed">
            Plot 42, Lotus Avenue
            <br />
            Jubilee Hills, Hyderabad
            <br />
            Telangana 500033
          </p>

          <motion.a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotateX: -5 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full font-display text-lg
                       bg-gradient-to-r from-[var(--gold-deep)] via-[var(--gold)] to-[var(--gold-deep)]
                       text-[var(--ivory)] shadow-[var(--shadow-gold)] tracking-wide"
            style={{ transformStyle: "preserve-3d" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
            </svg>
            Open in Google Maps
          </motion.a>
        </div>
      </Reveal3D>
    </section>
  );
}

/* ---------- Closing ---------- */
function Closing() {
  return (
    <section className="relative py-32 px-6 text-center overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none rotate-180">
        <Toran className="w-full h-full" />
      </div>

      <Reveal3D from="zoom" className="max-w-2xl mx-auto">
        <div className="flex justify-center gap-6 mb-10">
          <div className="w-16"><Diya /></div>
          <div className="w-20"><Diya /></div>
          <div className="w-16"><Diya /></div>
        </div>
        <p className="font-script text-5xl md:text-6xl text-gold">शुभम् भवतु</p>
        <div className="divider-gold w-40 mx-auto my-8" />
        <p className="font-display italic text-xl md:text-2xl text-[var(--maroon)]">
          May this home be filled with light, love and laughter — always.
        </p>
        <p className="mt-8 text-sm tracking-[0.4em] uppercase text-[var(--gold-deep)]">
          ◆ The Sharma Family ◆
        </p>
      </Reveal3D>
    </section>
  );
}

/* ---------- Page ---------- */
function Index() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <main className="relative">
      {/* Scroll progress (gold line) */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50
                   bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
      />
      <Hero />
      <Invitation />
      <DateTime />
      <Family />
      <Venue />
      <Closing />
    </main>
  );
}
