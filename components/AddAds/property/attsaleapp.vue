<template>
  <div style="padding-top: 1rem">
    <div class="container" style="border: 1px solid gray">
      <p>{{ model.category }} /{{ model.subcategory }}</p>
      <p @click="back()">change</p>
      <hr />
      <p>INCLUDE SOME DETAILS</p>

      <p>Add Title</p>
      <el-input
        style="width: 21%"
        placeholder="Enter Title"
        v-model="model.name"
      ></el-input>

      <p>Bathroom *</p>

      <div class="fl">
        <div
          class="capsule"
          v-for="(i, j) in cat33"
          :key="j"
          @click="transmission1(i)"
        >
          <span>{{ i }}</span>
        </div>
      </div>
      <p>Bedroom *</p>

      <div class="fl">
        <div
          class="capsule"
          v-for="(i, j) in cat33"
          :key="j"
          @click="transmission2(i)"
        >
          <span>{{ i }}</span>
        </div>
      </div>
      <p>Furnish *</p>

      <div class="fl">
        <div
          class="capsule"
          v-for="(i, j) in fur"
          :key="j"
          @click="transmission3(i)"
        >
          <span>{{ i }}</span>
        </div>
      </div>
      <p>Contruction Status *</p>

      <div class="fl">
        <div
          class="capsule"
          v-for="(i, j) in construction"
          :key="j"
          @click="transmission4(i)"
        >
          <span>{{ i }}</span>
        </div>
      </div>
      <p>Build Area</p>
      <el-input
        style="width: 21%"
        placeholder="Enter Build Area"
        v-model="model.buid_area"
      ></el-input>
      <p>Carpet Area</p>
      <el-input
        style="width: 21%"
        placeholder="Enter Carpet area"
        v-model="model.carpet_area"
      ></el-input>
      <p>Total Floor</p>
      <el-input
        style="width: 21%"
        placeholder="Enter total floor"
        v-model="model.t_floor"
      ></el-input>
      <p>Floor No</p>
      <el-input
        style="width: 21%"
        placeholder="Enter floor no"
        v-model="model.floor_no"
      ></el-input>
      <p>Car Parking</p>
      <div class="fl">
        <div
          class="capsule"
          v-for="(i, j) in carpark"
          :key="j"
          @click="transmission6(i)"
        >
          <span>{{ i }}</span>
        </div>
      </div>
      <p>Facing</p>
      <div class="fl">
        <div
          class="capsule"
          v-for="(i, j) in face"
          :key="j"
          @click="transmission5(i)"
        >
          <span>{{ i }}</span>
        </div>
      </div>
      <p>listed By</p>
      <div class="fl">
        <div
          class="capsule"
          v-for="(i, j) in list"
          :key="j"
          @click="transmission7(i)"
        >
          <span>{{ i }}</span>
        </div>
      </div>
      <p>Project Name</p>
      <el-input
        style="width: 21%"
        placeholder="Enter project name"
        v-model="model.project_name"
      ></el-input>
      <p>Type</p>
      <el-input
        style="width: 21%"
        placeholder="Enter type"
        v-model="model.type"
      ></el-input>
      <p>State</p>
      <el-input
        style="width: 21%"
        placeholder="Enter state"
        v-model="model.state"
      ></el-input>
      <p>City</p>
      <el-input
        style="width: 21%"
        placeholder="Enter city"
        v-model="model.city"
      ></el-input>
      <p>Area</p>
      <el-input
        style="width: 21%"
        placeholder="Enter Area"
        v-model="model.area"
      ></el-input>

      <p>Description</p>
      <el-input
        type="textarea"
        style="width: 21%"
        :rows="2"
        placeholder="Description"
        v-model="model.description"
      >
      </el-input>
      <hr />
      <p>Add Price</p>
      <el-input
        style="width: 21%"
        placeholder="Enter price"
        v-model="model.price"
      ></el-input>
      <p>Upload Upto 10 Photos</p>
      <div class="fl2">
        <input
          type="file"
          @change="filesChange1"
          accept=".jpg,.png,.jpeg,.webp"
        />
        <div class="imgdiv" v-if="link != ''">
          <img class="img" :src="link" />
        </div>
      </div>
      <button class="btn" @click="firstFormSubmit">save</button>
    </div>
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
import { Message } from "element-ui";
export default {
  layout: "default2",

  data() {
    return {
      validated: false,
      path1: "",
      seen: true,
      se: true,
      sin: true,
      model: {
        name: "",
        category: "Properties",
        subcategory: "For Sale: Houses & Apartments",
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
      link: "",
      cat: [],
      cat2: [],
      cat22: [],
      cat3: ["Admin"],
      face: [
        "east",
        "southeast",
        "south",
        "southwest",
        "west",
        "northwest",
        "north",
        "northeast",
      ],
      carpark: ["1", "2", "3", "3+"],
      cat33: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
      ],
      cat333: ["Petrol", "Diesel", "CNG", "Electric"],
      cat3333: ["Automatic", "Manual"],
      list: ["Builder", "Dealer", "Owner"],
      fur: ["Furnished", "Semi-Furnished", "Unfurnished"],
      construction: ["New launch", "Ready to move", "Under construction"],
      link: "",
      obj: null,
    };
  },

  methods: {
    transmission1(e) {
      var self = this;
      self.model.bathroom = e;
    },
    transmission2(e) {
      var self = this;
      self.model.bedroom = e;
    },
    transmission3(e) {
      var self = this;
      self.model.furnished = e;
    },
    transmission4(e) {
      var self = this;
      self.model.construction_status = e;
    },
    transmission5(e) {
      var self = this;
      self.model.facing = e;
    },
    transmission6(e) {
      var self = this;
      self.model.car_parking = e;
    },
    transmission7(e) {
      var self = this;
      self.model.postedby = e;
    },
    async firstFormSubmit() {
      var self = this;
      self.model.field = self.obj;

      let datee = new Date();
      let year = datee.getFullYear();
      let month = datee.getMonth() + 1;
      let dates = datee.getDate();
      self.model.date = `${dates}-${month}-${year}`;

      self.model.ad_id = Math.floor(
        10000000 + Math.random() * 90000000
      ).toString();

      if (self.model.name != "" && self.model.category != "") {
        self.sin = false;
        self.model.field = self.obj;
        const datas = {
          name: self.model.name,
          category: self.model.category,
          subcategory: self.model.subcategory,
          price: self.model.price,
          fueltype: self.model.fueltype,
          kmdriven: self.model.kmdriven,
          transmission: self.model.transmission,
          ownertype: self.model.ownertype,
          date: self.model.date,
          description: self.model.description,
          area: self.model.area,
          city: self.model.city,
          state: self.model.state,
          postedby: self.model.postedby,
          userid: self.model.userid,
          bedroom: self.model.bedroom,
          bathroom: self.model.bathroom,
          furnished: self.model.furnished,
          construction_status: self.model.construction_status,
          buid_area: self.model.buid_area,
          carpet_area: self.model.carpet_area,
          t_floor: self.model.t_floor,
          floor_no: self.model.floor_no,
          car_parking: self.model.car_parking,
          facing: self.model.facing,
          project_name: self.model.project_name,
          ad_id: self.model.ad_id,
          plot_area: self.model.plot_area,
          length: self.model.length,
          breadth: self.model.breadth,
          maintenance: self.model.maintenance,
          washroom: self.model.washroom,
          meals_included: self.model.meals_included,
          bachelor: self.model.bachelor,
          brand: self.model.brand,
          model: self.model.model,
          type: self.model.type,
          year: self.model.year,
          active: self.model.active,
          feature: self.model.feature,
          approve: self.model.approve,
          subscription: self.model.subscription,
          subscriptiondate: self.model.subscriptiondate,
          subscriptionvalidupto: self.model.subscriptionvalidupto,
          subscriptionvalidity: self.model.subscriptionvalidity,
          subscriptionvalidityremaining:
            self.model.subscriptionvalidityremaining,
          subscriptiondays: self.model.subscriptiondays,
          subscriptionamount: self.model.subscriptionamount,
          booster: self.model.booster,
          boosterdays: self.model.boosterdays,
          boosterdate: self.model.boosterdate,
          boosterenddate: self.model.boosterenddate,
          boosterprice: self.model.boosterprice,
          block: self.model.block,
          boostertime: self.model.boostertime,
          field: self.model.field,
        };

        await db
          .collection("advertisement")
          .create(datas)
          .then(() => {
            Message({
              showClose: true,
              message: "Saved Successfuly!",
              type: "success",
            });
            setTimeout(function () {
              window.close();
            }, 1500);
          })
          .catch(() => {
            self.sin = true;
            Message({
              showClose: true,
              message: "Something went wrong!",
              type: "warning",
            });
          });
      } else {
        Message({
          showClose: true,
          message: "All fields are required!",
          type: "warning",
        });
      }
    },
    async filesChange1(event) {
      try {
        const files = event.target.files;
        if (files.length !== 0) {
          this.link = "";
          const file = files[0];

          if (file instanceof File) {
            this.link = URL.createObjectURL(file);
            this.obj = file;
          } else {
            console.error("The selected file is not valid.");
          }
        }
      } catch (error) {
        console.error("Error creating object URL:", error);
      }
    },
    dlt() {
      var self = this;
      self.link = "";
      self.obj = null;
    },
    async getData3() {
      var self = this;
      self.path1 = path;
      self.cat = await db.collection("cat").getFullList({
        sort: "-created",
      });
      /*  self.getData4(); */
    },
    /*  async getData4() {
      var self = this;
      let acat2 = [];
      self.category = "Properties";
      acat2 = self.cat.filter((e) => e.name == self.category);
      console.log(acat2);
      self.cat22 = acat2[0].brand;
    }, */

    back() {
      history.back();
    },
  },
  mounted() {
    this.getData3();
    this.model.category = this.$route.params.name;

    this.model.subcategory = this.$route.params.id;
  },
};
</script>

<style scoped>
.btn {
  width: 50%;
  margin: 10px auto;
  height: 3rem;
  border-radius: 3px;
  background-color: #0d0b5f;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
}
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
