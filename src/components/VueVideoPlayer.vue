<template>
    <vue-resizable class="resizable">
        <VideoPlayer :paramsOptions="viewerPluginParams" />
    </vue-resizable>
</template>
  
<script lang="ts">
import VueResizable from 'vue-resizable';
import { defineComponent } from 'vue'; 

export default defineComponent({
  name: "VueVideoPlayer",
  components: {
    VueResizable,
  },
  props: {
    accountId: {
      readonly: true,
      required: true,
      type: String,
    },
    streamName: {
      readonly: true,
      required: true,
      type: String,
    },
    muted: {
      readonly: true,
      required: false,
      type: Boolean,
      default: false,
    },
    autoplay: {
      readonly: true,
      required: false,
      type: Boolean,
      default: true,
    },
    multisource: {
      readonly: true,
      required: false,
      type: Boolean,
      default: false,
    },
    showLabels: {
      readonly: true,
      required: false,
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      viewerPluginParams: {
        accountId: 'xxTzEe',
        streamName: 'myStreamName',
      }
    }
  },
});

// Required for VueJs to undestand what this component returns
// export default VueVideoPlayer;
</script>

<style>
    @import "@millicast/vue-viewer-plugin/dist/millicast-vue-viewer-plugin.css";
</style>