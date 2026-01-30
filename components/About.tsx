
import { FC, ReactNode } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { ToeTagIcon } from "./icons/ToeTagIcon";

// Helper component for the redacted text effect
const Redacted: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span className="bg-black text-black hover:bg-transparent hover:text-white transition-all cursor-help">
      {children}
    </span>
  );
};

const About: FC = () => {
  return (
    <section id="about" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <AnimateOnScroll>
              <ToeTagIcon className="h-48 w-48 text-primary-red" />
            </AnimateOnScroll>
          </div>
          <div className="md:col-span-2">
            <AnimateOnScroll delay={200}>
              <h2 className="text-4xl font-bold mb-6 text-center md:text-left font-display uppercase tracking-wider">
                About The Act
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={400}>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-paper-light/90 font-mono">
                  Born in the underground circuits of <Redacted>the East Coast 757</Redacted>,{" "}
                  <span className="text-primary-red font-bold uppercase">
                    Toe Tag Awards
                  </span>{" "}
                  is the dynamic DJ duo collaborative force of{" "}
                  <span className="font-bold text-white">Corey Miller</span>, aka{" "}
                  <span className="font-bold text-white">DJ Cmilfer</span>, and{" "}
                  <span className="font-bold text-white">Ted Brown</span>, aka{" "}
                  <span className="font-bold text-white">Yung Saltine</span>.
                </p>
                <p className="text-lg leading-relaxed text-paper-light/90 font-mono">
                  Blending industrial sized bass drops, the hardest lyrics and
                  raw punk energy, the duo has carved out a lane entirely their
                  own within the electronic scene. Their sound pulls from the
                  tension of <Redacted>warehouse shows</Redacted>, the attitude of <Redacted>outlaw culture</Redacted>, and
                  the urgency of punk, colliding into a style that feels both
                  dangerous and deliberate.
                </p>
                <p className="text-lg leading-relaxed text-paper-light/90 font-mono">
                  Toe Tag Awards’ sets are high‑octane transmissions built for the
                  bold, the gritty, and the midnight wanderers. Each performance
                  is immersive and confrontational, designed to hit hard, linger
                  long, and leave an impression that doesn’t fade when the lights
                  come up.
                </p>
                 <p className="text-lg leading-relaxed text-paper-light/90 font-mono italic">
                  They don’t just play tracks. They leave a mark. Every set is a statement.
                </p>
                <p className="text-lg leading-relaxed text-paper-light/90 font-mono">
                  Driven by their roots in live instrumentation, underground
                  culture, and uncompromising performance, Toe Tag Awards exists
                  to fuse raw musicianship with modern electronic power, honoring
                  where they came from while pushing sound designed to move
                  bodies, shake rooms, and <Redacted>leave scars on the scene</Redacted>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-primary-red uppercase">Corey Miller</h3>
                    <p className="text-base leading-relaxed text-paper-light/90 font-mono">
                      Born and raised in Virginia’s 757, came up through the local
                      underground scene. He began playing piano at an early age,
                      building a foundation that would later evolve into
                      hard‑hitting electronic production and uncompromising DJ
                      sets. From keys to controllers, Corey has been <Redacted>dropping fire</Redacted>
                      ever since.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-primary-red uppercase">Ted Brown</h3>
                    <p className="text-base leading-relaxed text-paper-light/90 font-mono">
                      Born and raised in the heart of the Neptunes’ territory,
                      started thrashing drums early, channeling raw energy into
                      rhythm. His deep love for music led him to share stages
                      with top‑tier acts including <Redacted>Slipknot, Slayer, and Agent Orange</Redacted>. That live‑performance intensity now fuels the
                      backbone of Toe Tag Awards’ sound.
                    </p>
                  </div>
                </div>
                 <p className="text-lg leading-relaxed text-paper-light/90 font-mono pt-4">
                  Toe Tag Awards isn’t here to blend in, they’re here to be felt. Step into the noise, turn it up, and catch them live where <Redacted>the underground still breathes</Redacted>.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
