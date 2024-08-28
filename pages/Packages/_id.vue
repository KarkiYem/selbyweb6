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
          <strong>{{ i.name }}</strong>
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
          @click="buy22(i)"
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
    <el-dialog title="Slect Plans" :visible.sync="dialogTableVisible">
      <div class="box">
        <div class="boxin" style="width: 100%">
          <div style="width: 60%">
            <p>
              <strong>{{ data.name }}</strong>
            </p>
            <p>
              Number of Ads - <button @click="minus(data.noofads)">-</button>
              {{ data.noofads }}
              <button @click="plus(data.noofads)">+</button>
            </p>
            <p>{{ data.validity }}</p>
            <p>
              <strong>₹{{ data.price }}</strong>
            </p>
            <p>
              <strong>₹{{ price }}</strong>
            </p>
            <p
              @click="buy2(data)"
              style="
                width: 40%;
                border: 1px solid #000;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              BUY
            </p>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
import { Message } from "element-ui";
export default {
  middleware: ["CheckUser"],
  data() {
    return {
      packages: [],
      data: {
        id: "",
        name: "",
        noofads: "",
        num: 1,
        price: "",
        validity: "",
      },
      dialogTableVisible: false,
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
      subcat: [],
      payment_id: "",

      frequency: "",
      price: 0,
    };
  },
  mounted() {
    this.getData1();
    this.getData11();
  },

  methods: {
    buy22(e) {
      this.data = e;
      this.price = e.price;
      this.dialogTableVisible = true;
    },
    plus(e) {
      this.data.noofads++;
      this.price = this.data.price * this.data.noofads;
    },
    minus(e) {
      if (e > 1) {
        this.data.noofads--;
        this.price = this.data.price * this.data.noofads;
      }
    },
    async getData11() {
      this.storing = await db
        .collection("users")
        .getFirstListItem(`phone = "${this.$store.state.phone}"`, {});
    },
    async getData1() {
      this.packages = await db.collection("subscription").getFullList({
        sort: "-created",
        filter: `name = "${this.$route.params.id}" `,
      });
      this.packages.forEach((e) => {
        e.num = 1;
      });
    },
    go1(e) {
      this.active = e;
    },
    buy2(e) {
      var self = this;
      console.log(e);
      let dop1 = [];
      dop1 = [...self.storing.subscription];
      for (let i = 0; i < dop1.length; i++) {
        self.subcat.push({
          amount: dop1[i].amount,
          totalamount: dop1[i].totalamount,
          category: dop1[i].category,
          catid: dop1[i].catid,
          noofpost: dop1[i].noofpost,
          noofpostremain: dop1[i].noofpostremain,
          validity: dop1[i].validity,
        });
      }
      self.subcat.push({
        amount: e.price,
        totalamount: self.price,
        category: e.name,
        noofpost: e.noofads,
        noofpostremain: e.noofads,
        validity: e.validity,
      });
      self.boost(e.price);
    },
    boost(e) {
      const self = this;
      const rzp_options = {
        key: "rzp_test_FKoWwhlrAUl0Ls",
        amount: e * 100,
        handler: function (response) {
          Message({
            showClose: true,
            message: "Payment Successful!",
            type: "success",
          });
          self.payment_id = response.razorpay_payment_id;
          self.postorder(e);
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
          name: "rahul",
          phone: "799723233",
        },
        theme: {
          color: "#667eea",
        },
      };
      const rzp1 = new Razorpay(rzp_options);
      rzp1.open();
    },
    async postorder(e) {
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
      let opp2 = self.subcat;

      if (self.payment_id !== null) {
        const datas = {
          username: self.storing.username,
          email: self.storing.email,
          emailVisibility: self.storing.emailVisibility,
          name: self.storing.name,
          phone: self.storing.phone,
          block: self.storing.block,
          subscription: JSON.stringify(opp2),
          active: self.storing.active,
        };

        await db
          .collection("users")
          .update(self.storing.id, datas)
          .then(() => {
            Message({
              showClose: true,
              message: "Saved Successfuly!",
              type: "success",
            });
            self.dialogTableVisible = false;
            history.back();
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
.box {
  width: 80%;
  margin: 0 auto;

  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 10px;
}
</style>
