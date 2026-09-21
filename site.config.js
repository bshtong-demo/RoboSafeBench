/**
 * Public links and venue — fill these when the paper / repo go live.
 * Empty strings render as “coming soon” on the page (no fake URLs).
 */
window.ROBOSAFE_SITE = {
  name: "RoboSafeBench",
  year: 2026,
  venue: "",
  paperUrl: "",
  arxivUrl: "",
  codeUrl: "",
  docsUrl: "",
  hfUrl: "",
  contact: "",
  /**
   * Optional YouTube / Bilibili ids for a page-top teaser.
   * Example: teaserYoutube: "dQw4w9WgXcQ"
   */
  teaserYoutube: "",
  teaserBilibili: "",
  /**
   * Per-cell rollout video. Keys: "{backend}_l{level}" and safety clip ids.
   * If omitted, the page tries assets/videos/{key}.mp4.
   * Missing files show a short placeholder — no illustration.
   * Values: relative path, https URL, YouTube id/url, or
   * { src, youtube, poster }.
   */
  videoBase: "assets/videos/",
  videos: {
    libero_l0: "assets/videos/libero_l0.mp4?v=c3",
    libero_l1: "assets/videos/libero_l1.mp4?v=c3",
    libero_l2: "assets/videos/libero_l2.mp4?v=c3",
    libero_l3: "assets/videos/libero_l3.mp4?v=c3",
    robotwin_l0: "assets/videos/robotwin_l0.mp4?v=c3",
    robotwin_l1: "assets/videos/robotwin_l1.mp4?v=c3",
    robotwin_l2: "assets/videos/robotwin_l2.mp4?v=c3",
    robotwin_l3: "assets/videos/robotwin_l3.mp4?v=c4",
    simplerenv_l0: "assets/videos/simplerenv_l0.mp4?v=c3",
    simplerenv_l1: "assets/videos/simplerenv_l1.mp4?v=c3",
    simplerenv_l2: "assets/videos/simplerenv_l2.mp4?v=c3",
    simplerenv_l3: "assets/videos/simplerenv_l3.mp4?v=c3",
    pi05_l1_book: "assets/videos/pi05_l1_book.mp4?v=c3",
    pi05_l1_stove: "assets/videos/pi05_l1_stove.mp4?v=c3",
    pi05_l1_cabinet: "assets/videos/pi05_l1_cabinet.mp4?v=c3",
  },
  /**
   * Page shows every backend × L0–L3. Put files at
   * assets/videos/{backend}_l{level}.mp4
   */
  defaultDemo: { backend: "libero", level: 3 },
  /**
   * Extra row: π0.5 L1 contact-free successes on three Spatial tasks.
   */
  safetyDemos: [
    { key: "pi05_l1_book", level: 1 },
    { key: "pi05_l1_stove", level: 1 },
    { key: "pi05_l1_cabinet", level: 1 },
  ],
};
