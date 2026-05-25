import { NAV_LINKS } from "../../constants";
import { S } from "../../styles";
import { Button } from "../ui";
import type { Theme } from "../../types";

export function NavBar({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  return (
    <nav style={S.nav}>
      <a href="#" style={S.navLogo}>LM</a>
      <ul style={S.navLinks}>
        {NAV_LINKS.map((l) => (
          <li key={l}><a href={`#${l.toLowerCase()}`} style={S.navLink}>{l}</a></li>
        ))}
        <li><Button variant="ghost" onClick={toggle} style={{ padding: "0.45rem 0.6rem", fontSize: "1rem" }} title="Toggle theme">{theme === "dark" ? "☀" : "☾"}</Button></li>
      </ul>
    </nav>
  );
}
