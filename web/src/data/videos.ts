export type SiteVideo = {
  title: string;
  /** Either a local file under /images or a VK embed URL. */
  src: string;
  kind: "file" | "embed";
};

export const VIDEOS: SiteVideo[] = [
  {
    title: "Проект «Мои отражения»: фотовыставка",
    src: "/images/mirror7.mp4",
    kind: "file",
  },
  {
    title: "Видеосюжет о центре «Генезис»",
    src: "https://vk.com/video_ext.php?oid=-48690112&id=456268249&hd=2&autoplay=0",
    kind: "embed",
  },
  {
    title: "Психологическое консультирование с помощью видеоигр",
    src: "https://vk.com/video_ext.php?oid=-48690112&id=456257173&hash=4bd4f10bc0d89e79",
    kind: "embed",
  },
  {
    title: "Киберспортивная психология: репортаж",
    src: "https://vk.com/video_ext.php?oid=-48690112&id=456263449&hash=2a2d0b62c946eed5",
    kind: "embed",
  },
  {
    title: "Видеоподкаст с психологами центра",
    src: "https://vk.com/video_ext.php?oid=-216706470&id=456239028&hd=2",
    kind: "embed",
  },
];
