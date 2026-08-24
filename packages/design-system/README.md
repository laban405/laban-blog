# @laban405/design-system

"The Editorial Engine" — a small, self-contained React component library extracted from [laban.mikrosell.com](https://laban.mikrosell.com). Warm neutral surfaces, one emerald accent, editorial typography.

No Tailwind required — all styling ships as plain, namespaced (`ds-*`) CSS in a single stylesheet.

## Install

```bash
npm install @laban405/design-system
```

## Usage

```tsx
import { Button, AnimatedLink, Card, Chip, ListRow, AccordionRow, StatCounter, CursorTrail } from "@laban405/design-system";
import "@laban405/design-system/styles.css";

function Example() {
  return (
    <>
      <Button variant="primary">Get in touch</Button>
      <AnimatedLink href="#about">About</AnimatedLink>

      <Card variant="cta">
        <h3 className="ds-card-title">Ship it</h3>
        <p>Tonal surface, 1px border, 8px radius.</p>
      </Card>

      <Chip>React</Chip>
      <Chip variant="ghost">TypeScript</Chip>

      <AccordionRow
        eyebrow="Acme Inc."
        title="Senior Engineer"
        meta="2023 — Present"
        summary="Hover to reveal detail."
        bullets={["Shipped X", "Led Y"]}
        tags={["React", "TypeScript"]}
      />

      <StatCounter value={10} label="Projects Done" />
      <CursorTrail />
    </>
  );
}
```

## Tokens

Color/typography/spacing/radius values are exported as plain objects from `tokens` (mirrors `DESIGN.md`), and as CSS custom properties (`--ds-*`) in `styles.css` so components stay themeable without Tailwind.

Typography relies on two CSS variables consumers should point at their own fonts (falls back to system sans-serif otherwise):

```css
:root {
  --font-stack-sans-notch: "YourDisplayFont", sans-serif;
  --font-stack-sans-text: "YourBodyFont", sans-serif;
}
```

## Development

```bash
yarn build   # tsup (ESM+CJS+d.ts) + CSS bundling
yarn dev     # tsup --watch
```
