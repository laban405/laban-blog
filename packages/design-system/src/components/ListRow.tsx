import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

export type ListRowProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  index?: ReactNode;
  eyebrow?: ReactNode;
};

export function ListRow({ children, className, index, eyebrow, ...props }: ListRowProps) {
  return (
    <article className={cn("ds-list-row", className)} {...props}>
      {(index !== undefined || eyebrow !== undefined) && (
        <div className="ds-list-row__top">
          {index !== undefined && <span>{index}</span>}
          {eyebrow !== undefined && <span className="ds-caps ds-muted">{eyebrow}</span>}
        </div>
      )}
      {children}
    </article>
  );
}
