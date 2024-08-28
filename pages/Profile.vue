<template>
  <div>
    <div class="main">
      <div class="left">
        <div class="icondiv">
          <img
            v-if="storing.avatar == ''"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s"
            class="icon"
          />
          <img
            v-else
            :src="`${path1}/api/files/users/${storing.id}/${storing.avatar}`"
            class="icon"
          />
        </div>
        <div class="">
          <p style="text-align: center">{{ storing.name }}</p>
          <button class="btn" @click="editing(storing.id)">
            <mdicon name="account-edit-outline" /> Edit Profile
          </button>
          <button
            class="btn1"
            @click="go1(1)"
            v-bind:class="{ highlighted: active === 1 }"
          >
            <mdicon name="heart-outline" /> &nbsp;My Ads
          </button>
          <button
            class="btn1"
            @click="go1(2)"
            :class="{ highlighted: active === 2 }"
          >
            <mdicon name="gift-outline" /> &nbsp;Buy Bussiness Packages
          </button>
          <button
            class="btn1"
            @click="go1(3)"
            :class="{ highlighted: active === 3 }"
          >
            <mdicon name="credit-card" /> &nbsp;Bought Packages & Billings
          </button>
          <button class="btn1" @click="go2()">LOGOUT</button>
        </div>
      </div>
      <div class="right">
        <div class="prod" v-if="active == 1">
          <div class="box" v-for="(i, j) in ads" :key="j">
            <div class="boxin">
              <div class="imgdiv">
                <img
                  class="img"
                  :src="`${path1}/api/files/advertisement/${i.id}/${i.field}`"
                />
              </div>

              <div class="textdiv">
                <p>
                  <strong>{{ i.name }}</strong>
                </p>
                <p>Ad ID - {{ i.ad_id }}</p>
                <p>{{ i.category }}</p>
                <p>{{ i.date }}</p>
                <p>{{ i.area }},{{ i.city }},{{ i.state }}</p>
                <p>
                  <strong>{{ i.price }}</strong>
                </p>

                <p
                  @click="adbooster(i)"
                  style="
                    width: 60%;
                    border: 1px solid #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  USE AD BOOSTER
                </p>

                <!--    <p
                  @click="boost(i)"
                  style="
                    width: 50%;
                    border: 1px solid #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <strong>BOOST NOW</strong>
                </p> -->
              </div>
            </div>
          </div>
        </div>
        <div class="prod" v-if="active == 2">
          <div style="display: block">
            <template>
              <el-select v-model="category1" placeholder="Select Category">
                <el-option
                  v-for="item in cat"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name"
                >
                </el-option>
              </el-select>
            </template>
            <template>
              <el-select
                v-model="subcategory1"
                placeholder="Select Sub Category"
              >
                <el-option
                  v-for="item in subcat"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </template>
            <template style="margin-top: 20px">
              <p
                @click="pack(category1)"
                style="
                  width: 30%;
                  margin-top: 20px;
                  border: 1px solid #000;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <strong>View Packages</strong>
              </p>
            </template>
          </div>

          <!--    <div
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
          </div> -->
        </div>
        <div class="prod" v-if="active == 3">
          <div
            class="box"
            v-for="(i, j) in storing.subscription"
            :key="j"
            style=""
          >
            <div class="boxin" style="">
              <div class="" style="width: 100%">
                <p>
                  <strong>{{ i.category }}</strong>
                </p>
                <p>Validity - {{ i.validity }}</p>
                <p>{{ i.noofpostremaining }}</p>
                <p>₹{{ i.amount }}</p>
                <p
                  @click="bosteropen(i)"
                  style="
                    width: 20%;
                    border: 1px solid #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  USE ADS PACKAGES
                </p>
              </div>
            </div>
          </div>
        </div>

        <!--     <div class="">
          <img
            style="width: 80%; aspect-ratio: 1/1"
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          />
          <button class="btn">Start Selling</button>
        </div> -->
      </div>

      <!--  <el-dialog title="Slect Ads" :visible.sync="dialogTableVisible">
        <div
          class="box"
          v-for="(i, j) in boostpackages"
          :key="j"
          v-if="boostpackages.length != 0"
        >
          <div class="boxin">
            <div class="imgdiv">
              <img
                class="img"
                :src="`${path1}/api/files/advertisement/${i.id}/${i.field}`"
              />
            </div>

            <div class="textdiv">
              <p>
                <strong>{{ i.name }}</strong>
              </p>
              <p>Ad ID - {{ i.ad_id }}</p>
              <p>{{ i.category }}</p>
              <p>{{ i.date }}</p>
              <p>{{ i.area }},{{ i.city }},{{ i.state }}</p>
              <p>
                <strong>{{ i.price }}</strong>
              </p>
              <p
                @click="usebooster(i)"
                style="
                  width: 40%;
                  border: 1px solid #000;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                USE HERE
              </p>
            </div>
          </div>
        </div>
        <div
          v-else
          style="display: flex; justify-content: center; align-items: center"
        >
          <p>No Ads Found!</p>
        </div>
      </el-dialog> -->
    </div>
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
const Cookie = process.client ? require("js-cookie") : undefined;
import { Message } from "element-ui";
export default {
  middleware: ["CheckUser"],
  data() {
    return {
      ads: [],
      packages: [],
      boostpackages: [],
      path1: "",
      dialogTableVisible: false,
      active: 1,
      category1: "",
      subcategory1: "",
      cat: [],
      subcat: [],
      storing: {
        active: Boolean,
        avatar: "",
        block: Boolean,
        collectionId: "",
        collectionName: "",
        created: "",
        email: "",
        emailVisibility: Boolean,
        id: "",
        name: "",
        phone: "",
        subscription: [],
        updated: "",
        username: "",
        verified: Boolean,
      },
      boo: {
        amount: "",
        category: "",
        noofpostremain: "",
        validity: "",
      },
    };
  },
  mounted() {
    this.getData();
    this.getData1();
    this.getcat();
    this.getprofile();
  },
  watch: {
    category1: function () {
      this.getsubcat();
    },
  },
  methods: {
    go2() {
      var self = this;
      Message({
        message: "Logout successfully",
        type: "success",
      });
      Cookie.remove("phone");
      self.$store.commit("phone", null);
      self.$router.replace("/");
      db.authStore.clear();
    },
    editing(e) {
      this.$router.push({
        name: "ProfileEdit-id",
        params: { id: e },
      });
    },
    bosteropen(f) {
      this.$router.push({
        name: "Attribute-name-id",
        params: { name: f.catid, id: f.category },
      });

      /* this.dialogTableVisible = true;
      this.boo = {};
      this.boo = f;
      this.boostpackages = this.ads.filter((e) => e.category == f.category); */
    },
    async usebooster(f) {
      var self = this;
      console.log(self.boo);
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1;
      let dd = today.getDate();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      const orderdate = dd + "/" + mm + "/" + yyyy;
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + 28);

      const yyyy1 = futureDate.getFullYear();
      let mm1 = futureDate.getMonth() + 1;
      let dd1 = futureDate.getDate();
      let hh = futureDate.getHours();
      let min = futureDate.getMinutes();
      let ss = futureDate.getSeconds();

      if (dd1 < 10) dd = "0" + dd;
      if (mm1 < 10) mm = "0" + mm;

      const futureOrderDate = dd1 + "/" + mm1 + "/" + yyyy1;
      const time = hh + ":" + min + ":" + ss;

      /*  self.phone = self.$store.state.phone; */

      const datas = {
        name: f.name,
        category: f.category,
        subcategory: f.subcategory,
        price: f.price,
        fueltype: f.fueltype,
        kmdriven: f.kmdriven,
        transmission: f.transmission,
        ownertype: f.ownertype,
        date: f.date,
        description: f.description,
        area: f.area,
        city: f.city,
        state: f.state,
        postedby: f.postedby,
        userid: f.userid,
        bedroom: f.bedroom,
        bathroom: f.bathroom,
        furnished: f.furnished,
        construction_status: f.construction_status,
        buid_area: f.buid_area,
        carpet_area: f.carpet_area,
        t_floor: f.t_floor,
        floor_no: f.floor_no,
        car_parking: f.car_parking,
        facing: f.facing,
        project_name: f.project_name,
        ad_id: f.ad_id,
        plot_area: f.plot_area,
        length: f.length,
        breadth: f.breadth,
        maintenance: f.maintenance,
        washroom: f.washroom,
        meals_included: f.meals_included,
        bachelor: f.bachelor,
        brand: f.brand,
        model: f.model,
        type: f.type,
        year: f.year,
        active: f.active,
        feature: f.feature,
        approve: f.approve,
        subscription: f.subscription,
        subscriptiondate: f.subscriptiondate,
        subscriptionvalidupto: f.subscriptionvalidupto,
        subscriptionvalidity: f.subscriptionvalidity,
        subscriptionvalidityremaining: f.subscriptionvalidityremaining,
        subscriptiondays: f.subscriptiondays,
        subscriptionamount: f.subscriptionamount,
        booster: true,
        boosterdays: self.boo.validity,
        boosterdate: orderdate,
        boosterenddate: futureOrderDate,
        boosterprice: self.boo.price,
        block: f.block,
        boostertime: time,
      };

      await db
        .collection("advertisement")
        .update(f.id, datas)
        .then(() => {
          Message({
            showClose: true,
            message: "Booster Activated Successfully!",
            type: "success",
          });
          /*  self.getData(); */
          self.booste();
        })
        .catch(() => {
          Message({
            showClose: true,
            message: "Something went wrong!",
            type: "warning",
          });
        });
    },
    async getcat() {
      this.cat = await db.collection("cat").getFullList({
        sort: "-created",
      });
    },
    async getprofile() {
      this.storing = await db
        .collection("users")
        .getFirstListItem(`phone = "${this.$store.state.phone}"`, {});
    },
    getsubcat() {
      let op = [];
      op = this.cat.filter((e) => e.name == this.category1);
      this.subcat = op[0].subcat;
    },
    async getData() {
      let phone = this.$store.state.phone;
      this.path1 = path;
      this.ads = await db.collection("advertisement").getFullList({
        sort: "-created",
        filter: `userid = "${phone}" && approve = true && block = false`,
      });
    },
    async getData1() {
      this.packages = await db.collection("subscription").getFullList({
        sort: "-created",
      });
    },
    go1(e) {
      this.active = e;
    },
    pack(e) {
      this.$router.push({ name: "Packages-id", params: { id: e } });
    },

    booste(e) {},

    adbooster(f) {
      const self = this;
      const rzp_options = {
        key: "rzp_test_FKoWwhlrAUl0Ls",
        amount: 5000,
        handler: function (response) {
          Message({
            showClose: true,
            message: "Payment Successful!",
            type: "success",
          });
          self.payment_id = response.razorpay_payment_id;
          self.postorder(e, f);
        },
        modal: {
          ondismiss: function () {
            Message({
              showClose: true,
              message: "Payment Failed!",
              type: "warning",
            });
          },
        },
        prefill: {
          email: "test@email.com",
          contact: +917002242387,
        },
        notes: {
          name: f.name,
          phone: f.phone,
        },
        theme: {
          color: "#667eea",
        },
      };
      const rzp1 = new Razorpay(rzp_options);
      rzp1.open();
    },
    async postorder(f) {
      var self = this;
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1;
      let dd = today.getDate();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      const orderdate = dd + "/" + mm + "/" + yyyy;
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + 28);

      const yyyy1 = futureDate.getFullYear();
      let mm1 = futureDate.getMonth() + 1; // Months are zero-indexed
      let dd1 = futureDate.getDate();
      let hh = futureDate.getHours();
      let min = futureDate.getMinutes();
      let ss = futureDate.getSeconds();

      if (dd1 < 10) dd = "0" + dd;
      if (mm1 < 10) mm = "0" + mm;

      const futureOrderDate = dd1 + "/" + mm1 + "/" + yyyy1;
      const time = hh + ":" + min + ":" + ss;

      if (self.payment_id !== null) {
        const datas = {
          name: f.name,
          category: f.category,
          subcategory: f.subcategory,
          price: f.price,
          fueltype: f.fueltype,
          kmdriven: f.kmdriven,
          transmission: f.transmission,
          ownertype: f.ownertype,
          date: f.date,
          description: f.description,
          area: f.area,
          city: f.city,
          state: f.state,
          postedby: f.postedby,
          userid: f.userid,
          bedroom: f.bedroom,
          bathroom: f.bathroom,
          furnished: f.furnished,
          construction_status: f.construction_status,
          buid_area: f.buid_area,
          carpet_area: f.carpet_area,
          t_floor: f.t_floor,
          floor_no: f.floor_no,
          car_parking: f.car_parking,
          facing: f.facing,
          project_name: f.project_name,
          ad_id: f.ad_id,
          plot_area: f.plot_area,
          length: f.length,
          breadth: f.breadth,
          maintenance: f.maintenance,
          washroom: f.washroom,
          meals_included: f.meals_included,
          bachelor: f.bachelor,
          brand: f.brand,
          model: f.model,
          type: f.type,
          year: f.year,
          active: f.active,
          feature: f.feature,
          approve: f.approve,
          subscription: f.subscription,
          subscriptiondate: f.subscriptiondate,
          subscriptionvalidupto: f.subscriptionvalidupto,
          subscriptionvalidity: f.subscriptionvalidity,
          subscriptionvalidityremaining: f.subscriptionvalidityremaining,
          subscriptiondays: f.subscriptiondays,
          subscriptionamount: f.subscriptionamount,
          booster: true,
          boostertime: time,
          boosterdays: 28,
          boosterdate: orderdate,
          boosterenddate: futureOrderDate,
          boosterremaining: 28,
          boosterprice: "50",
          block: f.block,
          field: f.field,
        };
        console.log(datas);

        await db
          .collection("advertisement")
          .update(f.id, datas)
          .then(() => {
            Message({
              showClose: true,
              message: "Saved Successfuly!",
              type: "success",
            });
            self.getData();
          })
          .catch(() => {
            Message({
              showClose: true,
              message: "Something went wrong!",
              type: "warning",
            });
          });
      }
    },
  },
};
</script>

<style scoped>
.red {
  border: 1px solid red;
}
.btn1.highlighted {
  border: 1px solid black;
}
p {
  padding: 0;
  margin: 0;
  line-height: 1.5;
  font-size: 0.9rem;
}
.prod {
  width: 100%;
}
.box {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 10px;
}
.boxin {
  width: 95%;
  height: 95%;

  display: flex;
  gap: 10px;
}
.imgdiv {
  width: 7rem;
  aspect-ratio: 1/1;
  overflow: hidden;
}
.textdiv {
  width: auto;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.left {
  flex: 0 0 30%;
  max-width: 30%;
}
.right {
  flex: 0 0 65%;
  max-width: 65%;
}
.icondiv {
  width: 6rem;
  height: 6rem;
  margin: 10px auto;
  border-radius: 50px;
  overflow: hidden;
}
.icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.btn {
  width: 80%;
  height: 3rem;
  margin: 0 auto;
  background-color: #000;
  border: 1px solid black;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn1 {
  width: 80%;
  margin: 10px auto;
  height: 3rem;
  background-color: transparent;
  border: 1px solid rgb(114, 114, 114);
  border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  opacity: 0.9;
}
</style>
