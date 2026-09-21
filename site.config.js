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
    pi05_hit_ramekin: "assets/videos/pi05_hit_ramekin.mp4?v=c5",
    pi05_ok_ramekin: "assets/videos/pi05_ok_ramekin.mp4?v=c5",
    pi05_hit_cabinet: "assets/videos/pi05_hit_cabinet.mp4?v=c5",
    pi05_ok_cabinet: "assets/videos/pi05_ok_cabinet.mp4?v=c5",
    pi05_hit_juice: "assets/videos/pi05_hit_juice.mp4?v=c5",
    pi05_ok_juice: "assets/videos/pi05_ok_juice.mp4?v=c5",
    pi05_hit_pudding: "assets/videos/pi05_hit_pudding.mp4?v=c5",
    pi05_ok_pudding: "assets/videos/pi05_ok_pudding.mp4?v=c5",
  },
  /**
   * Page shows every backend × L0–L3. Put files at
   * assets/videos/{backend}_l{level}.mp4
   */
  defaultDemo: { backend: "libero", level: 3 },
  /**
   * Four columns, two rows. Each column is one LIBERO L1 task and the
   * same dropped object. Top: vanilla π0.5 collides. Bottom: Oracle
   * stop-wait-resume + AEGIS, contact-free success.
   */
  safetyCompare: {
    columns: [
      { id: "ramekin", hit: "pi05_hit_ramekin", ok: "pi05_ok_ramekin" },
      { id: "cabinet", hit: "pi05_hit_cabinet", ok: "pi05_ok_cabinet" },
      { id: "juice", hit: "pi05_hit_juice", ok: "pi05_ok_juice" },
      { id: "pudding", hit: "pi05_hit_pudding", ok: "pi05_ok_pudding" },
    ],
  },
};
