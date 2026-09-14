import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

import { aboutStudio } from "../../constants/site";

function AboutStudio() {
  return (
    <section id="studio" className="py-10 sm:py-14 lg:py-20">
      <Container>
        <GlassCard strong className="overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Main Content */}
            <div className="p-6 sm:p-8 lg:p-12">
              <SectionHeading
                eyebrow={aboutStudio.eyebrow}
                title={aboutStudio.title}
                description={aboutStudio.description}
              />
            </div>

            {/* Supporting Content */}
            <div className="border-t border-white/5 bg-white/2 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <p className="text-label">Why Studio?</p>

              <div className="mt-6 space-y-4">
                {aboutStudio.supportingPoints.map((point, index) => (
                  <div
                    key={point}
                    className="
                        group
                        flex
                        items-start
                        gap-4
                        rounded-md
                        border
                        border-white/5
                        bg-white/2.5
                        p-4
                        transition-all
                        duration-300
                        hover:border-cyan-300/15
                        hover:bg-cyan-300/3
                      "
                  >
                    <span
                      className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-cyan-300/15
                          bg-cyan-300/4
                          text-xs
                          font-bold
                          text-cyan-200/80
                          transition-all
                          duration-300
                          group-hover:border-cyan-300/30
                          group-hover:bg-cyan-300/8
                        "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-body">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}

export default AboutStudio;
