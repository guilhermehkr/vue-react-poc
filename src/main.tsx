import ReactDOM from 'react-dom/client'
import { ReactVideoPlayerWrapperBuildWithVueApp } from './components/ReactVideoPlayerWrapper'
import { ReactVideoPlayerWrapperBuildWithVueRootComponent } from './components/ReactVideoPlayerWrapper'

import { createApp } from 'vue'
import VueVideoPlayerPlugin from '@millicast/vue-viewer-plugin'
import VueVideoPlayer from './components/VueVideoPlayer.vue';

// mounting vue app and installing plugin
// const vueapp = createApp(VueVideoPlayer)
//   .use(VueVideoPlayerPlugin, {});
//   console.log('vueapp',vueapp )
  // vueapp.mount('#vue-app');

// mounting react app
ReactDOM
  .createRoot(document.getElementById('react-app')!)
  //.render(<ReactVideoPlayerWrapperBuildWithVueApp />)
  .render(<ReactVideoPlayerWrapperBuildWithVueRootComponent />)
