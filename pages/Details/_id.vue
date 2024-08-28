<template>
  <div>
    <car
      :myProp="category"
      v-if="category == 'Cars' || category == 'Bikes' || category == 'Rent'"
    />
    <service
      :myProp="category"
      v-if="
        category == 'Services' ||
        category == 'Furniture' ||
        category == 'Books, Sports and Hobbies' ||
        category == 'Electronic Appliances' ||
        category == 'Arts & Crafts' ||
        category == 'Commercial Vehicles' ||
        category == 'Fashion'
      "
    />
    <mobile :myProp="category" v-if="category == 'Mobiles and Tablets'" />
    <property v-if="category == 'Properties'" />
    <nocategory v-if="category == 'search'" />
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
import Mobile from "../../components/Pagescategory/Mobile.vue";
import Car from "../../components/Pagescategory/Car.vue";
import Rent from "../../components/Pagescategory/Rent.vue";
import Service from "../../components/Pagescategory/Service.vue";
import Property from "../../components/Pagescategory/Property.vue";
import Nocategory from "../../components/Pagescategory/Nocategory.vue";
export default {
  components: { Car, Service, Mobile, Rent, Property, Nocategory },
  data() {
    return {
      category: "",
      filterdata: {},
    };
  },
  watch: {},
  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      var self = this;
      let id = self.$route.params.id;
      self.filterdata = await db
        .collection("cat")
        .getOne(`${id}`, {})
        .then((result) => {
          self.category = result.name;
        })
        .catch((err) => {
          self.category = "search";
        });
    },
  },
};
</script>

<style scoped>
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
