<template>
  <div style="padding-top: 1rem"></div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
import { Message } from "element-ui";
export default {
  layout: "default2",

  data() {
    return {};
  },

  methods: {},
  mounted() {
    /*  this.getData3(); */
  },
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
  margin-top: 1rem;
}
.fl2 {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  gap: 1%;
}
.imgdiv {
  flex: 0 0 24%;
  max-width: 24%;
  aspect-ratio: 1/1;
  border: 1px solid gray;
  overflow: hidden;
  margin-bottom: 10px;
}
.img {
  object-fit: contain;
  width: 100%;
  width: 100%;
}
.fl {
  display: flex;
  gap: 10px;
}
.capsule {
  min-width: fit-content;
  max-width: fit-content;
  padding: 5px 8px;
  border: 1px solid #797979;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
}
</style>
