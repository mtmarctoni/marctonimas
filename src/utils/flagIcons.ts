import type { SvgComponent } from "astro/types";
import CatalanFlag from "@/assets/flagIcons/catalonia-flag.svg";
import EnglishFlag from "@/assets/flagIcons/english-flag.svg";
import GermanFlag from "@/assets/flagIcons/german-flag.svg";
import SpanishFlag from "@/assets/flagIcons/spain-flag.svg";

export const SpanishFlagIcon: SvgComponent = SpanishFlag;
export const EnglishFlagIcon: SvgComponent = EnglishFlag;
export const CatalanFlagIcon: SvgComponent = CatalanFlag;
export const GermanFlagIcon: SvgComponent = GermanFlag;

export default {
  SpanishFlagIcon,
  EnglishFlagIcon,
  CatalanFlagIcon,
  GermanFlagIcon,
};
