import VueVideoPlayerPlugin from '@millicast/vue-viewer-plugin';
import { useEffect, useRef } from 'react';
import { createApp } from 'vue';

import VueVideoPlayer from './VueVideoPlayer.vue';

export type VideoPlayerProps = {
  accountId: string;
  streamName: string;
};

export const VideoPlayer = (props: VideoPlayerProps) => {
  const vueAppRef = useRef(null);

  useEffect(() => {
    const app = createApp(VueVideoPlayer, props).use(VueVideoPlayerPlugin, {});
    app.mount(vueAppRef.current!);
    return () => app.unmount();
  }, [props]);

  return <div ref={vueAppRef} />;
};
