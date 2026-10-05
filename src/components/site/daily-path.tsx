"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * What a day looks like — told in pictures.
 *
 * This replaces HowItWorks (231 words), Subjects (111) and BentoFeatures
 * (218): 560 words explaining a routine that six photographs show at a
 * glance. A parent deciding whether to spend ₱599 wants to know what their
 * child will actually DO. Prose makes them read for it; the pictures hand it
 * over in the time it takes to scroll past.
 *
 * One word per tile, and no sentence anywhere. The moment a tile needs a
 * sentence to make sense, the picture is not doing its job and the fix is a
 * better picture, not a caption.
 */

const STEPS = [
  { src: "/assets/today/warmup.png",   label: "Warm up" },
  { src: "/assets/today/math.png",     label: "Math" },
  { src: "/assets/today/read.png",     label: "Read" },
  { src: "/assets/today/write.png",    label: "Write" },
  { src: "/assets/today/science.png",  label: "Science" },
  { src: "/assets/today/done.png",     label: "Done" },
];

export function DailyPath() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-slate-900 dark:text-white">
            One day, <span className="text-orange-500">ten minutes</span>.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base sm:text-lg font-medium text-slate-600 dark:text-slate-400">
            The same gentle rhythm, every school day.
          </p>
        </div>

        {/* All six visible at once, at every width — 3x2 on a phone, a single
            row from `lg`. This started as a horizontal scroller, which showed
            two tiles and hid four behind a sideways swipe. The whole point of
            the section is that a parent takes in the day without working for
            it, and a gesture they may never discover is work. Smaller tiles
            that are all present beat larger ones that are not. */}
        <div className="mt-10">
          <ol className="grid grid-cols-3 gap-3 sm:gap-6 lg:grid-cols-6">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className=""
              >
                <div className="group relative aspect-square overflow-hidden rounded-3xl border-2 border-amber-200/80 bg-amber-50 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
                  <Image
                    src={step.src}
                    alt=""
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 30vw, 180px"
                  />
                  {/* The step number, so the order reads without a connector
                      line that would break the moment this wraps to 2 rows. */}
                  <span className="absolute left-2.5 top-2.5 grid h-7 w-7 place-items-center rounded-full bg-white/95 font-heading text-xs font-black text-slate-900 shadow-sm dark:bg-slate-950/90 dark:text-white">
                    {i + 1}
                  </span>
                </div>
                <p className="mt-3 text-center font-heading text-sm font-black text-slate-800 sm:text-base dark:text-slate-200">
                  {step.label}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
