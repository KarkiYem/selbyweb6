<template>
  <div>
    <div class="flex">
      <h5><strong>Fresh recommendations</strong></h5>
    </div>
    <div class="container flex1">
      <div
        v-for="(item, index) in mergedData"
        :key="index"
        class="stories"
        v-if="item.type == 'object'"
      >
        <div
          class="box"
          @click="goto(item.category, item.subcategory, item.id)"
        >
          <img
            class="img"
            :src="gogoz(item)"
            :alt="`${path1}/api/files/advertisement/${item.id}/${item.field[0]}`"
          />
          <div class="love" @click="toggleLove(index)">
            <mdicon v-if="item.loved" name="heart" class="icon" />
            <mdicon v-else name="heart-outline" />
          </div>
          <!--   <div class="feature" v-if="item.feature">
            <h6 class="ft">Feature</h6>
          </div> -->
        </div>

        <div
          class="text"
          @click="goto(item.id, item.subcategory, item.category)"
        >
          <p class="title elpsis1">{{ item.name }}</p>
          <p class="price">Rs {{ item.price }}</p>
          <span style="display: flex; justify-content: space-between">
            <p class="descdesc elpsis">{{ item.description }}</p>
            <p class="desc">{{ item.date }}</p>
          </span>
        </div>
      </div>
      <div class="stories2" v-else>
        <img class="img3" :src="item.src" />
      </div>
    </div>
    <div class="container" style="display: grid; place-items: center">
      <button class="btn" @click="loadMore">Load More</button>
    </div>
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
export default {
  data() {
    return {
      tableData: [],
      tableData2: [],
      frequency: 0,
      path1: "",
      ok: true,
      itemsToLoad: 8, // Number of items to load per click
    };
  },
  computed: {
    mergedData() {
      let merged = [];
      let imageIndex = 0;
      for (let i = 0; i < this.tableData.length; i++) {
        merged.push({ ...this.tableData[i], type: "object" });
        if (
          (i + 1) % this.frequency === 0 &&
          imageIndex < this.tableData2.length
        ) {
          merged.push({
            src: `${this.path1}/api/files/Customads/${this.tableData2[imageIndex].id}/${this.tableData2[imageIndex].img}`,
            type: "image",
          });
          imageIndex++;
        }
      }
      return merged;
    },
  },
  methods: {
    gogoz(e) {
      var self = this;
      let f = JSON.parse(e.field);
      return `${self.path1}/api/files/advertisement/${e.id}/${f[0]}`;
    },
    loadMore() {
      const currentLength = this.tableData.length;
      const newItems = this.$store.state.product.slice(
        currentLength,
        currentLength + this.itemsToLoad
      );
      if (newItems.length) {
        this.tableData.push(...newItems);
      }
    },
    async getData() {
      var self = this;
      self.path1 = path;
      const url = "https://selby.in/api/getProduct";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(url, options);
        const responseData = await response.json();

        if (response.ok) {
          self.tableData = responseData.message.response;
        } else {
          console.error("HTTP Error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
      /*     self.tableData = await db.collection("advertisement").getFullList({
        sort: "-created",
      });
      console.log(self.tableData);

      await db.collection("advertisement").subscribe("*", function (e) {
        self.reflx(e);
      }); */
    },
    /*   reflx(e) {
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
    }, */
    async getData1() {
      this.path1 = path;
      this.tableData2 = await db.collection("Customads").getFullList({
        sort: "-created",
      });
    },
    async getData3() {
      const record = await db
        .collection("settings")
        .getOne("3rxyf9yoc3ez1hq", {});
      this.frequency = parseInt(record.frequency);
    },
    toggleLove(index) {
      this.mergedData[index].loved = !this.mergedData[index].loved;
    },
    goto(f, g, e) {
      this.$router.push({
        name: "Product-name-subname-id",
        params: { name: f, subname: g, id: e },
      });
    },
  },
  mounted() {
    this.getData();
    this.getData1();
    this.getData3();
  },
};
</script>

<style scoped>
.elpsis1 {
  white-space: nowrap;
  width: 99%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.elpsis {
  white-space: nowrap;
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
}
p {
  margin: 0;
  padding: 0;
}
.title {
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price {
  font-size: 15px;
  font-weight: bold;
}
.highlight {
  font-size: 12px;
  background-color: #dfdfdf;
  padding: 2px 5px;
  border-radius: 5px;
}
.desc {
  font-size: 12px;
}
.descdesc {
  font-size: 12px;
  white-space: nowrap;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.flex {
  display: flex;
  justify-content: space-between;
  margin-block: 2rem;
}
.flex1 {
  display: flex;
  gap: 1%;
  min-width: 100%;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.stories {
  flex: 0 0 24%;
  max-width: 24%;
  height: 250px;
  margin-bottom: 1rem;
}
.stories2 {
  flex: 0 0 100%;
  max-width: 100%;
  height: 250px;
  margin-bottom: 1rem;
}

.box {
  width: 100%;
  overflow: hidden;
  height: 70%;
  border-radius: 5px;
  position: relative;
}
.box1 {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.love {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 2rem;
  height: 2rem;
  background-color: #ececec;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.feature {
  position: absolute;
  bottom: 0;
  left: 10px;
  width: auto;
  height: 1.5rem;
  padding-inline: 5px;
  background-color: rgb(206, 175, 38);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  color: red;
}
.ft {
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin: 0 !important;
}
.text {
  margin-top: 10px;
  width: 100%;
}
.img {
  width: 100%;
  height: 100%;
}
.img3 {
  /*  object-fit: contain; */
  width: 100%;
  height: 100%;
  border-radius: 3px;
}
.ptext {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.btn {
  border: 2px solid black;
  border-radius: 3px;
  color: black;
  outline: none;
  font-size: 14px;
}
@media screen and (max-width: 750px) {
  .flex1 {
    justify-content: space-between;
  }
  .stories {
    flex: 0 0 49%;
    max-width: 49%;
    height: 220px;
  }
  .stories2 {
    flex: 0 0 100%;
    max-width: 100%;
    height: 150px;
    margin-bottom: 1rem;
  }
  .elpsis {
    white-space: nowrap;
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
<style>
.swiper-button-next2,
.swiper-button-prev2 {
  color: rgb(104, 104, 104) !important;
}

.swiper-button-next2:after,
.swiper-button-prev2:after {
  font-size: 20px !important;
}
</style>
