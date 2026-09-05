import { VideoSlide } from "@/components/home/VideoSlide";
import { Rail } from "@/components/ui/Rail";
import { VIDEOS } from "@/data/videos";

/**
 * The videos as a carousel that runs on endlessly in both directions, the way
 * the original site ran them, rather than five players stacked down the page.
 *
 * Two at a time on a wide screen and one below that, which keeps each player
 * near the 853×480 the original used rather than blowing a single one up to
 * the full width of the page.
 *
 * Looping renders the list three times; VideoSlide is what keeps that from
 * costing three sets of players.
 */
export const VideoCarousel = () => (
  <Rail
    label="Видео о центре"
    visibleClassName="[--rail-visible:1] lg:[--rail-visible:min(2,var(--rail-count))]"
  >
    {VIDEOS.map((video) => (
      <VideoSlide key={video.src} video={video} />
    ))}
  </Rail>
);
