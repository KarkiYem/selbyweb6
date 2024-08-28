<template>
  <div>
    <div class="container main">
      <div class="left">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="CATEGORIES" name="1">
            <div style="height: 9rem; overflow-y: scroll">
              <div>
                <p class="title">All Categories</p>
              </div>
              <div>
                <p class="">All Categories</p>
                <p
                  class=""
                  v-for="(i, j) in filterdata.subcat"
                  :key="j"
                  @click="filter1(i.name)"
                >
                  <span> {{ i.subcategory }}</span>
                </p>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item title="LOCATIONS" name="2">
            <div style="height: 4rem">
              <div>
                <p class="">Budget</p>
              </div>
              {{ value }}
              <div class="block">
                <el-slider
                  v-model="value"
                  :key="opp"
                  range
                  :max="1000000"
                  :connect="true"
                >
                </el-slider>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item title="BRAND" name="3">
            <div>
              <!--            <div>
        <el-input
                  placeholder="Type something"
                  suffix-icon="el-icon-search"
                  v-model="input2"
                >
                </el-input>
              </div> -->
              <div style="height: 9rem; overflow-y: scroll">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox
                    v-for="(i, j) in filterdata.data"
                    :key="j"
                    style="width: 100%"
                    :label="i.subcategory"
                    @change="filter2(i.subcategory)"
                  ></el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </el-collapse-item>
          <!--    <el-collapse-item title="ALL MODEL" name="4">
            <div style="height: 9rem; overflow-y: scroll">
         
              <el-checkbox-group v-model="checkList">
                <el-checkbox
                  style="width: 100%"
                  label="Honda Aviatar"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="Hero Maestro Edge 125 (502)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="
Yamaha Fascino 125 (500)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="Hero Honda Pleasure (495)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="Hero Duet (469)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="Suzuki Access (444)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="Hero Pleasure (415)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="TVS Scooty Pep Plus (374)"
                ></el-checkbox>
                <el-checkbox
                  style="width: 100%"
                  label="Hero Destini 125 (317)"
                ></el-checkbox>
              </el-checkbox-group>
            </div>
          </el-collapse-item> -->
          <el-collapse-item title="KM DRIVEN" name="5">
            <div style="height: 9rem; overflow-y: scroll">
              <div>
                <p class="title">KM DRIVEN</p>
              </div>
              <div>
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="" @click="filter3(1)">0-1000KM</p></span
                >
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="" @click="filter3(2)">1000-200KM</p></span
                >
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="" @click="filter3(3)">2000KM +</p></span
                >
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item title="YEAR" name="6">
            <div style="height: 9rem; overflow-y: scroll">
              <div>
                <p class="">YEAR</p>
              </div>
              <div>
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="" @click="filter4(1)">0-3 Year</p>
                </span>
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="" @click="filter4(2)">3-5 Year</p>
                </span>
                <span
                  style="
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid rgb(53, 53, 53);
                    padding-inline: 3px;
                    margin-top: 0.2rem;
                  "
                >
                  <p class="" @click="filter4(3)">5 + Year</p>
                </span>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="right">
        <div class="container flex1">
          <div
            class="stories"
            v-for="(i, j) in products"
            :key="j"
            @click="goto(i.category, i.subcategory, i.id)"
          >
            <div class="box">
              <img
                class="img"
                :src="`${path1}/api/files/advertisement/${i.id}/${i.field[0]}`"
              />
              <div class="love">
                <mdicon name="heart-outline" />
                <!--          <mdicon name="heart" class="icon" /> -->
              </div>
              <div class="feature">
                <h6 class="ft">Feature</h6>
              </div>
            </div>
            <div class="text">
              <p class="title">{{ i.name }}</p>
              <p class="price">Rs {{ i.price }}</p>
              <span style="display: flex; justify-content: space-between">
                <p class="desc">{{ i.description }}</p>
                <p class="desc">22 Sep</p>
              </span>
            </div>
          </div>
        </div>
        <!--        <div class="contaner" style="display: grid; place-items: center">
          <button class="btn" @click="loadmore">Load More</button>
        </div> -->
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
    /*     "$store.state.search": function () {
      this.getData1();
    },
    value: function () {
      this.sorte();
    }, */
    value: function () {
      this.filter5();
    },
  },
  mounted() {
    this.getData();
    this.getData22();
  },
  methods: {
    goto(f, g, e) {
      this.$router.push({
        name: "Product-name-subname-id",
        params: { name: f, subname: g, id: e },
      });
    },
    filter1(e) {
      var self = this;
      self.filtercat = e;
      self.products = self.productsdup.filter((f) => f.othercategory == e);
    },
    filter2(e) {
      var self = this;
      self.filtercat2 = e;
      self.products = self.productsdup.filter((f) => f.subcategory == e);
    },
    filter3(e) {
      var self = this;
      self.filtercat3 = e;
      if (e == 1) {
        let p = 1000;
        self.products = self.productsdup.filter(
          (f) => parseInt(f.kmdriven) < p
        );
      }
      if (e == 2) {
        let p = 1000;
        let p2 = 2000;
        self.products = self.productsdup.filter(
          (f) => parseInt(f.kmdriven) >= p && parseInt(f.kmdriven) < p2
        );
      } else {
        let p = 2000;
        self.products = self.productsdup.filter(
          (f) => parseInt(f.kmdriven) >= p
        );
      }
    },
    filter4(e) {
      var self = this;
      self.filtercat4 = e;
      /*     self.products = self.products.filter((f) => f.subcategory == e); */
      if (e == 1) {
        let p = 3;
        self.products = self.productsdup.filter((f) => parseInt(f.age) < p);
      }
      if (e == 2) {
        let p = 3;
        let p2 = 5;
        self.products = self.productsdup.filter(
          (f) => parseInt(f.age) >= p && parseInt(f.age) < p2
        );
      } else {
        let p = 5;
        self.products = self.productsdup.filter((f) => parseInt(f.age) >= p);
      }
    },
    filter5(e) {
      var self = this;
      self.products = self.productsdup.filter(
        (obj) =>
          parseFloat(obj.price) >= parseFloat(self.value[0]) &&
          parseFloat(obj.price) <= parseFloat(self.value[1])
      );
    },
    async getData() {
      var self = this;
      self.path1 = path;
      /*  let id = self.$route.params.id; */
      let id = "618qakptrmktyp6";
      this.filterdata = await db.collection("Category").getOne(`${id}`, {});
    },
    async getData22() {
      var self = this;
      /*  let id = self.$route.params.id; */
      let id = "Bike";
      const record = await db.collection("Ads").getFullList({
        sort: "-created",
      });
      console.log(record);

      self.products = record.filter((e) => e.category == id);
      self.productsdup = record.filter((e) => e.category == id);
    },
    handleChange(val) {
      console.log(val);
    },
    loadmore() {
      this.data += 5;
    },
  },
};
</script>

<style scoped>
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
}

.box {
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
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
  object-fit: contain;
  width: 100%;
  height: 100%;
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
