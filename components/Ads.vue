<template>
  <div>
    <img
      style="width: 100%; aspect-ratio: 3/1"
      :src="`${path1}/api/files/Customadsbanner/${tableData.id}/${tableData.home}`"
    />
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
export default {
  data() {
    return {
      tableData: {},
      path1: "",
    };
  },
  methods: {
    async getData() {
      var self = this;
      self.path1 = path;
      let record = await db.collection("Customadsbanner").getFullList({
        sort: "-created",
      });
      self.tableData = record[0];
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped></style>
