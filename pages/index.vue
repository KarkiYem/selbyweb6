<template>
  <div>
    <Feature1 />

    <ads style="margin-top: 1rem" />
    <feature-2 />
    <feature-3 />
    <feature-4 /> <feature-6 />
  </div>
</template>

<script>
import Ads from "../components/Ads.vue";
import Feature1 from "../components/Feature1.vue";
import Feature2 from "../components/Feature2.vue";
import Feature3 from "../components/Feature3.vue";
import Feature4 from "../components/Feature4.vue";
import Feature6 from "../components/Feature6.vue";
export default {
  components: {
    Feature1,
    Feature2,
    Feature3,
    Feature4,

    Ads,
    Feature6,
  },
};
</script>
