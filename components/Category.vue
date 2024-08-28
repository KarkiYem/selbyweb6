<template>
  <div>
    <div class="opp">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Category List<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" style="width: 100%">
          <div class="container">
            <div class="pop">
              <div
                class="popi"
                v-for="(i, l) in tableData"
                :key="l"
                @click="goto(i.id)"
              >
                <p class="htet">{{ i.name }}</p>
                <p class="ptet" v-for="(k, j) in i.subcat" :key="j">
                  {{ k }}
                </p>
              </div>
            </div>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
      <p
        v-for="(i, l) in tableData"
        :key="l"
        @click="goto(i.id)"
        style="width: fit-content"
      >
        {{ i.name }}
      </p>
    </div>
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
export default {
  data() {
    return {
      tableData: [],
      carouselItems: 3,
      flag: false,
      currentSlide: 0,
      activeIndex: 0,
      width: 370,
    };
  },
  methods: {
    goto(e) {
      this.$router.push({ name: "Details-id", params: { id: e } });
    },
    async getData() {
      var self = this;
      let op = [];
      self.path1 = path;
      self.tableData = await db.collection("cat").getFullList({
        sort: "-created",
      });
      self.tableData = self.tableData.sort((a, b) => a.position - b.position);

      await db.collection("cat").subscribe("*", function (e) {
        self.reflx(e);
      });
    },
    reflx(e) {
      var self = this;
      let at = self.tableData;
      self.tableData = [];
      let index = at.findIndex((a) => a.id == e.record.id);
      self.keys++;
      if (index != -1 && e.action == "update") {
        at[index] = e.record;
      } else {
        if (e.action == "create") {
          at.unshift(e.record);
        }
      }
      self.tableData = at;
      self.tableData = self.tableData.sort((a, b) => a.position - b.position);
    },
  },
  mounted() {
    if (window.screen.availWidth > 750) {
      this.getData();
    }
  },
};
</script>

<style scoped>
.htet {
  font-size: 14px;
  font-weight: bold;
}
.ptet {
  font-size: 12px;
}
p {
  margin: 0;
  padding: 0;
}
.pop {
  display: flex;
  flex-wrap: wrap;
}
.popi {
  flex: 0 0 25%;
  max-width: 25%;
  margin-bottom: 1rem;
}
.opp {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-block: 5px;
}
p {
  font-size: 12px;
}
@media screen and (max-width: 750px) {
  .opp {
    display: none;
  }
}
</style>
<style>
.el-dropdown-link {
  cursor: pointer;
  color: #000000;
}
.el-icon-arrow-down {
  font-size: 12px;
  font-weight: bold;
}
</style>
