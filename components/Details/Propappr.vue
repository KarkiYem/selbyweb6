<template>
  <div>
    <div class="container fle">
      <div class="left">
        <div class="carousel">
          <img
            class="img"
            :src="`${path1}/api/files/advertisement/${data.id}/${data.field[0]}`"
          />
        </div>
        <div class="car2">
          <img
            v-for="i in data.field"
            :key="i"
            :src="`${path1}/api/files/advertisement/${data.id}/${i}`"
            class="car22"
          />
        </div>
        <div class="desc">
          <p>Details</p>
          <div class="description">
            <div class="desc2">
              <p>Project Name</p>
              <p>{{ data.project_name }}</p>
            </div>
            <div class="desc2">
              <p>Maintenance</p>
              <p>{{ data.maintenance }}</p>
            </div>
            <div class="desc2">
              <p>Bachelors</p>
              <p>{{ data.bachelor }}</p>
            </div>
            <div class="desc2">
              <p>Furnish</p>
              <p>{{ data.furnished }}</p>
            </div>
            <div class="desc2">
              <p>facing</p>
              <p>{{ data.facing }}</p>
            </div>
            <div class="desc2">
              <p>Build Area</p>
              <p>{{ data.build_area }}</p>
            </div>
            <div class="desc2">
              <p>Carpet Area</p>
              <p>{{ data.carpet_area }}</p>
            </div>
            <div class="desc2">
              <p>Total Floors</p>
              <p>{{ data.t_floor }}</p>
            </div>
            <div class="desc2">
              <p>Floors No</p>
              <p>{{ data.floor_no }}</p>
            </div>
            <div class="desc2">
              <p>Car Parking</p>
              <p>{{ data.car_parking }}</p>
            </div>
            <div class="desc2">
              <p>Bathroom</p>
              <p>{{ data.bathroom }}</p>
            </div>
            <div class="desc2">
              <p>Bedroom</p>
              <p>{{ data.bedroom }}</p>
            </div>
            <div class="desc2">
              <p>Type</p>
              <p>{{ data.type }}</p>
            </div>
          </div>
        </div>
        <div class="desc">
          <p>Description</p>
          <!--  <p>{{ data.year }}-{{ data.kmdriven }} kms</p> -->
          <p>
            {{ data.description }}
          </p>
        </div>
      </div>
      <div class="right">
        <div class="desc">
          <h3 style="font-weight: bold">Rs {{ data.price }}</h3>
          <!--  <p>{{ data.year }}-{{ data.kmdriven }} kms</p> -->
          <!--   <p>
            {{ data.model }}
          </p> -->
          <span style="display: flex; justify-content: space-around">
            <p>{{ data.area }},{{ data.city }}</p>
            <p>{{ data.date }}</p>
          </span>
        </div>
        <div class="desc">
          <h3>{{ data.postedby }}</h3>
          <!--   <h6>+91 6001XXXXXXX</h6> -->
          <button @click="goo(data)" class="btn">CHAT WITH SELLER</button>
        </div>
        <div class="desc">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114612.7287069236!2d91.62048226139089!3d26.14302516331027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436bde32!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1719917228603!5m2!1sen!2sin"
            height="350"
            style="width: 100%; border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
export default {
  data() {
    return {
      data: {
        name: "",
        category: "",
        subcategory: "",
        price: "",
        fueltype: "",
        kmdriven: "",
        transmission: "",
        ownertype: "",
        date: "",
        description: "",
        area: "",
        city: "",
        state: "",
        postedby: "",
        userid: "",
        bedroom: "",
        bathroom: "",
        furnished: "",
        construction_status: "",
        buid_area: "",
        carpet_area: "",
        t_floor: "",
        floor_no: "",
        car_parking: "",
        facing: "",
        project_name: "",
        ad_id: "",
        plot_area: "",
        length: "",
        breadth: "",
        maintenance: "",
        washroom: "",
        meals_included: "",
        bachelor: "",
        brand: "",
        model: "",
        type: "",
        year: "",
        active: true,
        feature: false,
        approve: false,
        subscription: false,
        subscriptiondate: "",
        subscriptionvalidupto: "",
        subscriptionvalidity: "",
        subscriptionvalidityremaining: "",
        subscriptiondays: "",
        subscriptionamount: "",
        booster: false,
        boosterdays: "",
        boosterdate: "",
        boosterenddate: "",
        boosterprice: "",
        block: false,
        boostertime: "",
        field: "",
      },
      path1: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      var self = this;
      let id = self.$route.params.id;
      self.path1 = path;
      self.data = await db.collection("advertisement").getOne(`${id}`, {});
    },
    async goo(e) {
      var self = this;
      const dataq = {
        person1: self.$store.state.phone,
        person2: e.userid,
        ad_id: e.ad_id,
        name1: "Selby User",
        name2: "Selby User",
        image: `${self.path1}/api/files/advertisement/${self.data.id}/${self.data.field}`,
      };

      const record = await db.collection("chat").create(dataq);
      self.$router.push("/Chat");
    },
  },
};
</script>

<style scoped>
.btn {
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  color: white;
  background-color: #04128b;
}
.desc {
  border: 1px solid gray;
  padding: 3px;
  margin-top: 5px;
}
.description {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.desc2 {
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fle {
  display: flex;
  justify-content: space-between;
}
.left {
  flex: 0 0 69%;
  max-width: 69%;
  height: fit-content;
}
.right {
  flex: 0 0 29%;
  max-width: 29%;
  height: fit-content;
}
.carousel {
  width: 100%;
  border: 1px solid gray;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.car2 {
  display: flex;
  margin-top: 1rem;
  border: 1px solid gray;
}
.car22 {
  width: 6rem;
  height: 4rem;
  overflow: hidden;
  margin: 3px;
  border: 2px solid rgb(28, 7, 95);
}
.img2 {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
@media screen and (max-width: 650px) {
  .fle {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .left {
    flex: 0 0 100%;
    max-width: 100%;
    height: fit-content;
  }
  .right {
    flex: 0 0 100%;
    max-width: 100%;
    height: fit-content;
  }
}
</style>
