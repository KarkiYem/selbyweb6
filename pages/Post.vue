<template>
  <div>
    <div class="container mt-5" style="border: 1px solid gray">
      <p style="text-transform: uppercase; font-weight: 600; margin-top: 10px">
        Choose a Category
      </p>
      <div class="flex">
        <div class="left">
          <div
            class="top"
            v-for="(i, j) in tableData"
            :key="j"
            @click="goto(i.id)"
          >
            <div
              class=""
              style="display: flex; align-items: center; gap: 5px; height: 50px"
            >
              <img
                :src="`${path1}/api/files/cat/${i.id}/${i.img}`"
                width="20"
                height="20"
              />
              <p style="padding: 0; margin: 0">{{ i.name }}</p>
            </div>
            <mdicon name="chevron-right" />
          </div>
        </div>
        <div class="right">
          <div
            class="top"
            v-for="(i, j) in tableDatas"
            :key="j"
            @click="goto2(i)"
          >
            <div
              class=""
              style="display: flex; align-items: center; gap: 5px; height: 50px"
            >
              <!--    <img
                :src="`${path1}/api/files/Category/${i.id}/${i.img}`"
                width="20"
                height="20"
              /> -->
              <p style="padding: 0; margin: 0">{{ i }}</p>
            </div>
            <!--   <mdicon name="chevron-right" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
export default {
  layout: "default2",
  middleware: ["CheckUser"],
  data() {
    return {
      tableData: [],
      tableDatas: [],
      carouselItems: 3,
      flag: false,
      currentSlide: 0,
      activeIndex: 0,
      width: 370,
      category: "",
      subcategory: "",
    };
  },

  methods: {
    async getData() {
      var self = this;
      self.path1 = path;
      self.tableData = await db.collection("cat").getFullList({
        sort: "-created",
      });
      self.tableData = self.tableData.sort((a, b) => a.position - b.position);
    },
    goto(e) {
      var self = this;
      /*    const record = await db.collection("cat").getOne(e, {}); */
      self.category = e;
      let record = self.tableData.filter((f) => f.id == e);
      self.tableDatas = record[0].subcat;
    },
    async goto2(e) {
      var self = this;
      this.$router.push({
        name: "Attribute-name-id",
        params: { name: self.category, id: e },
      });
      /*   self.$router.push("/Attributes"); */
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
.left {
  flex: 0 0 50%;
  max-width: 50%;
}
.right {
  flex: 0 0 50%;
  max-width: 50%;
}
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-inline: 5px;
  align-items: center;
  border: 1px solid gray;
}
</style>
