"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/site-data";

export function FAQAccordion({ compact = false }: { compact?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(compact ? 0 : null);

  return (
    <div className="faq-list">
      {FAQS.map((item, index) => {
        const expanded = openIndex === index;
        return (
          <div className={expanded ? "faq-item is-open" : "faq-item"} key={item.question}>
            <h3 className="faq-question-wrap">
              <button
                className="faq-question"
                type="button"
                aria-expanded={expanded}
                aria-controls={"faq-answer-" + index}
                id={"faq-question-" + index}
                onClick={() => setOpenIndex(expanded ? null : index)}
              >
                <span className="faq-index">0{index + 1}</span>
                <span>{item.question}</span>
                <ChevronDown className="faq-chevron" size={18} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </h3>
            <div
              className="faq-answer"
              id={"faq-answer-" + index}
              role="region"
              aria-labelledby={"faq-question-" + index}
              hidden={!expanded}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
