export const colors = {
  bgWarm: "#f5f3ef",
  textInk: "#18181b",
  surfaceSoft: "#f2f1ed",
  accentEmerald: "#30815a",
  borderMist: "#c6ccc7",
  mutedStone: "#6d6f68",
  signalGold: "#f2bf2b",
} as const;

export const typography = {
  display: {
    fontFamily: "var(--ds-font-display)",
    fontSize: "clamp(62px, 8.5vw, 98px)",
    fontWeight: 600,
    lineHeight: 1.03,
    letterSpacing: "-0.045em",
  },
  headline: {
    fontFamily: "var(--ds-font-display)",
    fontSize: "clamp(46px, 5vw, 64px)",
    fontWeight: 600,
    lineHeight: 1.03,
    letterSpacing: "-0.035em",
  },
  title: {
    fontFamily: "var(--ds-font-display)",
    fontSize: "28px",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  body: {
    fontFamily: "var(--ds-font-text)",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.8,
  },
  label: {
    fontFamily: "var(--ds-font-text)",
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.12em",
  },
} as const;

export const radius = {
  sm: "6px",
  md: "8px",
  pill: "999px",
} as const;

export const spacing = {
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "22px",
  xl: "28px",
  section: "90px",
} as const;

export const breakpoint = "980px";
export const containerMaxWidth = "1160px";
