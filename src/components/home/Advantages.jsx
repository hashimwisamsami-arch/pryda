import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

import { advantagesSection } from "../../constants/site";

function Advantages() {
  return (
    <section id="advantages" className="py-10 sm:py-14 lg:py-20">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          eyebrow={advantagesSection.eyebrow}
          title={advantagesSection.title}
          description={advantagesSection.description}
          align="center"
          className="mb-10"
        />

        {/* Advantages */}
        <div className="grid gap-4 md:grid-cols-3">
          {advantagesSection.items.map((item) => (
            <GlassCard
              key={item.id}
              className="
                group
                h-full
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-300/20
                hover:shadow-[0_0_35px_rgba(36,215,232,0.08)]
                sm:p-7
              "
            >
              {/* Number */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-label
                    transition-colors
                    duration-300
                    group-hover:text-cyan-200
                  "
                >
                  {item.number}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-12
                    bg-linear-to-r
                    from-cyan-300/30
                    to-transparent
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mt-7
                  font-display
                  text-2xl
                  font-bold
                  leading-tight
                  text-white/90
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-body mt-4">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Advantages;
