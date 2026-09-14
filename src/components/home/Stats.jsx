import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

import { statsSection } from "../../constants/site";

function Stats() {
  return (
    <section id="stats" className="py-10 sm:py-14 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={statsSection.eyebrow}
          title={statsSection.title}
          description={statsSection.description}
          align="center"
          className="mb-10"
        />

        <GlassCard strong className="overflow-hidden">
          <div className="grid md:grid-cols-3">
            {statsSection.items.map((stat, index) => (
              <div
                key={stat.id}
                className={`
                  group
                  p-6
                  text-center
                  transition-all
                  duration-300
                  hover:bg-cyan-300/2.5
                  sm:p-8
                  lg:p-10
                  ${
                    index >= 0
                      ? "border-t border-white/5 md:border-l md:border-t-0"
                      : ""
                  }
                `}
              >
                <span
                  className="
                    text-label
                    transition-colors
                    duration-300
                    group-hover:text-cyan-200
                  "
                >
                  {stat.label}
                </span>

                <div
                  dir="ltr"
                  className="
                    mt-4
                    font-display
                    text-5xl
                    font-bold
                    leading-none
                    tracking-tight
                    text-white
                    transition-all
                    duration-300
                    group-hover:text-cyan-100
                    group-hover:drop-shadow-[0_0_18px_rgba(36,215,232,0.15)]
                    sm:text-6xl
                  "
                >
                  {stat.value}
                </div>

                <p className="text-small mt-4">{stat.description}</p>

                {stat.temporary && (
                  <span
                    className="
                      mt-4
                      inline-flex
                      rounded-full
                      border
                      border-orange-300/15
                      bg-orange-300/5
                      px-3
                      py-1
                      text-[0.6rem]
                      font-bold
                      uppercase
                      tracking-wider
                      text-orange-200/60
                    "
                  >
                    بيانات مؤقتة
                  </span>
                )}
              </div>
            ))}
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}

export default Stats;
