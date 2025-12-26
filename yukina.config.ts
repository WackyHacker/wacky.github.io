import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Wacky's Blog",
  subTitle: "My personal tech & hacking notes",
  brandTitle: "Wacky",

  description: "A blog about cybersecurity, penetration testing, and tech",

  site: "https://wacky.github.io",

  locale: "es", // o "es" si prefieres español

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/wacky",
    },
  ],

  username: "Wacky",
  sign: "Hack the planet.",
  avatarUrl: "https://via.placeholder.com/150", // o tu avatar real (sin espacios al final!)
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/wacky",
    },
    // Agrega más si quieres
  ],

  maxSidebarCategoryChip: 6,
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://s2.loli.net/2025/01/25/njNVtuUMzxs81RI.webp",
    // Asegúrate de quitar los ESPACIOS al final de las URLs
  ],

  slugMode: "HASH",
  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  bannerStyle: "LOOP",
};

export default YukinaConfig;
