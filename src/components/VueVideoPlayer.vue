<template>
  <VideoPlayer
    :paramsOptions="{
      accountId,
      streamName,
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VueVideoPlayer',
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
  },
});
</script>

<style>
  @import '@millicast/vue-viewer-plugin/dist/millicast-vue-viewer-plugin.css';
</style>
