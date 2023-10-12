import VueVideoPlayerPlugin from '@millicast/vue-viewer-plugin';
import { useEffect, useRef } from 'react';
import { createApp } from 'vue';

import VueVideoPlayer from './VueVideoPlayer.vue';

export type VideoPlayerProps = {
  accountId: string;
  streamName: string;
  autoplay?: boolean;
  muted?: boolean;
  play?: boolean;
  volume?: string;
  fullscreen?: boolean;
  cast?: boolean;
  pip?: boolean;
  liveBadge?: boolean;
  userCount?: boolean;
  disableSettings?: boolean;
  multisource?: boolean;
  showLabels?: boolean;
  controls?: boolean;
  image?: string;
};

export const VideoPlayer = ({ volume, ...otherProps }: VideoPlayerProps) => {
  const vueAppRef = useRef(null);

  useEffect(() => {
    const app = createApp(VueVideoPlayer, otherProps).use(VueVideoPlayerPlugin, {});
    app.mount(vueAppRef.current!);
    return () => app.unmount();
    // Intentional since we do not want to recreate the vue app at every prop change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={vueAppRef} />;
};
