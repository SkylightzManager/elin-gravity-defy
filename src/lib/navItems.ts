import { Baby, Calendar, Dumbbell, Gift, Heart, Music, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavCardItem = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const classNavItems: NavCardItem[] = [
  {
    label: "Bungee Workout",
    href: "/classes/bungee-workout",
    icon: Dumbbell,
    description: "High-energy, full-body bungee workout",
  },
  {
    label: "Bungee HiiT",
    href: "/classes/bungee-hiit",
    icon: Zap,
    description: "HIIT-style bungee training for stamina",
  },
  {
    label: "Bungee Oscillate",
    href: "/classes/bungee-oscillate",
    icon: Music,
    description: "Rhythmic movement with core activation",
  },
  {
    label: "Kids Bungee",
    href: "/classes/kids-bungee",
    icon: Baby,
    description: "Playful fitness for kids (Singapore)",
  },
  {
    label: "Family Bungee",
    href: "/classes/family-bungee",
    icon: Users,
    description: "Family bonding through bungee fitness",
  },
];

export const promotionNavItems: NavCardItem[] = [
  {
    label: "WHO2025",
    href: "/promotions/who2025",
    icon: Calendar,
    description: "Special 2025 campaign & offers",
  },
  {
    label: "Anniversary",
    href: "/promotions/anniversary",
    icon: Gift,
    description: "Limited-time celebration deals",
  },
  {
    label: "Heart of Society",
    href: "/promotions/heart-of-society",
    icon: Heart,
    description: "Community-focused initiatives",
  },
];
