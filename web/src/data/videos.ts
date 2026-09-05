export type SiteVideo = {
  title: string;
  /** Either a local file under /images or a VK embed URL. */
  src: string;
  kind: "file" | "embed";
  /**
   * Still frame shown until the visitor presses play, so the page loads no
   * player at all. Pulled once from what the VK player itself displays —
   * their public video pages need a login now, and the embed only fetches its
   * poster at runtime, so these cannot be resolved on the fly.
   */
  poster?: string;
};

export const VIDEOS: SiteVideo[] = [
  {
    title: "Проект «Мои отражения»: фотовыставка",
    src: "/images/mirror7.mp4",
    kind: "file",
  },
  {
    title: "Красноярские школьники при занятиях киберспортом могут пообщаться с психологами",
    src: "https://vk.com/video_ext.php?oid=-48690112&id=456268249&hd=2&autoplay=0",
    kind: "embed",
    poster: "/images/video-esports.jpg",
  },
  {
    title: "Интервью: Дмитрий Юрков, педагог-психолог, детский кризисный психолог",
    src: "https://vk.com/video_ext.php?oid=-48690112&id=456257173&hash=4bd4f10bc0d89e79",
    kind: "embed",
    poster: "/images/video-interview.jpg",
  },
  {
    title: "Интервью: Дмитрий Юрков, директор центра психолого-педагогической, медицинской и социальной помощи",
    src: "https://vk.com/video_ext.php?oid=-48690112&id=456263449&hash=2a2d0b62c946eed5",
    kind: "embed",
    poster: "/images/video-centre.jpg",
  },
  {
    title: "Обсуждаем видеоигры с психологами",
    src: "https://vk.com/video_ext.php?oid=-216706470&id=456239028&hd=2",
    kind: "embed",
    poster: "/images/video-podcast.jpg",
  },
];
