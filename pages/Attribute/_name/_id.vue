<template>
  <div style="padding-top: 1rem">
    <Attributesbooks v-if="category == 'sqwm8wliyc3lz8w'" />
    <Attributesarts v-if="category == '6jgi1errl3ljzqy'" />
    <Attributesfashion v-if="category == 'hmk0wy62b2d1luv'" />
    <Attributesbikes v-if="category == 'vs3c6py22aunkw7'" />
    <Attributescar v-if="category == 'f0c6r7vo55phv0o'" />
    <Attributescommercial v-if="category == '7yuipcyk0zk2e12'" />
    <Attributeselectronics v-if="category == 'h2rsa1co12r9uk1'" />
    <Attributesfurniture v-if="category == 'z9pushonocv1qv7'" />
    <Attributesmobile v-if="category == 'iwy6otn2n6seyvl'" />
    <Attributesrent v-if="category == '940o78vlv2cffxe'" />
    <Attributesservice v-if="category == 'awtz39lyq5bmbeg'" />
    <Attributespg
      v-if="
        category == '4hycgticun06e5v' &&
        subcategory == 'Paying Guests, Guest Houses & Homestays'
      "
    />
    <Attributessellland
      v-if="category == '4hycgticun06e5v' && subcategory == 'Land & Plots'"
    />
    <attsaleapp
      v-if="
        category == '4hycgticun06e5v' &&
        subcategory == 'For Sale: Houses & Apartments'
      "
    />
    <Attributesrentap
      v-if="
        category == '4hycgticun06e5v' &&
        subcategory == 'For Rent: Houses & Apartments'
      "
    />
    <Attributessellshop
      v-if="
        category == '4hycgticun06e5v' &&
        subcategory == 'For Sale: Shops & Offices'
      "
    />
    <Attributesrentshop
      v-if="
        category == '4hycgticun06e5v' &&
        subcategory == 'For Rent: Shops & Offices'
      "
    />
  </div>
</template>

<script>
import { db, path } from "~/plugins/pocketBase";
import { Message } from "element-ui";
import Attributesbikes from "../../../components/AddAds/Attributesbikes.vue";
import Attributesbooks from "../../../components/AddAds/Attributesbooks.vue";
import Attributesarts from "../../../components/AddAds/Attributesarts.vue";
import Attributesfashion from "../../../components/AddAds/Attributesfashion.vue";
import Attributescar from "../../../components/AddAds/Attributescar.vue";
import Attributescommercial from "../../../components/AddAds/Attributescommercial.vue";
import Attributeselectronics from "../../../components/AddAds/Attributeselectronics.vue";
import Attributesfurniture from "../../../components/AddAds/Attributesfurniture.vue";
import Attributesmobile from "../../../components/AddAds/Attributesmobile.vue";
import Attributesrent from "../../../components/AddAds/Attributesrent.vue";
import Attributesservice from "../../../components/AddAds/Attributesservice.vue";
import Attributespg from "../../../components/AddAds/property/Attributespg.vue";
import Attributessellland from "../../../components/AddAds/property/Attributessellland.vue";
import attsaleapp from "../../../components/AddAds/property/attsaleapp.vue";
import Attributesrentap from "../../../components/AddAds/property/Attributesrentap.vue";
import Attributessellshop from "../../../components/AddAds/property/Attributessellshop.vue";
import Attributesrentshop from "../../../components/AddAds/property/Attributesrentshop.vue";
export default {
  components: {
    Attributesbikes,
    Attributescar,
    Attributescommercial,
    Attributeselectronics,
    Attributesfurniture,
    Attributesmobile,
    Attributesrent,
    Attributesservice,
    Attributespg,
    Attributessellland,
    attsaleapp,
    Attributesrentap,
    Attributesrentshop,
    Attributessellshop,
    Attributesfashion,
    Attributesbooks,
    Attributesarts,
  },
  layout: "default2",

  data() {
    return {
      category: "",
      subcategory: "",
    };
  },

  methods: {},
  mounted() {
    this.category = this.$route.params.name;

    this.subcategory = this.$route.params.id;
  },
};
</script>

<style scoped>
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
