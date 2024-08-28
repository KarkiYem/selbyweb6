<template>
  <div>
    <propapps
      v-if="name == 'Properties' && subname == 'For Sale: Houses & Apartments'"
    />
    <propappr
      v-if="name == 'Properties' && subname == 'For Rent: Houses & Apartments'"
    />
    <proppg
      v-if="
        name == 'Properties' &&
        subname == 'Paying Guests, Guest Houses & Homestays'
      "
    />
    <proplps v-if="name == 'Properties' && subname == 'Land & Plots'" />
    <propshops
      v-if="name == 'Properties' && subname == 'For Sale: Shops & Offices'"
    />
    <propshopr
      v-if="name == 'Properties' && subname == 'For Rent: Shops & Offices'"
    />
    <comericial v-if="name == 'Commercial Vehicles'" />

    <electrical v-if="name == 'Electronic Appliances'" />
    <furniture v-if="name == 'Furniture'" />
    <bike v-if="name == 'Bikes'" />
    <car v-if="name == 'Cars'" />
    <mobile v-if="name == 'Mobiles and Tablets'" />
    <rent v-if="name == 'Rent'" />
    <service v-if="name == 'Services'" />
    <books v-if="name == 'Books, Sports and Hobbies'" />
    <arts v-if="name == 'Arts & Crafts'" />
    <fashion v-if="name == 'Fashion'" />
  </div>
</template>

<script>
import Arts from "../../../../components/Details/Arts.vue";
import Bike from "../../../../components/Details/Bike.vue";
import Bikecar from "../../../../components/Details/Bikecar.vue";
import Books from "../../../../components/Details/Books.vue";
import Comericial from "../../../../components/Details/Comericial.vue";
import Fashion from "../../../../components/Details/Fashion.vue";
import Furniture from "../../../../components/Details/Furniture.vue";
import Mobile from "../../../../components/Details/mobile.vue";
import Propappr from "../../../../components/Details/Propappr.vue";
import Propapps from "../../../../components/Details/Propapps.vue";
import Proplps from "../../../../components/Details/Proplps.vue";
import Proppg from "../../../../components/Details/Proppg.vue";
import Propshopr from "../../../../components/Details/Propshopr.vue";
import Propshops from "../../../../components/Details/Propshops.vue";
import Car from "../../../../components/Details/Car.vue";
import Rent from "../../../../components/Details/Rent.vue";
import Service from "../../../../components/Details/Service.vue";
export default {
  components: {
    Bikecar,
    Mobile,
    Service,
    Proplps,
    Propapps,
    Propappr,
    Proppg,
    Propshops,
    Propshopr,
    Comericial,
    Furniture,
    Bike,
    Car,
    Rent,
    Books,
    Arts,
    Fashion,
  },
  data() {
    return {
      name: "",
      subname: "",
    };
  },
  mounted() {
    this.name = this.$route.params.name;
    this.subname = this.$route.params.subname;
  },
};
</script>

<style scoped></style>
