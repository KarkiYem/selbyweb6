<template>
  <div>
    <div class="imgsection">
      <img :src="adbanner" style="width: 100%; aspect-ratio: 3/1" />
    </div>
    <div class="container main">
      <div class="left">
        <el-collapse v-model="activeNames" @change="handleChange">
        </el-collapse>
      </div>
      <div class="right">
        <div class="container flex1" v-if="products.length > 0">
          <div
            class="stories"
            v-for="(i, j) in products"
            :key="j"
            @click="goto(i.category, i.subcategory, i.id)"
          >
            <div class="box">
              <img
                class="img"
                :src="`${path1}/api/files/advertisement/${i.id}/${i.field}`"
              />
            </div>
            <div class="text">
              <p class="title elpsis1">{{ i.name }}</p>
              <p class="price">Rs {{ i.price }}</p>
              <span style="display: flex; justify-content: space-between">
                <p class="desc elpsis">{{ i.description }}</p>
                <p class="desc">{{ i.data }}</p>
              </span>
            </div>
          </div>
        </div>
        <div class="" v-else><p style="color: black">No Ads Found</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
export default {
  data() {
    return {
      data: 5,
      filtercat: "",
      adbanner: "",
      filtercat2: "",
      filtercat3: "",
      filtercat4: "",
      activeNames: ["1", "2", "3", "4", "5", "6", "7"],
      checkList: [],
      input2: "",
      value: [0, 1000000],
      filterdata: {},
      path1: "",
      products: [],
      productsdup: [],
      opp: 0,
    };
  },
  watch: {
    value: function () {
      this.filter5();
    },
  },
  mounted() {
    this.getData();
    this.getDataas();
  },
  methods: {
    goto(f, g, e) {
      this.$router.push({
        name: "Product-name-subname-id",
        params: { name: f, subname: g, id: e },
      });
    },

    async getData() {
      var self = this;
      self.path1 = path;
      this.getData22();
    },
    async getData22() {
      var self = this;
      let id = self.filterdata.name;
      /*  const record = await db.collection("advertisement").getFullList({
        sort: "-created",
      });
      self.products = record;
      self.productsdup = record; */
      const url = "https://selby.in/api/getProduct";
      const data = {
        search: self.$route.params.id,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      try {
        const response = await fetch(url, options);
        const responseData = await response.json();

        if (response.ok) {
          console.log("Response Data:", responseData.message.response);
          self.products = responseData.message.response;
        } else {
          console.error("HTTP Error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    },

    async getDataas() {
      var self = this;
      self.path1 = path;
      const record = await db
        .collection("Customadsbanner")
        .getOne("bmuaamr95mgvnkc", {});
      self.adbanner = `${self.path1}/api/files/Customadsbanner/${record.id}/${record.category}`;
    },
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
.highlighted {
  font-weight: 600;
  color: black;
}
.active {
  font-weight: bold;
}
.main {
  display: flex;
  justify-content: space-between;
}
.left {
  flex: 0 0 25%;
  max-width: 25%;
}
.right {
  flex: 0 0 70%;
  max-width: 70%;
}

p {
  margin: 0;
  padding: 0;
}
.title {
  font-size: 14px;
  color: rgb(53, 53, 53);
  font-weight: bold;
}
.price {
  font-size: 16px;
  color: rgb(53, 53, 53);
  font-weight: bold;
}
.highlight {
  font-size: 14px;
  background-color: #dfdfdf;
  padding: 2px 5px;
  border-radius: 5px;
}
.desc {
  font-size: 12px;
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
  flex: 0 0 32%;
  max-width: 32%;
  margin-bottom: 1rem;
  height: 230px;
}

.box {
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
}
.love {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 3rem;
  height: 3rem;
  background-color: #ececec;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.feature {
  position: absolute;
  top: 15%;
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
  font-size: 10px;
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
  object-fit: cover;
}
.ptext {
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}
.btn {
  border: 2px solid black;
  border-radius: 3px;
  font-weight: bold;
  color: black;
  outline: none;
  font-size: 14px;
  outline: none;
}
@media screen and (max-width: 750px) {
  .left {
    display: none;
  }
  .right {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .stories {
    flex: 0 0 49%;
    max-width: 49%;
    margin-bottom: 1rem;
  }
}
</style>
<style>
.el-checkbox__label {
  display: inline-block;
  padding-left: 10px;
  line-height: 19px;
  font-size: 12px;
  color: rgb(53, 53, 53);
}
.el-input__inner {
  outline: none !important;
}
.el-slider__bar {
  background-color: rgb(53, 53, 53);
}
.el-slider__button {
  border: 2px solid rgb(53, 53, 53);
}
</style>
