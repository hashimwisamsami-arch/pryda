import { useState } from "react";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

import { faqSection } from "../../constants/site";

function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="py-10 sm:py-14 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={faqSection.eyebrow}
          title={faqSection.title}
          description={faqSection.description}
          align="center"
          className="mb-10"
        />

        <GlassCard strong className="overflow-hidden">
          <div className="divide-y divide-white/5">
            {faqSection.items.map((item) => {
              const isOpen = openItem === item.id;

              return (
                <article key={item.id}>
                  {/* Question */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    onClick={() => toggleItem(item.id)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      px-6
                      py-5
                      text-left
                      transition-colors
                      duration-300
                      hover:bg-white/2.5
                      sm:px-8
                      sm:py-6
                    "
                  >
                    <span
                      className={`
                        text-sm
                        font-bold
                        leading-relaxed
                        transition-colors
                        duration-300
                        sm:text-base
                        ${isOpen ? "text-white" : "text-white/75"}
                      `}
                    >
                      {item.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-base
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "rotate-180 border-cyan-300/25 bg-cyan-300/[0.07] text-cyan-200"
                            : "border-white/10 bg-white/3 text-white/45"
                        }
                      `}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${item.id}`}
                    className={`
                      grid
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 sm:px-8">
                        <p
                          dir="rtl"
                          className="
                            max-w-3xl
                            text-sm
                            leading-7
                            text-white/55
                          "
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}

export default FAQ;
