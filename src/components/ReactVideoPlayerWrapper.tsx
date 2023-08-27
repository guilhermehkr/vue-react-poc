import { applyVueInReact, applyPureReactInVue } from 'veaury'
import VueVideoPlayer from './VueVideoPlayer.vue';
import { createApp } from 'vue'
import VueVideoPlayerPlugin from '@millicast/vue-viewer-plugin'

//const ReactVideoPlayer = applyVueInReact(VueVideoPlayer);

/**
 * Warning
 [Vue warn]: Component is missing template or render function. 
  at <Anonymous accountId="xxTzEe" streamName="myStreamName" ref="use_vue_wrapper" > 
  at <App>
 */
export const ReactVideoPlayerWrapperBuildWithVueApp = () => {
  const vueApp = createApp(VueVideoPlayer).use(VueVideoPlayerPlugin, {});
  console.log(vueApp);
  const ReactVideoPlayer = applyVueInReact(vueApp);
  return <ReactVideoPlayer accountId="xxTzEe" streamName="myStreamName" />;
}

/**
 * Warning
 runtime-core.esm-bundler.js:41 [Vue warn]: Unhandled error during execution of watcher getter 
  at <VideoPlayerContainer class="ml-viewer" id="viewer-container" > 
  at <App paramsOptions= {accountId: 'xxTzEe', streamName: 'myStreamName'}accountId: "xxTzEe"streamName: "myStreamName"[[Prototype]]: Object > 
  at <VResizable class="resizable" > 
  at <VueVideoPlayer accountId="xxTzEe" streamName="myStreamName" ref="use_vue_wrapper" > 
  at <App>

 * Error thrown
 react-dom.development.js:12056 Uncaught TypeError: Cannot read properties of undefined (reading 'state')
    at Proxy.mappedState (vuex.esm-browser.js:1184:1)
    at ReactiveEffect.run (reactivity.esm-bundler.js:178:19)
    at get value [as value] (reactivity.esm-bundler.js:1147:33)
    at Object.get [as playing] (runtime-core.esm-bundler.js:3407:22)
    at Object.get (runtime-core.esm-bundler.js:2931:16)
    at getter (runtime-core.esm-bundler.js:3516:80)
    at callWithErrorHandling (runtime-core.esm-bundler.js:158:32)
    at ReactiveEffect.getter [as fn] (runtime-core.esm-bundler.js:1693:22)
    at ReactiveEffect.run (reactivity.esm-bundler.js:178:19)
    at doWatch (runtime-core.esm-bundler.js:1789:25)
 */
export const ReactVideoPlayerWrapperBuildWithVueRootComponent = () => {
  const vueApp = createApp(VueVideoPlayer).use(VueVideoPlayerPlugin, {});
  console.log(vueApp);

  // This seems to be required so Vue is able to find components installed by the plugin
  Object.assign(vueApp._component.components, vueApp._context.components);
  const ReactVideoPlayer = applyVueInReact(vueApp._component);
  return <ReactVideoPlayer accountId="xxTzEe" streamName="myStreamName" />;
};