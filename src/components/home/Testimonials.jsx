import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

import { testimonialsSection } from "../../constants/site";

function Testimonials() {
  return (
    <section id="testimonials" className="py-10 sm:py-14 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
          description={testimonialsSection.description}
          align="center"
          className="mb-10"
        />

        <div className="grid gap-5">
          {testimonialsSection.items.map((testimonial) => (
            <GlassCard
              key={testimonial.id}
              strong
              className="relative overflow-hidden p-6 sm:p-8 lg:p-10"
            >
              {/* Decorative quote */}
              <span
                aria-hidden="true"
                className="
                    absolute
                    right-6
                    top-2
                    font-serif
                    text-7xl
                    leading-none
                    text-cyan-300/10
                    select-none
                    sm:right-8
                  "
              >
                “
              </span>

              <div className="relative z-10">
                {/* Placeholder badge */}
                {testimonial.placeholder && (
                  <span
                    className="
                        inline-flex
                        rounded-full
                        border
                        border-orange-300/20
                        bg-orange-300/5
                        px-3
                        py-1.5
                        text-[0.65rem]
                        font-bold
                        uppercase
                        tracking-wider
                        text-orange-200/70
                      "
                  >
                    Placeholder — غير موثق
                  </span>
                )}

                {/* Quote */}
                <blockquote
                  className="
                      mt-6
                      max-w-4xl
                      font-display
                      text-2xl
                      font-medium
                      leading-relaxed
                      text-white/90
                      sm:text-3xl
                    "
                >
                  “{testimonial.quote}”
                </blockquote>

                {/* Client */}
                <div className="mt-8">
                  <p className="text-sm font-bold text-white/80">
                    {testimonial.clientName}
                  </p>

                  <p className="text-small mt-1">{testimonial.company}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
