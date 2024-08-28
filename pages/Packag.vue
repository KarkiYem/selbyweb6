<template>
  <div>
    <div class="">
      <div
        class="box"
        style="justify-content: space-between"
        v-for="(i, j) in packages"
        :key="j"
      >
        <p style="width: 30%">
          <strong v-for="(k, l) in i.category" :key="l"
            >{{ k }}<span v-if="l < i.category.length - 1">,</span></strong
          >
        </p>
        <p style="width: 10%">
          <strong>{{ i.noofads }} Ads</strong>
        </p>
        <p style="width: 10%">
          <strong>₹{{ i.price }}</strong>
        </p>
        <p style="width: 10%">
          <strong>{{ i.validity }} days</strong>
        </p>
        <p
          @click="buy(i)"
          style="
            width: 30%;
            border: 1px solid #000;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <strong>BUY NOW</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
export default {
  data() {
    return {
      packages: [],
    };
  },
  mounted() {
    this.getData1();
  },

  methods: {
    async getData1() {
      this.packages = await db.collection("subscription").getFullList({
        sort: "-created",
        filter: `name = "${this.$route.param.id}" `,
      });
    },
    go1(e) {
      this.active = e;
    },
    boost(f) {},
  },
};
</script>

<style scoped></style>
