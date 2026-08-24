import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

export type AccordionRowProps = Omit<HTMLAttributes<HTMLElement>, "title"> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  meta?: ReactNode;
  summary?: ReactNode;
  bullets?: string[];
  tags?: string[];
  expandedContent?: ReactNode;
};

export function AccordionRow({
  className,
  eyebrow,
  title,
  meta,
  summary,
  bullets,
  tags,
  expandedContent,
  ...props
}: AccordionRowProps) {
  return (
    <article className={cn("ds-accordion-row", className)} {...props}>
      {eyebrow !== undefined && <div className="ds-accordion-row__eyebrow">{eyebrow}</div>}
      <div className="ds-accordion-row__top">
        <span className="ds-accordion-row__title">{title}</span>
        {meta !== undefined && <span className="ds-accordion-row__meta">{meta}</span>}
      </div>
      {summary !== undefined && <p className="ds-accordion-row__summary">{summary}</p>}
      {(expandedContent || bullets?.length || tags?.length) && (
        <div className="ds-accordion-row__expand">
          {expandedContent}
          {bullets?.length ? (
            <ul className="ds-accordion-row__bullets">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {tags?.length ? (
            <div className="ds-accordion-row__tags">
              {tags.map((tag) => (
                <span className="ds-chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </article>
  );
}
