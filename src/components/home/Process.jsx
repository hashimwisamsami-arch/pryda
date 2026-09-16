import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

import { processSection } from "../../constants/site";

function Process() {
  return (
    <section id="process" className="py-10 sm:py-14 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={processSection.eyebrow}
          title={processSection.title}
          description={processSection.description}
          align="center"
          className="mb-10"
        />

        <GlassCard strong className="overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {processSection.steps.map((step, index) => (
              <article
                key={step.id}
                className={`
                    group
                    relative
                    p-6
                    transition-all
                    duration-300
                    hover:bg-cyan-300/2.5
                    sm:p-8
                    lg:p-9
                    ${
                      index >= 0
                        ? "border-t border-white/5 md:border-l md:border-t-0"
                        : ""
                    }
                  `}
              >
                {/* Step number */}
                <span
                  dir="ltr"
                  className="
                      text-label
                      text-cyan-300/70
                      transition-colors
                      duration-300
                      group-hover:text-cyan-200
                    "
                >
                  {step.number}
                </span>

                {/* Connector */}
                {index < processSection.steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                        absolute
                        right-0
                        top-10
                        hidden
                        h-px
                        w-8
                        translate-x-4
                        bg-linear-to-r
                        from-cyan-300/20
                        to-transparent
                        lg:block
                      "
                  />
                )}

                {/* Title */}
                <h3
                  className="
                      mt-6
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
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-body mt-4">{step.description}</p>
              </article>
            ))}
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}

export default Process;
